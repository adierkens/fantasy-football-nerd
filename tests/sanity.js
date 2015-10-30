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
        ff.players('QB', function(players) {
            assert.deepEqual(require('./resources/players.json'), players);
            done();
        });
    });

    it('should return the test nfl bye weeks', function(done) {
        ff.byes(function(byes) {
            assert.deepEqual(byes, require('./resources/byes.json'));
            done();
        });
    });

});
