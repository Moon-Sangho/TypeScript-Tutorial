function fetchItems(): string[] {
  let items = ['a', 'b', 'c'];
  return items;
}

var result = fetchItems();
console.log(result)

// Promise를 리턴할 때 아래처럼 함수 옆에 타입을 정의해야 함
function fetchItems2(): Promise<string[]> {
  let items: string[] = ['a', 'b', 'c'];
  return new Promise(function(resolve) {
    resolve(items);
  })
}

fetchItems();