[rewrite_local]


^https:\/\/api\.busuu\.com\/users\/me* url script-response-body https://raw.githubusercontent.com/zhangxuanyu2019/xuanyu/main/busuu.js



[mitm] 

hostname = api.busuu.com



var obj = JSON.parse($response.body);
obj.data.is_premium= true;
obj.data.access.tier= "plus";
$done({body: JSON.stringify(obj)});
