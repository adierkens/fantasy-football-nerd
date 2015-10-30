'use strict';
var assert = require('chai').assert;
var FFNerd = require('..');

var API_KEY = 'test';

describe('Basic API tests', function() {

    var ff = new FFNerd({ api_key: API_KEY });    
    
    it('should return the test nfl teams', function() {
        ff.teams(function(teams) {
            assert.deepEqual(teams, require('./resources/teams.json'));
        });
    });

    it('should return the test nfl schedule', function() {
        ff.schedule(function(schedule) {
            assert.deepEqual(schedule, require('./resources/schedule.json'));
        });
    });

    it('should return the test nfl players', function() {
        ff.players(function(players) {
            assert.deepEqual(require('./resources/players.json'), players);
        });
    });

    it('should return the test nfl bye weeks', function() {
        ff.byes(function(byes) {
            assert.deepEqual(byes, require('./resources/byes.json'));
        });
    });



});
