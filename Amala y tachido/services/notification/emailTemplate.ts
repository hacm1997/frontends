import { formatNumber } from '../functionsExport';

interface EmailBody {
  items: Items[];
  payer: Payer;
  transaction_details: number;
  order_info: string;
}

interface Items {
  description: string;
  title: string;
}

interface Payer {
  email: string;
  first_name: string | null;
  last_name: string | null;
  phone: {
    number: number | null;
  };
  identification: {
    number: string;
  };
  address: string;
}

export const EmailTemplate = (data: EmailBody) => {
  const { items, order_info, payer, transaction_details } = data
  const description = items[0].description;
  const substr = description.split('-');
  const details = substr[1].trim().split(' ');
  const subDetails = substr[2]?.trim().split(' ');
  const name = details[0].replace('Nombre:', '');
  const nameValue = payer.first_name || name
  const contact = payer.phone.number || details[6]
  const barrio = details[5] || `${subDetails[0]} - ${subDetails[3]} ${subDetails[4]}`

  return `
  <html>
  <head> 
    <style>
      body {
        font-family: sans-serif;
        color: black;
      }
      
      .wrapper {
        border: 1px grey solid;
      }
      
      .title {
        background-color: #F9D761;
        color: black;
        padding: 1rem 4rem;
        text-align: center;
        margin: 0;
        font-size: 18px;
      }
      
      .container {
        font-size: 16px;
        border-top: solid grey 1px;
        border-bottom: solid grey 1px;
        padding: 1.5rem 2rem;
      }

      li {
        padding-bottom: 4px;
      }
    </style>
  </head>
  <body>
  <div class="wrapper">
  <h3 class="title">Estimado equipo de Amala y Ta'chido</h3>
  <div class="container">
  <span>Es un placer informarles que hemos recibido un nuevo pedido a través de nuestro sitio e-commerce. A continuación, detallamos la información:</span>

  <ul>
  <li>Nombre del Cliente: ${nameValue} </li>
  <li>Cédula: ${payer.identification.number}</li>
  <li>Teléfono/Celular: ${contact}</li>
  <li>Correo Electrónico: ${payer.email}</li>
  </ul>

  <strong>Detalles del pedido:</strong>
  <ul>
  <li>Sede: ${details[3]}</li>
  <li>Barrio: ${barrio}</li>
  <li>Dirección de entrega: ${details[2]}</li>
  <li>Productos: ${items[0].title}</li>
  <li>Descripción: ${substr[0]}</li>
  <li>Comprobante de pago: ${order_info}, por favor, verifique su cuenta de MercadoPago.</li>
  </ul>

  <strong>Valor total</strong> ${formatNumber(transaction_details)}

  <p>Si tienen alguna pregunta o requerimiento adicional sobre este pedido, no duden en ponerse en contacto con el cliente utilizando la información proporcionada.</p></body>

  <p class="title">
  Gracias por su dedicación y servicio al cliente. ¡Estamos seguros de que el cliente disfrutará de la deliciosa experiencia de Amala y Ta'chido en la comodidad de su hogar!
  </p>
  </div>
  </div>
  </body>
  </html>
  `;
};
