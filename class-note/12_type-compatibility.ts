// :: 인터페이스
interface Developer {
  name: string;
  skill: string;
}

class Person2 {
  name: string;
  skill: string;
}

var developer: Developer;
var person: Person2;

developer = person;
person = developer;
developer = new Person2();

// :: 함수
var add = function(a: number) {
  // ...
}

var sum = function(a: number, b: number) {
  // ...
}

// sum = add;
// add = sum; // 에러

// :: 제네릭
interface Empty<T> {
  // ..
}

var empty1: Empty<string>;
var empty2: Empty<number>;
empty1 = empty2;
empty2 = empty1;

interface NotEmpty<T> {
  data: T;
}

var notEmpty1: NotEmpty<string>;
var notEmpty2: NotEmpty<number>;
// notEmpty1 = notEmpty2; // 에러
// notEmpty2 = notEmpty1; // 에러