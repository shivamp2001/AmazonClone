const Razorpay =require("razorpay")

const instance = new Razorpay({
    key_id: 'rzp_test_WMbjrZqD73hUzs',
    key_secret: 'TLB1N4qgJ3cIXNgzau0C4sCN',
  });


exports.Checkout =async (req, res) => {
  try {
    // console.log(req.body.amount);
    const options = {
        amount: Number(req.body.amount*100),  // amount in the smallest currency unit
        currency: "INR",
      };
     const order=await instance.orders.create(options);
    //  console.log(order);
   return res.status(200).json({order:order})
  } catch (err) {

  }
};


exports.PaymentVerification =async (req, res) => {
    try {

      // console.log(req.body);
      res.redirect("http://localhost:3000/paymentsuccess")
    } catch (err) {
  
    }
  };
