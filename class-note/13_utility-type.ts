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

// Product에서 id, name, price만 뽑아오고 싶을 때, 새로 interface로 만들기보다, Pick이라는 utiliy type을 사용하면 코드가 더 간결해진다.
type ShoppingItem = Pick<Product, 'id' | 'name' | 'price'>

function displayProductDetail(shoppingItem: ShoppingItem) {
  
}