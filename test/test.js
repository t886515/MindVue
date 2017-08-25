var request = require('supertest');
var express = require('express');
var expect = require('chai').expect;
var app = require('../src/server/server.js');
var handler = require('../src/server/pageHandler.js');
var chai = require('chai');
var should = chai.should();
var chaiHttp = require('chai-http');
// var app = require('express')

 // "test": "eslint src && mocha --coverage",
 //dont mess with eslint for now
chai.use(chaiHttp);
describe('server', function() {
  describe('GET /', function () {
    it('should return plain text "Not logged in"', function (done) {
      chai.request(app)
        .get('/')
        .end(function(req, res) {
          res.should.have.status(200);
          res.text.should.equal('Not logged in')
          done();
        });
    });
  });

  describe('GET /index', function () {
    it('should return plain text "Map index"', function (done) {
      chai.request(app)
        .get('/index')
        .end(function(req, res) {
          // console.log(res);
          res.should.have.status(200);
          res.text.should.equal('Map index')
          done();
        });
    });
  });

});