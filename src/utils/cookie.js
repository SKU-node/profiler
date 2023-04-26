function setCookie(value, exp) {
  const date = new Date();
  date.setTime(date.getTime() + exp * 60 * 60 * 1000);
  document.cookie = `PF=${value};expires=${date.toUTCString()};path=/`;
}

function getCookie() {
  const value = document.cookie.match("(^|;) ?" + "PF" + "=([^;]*)(;|$)");
  return value ? value[2] : null;
}

export { setCookie, getCookie };
