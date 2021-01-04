// :: 숫자형 enum
// 값을 지정하지 않으면 기본적으로 숫자 0, 1, 2와 같은 식으로 할당이 된다.
enum Shoes {
  Nike,
  Adidas,
  Converse,
}

var myShoes = Shoes.Nike;
console.log(myShoes); // 0

// :: 문자형 enum
enum Shoes2 {
  Nike = '나이키',
  Adidas = '아디다스',
  Converse = '컨버스',
}

var myShoes2 = Shoes2.Nike; 
console.log(myShoes2); // 나이키

// 예제
enum Answer {
  Yes = 'Yes',
  No = 'N',
}

function askQuestion(answer: Answer) {
  if (answer === Answer.Yes) {
    console.log('정답입니다.');
  } else if (answer === Answer.No) {
    console.log('오답입니다.');
  }
}

askQuestion(Answer.Yes);
askQuestion(Answer.No);
