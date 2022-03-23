import http from 'k6/http';
import { check, sleep } from 'k6';
import { TESTING_URL } from './config.js'

export const options = {
  stages: [
    { duration: '10m', target: 100 },
    { duration: '10m', target: 100 },
    { duration: '10m', target: 200 },
    { duration: '10m', target: 200 },
    { duration: '10m', target: 300 },
    { duration: '10m', target: 300 },
    { duration: '10m', target: 400 },
    { duration: '10m', target: 400 },
    { duration: '10m', target: 500 },
    { duration: '10m', target: 500 },
    { duration: '10m', target: 0 },
  ],
};

export default function () {
  var url = TESTING_URL;
  const res = http.get(url);
  check(res, { 'status was 200': (r) => r.status == 200 });
  sleep(1);
}