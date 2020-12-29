// function sum(a, b) {
//   return a + b;
// }

// sum(10, "20"); // 두 번 째 인자를 문자열로 입력하게되면 '1020'이라는 string이 출력됨

// 주석으로 아래와 같은 코드를 추가함으로써 인자에 다른 type을 적용할 시 에러를 발생시킬 수 있음
// @ts-check

/**
 * @param {number} a 첫번째 숫자
 * @param {number} b 두번째 숫자
 */

function sum(a, b) {
  return a + b;
}

sum(10, 20);
sum(10, "20"); // 위의 @ts-check 덕분에 미리 에러를 발생시킬 수 있음

// 그러나 이전에 다뤘던 API들을 일일이 다 작성하기에는 어마어마한 손이 가고
// 내용들에 대해서 type을 정의하고 import를 해서 갖다 쓴다던지, 재활용하거나 확장해나간다는 관점에서는
// typescript를 쓰는 것이 훨씬 코드량도 줄일 수 있고, 가독성도 키울 수 있다.
