var code = require('../main.js')
var expect = require('chai').expect

describe('leapyear(400)', function(){
  it("leap years should be divisable by 400", function(){
    expect(code.leapYear(400)).to.equal(true);
    expect(code.leapYear(401)).to.equal(false);
  });
});

describe('leapyear(4)', function(){
  it("leap years should be divisable by 4", function(){
    expect(code.leapYear(4)).to.equal(true);
    expect(code.leapYear(3)).to.equal(false);
  });
});

describe('leapyear(100)', function(){
  it("leap years should not be divisable by 100", function(){
    expect(code.leapYear(100)).to.equal(false);
  });
});
