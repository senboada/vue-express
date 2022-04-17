import 'core-js/stable';
import 'regenerator-runtime/runtime';
import http from 'http';
import app from './app';
import keys from './config/keys';



const httpserver = http.createServer(app).listen(keys.conf.PORT, () => {
    console.log('ready');
  });