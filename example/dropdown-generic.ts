// interface와 Union Type을 이용한 방법
interface Email {
  value: string;
  selected: boolean;
}

const emails: Email[] = [
  { value: 'naver.com', selected: true },
  { value: 'gmail.com', selected: false },
  { value: 'hanmail.net', selected: false },
];

interface ProductNumber {
  value: number;
  selected: boolean;
}

const numberOfProducts: ProductNumber[] = [
  { value: 1, selected: true },
  { value: 2, selected: false },
  { value: 3, selected: false },
];

function createDropdownItem(item: Email | ProductNumber) {
  const option = document.createElement('option');
  option.value = item.value.toString();
  option.innerText = item.value.toString();
  option.selected = item.selected;
  return option;
}

// NOTE: 이메일 드롭 다운 아이템 추가
emails.forEach(function (email) {
  const item = createDropdownItem(email);
  const selectTag = document.querySelector('#email-dropdown');
  selectTag.appendChild(item);
});

// 아래와 같이 코드를 작성해도 에러가 발생하지 않음.
numberOfProducts.forEach(function (product) {
  const item = createDropdownItem(product);
})