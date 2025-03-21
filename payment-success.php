<?php
if ($_POST["STATUS"] == "TXN_SUCCESS") {
    echo "<h1>✅ Payment Successful! Thank you for your donation.</h1>";
} else {
    echo "<h1>❌ Payment Failed! Please try again.</h1>";
}
?>
