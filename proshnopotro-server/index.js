const express = require("express");
const app = express();
const cors = require("cors");
const { ObjectId } = require("mongodb");
const SSLCommerzPayment = require("sslcommerz-lts");
require("dotenv").config();
const port = process.env.PORT || 5000;
const store_id = process.env.store_id;
const store_passwd = process.env.store_passwd;
const is_live = false;

app.use(cors());

app.get("/", (req, res) => {
  res.send("hello world");
});

const trans_id = new ObjectId().toString();

app.post("/order", async (req, res) => {
  const order = req.body;
  const data = {
    total_amount: 100,
    currency: "BDT", //order.currency,
    tran_id: trans_id,
    success_url: `http://localhost:5000/success/${trans_id}`,
    fail_url: "http://localhost:3030/fail",
    cancel_url: "http://localhost:3030/cancel",
    ipn_url: "http://localhost:3030/ipn",
    shipping_method: "Courier",
    product_name: "Proshnopotro book by Dev rahaman Sir",
    product_category: "book",
    product_profile: "general",
    cus_name: "Customer Name",
    cus_email: "customer@example.com",
    cus_add1: "Dhaka",
    cus_add2: "Dhaka",
    cus_city: "Dhaka",
    cus_state: "Dhaka",
    cus_postcode: "1000",
    cus_country: "Bangladesh",
    cus_phone: "01711111111",
    cus_fax: "01711111111",
    ship_name: "Customer Name",
    ship_add1: "Dhaka",
    ship_add2: "Dhaka",
    ship_city: "Dhaka",
    ship_state: "Dhaka",
    ship_postcode: 1000,
    ship_country: "Bangladesh",
  };

  const sslcz = new SSLCommerzPayment(store_id, store_passwd, is_live);
  sslcz.init(data).then((apiResponse) => {
    // Redirect the user to payment gateway
    let GatewayPageURL = apiResponse.GatewayPageURL;
    res.send({ url: GatewayPageURL });
    console.log("Redirecting to: ", GatewayPageURL);
  });

  app.post("/success/:transId", async (req, res) => {
    console.log(req.params.transId);
  });
});

app.listen(port, () => {
  console.log("proshnoportro is running");
});
