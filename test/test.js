var code = require('../main.js');
var expect = require('chai').expect;

describe('test', function(){

  it('it against true', function(){
    expect(code.testTax()).to.equal(true);
  })
});