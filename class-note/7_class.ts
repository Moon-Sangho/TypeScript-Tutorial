class PersonTS {
  private name: string; // private: class 안에서만 사용하겠다는 뜻
  public age: number; // 그렇지 않다면 기본적으로 public 
  readonly log: string; // 읽기만 가능. 변경 불가

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}

// 리액트 예전 문법 - 클래스 기반 코드
// class App extends React.Component {
// }

// 리액트 최신 문법 - 훅 기반의 함수형 코드
// function App() {
//   return <div>Hello world</div>
// }