function IsLogged() {
  const tokenInfo = localStorage.getItem("token");

  if (!tokenInfo) {
    return false;
  }
  return true;
}

export default IsLogged;
