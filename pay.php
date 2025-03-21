<?php
$merchant_id = "YOUR_MERCHANT_ID";
$merchant_key = "YOUR_MERCHANT_KEY";
$website = "DEFAULT"; // 'WEBSTAGING' if using test mode
$callback_url = "https://yourwebsite.com/payment-success.php";
$order_id = "ORD" . rand(10000,99999);
$txn_amount = "500"; // Change according to product price

$paytmParams = array(
    "MID" => $merchant_id,
    "WEBSITE" => $website,
    "ORDER_ID" => $order_id,
    "CUST_ID" => "CUST123",
    "TXN_AMOUNT" => $txn_amount,
    "CALLBACK_URL" => $callback_url,
    "CHANNEL_ID" => "WEB",
    "INDUSTRY_TYPE_ID" => "Retail"
);

$checksum = getChecksumFromArray($paytmParams, $merchant_key);
$paytmParams["CHECKSUMHASH"] = $checksum;
?>

<form method="post" action="https://securegw.paytm.in/order/process">
    <?php foreach ($paytmParams as $key => $value) { ?>
        <input type="hidden" name="<?php echo $key; ?>" value="<?php echo $value; ?>">
    <?php } ?>
    <button type="submit" style="background-color: #ff9800; color: white; padding: 10px 20px; font-size: 18px; border: none; cursor: pointer; border-radius: 5px;">
        Donate Now
    </button>
</form>
