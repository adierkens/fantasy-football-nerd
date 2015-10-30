# fantasy-football-nerd
> An API wrapper for fantasyfootballnerd.com

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

## API Progress

The full API can be seen [here](http://www.fantasyfootballnerd.com/fantasy-football-api)

- [x] NFL Teams
- [x] NFL Schedule
- [x] NFL Players
- [x] Bye Weeks
- [x] Injuries
- [x] Weather Forecasts
- [x] Auction Values
- [ ] Draft Rankings
- [ ] Draft Projections
- [ ] Weekly Rankings
- [ ] Weekly Projections
- [ ] Weekly IDP Rankings
- [ ] NFL Picks
- [ ] Depth Charts
- [ ] Defensive Rankings
- [ ] Defensive Rankings
- [ ] Game Day Inactives
- [ ] Player Stats & Info
- [ ] Daily Fantasy Football


