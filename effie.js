
/***
effie解锁订阅

[rewrite_local]
^https://api.effie.(co|pro)/api/v1/user/member url script-response-body https://raw.githubusercontent.com/zhangxuanyu2019/xuanyu/Surge/effie.js

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

/*

var _0xodh='jsjiami.com.v6',_0xodh_=['_0xodh'],_0x546a=[_0xodh,'woxfwphwwrs=','XMOjAcKgwp1UwoBNMyfCkMKzw7gfwofDpQ==','w7xEwr/DrsOv','w6nDhjPDlhY=','LMOJFAnCgA==','w7fCumfCjStPw4nDosKjw71lHTwuW8ObCAXDt0QNw4zDocOREV/DqsKFwphNCcKxaBkow444wofCthXDj8OLwrXChcKNw6ZZViHDqRTDnsK+w6lNw5TDiiAiw7LCk8Krw7IX','woDCuDPCj8OF','wrzCgw81w4c=','w4vDijjDkg==','w5TCtMOLF8On','w51DRBcv','wp8UfVzDvA==','csKRw51Hb8OEZMKZw5PDpRrCh07DqyDCkMKiTGoFf1XCvg==','aDsTBA==','YVnCgQIM','UDQvfFU=','wp/CiCIEw4c=','ZMOjaRLDuxMtwrDDhw==','wogySAEG','fX/ChMO1woM=','wrfCqmDCjsOB','w4rDoUvDinI=','woDDqnHDv8O3wp0=','wrDDqyEPwpM=','ZcOKBkjDng==','w47DuDnDojA=','w51EJ8K+wqw=','wonDvXXDucOgwoDCnMKQ','dcK3JlJV','w5zDgCXDlRzDuH8=','Gwln','wrFyBsOQ','JsOHw6zDoU4=','wohtfgM=','DMKHwpTDjE3Dr3E=','CMOzVg==','f2DCmsOqwpV6JQ==','w6JLwr3DtQ==','U8O4CcKs','WcO5AcKwwoZRwoo=','SsO/B2TDvg==','KibDng8GYGk=','GcKLEx3DvVwtWQg=','fA3Ci3JJwqvDig==','wrJhFcOdKw==','w4hONsKiwoA=','w6bDlMOgw48=','w64JwopwW0d8','esKRwrjCoR08dMKpwo/DvQ==','wotIwo1awrB8w4zDmwl1Gw==','bBbCl2hIwqDDhsKvcQ==','DwtQw6c3','w7rDmH3DrUU=','ZsO+OU/Dnw==','w7vDtwrDtjA=','w6XCu2VXUg==','w4DDrDQKw7I=','ScOGOEzDoA==','w7NfwqHDuMOvwqTDmsKewrskw67DuXTCgMKiPA==','FjlnBsOtwoHDozdAF8KXwoDCnsOpwpAwwrIcwr7DtsO3G1TDgWZ4DFt2BQXCoz7CqH1CHMK5fsOzfCE7HMKowo7CiBbDh8OfVH3Ck0rDmMKEwoDCr8OeWBZwworDiQ==','w5bDgSLDkg==','WcO+DsKqwoc=','HB5Fw7bDgQ==','wqV+DcOmHQ==','RcOoLXjDpA==','TMOuGMK6wq4=','w7NEciI9','w6DDmj8Jw6k=','DcO1Rztn','w5ZBCcKZwoc=','RXnCvMO/wqk=','woXCilzCtcOd','wrsbTQAo','B8OxSMOqw7Q=','w7nDmiXDhQfDvXXDmlDDuDZbYMKZw6nDmsOKwrsVw7MoVCk=','RsK1GcKb','QcKlJ1x3','wp7CtDPChMOF','wp95O8OXOA==','E8OHw6rDklo=','DcK6w5zCncOR','FcKAKSnDtw==','ZEtUGsKq','BsObw7Arwq4=','CsONw6M0wo4=','wovDn3zDisO1','w6fClmpsRg==','EsO5w6QZwpk=','NyhYw6jDtg==','w43DqjjDoSE=','RWXCu8Owwow=','woFSJ8OdFw==','eHPCsDg/','cyzChHNx','w6JFwqHDt8ON','KHFdQ8KU','w7zDlsOUw45s','woVqHcOQJw==','wol6wpZxwro=','wpDCg3cISsOzLMOKw4hVVgFqTHQWwpfDgwHClzjCtkE=','DhvDuwYw','w63DvnnDoQ==','RkNWEsKq','aCUkdGM=','w55OwovDosOo','w5Qtwop4Wg==','w6bDicOjw4dk','IMO5w7APwqU


*/
