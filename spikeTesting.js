import http from 'k6/http';
import { check, sleep } from 'k6';
import { TESTING_URL } from './config.js'

export const options = {
  stages: [
    { duration: '10s', target: 500 },
    { duration: '20s', target: 500 },
    { duration: '10s', target: 0 },
  ],
};

export default function () {
  var url = TESTING_URL;
  const res = http.get(url);
  check(res, { 'status was 200': (r) => r.status == 200 });
  sleep(1);
}