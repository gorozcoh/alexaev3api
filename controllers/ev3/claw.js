'use strict';

const socketServer = require('../../socketServer');

class ClawController {
    init(restify) {
        restify.get('/claw/open', this._open.bind(this));
        restify.get('/claw/close', this._close.bind(this));
    }

    _open(req, res) {
        console.log('request query: ', req.params);
        socketServer.send('claw', req.params);
        res.send(200);
    }

    _close(req, res) {
        console.log('request query: ', req.params);
        socketServer.send('claw', req.params);
        res.send(200);
    }
}

module.exports = new ClawController();
