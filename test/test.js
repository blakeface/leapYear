var code = require('../main.js')
var expect = require('chai').expect

describe('leapyear(400)', function(){
  it("return true - leap years should be divisable by 400", function(){
    expect(code.leapYear(400)).to.equal(true);
  });
});

describe('leapyear(400)', function(){
  it("return false - leap years should be divisable by 400", function(){
    expect(code.leapYear(400)).to.equal(false);
  });
});
