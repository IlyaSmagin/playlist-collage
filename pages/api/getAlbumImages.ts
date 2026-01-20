import type { NextApiRequest, NextApiResponse } from 'next';

export type Data = { [key: string]: Array<string> };

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
    console.log("inside");
    const tracksUrl = `https://spotify23.p.rapidapi.com/playlist_tracks/?id=${id}`;
    const resTrack = await fetch(tracksUrl, options).then(r => r.json() as Promise<{
        items: {
          track: {
            album: {
              images: { url: string }[];
              artists: { id: string }[];
            };
          };
        }[];
    }> );
    
    console.log("after fetch"+JSON.stringify(resTrack));

    let ids = resTrack.items.reduce((acc, track, index) => {
      if (index < 40) {
        return acc + track.track.album.artists[0].id + ',';
      }
      return acc;
    }, '');

    const artistsUrl = `https://spotify23.p.rapidapi.com/artists/?ids=${ids.slice(0, -1)}`;
    const resArtist = await fetch(artistsUrl, options).then(r => r.json() as Promise<{
      artists: {
        images: { url: string }[];
      }[];
    }> );

    const result: Data = {
      albums: resTrack.items.map(track => track.track.album.images[0].url),
      artists: resArtist.artists.map(artist => artist.images[0].url),
    };

    res.status(200).json(result);
  } catch (error) {
    console.error('API fetch error:', error);
    res.status(500).json({} as Data);
  }
}