const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const mercadopago = require("mercadopago");

exports.processPayment = catchAsyncErrors(async(req, res, next) => {


  // Agrega credenciales
  mercadopago.configure({
    access_token:"APP_USR-4767780078352151-021823-ee90f31c21c4d3672c39401f74bdb28d-1076847267",
  });
  
   const paymentData = req.body

  let preference = {
    items: [
      {
        title: paymentData.title,
        unit_price: paymentData.price,
        quantity: paymentData.quantity,
        currency_id: "ARS",
      },
    ],
    back_urls: {
      failure: "http://localhost:3000/order/failed",
      pending: "http://localhost:3000/order/pending",
      success: "http://localhost:3000/order/success",
    },
    auto_return: "approved",
    binary_mode: true,
  };

  //notification_url: "https://serverLevantado/info.com";
     await mercadopago.preferences
     .create(preference)
     .then((response) => res.status(200).send({response}))
     console.log(response.body)
     // En esta instancia deberás asignar el valor dentro de response.body.id por el ID de preferencia solicitado en el siguiente paso
    .catch(function (error) {
      console.log(error);
    });
});
