function makePayment() {
    var options = {
        "key": "YOUR_RAZORPAY_KEY", 
        "amount": 50000, 
        "currency": "INR",
        "name": "Your Store Name",
        "description": "Pant 1 Purchase",
        "image": "your-logo.png",
        "method": {
            "upi": true 
        },
        "handler": function (response) {
            alert("Payment Successful! Payment ID: " + response.razorpay_payment_id);
        },
        "prefill": {
            "email": "customer@example.com",
            "contact": "9999999999"
        },
        "theme": {
            "color": "#3399cc"
        }
    };
    var rzp1 = new Razorpay(options);
    rzp1.open();
}