import React, { useEffect } from 'react';
import config from '../../../../infrastructure/config';

const WompiCheckoutForm: React.FC <{currency: string, price: any, referenceCode: string, signature: string, lang: string}> = ({currency, price, referenceCode, signature, lang}) => {
    const totalPrice = price ? Math.trunc(price)*100 : Math.trunc(price)*100
    const redirectUrl = lang === 'en' ? config.DOMAIN_URL+'/en/payment/confirmation' : config.DOMAIN_URL+'/payment/confirmation'
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://checkout.wompi.co/widget.js';
    script.dataset.render = 'button';
    script.dataset.publicKey = process.env.NEXT_PUBLIC_WOMPI_PUBLIC_KEY as string;
    script.dataset.currency = 'COP';
    script.dataset.amountInCents = totalPrice.toString();
    script.dataset.reference = referenceCode;
    script.dataset.signatureIntegrity = signature;
    script.dataset.redirectUrl = redirectUrl;

    // document.body.appendChild(script);
    document.getElementById('wompi-button-container')?.appendChild(script);

    return () => {
        document.getElementById('wompi-button-container')?.removeChild(script);
      };
  }, [totalPrice, redirectUrl]);

  return <form />;
};

export default WompiCheckoutForm;
