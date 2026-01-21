import type { NextApiRequest, NextApiResponse } from 'next';

export type Data = { [key: string]: Array<string> };

const makeRange = (n: number) => Array.from({ length: n }, (_, i) => i + 1);

const fallbackData: Data = {
  albums: makeRange(25).map(
    (i) => `/fallback/albums/${i}.jpg`
  ),
  artists: makeRange(16).map(
    (i) => `/fallback/artists/${i}.jpg`
  ),
};

interface SpotifyTrackItem {
  track: {
    album: {
      images: { url: string }[];
      artists: { id: string }[];
    };
  };
}

interface SpotifyTracksResponse {
  tracks: {
    items: SpotifyTrackItem[];
  };
}

interface SpotifyArtist {
  images: { url: string }[];
}

interface SpotifyArtistsResponse {
  artists: SpotifyArtist[];
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method !== 'GET') {
    return res.status(405).json({} as Data);
  }

  const { id } = req.query;
  if (typeof id !== 'string') {
    console.log("no id is provided")
    return res.status(400).json({} as Data);
  }

  const options: RequestInit = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': process.env.RAPIDAPI_KEY!,
      'X-RapidAPI-Host': process.env.RAPIDAPI_HOST!,
    },
  };

  try {
  const tracksUrl = `https://spotify23.p.rapidapi.com/playlist_tracks/?id=${id}`;
  const trackResponse = await fetch(tracksUrl, options);
  
  if (trackResponse.status === 429) {
    // Fallback: Rate limited - return demo data
    return res.status(200).json(fallbackData);
  }

  if (!trackResponse.ok) {
    throw new Error(`Tracks fetch failed: ${trackResponse.status}`);
  }

  const resTrack: SpotifyTracksResponse = await trackResponse.json();

  let ids = resTrack.tracks.items.reduce((acc, track, index) => {
    if (index < 40) {
      return acc + track.track.album.artists[0].id + ',';
    }
    return acc;
  }, '');

  const artistsUrl = `https://spotify23.p.rapidapi.com/artists/?ids=${ids.slice(0, -1)}`;
  const artistResponse = await fetch(artistsUrl, options);
  
  if (artistResponse.status === 429) {
    // Fallback here too if needed, but primary check is on first call
    return res.status(200).json(fallbackData);
  }

  if (!artistResponse.ok) {
    throw new Error(`Artists fetch failed: ${artistResponse.status}`);
  }

  const resArtist: SpotifyArtistsResponse  = await artistResponse.json();

  const result: Data = {
    albums: resTrack.tracks.items.map(track => track.track.album.images[0].url),
    artists: resArtist.artists.map(artist => artist.images[0].url),
  };

  res.status(200).json(result);
} catch (error) {
  console.error('API fetch error:', error);
  res.status(200).json(fallbackData); // Return 200 with demo data for demo resilience
}

}