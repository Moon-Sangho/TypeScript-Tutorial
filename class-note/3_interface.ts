interface User {
  age: number;
  name: string;
}

// :: 변수에 인터페이스 활용
var seho: User = {
  age: 33,
  name: '세호'
}

// :: 함수에 인터페이스 활용
function getUser(user: User) {
  console.log(user);
}

const capt = {
  name: '캡틴',
  age: 100
}

getUser(capt);

// :: 함수의 스펙(구조)에 인터페이스를 활용
interface SumFunction {
  (a: number, b: number): number;
}

var sum: SumFunction;

sum = function(a: number, b: number): number {
  return a + b;
}

// :: 인덱싱
interface StringArray {
  [index: number]: string;
}

var arr: StringArray = ['a', 'b', 'c'];
// arr[0] = 10 // 에러

// :: 딕셔너리 패턴
interface StringRegexDictionary {
  [key: string]: RegExp
}

var obj = {
  // sth: /abc/,
  cssFile: /\.css$/,
  jsFile: /\.js$/,
}

// 아래 value 부분에 마우스를 가져다 대면 '타입 추론'을 해준다.
Object.keys(obj).forEach(function(value) {});

// :: 인터페이스 확장
interface Person {
  name: string;
  age: number;
}

interface Developer extends Person {
  language: string;
}

var sangho: Developer = {
  name: '상호',
  age: 100,
  language: 'ts',
}
