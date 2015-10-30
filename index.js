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
            for (opt_i in config.options) {
                var opt = config.options[opt_i];
                url += '/' + opt
            }
        }
        request(url, function(error, response, body) {
            if (!error && response.statusCode == 200) {
                callback(JSON.parse(body));
            }
            console.log("Error: " + error);
            callback(error);
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
}

module.exports = FFNerd;
