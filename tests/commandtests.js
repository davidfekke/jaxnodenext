"use strict";

var chai = require('chai');
var mocha = require('mocha');
var getNextMeeting = require('../lib/');

var assert = chai.assert;

describe('JnnData test', function() {
	it('responds to getNextMeeting', function testGetNextMeeting(done) {
		getNextMeeting(function (results) { 
			assert.typeOf(results, 'object');
			done();
		});		
	})
});
