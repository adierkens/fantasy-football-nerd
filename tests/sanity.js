'use strict';
var assert = require('chai').assert;
var FFNerd = require('..');

var API_KEY = 'test';

describe('Basic API tests', function() {

    var ff = new FFNerd({ api_key: API_KEY });    
    
    it('should return the test nfl teams', function(done) {
        ff.teams(function(teams) {
            assert.deepEqual(teams, require('./resources/teams.json'));
            done();
        });
    });

    it('should return the test nfl schedule', function(done) {
        ff.schedule(function(schedule) {
            assert.deepEqual(schedule, require('./resources/schedule.json'));
            done();
        });
    });

    it('should return the test nfl players', function(done) {
        ff.players(function(players) {
            assert.deepEqual(players, require('./resources/players.json'));
            done();
        });
    });

    it('should return the test nfl players - with QB filter', function(done) {
        ff.players('QB', function(players) {
            assert.deepEqual(require('./resources/players_QB.json'), players);
            done();
        });
    });

    it('should return the test nfl bye weeks', function(done) {
        ff.byes(function(byes) {
            assert.deepEqual(byes, require('./resources/byes.json'));
            done();
        });
    });
    
        it('should return the test nfl injuries - with week 1 filter', function(done) {
        ff.injuries(1, function(injuries) {
            assert.deepEqual(injuries, require('./resources/injuries_1.json'));
            done();
        });
    });
    
    it('should return the test nfl injuries', function(done) {
        ff.injuries(function(injuries) {
            assert.deepEqual(injuries, require('./resources/injuries.json'));
            done();
        });
    });

    it('should return the test nfl weather forecast', function(done) {
        ff.weather(function(weather) {
            assert.deepEqual(weather, require('./resources/weather.json'));
            done();
        });
    });
    
    it('should return the test nfl auction values - with PPR', function(done) {
        ff.auction(1, function(auction) {
            assert.deepEqual(auction, require('./resources/auction_ppr.json'));
            done();
        });
    });
    
    it('should return the test nfl auction values - without PPR', function(done) {
        ff.auction(function(auction) {
            assert.deepEqual(auction, require('./resources/auction.json'));
            done();
        });
    });
    
    it('should return the test nfl draft rankings - with PPR', function(done) {
        ff.draftRankings(1, function(draftRankings) {
            assert.deepEqual(draftRankings, require('./resources/draft_rankings_ppr.json'));
            done();
        });
    });
    
    it('should return the test nfl draft rankings - without PPR', function(done) {
        ff.draftRankings(function(draftRankings) {
            assert.deepEqual(draftRankings, require('./resources/draft_rankings.json'));
            done();
        });
    });
    
    it('should return the test nfl draft projections - with QB filter', function(done) {
        ff.draftProjections('QB', function(draftProjections) {
            assert.deepEqual(draftProjections, require('./resources/draft_projections_QB.json'));
            done();
        });
    });
    
    it('should return the test nfl weekly rankings - QB, week 2, ppr on', function(done) {
        ff.weeklyRankings('QB', 2, 1, function(weeklyRankings) {
            assert.deepEqual(weeklyRankings, require('./resources/weekly_rankings_QB_2_ppr.json'));
            done();
        });
    });
    
    it('should return the test nfl weekly projections - QB, week 1', function(done) {
        ff.weeklyProjections('QB', 1, function(weeklyProjections) {
            assert.deepEqual(weeklyProjections, require('./resources/weekly_projections_QB_1.json'));
            done();
        });
    });
    
    it('should return the test nfl weekly IDP rankings', function(done) {
        ff.weeklyIDPRankings(function(weeklyIDPRankings) {
            assert.deepEqual(weeklyIDPRankings, require('./resources/weekly_IDP_rankings.json'));
            done();
        });
    });
    
    it('should return the test nfl picks', function(done) {
        ff.picks(function(picks) {
            assert.deepEqual(picks, require('./resources/picks.json'));
            done();
        });
    });
    
    it('should return the test nfl depth charts', function(done) {
        ff.depthCharts(function(depthCharts) {
            assert.deepEqual(depthCharts, require('./resources/depth_charts.json'));
            done();
        });
    });
    
    it('should return the test nfl defensive rankings', function(done) {
        ff.defensiveRankings(function(defensiveRankings) {
            assert.deepEqual(defensiveRankings, require('./resources/defensive_rankings.json'));
            done();
        });
    });
    
    it('should return the test nfl game day inactives', function(done) {
        ff.inactives(1, function(inactives) {
            assert.deepEqual(inactives, require('./resources/inactives_1.json'));
            done();
        });
    });
    
    it('should return the test player stats and info', function(done) {
        ff.player(13, function(player) {
            assert.deepEqual(player, require('./resources/player_13.json'));
            done();
        });
    });
   
    it('should return the test daily fantasy football stats', function(done) {
        ff.dailyFantasyFootball('fanduel', function(dailyFantasyFootball) {
            assert.deepEqual(dailyFantasyFootball, require('./resources/daily_fanduel.json'));
            done();
        });
    });
    
});
