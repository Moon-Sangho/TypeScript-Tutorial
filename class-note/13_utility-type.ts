interface Product {
  id: number;
  name: string;
  price: number;
  brand: string;
  stock: number;
}

// 1. 상품 목록을 받아오기 위한 API 함수
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

// 2. 특정 상품의 상세 정보를 나타내기 위한 함수
type ShoppingItem = Pick<Product, 'id' | 'name' | 'price'>

function displayProductDetail(shoppingItem: ShoppingItem) {
  
}

// interface UpdateProduct {
//   id?: number;
//   name?: string;
//   price?: number;
//   brand?: string;
//   stock?: number;
// }

// :: Partial : 파셜(Partial) 타입은 특정 타입의 부분 집합을 만족하는 타입을 정의할 수 있다.
// Product의 모든 타입을 optional로 처리 해준다.
type UpdateProduct = Partial<Product>

// 3. 특정 상품 정보를 업데이트(갱신)하는 함수
function updateProductItem(productItem: UpdateProduct) {

}

// 4. 유틸리티 타입 구현하기 - Partial
interface UserProfile {
  username: string;
  email: string;
  profilePhotoUrl: string;
}

// # UserProfileUpdate를 리팩토링 해나가는 과정
// interface UserProfileUpdate {
//   username?: string;
//   email?: string;
//   profilePhotoUrl?: string;
// }

// # 1.
// type UserProfileUpdate = {
//   username?: UserProfile['username'];
//   email?: UserProfile['email'];
//   profilePhotoUrl?: UserProfile['profilePhotoUrl'];
// }

// # 2.
// type UserProfileUpdate = {
//   [p in 'username' | 'email' | 'profilePhotoUrl']?: UserProfile[p]
// }

// type UserProfileKeys = keyof UserProfile;

// # 3.
type UserProfileUpdate = {
  [p in keyof UserProfile]?: UserProfile[p]
}

// # 4. Partial의 본 모습과 같아짐 
type Subset<T> = {
  [p in keyof T]?: T[p]
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
