const isAnagram = require('../src/anagram');


/*

* Anagram Testing file

*/

test('isAnagram function exists', () => {
  expect(isAnagram).toBeDefined()
  expect(isAnagram).toBeInstanceOf(Function)
});

test('"cinema" is an anagram of "iceman"', () => {
  let str1 = 'cinema',
    str2 = 'iceman'

  expect(isAnagram(str1, str2)).toBeTruthy()
});

test('"Dormitory" is an anagram of "dirty room##"', () => {
  let str1 = 'Dormitory',
    str2 = 'dirty room##'

  expect(isAnagram(str1, str2)).toBeTruthy()
});

test('"Hello" is NOT an anagram of "Aloha"', () => {
  let str1 = 'Hello',
    str2 = 'Aloha'

  expect(isAnagram(str1, str2)).toBeFalsy()
});

/*

* Various functions Testing file

*/

const functions = require('../src/variousfunctions');

const nameCheck = () => console.log('Checking Name.');

describe('Checking Names', () => {
  beforeEach(() => nameCheck());

  test('User is Jeff', () => {
    const user = 'Jeff';
    //Check if the user is Jeff
    let receiver = functions.checkValue(user)

    expect(receiver).toEqual(user)
  });

  test('User is Karen', () => {
    const user = 'Karen';
    //Check if the user is Karen
    let receiver = functions.checkValue(user)

    expect(receiver).toEqual(user)
  });
});

test('Adds 2 + 2 to equal 4', () => {
  expect(functions.add(2, 2)).toEqual(4)
});

test('Adds 2 + 2 to NOT equal 5', () => {
  expect(functions.add(2, 2)).not.toEqual(5)
});

/*

* Informations

*/

// CHECK FOR true & false VALUES
// toBeNull matches only null
// toBeUndefined matches only undefined
// toBeDefined is the opposite of toBeUndefined
// toBeTruthy matches anything that an if statement treats as true
// toBeFalsy matches anything that an if statement treats as false

test('Should be null', () => {
  expect(functions.isNull()).toBeNull()
});

// toBeFalsy
test('Should be falsy', () => {
  expect(functions.isNull()).toBeFalsy()
});

// toEqual
test('User should be Marc Antoine object', () => {
  let user = {
    firstName: 'Marc',
    lastName: 'Antoine'
  }

  expect(functions.createUser()).toEqual(user)
});

// Less than and greater than
test('Should be under 1000', () => {
  const load1 = 500;
  const load2 = 500;

  expect(load1).toBeLessThan(1000)
  expect(load1).toBeLessThanOrEqual(1000)
  expect(load2).toBeLessThan(1000)
  expect(load2).toBeLessThanOrEqual(1000)
  expect(load1 + load2).toBeGreaterThanOrEqual(1000)
});

// Regex
test('There is no I in the word team', () => {
  expect('team').not.toEqual(expect.stringMatching(/i/))
});

// Arrays
test('Admin should be in usernames', () => {
  usernames = ['john', 'karen', 'admin'];
  expect(usernames).toContain('admin')
});

// Working with async data

// Async Await since ES7
test('User fetched name should be Geoffrey Beauny', async () => {
  const data = await functions.fetchUser();
  expect(data.name).toEqual('Leanne Graham')
});

/*

* ReverseString Testing file

*/

const reverseString = require('../src/reversestr');

test('reverseString function exists', () => {
  expect(reverseString).toBeDefined()
  expect(reverseString).toBeInstanceOf(Function)
});

test('String reverses', () => {
  let str = 'string reverses',
    revStr = 'sesrever gnirts'

  expect(reverseString(str)).toEqual(revStr)
});

test('String reverses with uppercase', () => {
  let str = 'sTriNg rEveRses',
    revStr = 'sesrever gnirts'

  expect(reverseString(str)).toEqual(revStr)
});
