import http from 'k6/http';
import { check } from 'k6';

export let options = {
  tags: {
    "workflow": "CustomRun",
    "testrun": "my-testrun"
  },
};

export function setup() {
let access_tokens = {};
return access_tokens;
}

// Variable Declarations

let getcallURL = "http://httpbin.nilesh-test.svc.cluster.local:80/get";
  
let getcallParams = {
    headers: {},
    tags: {
      name: "getcall"
    },
  };
  
let getcall2Params = {
    headers: {},
    tags: {
      name: "getcall2"
    },
  };
  
let postcallURL = "http://httpbin.nilesh-test.svc.cluster.local:80/post";
  
let postcallParams = {
    headers: {},
    tags: {
      name: "postcall"
    },
  };

let payload = JSON.parse(open('./random11kb.json'));

export default function (data) {

    let getcallResponse = http.get(getcallURL,getcallParams);
    
    check(getcallResponse, { 'GET Request': (r) => r.status == 200 },);
    if (getcallResponse.status != 200) {
    console.error("Failed getcall");
    }
    
    let getcall2Response = http.get(getcallURL,getcall2Params);
    
    check(getcall2Response, { 'GET Request': (r) => r.status == 200 },);
    if (getcall2Response.status != 200) {
    console.error("Failed getcall2");
    }
    
    let postcallResponse = http.post(postcallURL,payload,postcallParams);
    
    check(postcallResponse, { 'POST Request': (r) => r.status == 200 },);
    if (postcallResponse.status != 200) {
    console.error("Failed postcall");
    }


}