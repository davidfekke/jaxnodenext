'use strict';

var chai = require('chai');
var nock = require('nock');
var getNextMeeting = require('../lib/');

var assert = chai.assert;

describe('JnnData Error test', function () {
    it('Responds with an error', function testRequestError(done) {
        nock('https://www.jaxnode.com')
            .get('/api')
            .replyWithError({message: 'something awful happened', code: 'AWFUL_ERROR'});
        getNextMeeting(function (results) {
            console.log(results);
            assert.typeOf(results, 'object');
            done();
        });
    });
});
