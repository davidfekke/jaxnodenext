"use strict";

var chai = require('chai');
var mocha = require('mocha');
var JnnData = require('../lib/');

var assert = chai.assert;

describe('JnnData test', function() {
	it('responds to getNextMeeting', function testGetNextMeeting(done) {
		JnnData.getNextMeeting(function (results) { 
			assert.typeOf(results, 'object');
			done();
		});		
	})
});
