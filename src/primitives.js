typeof 'a'; // string
typeof 5; // number
typeof undefined; // undefined
typeof false; // boolean
typeof null; // object, inconsistency

const f = x => x;
typeof f; // function

const sym = Symbol(35);
typeof sym; // symbol

'1' == 1; // true
'1' === 1; // false

0 == false; // true
1 == true; // true

0 === false; // false
1 === true; // false

'1' ==  true; // true
'0' ==  false; // true

'1' === true; // false
'0' === false; // false

null == undefined; // true
null === undefined; // false
