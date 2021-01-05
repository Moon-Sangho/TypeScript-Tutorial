// :: ES2015 (ES6) 문법 중 class 예시
class Person {
  constructor(name, age) {
    console.log("생성 되었습니다");
    this.name = name;
    this.age = age;
  }
}

// Person이라는 class를 토대로 객체를 만들고 seho라는 변수에 저장
var seho = new Person("세호", 30);
console.log(seho); // 생성 되었습니다, Person {name: seho, age: 30}

// :: 프로토타입. 예제를 통한 이해
var user = { name: "capt", age: 100 };
var admin = {};

// admin이라는 빈 객체에 __proto__ 키워드를 이용하여 기본적으로 user의 속성들을 사용할 수 있도록 설정
admin.__proto__ = user; // { name: 'capt', age: 100 }

admin.name; // 'capt'
admin.age; // 100

// console에서 admin을 입력하면 __proto__ 속성에 age: 100, name: 'capt'가 할당되어 있는 것을 확인할 수 있다.

// 아래와 같이 user 속성 이외에 추가로 role이라는 속성을 추가하여 확장할 수 있다.
admin.role = "admin"; // admin

// 아래와 같은 ES5 함수로도 프로토타입을 이용한 상속을 구현할 수 있었음
function Person(name, age) {
  this.name = name;
  this.age = age;
}

var capt = new Person("캡틴", 100);

// 이런 패턴들을 자바 개발자 등 객체지향 언어에 익숙한 사람들이 좀 더 자바스크립트에 다가가기 수월하게 하기 위해 ES6에서 class 문법을 지원했던 것
// 하지만 class를 babel로 돌려보면 결국 생성자 함수를 돌린다는 것을 알 수 있다.
// 즉, 위의 class 키워드를 사용하여 만든 Person과 function 키워드를 이용해 만든 Person은 본질적으로 같다.

// 상속과 프로토타입 개념 참고 사이트
// https://developer.mozilla.org/ko/docs/Web/JavaScript/Guide/Inheritance_and_the_prototype_chain
