/*

[rewrite_local]

^https:\/\/api\.revenuecat\.com\/.+\/(receipts$|subscribers\/(\$RCAnonymousID%)?(\w)*$) url script-response-body https://raw.githubusercontent.com/89996462/Quantumult-X/main/ycdz/SparkMail.js

[mitm]

hostname=api.revenuecat.com

*/





var obj = JSON.parse($response.body);

obj = {
  "request_date_ms" : 1662599120248,
  "request_date" : "2022-09-08T01:05:20Z",
  "subscriber" : {
    "non_subscriptions" : {

    },
    "first_seen" : "2022-09-08T01:04:03Z",
    "original_application_version" : "8",
    "other_purchases" : {

    },
    "management_url" : "https://apps.apple.com/account/subscriptions",
    "subscriptions" : {
      "com.py996.premium.yearly" : {
        "is_sandbox" : false,
        "ownership_type" : "PURCHASED",
        "billing_issues_detected_at" : null,
        "period_type" : "normal",
        "expires_date" : "2050-12-18T01:04:17Z",
        "grace_period_expires_date" : null,
        "unsubscribe_detected_at" : null,
        "original_purchase_date" : "2022-09-08T01:04:18Z",
        "purchase_date" : "2022-09-08T01:04:17Z",
        "store" : "app_store"
      }
    },
    "entitlements" : {
      "premium" : {
        "grace_period_expires_date" : null,
        "purchase_date" : "2022-09-08T01:04:17Z",
        "product_identifier" : "com.py996.premium.yearly",
        "expires_date" : "2050-12-22T01:04:17Z"
      }
    },
    "original_purchase_date" : "2022-09-07T13:05:43Z",
    "original_app_user_id" : "$RCAnonymousID:py996",
    "last_seen" : "2022-09-08T01:04:03Z"
  }
}

$done({body: JSON.stringify(obj)});
