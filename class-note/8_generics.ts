// :: 예시 1. 타입을 구분하지 않고 전부 받는다.
// function logText(text) {
//   console.log(text);
//   return text;
// }

// logText(10);
// logText('하이');
// logText(true);

// :: 예시 2. 매개변수 text를 string으로 정의했지만, 함수를 호출할 때 다른 타입의 인자도 사용하고 싶을 때, 에러 발생 가능
// function logText(text: string) {
//   console.log(text);
//   text.split('').reverse().join('');
//   return text;
// }

// logText('하이');
// logText(10); // 에러
// logText(true); // 에러

// 그래서 logNumber라는 새로운, 하지만 비슷한 함수를 또 작성해야 함. => 유지 보수 측면에서 좋지 않음
// function logNumber(num: number) {
//   console.log(num);
//   return num;
// }

// :: 예시 3. 유니온 타입 방식 사용 시 문제점
// 함수 호출 시 input 값에 대한 문제는 해결됨. 하지만,
// 함수 안에서 text. 까지 입력 후 사용 가능한 메서드를 보면, string과 number의 교집합에 해당하는 메서드만 사용 가능
// function logText(text: string | number) {
//   console.log(text);
//   return text;
// }

// logText('a');
// const a = logText('a');
// a.split('') 입력 시 에러
// logText(10);

// :: 제네릭: 함수를 정의할 때 타입을 비워놓은 상태에서, 이 함수에 무엇이 들어갈 것이다 라고 함수를 호출하는 시점에 정의하는 것.
// 타입을 추론해서 최종 반환값까지 붙일 수 있음
function logText<T>(text: T): T {
  console.log(text);
  return text;
}

const str = logText<string>('abc');
str.split('')
const login = logText<boolean>(true);

const a = logText('a');
logText(10);
// const num = logNumber(10);
// logText(true);