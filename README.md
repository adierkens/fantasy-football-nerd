# fantasy-football-nerd
> An API wrapper for fantasyfootballnerd.com


[![Build Status](https://travis-ci.org/adierkens/fantasy-football-nerd.svg?branch=master)](https://travis-ci.org/adierkens/fantasy-football-nerd) [![npm version](https://badge.fury.io/js/fantasy-football-nerd.svg)](https://badge.fury.io/js/fantasy-football-nerd)

## Getting Started

```shell
npm install --save fantasy-football-nerd
```

```js
var FFNerd = require('fantasy-football-nerd');
var ff = new FFNerd({ api_key: <Your API Key> });

ff.teams(function(teams){
    console.log('Got teams');
});

```

## Usage

TODO: Add all api examples
You can see code examples in the ``` tests/sanity.js ``` file in the meantime. 

## API Progress

The full API can be seen [here](http://www.fantasyfootballnerd.com/fantasy-football-api)

- [x] NFL Teams
- [x] NFL Schedule
- [x] NFL Players
- [x] Bye Weeks
- [x] Injuries
- [x] Weather Forecasts
- [x] Auction Values
- [x] Draft Rankings
- [x] Draft Projections
- [x] Weekly Rankings
- [x] Weekly Projections
- [x] Weekly IDP Rankings
- [x] NFL Picks
- [x] Depth Charts
- [x] Defensive Rankings
- [x] Defensive Rankings
- [x] Game Day Inactives
- [x] Player Stats & Info
- [x] Daily Fantasy Football

## TODO
- Add code examples
- Caching
