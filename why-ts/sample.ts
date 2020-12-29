// 매개변수와 결과값의 타입을 미리 정의
function add(a: number, b: number): number {
  return a + b;
}

// 인자에 number가 아닌 다른 type의 인자를 넣으면 컴파일 단계에서 에러를 발생시킴
var result = add(10, 20);

// result. 까지만 입력해도 number type에서 사용될 수 있는 메서드들을 자동으로 보여줌
result.toLocaleString();

