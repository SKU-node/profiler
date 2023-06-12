/**
 * @param {*} input [ userId , id ]
 * @param {*} exp hours
 */
function setCookie(input, exp) {
  const date = new Date();
  date.setTime(date.getTime() + exp * 60 * 60 * 1000);
  const value = input.join("/");
  document.cookie = `PF=${value};expires=${date.toUTCString()};path=/`;
}

function getCookie() {
  const value = document.cookie.match("(^|;) ?PF=([^;]*)(;|$)");
  return value ? value[2].split("/") : null;
}

function expCookie() {
  const date = new Date();
  date.setTime(date.getTime());
  document.cookie = `PF=";expires=${date.toUTCString()};path=/`;
}

export { setCookie, getCookie, expCookie };
