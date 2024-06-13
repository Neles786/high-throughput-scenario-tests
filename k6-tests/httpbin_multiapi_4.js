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
  
let postcallURL = "http://httpbin.nilesh-test.svc.cluster.local:80/post";
let payload = JSON.parse(open('./random1kb.json'));
let payload2 = JSON.parse(open('./random11kb.json'));
  
let postcallParams = {
    headers: {},
    tags: {
    name: "postcall"
    },
};
  
let postcall2Params = {
    headers: {},
    tags: {
      name: "postcall2"
    },
  };

let postcall3Params = {
    headers: {},
    tags: {
    name: "postcall3"
    },
};

export default function (data) {
    
    let postcallResponse = http.post(postcallURL,payload,postcallParams);
    
    check(postcallResponse, { 'POST Request': (r) => r.status == 200 },);
    if (postcallResponse.status != 200) {
    console.error("Failed postcall");
    }

    let postcall2Response = http.post(postcallURL,payload,postcall2Params);
    
    check(postcall2Response, { 'POST Request': (r) => r.status == 200 },);
    if (postcall2Response.status != 200) {
    console.error("Failed postcall");
    }
    
    let postcall3Response = http.post(postcallURL,payload2,postcall3Params);
    
    check(postcall3Response, { 'POST Request': (r) => r.status == 200 },);
    if (postcall3Response.status != 200) {
    console.error("Failed postcall");
    }


}