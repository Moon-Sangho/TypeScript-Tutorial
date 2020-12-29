// api url
var url = "https://jsonplaceholder.typicode.com/users/1";

// dom
var username = document.querySelector("#username");
var email = document.querySelector("#email");
var address = document.querySelector("#address");

// user data
var user = {};

// 서버에서 받아오는 데이터들의 타입을 미리 지정해 줌으로써 컴파일 단계에서 사전에 에러 방지 가능
/**
 * @typedef {object} Address
 * @property {string} street
 * @property {string} city
 */

/**
 * @typedef {object} User
 * @property {string} name
 * @property {string} email
 * @property {Address} address
 */

/**
 *  @returns {Promise<User>}
 */
function fetchUser() {
  return axios.get(url);
}

function startApp() {
  fetchUser()
    .then(function (response) {
      // 서버에서 받아오는 데이터 확인
      console.log(response.data);
      user = response.data;
      // TODO: 이름, 이메일, 주소 표시하기
      // 데이터가 user 변수에 잘 저장되었는지 확인
      console.log(user);
      username.innerText = user.name;
      email.innerText = user.email;
      address.innerText = user.address.city;
    })
    .catch(function (error) {
      console.log(error);
    });
}

startApp();
