

import Razorpay from 'razorpay'


var instance = new Razorpay({
  key_id: 'rzp_live_vltjM3WQNYwXDN',
  key_secret: 'tC7eoi54LSFNojKPTq0XIDZ6',
});


var options = {
  amount: 1000,  // amount in the smallest currency unit
  currency: "INR",
  receipt: "order_rcptid_11"
};


const createPayment = async () => {
  const response = await instance.orders.create(options);
  console.log(response)
  
}

createPayment();