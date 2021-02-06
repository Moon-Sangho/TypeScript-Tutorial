interface Product {
  id: number;
  name: string;
  price: number;
  brand: string;
  stock: number;
}

// 상품 목록을 받아오기 위한 API 함수
// function fetchProducts(): Promise<Product[]> {
  //..
// }

// interface ShoppingItem {
//   id: number;
//   name: string; 
//   price: number;
// }

// :: Pick : 픽(Pick) 타입은 특정 타입에서 몇 개의 속성을 선택(pick)하여 타입을 정의할 수 있다.
// Product에서 id, name, price만 뽑아오고 싶을 때, 새로 interface로 만들기보다, Pick이라는 utiliy type을 사용하면 코드가 더 간결해진다.
type ShoppingItem = Pick<Product, 'id' | 'name' | 'price'>

function displayProductDetail(shoppingItem: ShoppingItem) {
  
}

// :: Omit : 오밋(Omit) 타입은 특정 타입에서 지정된 속성만 제거한 타입을 정의해 준다.
interface AddressBook {
  name: string;
  phone: number;
  address: string;
  company: string;
}
const phoneBook: Omit<AddressBook, 'address'> = {
  name: '재택근무',
  phone: 12342223333,
  company: '내 방'
}
const chingtao: Omit<AddressBook, 'address'|'company'> = {
  name: '중국집',
  phone: 44455557777
}