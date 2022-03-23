import http from 'k6/http';
import { check, sleep } from 'k6';
import { TESTING_URL } from './config.js'

export const options = {
  stages: [
    { duration: '1s', target: 1 },
    { duration: '30s', target: 1 },
  ],
};

export default function () {
  var url = TESTING_URL;
  const res = http.get(url);
  check(res, { 'status was 200': (r) => r.status == 200 });
  sleep(1);
}