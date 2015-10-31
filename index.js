'use strict';
var request = require('request');
var _ = require('lodash');

function optionsHelper(opt, callback) {
    if (!callback) {
        callback = opt;
        opt = null;
    }

    var req_options = {}
    if (opt) {
        req_options.options = [ opt ];
    }

    return {
        callback: callback,
        options: req_options
    }
}

class FFNerd {    
    constructor(options) {
        var default_options = {
            url: 'http://fantasyfootballnerd.com/service/',
            format: 'json',
        }
        
        if (!options.api_key) {
            throw "api_key is required";
        }

        this.options = _.assign(default_options, options);
    }

    sendServiceRequest(config, callback) {
        callback = callback || function(){};
        var url = this.options.url + config.service + '/' + this.options.format + '/' + this.options.api_key;
        if (config.options) {
            for (var opt_i in config.options) {
                var opt = config.options[opt_i];
                url += '/' + opt
            }
        }
        request(url, function(error, response, body) {
            callback(JSON.parse(body));
        });       
    }
    
    teams(callback) {
        this.sendServiceRequest({ service: 'nfl-teams' }, callback);
    }

    schedule(callback) {
        this.sendServiceRequest({ service: 'schedule' }, callback);
    }

    players(position, callback) {
        var resolved = optionsHelper(position, callback);
        var req_options = resolved.options;
        callback = resolved.callback;
        
        req_options.service = 'players';

        this.sendServiceRequest(req_options, callback);
    }

    byes(callback) {
        this.sendServiceRequest({ service: 'byes' }, callback);
    }

    injuries(week, callback) {
        var resolved = optionsHelper(week, callback);
        var req_options = resolved.options;
        callback = resolved.callback;
        
        req_options.service = 'injuries';

        this.sendServiceRequest(req_options, callback);
    }

    weather(callback) {
        this.sendServiceRequest({ service: 'weather' }, callback);
    }

    auction(ppr, callback) {
        var resolved = optionsHelper(ppr, callback);
        var req_options = resolved.options;
        callback = resolved.callback;

        req_options.service = 'auction';

        this.sendServiceRequest(req_options, callback);
    }

    draftRankings(ppr, callback) {
        var resolved = optionsHelper(ppr, callback);
        var req_options = resolved.options;
        callback = resolved.callback;

        req_options.service = 'draft-rankings';
    
        this.sendServiceRequest(req_options, callback);
    }

    draftProjections(position, callback) {
        var resolved = optionsHelper(position, callback);
        var req_options = resolved.options;
        callback = resolved.callback;
        
        req_options.service = 'draft-projections';

        this.sendServiceRequest(req_options, callback);       
    }

    weeklyRankings(position, week, ppr, callback) {
        var req_options = { service: 'weekly-rankings', options: [] }
        if (arguments.length == 1) {
            callback = position;
            position = week = ppr = null;
        } else if (arguments.length == 2) {
            callback = week;
            req_options.options = [ position ];
        } else if (arguments.length == 3) {
            callback = ppr;
            req_options.options = [ position, week ]; 
        } else if (arguments.length == 4) {
            req_options.options = [ position, week, ppr ];
        }
        
        this.sendServiceRequest(req_options, callback);
    }

    weeklyProjections(position, week, callback) {
        var req_options = { service: 'weekly-projections' };
        req_options.options = [];
        
        if (arguments.length == 1) {
            callback = position;
            position = week = null;
        } else if (arguments.length == 2) {
            callback = week;
            week = null;
            req_options.options = [ position ];
        } else {
            req_options.options = [ position, week ];
        }
        
        this.sendServiceRequest(req_options, callback);
    }

    weeklyIDPRankings(callback) {
        var req_options = { service: 'weekly-idp' }
        this.sendServiceRequest(req_options, callback);
    }

    picks(callback) {
        var req_options = { service: 'nfl-picks' }
        this.sendServiceRequest(req_options, callback);
    }

    depthCharts(callback) {
        var req_options = { service: 'depth-charts' }
        this.sendServiceRequest(req_options, callback);
    }

    defensiveRankings(callback) {
        var req_options = { service: 'defense-rankings' }
        this.sendServiceRequest(req_options, callback);
    }

    inactives(week, callback) {
        var resolved = optionsHelper(week, callback);
        var req_options = resolved.options;
        callback = resolved.callback;
        
        req_options.service = 'inactives';

        this.sendServiceRequest(req_options, callback);
    }

    player(player_id, callback) {
        var resolved = optionsHelper(player_id, callback);
        var req_options = resolved.options;
        callback = resolved.callback;
        
        req_options.service = 'player';

        this.sendServiceRequest(req_options, callback);
    }

    dailyFantasyFootball(platform, callback) {
        var resolved = optionsHelper(platform, callback);
        var req_options = resolved.options;
        callback = resolved.callback;
        
        req_options.service = 'daily';

        this.sendServiceRequest(req_options, callback);
    }
}

module.exports = FFNerd;
