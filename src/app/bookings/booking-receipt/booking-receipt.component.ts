import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-booking-receipt',
  templateUrl: './booking-receipt.component.html',
  styleUrls: ['./booking-receipt.component.css']
})
export class BookingReceiptComponent implements OnInit{

  paymentHandler: any = null;

  ngOnInit(){
    this.invokeStripe();
  }

  makepayment(){
    const paymentHandler = (<any>window).StripeCheckout.configure({
      key: 'pk_live_51MYkhTGlOiGmIu9YHB7Nk344SvPfbtFTM99wB9CWb7g7FfdDmRP6ajmOT4JtFYdcPvfTXPpQxTf5maFqDBy1uKY900oT4Kgf3K',

      locale: 'auto',
      token: function(stripeToken:any){
        console.log(stripeToken.card);
        alert('Stripe Token Generated');
      }
    });

    paymentHandler.open({
      name: 'Hakuna Matata Tours',
      description: 'Luxury Vacations',
    })
  }

  invokeStripe(){
    if(!window.document.getElementById('stripe-script')){
      const script = window.document.createElement('script');
      script.id = 'stripe-script';
      script.type = 'text/javascript';
      script.src = "https://checkout.stripe.com/checkout.js";
      window.document.body.appendChild(script);
    }
  }
}
