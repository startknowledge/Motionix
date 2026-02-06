/*function buyTemplate(product){
 var options = {
  "key": "rzp_live_SA4cGOsrHNdxX3",
  "amount": 19900, 
  "currency": "INR",
  "name": "Motionix",
  "description": "Animation Template",
  "handler": function (response){

    // payment success
    window.location =
      "download.html?product=" + product +
      "&payment=" + response.razorpay_payment_id;
  }
 };*/
 function buyTemplate(product, price){
var options = {
"key": "rzp_live_SA4cGOsrHNdxX3",
"amount": price * 100,
"currency": "INR",
"name": "Motionix",
"description": "Premium Animation Template",
"image": "https://yourusername.github.io/motionix/logo.png",


"handler": function (response){
window.location = `download.html?product=${product}&pid=${response.razorpay_payment_id}`;
}
};
 var rzp = new Razorpay(options);
 rzp.open();
}
