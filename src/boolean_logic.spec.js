const mocha = require('mocha');
const assert = require('chai').assert;

const {
  isEven, 
  weekDay,
  ageGroup,
} = require('./boolean_logic');

describe('isEven', function() {
  it('should return "even" if the number is even', function() {
    assert.strictEqual(isEven(4), 'even');
  });

  it('should return "odd" if the number is not even', function() {
    assert.strictEqual(isEven(1), 'odd');
  });

  it('should return "error" if the argument given is not a number', function() {
    assert.strictEqual(isEven("not a number"), 'error');
  });
});

describe('ageGroup', function() {
  it('should return "infant" if the age is between 0 and 1', function() {
    assert.strictEqual(ageGroup(0), 'infant');
  });

  it('should return "kid" if the age is between 1 and 10', function() {
    assert.strictEqual(ageGroup(6), 'kid');
  });

  it('should return "teenager" if the age is between 10 and 19', function() {
    assert.strictEqual(ageGroup(13), 'teenager');
  });

  it('should return "adult" if the age is between 19 and 60', function() {
    assert.strictEqual(ageGroup(35), 'adult');
  });

  it('should return "old" if the age is between 60 and 120', function() {
    assert.strictEqual(ageGroup(69), 'old');
  });

  it('should return "dead" if the age is bigger then 120', function() {
    assert.strictEqual(ageGroup(135), 'dead');
  });

  it('should return "error" if the age is not between 0 and 120 or the type of age is not a number', function() {
    assert.strictEqual(ageGroup("error"), 'error');
  });
});

describe('weekDay', function() {
  it('should return "Monday" if the number is 1', function() {
    assert.strictEqual(weekDay(1), 'Monday');
  });

  it('should return "Tuesday" if the number is 2', function() {
    assert.strictEqual(weekDay(2), 'Tuesday');
  });

  it('should return "Wednesday" if the number is 3', function() {
    assert.strictEqual(weekDay(3), 'Wednesday');
  });

  it('should return "Thursday" if the number is 4', function() {
    assert.strictEqual(weekDay(4), 'Thursday');
  });

  it('should return "Friday" if the number is 5', function() {
    assert.strictEqual(weekDay(5), 'Friday');
  });

  it('should return "Weekend" if the number is 6 or 7', function() {
    assert.strictEqual(weekDay(6), 'Weekend');
    assert.strictEqual(weekDay(7), 'Weekend');
  });

  it('should return "error" if the argument is not a number or is out of range [1...7]', function() {
    assert.strictEqual(weekDay(78), 'error');
    assert.strictEqual(weekDay('not a number'), 'error');
  });
});
/*
describe('1', function() {
  it(`'1' as a string is strictEqual to 1 as a number due to type coercion`, function() {
    assert.strictEqual('1', 1)
  })
})

describe('1', function() {
  it(`'1' as a string is not equal to the boolean true`, function() {
    assert.notEqual('1', true)
  })
})

describe('1', function() {
  it(`1 as a number is not equal to the boolean true`, function() {
    assert.notEqual(1, true)
  })
})

describe('0', function() {
  it(`'0' as a string is strict equal to the boolean false due to type coercion`, function() {
    assert.strictEqual('0', false)
  })
})

describe('0', function() {
  it(`0 as a number is equal to the boolean true due to type coercion`, function() {
    assert.equal(0, true)
  })
})

describe('0', function() {
  it(`0 as a number is strict equal to the boolean false because strict equal doesn't cast types`, function() {
    assert.strictEqual(0, false)
  })
})*/
