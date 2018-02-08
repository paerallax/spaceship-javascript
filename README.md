# spaceship-javascript
Educational content for JavaScript

## First steps
Clonse this repository to your local machine:

``` bash 
$ git clone https://github.com/paerallax/spaceship-javascript.git
```

Enter it:
``` bash
$ cd spaceship-javascript
```

And install dependencies:
``` bash
$ npm install
```

Open it with an editor of your choice. I specifically haven't included any linters yet as they'd solve the tests for you (:


## Goal
In the `src` directory there are 2 files: `primitives.js` and `primitives.spec.js`. The first one is just a reminder of how types coerce and what `typeof` returns on each primitive (try to not look at this file at first :) ). The fun happens in `primitives.spec.js`.
On the first 2 lines, we're importing a testing framework and an assertion library: 
``` javascript
const mocha = require('mocha')
const assert = require('chai').assert
```

Then we see a bunch of `describe` blocks, starting from line 4. In simple terms you give it a string which is an expression or statement or just something in JavaScript that you want to describe. After that you pass to the `it` block (line 5) the description of above-mentioned expression/statement/etc., in plain English. Now, this all is already done for you, BUT the descriptions are misleading. Okay, they're not misleading, they're straight up incorrect (: 
Let's look at the one on line 6:
(You need not worry about unfamiliar jargon or syntax of requiring a library, writing test blocks used here as it's not relevant to our exercies as of now. What's relevant is the code on lines 6, 12, 18 and so on: **the assertions**. 

``` javascript
assert.strictEqual(typeof null, 'null')
```

It does the following:

```javascript
typeof null === null
```

This is not correct. `typeof null` is something else (hint: historical reasons). All other `describe` blocks are not correct either. To test this, we can run: 

``` bash
$ npm run test
```

It should return a error log saying that all 7 tests fail. That is correct behavior, as all tests indeed contain a mistake. Your task it to change the arguments or method of comparison on assertions to make it correct.

Before going further, we should make the taxonomy clear:

``` 
strictEqual stands for (===)
equal stands for (==)
```

Considering this, let's solve one of these to get a grasp of how you can approach this. The last test says (on line `41`):
```0 as a number is strict equal to the boolean false because strict equal doesn't cast types```

And then writes this same statement in a programmatic way on line 42:
``` javascript
assert.strictEqual(0, false)
```

Which does: 
``` javascript
0 === false
```

In this case you should change `strictEqual` to `equal` because `0` isn't strict equal to `false` (`0 === false` isn't true), it's `equal` to `false` (`0 == false`). Hence change line 42 to:
```javascript
assert.equal(0, false)
```

If we then run:
``` bash
$ npm run test
```

We should get 6 errored and 1 passed test, the one test that we just corrected. 

This is all there is to know. If you're confused about anything, get stuck or need explanation, please don't hesitate to ask one of the people around you and/or the speakers (: 
