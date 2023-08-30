import axios from "axios";
import Cookies from "js-cookie";

const ENDPOINT_PATH = "http://192.168.0.105/api/";

export default {

  register(name, lastname, email, password) {
    const user = { name, lastname, email, password };
    return axios.post(ENDPOINT_PATH + "register", user);
  },

  login(email, password) {
    const user = { email, password };
    return axios.post(ENDPOINT_PATH + "login", user);
  },

  setUser(userLogged) {
    Cookies.set("userLogged", userLogged);
  },

  getUser() {
    return Cookies.get("userLogged");
  },

  isLoggedIn(){
    return !!Cookies.get("userLogged");
  },

  logout() {
    return Cookies.remove('userLogged');
  }

};