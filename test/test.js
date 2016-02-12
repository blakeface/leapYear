var code = require('../main.js')
var expect = require('chai').expect

describe('leapyear(400)', function(){
  it("it should say 'true'", function(){
    expect(code.leapYear(400)).to.equal(true);
  });
});
