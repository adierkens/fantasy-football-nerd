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

});
