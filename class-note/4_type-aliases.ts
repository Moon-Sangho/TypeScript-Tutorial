// interface Man {
//   name: string;
//   age: number;
// }

type Man = {
  name: string;
  age: number;
}

// interface와 달리, 아래 Man에 마우스를 가져다 대면 프리뷰로 속성들의 타입을 확인할 수 있다.
// 또한 타입의 확장(extends)이 불가능하다.
var seho: Man = {
  name: '세호',
  age: 30
}

type MyString = string;
var str: MyString = 'hello';

type Todo = { id: string; title: string; done: boolean };
function getTodo(todo: Todo) {

}