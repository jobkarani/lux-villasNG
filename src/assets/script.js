"use strict";

$(".button-collapse").sideNav();

  const carousel = $('#carousel');
  setInterval(() => {
    carousel.carousel('next');
  }, 30);


// stripe

      id="stripe-script"
      type="text/javascript"
      src="https://checkout.stripe.com/checkout.js"

// var stripe = Stripe('pk_live_51MYkhTGlOiGmIu9YHB7Nk344SvPfbtFTM99wB9CWb7g7FfdDmRP6ajmOT4JtFYdcPvfTXPpQxTf5maFqDBy1uKY900oT4Kgf3K');
//     var elements = stripe.elements();
//     var cardElement = elements.create('card');

//     cardElement.mount('#card-element');

//     $('#payment-form').on('submit', function(event) {
//         event.preventDefault();

//         stripe.createToken(cardElement).then(function(result) {
//             if (result.error) {
//                 // Show error to user
//             } else {
//                 $.ajax({
//                     type: 'POST',
//                     url: '/process-payment/',
//                     data: {
//                         amount: $('#amount').val(),
//                         currency: $('#currency').val(),
//                         token: result.token.id
//                     },
//                     success: function(data) {
//                         // Show success message to user
//                     },
//                     error: function(xhr, status, error) {
//                         // Show error to user
//                     }
//                 });
//             }
//         });
//     });