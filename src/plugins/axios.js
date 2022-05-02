import axios from "axios";
import Vue from "vue";
/**
 * creación de axios como prototipo para llmarlo con "this.$axios"
 */
Vue.prototype.$axios = axios.create({
  baseURL: "https://api.deezer.com/",
  timeout: 30000,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json"
  }
});
/**
 * cabeceras para la autenticación con token
 */
//Vue.prototype.$axios.defaults.headers.common.Authorization = `Bearer ${localStorage.getItem('id_token')}`
