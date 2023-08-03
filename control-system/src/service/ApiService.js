import { API_BASE_URL } from "../config/app-config";
// const ACCESS_TOKEN = "ACCESS_TOKEN";

export function call(api, method, request) {
  let headers = new Headers({
    "Content-Type": "application/json",
  });
  const accessToken = localStorage.getItem("ACCESS_TOKEN");
  if (accessToken) {
    headers.append("Authorization", "Bearer " + accessToken);
  }
  let options = {
    headers: headers,
    url: API_BASE_URL + api,
    method: method,
  };
  if (request) {
    options.body = JSON.stringify(request);
  }
  return fetch(options.url, options)
    .then((response) =>
      response.json().then((json) => {
        if (!response.ok) {
          return Promise.reject(json);
        }
        return json;
      })
    )
    .catch((error) => {
      console.log("Oops!");
      console.log(error.status);
      console.log("Ooops!");
      if (error.status === 403) {
        window.location.href = "/login";
      }
      return Promise.reject(error);
    });
}

//로그인을 위한 API 서비스 메소드 signin
export function login(userDTO) {
  return call("/auth/login", "POST", userDTO).then((response) => {
    if (response.token) {
      localStorage.setItem("ACCESS_TOKEN", response.token);
      localStorage.setItem("username", response.username);
      window.location.href = "/dashboard";
    }
  });
}

// 회원 가입 요청
export function signup(userDTO) {
  return call("/auth/signup", "POST", userDTO)
    .then((response) => {
      if (response.id) {
        window.location.href = "/signin";
      }
    })
    .catch((error) => {
      console.log("Oops!");
      console.log(error.status);
      console.log("Ooops!");
      if (error.status === 403) {
        window.location.href = "/auth/signup";
      }
      return Promise.reject(error);
    });
}

// 로그아웃
export function signout() {
  // local 스토리지에 토큰 삭제
  localStorage.setItem("ACCESS_TOKEN", null);
  localStorage.setItem("username", null);

  window.location.href = "/";
}

// 이력 데이터 요청
export function UserInput(setUserinput = { setUserinput }) {
  return call("/userinput", "GET").then((response) => {
    setUserinput(response.data);
    //console.log(response.data);
  });
}

// 대시보드 데이터 요청
export function DashboardInput(setDashboardInput = { setDashboardInput }) {
  return call("/userinput/reference", "GET").then((response) => {
    setDashboardInput(response);
    //console.log(response);
  });
}
