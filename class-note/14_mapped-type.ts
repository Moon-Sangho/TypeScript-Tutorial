// ::
type Heros = 'Hulk' | 'Capt' | 'Thor';
type HeroAges = { [K in Heros]: number };

const ages: HeroAges = {
  Hulk: 33,
  Capt: 100,
  Thor: 1000,
}

// for in 반복문의 원리
// var arr = ['a', 'b', 'c'];
// for (var key in arr) {
  // console.log(arr[key]); // 'a' 'b' 'c'
// }