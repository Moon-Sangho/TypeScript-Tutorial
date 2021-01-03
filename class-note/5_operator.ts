// function logMessage(value: any) {
//   console.log(value);
// }

// logMessage('hello');
// logMessage(100);

// :: Union Type : 하나 이상의 타입을 쓸 수 있도록 함
var personName: string | number | boolean;

function logMessage(value: string | number) {
  if (typeof value === "number") {
    value.toLocaleString(); // value. 까지 입력 시 사용 가능한 메서드 확인 가능
  }
  if (typeof value === "string") {
    value.toString();
  }
  throw new TypeError('value must be string or number');
}

logMessage('hello');
logMessage(100);

interface Developer {
  name: string;
  skill: string;
}

interface Person {
  name: string;
  age: number;
}

// :: Union Type의 특징
function askSomeone(someone: Developer | Person) {
  someone.name; // someone. 까지 입력 시 Developer와 Person의 공통 속성인 name만 제공한다.
  // someone.skill; // 에러
  // someone.age; // 에러
}

// 함수 호출시 아래와 같이 호출 가능
askSomeone({ name: '디벨로퍼', skill: '웹 개발' });
askSomeone({ name: '캡틴', age: 100 });

// :: Intersection Type의 특징
function askSomeone2(someone: Developer & Person) {
  someone.name; // 위의 Union Type과 달리, someone. 까지 입력 시 name, skill, age를 확인할 수 있다.
  someone.skill; 
  someone.age;
}

// 함수 호출시 아래와 같이 호출 가능
askSomeone2({ name: '디벨로퍼', skill: '웹 개발', age: 30 });

var sangho: string | number | boolean;
var capt: string & number & boolean;
