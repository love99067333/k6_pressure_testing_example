import http from 'k6/http';
import { check, sleep } from 'k6';
import { TESTING_URL } from './config.js'

export const options = {
  stages: [
    { duration: '1m', target: 100 },
    { duration: '1h', target: 100 },
    { duration: '1m', target: 0 },
  ],
};

export default function () {
  var url = TESTING_URL;
  const res = http.get(url);
  check(res, { 'status was 200': (r) => r.status == 200 });
  sleep(1);
}