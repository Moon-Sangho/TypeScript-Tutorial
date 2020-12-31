// JS 문자열 선언
// var str = 'hello';

// TS 문자열 선언
let str: string = 'hello';

// TS 숫자
let num: number = 10;

// TS 배열
let arr: Array<number> = [1, 2, 3];
let items: number[] = [1, 2, 3];
let heroes: Array<string> = ['Capt', 'Thor', 'Hulk'];

// TS 튜플: 모든 인덱스에 타입이 정의되어 있는 배열
let address: [string, number] = ['gangnam', 100];

// TS 객체
let obj: object = {};

let person: object = {
  name: 'capt',
  age: 100
};

// 아래와 같이 객체 속성의 타입까지 구체적으로 지정할 수 있음
let person2: { name: string, age: number } = {
  name: 'capt',
  age: 100
}

// TS 진위값
let show: boolean = true;