var code = require('../main.js');
var expect = require('chai').expect;

describe('test', function(){

  it('should tax 10% on the first $10', function() {
    expect(code.calcTax(1)).to.equal(0.1);
    expect(code.calcTax(10)).to.equal(1);
  });

  it('should tax 7% on the second $10', function(){
    expect(code.calcTax(15)).to.equal(1.35);
  });

  it('should tax 5% on the third $10', function(){
    expect(code.calcTax(25)).to.equal(1.95);
  });

  it('should tax 3% thereafter', function(){
    expect(code.calcTax(35)).to.equal(2.35);
  });

});