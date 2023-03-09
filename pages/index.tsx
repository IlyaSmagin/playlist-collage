import Head from 'next/head'
import { useState } from 'react'
import useSWR from "swr"
import { ReactImageMosaic } from 'react-image-mosaic'


const later = (url:string) =>
    new Promise(resolve => setTimeout(resolve, 5000, ({
  "collaborative": false,
  "description": "Винил в посылке, лучше чем текст из картинки",
  "external_urls": {
    "spotify": "https://open.spotify.com/playlist/6v2sm7e2dwhsqjoovYNaJR"
  },
  "followers": {
    "href": null,
    "total": 0
  },
  "id": "6v2sm7e2dwhsqjoovYNaJR",
  "images": [
    {
      "height": null,
      "url": "https://i.scdn.co/image/ab67706c0000bebb0f4eeb5436b44433000d9e7e",
      "width": null
    }
  ],
  "name": "Спотифай по почте",
  "owner": {
    "display_name": "La_la_code",
    "external_urls": {
      "spotify": "https://open.spotify.com/user/yrqjeis7sh8it5uztvo0dl8s5"
    },
    "id": "yrqjeis7sh8it5uztvo0dl8s5",
    "type": "user",
    "uri": "spotify:user:yrqjeis7sh8it5uztvo0dl8s5"
  },
  "primary_color": null,
  "public": false,
  "sharing_info": {
    "share_id": "7NoUFKmeSvqDxekrppPlLg",
    "share_url": "https://open.spotify.com/playlist/6v2sm7e2dwhsqjoovYNaJR?si=7NoUFKmeSvqDxekrppPlLg",
    "uri": "spotify:playlist:6v2sm7e2dwhsqjoovYNaJR"
  },
  "snapshot_id": "NjQsM2Q4ZmMxNWZhOTU2YmRkYjExNWI3MjQwMjk3ODZiZTQyMDg4MjgxMw==",
  "tracks": {
    "items": [
      {
        "added_at": "2022-04-26T19:42:22Z",
        "added_by": {
          "external_urls": {
            "spotify": "https://open.spotify.com/user/yrqjeis7sh8it5uztvo0dl8s5"
          },
          "id": "yrqjeis7sh8it5uztvo0dl8s5",
          "type": "user",
          "uri": "spotify:user:yrqjeis7sh8it5uztvo0dl8s5"
        },
        "is_local": false,
        "primary_color": null,
        "sharing_info": {
          "share_id": "PRF9suNFR5KY1t2PaITgdQ",
          "share_url": "https://open.spotify.com/track/7pBsquIkbED6W6uSQJGbkn?si=PRF9suNFR5KY1t2PaITgdQ",
          "uri": "spotify:track:7pBsquIkbED6W6uSQJGbkn"
        },
        "track": {
          "album": {
            "album_type": "compilation",
            "artists": [
              {
                "external_urls": {
                  "spotify": "https://open.spotify.com/artist/0LyfQWJT6nXafLPZqxe9Of"
                },
                "id": "0LyfQWJT6nXafLPZqxe9Of",
                "name": "Various Artists",
                "type": "artist",
                "uri": "spotify:artist:0LyfQWJT6nXafLPZqxe9Of"
              }
            ],
            "external_urls": {
              "spotify": "https://open.spotify.com/album/35s58BRTGAEWztPo9WqCIs"
            },
            "id": "35s58BRTGAEWztPo9WqCIs",
            "images": [
              {
                "height": 640,
                "url": "https://i.scdn.co/image/ab67616d0000b273e2e352d89826aef6dbd5ff8f",
                "width": 640
              },
              {
                "height": 300,
                "url": "https://i.scdn.co/image/ab67616d00001e02e2e352d89826aef6dbd5ff8f",
                "width": 300
              },
              {
                "height": 64,
                "url": "https://i.scdn.co/image/ab67616d00004851e2e352d89826aef6dbd5ff8f",
                "width": 64
              }
            ],
            "name": "Spider-Man: Into the Spider-Verse (Soundtrack From & Inspired by the Motion Picture)",
            "release_date": "2018-12-14",
            "release_date_precision": "day",
            "total_tracks": 13,
            "type": "album",
            "uri": "spotify:album:35s58BRTGAEWztPo9WqCIs"
          },
          "artists": [
            {
              "external_urls": {
                "spotify": "https://open.spotify.com/artist/68kEuyFKyqrdQQLLsmiatm"
              },
              "id": "68kEuyFKyqrdQQLLsmiatm",
              "name": "Vince Staples",
              "type": "artist",
              "uri": "spotify:artist:68kEuyFKyqrdQQLLsmiatm"
            },
            {
              "external_urls": {
                "spotify": "https://open.spotify.com/artist/3QYRu7CWJylnxkvbTS3ovC"
              },
              "id": "3QYRu7CWJylnxkvbTS3ovC",
              "name": "Richie Kohan",
              "type": "artist",
              "uri": "spotify:artist:3QYRu7CWJylnxkvbTS3ovC"
            }
          ],
          "disc_number": 1,
          "duration_ms": 211360,
          "episode": false,
          "explicit": false,
          "external_ids": {
            "isrc": "USUM71707052"
          },
          "external_urls": {
            "spotify": "https://open.spotify.com/track/7pBsquIkbED6W6uSQJGbkn"
          },
          "id": "7pBsquIkbED6W6uSQJGbkn",
          "is_local": false,
          "is_playable": true,
          "name": "Home",
          "popularity": 55,
          "preview_url": "https://p.scdn.co/mp3-preview/814e96d99c727bc8b878ec0347d11f86bd80cf13?cid=d8a5ed958d274c2e8ee717e6a4b0971d",
          "track": true,
          "track_number": 13,
          "type": "track",
          "uri": "spotify:track:7pBsquIkbED6W6uSQJGbkn"
        },
        "video_thumbnail": {
          "url": null
        }
      },
      {
        "added_at": "2022-04-26T19:42:57Z",
        "added_by": {
          "external_urls": {
            "spotify": "https://open.spotify.com/user/yrqjeis7sh8it5uztvo0dl8s5"
          },
          "id": "yrqjeis7sh8it5uztvo0dl8s5",
          "type": "user",
          "uri": "spotify:user:yrqjeis7sh8it5uztvo0dl8s5"
        },
        "is_local": false,
        "primary_color": null,
        "sharing_info": {
          "share_id": "YSlMYUVMS-Szu8aPDwU1TQ",
          "share_url": "https://open.spotify.com/track/2QOB5UiRKggr2j9uMD3GYK?si=YSlMYUVMS-Szu8aPDwU1TQ",
          "uri": "spotify:track:2QOB5UiRKggr2j9uMD3GYK"
        },
        "track": {
          "album": {
            "album_type": "album",
            "artists": [
              {
                "external_urls": {
                  "spotify": "https://open.spotify.com/artist/0eRbECAGCLLiTyVXPBRexU"
                },
                "id": "0eRbECAGCLLiTyVXPBRexU",
                "name": "Jon Batiste",
                "type": "artist",
                "uri": "spotify:artist:0eRbECAGCLLiTyVXPBRexU"
              }
            ],
            "external_urls": {
              "spotify": "https://open.spotify.com/album/6kHFkPvL2X3rZPuS3CEMUE"
            },
            "id": "6kHFkPvL2X3rZPuS3CEMUE",
            "images": [
              {
                "height": 640,
                "url": "https://i.scdn.co/image/ab67616d0000b273185c1d65f3b51465282c1a68",
                "width": 640
              },
              {
                "height": 300,
                "url": "https://i.scdn.co/image/ab67616d00001e02185c1d65f3b51465282c1a68",
                "width": 300
              },
              {
                "height": 64,
                "url": "https://i.scdn.co/image/ab67616d00004851185c1d65f3b51465282c1a68",
                "width": 64
              }
            ],
            "name": "WE ARE",
            "release_date": "2021-03-19",
            "release_date_precision": "day",
            "total_tracks": 13,
            "type": "album",
            "uri": "spotify:album:6kHFkPvL2X3rZPuS3CEMUE"
          },
          "artists": [
            {
              "external_urls": {
                "spotify": "https://open.spotify.com/artist/0eRbECAGCLLiTyVXPBRexU"
              },
              "id": "0eRbECAGCLLiTyVXPBRexU",
              "name": "Jon Batiste",
              "type": "artist",
              "uri": "spotify:artist:0eRbECAGCLLiTyVXPBRexU"
            }
          ],
          "disc_number": 1,
          "duration_ms": 178289,
          "episode": false,
          "explicit": false,
          "external_ids": {
            "isrc": "USUG12004385"
          },
          "external_urls": {
            "spotify": "https://open.spotify.com/track/2QOB5UiRKggr2j9uMD3GYK"
          },
          "id": "2QOB5UiRKggr2j9uMD3GYK",
          "is_local": false,
          "is_playable": true,
          "name": "FREEDOM",
          "popularity": 56,
          "preview_url": "https://p.scdn.co/mp3-preview/691d3c3a462cbcc9d2bbdc30b503f6ba3661822a?cid=d8a5ed958d274c2e8ee717e6a4b0971d",
          "track": true,
          "track_number": 10,
          "type": "track",
          "uri": "spotify:track:2QOB5UiRKggr2j9uMD3GYK"
        },
        "video_thumbnail": {
          "url": null
        }
      },
      {
        "added_at": "2022-04-26T19:43:15Z",
        "added_by": {
          "external_urls": {
            "spotify": "https://open.spotify.com/user/yrqjeis7sh8it5uztvo0dl8s5"
          },
          "id": "yrqjeis7sh8it5uztvo0dl8s5",
          "type": "user",
          "uri": "spotify:user:yrqjeis7sh8it5uztvo0dl8s5"
        },
        "is_local": false,
        "primary_color": null,
        "sharing_info": {
          "share_id": "7Wf1H-hzTwCB5Xow-OHqJw",
          "share_url": "https://open.spotify.com/track/56TEGs0vJWOENuIaPrkdU7?si=7Wf1H-hzTwCB5Xow-OHqJw",
          "uri": "spotify:track:56TEGs0vJWOENuIaPrkdU7"
        },
        "track": {
          "album": {
            "album_type": "single",
            "artists": [
              {
                "external_urls": {
                  "spotify": "https://open.spotify.com/artist/2sriRQRt36DnfHtD68zZlj"
                },
                "id": "2sriRQRt36DnfHtD68zZlj",
                "name": "Dorian Concept",
                "type": "artist",
                "uri": "spotify:artist:2sriRQRt36DnfHtD68zZlj"
              }
            ],
            "external_urls": {
              "spotify": "https://open.spotify.com/album/2Bfoe4fd0HVhDjch8C0voh"
            },
            "id": "2Bfoe4fd0HVhDjch8C0voh",
            "images": [
              {
                "height": 640,
                "url": "https://i.scdn.co/image/ab67616d0000b273c9c2fd46737a73edbef09fd8",
                "width": 640
              },
              {
                "height": 300,
                "url": "https://i.scdn.co/image/ab67616d00001e02c9c2fd46737a73edbef09fd8",
                "width": 300
              },
              {
                "height": 64,
                "url": "https://i.scdn.co/image/ab67616d00004851c9c2fd46737a73edbef09fd8",
                "width": 64
              }
            ],
            "name": "Toothbrush / Booth Thrust",
            "release_date": "2019-08-02",
            "release_date_precision": "day",
            "total_tracks": 2,
            "type": "album",
            "uri": "spotify:album:2Bfoe4fd0HVhDjch8C0voh"
          },
          "artists": [
            {
              "external_urls": {
                "spotify": "https://open.spotify.com/artist/2sriRQRt36DnfHtD68zZlj"
              },
              "id": "2sriRQRt36DnfHtD68zZlj",
              "name": "Dorian Concept",
              "type": "artist",
              "uri": "spotify:artist:2sriRQRt36DnfHtD68zZlj"
            }
          ],
          "disc_number": 1,
          "duration_ms": 197503,
          "episode": false,
          "explicit": false,
          "external_ids": {
            "isrc": "US25X1900981"
          },
          "external_urls": {
            "spotify": "https://open.spotify.com/track/56TEGs0vJWOENuIaPrkdU7"
          },
          "id": "56TEGs0vJWOENuIaPrkdU7",
          "is_local": false,
          "is_playable": true,
          "name": "Booth Thrust",
          "popularity": 25,
          "preview_url": "https://p.scdn.co/mp3-preview/d80f3254047af3231cbac8383ee777e7883788c0?cid=d8a5ed958d274c2e8ee717e6a4b0971d",
          "track": true,
          "track_number": 2,
          "type": "track",
          "uri": "spotify:track:56TEGs0vJWOENuIaPrkdU7"
        },
        "video_thumbnail": {
          "url": null
        }
      },
      {
        "added_at": "2022-04-26T19:43:37Z",
        "added_by": {
          "external_urls": {
            "spotify": "https://open.spotify.com/user/yrqjeis7sh8it5uztvo0dl8s5"
          },
          "id": "yrqjeis7sh8it5uztvo0dl8s5",
          "type": "user",
          "uri": "spotify:user:yrqjeis7sh8it5uztvo0dl8s5"
        },
        "is_local": false,
        "primary_color": null,
        "sharing_info": {
          "share_id": "y4UVz2bhSdeM-iRAlRTr1A",
          "share_url": "https://open.spotify.com/track/6R911DBgp2NuIbOFcdhqyL?si=y4UVz2bhSdeM-iRAlRTr1A",
          "uri": "spotify:track:6R911DBgp2NuIbOFcdhqyL"
        },
        "track": {
          "album": {
            "album_type": "album",
            "artists": [
              {
                "external_urls": {
                  "spotify": "https://open.spotify.com/artist/43mWhBXSflupNLuNjM5vff"
                },
                "id": "43mWhBXSflupNLuNjM5vff",
                "name": "Soulwax",
                "type": "artist",
                "uri": "spotify:artist:43mWhBXSflupNLuNjM5vff"
              }
            ],
            "external_urls": {
              "spotify": "https://open.spotify.com/album/0ixwdleroFAl7fWqYZaSsA"
            },
            "id": "0ixwdleroFAl7fWqYZaSsA",
            "images": [
              {
                "height": 640,
                "url": "https://i.scdn.co/image/ab67616d0000b273a00e6e7dc97e6656de282c73",
                "width": 640
              },
              {
                "height": 300,
                "url": "https://i.scdn.co/image/ab67616d00001e02a00e6e7dc97e6656de282c73",
                "width": 300
              },
              {
                "height": 64,
                "url": "https://i.scdn.co/image/ab67616d00004851a00e6e7dc97e6656de282c73",
                "width": 64
              }
            ],
            "name": "FROM DEEWEE",
            "release_date": "2017-03-24",
            "release_date_precision": "day",
            "total_tracks": 12,
            "type": "album",
            "uri": "spotify:album:0ixwdleroFAl7fWqYZaSsA"
          },
          "artists": [
            {
              "external_urls": {
                "spotify": "https://open.spotify.com/artist/43mWhBXSflupNLuNjM5vff"
              },
              "id": "43mWhBXSflupNLuNjM5vff",
              "name": "Soulwax",
              "type": "artist",
              "uri": "spotify:artist:43mWhBXSflupNLuNjM5vff"
            }
          ],
          "disc_number": 1,
          "duration_ms": 209453,
          "episode": false,
          "explicit": false,
          "external_ids": {
            "isrc": "GBENL1701813"
          },
          "external_urls": {
            "spotify": "https://open.spotify.com/track/6R911DBgp2NuIbOFcdhqyL"
          },
          "id": "6R911DBgp2NuIbOFcdhqyL",
          "is_local": false,
          "is_playable": true,
          "name": "Is It Always Binary",
          "popularity": 39,
          "preview_url": "https://p.scdn.co/mp3-preview/0d23af5734bf0e19cfe21b365b31ba8f74ecafa7?cid=d8a5ed958d274c2e8ee717e6a4b0971d",
          "track": true,
          "track_number": 5,
          "type": "track",
          "uri": "spotify:track:6R911DBgp2NuIbOFcdhqyL"
        },
        "video_thumbnail": {
          "url": null
        }
      },
      {
        "added_at": "2022-04-26T19:44:15Z",
        "added_by": {
          "external_urls": {
            "spotify": "https://open.spotify.com/user/yrqjeis7sh8it5uztvo0dl8s5"
          },
          "id": "yrqjeis7sh8it5uztvo0dl8s5",
          "type": "user",
          "uri": "spotify:user:yrqjeis7sh8it5uztvo0dl8s5"
        },
        "is_local": false,
        "primary_color": null,
        "sharing_info": {
          "share_id": "-OfncfNxStyji5MfHLZNDA",
          "share_url": "https://open.spotify.com/track/24FR8mXTaiGZPrxnkf1kcP?si=-OfncfNxStyji5MfHLZNDA",
          "uri": "spotify:track:24FR8mXTaiGZPrxnkf1kcP"
        },
        "track": {
          "album": {
            "album_type": "album",
            "artists": [
              {
                "external_urls": {
                  "spotify": "https://open.spotify.com/artist/4xRYI6VqpkE3UwrDrAZL8L"
                },
                "id": "4xRYI6VqpkE3UwrDrAZL8L",
                "name": "Logic",
                "type": "artist",
                "uri": "spotify:artist:4xRYI6VqpkE3UwrDrAZL8L"
              }
            ],
            "external_urls": {
              "spotify": "https://open.spotify.com/album/5pF05wJrbrIvqunE41vWP8"
            },
            "id": "5pF05wJrbrIvqunE41vWP8",
            "images": [
              {
                "height": 640,
                "url": "https://i.scdn.co/image/ab67616d0000b2731c76e29153f29cc1e1b2b434",
                "width": 640
              },
              {
                "height": 300,
                "url": "https://i.scdn.co/image/ab67616d00001e021c76e29153f29cc1e1b2b434",
                "width": 300
              },
              {
                "height": 64,
                "url": "https://i.scdn.co/image/ab67616d000048511c76e29153f29cc1e1b2b434",
                "width": 64
              }
            ],
            "name": "No Pressure",
            "release_date": "2020-07-24",
            "release_date_precision": "day",
            "total_tracks": 15,
            "type": "album",
            "uri": "spotify:album:5pF05wJrbrIvqunE41vWP8"
          },
          "artists": [
            {
              "external_urls": {
                "spotify": "https://open.spotify.com/artist/4xRYI6VqpkE3UwrDrAZL8L"
              },
              "id": "4xRYI6VqpkE3UwrDrAZL8L",
              "name": "Logic",
              "type": "artist",
              "uri": "spotify:artist:4xRYI6VqpkE3UwrDrAZL8L"
            }
          ],
          "disc_number": 1,
          "duration_ms": 265190,
          "episode": false,
          "explicit": false,
          "external_ids": {
            "isrc": "USUM72014339"
          },
          "external_urls": {
            "spotify": "https://open.spotify.com/track/24FR8mXTaiGZPrxnkf1kcP"
          },
          "id": "24FR8mXTaiGZPrxnkf1kcP",
          "is_local": false,
          "is_playable": true,
          "name": "Hit My Line",
          "popularity": 52,
          "preview_url": "https://p.scdn.co/mp3-preview/084c4b60476dc7a06c18f36075a630717bf1696c?cid=d8a5ed958d274c2e8ee717e6a4b0971d",
          "track": true,
          "track_number": 2,
          "type": "track",
          "uri": "spotify:track:24FR8mXTaiGZPrxnkf1kcP"
        },
        "video_thumbnail": {
          "url": null
        }
      },
      {
        "added_at": "2022-04-26T19:44:21Z",
        "added_by": {
          "external_urls": {
            "spotify": "https://open.spotify.com/user/yrqjeis7sh8it5uztvo0dl8s5"
          },
          "id": "yrqjeis7sh8it5uztvo0dl8s5",
          "type": "user",
          "uri": "spotify:user:yrqjeis7sh8it5uztvo0dl8s5"
        },
        "is_local": false,
        "primary_color": null,
        "sharing_info": {
          "share_id": "3NxnOgoVTMe17oy2xMdDTg",
          "share_url": "https://open.spotify.com/track/3PuOtG0idTNTpDA1ZHi7l4?si=3NxnOgoVTMe17oy2xMdDTg",
          "uri": "spotify:track:3PuOtG0idTNTpDA1ZHi7l4"
        },
        "track": {
          "album": {
            "album_type": "single",
            "artists": [
              {
                "external_urls": {
                  "spotify": "https://open.spotify.com/artist/6jeroC7T0j4Dvz9y3gtofR"
                },
                "id": "6jeroC7T0j4Dvz9y3gtofR",
                "name": "Elise Trouw",
                "type": "artist",
                "uri": "spotify:artist:6jeroC7T0j4Dvz9y3gtofR"
              }
            ],
            "external_urls": {
              "spotify": "https://open.spotify.com/album/1n3t87hquJP5ClE9R4tI7S"
            },
            "id": "1n3t87hquJP5ClE9R4tI7S",
            "images": [
              {
                "height": 640,
                "url": "https://i.scdn.co/image/ab67616d0000b273e14d18a7e63578f44230f8eb",
                "width": 640
              },
              {
                "height": 300,
                "url": "https://i.scdn.co/image/ab67616d00001e02e14d18a7e63578f44230f8eb",
                "width": 300
              },
              {
                "height": 64,
                "url": "https://i.scdn.co/image/ab67616d00004851e14d18a7e63578f44230f8eb",
                "width": 64
              }
            ],
            "name": "Elevate",
            "release_date": "2019-05-31",
            "release_date_precision": "day",
            "total_tracks": 1,
            "type": "album",
            "uri": "spotify:album:1n3t87hquJP5ClE9R4tI7S"
          },
          "artists": [
            {
              "external_urls": {
                "spotify": "https://open.spotify.com/artist/6jeroC7T0j4Dvz9y3gtofR"
              },
              "id": "6jeroC7T0j4Dvz9y3gtofR",
              "name": "Elise Trouw",
              "type": "artist",
              "uri": "spotify:artist:6jeroC7T0j4Dvz9y3gtofR"
            }
          ],
          "disc_number": 1,
          "duration_ms": 160205,
          "episode": false,
          "explicit": false,
          "external_ids": {
            "isrc": "ushm21911639"
          },
          "external_urls": {
            "spotify": "https://open.spotify.com/track/3PuOtG0idTNTpDA1ZHi7l4"
          },
          "id": "3PuOtG0idTNTpDA1ZHi7l4",
          "is_local": false,
          "is_playable": true,
          "name": "Elevate",
          "popularity": 18,
          "preview_url": "https://p.scdn.co/mp3-preview/11d978f2625e3bc2c98bb3aa270747be5a1fdbce?cid=d8a5ed958d274c2e8ee717e6a4b0971d",
          "track": true,
          "track_number": 1,
          "type": "track",
          "uri": "spotify:track:3PuOtG0idTNTpDA1ZHi7l4"
        },
        "video_thumbnail": {
          "url": null
        }
      },
      {
        "added_at": "2022-04-26T19:44:31Z",
        "added_by": {
          "external_urls": {
            "spotify": "https://open.spotify.com/user/yrqjeis7sh8it5uztvo0dl8s5"
          },
          "id": "yrqjeis7sh8it5uztvo0dl8s5",
          "type": "user",
          "uri": "spotify:user:yrqjeis7sh8it5uztvo0dl8s5"
        },
        "is_local": false,
        "primary_color": null,
        "sharing_info": {
          "share_id": "V0Si8CNMQ8mknKAdw0FXBw",
          "share_url": "https://open.spotify.com/track/0t7fVeEJxO2Xi4H2K5Svc9?si=V0Si8CNMQ8mknKAdw0FXBw",
          "uri": "spotify:track:0t7fVeEJxO2Xi4H2K5Svc9"
        },
        "track": {
          "album": {
            "album_type": "album",
            "artists": [
              {
                "external_urls": {
                  "spotify": "https://open.spotify.com/artist/4dpARuHxo51G3z768sgnrY"
                },
                "id": "4dpARuHxo51G3z768sgnrY",
                "name": "Adele",
                "type": "artist",
                "uri": "spotify:artist:4dpARuHxo51G3z768sgnrY"
              }
            ],
            "external_urls": {
              "spotify": "https://open.spotify.com/album/6TVfiWmo8KtflUAmkK9gGF"
            },
            "id": "6TVfiWmo8KtflUAmkK9gGF",
            "images": [
              {
                "height": 640,
                "url": "https://i.scdn.co/image/ab67616d0000b273f1ea3305aa003425dda05882",
                "width": 640
              },
              {
                "height": 300,
                "url": "https://i.scdn.co/image/ab67616d00001e02f1ea3305aa003425dda05882",
                "width": 300
              },
              {
                "height": 64,
                "url": "https://i.scdn.co/image/ab67616d00004851f1ea3305aa003425dda05882",
                "width": 64
              }
            ],
            "name": "25",
            "release_date": "2015-11-20",
            "release_date_precision": "day",
            "total_tracks": 11,
            "type": "album",
            "uri": "spotify:album:6TVfiWmo8KtflUAmkK9gGF"
          },
          "artists": [
            {
              "external_urls": {
                "spotify": "https://open.spotify.com/artist/4dpARuHxo51G3z768sgnrY"
              },
              "id": "4dpARuHxo51G3z768sgnrY",
              "name": "Adele",
              "type": "artist",
              "uri": "spotify:artist:4dpARuHxo51G3z768sgnrY"
            }
          ],
          "disc_number": 1,
          "duration_ms": 223078,
          "episode": false,
          "explicit": false,
          "external_ids": {
            "isrc": "GBBKS1500215"
          },
          "external_urls": {
            "spotify": "https://open.spotify.com/track/0t7fVeEJxO2Xi4H2K5Svc9"
          },
          "id": "0t7fVeEJxO2Xi4H2K5Svc9",
          "is_local": false,
          "is_playable": true,
          "linked_from": {
            "external_urls": {
              "spotify": "https://open.spotify.com/track/563SfWAHJs4FBZMkRN0IFN"
            },
            "id": "563SfWAHJs4FBZMkRN0IFN",
            "type": "track",
            "uri": "spotify:track:563SfWAHJs4FBZMkRN0IFN"
          },
          "name": "Send My Love (To Your New Lover)",
          "popularity": 71,
          "preview_url": "https://p.scdn.co/mp3-preview/454f693eeb9b383539f5d26ecdc7cd44c6d20292?cid=d8a5ed958d274c2e8ee717e6a4b0971d",
          "track": true,
          "track_number": 2,
          "type": "track",
          "uri": "spotify:track:0t7fVeEJxO2Xi4H2K5Svc9"
        },
        "video_thumbnail": {
          "url": null
        }
      },
      {
        "added_at": "2022-04-26T19:44:52Z",
        "added_by": {
          "external_urls": {
            "spotify": "https://open.spotify.com/user/yrqjeis7sh8it5uztvo0dl8s5"
          },
          "id": "yrqjeis7sh8it5uztvo0dl8s5",
          "type": "user",
          "uri": "spotify:user:yrqjeis7sh8it5uztvo0dl8s5"
        },
        "is_local": false,
        "primary_color": null,
        "sharing_info": {
          "share_id": "zGbpv2U0RGi-vBwsZ_Sj8A",
          "share_url": "https://open.spotify.com/track/62LJFaYihsdVrrkgUOJC05?si=zGbpv2U0RGi-vBwsZ_Sj8A",
          "uri": "spotify:track:62LJFaYihsdVrrkgUOJC05"
        },
        "track": {
          "album": {
            "album_type": "album",
            "artists": [
              {
                "external_urls": {
                  "spotify": "https://open.spotify.com/artist/5a2EaR3hamoenG9rDuVn8j"
                },
                "id": "5a2EaR3hamoenG9rDuVn8j",
                "name": "Prince",
                "type": "artist",
                "uri": "spotify:artist:5a2EaR3hamoenG9rDuVn8j"
              }
            ],
            "external_urls": {
              "spotify": "https://open.spotify.com/album/54DjkEN3wdCQgfCTZ9WjdB"
            },
            "id": "54DjkEN3wdCQgfCTZ9WjdB",
            "images": [
              {
                "height": 640,
                "url": "https://i.scdn.co/image/ab67616d0000b27323cc0f0a925845a3de4aca38",
                "width": 640
              },
              {
                "height": 300,
                "url": "https://i.scdn.co/image/ab67616d00001e0223cc0f0a925845a3de4aca38",
                "width": 300
              },
              {
                "height": 64,
                "url": "https://i.scdn.co/image/ab67616d0000485123cc0f0a925845a3de4aca38",
                "width": 64
              }
            ],
            "name": "Parade - Music from the Motion Picture Under the Cherry Moon",
            "release_date": "1986-03-31",
            "release_date_precision": "day",
            "total_tracks": 12,
            "type": "album",
            "uri": "spotify:album:54DjkEN3wdCQgfCTZ9WjdB"
          },
          "artists": [
            {
              "external_urls": {
                "spotify": "https://open.spotify.com/artist/5a2EaR3hamoenG9rDuVn8j"
              },
              "id": "5a2EaR3hamoenG9rDuVn8j",
              "name": "Prince",
              "type": "artist",
              "uri": "spotify:artist:5a2EaR3hamoenG9rDuVn8j"
            }
          ],
          "disc_number": 1,
          "duration_ms": 226240,
          "episode": false,
          "explicit": false,
          "external_ids": {
            "isrc": "USWB19903319"
          },
          "external_urls": {
            "spotify": "https://open.spotify.com/track/62LJFaYihsdVrrkgUOJC05"
          },
          "id": "62LJFaYihsdVrrkgUOJC05",
          "is_local": false,
          "is_playable": true,
          "name": "Kiss",
          "popularity": 70,
          "preview_url": "https://p.scdn.co/mp3-preview/390cf478a1f3fbdcf7b5346a6004d273ed47ed3f?cid=d8a5ed958d274c2e8ee717e6a4b0971d",
          "track": true,
          "track_number": 10,
          "type": "track",
          "uri": "spotify:track:62LJFaYihsdVrrkgUOJC05"
        },
        "video_thumbnail": {
          "url": null
        }
      },
      {
        "added_at": "2022-04-26T19:45:30Z",
        "added_by": {
          "external_urls": {
            "spotify": "https://open.spotify.com/user/yrqjeis7sh8it5uztvo0dl8s5"
          },
          "id": "yrqjeis7sh8it5uztvo0dl8s5",
          "type": "user",
          "uri": "spotify:user:yrqjeis7sh8it5uztvo0dl8s5"
        },
        "is_local": false,
        "primary_color": null,
        "sharing_info": {
          "share_id": "e9tjzv0CRh2ICKUOoSUfVg",
          "share_url": "https://open.spotify.com/track/6Zf1lF3uGZDhEp7DhbkDMh?si=e9tjzv0CRh2ICKUOoSUfVg",
          "uri": "spotify:track:6Zf1lF3uGZDhEp7DhbkDMh"
        },
        "track": {
          "album": {
            "album_type": "album",
            "artists": [
              {
                "external_urls": {
                  "spotify": "https://open.spotify.com/artist/5mZC7ndY6oGMxJentRwsuV"
                },
                "id": "5mZC7ndY6oGMxJentRwsuV",
                "name": "Young Fathers",
                "type": "artist",
                "uri": "spotify:artist:5mZC7ndY6oGMxJentRwsuV"
              }
            ],
            "external_urls": {
              "spotify": "https://open.spotify.com/album/03Dp6OJS4wd7dI1rRszPwj"
            },
            "id": "03Dp6OJS4wd7dI1rRszPwj",
            "images": [
              {
                "height": 640,
                "url": "https://i.scdn.co/image/ab67616d0000b2736acb9ab5797d3548c59bc515",
                "width": 640
              },
              {
                "height": 300,
                "url": "https://i.scdn.co/image/ab67616d00001e026acb9ab5797d3548c59bc515",
                "width": 300
              },
              {
                "height": 64,
                "url": "https://i.scdn.co/image/ab67616d000048516acb9ab5797d3548c59bc515",
                "width": 64
              }
            ],
            "name": "Cocoa Sugar",
            "release_date": "2018-03-09",
            "release_date_precision": "day",
            "total_tracks": 12,
            "type": "album",
            "uri": "spotify:album:03Dp6OJS4wd7dI1rRszPwj"
          },
          "artists": [
            {
              "external_urls": {
                "spotify": "https://open.spotify.com/artist/5mZC7ndY6oGMxJentRwsuV"
              },
              "id": "5mZC7ndY6oGMxJentRwsuV",
              "name": "Young Fathers",
              "type": "artist",
              "uri": "spotify:artist:5mZC7ndY6oGMxJentRwsuV"
            }
          ],
          "disc_number": 1,
          "duration_ms": 152654,
          "episode": false,
          "explicit": false,
          "external_ids": {
            "isrc": "GBCFB1700591"
          },
          "external_urls": {
            "spotify": "https://open.spotify.com/track/6Zf1lF3uGZDhEp7DhbkDMh"
          },
          "id": "6Zf1lF3uGZDhEp7DhbkDMh",
          "is_local": false,
          "is_playable": true,
          "name": "Holy Ghost",
          "popularity": 38,
          "preview_url": "https://p.scdn.co/mp3-preview/cb9db36de2275b6da05d54fa9b8d16c1971328f9?cid=d8a5ed958d274c2e8ee717e6a4b0971d",
          "track": true,
          "track_number": 9,
          "type": "track",
          "uri": "spotify:track:6Zf1lF3uGZDhEp7DhbkDMh"
        },
        "video_thumbnail": {
          "url": null
        }
      },
      {
        "added_at": "2022-04-26T19:45:52Z",
        "added_by": {
          "external_urls": {
            "spotify": "https://open.spotify.com/user/yrqjeis7sh8it5uztvo0dl8s5"
          },
          "id": "yrqjeis7sh8it5uztvo0dl8s5",
          "type": "user",
          "uri": "spotify:user:yrqjeis7sh8it5uztvo0dl8s5"
        },
        "is_local": false,
        "primary_color": null,
        "sharing_info": {
          "share_id": "vm9yriomQv6timku5i-iSw",
          "share_url": "https://open.spotify.com/track/09CViXNGyH05AItXMtM6fC?si=vm9yriomQv6timku5i-iSw",
          "uri": "spotify:track:09CViXNGyH05AItXMtM6fC"
        },
        "track": {
          "album": {
            "album_type": "album",
            "artists": [
              {
                "external_urls": {
                  "spotify": "https://open.spotify.com/artist/5mZC7ndY6oGMxJentRwsuV"
                },
                "id": "5mZC7ndY6oGMxJentRwsuV",
                "name": "Young Fathers",
                "type": "artist",
                "uri": "spotify:artist:5mZC7ndY6oGMxJentRwsuV"
              }
            ],
            "external_urls": {
              "spotify": "https://open.spotify.com/album/03Dp6OJS4wd7dI1rRszPwj"
            },
            "id": "03Dp6OJS4wd7dI1rRszPwj",
            "images": [
              {
                "height": 640,
                "url": "https://i.scdn.co/image/ab67616d0000b2736acb9ab5797d3548c59bc515",
                "width": 640
              },
              {
                "height": 300,
                "url": "https://i.scdn.co/image/ab67616d00001e026acb9ab5797d3548c59bc515",
                "width": 300
              },
              {
                "height": 64,
                "url": "https://i.scdn.co/image/ab67616d000048516acb9ab5797d3548c59bc515",
                "width": 64
              }
            ],
            "name": "Cocoa Sugar",
            "release_date": "2018-03-09",
            "release_date_precision": "day",
            "total_tracks": 12,
            "type": "album",
            "uri": "spotify:album:03Dp6OJS4wd7dI1rRszPwj"
          },
          "artists": [
            {
              "external_urls": {
                "spotify": "https://open.spotify.com/artist/5mZC7ndY6oGMxJentRwsuV"
              },
              "id": "5mZC7ndY6oGMxJentRwsuV",
              "name": "Young Fathers",
              "type": "artist",
              "uri": "spotify:artist:5mZC7ndY6oGMxJentRwsuV"
            }
          ],
          "disc_number": 1,
          "duration_ms": 217120,
          "episode": false,
          "explicit": false,
          "external_ids": {
            "isrc": "GBCFB1700496"
          },
          "external_urls": {
            "spotify": "https://open.spotify.com/track/09CViXNGyH05AItXMtM6fC"
          },
          "id": "09CViXNGyH05AItXMtM6fC",
          "is_local": false,
          "is_playable": true,
          "name": "Lord",
          "popularity": 32,
          "preview_url": "https://p.scdn.co/mp3-preview/9891d49ecf26c53492fd20780732ff5169b201c0?cid=d8a5ed958d274c2e8ee717e6a4b0971d",
          "track": true,
          "track_number": 5,
          "type": "track",
          "uri": "spotify:track:09CViXNGyH05AItXMtM6fC"
        },
        "video_thumbnail": {
          "url": null
        }
      },
      {
        "added_at": "2022-04-26T19:46:02Z",
        "added_by": {
          "external_urls": {
            "spotify": "https://open.spotify.com/user/yrqjeis7sh8it5uztvo0dl8s5"
          },
          "id": "yrqjeis7sh8it5uztvo0dl8s5",
          "type": "user",
          "uri": "spotify:user:yrqjeis7sh8it5uztvo0dl8s5"
        },
        "is_local": false,
        "primary_color": null,
        "sharing_info": {
          "share_id": "bTuciEPtTY-KpUn9rg7e8Q",
          "share_url": "https://open.spotify.com/track/16zLDDcZ0QvkFblJxfZpcV?si=bTuciEPtTY-KpUn9rg7e8Q",
          "uri": "spotify:track:16zLDDcZ0QvkFblJxfZpcV"
        },
        "track": {
          "album": {
            "album_type": "album",
            "artists": [
              {
                "external_urls": {
                  "spotify": "https://open.spotify.com/artist/4RhG0qGKMzfWNdi4OM6obG"
                },
                "id": "4RhG0qGKMzfWNdi4OM6obG",
                "name": "Yuni Wa",
                "type": "artist",
                "uri": "spotify:artist:4RhG0qGKMzfWNdi4OM6obG"
              }
            ],
            "external_urls": {
              "spotify": "https://open.spotify.com/album/6D9EJD5jKXBm5skuCs69Az"
            },
            "id": "6D9EJD5jKXBm5skuCs69Az",
            "images": [
              {
                "height": 640,
                "url": "https://i.scdn.co/image/ab67616d0000b273f6c57df4c1bfdd6f93032bfe",
                "width": 640
              },
              {
                "height": 300,
                "url": "https://i.scdn.co/image/ab67616d00001e02f6c57df4c1bfdd6f93032bfe",
                "width": 300
              },
              {
                "height": 64,
                "url": "https://i.scdn.co/image/ab67616d00004851f6c57df4c1bfdd6f93032bfe",
                "width": 64
              }
            ],
            "name": "Ethereal Lover",
            "release_date": "2015-07-20",
            "release_date_precision": "day",
            "total_tracks": 14,
            "type": "album",
            "uri": "spotify:album:6D9EJD5jKXBm5skuCs69Az"
          },
          "artists": [
            {
              "external_urls": {
                "spotify": "https://open.spotify.com/artist/4RhG0qGKMzfWNdi4OM6obG"
              },
              "id": "4RhG0qGKMzfWNdi4OM6obG",
              "name": "Yuni Wa",
              "type": "artist",
              "uri": "spotify:artist:4RhG0qGKMzfWNdi4OM6obG"
            }
          ],
          "disc_number": 1,
          "duration_ms": 148976,
          "episode": false,
          "explicit": false,
          "external_ids": {
            "isrc": "FI5CK1506111"
          },
          "external_urls": {
            "spotify": "https://open.spotify.com/track/16zLDDcZ0QvkFblJxfZpcV"
          },
          "id": "16zLDDcZ0QvkFblJxfZpcV",
          "is_local": false,
          "is_playable": true,
          "name": "Time To Go Out",
          "popularity": 9,
          "preview_url": "https://p.scdn.co/mp3-preview/e798c7df731d1595d45e00c7ccb1680329606244?cid=d8a5ed958d274c2e8ee717e6a4b0971d",
          "track": true,
          "track_number": 1,
          "type": "track",
          "uri": "spotify:track:16zLDDcZ0QvkFblJxfZpcV"
        },
        "video_thumbnail": {
          "url": null
        }
      },
      {
        "added_at": "2022-04-26T19:46:12Z",
        "added_by": {
          "external_urls": {
            "spotify": "https://open.spotify.com/user/yrqjeis7sh8it5uztvo0dl8s5"
          },
          "id": "yrqjeis7sh8it5uztvo0dl8s5",
          "type": "user",
          "uri": "spotify:user:yrqjeis7sh8it5uztvo0dl8s5"
        },
        "is_local": false,
        "primary_color": null,
        "sharing_info": {
          "share_id": "J9aZuMgDSy24A1ohNrdjNQ",
          "share_url": "https://open.spotify.com/track/4qYvkWQqCcIWEBWekegE4y?si=J9aZuMgDSy24A1ohNrdjNQ",
          "uri": "spotify:track:4qYvkWQqCcIWEBWekegE4y"
        },
        "track": {
          "album": {
            "album_type": "album",
            "artists": [
              {
                "external_urls": {
                  "spotify": "https://open.spotify.com/artist/0qu422H5MOoQxGjd4IzHbS"
                },
                "id": "0qu422H5MOoQxGjd4IzHbS",
                "name": "Yves Tumor",
                "type": "artist",
                "uri": "spotify:artist:0qu422H5MOoQxGjd4IzHbS"
              }
            ],
            "external_urls": {
              "spotify": "https://open.spotify.com/album/5wnCTZtzIZxasRSHzI1JeW"
            },
            "id": "5wnCTZtzIZxasRSHzI1JeW",
            "images": [
              {
                "height": 640,
                "url": "https://i.scdn.co/image/ab67616d0000b273043864250fbec5f57c7076a7",
                "width": 640
              },
              {
                "height": 300,
                "url": "https://i.scdn.co/image/ab67616d00001e02043864250fbec5f57c7076a7",
                "width": 300
              },
              {
                "height": 64,
                "url": "https://i.scdn.co/image/ab67616d00004851043864250fbec5f57c7076a7",
                "width": 64
              }
            ],
            "name": "Heaven To A Tortured Mind",
            "release_date": "2020-04-03",
            "release_date_precision": "day",
            "total_tracks": 12,
            "type": "album",
            "uri": "spotify:album:5wnCTZtzIZxasRSHzI1JeW"
          },
          "artists": [
            {
              "external_urls": {
                "spotify": "https://open.spotify.com/artist/0qu422H5MOoQxGjd4IzHbS"
              },
              "id": "0qu422H5MOoQxGjd4IzHbS",
              "name": "Yves Tumor",
              "type": "artist",
              "uri": "spotify:artist:0qu422H5MOoQxGjd4IzHbS"
            }
          ],
          "disc_number": 1,
          "duration_ms": 198626,
          "episode": false,
          "explicit": false,
          "external_ids": {
            "isrc": "GBBPW1900277"
          },
          "external_urls": {
            "spotify": "https://open.spotify.com/track/4qYvkWQqCcIWEBWekegE4y"
          },
          "id": "4qYvkWQqCcIWEBWekegE4y",
          "is_local": false,
          "is_playable": true,
          "linked_from": {
            "external_urls": {
              "spotify": "https://open.spotify.com/track/46LX0sSwIU4GFLcj23ZfMA"
            },
            "id": "46LX0sSwIU4GFLcj23ZfMA",
            "type": "track",
            "uri": "spotify:track:46LX0sSwIU4GFLcj23ZfMA"
          },
          "name": "Gospel For A New Century",
          "popularity": 52,
          "preview_url": "https://p.scdn.co/mp3-preview/de67f658a4e847804e7d42f02b4512a03c95982f?cid=d8a5ed958d274c2e8ee717e6a4b0971d",
          "track": true,
          "track_number": 1,
          "type": "track",
          "uri": "spotify:track:4qYvkWQqCcIWEBWekegE4y"
        },
        "video_thumbnail": {
          "url": null
        }
      },
      {
        "added_at": "2022-04-26T19:47:10Z",
        "added_by": {
          "external_urls": {
            "spotify": "https://open.spotify.com/user/yrqjeis7sh8it5uztvo0dl8s5"
          },
          "id": "yrqjeis7sh8it5uztvo0dl8s5",
          "type": "user",
          "uri": "spotify:user:yrqjeis7sh8it5uztvo0dl8s5"
        },
        "is_local": false,
        "primary_color": null,
        "sharing_info": {
          "share_id": "l0p19dL1RjyU-XJRH_rP8A",
          "share_url": "https://open.spotify.com/track/1jqj8hEUinFADzxnbrWCc7?si=l0p19dL1RjyU-XJRH_rP8A",
          "uri": "spotify:track:1jqj8hEUinFADzxnbrWCc7"
        },
        "track": {
          "album": {
            "album_type": "single",
            "artists": [
              {
                "external_urls": {
                  "spotify": "https://open.spotify.com/artist/0sYtyqjtpG6e35rn2PY4yY"
                },
                "id": "0sYtyqjtpG6e35rn2PY4yY",
                "name": "Hael",
                "type": "artist",
                "uri": "spotify:artist:0sYtyqjtpG6e35rn2PY4yY"
              },
              {
                "external_urls": {
                  "spotify": "https://open.spotify.com/artist/3SXyu7eV3yPbCexRli5H2q"
                },
                "id": "3SXyu7eV3yPbCexRli5H2q",
                "name": "Lucky Dropout",
                "type": "artist",
                "uri": "spotify:artist:3SXyu7eV3yPbCexRli5H2q"
              }
            ],
            "external_urls": {
              "spotify": "https://open.spotify.com/album/1HjxQ6Exz8zgBZMRjnFjVp"
            },
            "id": "1HjxQ6Exz8zgBZMRjnFjVp",
            "images": [
              {
                "height": 640,
                "url": "https://i.scdn.co/image/ab67616d0000b2734705f4c92a88221650679ffb",
                "width": 640
              },
              {
                "height": 300,
                "url": "https://i.scdn.co/image/ab67616d00001e024705f4c92a88221650679ffb",
                "width": 300
              },
              {
                "height": 64,
                "url": "https://i.scdn.co/image/ab67616d000048514705f4c92a88221650679ffb",
                "width": 64
              }
            ],
            "name": "Watch Me",
            "release_date": "2020-08-14",
            "release_date_precision": "day",
            "total_tracks": 1,
            "type": "album",
            "uri": "spotify:album:1HjxQ6Exz8zgBZMRjnFjVp"
          },
          "artists": [
            {
              "external_urls": {
                "spotify": "https://open.spotify.com/artist/0sYtyqjtpG6e35rn2PY4yY"
              },
              "id": "0sYtyqjtpG6e35rn2PY4yY",
              "name": "Hael",
              "type": "artist",
              "uri": "spotify:artist:0sYtyqjtpG6e35rn2PY4yY"
            },
            {
              "external_urls": {
                "spotify": "https://open.spotify.com/artist/3SXyu7eV3yPbCexRli5H2q"
              },
              "id": "3SXyu7eV3yPbCexRli5H2q",
              "name": "Lucky Dropout",
              "type": "artist",
              "uri": "spotify:artist:3SXyu7eV3yPbCexRli5H2q"
            }
          ],
          "disc_number": 1,
          "duration_ms": 162000,
          "episode": false,
          "explicit": false,
          "external_ids": {
            "isrc": "QMRY41901017"
          },
          "external_urls": {
            "spotify": "https://open.spotify.com/track/1jqj8hEUinFADzxnbrWCc7"
          },
          "id": "1jqj8hEUinFADzxnbrWCc7",
          "is_local": false,
          "is_playable": true,
          "name": "Watch Me",
          "popularity": 18,
          "preview_url": "https://p.scdn.co/mp3-preview/792302367c9f201f95e686e6e2a97d8a395ce289?cid=d8a5ed958d274c2e8ee717e6a4b0971d",
          "track": true,
          "track_number": 1,
          "type": "track",
          "uri": "spotify:track:1jqj8hEUinFADzxnbrWCc7"
        },
        "video_thumbnail": {
          "url": null
        }
      },
      {
        "added_at": "2022-04-26T19:46:55Z",
        "added_by": {
          "external_urls": {
            "spotify": "https://open.spotify.com/user/yrqjeis7sh8it5uztvo0dl8s5"
          },
          "id": "yrqjeis7sh8it5uztvo0dl8s5",
          "type": "user",
          "uri": "spotify:user:yrqjeis7sh8it5uztvo0dl8s5"
        },
        "is_local": false,
        "primary_color": null,
        "sharing_info": {
          "share_id": "JBPsIUVYSP-f0CUdVO6pRw",
          "share_url": "https://open.spotify.com/track/4MmO631CdxuFOm18UVbhkp?si=JBPsIUVYSP-f0CUdVO6pRw",
          "uri": "spotify:track:4MmO631CdxuFOm18UVbhkp"
        },
        "track": {
          "album": {
            "album_type": "album",
            "artists": [
              {
                "external_urls": {
                  "spotify": "https://open.spotify.com/artist/5C8KyBfvAz9PSaOd30eIow"
                },
                "id": "5C8KyBfvAz9PSaOd30eIow",
                "name": "Macross 82-99",
                "type": "artist",
                "uri": "spotify:artist:5C8KyBfvAz9PSaOd30eIow"
              }
            ],
            "external_urls": {
              "spotify": "https://open.spotify.com/album/4mk2tlpNn3mQKa6TlNNhnc"
            },
            "id": "4mk2tlpNn3mQKa6TlNNhnc",
            "images": [
              {
                "height": 640,
                "url": "https://i.scdn.co/image/ab67616d0000b273ea34552ad2126a956d6dc19a",
                "width": 640
              },
              {
                "height": 300,
                "url": "https://i.scdn.co/image/ab67616d00001e02ea34552ad2126a956d6dc19a",
                "width": 300
              },
              {
                "height": 64,
                "url": "https://i.scdn.co/image/ab67616d00004851ea34552ad2126a956d6dc19a",
                "width": 64
              }
            ],
            "name": "CHAM!",
            "release_date": "2015-10-21",
            "release_date_precision": "day",
            "total_tracks": 16,
            "type": "album",
            "uri": "spotify:album:4mk2tlpNn3mQKa6TlNNhnc"
          },
          "artists": [
            {
              "external_urls": {
                "spotify": "https://open.spotify.com/artist/5C8KyBfvAz9PSaOd30eIow"
              },
              "id": "5C8KyBfvAz9PSaOd30eIow",
              "name": "Macross 82-99",
              "type": "artist",
              "uri": "spotify:artist:5C8KyBfvAz9PSaOd30eIow"
            }
          ],
          "disc_number": 1,
          "duration_ms": 162461,
          "episode": false,
          "explicit": false,
          "external_ids": {
            "isrc": "USLZJ1562986"
          },
          "external_urls": {
            "spotify": "https://open.spotify.com/track/4MmO631CdxuFOm18UVbhkp"
          },
          "id": "4MmO631CdxuFOm18UVbhkp",
          "is_local": false,
          "is_playable": true,
          "name": "Fun Tonight",
          "popularity": 49,
          "preview_url": "https://p.scdn.co/mp3-preview/e31f46fc639112744026bf37c3033ce701831b6f?cid=d8a5ed958d274c2e8ee717e6a4b0971d",
          "track": true,
          "track_number": 13,
          "type": "track",
          "uri": "spotify:track:4MmO631CdxuFOm18UVbhkp"
        },
        "video_thumbnail": {
          "url": null
        }
      },
      {
        "added_at": "2022-04-26T19:47:23Z",
        "added_by": {
          "external_urls": {
            "spotify": "https://open.spotify.com/user/yrqjeis7sh8it5uztvo0dl8s5"
          },
          "id": "yrqjeis7sh8it5uztvo0dl8s5",
          "type": "user",
          "uri": "spotify:user:yrqjeis7sh8it5uztvo0dl8s5"
        },
        "is_local": false,
        "primary_color": null,
        "sharing_info": {
          "share_id": "B4hKCh9aSpKhvLfakefBCA",
          "share_url": "https://open.spotify.com/track/1bi1469rA3HMnfqNU8C3z2?si=B4hKCh9aSpKhvLfakefBCA",
          "uri": "spotify:track:1bi1469rA3HMnfqNU8C3z2"
        },
        "track": {
          "album": {
            "album_type": "album",
            "artists": [
              {
                "external_urls": {
                  "spotify": "https://open.spotify.com/artist/0xOeVMOz2fVg5BJY3N6akT"
                },
                "id": "0xOeVMOz2fVg5BJY3N6akT",
                "name": "Jaden",
                "type": "artist",
                "uri": "spotify:artist:0xOeVMOz2fVg5BJY3N6akT"
              }
            ],
            "external_urls": {
              "spotify": "https://open.spotify.com/album/6cKBoHXh7dKn2gVsGniZ58"
            },
            "id": "6cKBoHXh7dKn2gVsGniZ58",
            "images": [
              {
                "height": 640,
                "url": "https://i.scdn.co/image/ab67616d0000b27360ec4df52c2d724bc53ffec5",
                "width": 640
              },
              {
                "height": 300,
                "url": "https://i.scdn.co/image/ab67616d00001e0260ec4df52c2d724bc53ffec5",
                "width": 300
              },
              {
                "height": 64,
                "url": "https://i.scdn.co/image/ab67616d0000485160ec4df52c2d724bc53ffec5",
                "width": 64
              }
            ],
            "name": "ERYS (Deluxe)",
            "release_date": "2019-07-05",
            "release_date_precision": "day",
            "total_tracks": 20,
            "type": "album",
            "uri": "spotify:album:6cKBoHXh7dKn2gVsGniZ58"
          },
          "artists": [
            {
              "external_urls": {
                "spotify": "https://open.spotify.com/artist/0xOeVMOz2fVg5BJY3N6akT"
              },
              "id": "0xOeVMOz2fVg5BJY3N6akT",
              "name": "Jaden",
              "type": "artist",
              "uri": "spotify:artist:0xOeVMOz2fVg5BJY3N6akT"
            }
          ],
          "disc_number": 1,
          "duration_ms": 102346,
          "episode": false,
          "explicit": true,
          "external_ids": {
            "isrc": "QMJMT1902188"
          },
          "external_urls": {
            "spotify": "https://open.spotify.com/track/1bi1469rA3HMnfqNU8C3z2"
          },
          "id": "1bi1469rA3HMnfqNU8C3z2",
          "is_local": false,
          "is_playable": true,
          "name": "Fire Dept",
          "popularity": 36,
          "preview_url": "https://p.scdn.co/mp3-preview/ea40a15e5aea35a8dd1c3c62a2797257234317c5?cid=d8a5ed958d274c2e8ee717e6a4b0971d",
          "track": true,
          "track_number": 9,
          "type": "track",
          "uri": "spotify:track:1bi1469rA3HMnfqNU8C3z2"
        },
        "video_thumbnail": {
          "url": null
        }
      },
      {
        "added_at": "2022-04-26T19:48:05Z",
        "added_by": {
          "external_urls": {
            "spotify": "https://open.spotify.com/user/yrqjeis7sh8it5uztvo0dl8s5"
          },
          "id": "yrqjeis7sh8it5uztvo0dl8s5",
          "type": "user",
          "uri": "spotify:user:yrqjeis7sh8it5uztvo0dl8s5"
        },
        "is_local": false,
        "primary_color": null,
        "sharing_info": {
          "share_id": "tOg2K6jtQX-oJsSzlKA2XQ",
          "share_url": "https://open.spotify.com/track/7jPKbePNaGk50HoAAIseyv?si=tOg2K6jtQX-oJsSzlKA2XQ",
          "uri": "spotify:track:7jPKbePNaGk50HoAAIseyv"
        },
        "track": {
          "album": {
            "album_type": "single",
            "artists": [
              {
                "external_urls": {
                  "spotify": "https://open.spotify.com/artist/0sYtyqjtpG6e35rn2PY4yY"
                },
                "id": "0sYtyqjtpG6e35rn2PY4yY",
                "name": "Hael",
                "type": "artist",
                "uri": "spotify:artist:0sYtyqjtpG6e35rn2PY4yY"
              }
            ],
            "external_urls": {
              "spotify": "https://open.spotify.com/album/3GnxI3GHlLluoGDLTrBvNp"
            },
            "id": "3GnxI3GHlLluoGDLTrBvNp",
            "images": [
              {
                "height": 640,
                "url": "https://i.scdn.co/image/ab67616d0000b2739bf11ebc0e47e2ad7d6c0ece",
                "width": 640
              },
              {
                "height": 300,
                "url": "https://i.scdn.co/image/ab67616d00001e029bf11ebc0e47e2ad7d6c0ece",
                "width": 300
              },
              {
                "height": 64,
                "url": "https://i.scdn.co/image/ab67616d000048519bf11ebc0e47e2ad7d6c0ece",
                "width": 64
              }
            ],
            "name": "Ready",
            "release_date": "2017-03-31",
            "release_date_precision": "day",
            "total_tracks": 1,
            "type": "album",
            "uri": "spotify:album:3GnxI3GHlLluoGDLTrBvNp"
          },
          "artists": [
            {
              "external_urls": {
                "spotify": "https://open.spotify.com/artist/0sYtyqjtpG6e35rn2PY4yY"
              },
              "id": "0sYtyqjtpG6e35rn2PY4yY",
              "name": "Hael",
              "type": "artist",
              "uri": "spotify:artist:0sYtyqjtpG6e35rn2PY4yY"
            }
          ],
          "disc_number": 1,
          "duration_ms": 176000,
          "episode": false,
          "explicit": false,
          "external_ids": {
            "isrc": "QMRY41700143"
          },
          "external_urls": {
            "spotify": "https://open.spotify.com/track/7jPKbePNaGk50HoAAIseyv"
          },
          "id": "7jPKbePNaGk50HoAAIseyv",
          "is_local": false,
          "is_playable": true,
          "name": "Ready",
          "popularity": 28,
          "preview_url": "https://p.scdn.co/mp3-preview/9e268dd7e3942026a063b85c8b13f26d4ba62548?cid=d8a5ed958d274c2e8ee717e6a4b0971d",
          "track": true,
          "track_number": 1,
          "type": "track",
          "uri": "spotify:track:7jPKbePNaGk50HoAAIseyv"
        },
        "video_thumbnail": {
          "url": null
        }
      },
      {
        "added_at": "2022-04-26T19:48:35Z",
        "added_by": {
          "external_urls": {
            "spotify": "https://open.spotify.com/user/yrqjeis7sh8it5uztvo0dl8s5"
          },
          "id": "yrqjeis7sh8it5uztvo0dl8s5",
          "type": "user",
          "uri": "spotify:user:yrqjeis7sh8it5uztvo0dl8s5"
        },
        "is_local": false,
        "primary_color": null,
        "sharing_info": {
          "share_id": "OiMXWPOTQgKPlo2hYJdH3w",
          "share_url": "https://open.spotify.com/track/6W4asvlY0HYeKz6EySCJOb?si=OiMXWPOTQgKPlo2hYJdH3w",
          "uri": "spotify:track:6W4asvlY0HYeKz6EySCJOb"
        },
        "track": {
          "album": {
            "album_type": "single",
            "artists": [
              {
                "external_urls": {
                  "spotify": "https://open.spotify.com/artist/24KLOfQv2HrpsCerfN6bef"
                },
                "id": "24KLOfQv2HrpsCerfN6bef",
                "name": "LOOK MUM NO COMPUTER",
                "type": "artist",
                "uri": "spotify:artist:24KLOfQv2HrpsCerfN6bef"
              }
            ],
            "external_urls": {
              "spotify": "https://open.spotify.com/album/5BPYm3a8hvDKC6ExMksoGQ"
            },
            "id": "5BPYm3a8hvDKC6ExMksoGQ",
            "images": [
              {
                "height": 640,
                "url": "https://i.scdn.co/image/ab67616d0000b2737fc6a530a5c531026560c454",
                "width": 640
              },
              {
                "height": 300,
                "url": "https://i.scdn.co/image/ab67616d00001e027fc6a530a5c531026560c454",
                "width": 300
              },
              {
                "height": 64,
                "url": "https://i.scdn.co/image/ab67616d000048517fc6a530a5c531026560c454",
                "width": 64
              }
            ],
            "name": "Human Procrastination",
            "release_date": "2019-09-13",
            "release_date_precision": "day",
            "total_tracks": 5,
            "type": "album",
            "uri": "spotify:album:5BPYm3a8hvDKC6ExMksoGQ"
          },
          "artists": [
            {
              "external_urls": {
                "spotify": "https://open.spotify.com/artist/24KLOfQv2HrpsCerfN6bef"
              },
              "id": "24KLOfQv2HrpsCerfN6bef",
              "name": "LOOK MUM NO COMPUTER",
              "type": "artist",
              "uri": "spotify:artist:24KLOfQv2HrpsCerfN6bef"
            }
          ],
          "disc_number": 1,
          "duration_ms": 155018,
          "episode": false,
          "explicit": true,
          "external_ids": {
            "isrc": "GBKPL1939917"
          },
          "external_urls": {
            "spotify": "https://open.spotify.com/track/6W4asvlY0HYeKz6EySCJOb"
          },
          "id": "6W4asvlY0HYeKz6EySCJOb",
          "is_local": false,
          "is_playable": true,
          "linked_from": {
            "external_urls": {
              "spotify": "https://open.spotify.com/track/0EOkYO2X3rnPwliu8zy0Vd"
            },
            "id": "0EOkYO2X3rnPwliu8zy0Vd",
            "type": "track",
            "uri": "spotify:track:0EOkYO2X3rnPwliu8zy0Vd"
          },
          "name": "Groundhog Day",
          "popularity": 30,
          "preview_url": "https://p.scdn.co/mp3-preview/6c1641366f3ed21a0a22b6ea3b01025bc75b0fa7?cid=d8a5ed958d274c2e8ee717e6a4b0971d",
          "track": true,
          "track_number": 1,
          "type": "track",
          "uri": "spotify:track:6W4asvlY0HYeKz6EySCJOb"
        },
        "video_thumbnail": {
          "url": null
        }
      },
      {
        "added_at": "2022-04-26T19:49:49Z",
        "added_by": {
          "external_urls": {
            "spotify": "https://open.spotify.com/user/yrqjeis7sh8it5uztvo0dl8s5"
          },
          "id": "yrqjeis7sh8it5uztvo0dl8s5",
          "type": "user",
          "uri": "spotify:user:yrqjeis7sh8it5uztvo0dl8s5"
        },
        "is_local": false,
        "primary_color": null,
        "sharing_info": {
          "share_id": "pNAPv9AuT_6x2DReqKiUpw",
          "share_url": "https://open.spotify.com/track/0vMctOnb4YNIvbqgkbWNDy?si=pNAPv9AuT_6x2DReqKiUpw",
          "uri": "spotify:track:0vMctOnb4YNIvbqgkbWNDy"
        },
        "track": {
          "album": {
            "album_type": "album",
            "artists": [
              {
                "external_urls": {
                  "spotify": "https://open.spotify.com/artist/1uiEZYehlNivdK3iQyAbye"
                },
                "id": "1uiEZYehlNivdK3iQyAbye",
                "name": "Tom Misch",
                "type": "artist",
                "uri": "spotify:artist:1uiEZYehlNivdK3iQyAbye"
              }
            ],
            "external_urls": {
              "spotify": "https://open.spotify.com/album/28enuddLPEA914scE6Drvk"
            },
            "id": "28enuddLPEA914scE6Drvk",
            "images": [
              {
                "height": 640,
                "url": "https://i.scdn.co/image/ab67616d0000b2732aebf42d8901fbcd14c9eca8",
                "width": 640
              },
              {
                "height": 300,
                "url": "https://i.scdn.co/image/ab67616d00001e022aebf42d8901fbcd14c9eca8",
                "width": 300
              },
              {
                "height": 64,
                "url": "https://i.scdn.co/image/ab67616d000048512aebf42d8901fbcd14c9eca8",
                "width": 64
              }
            ],
            "name": "Geography",
            "release_date": "2018-04-06",
            "release_date_precision": "day",
            "total_tracks": 13,
            "type": "album",
            "uri": "spotify:album:28enuddLPEA914scE6Drvk"
          },
          "artists": [
            {
              "external_urls": {
                "spotify": "https://open.spotify.com/artist/1uiEZYehlNivdK3iQyAbye"
              },
              "id": "1uiEZYehlNivdK3iQyAbye",
              "name": "Tom Misch",
              "type": "artist",
              "uri": "spotify:artist:1uiEZYehlNivdK3iQyAbye"
            },
            {
              "external_urls": {
                "spotify": "https://open.spotify.com/artist/1Z8ODXyhEBi3WynYw0Rya6"
              },
              "id": "1Z8ODXyhEBi3WynYw0Rya6",
              "name": "De La Soul",
              "type": "artist",
              "uri": "spotify:artist:1Z8ODXyhEBi3WynYw0Rya6"
            }
          ],
          "disc_number": 1,
          "duration_ms": 261881,
          "episode": false,
          "explicit": false,
          "external_ids": {
            "isrc": "GBKPL1790989"
          },
          "external_urls": {
            "spotify": "https://open.spotify.com/track/0vMctOnb4YNIvbqgkbWNDy"
          },
          "id": "0vMctOnb4YNIvbqgkbWNDy",
          "is_local": false,
          "is_playable": true,
          "linked_from": {
            "external_urls": {
              "spotify": "https://open.spotify.com/track/02CygBCQOIyEuhNZqHHcNx"
            },
            "id": "02CygBCQOIyEuhNZqHHcNx",
            "type": "track",
            "uri": "spotify:track:02CygBCQOIyEuhNZqHHcNx"
          },
          "name": "It Runs Through Me",
          "popularity": 65,
          "preview_url": "https://p.scdn.co/mp3-preview/632d6c82c76df12239b31e81936f7ca316a3d45b?cid=d8a5ed958d274c2e8ee717e6a4b0971d",
          "track": true,
          "track_number": 6,
          "type": "track",
          "uri": "spotify:track:0vMctOnb4YNIvbqgkbWNDy"
        },
        "video_thumbnail": {
          "url": null
        }
      },
      {
        "added_at": "2022-04-26T19:49:57Z",
        "added_by": {
          "external_urls": {
            "spotify": "https://open.spotify.com/user/yrqjeis7sh8it5uztvo0dl8s5"
          },
          "id": "yrqjeis7sh8it5uztvo0dl8s5",
          "type": "user",
          "uri": "spotify:user:yrqjeis7sh8it5uztvo0dl8s5"
        },
        "is_local": false,
        "primary_color": null,
        "sharing_info": {
          "share_id": "WFqFvU7FSpOIgj4b8Lbb7w",
          "share_url": "https://open.spotify.com/track/3T76zPJz3tWL27FrjJe2ot?si=WFqFvU7FSpOIgj4b8Lbb7w",
          "uri": "spotify:track:3T76zPJz3tWL27FrjJe2ot"
        },
        "track": {
          "album": {
            "album_type": "album",
            "artists": [
              {
                "external_urls": {
                  "spotify": "https://open.spotify.com/artist/4FZ3j1oH43e7cukCALsCwf"
                },
                "id": "4FZ3j1oH43e7cukCALsCwf",
                "name": "Jack White",
                "type": "artist",
                "uri": "spotify:artist:4FZ3j1oH43e7cukCALsCwf"
              }
            ],
            "external_urls": {
              "spotify": "https://open.spotify.com/album/36LXzRarDP8TU8K0REGpt6"
            },
            "id": "36LXzRarDP8TU8K0REGpt6",
            "images": [
              {
                "height": 640,
                "url": "https://i.scdn.co/image/ab67616d0000b2731cf7e27ac5a95d7069ffad98",
                "width": 640
              },
              {
                "height": 300,
                "url": "https://i.scdn.co/image/ab67616d00001e021cf7e27ac5a95d7069ffad98",
                "width": 300
              },
              {
                "height": 64,
                "url": "https://i.scdn.co/image/ab67616d000048511cf7e27ac5a95d7069ffad98",
                "width": 64
              }
            ],
            "name": "Lazaretto",
            "release_date": "2014-06-10",
            "release_date_precision": "day",
            "total_tracks": 11,
            "type": "album",
            "uri": "spotify:album:36LXzRarDP8TU8K0REGpt6"
          },
          "artists": [
            {
              "external_urls": {
                "spotify": "https://open.spotify.com/artist/4FZ3j1oH43e7cukCALsCwf"
              },
              "id": "4FZ3j1oH43e7cukCALsCwf",
              "name": "Jack White",
              "type": "artist",
              "uri": "spotify:artist:4FZ3j1oH43e7cukCALsCwf"
            }
          ],
          "disc_number": 1,
          "duration_ms": 219400,
          "episode": false,
          "explicit": false,
          "external_ids": {
            "isrc": "USSM11401498"
          },
          "external_urls": {
            "spotify": "https://open.spotify.com/track/3T76zPJz3tWL27FrjJe2ot"
          },
          "id": "3T76zPJz3tWL27FrjJe2ot",
          "is_local": false,
          "is_playable": true,
          "name": "Lazaretto",
          "popularity": 54,
          "preview_url": "https://p.scdn.co/mp3-preview/d0e66ab70689c5a52c08962d352adbf542cf37a4?cid=d8a5ed958d274c2e8ee717e6a4b0971d",
          "track": true,
          "track_number": 2,
          "type": "track",
          "uri": "spotify:track:3T76zPJz3tWL27FrjJe2ot"
        },
        "video_thumbnail": {
          "url": null
        }
      },
      {
        "added_at": "2022-04-26T19:50:25Z",
        "added_by": {
          "external_urls": {
            "spotify": "https://open.spotify.com/user/yrqjeis7sh8it5uztvo0dl8s5"
          },
          "id": "yrqjeis7sh8it5uztvo0dl8s5",
          "type": "user",
          "uri": "spotify:user:yrqjeis7sh8it5uztvo0dl8s5"
        },
        "is_local": false,
        "primary_color": null,
        "sharing_info": {
          "share_id": "RIuFufWjSEO0Zsre5tBi0g",
          "share_url": "https://open.spotify.com/track/0fv2KH6hac06J86hBUTcSf?si=RIuFufWjSEO0Zsre5tBi0g",
          "uri": "spotify:track:0fv2KH6hac06J86hBUTcSf"
        },
        "track": {
          "album": {
            "album_type": "album",
            "artists": [
              {
                "external_urls": {
                  "spotify": "https://open.spotify.com/artist/4V8LLVI7PbaPR0K2TGSxFF"
                },
                "id": "4V8LLVI7PbaPR0K2TGSxFF",
                "name": "Tyler, The Creator",
                "type": "artist",
                "uri": "spotify:artist:4V8LLVI7PbaPR0K2TGSxFF"
              }
            ],
            "external_urls": {
              "spotify": "https://open.spotify.com/album/5zi7WsKlIiUXv09tbGLKsE"
            },
            "id": "5zi7WsKlIiUXv09tbGLKsE",
            "images": [
              {
                "height": 640,
                "url": "https://i.scdn.co/image/ab67616d0000b2737005885df706891a3c182a57",
                "width": 640
              },
              {
                "height": 300,
                "url": "https://i.scdn.co/image/ab67616d00001e027005885df706891a3c182a57",
                "width": 300
              },
              {
                "height": 64,
                "url": "https://i.scdn.co/image/ab67616d000048517005885df706891a3c182a57",
                "width": 64
              }
            ],
            "name": "IGOR",
            "release_date": "2019-05-17",
            "release_date_precision": "day",
            "total_tracks": 12,
            "type": "album",
            "uri": "spotify:album:5zi7WsKlIiUXv09tbGLKsE"
          },
          "artists": [
            {
              "external_urls": {
                "spotify": "https://open.spotify.com/artist/4V8LLVI7PbaPR0K2TGSxFF"
              },
              "id": "4V8LLVI7PbaPR0K2TGSxFF",
              "name": "Tyler, The Creator",
              "type": "artist",
              "uri": "spotify:artist:4V8LLVI7PbaPR0K2TGSxFF"
            }
          ],
          "disc_number": 1,
          "duration_ms": 195320,
          "episode": false,
          "explicit": true,
          "external_ids": {
            "isrc": "USQX91901115"
          },
          "external_urls": {
            "spotify": "https://open.spotify.com/track/0fv2KH6hac06J86hBUTcSf"
          },
          "id": "0fv2KH6hac06J86hBUTcSf",
          "is_local": false,
          "is_playable": true,
          "name": "NEW MAGIC WAND",
          "popularity": 79,
          "preview_url": "https://p.scdn.co/mp3-preview/9ba2f7a5e848b2677beded6e4022043fc60e29e6?cid=d8a5ed958d274c2e8ee717e6a4b0971d",
          "track": true,
          "track_number": 6,
          "type": "track",
          "uri": "spotify:track:0fv2KH6hac06J86hBUTcSf"
        },
        "video_thumbnail": {
          "url": null
        }
      },
      {
        "added_at": "2022-04-26T19:50:44Z",
        "added_by": {
          "external_urls": {
            "spotify": "https://open.spotify.com/user/yrqjeis7sh8it5uztvo0dl8s5"
          },
          "id": "yrqjeis7sh8it5uztvo0dl8s5",
          "type": "user",
          "uri": "spotify:user:yrqjeis7sh8it5uztvo0dl8s5"
        },
        "is_local": false,
        "primary_color": null,
        "sharing_info": {
          "share_id": "GM9Wzl0gR9aVJLPDJXZH5g",
          "share_url": "https://open.spotify.com/track/4o6uB0Bzl7Y8sTrX5kmXfh?si=GM9Wzl0gR9aVJLPDJXZH5g",
          "uri": "spotify:track:4o6uB0Bzl7Y8sTrX5kmXfh"
        },
        "track": {
          "album": {
            "album_type": "single",
            "artists": [
              {
                "external_urls": {
                  "spotify": "https://open.spotify.com/artist/39SyHRlxu86bon1ubnh2ee"
                },
                "id": "39SyHRlxu86bon1ubnh2ee",
                "name": "Kumisolo",
                "type": "artist",
                "uri": "spotify:artist:39SyHRlxu86bon1ubnh2ee"
              }
            ],
            "external_urls": {
              "spotify": "https://open.spotify.com/album/5nkIHeLYGchqbhwD5YyqGS"
            },
            "id": "5nkIHeLYGchqbhwD5YyqGS",
            "images": [
              {
                "height": 640,
                "url": "https://i.scdn.co/image/ab67616d0000b273e843b76e138df3211ae95767",
                "width": 640
              },
              {
                "height": 300,
                "url": "https://i.scdn.co/image/ab67616d00001e02e843b76e138df3211ae95767",
                "width": 300
              },
              {
                "height": 64,
                "url": "https://i.scdn.co/image/ab67616d00004851e843b76e138df3211ae95767",
                "width": 64
              }
            ],
            "name": "La femme japonaise",
            "release_date": "2013-06-14",
            "release_date_precision": "day",
            "total_tracks": 5,
            "type": "album",
            "uri": "spotify:album:5nkIHeLYGchqbhwD5YyqGS"
          },
          "artists": [
            {
              "external_urls": {
                "spotify": "https://open.spotify.com/artist/39SyHRlxu86bon1ubnh2ee"
              },
              "id": "39SyHRlxu86bon1ubnh2ee",
              "name": "Kumisolo",
              "type": "artist",
              "uri": "spotify:artist:39SyHRlxu86bon1ubnh2ee"
            },
            {
              "external_urls": {
                "spotify": "https://open.spotify.com/artist/4DPMV2QLvwnqegaJZDkPmH"
              },
              "id": "4DPMV2QLvwnqegaJZDkPmH",
              "name": "Ricky Hollywood",
              "type": "artist",
              "uri": "spotify:artist:4DPMV2QLvwnqegaJZDkPmH"
            }
          ],
          "disc_number": 1,
          "duration_ms": 172266,
          "episode": false,
          "explicit": false,
          "external_ids": {
            "isrc": "FRZ111300324"
          },
          "external_urls": {
            "spotify": "https://open.spotify.com/track/4o6uB0Bzl7Y8sTrX5kmXfh"
          },
          "id": "4o6uB0Bzl7Y8sTrX5kmXfh",
          "is_local": false,
          "is_playable": true,
          "name": "Chapardeuse (feat. Ricky Hollywood)",
          "popularity": 10,
          "preview_url": "https://p.scdn.co/mp3-preview/f5d563ccea1ff656c68583cd312dc5fdada8e2a7?cid=d8a5ed958d274c2e8ee717e6a4b0971d",
          "track": true,
          "track_number": 2,
          "type": "track",
          "uri": "spotify:track:4o6uB0Bzl7Y8sTrX5kmXfh"
        },
        "video_thumbnail": {
          "url": null
        }
      },
      {
        "added_at": "2022-04-26T20:17:21Z",
        "added_by": {
          "external_urls": {
            "spotify": "https://open.spotify.com/user/yrqjeis7sh8it5uztvo0dl8s5"
          },
          "id": "yrqjeis7sh8it5uztvo0dl8s5",
          "type": "user",
          "uri": "spotify:user:yrqjeis7sh8it5uztvo0dl8s5"
        },
        "is_local": false,
        "primary_color": null,
        "sharing_info": {
          "share_id": "YbqzgNMOTgOfoMZg7coJfg",
          "share_url": "https://open.spotify.com/track/4CqwRPsNgnrs05KGY2MXks?si=YbqzgNMOTgOfoMZg7coJfg",
          "uri": "spotify:track:4CqwRPsNgnrs05KGY2MXks"
        },
        "track": {
          "album": {
            "album_type": "compilation",
            "artists": [
              {
                "external_urls": {
                  "spotify": "https://open.spotify.com/artist/0LyfQWJT6nXafLPZqxe9Of"
                },
                "id": "0LyfQWJT6nXafLPZqxe9Of",
                "name": "Various Artists",
                "type": "artist",
                "uri": "spotify:artist:0LyfQWJT6nXafLPZqxe9Of"
              }
            ],
            "external_urls": {
              "spotify": "https://open.spotify.com/album/0j21NLeNyi3QtU1Y8XJE7l"
            },
            "id": "0j21NLeNyi3QtU1Y8XJE7l",
            "images": [
              {
                "height": 640,
                "url": "https://i.scdn.co/image/ab67616d0000b2733175e8f65117e84329ac7b26",
                "width": 640
              },
              {
                "height": 300,
                "url": "https://i.scdn.co/image/ab67616d00001e023175e8f65117e84329ac7b26",
                "width": 300
              },
              {
                "height": 64,
                "url": "https://i.scdn.co/image/ab67616d000048513175e8f65117e84329ac7b26",
                "width": 64
              }
            ],
            "name": "Kudatah, Vol. 1",
            "release_date": "2016-08-01",
            "release_date_precision": "day",
            "total_tracks": 17,
            "type": "album",
            "uri": "spotify:album:0j21NLeNyi3QtU1Y8XJE7l"
          },
          "artists": [
            {
              "external_urls": {
                "spotify": "https://open.spotify.com/artist/0OF3elZ9nfycVA9b2IQBAU"
              },
              "id": "0OF3elZ9nfycVA9b2IQBAU",
              "name": "Amherst",
              "type": "artist",
              "uri": "spotify:artist:0OF3elZ9nfycVA9b2IQBAU"
            }
          ],
          "disc_number": 1,
          "duration_ms": 193761,
          "episode": false,
          "explicit": false,
          "external_ids": {
            "isrc": "USA2P1692184"
          },
          "external_urls": {
            "spotify": "https://open.spotify.com/track/4CqwRPsNgnrs05KGY2MXks"
          },
          "id": "4CqwRPsNgnrs05KGY2MXks",
          "is_local": false,
          "is_playable": true,
          "name": "Just a Little",
          "popularity": 24,
          "preview_url": "https://p.scdn.co/mp3-preview/06ec40e67bb41350644f5bcff18e8691899a87c7?cid=d8a5ed958d274c2e8ee717e6a4b0971d",
          "track": true,
          "track_number": 10,
          "type": "track",
          "uri": "spotify:track:4CqwRPsNgnrs05KGY2MXks"
        },
        "video_thumbnail": {
          "url": null
        }
      },
      {
        "added_at": "2022-04-26T20:22:31Z",
        "added_by": {
          "external_urls": {
            "spotify": "https://open.spotify.com/user/yrqjeis7sh8it5uztvo0dl8s5"
          },
          "id": "yrqjeis7sh8it5uztvo0dl8s5",
          "type": "user",
          "uri": "spotify:user:yrqjeis7sh8it5uztvo0dl8s5"
        },
        "is_local": false,
        "primary_color": null,
        "sharing_info": {
          "share_id": "dwXzcZk7Rkef7SSvvgfxKg",
          "share_url": "https://open.spotify.com/track/1A7Nb5XVAJzXmbkk5S59t3?si=dwXzcZk7Rkef7SSvvgfxKg",
          "uri": "spotify:track:1A7Nb5XVAJzXmbkk5S59t3"
        },
        "track": {
          "album": {
            "album_type": "album",
            "artists": [
              {
                "external_urls": {
                  "spotify": "https://open.spotify.com/artist/7xRdCnm7IiS0M1FUS15ZfO"
                },
                "id": "7xRdCnm7IiS0M1FUS15ZfO",
                "name": "Breakwater",
                "type": "artist",
                "uri": "spotify:artist:7xRdCnm7IiS0M1FUS15ZfO"
              }
            ],
            "external_urls": {
              "spotify": "https://open.spotify.com/album/6c1XA84xZorzK3rFAIgwHE"
            },
            "id": "6c1XA84xZorzK3rFAIgwHE",
            "images": [
              {
                "height": 640,
                "url": "https://i.scdn.co/image/ab67616d0000b2732995a4cce5a7826fa4b7936f",
                "width": 640
              },
              {
                "height": 300,
                "url": "https://i.scdn.co/image/ab67616d00001e022995a4cce5a7826fa4b7936f",
                "width": 300
              },
              {
                "height": 64,
                "url": "https://i.scdn.co/image/ab67616d000048512995a4cce5a7826fa4b7936f",
                "width": 64
              }
            ],
            "name": "Splashdown",
            "release_date": "1980",
            "release_date_precision": "year",
            "total_tracks": 8,
            "type": "album",
            "uri": "spotify:album:6c1XA84xZorzK3rFAIgwHE"
          },
          "artists": [
            {
              "external_urls": {
                "spotify": "https://open.spotify.com/artist/7xRdCnm7IiS0M1FUS15ZfO"
              },
              "id": "7xRdCnm7IiS0M1FUS15ZfO",
              "name": "Breakwater",
              "type": "artist",
              "uri": "spotify:artist:7xRdCnm7IiS0M1FUS15ZfO"
            }
          ],
          "disc_number": 1,
          "duration_ms": 296613,
          "episode": false,
          "explicit": false,
          "external_ids": {
            "isrc": "USAR18000209"
          },
          "external_urls": {
            "spotify": "https://open.spotify.com/track/1A7Nb5XVAJzXmbkk5S59t3"
          },
          "id": "1A7Nb5XVAJzXmbkk5S59t3",
          "is_local": false,
          "is_playable": true,
          "name": "Release the Beast",
          "popularity": 39,
          "preview_url": "https://p.scdn.co/mp3-preview/731bcb1056ac23b3c463075ae56aabe7018d85bf?cid=d8a5ed958d274c2e8ee717e6a4b0971d",
          "track": true,
          "track_number": 3,
          "type": "track",
          "uri": "spotify:track:1A7Nb5XVAJzXmbkk5S59t3"
        },
        "video_thumbnail": {
          "url": null
        }
      },
      {
        "added_at": "2022-04-26T20:26:09Z",
        "added_by": {
          "external_urls": {
            "spotify": "https://open.spotify.com/user/yrqjeis7sh8it5uztvo0dl8s5"
          },
          "id": "yrqjeis7sh8it5uztvo0dl8s5",
          "type": "user",
          "uri": "spotify:user:yrqjeis7sh8it5uztvo0dl8s5"
        },
        "is_local": false,
        "primary_color": null,
        "sharing_info": {
          "share_id": "sf9bhN_ZTwC-CB3DpKXWuQ",
          "share_url": "https://open.spotify.com/track/3xl9u7eDWuNrxnda4KoFDK?si=sf9bhN_ZTwC-CB3DpKXWuQ",
          "uri": "spotify:track:3xl9u7eDWuNrxnda4KoFDK"
        },
        "track": {
          "album": {
            "album_type": "album",
            "artists": [
              {
                "external_urls": {
                  "spotify": "https://open.spotify.com/artist/1fd3fmwlhrDl2U5wbbPQYN"
                },
                "id": "1fd3fmwlhrDl2U5wbbPQYN",
                "name": "Apashe",
                "type": "artist",
                "uri": "spotify:artist:1fd3fmwlhrDl2U5wbbPQYN"
              }
            ],
            "external_urls": {
              "spotify": "https://open.spotify.com/album/4aN2EaQB4G7z6BqcEClnMd"
            },
            "id": "4aN2EaQB4G7z6BqcEClnMd",
            "images": [
              {
                "height": 640,
                "url": "https://i.scdn.co/image/ab67616d0000b27319f1f25ed3e75a629899ef12",
                "width": 640
              },
              {
                "height": 300,
                "url": "https://i.scdn.co/image/ab67616d00001e0219f1f25ed3e75a629899ef12",
                "width": 300
              },
              {
                "height": 64,
                "url": "https://i.scdn.co/image/ab67616d0000485119f1f25ed3e75a629899ef12",
                "width": 64
              }
            ],
            "name": "Renaissance",
            "release_date": "2020-04-08",
            "release_date_precision": "day",
            "total_tracks": 13,
            "type": "album",
            "uri": "spotify:album:4aN2EaQB4G7z6BqcEClnMd"
          },
          "artists": [
            {
              "external_urls": {
                "spotify": "https://open.spotify.com/artist/1fd3fmwlhrDl2U5wbbPQYN"
              },
              "id": "1fd3fmwlhrDl2U5wbbPQYN",
              "name": "Apashe",
              "type": "artist",
              "uri": "spotify:artist:1fd3fmwlhrDl2U5wbbPQYN"
            },
            {
              "external_urls": {
                "spotify": "https://open.spotify.com/artist/7MkglOKmkE2iIJOZngg3Kj"
              },
              "id": "7MkglOKmkE2iIJOZngg3Kj",
              "name": "lia",
              "type": "artist",
              "uri": "spotify:artist:7MkglOKmkE2iIJOZngg3Kj"
            }
          ],
          "disc_number": 1,
          "duration_ms": 202800,
          "episode": false,
          "explicit": false,
          "external_ids": {
            "isrc": "CA5KR2017130"
          },
          "external_urls": {
            "spotify": "https://open.spotify.com/track/3xl9u7eDWuNrxnda4KoFDK"
          },
          "id": "3xl9u7eDWuNrxnda4KoFDK",
          "is_local": false,
          "is_playable": true,
          "name": "Behind My Eyes",
          "popularity": 43,
          "preview_url": "https://p.scdn.co/mp3-preview/c9d36c3ed1627bca3d89c428a5f9260ba4e6ea9a?cid=d8a5ed958d274c2e8ee717e6a4b0971d",
          "track": true,
          "track_number": 3,
          "type": "track",
          "uri": "spotify:track:3xl9u7eDWuNrxnda4KoFDK"
        },
        "video_thumbnail": {
          "url": null
        }
      },
      {
        "added_at": "2022-04-26T20:28:27Z",
        "added_by": {
          "external_urls": {
            "spotify": "https://open.spotify.com/user/yrqjeis7sh8it5uztvo0dl8s5"
          },
          "id": "yrqjeis7sh8it5uztvo0dl8s5",
          "type": "user",
          "uri": "spotify:user:yrqjeis7sh8it5uztvo0dl8s5"
        },
        "is_local": false,
        "primary_color": null,
        "sharing_info": {
          "share_id": "AK01Pmu3QBy4TNV7l6vgrA",
          "share_url": "https://open.spotify.com/track/3jHdKaLCkuNEkWcLVmQPCX?si=AK01Pmu3QBy4TNV7l6vgrA",
          "uri": "spotify:track:3jHdKaLCkuNEkWcLVmQPCX"
        },
        "track": {
          "album": {
            "album_type": "single",
            "artists": [
              {
                "external_urls": {
                  "spotify": "https://open.spotify.com/artist/4V8LLVI7PbaPR0K2TGSxFF"
                },
                "id": "4V8LLVI7PbaPR0K2TGSxFF",
                "name": "Tyler, The Creator",
                "type": "artist",
                "uri": "spotify:artist:4V8LLVI7PbaPR0K2TGSxFF"
              }
            ],
            "external_urls": {
              "spotify": "https://open.spotify.com/album/5iUwaD3wFVwfaAfs9Z0eCh"
            },
            "id": "5iUwaD3wFVwfaAfs9Z0eCh",
            "images": [
              {
                "height": 640,
                "url": "https://i.scdn.co/image/ab67616d0000b273ab8995f18dc3dd9f34a6acd4",
                "width": 640
              },
              {
                "height": 300,
                "url": "https://i.scdn.co/image/ab67616d00001e02ab8995f18dc3dd9f34a6acd4",
                "width": 300
              },
              {
                "height": 64,
                "url": "https://i.scdn.co/image/ab67616d00004851ab8995f18dc3dd9f34a6acd4",
                "width": 64
              }
            ],
            "name": "BEST INTEREST",
            "release_date": "2020-01-25",
            "release_date_precision": "day",
            "total_tracks": 1,
            "type": "album",
            "uri": "spotify:album:5iUwaD3wFVwfaAfs9Z0eCh"
          },
          "artists": [
            {
              "external_urls": {
                "spotify": "https://open.spotify.com/artist/4V8LLVI7PbaPR0K2TGSxFF"
              },
              "id": "4V8LLVI7PbaPR0K2TGSxFF",
              "name": "Tyler, The Creator",
              "type": "artist",
              "uri": "spotify:artist:4V8LLVI7PbaPR0K2TGSxFF"
            }
          ],
          "disc_number": 1,
          "duration_ms": 127921,
          "episode": false,
          "explicit": true,
          "external_ids": {
            "isrc": "USQX92000078"
          },
          "external_urls": {
            "spotify": "https://open.spotify.com/track/3jHdKaLCkuNEkWcLVmQPCX"
          },
          "id": "3jHdKaLCkuNEkWcLVmQPCX",
          "is_local": false,
          "is_playable": true,
          "name": "BEST INTEREST",
          "popularity": 78,
          "preview_url": "https://p.scdn.co/mp3-preview/cf36ca28a947227ba28d7ac88bfd7aec8b49e55f?cid=d8a5ed958d274c2e8ee717e6a4b0971d",
          "track": true,
          "track_number": 1,
          "type": "track",
          "uri": "spotify:track:3jHdKaLCkuNEkWcLVmQPCX"
        },
        "video_thumbnail": {
          "url": null
        }
      },
      {
        "added_at": "2022-04-26T20:29:06Z",
        "added_by": {
          "external_urls": {
            "spotify": "https://open.spotify.com/user/yrqjeis7sh8it5uztvo0dl8s5"
          },
          "id": "yrqjeis7sh8it5uztvo0dl8s5",
          "type": "user",
          "uri": "spotify:user:yrqjeis7sh8it5uztvo0dl8s5"
        },
        "is_local": false,
        "primary_color": null,
        "sharing_info": {
          "share_id": "vKI1dPflQ9eLpS24XMXb2A",
          "share_url": "https://open.spotify.com/track/1p80LdxRV74UKvL8gnD7ky?si=vKI1dPflQ9eLpS24XMXb2A",
          "uri": "spotify:track:1p80LdxRV74UKvL8gnD7ky"
        },
        "track": {
          "album": {
            "album_type": "album",
            "artists": [
              {
                "external_urls": {
                  "spotify": "https://open.spotify.com/artist/06HL4z0CvFAxyc27GXpf02"
                },
                "id": "06HL4z0CvFAxyc27GXpf02",
                "name": "Taylor Swift",
                "type": "artist",
                "uri": "spotify:artist:06HL4z0CvFAxyc27GXpf02"
              }
            ],
            "external_urls": {
              "spotify": "https://open.spotify.com/album/2QJmrSgbdM35R67eoGQo4j"
            },
            "id": "2QJmrSgbdM35R67eoGQo4j",
            "images": [
              {
                "height": 640,
                "url": "https://i.scdn.co/image/ab67616d0000b2739abdf14e6058bd3903686148",
                "width": 640
              },
              {
                "height": 300,
                "url": "https://i.scdn.co/image/ab67616d00001e029abdf14e6058bd3903686148",
                "width": 300
              },
              {
                "height": 64,
                "url": "https://i.scdn.co/image/ab67616d000048519abdf14e6058bd3903686148",
                "width": 64
              }
            ],
            "name": "1989",
            "release_date": "2014-10-27",
            "release_date_precision": "day",
            "total_tracks": 13,
            "type": "album",
            "uri": "spotify:album:2QJmrSgbdM35R67eoGQo4j"
          },
          "artists": [
            {
              "external_urls": {
                "spotify": "https://open.spotify.com/artist/06HL4z0CvFAxyc27GXpf02"
              },
              "id": "06HL4z0CvFAxyc27GXpf02",
              "name": "Taylor Swift",
              "type": "artist",
              "uri": "spotify:artist:06HL4z0CvFAxyc27GXpf02"
            }
          ],
          "disc_number": 1,
          "duration_ms": 231826,
          "episode": false,
          "explicit": false,
          "external_ids": {
            "isrc": "USCJY1431309"
          },
          "external_urls": {
            "spotify": "https://open.spotify.com/track/1p80LdxRV74UKvL8gnD7ky"
          },
          "id": "1p80LdxRV74UKvL8gnD7ky",
          "is_local": false,
          "is_playable": true,
          "name": "Blank Space",
          "popularity": 74,
          "preview_url": "https://p.scdn.co/mp3-preview/e5cb812c19b14f4dc4c92a4c996bb92d05e2bf39?cid=d8a5ed958d274c2e8ee717e6a4b0971d",
          "track": true,
          "track_number": 2,
          "type": "track",
          "uri": "spotify:track:1p80LdxRV74UKvL8gnD7ky"
        },
        "video_thumbnail": {
          "url": null
        }
      },
      {
        "added_at": "2022-04-26T20:30:57Z",
        "added_by": {
          "external_urls": {
            "spotify": "https://open.spotify.com/user/yrqjeis7sh8it5uztvo0dl8s5"
          },
          "id": "yrqjeis7sh8it5uztvo0dl8s5",
          "type": "user",
          "uri": "spotify:user:yrqjeis7sh8it5uztvo0dl8s5"
        },
        "is_local": false,
        "primary_color": null,
        "sharing_info": {
          "share_id": "wx4-TUIlSPeUmuS58V2E5A",
          "share_url": "https://open.spotify.com/track/6aWKFCjIwQbTCfXwW3Q3pS?si=wx4-TUIlSPeUmuS58V2E5A",
          "uri": "spotify:track:6aWKFCjIwQbTCfXwW3Q3pS"
        },
        "track": {
          "album": {
            "album_type": "single",
            "artists": [
              {
                "external_urls": {
                  "spotify": "https://open.spotify.com/artist/6MJKlN8ya42Agsw3iQZs6e"
                },
                "id": "6MJKlN8ya42Agsw3iQZs6e",
                "name": "French 79",
                "type": "artist",
                "uri": "spotify:artist:6MJKlN8ya42Agsw3iQZs6e"
              }
            ],
            "external_urls": {
              "spotify": "https://open.spotify.com/album/0Jw6kCnGWK4c60hTHHLnqZ"
            },
            "id": "0Jw6kCnGWK4c60hTHHLnqZ",
            "images": [
              {
                "height": 640,
                "url": "https://i.scdn.co/image/ab67616d0000b2738eb4ed91d0ea3ed0ebd04f8f",
                "width": 640
              },
              {
                "height": 300,
                "url": "https://i.scdn.co/image/ab67616d00001e028eb4ed91d0ea3ed0ebd04f8f",
                "width": 300
              },
              {
                "height": 64,
                "url": "https://i.scdn.co/image/ab67616d000048518eb4ed91d0ea3ed0ebd04f8f",
                "width": 64
              }
            ],
            "name": "Hometown",
            "release_date": "2019-09-19",
            "release_date_precision": "day",
            "total_tracks": 1,
            "type": "album",
            "uri": "spotify:album:0Jw6kCnGWK4c60hTHHLnqZ"
          },
          "artists": [
            {
              "external_urls": {
                "spotify": "https://open.spotify.com/artist/6MJKlN8ya42Agsw3iQZs6e"
              },
              "id": "6MJKlN8ya42Agsw3iQZs6e",
              "name": "French 79",
              "type": "artist",
              "uri": "spotify:artist:6MJKlN8ya42Agsw3iQZs6e"
            }
          ],
          "disc_number": 1,
          "duration_ms": 202107,
          "episode": false,
          "explicit": false,
          "external_ids": {
            "isrc": "FRU451700170"
          },
          "external_urls": {
            "spotify": "https://open.spotify.com/track/6aWKFCjIwQbTCfXwW3Q3pS"
          },
          "id": "6aWKFCjIwQbTCfXwW3Q3pS",
          "is_local": false,
          "is_playable": true,
          "name": "Hometown",
          "popularity": 20,
          "preview_url": "https://p.scdn.co/mp3-preview/1aa27d26438485ae4ce25821e3aa3bba3c72abd1?cid=d8a5ed958d274c2e8ee717e6a4b0971d",
          "track": true,
          "track_number": 1,
          "type": "track",
          "uri": "spotify:track:6aWKFCjIwQbTCfXwW3Q3pS"
        },
        "video_thumbnail": {
          "url": null
        }
      },
      {
        "added_at": "2022-04-26T20:33:41Z",
        "added_by": {
          "external_urls": {
            "spotify": "https://open.spotify.com/user/yrqjeis7sh8it5uztvo0dl8s5"
          },
          "id": "yrqjeis7sh8it5uztvo0dl8s5",
          "type": "user",
          "uri": "spotify:user:yrqjeis7sh8it5uztvo0dl8s5"
        },
        "is_local": false,
        "primary_color": null,
        "sharing_info": {
          "share_id": "KcUiooonRq-VAGhaYbQVHA",
          "share_url": "https://open.spotify.com/track/62XsUDISgorMOl0wEyTmjF?si=KcUiooonRq-VAGhaYbQVHA",
          "uri": "spotify:track:62XsUDISgorMOl0wEyTmjF"
        },
        "track": {
          "album": {
            "album_type": "single",
            "artists": [
              {
                "external_urls": {
                  "spotify": "https://open.spotify.com/artist/5DD5GZd4ElmQTy9NleMvKJ"
                },
                "id": "5DD5GZd4ElmQTy9NleMvKJ",
                "name": "Tessa Violet",
                "type": "artist",
                "uri": "spotify:artist:5DD5GZd4ElmQTy9NleMvKJ"
              }
            ],
            "external_urls": {
              "spotify": "https://open.spotify.com/album/1F13wSNSRCdThVcLWgzzW6"
            },
            "id": "1F13wSNSRCdThVcLWgzzW6",
            "images": [
              {
                "height": 640,
                "url": "https://i.scdn.co/image/ab67616d0000b2731b3c5d0c77cbe28967b43257",
                "width": 640
              },
              {
                "height": 300,
                "url": "https://i.scdn.co/image/ab67616d00001e021b3c5d0c77cbe28967b43257",
                "width": 300
              },
              {
                "height": 64,
                "url": "https://i.scdn.co/image/ab67616d000048511b3c5d0c77cbe28967b43257",
                "width": 64
              }
            ],
            "name": "I Like (the idea of) You",
            "release_date": "2019-05-03",
            "release_date_precision": "day",
            "total_tracks": 1,
            "type": "album",
            "uri": "spotify:album:1F13wSNSRCdThVcLWgzzW6"
          },
          "artists": [
            {
              "external_urls": {
                "spotify": "https://open.spotify.com/artist/5DD5GZd4ElmQTy9NleMvKJ"
              },
              "id": "5DD5GZd4ElmQTy9NleMvKJ",
              "name": "Tessa Violet",
              "type": "artist",
              "uri": "spotify:artist:5DD5GZd4ElmQTy9NleMvKJ"
            }
          ],
          "disc_number": 1,
          "duration_ms": 168480,
          "episode": false,
          "explicit": false,
          "external_ids": {
            "isrc": "US3DF1939970"
          },
          "external_urls": {
            "spotify": "https://open.spotify.com/track/62XsUDISgorMOl0wEyTmjF"
          },
          "id": "62XsUDISgorMOl0wEyTmjF",
          "is_local": false,
          "is_playable": true,
          "linked_from": {
            "external_urls": {
              "spotify": "https://open.spotify.com/track/6uMYislEOsyrUR4V2TN8Qz"
            },
            "id": "6uMYislEOsyrUR4V2TN8Qz",
            "type": "track",
            "uri": "spotify:track:6uMYislEOsyrUR4V2TN8Qz"
          },
          "name": "I Like (the idea of) You",
          "popularity": 44,
          "preview_url": "https://p.scdn.co/mp3-preview/eabbd4bbe8ccf8da94a6e1f6431c7408fe17fcd2?cid=d8a5ed958d274c2e8ee717e6a4b0971d",
          "track": true,
          "track_number": 4,
          "type": "track",
          "uri": "spotify:track:62XsUDISgorMOl0wEyTmjF"
        },
        "video_thumbnail": {
          "url": null
        }
      },
      {
        "added_at": "2022-04-26T20:37:03Z",
        "added_by": {
          "external_urls": {
            "spotify": "https://open.spotify.com/user/yrqjeis7sh8it5uztvo0dl8s5"
          },
          "id": "yrqjeis7sh8it5uztvo0dl8s5",
          "type": "user",
          "uri": "spotify:user:yrqjeis7sh8it5uztvo0dl8s5"
        },
        "is_local": false,
        "primary_color": null,
        "sharing_info": {
          "share_id": "ywkrBlZZTDeLs6KPzF4jVw",
          "share_url": "https://open.spotify.com/track/4J5YIM08RZ9SJCcCJeEv9z?si=ywkrBlZZTDeLs6KPzF4jVw",
          "uri": "spotify:track:4J5YIM08RZ9SJCcCJeEv9z"
        },
        "track": {
          "album": {
            "album_type": "album",
            "artists": [
              {
                "external_urls": {
                  "spotify": "https://open.spotify.com/artist/4FZ3j1oH43e7cukCALsCwf"
                },
                "id": "4FZ3j1oH43e7cukCALsCwf",
                "name": "Jack White",
                "type": "artist",
                "uri": "spotify:artist:4FZ3j1oH43e7cukCALsCwf"
              }
            ],
            "external_urls": {
              "spotify": "https://open.spotify.com/album/6btUx9G2BPajQ7P6mpTxId"
            },
            "id": "6btUx9G2BPajQ7P6mpTxId",
            "images": [
              {
                "height": 640,
                "url": "https://i.scdn.co/image/ab67616d0000b273f06339d17dd213558c5e7088",
                "width": 640
              },
              {
                "height": 300,
                "url": "https://i.scdn.co/image/ab67616d00001e02f06339d17dd213558c5e7088",
                "width": 300
              },
              {
                "height": 64,
                "url": "https://i.scdn.co/image/ab67616d00004851f06339d17dd213558c5e7088",
                "width": 64
              }
            ],
            "name": "Boarding House Reach",
            "release_date": "2018-03-23",
            "release_date_precision": "day",
            "total_tracks": 13,
            "type": "album",
            "uri": "spotify:album:6btUx9G2BPajQ7P6mpTxId"
          },
          "artists": [
            {
              "external_urls": {
                "spotify": "https://open.spotify.com/artist/4FZ3j1oH43e7cukCALsCwf"
              },
              "id": "4FZ3j1oH43e7cukCALsCwf",
              "name": "Jack White",
              "type": "artist",
              "uri": "spotify:artist:4FZ3j1oH43e7cukCALsCwf"
            }
          ],
          "disc_number": 1,
          "duration_ms": 339000,
          "episode": false,
          "explicit": false,
          "external_ids": {
            "isrc": "USSM11711236"
          },
          "external_urls": {
            "spotify": "https://open.spotify.com/track/4J5YIM08RZ9SJCcCJeEv9z"
          },
          "id": "4J5YIM08RZ9SJCcCJeEv9z",
          "is_local": false,
          "is_playable": true,
          "name": "Corporation",
          "popularity": 26,
          "preview_url": "https://p.scdn.co/mp3-preview/8a7cc6a7a71a8c36c1bde0289689b5adcbe5cab2?cid=d8a5ed958d274c2e8ee717e6a4b0971d",
          "track": true,
          "track_number": 3,
          "type": "track",
          "uri": "spotify:track:4J5YIM08RZ9SJCcCJeEv9z"
        },
        "video_thumbnail": {
          "url": null
        }
      },
      {
        "added_at": "2022-04-26T20:42:58Z",
        "added_by": {
          "external_urls": {
            "spotify": "https://open.spotify.com/user/yrqjeis7sh8it5uztvo0dl8s5"
          },
          "id": "yrqjeis7sh8it5uztvo0dl8s5",
          "type": "user",
          "uri": "spotify:user:yrqjeis7sh8it5uztvo0dl8s5"
        },
        "is_local": false,
        "primary_color": null,
        "sharing_info": {
          "share_id": "E1BGUkf_Q-SCUjYQuooVDQ",
          "share_url": "https://open.spotify.com/track/4o6BgsqLIBViaGVbx5rbRk?si=E1BGUkf_Q-SCUjYQuooVDQ",
          "uri": "spotify:track:4o6BgsqLIBViaGVbx5rbRk"
        },
        "track": {
          "album": {
            "album_type": "album",
            "artists": [
              {
                "external_urls": {
                  "spotify": "https://open.spotify.com/artist/77tT1kLj6mCWtFNqiOmP9H"
                },
                "id": "77tT1kLj6mCWtFNqiOmP9H",
                "name": "Daryl Hall & John Oates",
                "type": "artist",
                "uri": "spotify:artist:77tT1kLj6mCWtFNqiOmP9H"
              }
            ],
            "external_urls": {
              "spotify": "https://open.spotify.com/album/4LniALl9S6YedTFdiZWOMS"
            },
            "id": "4LniALl9S6YedTFdiZWOMS",
            "images": [
              {
                "height": 640,
                "url": "https://i.scdn.co/image/ab67616d0000b273fe1a9aa59e3c6189a09ae37a",
                "width": 640
              },
              {
                "height": 300,
                "url": "https://i.scdn.co/image/ab67616d00001e02fe1a9aa59e3c6189a09ae37a",
                "width": 300
              },
              {
                "height": 64,
                "url": "https://i.scdn.co/image/ab67616d00004851fe1a9aa59e3c6189a09ae37a",
                "width": 64
              }
            ],
            "name": "Voices",
            "release_date": "1980",
            "release_date_precision": "year",
            "total_tracks": 11,
            "type": "album",
            "uri": "spotify:album:4LniALl9S6YedTFdiZWOMS"
          },
          "artists": [
            {
              "external_urls": {
                "spotify": "https://open.spotify.com/artist/77tT1kLj6mCWtFNqiOmP9H"
              },
              "id": "77tT1kLj6mCWtFNqiOmP9H",
              "name": "Daryl Hall & John Oates",
              "type": "artist",
              "uri": "spotify:artist:77tT1kLj6mCWtFNqiOmP9H"
            }
          ],
          "disc_number": 1,
          "duration_ms": 190626,
          "episode": false,
          "explicit": false,
          "external_ids": {
            "isrc": "USRC10301828"
          },
          "external_urls": {
            "spotify": "https://open.spotify.com/track/4o6BgsqLIBViaGVbx5rbRk"
          },
          "id": "4o6BgsqLIBViaGVbx5rbRk",
          "is_local": false,
          "is_playable": true,
          "name": "You Make My Dreams (Come True)",
          "popularity": 75,
          "preview_url": "https://p.scdn.co/mp3-preview/5f096f9722067db33f1453ea8804725ca15ac5bf?cid=d8a5ed958d274c2e8ee717e6a4b0971d",
          "track": true,
          "track_number": 8,
          "type": "track",
          "uri": "spotify:track:4o6BgsqLIBViaGVbx5rbRk"
        },
        "video_thumbnail": {
          "url": null
        }
      },
      {
        "added_at": "2022-04-26T20:43:40Z",
        "added_by": {
          "external_urls": {
            "spotify": "https://open.spotify.com/user/yrqjeis7sh8it5uztvo0dl8s5"
          },
          "id": "yrqjeis7sh8it5uztvo0dl8s5",
          "type": "user",
          "uri": "spotify:user:yrqjeis7sh8it5uztvo0dl8s5"
        },
        "is_local": false,
        "primary_color": null,
        "sharing_info": {
          "share_id": "8Vc9fvX-T7muA-PXWn_xDQ",
          "share_url": "https://open.spotify.com/track/3dmSYBNzHfYJr5m8n5xDWs?si=8Vc9fvX-T7muA-PXWn_xDQ",
          "uri": "spotify:track:3dmSYBNzHfYJr5m8n5xDWs"
        },
        "track": {
          "album": {
            "album_type": "album",
            "artists": [
              {
                "external_urls": {
                  "spotify": "https://open.spotify.com/artist/1ououJVWgWsHWMYDLvT7sH"
                },
                "id": "1ououJVWgWsHWMYDLvT7sH",
                "name": "Ball Park Music",
                "type": "artist",
                "uri": "spotify:artist:1ououJVWgWsHWMYDLvT7sH"
              }
            ],
            "external_urls": {
              "spotify": "https://open.spotify.com/album/6vlcfWk6eOpiJASyyLP80j"
            },
            "id": "6vlcfWk6eOpiJASyyLP80j",
            "images": [
              {
                "height": 640,
                "url": "https://i.scdn.co/image/ab67616d0000b2739fbba7dca4f38bc68ea39c82",
                "width": 640
              },
              {
                "height": 300,
                "url": "https://i.scdn.co/image/ab67616d00001e029fbba7dca4f38bc68ea39c82",
                "width": 300
              },
              {
                "height": 64,
                "url": "https://i.scdn.co/image/ab67616d000048519fbba7dca4f38bc68ea39c82",
                "width": 64
              }
            ],
            "name": "GOOD MOOD",
            "release_date": "2018-02-16",
            "release_date_precision": "day",
            "total_tracks": 10,
            "type": "album",
            "uri": "spotify:album:6vlcfWk6eOpiJASyyLP80j"
          },
          "artists": [
            {
              "external_urls": {
                "spotify": "https://open.spotify.com/artist/1ououJVWgWsHWMYDLvT7sH"
              },
              "id": "1ououJVWgWsHWMYDLvT7sH",
              "name": "Ball Park Music",
              "type": "artist",
              "uri": "spotify:artist:1ououJVWgWsHWMYDLvT7sH"
            }
          ],
          "disc_number": 1,
          "duration_ms": 177120,
          "episode": false,
          "explicit": true,
          "external_ids": {
            "isrc": "AUF301700006"
          },
          "external_urls": {
            "spotify": "https://open.spotify.com/track/3dmSYBNzHfYJr5m8n5xDWs"
          },
          "id": "3dmSYBNzHfYJr5m8n5xDWs",
          "is_local": false,
          "is_playable": true,
          "linked_from": {
            "external_urls": {
              "spotify": "https://open.spotify.com/track/4pNMksynlIGH2OxnzxAkeE"
            },
            "id": "4pNMksynlIGH2OxnzxAkeE",
            "type": "track",
            "uri": "spotify:track:4pNMksynlIGH2OxnzxAkeE"
          },
          "name": "Hands Off My Body",
          "popularity": 27,
          "preview_url": "https://p.scdn.co/mp3-preview/eb34dc2934c65815fe69270f3254793015283c99?cid=d8a5ed958d274c2e8ee717e6a4b0971d",
          "track": true,
          "track_number": 6,
          "type": "track",
          "uri": "spotify:track:3dmSYBNzHfYJr5m8n5xDWs"
        },
        "video_thumbnail": {
          "url": null
        }
      },
      {
        "added_at": "2022-04-26T21:19:43Z",
        "added_by": {
          "external_urls": {
            "spotify": "https://open.spotify.com/user/yrqjeis7sh8it5uztvo0dl8s5"
          },
          "id": "yrqjeis7sh8it5uztvo0dl8s5",
          "type": "user",
          "uri": "spotify:user:yrqjeis7sh8it5uztvo0dl8s5"
        },
        "is_local": false,
        "primary_color": null,
        "sharing_info": {
          "share_id": "Po9aHAWySgyqEyahPtXG6Q",
          "share_url": "https://open.spotify.com/track/3UJtBug6VeduUSGRIGvHKk?si=Po9aHAWySgyqEyahPtXG6Q",
          "uri": "spotify:track:3UJtBug6VeduUSGRIGvHKk"
        },
        "track": {
          "album": {
            "album_type": "album",
            "artists": [
              {
                "external_urls": {
                  "spotify": "https://open.spotify.com/artist/3PTChKfG6D55ZVha09QoEa"
                },
                "id": "3PTChKfG6D55ZVha09QoEa",
                "name": "Unown",
                "type": "artist",
                "uri": "spotify:artist:3PTChKfG6D55ZVha09QoEa"
              }
            ],
            "external_urls": {
              "spotify": "https://open.spotify.com/album/0K8GfheaCeTvC2PJEVOcQl"
            },
            "id": "0K8GfheaCeTvC2PJEVOcQl",
            "images": [
              {
                "height": 640,
                "url": "https://i.scdn.co/image/ab67616d0000b2738c35639e27bd70a9e1334c68",
                "width": 640
              },
              {
                "height": 300,
                "url": "https://i.scdn.co/image/ab67616d00001e028c35639e27bd70a9e1334c68",
                "width": 300
              },
              {
                "height": 64,
                "url": "https://i.scdn.co/image/ab67616d000048518c35639e27bd70a9e1334c68",
                "width": 64
              }
            ],
            "name": "Redukqs",
            "release_date": "2018-12-21",
            "release_date_precision": "day",
            "total_tracks": 15,
            "type": "album",
            "uri": "spotify:album:0K8GfheaCeTvC2PJEVOcQl"
          },
          "artists": [
            {
              "external_urls": {
                "spotify": "https://open.spotify.com/artist/3PTChKfG6D55ZVha09QoEa"
              },
              "id": "3PTChKfG6D55ZVha09QoEa",
              "name": "Unown",
              "type": "artist",
              "uri": "spotify:artist:3PTChKfG6D55ZVha09QoEa"
            }
          ],
          "disc_number": 1,
          "duration_ms": 230550,
          "episode": false,
          "explicit": true,
          "external_ids": {
            "isrc": "QZES91899682"
          },
          "external_urls": {
            "spotify": "https://open.spotify.com/track/3UJtBug6VeduUSGRIGvHKk"
          },
          "id": "3UJtBug6VeduUSGRIGvHKk",
          "is_local": false,
          "is_playable": true,
          "name": "Dethfunk",
          "popularity": 36,
          "preview_url": "https://p.scdn.co/mp3-preview/0517e877c37a193306c05d90dd4199a05e1550fc?cid=d8a5ed958d274c2e8ee717e6a4b0971d",
          "track": true,
          "track_number": 2,
          "type": "track",
          "uri": "spotify:track:3UJtBug6VeduUSGRIGvHKk"
        },
        "video_thumbnail": {
          "url": null
        }
      },
      {
        "added_at": "2022-04-27T06:57:45Z",
        "added_by": {
          "external_urls": {
            "spotify": "https://open.spotify.com/user/yrqjeis7sh8it5uztvo0dl8s5"
          },
          "id": "yrqjeis7sh8it5uztvo0dl8s5",
          "type": "user",
          "uri": "spotify:user:yrqjeis7sh8it5uztvo0dl8s5"
        },
        "is_local": false,
        "primary_color": null,
        "sharing_info": {
          "share_id": "N2MeDZezRZ6O1UyM0_mgqA",
          "share_url": "https://open.spotify.com/track/0A3JTAIflJc9Z7nbOVYlAh?si=N2MeDZezRZ6O1UyM0_mgqA",
          "uri": "spotify:track:0A3JTAIflJc9Z7nbOVYlAh"
        },
        "track": {
          "album": {
            "album_type": "album",
            "artists": [
              {
                "external_urls": {
                  "spotify": "https://open.spotify.com/artist/4FZ3j1oH43e7cukCALsCwf"
                },
                "id": "4FZ3j1oH43e7cukCALsCwf",
                "name": "Jack White",
                "type": "artist",
                "uri": "spotify:artist:4FZ3j1oH43e7cukCALsCwf"
              }
            ],
            "external_urls": {
              "spotify": "https://open.spotify.com/album/6btUx9G2BPajQ7P6mpTxId"
            },
            "id": "6btUx9G2BPajQ7P6mpTxId",
            "images": [
              {
                "height": 640,
                "url": "https://i.scdn.co/image/ab67616d0000b273f06339d17dd213558c5e7088",
                "width": 640
              },
              {
                "height": 300,
                "url": "https://i.scdn.co/image/ab67616d00001e02f06339d17dd213558c5e7088",
                "width": 300
              },
              {
                "height": 64,
                "url": "https://i.scdn.co/image/ab67616d00004851f06339d17dd213558c5e7088",
                "width": 64
              }
            ],
            "name": "Boarding House Reach",
            "release_date": "2018-03-23",
            "release_date_precision": "day",
            "total_tracks": 13,
            "type": "album",
            "uri": "spotify:album:6btUx9G2BPajQ7P6mpTxId"
          },
          "artists": [
            {
              "external_urls": {
                "spotify": "https://open.spotify.com/artist/4FZ3j1oH43e7cukCALsCwf"
              },
              "id": "4FZ3j1oH43e7cukCALsCwf",
              "name": "Jack White",
              "type": "artist",
              "uri": "spotify:artist:4FZ3j1oH43e7cukCALsCwf"
            }
          ],
          "disc_number": 1,
          "duration_ms": 277800,
          "episode": false,
          "explicit": false,
          "external_ids": {
            "isrc": "USSM11710996"
          },
          "external_urls": {
            "spotify": "https://open.spotify.com/track/0A3JTAIflJc9Z7nbOVYlAh"
          },
          "id": "0A3JTAIflJc9Z7nbOVYlAh",
          "is_local": false,
          "is_playable": true,
          "name": "Connected By Love",
          "popularity": 27,
          "preview_url": "https://p.scdn.co/mp3-preview/21969703ac92c86f1019404cfbe73c7adf82dfd6?cid=d8a5ed958d274c2e8ee717e6a4b0971d",
          "track": true,
          "track_number": 1,
          "type": "track",
          "uri": "spotify:track:0A3JTAIflJc9Z7nbOVYlAh"
        },
        "video_thumbnail": {
          "url": null
        }
      },
      {
        "added_at": "2022-04-28T11:53:08Z",
        "added_by": {
          "external_urls": {
            "spotify": "https://open.spotify.com/user/yrqjeis7sh8it5uztvo0dl8s5"
          },
          "id": "yrqjeis7sh8it5uztvo0dl8s5",
          "type": "user",
          "uri": "spotify:user:yrqjeis7sh8it5uztvo0dl8s5"
        },
        "is_local": false,
        "primary_color": null,
        "sharing_info": {
          "share_id": "e_aZLvE8QRytaGFm0HEfEA",
          "share_url": "https://open.spotify.com/track/1cXa22Jmxjt6SI2oZ1NRM1?si=e_aZLvE8QRytaGFm0HEfEA",
          "uri": "spotify:track:1cXa22Jmxjt6SI2oZ1NRM1"
        },
        "track": {
          "album": {
            "album_type": "album",
            "artists": [
              {
                "external_urls": {
                  "spotify": "https://open.spotify.com/artist/0xOeVMOz2fVg5BJY3N6akT"
                },
                "id": "0xOeVMOz2fVg5BJY3N6akT",
                "name": "Jaden",
                "type": "artist",
                "uri": "spotify:artist:0xOeVMOz2fVg5BJY3N6akT"
              }
            ],
            "external_urls": {
              "spotify": "https://open.spotify.com/album/6cKBoHXh7dKn2gVsGniZ58"
            },
            "id": "6cKBoHXh7dKn2gVsGniZ58",
            "images": [
              {
                "height": 640,
                "url": "https://i.scdn.co/image/ab67616d0000b27360ec4df52c2d724bc53ffec5",
                "width": 640
              },
              {
                "height": 300,
                "url": "https://i.scdn.co/image/ab67616d00001e0260ec4df52c2d724bc53ffec5",
                "width": 300
              },
              {
                "height": 64,
                "url": "https://i.scdn.co/image/ab67616d0000485160ec4df52c2d724bc53ffec5",
                "width": 64
              }
            ],
            "name": "ERYS (Deluxe)",
            "release_date": "2019-07-05",
            "release_date_precision": "day",
            "total_tracks": 20,
            "type": "album",
            "uri": "spotify:album:6cKBoHXh7dKn2gVsGniZ58"
          },
          "artists": [
            {
              "external_urls": {
                "spotify": "https://open.spotify.com/artist/0xOeVMOz2fVg5BJY3N6akT"
              },
              "id": "0xOeVMOz2fVg5BJY3N6akT",
              "name": "Jaden",
              "type": "artist",
              "uri": "spotify:artist:0xOeVMOz2fVg5BJY3N6akT"
            },
            {
              "external_urls": {
                "spotify": "https://open.spotify.com/artist/1aSwrSGBNGMLn9ymttfRkk"
              },
              "id": "1aSwrSGBNGMLn9ymttfRkk",
              "name": "Lido",
              "type": "artist",
              "uri": "spotify:artist:1aSwrSGBNGMLn9ymttfRkk"
            }
          ],
          "disc_number": 1,
          "duration_ms": 280720,
          "episode": false,
          "explicit": true,
          "external_ids": {
            "isrc": "QMJMT1902183"
          },
          "external_urls": {
            "spotify": "https://open.spotify.com/track/1cXa22Jmxjt6SI2oZ1NRM1"
          },
          "id": "1cXa22Jmxjt6SI2oZ1NRM1",
          "is_local": false,
          "is_playable": true,
          "name": "K",
          "popularity": 45,
          "preview_url": "https://p.scdn.co/mp3-preview/adbbc1c5b750512757569ea480c7dfaad483b98f?cid=d8a5ed958d274c2e8ee717e6a4b0971d",
          "track": true,
          "track_number": 4,
          "type": "track",
          "uri": "spotify:track:1cXa22Jmxjt6SI2oZ1NRM1"
        },
        "video_thumbnail": {
          "url": null
        }
      },
      {
        "added_at": "2022-04-29T05:25:51Z",
        "added_by": {
          "external_urls": {
            "spotify": "https://open.spotify.com/user/yrqjeis7sh8it5uztvo0dl8s5"
          },
          "id": "yrqjeis7sh8it5uztvo0dl8s5",
          "type": "user",
          "uri": "spotify:user:yrqjeis7sh8it5uztvo0dl8s5"
        },
        "is_local": false,
        "primary_color": null,
        "sharing_info": {
          "share_id": "giBkOdWSRsiX6nPtM4bImQ",
          "share_url": "https://open.spotify.com/track/3oXoI6uRSGpcKCviBCXl1L?si=giBkOdWSRsiX6nPtM4bImQ",
          "uri": "spotify:track:3oXoI6uRSGpcKCviBCXl1L"
        },
        "track": {
          "album": {
            "album_type": "single",
            "artists": [
              {
                "external_urls": {
                  "spotify": "https://open.spotify.com/artist/5ApQnMT6oR8eLguf24xb9S"
                },
                "id": "5ApQnMT6oR8eLguf24xb9S",
                "name": "Foreign Air",
                "type": "artist",
                "uri": "spotify:artist:5ApQnMT6oR8eLguf24xb9S"
              }
            ],
            "external_urls": {
              "spotify": "https://open.spotify.com/album/0U5Uo3UFYDc3BA56tmfTtX"
            },
            "id": "0U5Uo3UFYDc3BA56tmfTtX",
            "images": [
              {
                "height": 640,
                "url": "https://i.scdn.co/image/ab67616d0000b2737ee0d61a2f554adef8cd60de",
                "width": 640
              },
              {
                "height": 300,
                "url": "https://i.scdn.co/image/ab67616d00001e027ee0d61a2f554adef8cd60de",
                "width": 300
              },
              {
                "height": 64,
                "url": "https://i.scdn.co/image/ab67616d000048517ee0d61a2f554adef8cd60de",
                "width": 64
              }
            ],
            "name": "The Madness",
            "release_date": "2021-10-22",
            "release_date_precision": "day",
            "total_tracks": 3,
            "type": "album",
            "uri": "spotify:album:0U5Uo3UFYDc3BA56tmfTtX"
          },
          "artists": [
            {
              "external_urls": {
                "spotify": "https://open.spotify.com/artist/5ApQnMT6oR8eLguf24xb9S"
              },
              "id": "5ApQnMT6oR8eLguf24xb9S",
              "name": "Foreign Air",
              "type": "artist",
              "uri": "spotify:artist:5ApQnMT6oR8eLguf24xb9S"
            }
          ],
          "disc_number": 1,
          "duration_ms": 188272,
          "episode": false,
          "explicit": false,
          "external_ids": {
            "isrc": "CAN112100671"
          },
          "external_urls": {
            "spotify": "https://open.spotify.com/track/3oXoI6uRSGpcKCviBCXl1L"
          },
          "id": "3oXoI6uRSGpcKCviBCXl1L",
          "is_local": false,
          "is_playable": true,
          "name": "The Madness",
          "popularity": 50,
          "preview_url": "https://p.scdn.co/mp3-preview/e837d07129cba12e1f16786872702b545df80eea?cid=d8a5ed958d274c2e8ee717e6a4b0971d",
          "track": true,
          "track_number": 1,
          "type": "track",
          "uri": "spotify:track:3oXoI6uRSGpcKCviBCXl1L"
        },
        "video_thumbnail": {
          "url": null
        }
      },
      {
        "added_at": "2022-04-29T05:30:55Z",
        "added_by": {
          "external_urls": {
            "spotify": "https://open.spotify.com/user/yrqjeis7sh8it5uztvo0dl8s5"
          },
          "id": "yrqjeis7sh8it5uztvo0dl8s5",
          "type": "user",
          "uri": "spotify:user:yrqjeis7sh8it5uztvo0dl8s5"
        },
        "is_local": false,
        "primary_color": null,
        "sharing_info": {
          "share_id": "BYjEsIL1SOysevk2rsCfDw",
          "share_url": "https://open.spotify.com/track/2jZgzSxNSg1hTCq0ewWHGJ?si=BYjEsIL1SOysevk2rsCfDw",
          "uri": "spotify:track:2jZgzSxNSg1hTCq0ewWHGJ"
        },
        "track": {
          "album": {
            "album_type": "album",
            "artists": [
              {
                "external_urls": {
                  "spotify": "https://open.spotify.com/artist/1GLtl8uqKmnyCWxHmw9tL4"
                },
                "id": "1GLtl8uqKmnyCWxHmw9tL4",
                "name": "The Kooks",
                "type": "artist",
                "uri": "spotify:artist:1GLtl8uqKmnyCWxHmw9tL4"
              }
            ],
            "external_urls": {
              "spotify": "https://open.spotify.com/album/2HfdqVaLccOvzfsHej9A8g"
            },
            "id": "2HfdqVaLccOvzfsHej9A8g",
            "images": [
              {
                "height": 640,
                "url": "https://i.scdn.co/image/ab67616d0000b2739b8326ac45405124151f7726",
                "width": 640
              },
              {
                "height": 300,
                "url": "https://i.scdn.co/image/ab67616d00001e029b8326ac45405124151f7726",
                "width": 300
              },
              {
                "height": 64,
                "url": "https://i.scdn.co/image/ab67616d000048519b8326ac45405124151f7726",
                "width": 64
              }
            ],
            "name": "Junk Of The Heart",
            "release_date": "2011-01-01",
            "release_date_precision": "day",
            "total_tracks": 12,
            "type": "album",
            "uri": "spotify:album:2HfdqVaLccOvzfsHej9A8g"
          },
          "artists": [
            {
              "external_urls": {
                "spotify": "https://open.spotify.com/artist/1GLtl8uqKmnyCWxHmw9tL4"
              },
              "id": "1GLtl8uqKmnyCWxHmw9tL4",
              "name": "The Kooks",
              "type": "artist",
              "uri": "spotify:artist:1GLtl8uqKmnyCWxHmw9tL4"
            }
          ],
          "disc_number": 1,
          "duration_ms": 187253,
          "episode": false,
          "explicit": false,
          "external_ids": {
            "isrc": "GBAAA1100181"
          },
          "external_urls": {
            "spotify": "https://open.spotify.com/track/2jZgzSxNSg1hTCq0ewWHGJ"
          },
          "id": "2jZgzSxNSg1hTCq0ewWHGJ",
          "is_local": false,
          "is_playable": true,
          "name": "Junk Of The Heart (Happy)",
          "popularity": 61,
          "preview_url": "https://p.scdn.co/mp3-preview/f85001507dd0f4ae99de98ab5165b61a9a415879?cid=d8a5ed958d274c2e8ee717e6a4b0971d",
          "track": true,
          "track_number": 1,
          "type": "track",
          "uri": "spotify:track:2jZgzSxNSg1hTCq0ewWHGJ"
        },
        "video_thumbnail": {
          "url": null
        }
      },
      {
        "added_at": "2022-04-30T10:32:22Z",
        "added_by": {
          "external_urls": {
            "spotify": "https://open.spotify.com/user/yrqjeis7sh8it5uztvo0dl8s5"
          },
          "id": "yrqjeis7sh8it5uztvo0dl8s5",
          "type": "user",
          "uri": "spotify:user:yrqjeis7sh8it5uztvo0dl8s5"
        },
        "is_local": false,
        "primary_color": null,
        "sharing_info": {
          "share_id": "4okDK5ulRGm8F33Hb6RTKg",
          "share_url": "https://open.spotify.com/track/19iqWNzp5LwEdvntpEK8MP?si=4okDK5ulRGm8F33Hb6RTKg",
          "uri": "spotify:track:19iqWNzp5LwEdvntpEK8MP"
        },
        "track": {
          "album": {
            "album_type": "album",
            "artists": [
              {
                "external_urls": {
                  "spotify": "https://open.spotify.com/artist/4wo1267SJuUfHgasdlfNfc"
                },
                "id": "4wo1267SJuUfHgasdlfNfc",
                "name": "The Raconteurs",
                "type": "artist",
                "uri": "spotify:artist:4wo1267SJuUfHgasdlfNfc"
              }
            ],
            "external_urls": {
              "spotify": "https://open.spotify.com/album/4fDaiqpXlswOza10LvoZHb"
            },
            "id": "4fDaiqpXlswOza10LvoZHb",
            "images": [
              {
                "height": 640,
                "url": "https://i.scdn.co/image/ab67616d0000b27392dc0572b3ba4b588ec1134e",
                "width": 640
              },
              {
                "height": 300,
                "url": "https://i.scdn.co/image/ab67616d00001e0292dc0572b3ba4b588ec1134e",
                "width": 300
              },
              {
                "height": 64,
                "url": "https://i.scdn.co/image/ab67616d0000485192dc0572b3ba4b588ec1134e",
                "width": 64
              }
            ],
            "name": "Broken Boy Soldiers",
            "release_date": "2006",
            "release_date_precision": "year",
            "total_tracks": 10,
            "type": "album",
            "uri": "spotify:album:4fDaiqpXlswOza10LvoZHb"
          },
          "artists": [
            {
              "external_urls": {
                "spotify": "https://open.spotify.com/artist/4wo1267SJuUfHgasdlfNfc"
              },
              "id": "4wo1267SJuUfHgasdlfNfc",
              "name": "The Raconteurs",
              "type": "artist",
              "uri": "spotify:artist:4wo1267SJuUfHgasdlfNfc"
            }
          ],
          "disc_number": 1,
          "duration_ms": 215266,
          "episode": false,
          "explicit": false,
          "external_ids": {
            "isrc": "USVT10600052"
          },
          "external_urls": {
            "spotify": "https://open.spotify.com/track/19iqWNzp5LwEdvntpEK8MP"
          },
          "id": "19iqWNzp5LwEdvntpEK8MP",
          "is_local": false,
          "is_playable": true,
          "name": "Steady, As She Goes",
          "popularity": 53,
          "preview_url": "https://p.scdn.co/mp3-preview/cc73c19243cd3f3a33b726d2bceec7d49429abc7?cid=d8a5ed958d274c2e8ee717e6a4b0971d",
          "track": true,
          "track_number": 1,
          "type": "track",
          "uri": "spotify:track:19iqWNzp5LwEdvntpEK8MP"
        },
        "video_thumbnail": {
          "url": null
        }
      },
      {
        "added_at": "2022-05-05T19:22:04Z",
        "added_by": {
          "external_urls": {
            "spotify": "https://open.spotify.com/user/yrqjeis7sh8it5uztvo0dl8s5"
          },
          "id": "yrqjeis7sh8it5uztvo0dl8s5",
          "type": "user",
          "uri": "spotify:user:yrqjeis7sh8it5uztvo0dl8s5"
        },
        "is_local": false,
        "primary_color": null,
        "sharing_info": {
          "share_id": "K61wZyr5RA27IseGxvDL8A",
          "share_url": "https://open.spotify.com/track/0Fi0yp52XmFnLwT1KdXjmI?si=K61wZyr5RA27IseGxvDL8A",
          "uri": "spotify:track:0Fi0yp52XmFnLwT1KdXjmI"
        },
        "track": {
          "album": {
            "album_type": "album",
            "artists": [
              {
                "external_urls": {
                  "spotify": "https://open.spotify.com/artist/1e16kiJQtCTveTl7TQnkFN"
                },
                "id": "1e16kiJQtCTveTl7TQnkFN",
                "name": "Scary Pockets",
                "type": "artist",
                "uri": "spotify:artist:1e16kiJQtCTveTl7TQnkFN"
              }
            ],
            "external_urls": {
              "spotify": "https://open.spotify.com/album/5aFCLQhcz58nfwlPqO0bek"
            },
            "id": "5aFCLQhcz58nfwlPqO0bek",
            "images": [
              {
                "height": 640,
                "url": "https://i.scdn.co/image/ab67616d0000b273a45396542ad7fc557f1a2fdb",
                "width": 640
              },
              {
                "height": 300,
                "url": "https://i.scdn.co/image/ab67616d00001e02a45396542ad7fc557f1a2fdb",
                "width": 300
              },
              {
                "height": 64,
                "url": "https://i.scdn.co/image/ab67616d00004851a45396542ad7fc557f1a2fdb",
                "width": 64
              }
            ],
            "name": "Kitsch Funk",
            "release_date": "2018-03-02",
            "release_date_precision": "day",
            "total_tracks": 10,
            "type": "album",
            "uri": "spotify:album:5aFCLQhcz58nfwlPqO0bek"
          },
          "artists": [
            {
              "external_urls": {
                "spotify": "https://open.spotify.com/artist/1e16kiJQtCTveTl7TQnkFN"
              },
              "id": "1e16kiJQtCTveTl7TQnkFN",
              "name": "Scary Pockets",
              "type": "artist",
              "uri": "spotify:artist:1e16kiJQtCTveTl7TQnkFN"
            },
            {
              "external_urls": {
                "spotify": "https://open.spotify.com/artist/3TDPiKzbGXppI5fO7JRtvq"
              },
              "id": "3TDPiKzbGXppI5fO7JRtvq",
              "name": "Abby Celso",
              "type": "artist",
              "uri": "spotify:artist:3TDPiKzbGXppI5fO7JRtvq"
            }
          ],
          "disc_number": 1,
          "duration_ms": 129000,
          "episode": false,
          "explicit": false,
          "external_ids": {
            "isrc": "QZBRF1807594"
          },
          "external_urls": {
            "spotify": "https://open.spotify.com/track/0Fi0yp52XmFnLwT1KdXjmI"
          },
          "id": "0Fi0yp52XmFnLwT1KdXjmI",
          "is_local": false,
          "is_playable": true,
          "name": "Can't Buy Me Love",
          "popularity": 28,
          "preview_url": "https://p.scdn.co/mp3-preview/0b1c7077505ba123a0e43dfe38b2bc5a19801c52?cid=d8a5ed958d274c2e8ee717e6a4b0971d",
          "track": true,
          "track_number": 9,
          "type": "track",
          "uri": "spotify:track:0Fi0yp52XmFnLwT1KdXjmI"
        },
        "video_thumbnail": {
          "url": null
        }
      },
      {
        "added_at": "2022-05-06T06:32:00Z",
        "added_by": {
          "external_urls": {
            "spotify": "https://open.spotify.com/user/yrqjeis7sh8it5uztvo0dl8s5"
          },
          "id": "yrqjeis7sh8it5uztvo0dl8s5",
          "type": "user",
          "uri": "spotify:user:yrqjeis7sh8it5uztvo0dl8s5"
        },
        "is_local": false,
        "primary_color": null,
        "sharing_info": {
          "share_id": "6cFj2wIhT-mvAyVi2lESlQ",
          "share_url": "https://open.spotify.com/track/4qYHnP5AmKzXbJhciPV8si?si=6cFj2wIhT-mvAyVi2lESlQ",
          "uri": "spotify:track:4qYHnP5AmKzXbJhciPV8si"
        },
        "track": {
          "album": {
            "album_type": "album",
            "artists": [
              {
                "external_urls": {
                  "spotify": "https://open.spotify.com/artist/48nwxUvPJZkm8uPa7xMzmj"
                },
                "id": "48nwxUvPJZkm8uPa7xMzmj",
                "name": "Bobby \"Blue\" Bland",
                "type": "artist",
                "uri": "spotify:artist:48nwxUvPJZkm8uPa7xMzmj"
              }
            ],
            "external_urls": {
              "spotify": "https://open.spotify.com/album/5OkHt7JZ6HSkJH359y2H31"
            },
            "id": "5OkHt7JZ6HSkJH359y2H31",
            "images": [
              {
                "height": 640,
                "url": "https://i.scdn.co/image/ab67616d0000b273229e87b6d1da512c14164cc0",
                "width": 640
              },
              {
                "height": 300,
                "url": "https://i.scdn.co/image/ab67616d00001e02229e87b6d1da512c14164cc0",
                "width": 300
              },
              {
                "height": 64,
                "url": "https://i.scdn.co/image/ab67616d00004851229e87b6d1da512c14164cc0",
                "width": 64
              }
            ],
            "name": "Dreamer",
            "release_date": "1974-01-01",
            "release_date_precision": "day",
            "total_tracks": 10,
            "type": "album",
            "uri": "spotify:album:5OkHt7JZ6HSkJH359y2H31"
          },
          "artists": [
            {
              "external_urls": {
                "spotify": "https://open.spotify.com/artist/48nwxUvPJZkm8uPa7xMzmj"
              },
              "id": "48nwxUvPJZkm8uPa7xMzmj",
              "name": "Bobby \"Blue\" Bland",
              "type": "artist",
              "uri": "spotify:artist:48nwxUvPJZkm8uPa7xMzmj"
            }
          ],
          "disc_number": 1,
          "duration_ms": 233560,
          "episode": false,
          "explicit": false,
          "external_ids": {
            "isrc": "USMC17449307"
          },
          "external_urls": {
            "spotify": "https://open.spotify.com/track/4qYHnP5AmKzXbJhciPV8si"
          },
          "id": "4qYHnP5AmKzXbJhciPV8si",
          "is_local": false,
          "is_playable": true,
          "name": "Ain't No Love In The Heart Of The City - Single Version",
          "popularity": 57,
          "preview_url": "https://p.scdn.co/mp3-preview/a98555d47b3dcee546be8e9a4434c859ac271884?cid=d8a5ed958d274c2e8ee717e6a4b0971d",
          "track": true,
          "track_number": 1,
          "type": "track",
          "uri": "spotify:track:4qYHnP5AmKzXbJhciPV8si"
        },
        "video_thumbnail": {
          "url": null
        }
      },
      {
        "added_at": "2022-05-06T06:32:15Z",
        "added_by": {
          "external_urls": {
            "spotify": "https://open.spotify.com/user/yrqjeis7sh8it5uztvo0dl8s5"
          },
          "id": "yrqjeis7sh8it5uztvo0dl8s5",
          "type": "user",
          "uri": "spotify:user:yrqjeis7sh8it5uztvo0dl8s5"
        },
        "is_local": false,
        "primary_color": null,
        "sharing_info": {
          "share_id": "XVDoiu8bRLyZPz91MC-qgA",
          "share_url": "https://open.spotify.com/track/0Q2FDq304w57PGAKKcC3Qk?si=XVDoiu8bRLyZPz91MC-qgA",
          "uri": "spotify:track:0Q2FDq304w57PGAKKcC3Qk"
        },
        "track": {
          "album": {
            "album_type": "single",
            "artists": [
              {
                "external_urls": {
                  "spotify": "https://open.spotify.com/artist/6sFIWsNpZYqfjUpaCgueju"
                },
                "id": "6sFIWsNpZYqfjUpaCgueju",
                "name": "Carly Rae Jepsen",
                "type": "artist",
                "uri": "spotify:artist:6sFIWsNpZYqfjUpaCgueju"
              }
            ],
            "external_urls": {
              "spotify": "https://open.spotify.com/album/5WCdg2iITZNONNV8Wp5P7M"
            },
            "id": "5WCdg2iITZNONNV8Wp5P7M",
            "images": [
              {
                "height": 640,
                "url": "https://i.scdn.co/image/ab67616d0000b273cc73fb1b7b61a3146a6cd354",
                "width": 640
              },
              {
                "height": 300,
                "url": "https://i.scdn.co/image/ab67616d00001e02cc73fb1b7b61a3146a6cd354",
                "width": 300
              },
              {
                "height": 64,
                "url": "https://i.scdn.co/image/ab67616d00004851cc73fb1b7b61a3146a6cd354",
                "width": 64
              }
            ],
            "name": "Western Wind",
            "release_date": "2022-05-06",
            "release_date_precision": "day",
            "total_tracks": 1,
            "type": "album",
            "uri": "spotify:album:5WCdg2iITZNONNV8Wp5P7M"
          },
          "artists": [
            {
              "external_urls": {
                "spotify": "https://open.spotify.com/artist/6sFIWsNpZYqfjUpaCgueju"
              },
              "id": "6sFIWsNpZYqfjUpaCgueju",
              "name": "Carly Rae Jepsen",
              "type": "artist",
              "uri": "spotify:artist:6sFIWsNpZYqfjUpaCgueju"
            }
          ],
          "disc_number": 1,
          "duration_ms": 225946,
          "episode": false,
          "explicit": false,
          "external_ids": {
            "isrc": "USUM72206209"
          },
          "external_urls": {
            "spotify": "https://open.spotify.com/track/0Q2FDq304w57PGAKKcC3Qk"
          },
          "id": "0Q2FDq304w57PGAKKcC3Qk",
          "is_local": false,
          "is_playable": true,
          "name": "Western Wind",
          "popularity": 44,
          "preview_url": "https://p.scdn.co/mp3-preview/6061e64e7038c55d076f23d6c2d6a2a6651a404f?cid=d8a5ed958d274c2e8ee717e6a4b0971d",
          "track": true,
          "track_number": 1,
          "type": "track",
          "uri": "spotify:track:0Q2FDq304w57PGAKKcC3Qk"
        },
        "video_thumbnail": {
          "url": null
        }
      },
      {
        "added_at": "2022-05-09T21:55:29Z",
        "added_by": {
          "external_urls": {
            "spotify": "https://open.spotify.com/user/yrqjeis7sh8it5uztvo0dl8s5"
          },
          "id": "yrqjeis7sh8it5uztvo0dl8s5",
          "type": "user",
          "uri": "spotify:user:yrqjeis7sh8it5uztvo0dl8s5"
        },
        "is_local": false,
        "primary_color": null,
        "sharing_info": {
          "share_id": "BIrZAmDMTDCmEsbChfqVfQ",
          "share_url": "https://open.spotify.com/track/4f8Mh5wuWHOsfXtzjrJB3t?si=BIrZAmDMTDCmEsbChfqVfQ",
          "uri": "spotify:track:4f8Mh5wuWHOsfXtzjrJB3t"
        },
        "track": {
          "album": {
            "album_type": "album",
            "artists": [
              {
                "external_urls": {
                  "spotify": "https://open.spotify.com/artist/4V8LLVI7PbaPR0K2TGSxFF"
                },
                "id": "4V8LLVI7PbaPR0K2TGSxFF",
                "name": "Tyler, The Creator",
                "type": "artist",
                "uri": "spotify:artist:4V8LLVI7PbaPR0K2TGSxFF"
              }
            ],
            "external_urls": {
              "spotify": "https://open.spotify.com/album/5zi7WsKlIiUXv09tbGLKsE"
            },
            "id": "5zi7WsKlIiUXv09tbGLKsE",
            "images": [
              {
                "height": 640,
                "url": "https://i.scdn.co/image/ab67616d0000b2737005885df706891a3c182a57",
                "width": 640
              },
              {
                "height": 300,
                "url": "https://i.scdn.co/image/ab67616d00001e027005885df706891a3c182a57",
                "width": 300
              },
              {
                "height": 64,
                "url": "https://i.scdn.co/image/ab67616d000048517005885df706891a3c182a57",
                "width": 64
              }
            ],
            "name": "IGOR",
            "release_date": "2019-05-17",
            "release_date_precision": "day",
            "total_tracks": 12,
            "type": "album",
            "uri": "spotify:album:5zi7WsKlIiUXv09tbGLKsE"
          },
          "artists": [
            {
              "external_urls": {
                "spotify": "https://open.spotify.com/artist/4V8LLVI7PbaPR0K2TGSxFF"
              },
              "id": "4V8LLVI7PbaPR0K2TGSxFF",
              "name": "Tyler, The Creator",
              "type": "artist",
              "uri": "spotify:artist:4V8LLVI7PbaPR0K2TGSxFF"
            }
          ],
          "disc_number": 1,
          "duration_ms": 212013,
          "episode": false,
          "explicit": true,
          "external_ids": {
            "isrc": "USQX91901112"
          },
          "external_urls": {
            "spotify": "https://open.spotify.com/track/4f8Mh5wuWHOsfXtzjrJB3t"
          },
          "id": "4f8Mh5wuWHOsfXtzjrJB3t",
          "is_local": false,
          "is_playable": true,
          "name": "I THINK",
          "popularity": 71,
          "preview_url": "https://p.scdn.co/mp3-preview/e3be3ca8e4b8f303b81714bc065d6bf74ef0abcf?cid=d8a5ed958d274c2e8ee717e6a4b0971d",
          "track": true,
          "track_number": 3,
          "type": "track",
          "uri": "spotify:track:4f8Mh5wuWHOsfXtzjrJB3t"
        },
        "video_thumbnail": {
          "url": null
        }
      },
      {
        "added_at": "2022-05-13T15:18:00Z",
        "added_by": {
          "external_urls": {
            "spotify": "https://open.spotify.com/user/yrqjeis7sh8it5uztvo0dl8s5"
          },
          "id": "yrqjeis7sh8it5uztvo0dl8s5",
          "type": "user",
          "uri": "spotify:user:yrqjeis7sh8it5uztvo0dl8s5"
        },
        "is_local": false,
        "primary_color": null,
        "sharing_info": {
          "share_id": "zTpQh_J0TiqRUD0p8Q1N8A",
          "share_url": "https://open.spotify.com/track/5Gt9bxniM1SxN61yRzRhXL?si=zTpQh_J0TiqRUD0p8Q1N8A",
          "uri": "spotify:track:5Gt9bxniM1SxN61yRzRhXL"
        },
        "track": {
          "album": {
            "album_type": "album",
            "artists": [
              {
                "external_urls": {
                  "spotify": "https://open.spotify.com/artist/2YZyLoL8N0Wb9xBt1NhZWg"
                },
                "id": "2YZyLoL8N0Wb9xBt1NhZWg",
                "name": "Kendrick Lamar",
                "type": "artist",
                "uri": "spotify:artist:2YZyLoL8N0Wb9xBt1NhZWg"
              }
            ],
            "external_urls": {
              "spotify": "https://open.spotify.com/album/1atjqOZTCdrjxjMyCPZc2g"
            },
            "id": "1atjqOZTCdrjxjMyCPZc2g",
            "images": [
              {
                "height": 640,
                "url": "https://i.scdn.co/image/ab67616d0000b273f30764d5fa1e439ad6a7742f",
                "width": 640
              },
              {
                "height": 300,
                "url": "https://i.scdn.co/image/ab67616d00001e02f30764d5fa1e439ad6a7742f",
                "width": 300
              },
              {
                "height": 64,
                "url": "https://i.scdn.co/image/ab67616d00004851f30764d5fa1e439ad6a7742f",
                "width": 64
              }
            ],
            "name": "Mr. Morale & The Big Steppers",
            "release_date": "2022-05-13",
            "release_date_precision": "day",
            "total_tracks": 18,
            "type": "album",
            "uri": "spotify:album:1atjqOZTCdrjxjMyCPZc2g"
          },
          "artists": [
            {
              "external_urls": {
                "spotify": "https://open.spotify.com/artist/2YZyLoL8N0Wb9xBt1NhZWg"
              },
              "id": "2YZyLoL8N0Wb9xBt1NhZWg",
              "name": "Kendrick Lamar",
              "type": "artist",
              "uri": "spotify:artist:2YZyLoL8N0Wb9xBt1NhZWg"
            }
          ],
          "disc_number": 1,
          "duration_ms": 255377,
          "episode": false,
          "explicit": true,
          "external_ids": {
            "isrc": "USUM72208961"
          },
          "external_urls": {
            "spotify": "https://open.spotify.com/track/5Gt9bxniM1SxN61yRzRhXL"
          },
          "id": "5Gt9bxniM1SxN61yRzRhXL",
          "is_local": false,
          "is_playable": true,
          "linked_from": {
            "external_urls": {
              "spotify": "https://open.spotify.com/track/05zd5Nv0e02ZqrlC8A2cwx"
            },
            "id": "05zd5Nv0e02ZqrlC8A2cwx",
            "type": "track",
            "uri": "spotify:track:05zd5Nv0e02ZqrlC8A2cwx"
          },
          "name": "United In Grief",
          "popularity": 73,
          "preview_url": "https://p.scdn.co/mp3-preview/08ce7a7c54f8f2473d06827284425343936416e1?cid=d8a5ed958d274c2e8ee717e6a4b0971d",
          "track": true,
          "track_number": 1,
          "type": "track",
          "uri": "spotify:track:5Gt9bxniM1SxN61yRzRhXL"
        },
        "video_thumbnail": {
          "url": null
        }
      },
      {
        "added_at": "2022-06-06T19:08:31Z",
        "added_by": {
          "external_urls": {
            "spotify": "https://open.spotify.com/user/yrqjeis7sh8it5uztvo0dl8s5"
          },
          "id": "yrqjeis7sh8it5uztvo0dl8s5",
          "type": "user",
          "uri": "spotify:user:yrqjeis7sh8it5uztvo0dl8s5"
        },
        "is_local": false,
        "primary_color": null,
        "sharing_info": {
          "share_id": "DwFmoDQAT5OI0r_Fd5QZLQ",
          "share_url": "https://open.spotify.com/track/2bhfHrX4IJzF62XKzqZpPX?si=DwFmoDQAT5OI0r_Fd5QZLQ",
          "uri": "spotify:track:2bhfHrX4IJzF62XKzqZpPX"
        },
        "track": {
          "album": {
            "album_type": "album",
            "artists": [
              {
                "external_urls": {
                  "spotify": "https://open.spotify.com/artist/05TeWWFqSVEUurt1lVhh4q"
                },
                "id": "05TeWWFqSVEUurt1lVhh4q",
                "name": "Lou Doillon",
                "type": "artist",
                "uri": "spotify:artist:05TeWWFqSVEUurt1lVhh4q"
              }
            ],
            "external_urls": {
              "spotify": "https://open.spotify.com/album/06TZNVLfMrf0vtk0WsYwj4"
            },
            "id": "06TZNVLfMrf0vtk0WsYwj4",
            "images": [
              {
                "height": 640,
                "url": "https://i.scdn.co/image/ab67616d0000b27374160807275bce3fffa8f4f5",
                "width": 640
              },
              {
                "height": 300,
                "url": "https://i.scdn.co/image/ab67616d00001e0274160807275bce3fffa8f4f5",
                "width": 300
              },
              {
                "height": 64,
                "url": "https://i.scdn.co/image/ab67616d0000485174160807275bce3fffa8f4f5",
                "width": 64
              }
            ],
            "name": "Lay Low",
            "release_date": "2015-10-09",
            "release_date_precision": "day",
            "total_tracks": 11,
            "type": "album",
            "uri": "spotify:album:06TZNVLfMrf0vtk0WsYwj4"
          },
          "artists": [
            {
              "external_urls": {
                "spotify": "https://open.spotify.com/artist/05TeWWFqSVEUurt1lVhh4q"
              },
              "id": "05TeWWFqSVEUurt1lVhh4q",
              "name": "Lou Doillon",
              "type": "artist",
              "uri": "spotify:artist:05TeWWFqSVEUurt1lVhh4q"
            }
          ],
          "disc_number": 1,
          "duration_ms": 166080,
          "episode": false,
          "explicit": false,
          "external_ids": {
            "isrc": "FRUM71501587"
          },
          "external_urls": {
            "spotify": "https://open.spotify.com/track/2bhfHrX4IJzF62XKzqZpPX"
          },
          "id": "2bhfHrX4IJzF62XKzqZpPX",
          "is_local": false,
          "is_playable": true,
          "name": "Where To Start",
          "popularity": 58,
          "preview_url": "https://p.scdn.co/mp3-preview/d9b20106732d227ff27ce48a7d5445082830fe45?cid=d8a5ed958d274c2e8ee717e6a4b0971d",
          "track": true,
          "track_number": 3,
          "type": "track",
          "uri": "spotify:track:2bhfHrX4IJzF62XKzqZpPX"
        },
        "video_thumbnail": {
          "url": null
        }
      },
      {
        "added_at": "2022-06-06T19:08:38Z",
        "added_by": {
          "external_urls": {
            "spotify": "https://open.spotify.com/user/yrqjeis7sh8it5uztvo0dl8s5"
          },
          "id": "yrqjeis7sh8it5uztvo0dl8s5",
          "type": "user",
          "uri": "spotify:user:yrqjeis7sh8it5uztvo0dl8s5"
        },
        "is_local": false,
        "primary_color": null,
        "sharing_info": {
          "share_id": "howpKFZ9QQ6AuexYTDGGFA",
          "share_url": "https://open.spotify.com/track/0LbSa5AZ55oTE6vYvlYBG8?si=howpKFZ9QQ6AuexYTDGGFA",
          "uri": "spotify:track:0LbSa5AZ55oTE6vYvlYBG8"
        },
        "track": {
          "album": {
            "album_type": "album",
            "artists": [
              {
                "external_urls": {
                  "spotify": "https://open.spotify.com/artist/2e53aHBQdCMKWqHDuyJsjC"
                },
                "id": "2e53aHBQdCMKWqHDuyJsjC",
                "name": "Free",
                "type": "artist",
                "uri": "spotify:artist:2e53aHBQdCMKWqHDuyJsjC"
              }
            ],
            "external_urls": {
              "spotify": "https://open.spotify.com/album/0KP81rh3lxcY3KsFeQ8W4V"
            },
            "id": "0KP81rh3lxcY3KsFeQ8W4V",
            "images": [
              {
                "height": 640,
                "url": "https://i.scdn.co/image/ab67616d0000b273406eefcc1c81a76836996369",
                "width": 640
              },
              {
                "height": 300,
                "url": "https://i.scdn.co/image/ab67616d00001e02406eefcc1c81a76836996369",
                "width": 300
              },
              {
                "height": 64,
                "url": "https://i.scdn.co/image/ab67616d00004851406eefcc1c81a76836996369",
                "width": 64
              }
            ],
            "name": "Fire And Water",
            "release_date": "2008-01-01",
            "release_date_precision": "day",
            "total_tracks": 30,
            "type": "album",
            "uri": "spotify:album:0KP81rh3lxcY3KsFeQ8W4V"
          },
          "artists": [
            {
              "external_urls": {
                "spotify": "https://open.spotify.com/artist/2e53aHBQdCMKWqHDuyJsjC"
              },
              "id": "2e53aHBQdCMKWqHDuyJsjC",
              "name": "Free",
              "type": "artist",
              "uri": "spotify:artist:2e53aHBQdCMKWqHDuyJsjC"
            }
          ],
          "disc_number": 2,
          "duration_ms": 324240,
          "episode": false,
          "explicit": false,
          "external_ids": {
            "isrc": "GBAAN0100177"
          },
          "external_urls": {
            "spotify": "https://open.spotify.com/track/0LbSa5AZ55oTE6vYvlYBG8"
          },
          "id": "0LbSa5AZ55oTE6vYvlYBG8",
          "is_local": false,
          "is_playable": true,
          "name": "Mr Big - Live At Sunderland / 1970",
          "popularity": 18,
          "preview_url": "https://p.scdn.co/mp3-preview/c84d085c7ce52083808e53665019cf9fbd59902a?cid=d8a5ed958d274c2e8ee717e6a4b0971d",
          "track": true,
          "track_number": 13,
          "type": "track",
          "uri": "spotify:track:0LbSa5AZ55oTE6vYvlYBG8"
        },
        "video_thumbnail": {
          "url": null
        }
      },
      {
        "added_at": "2022-06-07T07:38:13Z",
        "added_by": {
          "external_urls": {
            "spotify": "https://open.spotify.com/user/yrqjeis7sh8it5uztvo0dl8s5"
          },
          "id": "yrqjeis7sh8it5uztvo0dl8s5",
          "type": "user",
          "uri": "spotify:user:yrqjeis7sh8it5uztvo0dl8s5"
        },
        "is_local": false,
        "primary_color": null,
        "sharing_info": {
          "share_id": "AGDX_FHkSca2Rw1iolGCkQ",
          "share_url": "https://open.spotify.com/track/5zH710lFSLtkHbMkslLDjR?si=AGDX_FHkSca2Rw1iolGCkQ",
          "uri": "spotify:track:5zH710lFSLtkHbMkslLDjR"
        },
        "track": {
          "album": {
            "album_type": "album",
            "artists": [
              {
                "external_urls": {
                  "spotify": "https://open.spotify.com/artist/34jw2BbxjoYalTp8cJFCPv"
                },
                "id": "34jw2BbxjoYalTp8cJFCPv",
                "name": "Heart",
                "type": "artist",
                "uri": "spotify:artist:34jw2BbxjoYalTp8cJFCPv"
              }
            ],
            "external_urls": {
              "spotify": "https://open.spotify.com/album/2N0AgtWbCmVoNUl2GN1opH"
            },
            "id": "2N0AgtWbCmVoNUl2GN1opH",
            "images": [
              {
                "height": 640,
                "url": "https://i.scdn.co/image/ab67616d0000b2738e8c08ca2feb999bb84f05e6",
                "width": 640
              },
              {
                "height": 300,
                "url": "https://i.scdn.co/image/ab67616d00001e028e8c08ca2feb999bb84f05e6",
                "width": 300
              },
              {
                "height": 64,
                "url": "https://i.scdn.co/image/ab67616d000048518e8c08ca2feb999bb84f05e6",
                "width": 64
              }
            ],
            "name": "Dreamboat Annie",
            "release_date": "1975",
            "release_date_precision": "year",
            "total_tracks": 10,
            "type": "album",
            "uri": "spotify:album:2N0AgtWbCmVoNUl2GN1opH"
          },
          "artists": [
            {
              "external_urls": {
                "spotify": "https://open.spotify.com/artist/34jw2BbxjoYalTp8cJFCPv"
              },
              "id": "34jw2BbxjoYalTp8cJFCPv",
              "name": "Heart",
              "type": "artist",
              "uri": "spotify:artist:34jw2BbxjoYalTp8cJFCPv"
            }
          ],
          "disc_number": 1,
          "duration_ms": 293440,
          "episode": false,
          "explicit": false,
          "external_ids": {
            "isrc": "USCA28600007"
          },
          "external_urls": {
            "spotify": "https://open.spotify.com/track/5zH710lFSLtkHbMkslLDjR"
          },
          "id": "5zH710lFSLtkHbMkslLDjR",
          "is_local": false,
          "is_playable": true,
          "name": "Crazy On You",
          "popularity": 63,
          "preview_url": "https://p.scdn.co/mp3-preview/5406f2b487189ad8e94e93a5ec2586c13a9bcdf1?cid=d8a5ed958d274c2e8ee717e6a4b0971d",
          "track": true,
          "track_number": 3,
          "type": "track",
          "uri": "spotify:track:5zH710lFSLtkHbMkslLDjR"
        },
        "video_thumbnail": {
          "url": null
        }
      },
      {
        "added_at": "2022-06-16T18:01:59Z",
        "added_by": {
          "external_urls": {
            "spotify": "https://open.spotify.com/user/yrqjeis7sh8it5uztvo0dl8s5"
          },
          "id": "yrqjeis7sh8it5uztvo0dl8s5",
          "type": "user",
          "uri": "spotify:user:yrqjeis7sh8it5uztvo0dl8s5"
        },
        "is_local": false,
        "primary_color": null,
        "sharing_info": {
          "share_id": "HBQXZ7t0ROy84J5J1BH4Tg",
          "share_url": "https://open.spotify.com/track/0rBVbLgFvNZNQ9p8Ioodd8?si=HBQXZ7t0ROy84J5J1BH4Tg",
          "uri": "spotify:track:0rBVbLgFvNZNQ9p8Ioodd8"
        },
        "track": {
          "album": {
            "album_type": "single",
            "artists": [
              {
                "external_urls": {
                  "spotify": "https://open.spotify.com/artist/4vzYNk1PCVroqaS8GkcSb1"
                },
                "id": "4vzYNk1PCVroqaS8GkcSb1",
                "name": "Schokk",
                "type": "artist",
                "uri": "spotify:artist:4vzYNk1PCVroqaS8GkcSb1"
              },
              {
                "external_urls": {
                  "spotify": "https://open.spotify.com/artist/1gCOYbJNUa1LBVO5rlx0jB"
                },
                "id": "1gCOYbJNUa1LBVO5rlx0jB",
                "name": "Oxxxymiron",
                "type": "artist",
                "uri": "spotify:artist:1gCOYbJNUa1LBVO5rlx0jB"
              }
            ],
            "external_urls": {
              "spotify": "https://open.spotify.com/album/1aAhErxrYJaqFtqUyQbXVM"
            },
            "id": "1aAhErxrYJaqFtqUyQbXVM",
            "images": [
              {
                "height": 640,
                "url": "https://i.scdn.co/image/ab67616d0000b273b6037478d361ea77561022a8",
                "width": 640
              },
              {
                "height": 300,
                "url": "https://i.scdn.co/image/ab67616d00001e02b6037478d361ea77561022a8",
                "width": 300
              },
              {
                "height": 64,
                "url": "https://i.scdn.co/image/ab67616d00004851b6037478d361ea77561022a8",
                "width": 64
              }
            ],
            "name": "То густо, то пусто",
            "release_date": "2011-06-01",
            "release_date_precision": "day",
            "total_tracks": 4,
            "type": "album",
            "uri": "spotify:album:1aAhErxrYJaqFtqUyQbXVM"
          },
          "artists": [
            {
              "external_urls": {
                "spotify": "https://open.spotify.com/artist/4vzYNk1PCVroqaS8GkcSb1"
              },
              "id": "4vzYNk1PCVroqaS8GkcSb1",
              "name": "Schokk",
              "type": "artist",
              "uri": "spotify:artist:4vzYNk1PCVroqaS8GkcSb1"
            },
            {
              "external_urls": {
                "spotify": "https://open.spotify.com/artist/1gCOYbJNUa1LBVO5rlx0jB"
              },
              "id": "1gCOYbJNUa1LBVO5rlx0jB",
              "name": "Oxxxymiron",
              "type": "artist",
              "uri": "spotify:artist:1gCOYbJNUa1LBVO5rlx0jB"
            }
          ],
          "disc_number": 1,
          "duration_ms": 217208,
          "episode": false,
          "explicit": true,
          "external_ids": {
            "isrc": "FRX281730510"
          },
          "external_urls": {
            "spotify": "https://open.spotify.com/track/0rBVbLgFvNZNQ9p8Ioodd8"
          },
          "id": "0rBVbLgFvNZNQ9p8Ioodd8",
          "is_local": false,
          "is_playable": true,
          "name": "То густо, то пусто",
          "popularity": 35,
          "preview_url": "https://p.scdn.co/mp3-preview/1fd95853892d0f728d4b30d2e470930a8eacb7cb?cid=d8a5ed958d274c2e8ee717e6a4b0971d",
          "track": true,
          "track_number": 1,
          "type": "track",
          "uri": "spotify:track:0rBVbLgFvNZNQ9p8Ioodd8"
        },
        "video_thumbnail": {
          "url": null
        }
      },
      {
        "added_at": "2022-06-16T18:02:13Z",
        "added_by": {
          "external_urls": {
            "spotify": "https://open.spotify.com/user/yrqjeis7sh8it5uztvo0dl8s5"
          },
          "id": "yrqjeis7sh8it5uztvo0dl8s5",
          "type": "user",
          "uri": "spotify:user:yrqjeis7sh8it5uztvo0dl8s5"
        },
        "is_local": false,
        "primary_color": null,
        "sharing_info": {
          "share_id": "no5_NmJhQ6CzfzU4_lkNgQ",
          "share_url": "https://open.spotify.com/track/0VKpmchcyKYQ1ZalAKnfhT?si=no5_NmJhQ6CzfzU4_lkNgQ",
          "uri": "spotify:track:0VKpmchcyKYQ1ZalAKnfhT"
        },
        "track": {
          "album": {
            "album_type": "single",
            "artists": [
              {
                "external_urls": {
                  "spotify": "https://open.spotify.com/artist/4FZ3j1oH43e7cukCALsCwf"
                },
                "id": "4FZ3j1oH43e7cukCALsCwf",
                "name": "Jack White",
                "type": "artist",
                "uri": "spotify:artist:4FZ3j1oH43e7cukCALsCwf"
              }
            ],
            "external_urls": {
              "spotify": "https://open.spotify.com/album/1c5GxvnVBWZQsTEODrZqpQ"
            },
            "id": "1c5GxvnVBWZQsTEODrZqpQ",
            "images": [
              {
                "height": 640,
                "url": "https://i.scdn.co/image/ab67616d0000b273458f823ce90815811a6cf011",
                "width": 640
              },
              {
                "height": 300,
                "url": "https://i.scdn.co/image/ab67616d00001e02458f823ce90815811a6cf011",
                "width": 300
              },
              {
                "height": 64,
                "url": "https://i.scdn.co/image/ab67616d00004851458f823ce90815811a6cf011",
                "width": 64
              }
            ],
            "name": "If I Die Tomorrow",
            "release_date": "2022-06-08",
            "release_date_precision": "day",
            "total_tracks": 1,
            "type": "album",
            "uri": "spotify:album:1c5GxvnVBWZQsTEODrZqpQ"
          },
          "artists": [
            {
              "external_urls": {
                "spotify": "https://open.spotify.com/artist/4FZ3j1oH43e7cukCALsCwf"
              },
              "id": "4FZ3j1oH43e7cukCALsCwf",
              "name": "Jack White",
              "type": "artist",
              "uri": "spotify:artist:4FZ3j1oH43e7cukCALsCwf"
            }
          ],
          "disc_number": 1,
          "duration_ms": 179541,
          "episode": false,
          "explicit": false,
          "external_ids": {
            "isrc": "US3JJ2100690"
          },
          "external_urls": {
            "spotify": "https://open.spotify.com/track/0VKpmchcyKYQ1ZalAKnfhT"
          },
          "id": "0VKpmchcyKYQ1ZalAKnfhT",
          "is_local": false,
          "is_playable": true,
          "name": "If I Die Tomorrow",
          "popularity": 36,
          "preview_url": "https://p.scdn.co/mp3-preview/5ce03b20ced83dc4f673ad84455ae728899a70e7?cid=d8a5ed958d274c2e8ee717e6a4b0971d",
          "track": true,
          "track_number": 1,
          "type": "track",
          "uri": "spotify:track:0VKpmchcyKYQ1ZalAKnfhT"
        },
        "video_thumbnail": {
          "url": null
        }
      },
      {
        "added_at": "2022-06-16T18:03:04Z",
        "added_by": {
          "external_urls": {
            "spotify": "https://open.spotify.com/user/yrqjeis7sh8it5uztvo0dl8s5"
          },
          "id": "yrqjeis7sh8it5uztvo0dl8s5",
          "type": "user",
          "uri": "spotify:user:yrqjeis7sh8it5uztvo0dl8s5"
        },
        "is_local": false,
        "primary_color": null,
        "sharing_info": {
          "share_id": "VWs_n73yS2Cy2g3Hz387Aw",
          "share_url": "https://open.spotify.com/track/5Ds0VGkTSQ1jf4KzLUpZPb?si=VWs_n73yS2Cy2g3Hz387Aw",
          "uri": "spotify:track:5Ds0VGkTSQ1jf4KzLUpZPb"
        },
        "track": {
          "album": {
            "album_type": "compilation",
            "artists": [
              {
                "external_urls": {
                  "spotify": "https://open.spotify.com/artist/6PAt558ZEZl0DmdXlnjMgD"
                },
                "id": "6PAt558ZEZl0DmdXlnjMgD",
                "name": "Eric Clapton",
                "type": "artist",
                "uri": "spotify:artist:6PAt558ZEZl0DmdXlnjMgD"
              }
            ],
            "external_urls": {
              "spotify": "https://open.spotify.com/album/6FCakQJ6z6TF0y0qkHYKgy"
            },
            "id": "6FCakQJ6z6TF0y0qkHYKgy",
            "images": [
              {
                "height": 640,
                "url": "https://i.scdn.co/image/ab67616d0000b273ed4b2a6ea7d8a04f39be0be0",
                "width": 640
              },
              {
                "height": 300,
                "url": "https://i.scdn.co/image/ab67616d00001e02ed4b2a6ea7d8a04f39be0be0",
                "width": 300
              },
              {
                "height": 64,
                "url": "https://i.scdn.co/image/ab67616d00004851ed4b2a6ea7d8a04f39be0be0",
                "width": 64
              }
            ],
            "name": "Clapton Chronicles: The Best of Eric Clapton",
            "release_date": "1999-10-12",
            "release_date_precision": "day",
            "total_tracks": 14,
            "type": "album",
            "uri": "spotify:album:6FCakQJ6z6TF0y0qkHYKgy"
          },
          "artists": [
            {
              "external_urls": {
                "spotify": "https://open.spotify.com/artist/6PAt558ZEZl0DmdXlnjMgD"
              },
              "id": "6PAt558ZEZl0DmdXlnjMgD",
              "name": "Eric Clapton",
              "type": "artist",
              "uri": "spotify:artist:6PAt558ZEZl0DmdXlnjMgD"
            }
          ],
          "disc_number": 1,
          "duration_ms": 234866,
          "episode": false,
          "explicit": false,
          "external_ids": {
            "isrc": "USRE19600049"
          },
          "external_urls": {
            "spotify": "https://open.spotify.com/track/5Ds0VGkTSQ1jf4KzLUpZPb"
          },
          "id": "5Ds0VGkTSQ1jf4KzLUpZPb",
          "is_local": false,
          "is_playable": true,
          "linked_from": {
            "external_urls": {
              "spotify": "https://open.spotify.com/track/6BQNJ0JFKh8sWjQLI6Zudi"
            },
            "id": "6BQNJ0JFKh8sWjQLI6Zudi",
            "type": "track",
            "uri": "spotify:track:6BQNJ0JFKh8sWjQLI6Zudi"
          },
          "name": "Change the World",
          "popularity": 63,
          "preview_url": "https://p.scdn.co/mp3-preview/4b1f5e3cf80c9992c08c31171c0c631b5ab8ed52?cid=d8a5ed958d274c2e8ee717e6a4b0971d",
          "track": true,
          "track_number": 2,
          "type": "track",
          "uri": "spotify:track:5Ds0VGkTSQ1jf4KzLUpZPb"
        },
        "video_thumbnail": {
          "url": null
        }
      },
      {
        "added_at": "2022-06-16T18:04:17Z",
        "added_by": {
          "external_urls": {
            "spotify": "https://open.spotify.com/user/yrqjeis7sh8it5uztvo0dl8s5"
          },
          "id": "yrqjeis7sh8it5uztvo0dl8s5",
          "type": "user",
          "uri": "spotify:user:yrqjeis7sh8it5uztvo0dl8s5"
        },
        "is_local": false,
        "primary_color": null,
        "sharing_info": {
          "share_id": "d2d0Om_bQKGR19_DigkYrw",
          "share_url": "https://open.spotify.com/track/6G0hpdpxsXiNQzgmZhAvyI?si=d2d0Om_bQKGR19_DigkYrw",
          "uri": "spotify:track:6G0hpdpxsXiNQzgmZhAvyI"
        },
        "track": {
          "album": {
            "album_type": "album",
            "artists": [
              {
                "external_urls": {
                  "spotify": "https://open.spotify.com/artist/6sFIWsNpZYqfjUpaCgueju"
                },
                "id": "6sFIWsNpZYqfjUpaCgueju",
                "name": "Carly Rae Jepsen",
                "type": "artist",
                "uri": "spotify:artist:6sFIWsNpZYqfjUpaCgueju"
              }
            ],
            "external_urls": {
              "spotify": "https://open.spotify.com/album/2oj3FG6fos7zAQJxLQGzou"
            },
            "id": "2oj3FG6fos7zAQJxLQGzou",
            "images": [
              {
                "height": 640,
                "url": "https://i.scdn.co/image/ab67616d0000b2735708b3925c13b1b8d6fac466",
                "width": 640
              },
              {
                "height": 300,
                "url": "https://i.scdn.co/image/ab67616d00001e025708b3925c13b1b8d6fac466",
                "width": 300
              },
              {
                "height": 64,
                "url": "https://i.scdn.co/image/ab67616d000048515708b3925c13b1b8d6fac466",
                "width": 64
              }
            ],
            "name": "Emotion (Deluxe Expanded Edition)",
            "release_date": "2015",
            "release_date_precision": "year",
            "total_tracks": 17,
            "type": "album",
            "uri": "spotify:album:2oj3FG6fos7zAQJxLQGzou"
          },
          "artists": [
            {
              "external_urls": {
                "spotify": "https://open.spotify.com/artist/6sFIWsNpZYqfjUpaCgueju"
              },
              "id": "6sFIWsNpZYqfjUpaCgueju",
              "name": "Carly Rae Jepsen",
              "type": "artist",
              "uri": "spotify:artist:6sFIWsNpZYqfjUpaCgueju"
            }
          ],
          "disc_number": 1,
          "duration_ms": 209479,
          "episode": false,
          "explicit": false,
          "external_ids": {
            "isrc": "USUM71507036"
          },
          "external_urls": {
            "spotify": "https://open.spotify.com/track/6G0hpdpxsXiNQzgmZhAvyI"
          },
          "id": "6G0hpdpxsXiNQzgmZhAvyI",
          "is_local": false,
          "is_playable": true,
          "name": "Favourite Colour",
          "popularity": 41,
          "preview_url": "https://p.scdn.co/mp3-preview/77c3ea0c7928b61a173fdc18fcf354cc37cd6349?cid=d8a5ed958d274c2e8ee717e6a4b0971d",
          "track": true,
          "track_number": 15,
          "type": "track",
          "uri": "spotify:track:6G0hpdpxsXiNQzgmZhAvyI"
        },
        "video_thumbnail": {
          "url": null
        }
      },
      {
        "added_at": "2022-06-16T18:04:53Z",
        "added_by": {
          "external_urls": {
            "spotify": "https://open.spotify.com/user/yrqjeis7sh8it5uztvo0dl8s5"
          },
          "id": "yrqjeis7sh8it5uztvo0dl8s5",
          "type": "user",
          "uri": "spotify:user:yrqjeis7sh8it5uztvo0dl8s5"
        },
        "is_local": false,
        "primary_color": null,
        "sharing_info": {
          "share_id": "Zpxkxo_6RhmESa_u4mKh_w",
          "share_url": "https://open.spotify.com/track/2qFFasOWKczcd8QYKQxvn9?si=Zpxkxo_6RhmESa_u4mKh_w",
          "uri": "spotify:track:2qFFasOWKczcd8QYKQxvn9"
        },
        "track": {
          "album": {
            "album_type": "single",
            "artists": [
              {
                "external_urls": {
                  "spotify": "https://open.spotify.com/artist/7l5SzCjzw6Xvi5rjZSQrl8"
                },
                "id": "7l5SzCjzw6Xvi5rjZSQrl8",
                "name": "конец солнечных дней",
                "type": "artist",
                "uri": "spotify:artist:7l5SzCjzw6Xvi5rjZSQrl8"
              }
            ],
            "external_urls": {
              "spotify": "https://open.spotify.com/album/52xjp9vr4VPhb3tmlZVHHm"
            },
            "id": "52xjp9vr4VPhb3tmlZVHHm",
            "images": [
              {
                "height": 640,
                "url": "https://i.scdn.co/image/ab67616d0000b27385d9f86eac5aaa494f4b4189",
                "width": 640
              },
              {
                "height": 300,
                "url": "https://i.scdn.co/image/ab67616d00001e0285d9f86eac5aaa494f4b4189",
                "width": 300
              },
              {
                "height": 64,
                "url": "https://i.scdn.co/image/ab67616d0000485185d9f86eac5aaa494f4b4189",
                "width": 64
              }
            ],
            "name": "письмо",
            "release_date": "2022-02-02",
            "release_date_precision": "day",
            "total_tracks": 1,
            "type": "album",
            "uri": "spotify:album:52xjp9vr4VPhb3tmlZVHHm"
          },
          "artists": [
            {
              "external_urls": {
                "spotify": "https://open.spotify.com/artist/7l5SzCjzw6Xvi5rjZSQrl8"
              },
              "id": "7l5SzCjzw6Xvi5rjZSQrl8",
              "name": "конец солнечных дней",
              "type": "artist",
              "uri": "spotify:artist:7l5SzCjzw6Xvi5rjZSQrl8"
            }
          ],
          "disc_number": 1,
          "duration_ms": 185947,
          "episode": false,
          "explicit": false,
          "external_ids": {
            "isrc": "RUA1D2200845"
          },
          "external_urls": {
            "spotify": "https://open.spotify.com/track/2qFFasOWKczcd8QYKQxvn9"
          },
          "id": "2qFFasOWKczcd8QYKQxvn9",
          "is_local": false,
          "is_playable": true,
          "name": "письмо",
          "popularity": 37,
          "preview_url": "https://p.scdn.co/mp3-preview/ca129eac6564b3566ec572fad6f316fdd0def35f?cid=d8a5ed958d274c2e8ee717e6a4b0971d",
          "track": true,
          "track_number": 1,
          "type": "track",
          "uri": "spotify:track:2qFFasOWKczcd8QYKQxvn9"
        },
        "video_thumbnail": {
          "url": null
        }
      },
      {
        "added_at": "2022-06-17T15:47:10Z",
        "added_by": {
          "external_urls": {
            "spotify": "https://open.spotify.com/user/yrqjeis7sh8it5uztvo0dl8s5"
          },
          "id": "yrqjeis7sh8it5uztvo0dl8s5",
          "type": "user",
          "uri": "spotify:user:yrqjeis7sh8it5uztvo0dl8s5"
        },
        "is_local": false,
        "primary_color": null,
        "sharing_info": {
          "share_id": "v7x9_CIjSJW3OgQvUlqf6Q",
          "share_url": "https://open.spotify.com/track/5MIgTjcn94EPeSUUo8dx4q?si=v7x9_CIjSJW3OgQvUlqf6Q",
          "uri": "spotify:track:5MIgTjcn94EPeSUUo8dx4q"
        },
        "track": {
          "album": {
            "album_type": "album",
            "artists": [
              {
                "external_urls": {
                  "spotify": "https://open.spotify.com/artist/5lm6ULGxxq8LD82j5Jp9P1"
                },
                "id": "5lm6ULGxxq8LD82j5Jp9P1",
                "name": "Eddie Johns",
                "type": "artist",
                "uri": "spotify:artist:5lm6ULGxxq8LD82j5Jp9P1"
              }
            ],
            "external_urls": {
              "spotify": "https://open.spotify.com/album/3fAqwHQh76J7nzmFjcb5LN"
            },
            "id": "3fAqwHQh76J7nzmFjcb5LN",
            "images": [
              {
                "height": 640,
                "url": "https://i.scdn.co/image/ab67616d0000b273ed982ee3dc8eda8afdd5ba99",
                "width": 640
              },
              {
                "height": 300,
                "url": "https://i.scdn.co/image/ab67616d00001e02ed982ee3dc8eda8afdd5ba99",
                "width": 300
              },
              {
                "height": 64,
                "url": "https://i.scdn.co/image/ab67616d00004851ed982ee3dc8eda8afdd5ba99",
                "width": 64
              }
            ],
            "name": "More Spell On You",
            "release_date": "2012-06-11",
            "release_date_precision": "day",
            "total_tracks": 10,
            "type": "album",
            "uri": "spotify:album:3fAqwHQh76J7nzmFjcb5LN"
          },
          "artists": [
            {
              "external_urls": {
                "spotify": "https://open.spotify.com/artist/5lm6ULGxxq8LD82j5Jp9P1"
              },
              "id": "5lm6ULGxxq8LD82j5Jp9P1",
              "name": "Eddie Johns",
              "type": "artist",
              "uri": "spotify:artist:5lm6ULGxxq8LD82j5Jp9P1"
            }
          ],
          "disc_number": 1,
          "duration_ms": 310693,
          "episode": false,
          "explicit": false,
          "external_ids": {
            "isrc": "FR10F1200080"
          },
          "external_urls": {
            "spotify": "https://open.spotify.com/track/5MIgTjcn94EPeSUUo8dx4q"
          },
          "id": "5MIgTjcn94EPeSUUo8dx4q",
          "is_local": false,
          "is_playable": true,
          "name": "More Spell On You",
          "popularity": 44,
          "preview_url": "https://p.scdn.co/mp3-preview/1d441e5508403ecc8b5d7d38680020e89a36e931?cid=d8a5ed958d274c2e8ee717e6a4b0971d",
          "track": true,
          "track_number": 3,
          "type": "track",
          "uri": "spotify:track:5MIgTjcn94EPeSUUo8dx4q"
        },
        "video_thumbnail": {
          "url": null
        }
      },
      {
        "added_at": "2022-06-20T20:08:06Z",
        "added_by": {
          "external_urls": {
            "spotify": "https://open.spotify.com/user/yrqjeis7sh8it5uztvo0dl8s5"
          },
          "id": "yrqjeis7sh8it5uztvo0dl8s5",
          "type": "user",
          "uri": "spotify:user:yrqjeis7sh8it5uztvo0dl8s5"
        },
        "is_local": false,
        "primary_color": null,
        "sharing_info": {
          "share_id": "rhYq2XMDRNyRR_Yx7CMpKg",
          "share_url": "https://open.spotify.com/track/7j1ABZOylWUPUIZTt5x6AL?si=rhYq2XMDRNyRR_Yx7CMpKg",
          "uri": "spotify:track:7j1ABZOylWUPUIZTt5x6AL"
        },
        "track": {
          "album": {
            "album_type": "album",
            "artists": [
              {
                "external_urls": {
                  "spotify": "https://open.spotify.com/artist/2VIoWte1HPDbZ2WqHd2La7"
                },
                "id": "2VIoWte1HPDbZ2WqHd2La7",
                "name": "The Turtles",
                "type": "artist",
                "uri": "spotify:artist:2VIoWte1HPDbZ2WqHd2La7"
              }
            ],
            "external_urls": {
              "spotify": "https://open.spotify.com/album/155OAoTAYR4Uu0LpSMvy5W"
            },
            "id": "155OAoTAYR4Uu0LpSMvy5W",
            "images": [
              {
                "height": 640,
                "url": "https://i.scdn.co/image/ab67616d0000b273f3126c1147d95ab91a85bbc3",
                "width": 640
              },
              {
                "height": 300,
                "url": "https://i.scdn.co/image/ab67616d00001e02f3126c1147d95ab91a85bbc3",
                "width": 300
              },
              {
                "height": 64,
                "url": "https://i.scdn.co/image/ab67616d00004851f3126c1147d95ab91a85bbc3",
                "width": 64
              }
            ],
            "name": "The Turtles Present The Battle of the Bands",
            "release_date": "1968",
            "release_date_precision": "year",
            "total_tracks": 14,
            "type": "album",
            "uri": "spotify:album:155OAoTAYR4Uu0LpSMvy5W"
          },
          "artists": [
            {
              "external_urls": {
                "spotify": "https://open.spotify.com/artist/2VIoWte1HPDbZ2WqHd2La7"
              },
              "id": "2VIoWte1HPDbZ2WqHd2La7",
              "name": "The Turtles",
              "type": "artist",
              "uri": "spotify:artist:2VIoWte1HPDbZ2WqHd2La7"
            }
          ],
          "disc_number": 1,
          "duration_ms": 196200,
          "episode": false,
          "explicit": false,
          "external_ids": {
            "isrc": "USA560587957"
          },
          "external_urls": {
            "spotify": "https://open.spotify.com/track/7j1ABZOylWUPUIZTt5x6AL"
          },
          "id": "7j1ABZOylWUPUIZTt5x6AL",
          "is_local": false,
          "is_playable": true,
          "name": "You Showed Me",
          "popularity": 43,
          "preview_url": "https://p.scdn.co/mp3-preview/f4666473c50012a1c2039e620c667ec607a825fd?cid=d8a5ed958d274c2e8ee717e6a4b0971d",
          "track": true,
          "track_number": 9,
          "type": "track",
          "uri": "spotify:track:7j1ABZOylWUPUIZTt5x6AL"
        },
        "video_thumbnail": {
          "url": null
        }
      },
      {
        "added_at": "2022-06-21T17:16:43Z",
        "added_by": {
          "external_urls": {
            "spotify": "https://open.spotify.com/user/yrqjeis7sh8it5uztvo0dl8s5"
          },
          "id": "yrqjeis7sh8it5uztvo0dl8s5",
          "type": "user",
          "uri": "spotify:user:yrqjeis7sh8it5uztvo0dl8s5"
        },
        "is_local": false,
        "primary_color": null,
        "sharing_info": {
          "share_id": "ZaM_cBSzR3GhMqlEwSXoGw",
          "share_url": "https://open.spotify.com/track/7ySUcLPVX7KudhnmNcgY2D?si=ZaM_cBSzR3GhMqlEwSXoGw",
          "uri": "spotify:track:7ySUcLPVX7KudhnmNcgY2D"
        },
        "track": {
          "album": {
            "album_type": "album",
            "artists": [
              {
                "external_urls": {
                  "spotify": "https://open.spotify.com/artist/5pKCCKE2ajJHZ9KAiaK11H"
                },
                "id": "5pKCCKE2ajJHZ9KAiaK11H",
                "name": "Rihanna",
                "type": "artist",
                "uri": "spotify:artist:5pKCCKE2ajJHZ9KAiaK11H"
              }
            ],
            "external_urls": {
              "spotify": "https://open.spotify.com/album/7vN82vd1Vq44fjlhjfvHJp"
            },
            "id": "7vN82vd1Vq44fjlhjfvHJp",
            "images": [
              {
                "height": 640,
                "url": "https://i.scdn.co/image/ab67616d0000b2732ed326786e4c61c6b1dbf222",
                "width": 640
              },
              {
                "height": 300,
                "url": "https://i.scdn.co/image/ab67616d00001e022ed326786e4c61c6b1dbf222",
                "width": 300
              },
              {
                "height": 64,
                "url": "https://i.scdn.co/image/ab67616d000048512ed326786e4c61c6b1dbf222",
                "width": 64
              }
            ],
            "name": "Loud",
            "release_date": "2010-11-16",
            "release_date_precision": "day",
            "total_tracks": 12,
            "type": "album",
            "uri": "spotify:album:7vN82vd1Vq44fjlhjfvHJp"
          },
          "artists": [
            {
              "external_urls": {
                "spotify": "https://open.spotify.com/artist/5pKCCKE2ajJHZ9KAiaK11H"
              },
              "id": "5pKCCKE2ajJHZ9KAiaK11H",
              "name": "Rihanna",
              "type": "artist",
              "uri": "spotify:artist:5pKCCKE2ajJHZ9KAiaK11H"
            }
          ],
          "disc_number": 1,
          "duration_ms": 243600,
          "episode": false,
          "explicit": false,
          "external_ids": {
            "isrc": "USUM71026591"
          },
          "external_urls": {
            "spotify": "https://open.spotify.com/track/7ySUcLPVX7KudhnmNcgY2D"
          },
          "id": "7ySUcLPVX7KudhnmNcgY2D",
          "is_local": false,
          "is_playable": true,
          "linked_from": {
            "external_urls": {
              "spotify": "https://open.spotify.com/track/0C4ejWmOTMv8vuYj85mf8m"
            },
            "id": "0C4ejWmOTMv8vuYj85mf8m",
            "type": "track",
            "uri": "spotify:track:0C4ejWmOTMv8vuYj85mf8m"
          },
          "name": "S&M",
          "popularity": 79,
          "preview_url": "https://p.scdn.co/mp3-preview/506cf7fd1fedfa0e90384c5d5a2cef59d98656cd?cid=d8a5ed958d274c2e8ee717e6a4b0971d",
          "track": true,
          "track_number": 1,
          "type": "track",
          "uri": "spotify:track:7ySUcLPVX7KudhnmNcgY2D"
        },
        "video_thumbnail": {
          "url": null
        }
      },
      {
        "added_at": "2022-06-24T19:23:13Z",
        "added_by": {
          "external_urls": {
            "spotify": "https://open.spotify.com/user/yrqjeis7sh8it5uztvo0dl8s5"
          },
          "id": "yrqjeis7sh8it5uztvo0dl8s5",
          "type": "user",
          "uri": "spotify:user:yrqjeis7sh8it5uztvo0dl8s5"
        },
        "is_local": false,
        "primary_color": null,
        "sharing_info": {
          "share_id": "VVaohuwuQqS8WqMK3a4Iyg",
          "share_url": "https://open.spotify.com/track/6e6Kxot9nHyZ4I8GgmGKII?si=VVaohuwuQqS8WqMK3a4Iyg",
          "uri": "spotify:track:6e6Kxot9nHyZ4I8GgmGKII"
        },
        "track": {
          "album": {
            "album_type": "album",
            "artists": [
              {
                "external_urls": {
                  "spotify": "https://open.spotify.com/artist/6hnWRPzGGKiapVX1UCdEAC"
                },
                "id": "6hnWRPzGGKiapVX1UCdEAC",
                "name": "Sam Cooke",
                "type": "artist",
                "uri": "spotify:artist:6hnWRPzGGKiapVX1UCdEAC"
              }
            ],
            "external_urls": {
              "spotify": "https://open.spotify.com/album/1rEYwOdpVc2W39d0uxf0va"
            },
            "id": "1rEYwOdpVc2W39d0uxf0va",
            "images": [
              {
                "height": 640,
                "url": "https://i.scdn.co/image/ab67616d0000b2738f41b8c6db5b91d643cdfe99",
                "width": 640
              },
              {
                "height": 300,
                "url": "https://i.scdn.co/image/ab67616d00001e028f41b8c6db5b91d643cdfe99",
                "width": 300
              },
              {
                "height": 64,
                "url": "https://i.scdn.co/image/ab67616d000048518f41b8c6db5b91d643cdfe99",
                "width": 64
              }
            ],
            "name": "Mr. Soul",
            "release_date": "1963-02",
            "release_date_precision": "month",
            "total_tracks": 12,
            "type": "album",
            "uri": "spotify:album:1rEYwOdpVc2W39d0uxf0va"
          },
          "artists": [
            {
              "external_urls": {
                "spotify": "https://open.spotify.com/artist/6hnWRPzGGKiapVX1UCdEAC"
              },
              "id": "6hnWRPzGGKiapVX1UCdEAC",
              "name": "Sam Cooke",
              "type": "artist",
              "uri": "spotify:artist:6hnWRPzGGKiapVX1UCdEAC"
            }
          ],
          "disc_number": 1,
          "duration_ms": 158680,
          "episode": false,
          "explicit": false,
          "external_ids": {
            "isrc": "USRC16202725"
          },
          "external_urls": {
            "spotify": "https://open.spotify.com/track/6e6Kxot9nHyZ4I8GgmGKII"
          },
          "id": "6e6Kxot9nHyZ4I8GgmGKII",
          "is_local": false,
          "is_playable": true,
          "name": "Nothing Can Change This Love",
          "popularity": 59,
          "preview_url": "https://p.scdn.co/mp3-preview/594c390c4b2e16b1bf8fba7868087b00d5ee2d2b?cid=d8a5ed958d274c2e8ee717e6a4b0971d",
          "track": true,
          "track_number": 10,
          "type": "track",
          "uri": "spotify:track:6e6Kxot9nHyZ4I8GgmGKII"
        },
        "video_thumbnail": {
          "url": null
        }
      },
      {
        "added_at": "2022-06-24T19:23:19Z",
        "added_by": {
          "external_urls": {
            "spotify": "https://open.spotify.com/user/yrqjeis7sh8it5uztvo0dl8s5"
          },
          "id": "yrqjeis7sh8it5uztvo0dl8s5",
          "type": "user",
          "uri": "spotify:user:yrqjeis7sh8it5uztvo0dl8s5"
        },
        "is_local": false,
        "primary_color": null,
        "sharing_info": {
          "share_id": "qKJiYg-7Syy7mE0GFiN89g",
          "share_url": "https://open.spotify.com/track/4VijLEUxHEzbWKYL5u9wuN?si=qKJiYg-7Syy7mE0GFiN89g",
          "uri": "spotify:track:4VijLEUxHEzbWKYL5u9wuN"
        },
        "track": {
          "album": {
            "album_type": "album",
            "artists": [
              {
                "external_urls": {
                  "spotify": "https://open.spotify.com/artist/7nwUJBm0HE4ZxD3f5cy5ok"
                },
                "id": "7nwUJBm0HE4ZxD3f5cy5ok",
                "name": "Aretha Franklin",
                "type": "artist",
                "uri": "spotify:artist:7nwUJBm0HE4ZxD3f5cy5ok"
              }
            ],
            "external_urls": {
              "spotify": "https://open.spotify.com/album/55HZ2ectg1mMTEKDqIq3kC"
            },
            "id": "55HZ2ectg1mMTEKDqIq3kC",
            "images": [
              {
                "height": 640,
                "url": "https://i.scdn.co/image/ab67616d0000b27346c31f64babcbfca6e061b6b",
                "width": 640
              },
              {
                "height": 300,
                "url": "https://i.scdn.co/image/ab67616d00001e0246c31f64babcbfca6e061b6b",
                "width": 300
              },
              {
                "height": 64,
                "url": "https://i.scdn.co/image/ab67616d0000485146c31f64babcbfca6e061b6b",
                "width": 64
              }
            ],
            "name": "Aretha Now",
            "release_date": "1968-06-14",
            "release_date_precision": "day",
            "total_tracks": 10,
            "type": "album",
            "uri": "spotify:album:55HZ2ectg1mMTEKDqIq3kC"
          },
          "artists": [
            {
              "external_urls": {
                "spotify": "https://open.spotify.com/artist/7nwUJBm0HE4ZxD3f5cy5ok"
              },
              "id": "7nwUJBm0HE4ZxD3f5cy5ok",
              "name": "Aretha Franklin",
              "type": "artist",
              "uri": "spotify:artist:7nwUJBm0HE4ZxD3f5cy5ok"
            }
          ],
          "disc_number": 1,
          "duration_ms": 149626,
          "episode": false,
          "explicit": false,
          "external_ids": {
            "isrc": "USAT20801209"
          },
          "external_urls": {
            "spotify": "https://open.spotify.com/track/4VijLEUxHEzbWKYL5u9wuN"
          },
          "id": "4VijLEUxHEzbWKYL5u9wuN",
          "is_local": false,
          "is_playable": true,
          "name": "You Send Me",
          "popularity": 60,
          "preview_url": "https://p.scdn.co/mp3-preview/77c13200cb068392f7d2bcf6e008bd1e13f49bd8?cid=d8a5ed958d274c2e8ee717e6a4b0971d",
          "track": true,
          "track_number": 5,
          "type": "track",
          "uri": "spotify:track:4VijLEUxHEzbWKYL5u9wuN"
        },
        "video_thumbnail": {
          "url": null
        }
      },
      {
        "added_at": "2022-06-24T19:41:36Z",
        "added_by": {
          "external_urls": {
            "spotify": "https://open.spotify.com/user/yrqjeis7sh8it5uztvo0dl8s5"
          },
          "id": "yrqjeis7sh8it5uztvo0dl8s5",
          "type": "user",
          "uri": "spotify:user:yrqjeis7sh8it5uztvo0dl8s5"
        },
        "is_local": false,
        "primary_color": null,
        "sharing_info": {
          "share_id": "IwMO4DrjRXeJ_dFYTeq-wQ",
          "share_url": "https://open.spotify.com/track/1qmfjNhUQdjyIpxTHe1hHw?si=IwMO4DrjRXeJ_dFYTeq-wQ",
          "uri": "spotify:track:1qmfjNhUQdjyIpxTHe1hHw"
        },
        "track": {
          "album": {
            "album_type": "single",
            "artists": [
              {
                "external_urls": {
                  "spotify": "https://open.spotify.com/artist/5l3oM4oIoOTZMoZhwVP7aB"
                },
                "id": "5l3oM4oIoOTZMoZhwVP7aB",
                "name": "DONJUANS",
                "type": "artist",
                "uri": "spotify:artist:5l3oM4oIoOTZMoZhwVP7aB"
              }
            ],
            "external_urls": {
              "spotify": "https://open.spotify.com/album/3Z84AwmgaKP72JA4EjthEr"
            },
            "id": "3Z84AwmgaKP72JA4EjthEr",
            "images": [
              {
                "height": 640,
                "url": "https://i.scdn.co/image/ab67616d0000b2730b08e283e799d1c2adf2da4b",
                "width": 640
              },
              {
                "height": 300,
                "url": "https://i.scdn.co/image/ab67616d00001e020b08e283e799d1c2adf2da4b",
                "width": 300
              },
              {
                "height": 64,
                "url": "https://i.scdn.co/image/ab67616d000048510b08e283e799d1c2adf2da4b",
                "width": 64
              }
            ],
            "name": "ПРИВЕТ!",
            "release_date": "2021-06-02",
            "release_date_precision": "day",
            "total_tracks": 6,
            "type": "album",
            "uri": "spotify:album:3Z84AwmgaKP72JA4EjthEr"
          },
          "artists": [
            {
              "external_urls": {
                "spotify": "https://open.spotify.com/artist/5l3oM4oIoOTZMoZhwVP7aB"
              },
              "id": "5l3oM4oIoOTZMoZhwVP7aB",
              "name": "DONJUANS",
              "type": "artist",
              "uri": "spotify:artist:5l3oM4oIoOTZMoZhwVP7aB"
            }
          ],
          "disc_number": 1,
          "duration_ms": 110000,
          "episode": false,
          "explicit": true,
          "external_ids": {
            "isrc": "RUA0G2100368"
          },
          "external_urls": {
            "spotify": "https://open.spotify.com/track/1qmfjNhUQdjyIpxTHe1hHw"
          },
          "id": "1qmfjNhUQdjyIpxTHe1hHw",
          "is_local": false,
          "is_playable": true,
          "name": "ДОНЖУАНЫ",
          "popularity": 0,
          "preview_url": "https://p.scdn.co/mp3-preview/d5c8aad56c7181674cf37a8f1b17b4e41afc1032?cid=d8a5ed958d274c2e8ee717e6a4b0971d",
          "track": true,
          "track_number": 1,
          "type": "track",
          "uri": "spotify:track:1qmfjNhUQdjyIpxTHe1hHw"
        },
        "video_thumbnail": {
          "url": null
        }
      },
      {
        "added_at": "2022-06-28T17:18:10Z",
        "added_by": {
          "external_urls": {
            "spotify": "https://open.spotify.com/user/yrqjeis7sh8it5uztvo0dl8s5"
          },
          "id": "yrqjeis7sh8it5uztvo0dl8s5",
          "type": "user",
          "uri": "spotify:user:yrqjeis7sh8it5uztvo0dl8s5"
        },
        "is_local": false,
        "primary_color": null,
        "sharing_info": {
          "share_id": "o4iLCpwrRN2s-oPQbVVSyQ",
          "share_url": "https://open.spotify.com/track/5jhtgXcMH0cxuhEOXkRpl0?si=o4iLCpwrRN2s-oPQbVVSyQ",
          "uri": "spotify:track:5jhtgXcMH0cxuhEOXkRpl0"
        },
        "track": {
          "album": {
            "album_type": "compilation",
            "artists": [
              {
                "external_urls": {
                  "spotify": "https://open.spotify.com/artist/3c8WoNjBfyLJhFObE6RHgs"
                },
                "id": "3c8WoNjBfyLJhFObE6RHgs",
                "name": "Del Shannon",
                "type": "artist",
                "uri": "spotify:artist:3c8WoNjBfyLJhFObE6RHgs"
              }
            ],
            "external_urls": {
              "spotify": "https://open.spotify.com/album/7hqTwDwtJw99EGsX8BOnIa"
            },
            "id": "7hqTwDwtJw99EGsX8BOnIa",
            "images": [
              {
                "height": 640,
                "url": "https://i.scdn.co/image/ab67616d0000b273ba63dcc7ce9ae2c8a51fd5cc",
                "width": 640
              },
              {
                "height": 300,
                "url": "https://i.scdn.co/image/ab67616d00001e02ba63dcc7ce9ae2c8a51fd5cc",
                "width": 300
              },
              {
                "height": 64,
                "url": "https://i.scdn.co/image/ab67616d00004851ba63dcc7ce9ae2c8a51fd5cc",
                "width": 64
              }
            ],
            "name": "Greatest Hits",
            "release_date": "1990",
            "release_date_precision": "year",
            "total_tracks": 20,
            "type": "album",
            "uri": "spotify:album:7hqTwDwtJw99EGsX8BOnIa"
          },
          "artists": [
            {
              "external_urls": {
                "spotify": "https://open.spotify.com/artist/3c8WoNjBfyLJhFObE6RHgs"
              },
              "id": "3c8WoNjBfyLJhFObE6RHgs",
              "name": "Del Shannon",
              "type": "artist",
              "uri": "spotify:artist:3c8WoNjBfyLJhFObE6RHgs"
            }
          ],
          "disc_number": 1,
          "duration_ms": 138560,
          "episode": false,
          "explicit": false,
          "external_ids": {
            "isrc": "USFDB0614460"
          },
          "external_urls": {
            "spotify": "https://open.spotify.com/track/5jhtgXcMH0cxuhEOXkRpl0"
          },
          "id": "5jhtgXcMH0cxuhEOXkRpl0",
          "is_local": false,
          "is_playable": true,
          "linked_from": {
            "external_urls": {
              "spotify": "https://open.spotify.com/track/5TkxtJtC64uDDK4rbrXz0u"
            },
            "id": "5TkxtJtC64uDDK4rbrXz0u",
            "type": "track",
            "uri": "spotify:track:5TkxtJtC64uDDK4rbrXz0u"
          },
          "name": "Runaway",
          "popularity": 36,
          "preview_url": "https://p.scdn.co/mp3-preview/be887ad72462bbf9a1eb77cc5366a7d6a6a26e30?cid=d8a5ed958d274c2e8ee717e6a4b0971d",
          "track": true,
          "track_number": 1,
          "type": "track",
          "uri": "spotify:track:5jhtgXcMH0cxuhEOXkRpl0"
        },
        "video_thumbnail": {
          "url": null
        }
      }
    ],
    "limit": 100,
    "next": null,
    "offset": 0,
    "previous": null,
    "total": 57
  },
  "type": "playlist",
  "uri": "spotify:playlist:6v2sm7e2dwhsqjoovYNaJR"
    })));


const fakefetcher = (url: string) => later(url).then((r) => r.tracks.items.map(track => track.track.album.images[0].url));export default function Home() {
  //const [covers, setCovers] = useState(["https://i.scdn.co/image/ab67616d0000b27367c738a703dc979f5c3c52ef"]);
  const [playlistLink, setPlaylistLink] = useState("");
  const playlistREGEX = /.*playlist\//i;
  const playlistURL = "https://spotify23.p.rapidapi.com/playlist_tracks/?id=" + playlistLink;
  const options = {
	  method: 'GET',
	  headers: {
      'X-RapidAPI-Key': process.env.API_KEY,
      'X-RapidAPI-Host': process.env.API_HOST
	  }
  };
  const fetcher = (url: string, ...args ) => fetch(url, ...args).then(res => { console.log("returned"); return res.json()}).then(res => res.tracks.items.map(track => track.track.album.images[0].url));

  const { data, error, isLoading } = useSWR(playlistLink.length>1 ? [playlistURL, options] : null, ([playlistURL, options])=>fetcher(playlistURL, options));
  return (
    <>
      <Head>
        <title>Playlist Collage</title>
        <meta name="description" content="Collage your image from playlist album covers" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className='flex justify-center items-center h-full min-h-screen flex-col'>
        <label htmlFor='playlistInput' className='mt-12 text-3xl text-gray-300 w-2/3 mb-2'>Playlist link</label>
        <input id="playlistInput" onChange={(e)=>setPlaylistLink(e.target.value.replace(playlistREGEX, "")) } className="focus:placeholder:text-green-400 placeholder:text-gray-400 border-b-2 focus:border-green-400 border-gray-400 appearance-none w-2/3 text-3xl bg-none px-8 py-4 shadow-sm focus:outline-none focus:caret-green-500 text-green-400 bg-black dark:highlight-white/5" placeholder='playlist link'/>
        <label htmlFor='targetImageInput' className='mt-12 text-3xl text-gray-300 w-2/3 mb-2'>Link or upload image</label>
        <div className='w-2/3 flex flex-row'>
          <input id='targetImageInput' className="focus:placeholder:text-green-400 placeholder:text-gray-400 border-b-2 focus:border-green-400 border-gray-400 appearance-none w-2/3 text-3xl bg-none px-8 shadow-sm focus:outline-none focus:caret-green-500 text-gray-400 bg-black dark:highlight-white/5" placeholder='image link' />
          <label className="w-1/3 flex justify-center items-end">
            <span className="sr-only">Choose profile photo</span>
            <input type="file" className="block w-full text-sm pl-4 text-gray-500 file:flex text-center file:w-full file:flex-col file:mb-2 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-gray-100 file:text-green-600 hover:file:bg-green-200 " />
          </label>
        </div>
        <div className='w-2/3 aspect-square flex justify-center items-center mt-12 collage-wrapper mb-12'>{/*aito-cols-[100%/n]*/}
          {data ?
            <ReactImageMosaic width={800} height={800} rows={Math.round(Math.sqrt(data.length))*2} columns={Math.round(Math.sqrt(data.length))*2} sources={data} colorBlending={0.15} target={"./mal.jpg"} crossOrigin={"anonymous"} />
            : <div className='text-gray-300 animate-pulse'>LOADING</div>}
        </div>
      </main>
    </>
  )
}
