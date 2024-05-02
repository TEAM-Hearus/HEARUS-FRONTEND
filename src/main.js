import { createApp } from 'vue';
import App from './App.vue';
import io from 'socket.io-client';

console.log("process.env.VUE_APP_BACKEND_HOST : ", process.env.VUE_APP_BACKEND_HOST)
console.log("process.env.VUE_APP_SOCKETIO_HOST : ", process.env.VUE_APP_SOCKETIO_HOST)
console.log("window.VUE_APP_K8S : ", window.VUE_APP_K8S);

let socketUrl = process.env.NODE_ENV === 'development' 
  ? '${process.env.VUE_APP_SOCKETIO_HOST}' 
  : '${window.VUE_APP_K8S}';
  console.log("socketURL : ", socketUrl)

const socket = io(socketUrl, {
    path: '/socketio',
    // Auto Reconnect
    reconnection: true,
    reconnectionDelay: 5000,
    reconnectionAttempts: Infinity,
    transports: ["websocket"],
    withCredentials: true,
    extraHeaders: {
      'Access-Control-Allow-Origin': '*'
    }
});


const app = createApp(App);
app.provide('socket', socket);
app.config.productionTip = false;

app.mount('#app');