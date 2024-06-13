import http from 'k6/http';
import { check } from 'k6';

export let options = {
  tags: {
    workflow: "CustomRun",
    testrun: "testrun-test"
  },
};

export function setup() {

let access_tokens = {};
return access_tokens;
}

// Variable Declarations

let testURL = "http://httpbin.nilesh-test.svc.cluster.local:80/get";
export default function () {

    let testResponse = http.get(testURL);
    
    check(testResponse, { 'GET Request': (r) => r.status == 200 },);
    if (testResponse.status != 200) {
    console.error("Failed test");
    }

}