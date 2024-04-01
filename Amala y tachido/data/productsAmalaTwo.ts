const Productos = [
  {
    id: 28,
    slug: 'nico-pizza',
    tipo: 'especiales',
    img: '/images/amala/productos/nico_pizza.webp',
    nombre: 'Nico Pizza',
    precio: 41900,
    descripcion: 'Queso mozzarella y salsa napolitana, pollo marinado, tocineta, maíz, butifarra, papita ripio y salsa de la casa.',
    size: [
      {
        name: 'Mediana (8 porciones)',
        price: 41900,
      },
      {
        name: 'Grande (10 porciones)',
        price: 59900,
      }
    ],
    ingredientes: [],
    adicionales: [],
  },
  {
    id: 29,
    slug: 'especial-mexicana',
    tipo: 'especiales',
    img: '/images/amala/productos/pizza_especial_mexicana.webp',
    nombre: 'Pizza Especial Mexicana',
    precio: 41900,
    descripcion: 'Queso mozzarella, salsa napolitana, carne molida, pimentón, chorizo, jalapeño, nachos crocantes y salsa de aguacate.',
    size: [
      {
        name: 'Mediana (8 porciones)',
        price: 37900,
      },
      {
        name: 'Grande (10 porciones)',
        price: 52900,
      }
    ],
    ingredientes: [],
    adicionales: [],
  },
  {
    id: 30,
    slug: 'especial-cuatro-carnes',
    tipo: 'especiales',
    img: '/images/amala/productos/pizza_cuatro_carnes.webp',
    nombre: 'Pizza Cuatro Carnes',
    precio: 43900,
    descripcion: 'Queso mozzarella y salsa napolitana, jamón, pepperoni, chorizo y butifarra.',
    size: [
      {
        name: 'Mediana (8 porciones)',
        price: 43900,
      },
      {
        name: 'Grande (10 porciones)',
        price: 62900,
      }
    ],
    ingredientes: [],
    adicionales: [],
  },
  {
    id: 31,
    slug: 'especial-carnivora',
    tipo: 'especiales',
    img: '/images/amala/productos/pizza_carnivora.webp',
    nombre: 'Pizza Carnivora',
    precio: 39900,
    descripcion: 'Queso mozzarella, salsa napolitana, carne molida, pollo marinado, cerdo marinado.',
    size: [
      {
        name: 'Mediana (8 porciones)',
        price: 39900,
      },
      {
        name: 'Grande (10 porciones)',
        price: 58900,
      }
    ],
    ingredientes: [],
    adicionales: [],
  },
  {
    id: 32,
    slug: 'especial-porky',
    tipo: 'especiales',
    img: '/images/amala/productos/pizza_porky.webp',
    nombre: 'Pizza Porky',
    precio: 35900,
    descripcion: 'Queso mozzarella, salsa napolitana, cebolla caramelizada y tocineta.',
    size: [
      {
        name: 'Mediana (8 porciones)',
        price: 35900,
      },
      {
        name: 'Grande (10 porciones)',
        price: 50900,
      }
    ],
    ingredientes: [],
    adicionales: [],
  },
  {
    id: 33,
    slug: 'especial-pastor',
    tipo: 'especiales',
    img: '/images/amala/productos/al_pastor.webp',
    nombre: 'Pizza Al Pastor',
    precio: 33900,
    descripcion: 'Queso mozzarella, salsa napolitana, cerdo marinado, piña en lonja, cilantro y cebolla roja en juliana.',
    size: [
      {
        name: 'Mediana (8 porciones)',
        price: 33900,
      },
      {
        name: 'Grande (10 porciones)',
        price: 47900,
      }
    ],
    ingredientes: [],
    adicionales: [],
  },
  {
    id: 34,
    slug: 'especial-vegetariana',
    tipo: 'especiales',
    img: '/images/amala/productos/pizza_vegetariana.webp',
    nombre: 'Pizza Vegetariana',
    precio: 36900,
    descripcion: 'Queso mozzarella, salsa napolitana, champiñones laminados, pimentón, aceitunas negras, maíz tierno y tomate.',
    size: [
      {
        name: 'Mediana (8 porciones)',
        price: 36900,
      },
      {
        name: 'Grande (10 porciones)',
        price: 52900,
      }
    ],
    ingredientes: [],
    adicionales: [],
  },
  {
    id: 35,
    slug: 'tradicional-margarita',
    tipo: 'tradicionales',
    img: '/images/amala/productos/pizza_margarita.webp',
    nombre: 'Pizza Margarita',
    precio: 23900,
    descripcion: 'Queso mozzarella y salsa napolitana.',
    size: [
      {
        name: 'Mediana (8 porciones)',
        price: 23900,
      },
      {
        name: 'Grande (10 porciones)',
        price: 32900,
      }
    ],
    ingredientes: [],
    adicionales: [],
  },
  {
    id: 36,
    slug: 'hawiana-amala',
    tipo: 'tradicionales',
    img: '/images/amala/productos/pizza_hawaiana.webp',
    nombre: 'Pizza Hawaiana Amala',
    precio: 33900,
    descripcion: 'Queso mozzarella, salsa napolitana, Jamón y piña caramelizada con un toque de achiote.',
    size: [
      {
        name: 'Mediana (8 porciones)',
        price: 33900,
      },
      {
        name: 'Grande (10 porciones)',
        price: 47900,
      }
    ],
    ingredientes: [],
    adicionales: [],
  },
  {
    id: 37,
    slug: 'pollo-champiñones',
    tipo: 'tradicionales',
    img: '/images/amala/productos/pizza_pollo_champinones.webp',
    nombre: 'Pizza con Pollo y Champiñones',
    precio: 35900,
    descripcion: 'Queso mozzarella y salsa napolitana, pollo marinado, champiñones laminados.',
    size: [
      {
        name: 'Mediana (8 porciones)',
        price: 35900,
      },
      {
        name: 'Grande (10 porciones)',
        price: 49900,
      }
    ],
    ingredientes: [],
    adicionales: [],
  },
  {
    id: 38,
    slug: 'jamon-queso',
    tipo: 'tradicionales',
    img: '/images/amala/productos/pizza_jamon_queso.webp',
    nombre: 'Pizza con Jamón y Queso',
    precio: 30900,
    descripcion: 'Queso mozzarella, salsa napolitana y jamón.',
    size: [
      {
        name: 'Mediana (8 porciones)',
        price: 30900,
      },
      {
        name: 'Grande (10 porciones)',
        price: 42900,
      }
    ],
    ingredientes: [],
    adicionales: [],
  },
  {
    id: 39,
    slug: 'beggi',
    tipo: 'tradicionales',
    img: '/images/amala/productos/pizza_beggi.webp',
    nombre: 'Pizza Beggi',
    precio: 27900,
    descripcion: 'Queso mozzarella, salsa napolitana y pico de gallo.',
    size: [
      {
        name: 'Mediana (8 porciones)',
        price: 27900,
      },
      {
        name: 'Grande (10 porciones)',
        price: 37900,
      }
    ],
    ingredientes: [],
    adicionales: [],
  },
  {
    id: 40,
    slug: 'pepperoni',
    tipo: 'tradicionales',
    img: '/images/amala/productos/pizza_pepperoni.webp',
    nombre: 'Pizza con Pepperoni',
    precio: 33900,
    descripcion: 'Queso mozzarella, salsa napolitana y pepperoni.',
    size: [
      {
        name: 'Mediana (8 porciones)',
        price: 33900,
      },
      {
        name: 'Grande (10 porciones)',
        price: 47900,
      }
    ],
    ingredientes: [],
    adicionales: [],
  },
  {
    id: 41,
    slug: 'maiz-tocineta',
    tipo: 'tradicionales',
    img: '/images/amala/productos/pizza_maiz_tocineta.webp',
    nombre: 'Pizza con Maiz y Tocineta',
    precio: 35900,
    descripcion: 'Queso mozzarella, salsa napolitana, maíz tierno y tocineta.',
    size: [
      {
        name: 'Mediana (8 porciones)',
        price: 35900,
      },
      {
        name: 'Grande (10 porciones)',
        price: 49900,
      }
    ],
    ingredientes: [],
    adicionales: [],
  },
  {
    id: 42,
    'slug': 'agua',
    'tipo': 'bebidas',
    'img': '/images/tachido/productos/agua-personal.webp',
    'nombre': 'Agua',
    'precio': 3500,
    'descripcion': '',
    'proteinas': [],
    'ingredientes': [],
    'adicionales': []
  },
  {
    id: 43,
    'slug': 'gaseosa-personal',
    'tipo': 'bebidas',
    'img': '/images/tachido/productos/gaseosa-personal.webp',
    'nombre': 'Gaseosa personal',
    'precio': 5000,
    'descripcion': '',
    'proteinas': [],
    'ingredientes': [],
    'adicionales': []
  },
  {
    id: 44,
    'slug': 'gaseosa-litro-medio',
    'tipo': 'bebidas',
    'img': '/images/tachido/productos/gaseosa-litro.webp',
    'nombre': 'Gaseosa 1.5',
    'precio': 10000,
    'descripcion': '',
    'proteinas': [],
    'ingredientes': [],
    'adicionales': []
  },
  {
    id: 45,
    'slug': 'cerveza-nacional',
    'tipo': 'bebidas',
    'img': '/images/tachido/productos/cerveza-nacional.webp',
    'nombre': 'Cerveza nacional',
    'precio': 6500,
    'descripcion': '',
    'proteinas': [],
    'ingredientes': [],
    'adicionales': []
  },
  {
    id: 46,
    'slug': 'corona',
    'tipo': 'bebidas',
    'img': '/images/tachido/productos/bebida-corona.webp',
    'nombre': 'Cerveza corona',
    'precio': 10000,
    'descripcion': '',
    'proteinas': [],
    'ingredientes': [],
    'adicionales': []
  },
  {
    id: 47,
    'slug': 'mr-tea',
    'tipo': 'bebidas',
    'img': '/images/tachido/productos/mr-tea.webp',
    'nombre': 'Mr. tea',
    'precio': 6000,
    'descripcion': '',
    'proteinas': [],
    'ingredientes': [],
    'adicionales': []
  },
  {
    id: 48,
    'slug': 'jugo-hit',
    'tipo': 'bebidas',
    'img': '/images/tachido/productos/jugo-hit.webp',
    'nombre': 'Jugo hit',
    'precio': 6000,
    'descripcion': '',
    'proteinas': [],
    'ingredientes': [],
    'adicionales': []
  },
  {
    id: 49,
    'slug': 'te-hatsu',
    'tipo': 'bebidas',
    'img': '/images/tachido/productos/bebida-hatsu.webp',
    'nombre': 'Té hatsu',
    'precio': 10000,
    'descripcion': '',
    'proteinas': [],
    'ingredientes': [],
    'adicionales': []
  },
  {
    id: 50,
    'slug': 'margarita',
    'tipo': 'bebidas',
    'img': '/images/tachido/productos/bebida-margarita.webp',
    'nombre': 'Margarita',
    'precio': 16000,
    'descripcion': '',
    'proteinas': [],
    'ingredientes': [],
    'adicionales': []
  },
  {
    id: 52,
    'slug': 'combo-mixto',
    'tipo': 'combos',
    'img': '/images/amala/productos/combo-mixto.webp',
    'nombre': 'Combo de Amor y Amistad',
    'precio': 69900,
    'descripcion': '1 taco mixto, 1 pizza pepperoni mediana, 5 unidades de churros, 2 gaseosas personales',
    'proteinas': [],
    'ingredientes': [],
    'adicionales': []
  }
]

export default Productos
