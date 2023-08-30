import axios from "axios";
import auth from "@/logic/auth"; 

const ENDPOINT_PATH = "http://192.168.0.105/api/products/";

export default {

  getProducts() {
    const token = auth.getUser();
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    return axios.get(ENDPOINT_PATH);
    
  },



};