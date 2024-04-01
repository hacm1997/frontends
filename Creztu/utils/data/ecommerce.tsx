export const EcommerceData = {
  id: 'sitioWeb',
  title: '',
  videoWeb: '/videos/Slider-ecommerce.mp4',
  videoMobile: '/videos/slider-ecomerce-movil.mp4',
  subtitle: '',
  bannerButton: '',
  buttonOffert: '',
  buttonBuy: '',
  buttonIcon: '',
  submenu: ['PRODUCTOS', 'GALERIAS', 'STOCK', 'E-COMMERCE', 'CLIENTES', 'FACTURAS'],
  gallery: [
    {
      title: 'Velocidad que empodera tu tienda online',
      video: '/videos/Holograma.mp4',
      videoMovil: '/videos/Holograma-Vista-Movil.mp4',
      text: (
        <p className="text-lg w-[280px] md:w-full text-black md:text-white md:pl-7 md:text-3xl">Cuenta con la rapidez de miles y miles <strong className="text-xl md:text-3xl">servidores</strong> de <strong className="text-xl md:text-3xl">amazon</strong> ¡Potencia y rapidez garantizadas!</p>
      )
    },
    {
      title: 'NO HAY FALLOS',
      video: '/videos/oficina.mp4',
      videoMovil: '/videos/oficina-Vista-Movil.mp4',
      text: (
        <p className="text-lg w-[280px] md:w-full text-black md:text-white md:pl-7 md:text-3xl"><strong className="text-xl md:text-3xl">Creztu</strong> tiene el poder de resistir incluso los días más intensos, como el explosivo Día <strong className="text-xl md:text-3xl">sin IVA</strong> y el frenesí del <strong className="text-xl md:text-3xl">Black Friday.</strong></p>
      )
    },
    {
      title: 'Elasticidad para crecer sin límites',
      video: '/videos/Creztu.mp4',
      videoMovil: '/videos/Creztu-Vista-Movil.mp4',
      text: (
        <p className='md:pl-7 text-xl md:text-3xl text-black md:text-white' >Tu sitio web se ajusta automáticamente y <strong className="text-xl md:text-3xl">sin esfuerzo.</strong> Adaptando su capacidad según el número de visitantes.<br />Ofreciendo tener la misma <strong className="text-xl md:text-3xl">experiencia y tecnología </strong>a la de <br className="block md:hidden"/><strong className="text-xl md:text-3xl">Amazon</strong></p>
      )
    }
  ],
  turboBoost: {
    title: '¿Listo para el turbo boost en tus ventas?',
    subtitle: (
      <p className="not-italic font-normal p-5">
        Nuestro <span className="text-[#EF5A0F] font-bold">e-commerce</span> es la máquina más veloz y con el mejor procesador en el juego, dándote la <span className="text-[#EF5A0F] font-bold">ventaja </span> 
        que necesitas. <span className="text-black font-bold">¡vende más, vende más rapido!</span>
      </p>
    ),
    image: '/img/ecommerce/online-fashion-shopping-collage 1.png',
    button: 'Comienza ya'
  },
  innovation: {
    image: (
      <img 
        src="/img/ecommerce/innovation-boy.png" 
        alt="men"
        className="absolute hidden 1xl:block"
        style={{marginTop: '-90px', right: '-174px'}}
        width={400}
        height={400}
      />
    ),
  },
  serviceInfo: {
    title: ' E-commerce',
    subtitle: (
      <p
        className='text-center text-orange-400 font-semibold text-xl sm:text-3xl'
      >
      Icono de estilo y funcionalidad
      </p>
    ),
    image: '/img/ecommerce/ecommerce.webp',
    imageMovil: '/img/ecommerce/ecommerceMovile.webp',
    button: 'Sumérgete en la experiencia y la conversión'
  },
  informativeModal: {
    title1: 'Experiencia',
    description1: (
      <p 
        className="my-4 text-gray-600 text-lg leading-relaxed sm:w-[50%]"
      >
              Más que una tienda, una <span className='text-regal-orange font-bold'>EXPERIENCIA</span> visual. 
              Llegó el <span className='text-regal-orange font-bold'>pináculo</span> del diseño de e-commerce
              en <span className='text-regal-orange font-bold'>Latinoamérica.</span>
      </p>
    ),
    icon1: '/img/sitioWeb/carrito.png',
    image1: '/img/sitioWeb/first-modal.png',
    image1Movil: '/img/sitioWeb/modal-1Movile.webp',
    title2: 'Conversión',
    description2: (
      <p 
        className="my-4 text-gray-600 text-lg leading-relaxed sm:w-[50%]"
      >
              Cada detalle, cada gráfico, es una <span className='text-regal-orange font-bold'>obra maestra</span> destinada a convertir visitantes en <span className='text-regal-orange font-bold'>clientes leales.</span> 
      </p>
    ),
    icon2: '/img/sitioWeb/box.png',
    image2: '/img/sitioWeb/second-modal.png',
    image2Movil: '/img/sitioWeb/modal-2Movile.webp',
  },
  plan: {
    text1: '¡Eleva tu Inmueble!',
    text2: 'Plan plataforma inmueble Full:',
    priceMonth: '499.000',
    priceYear: '4.999.900',
    moreInfo: ''
  },
  technologies: {
    principalTitle: 'La tecnologia que solo las grandes marcas tienen',
    image: '/img/ecommerce/grandes-marcas.png',
    title1: 'Sumérgete en la tecnología',
    description1: (
      <p className='text-xl'>
        redefine el <span className='text-black font-bold'>E-commerce.</span> Donde la <span className='text-black font-bold'>innovación</span> y el comercio convergen para crear una <span className='text-black font-bold'>experiencia</span> sin igual.
      </p>
    ),
    title2: 'Más que vender, haz historia.',
    description2: (
      <p
        className='text-xl'
      >
            Con <span className='text-black font-bold'>creztu</span>, emprende 
            tu <span className='text-black font-bold'>presente digital</span> y 
            lleva tu <span className='text-black font-bold'>E-commerce</span> a nuevas alturas.
      </p>
    )
  },
  platform: {
    title: 'Unete a los grandes del comercio electrónico',
    image: '/img/ecommerce/comercio.png'
  },
  offerts: {
    title: 'Navega hacia una inversión rentable',
    plans: [
      {
        id: '1',
        name: 'PLAN E-COMMERCE FULL',
        price: '4999900',
        priceYear: '4999900',
        priceMonth:'499000',
        features:[
        ]
      },
      {
        id: '2',
        name: 'PLAN ALTO IMPACTO',
        price: '2999900',
        priceYear: '2999900',
        priceMonth:'299000',
        features:[
        ]
      },
      {
        id: '3',
        name: 'PLAN ALTO DESPEGUE',
        price: '1999900',
        priceYear: '1999900',
        priceMonth:'199000',
        features:[
        ]
      }
    ]
  },
  simpleCard : {
    title: '¡Eleva tu negocio!',
    subtitle: 'Plan E-commerce full:',
    text: (
      <div>
        <p className="text-2xl ssm:text-3xl font-bold">$ 4.99.000 x mes</p>
        <p className="text-lg font-normal">o 4.999.900 Anual</p>
        <p className="font-medium text-lg">la diversión que asegura tu Éxito. <strong className="font-bold">¡Actua ahora</strong> y garantiza tu triunfo empresarial!</p>
      </div>
    ),
    image: '/img/ecommerce/men-ecommerce.png',
    icon: '/img/ecommerce/icon-ecommerce.png'
  }
}
  