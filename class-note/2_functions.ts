// 함수의 파라미터에 타입을 정의하는 방식
// function sum(a: number, b: number) {
//   return a + b;
// }

// sum(10, 20);

// 함수의 반환 값에 타입을 정의하는 방식
function add(): number {
  return 10;
}

// 함수에 타입을 정의하는 방식
function sum(a: number, b: number): number {
  return a + b;
}

// sum(10, 20, 30, 40); js와 다르게 ts는 정해진 인자보다 더 많을 경우 에러메시지를 띄워준다.

// 함수의 옵셔널 파라미터
function log(a: string, b?: string) {
  console.log(a, b);
}

log('hello world');
log('hello ts', 'abc');