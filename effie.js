
/***
effie解锁订阅

[rewrite_local]
^https://api.effie.(co|pro)/api/v1/user/member url script-response-body https://raw.githubusercontent.com/Alex0510/Eric/master/surge/Script/effie.js

[mitm] 
hostname = *.effie.*
***/


var obj = JSON.parse($response.body);

obj = {
   "msg" : "success",
   "data" : {
     "status" : 1,
     "trial" : 0,
     "end_at" : "6365485410",
     "day" : 0
   },
   "code" : 200
 }
 
$done({body: JSON.stringify(obj)});