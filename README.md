# eInsider

This is eInsider we are a website that provides relevant eSports information on 4 of the most popular games.

# Table of Contents
- [Backend](#backend)
  - [API Overview](#api-overview)
    - [Base](#base)
    - [Home](#home)
  - [API Details](#api-details)


# API Overview

## Base

| endpoint               | description       |
| ---------------------- | ----------------- |
| [`[GET] /`](#get-base) | welcoming message |

## Home

| endpoint                   | description                                |
| -------------------------- | ------------------------------------------ |
| [`[GET] /home`](#get-home) | 4 upcoming tournaments one for each eSport |

# API Details

## Home

#### `[GET] /home/`

Returns a json with 4 of the most upcoming tournaments one for each eSport.

This is a sample `JSON` object one will receive after the `GET` request:

```json
{
  "lol": {
    "game": "League of Legends",
    "tournamentName": "Play-in: group a",
    "startTime": "2019-05-01T10:00:00Z",
    "endTime": "2019-05-03T16:00:00Z",
    "leagueName": "Mid-Season-Invitational",
    "serieName": ""
  },
  "dota2": {
    "game": "Dota 2",
    "tournamentName": "Group d",
    "startTime": "2019-05-03T22:00:00Z",
    "endTime": "2019-05-13T18:00:00Z",
    "leagueName": "Mars Dota League",
    "serieName": "Disneyland Paris Major"
  },
  "csgo": {
    "game": "Counter-Strike: Global Offensive",
    "tournamentName": "Group b",
    "startTime": "2019-04-30T04:20:00Z",
    "endTime": "2019-05-02T12:00:00Z",
    "leagueName": "IEM",
    "serieName": "Sydney"
  },
  "ow": {
    "game": "Overwatch",
    "tournamentName": "Stage 3",
    "startTime": "2019-06-06T23:00:00Z",
    "endTime": "2019-07-07T07:00:00Z",
    "leagueName": "Overwatch League",
    "serieName": ""
  }
}
```

- `game` can only be one of the four strings `League of Legends`, `Dota 2`, `Counter-Strike: Global Offensive`, `Overwatch`
- `startTime` and `endTime` is in the format YYYY-MM-DDTHH:SS:MMZ
- `League Name` can be an empty string
- `Serie Name` can be an empty string