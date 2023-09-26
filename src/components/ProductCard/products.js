import {
  Bicycle1,
  Bicycle1_100,
  Bicycle1_150,
  Bicycle1_300,
  Bicycle1_400,
  Bicycle1_768,
  Bicycle1_800,
  Bicycle2,
  Bicycle2_100,
  Bicycle2_150,
  Bicycle2_300,
  Bicycle2_400,
  Bicycle2_768,
  Bicycle2_800,
  Bicycle3,
  Bicycle3_100,
  Bicycle3_150,
  Bicycle3_300,
  Bicycle3_400,
  Bicycle3_768,
  Bicycle3_800,
  Bicycle4,
  Bicycle4_100,
  Bicycle4_150,
  Bicycle4_300,
  Bicycle4_400,
  Bicycle4_768,
  Bicycle4_800,
} from "../../assets/images/bicycles/index";

import {
  YellowGlove,
  YellowGlove_100,
  YellowGlove_150,
  YellowGlove_300,
  YellowGlove_400,
  YellowGlove_768,
  YellowGlove_800,
  GoldGloves,
  GoldGloves_100,
  GoldGloves_150,
  GoldGloves_300,
  GoldGloves_400,
  GoldGloves_768,
  GoldGloves_800,
  RedGloves,
  RedGloves_100,
  RedGloves_150,
  RedGloves_300,
  RedGloves_400,
  RedGloves_768,
  RedGloves_800,
  BlueGloves,
  BlueGloves_100,
  BlueGloves_150,
  BlueGloves_300,
  BlueGloves_400,
  BlueGloves_768,
  BlueGloves_800,
  PinkGloves,
  PinkGloves_100,
  PinkGloves_150,
  PinkGloves_300,
  PinkGloves_400,
  PinkGloves_768,
  PinkGloves_800,
  PinkHelmet,
  PinkHelmet_100,
  PinkHelmet_150,
  PinkHelmet_300,
  PinkHelmet_400,
  PinkHelmet_768,
  PinkHelmet_800,
  SkyBlueHelmet,
  SkyBlueHelmet_100,
  SkyBlueHelmet_150,
  SkyBlueHelmet_300,
  SkyBlueHelmet_400,
  SkyBlueHelmet_768,
  SkyBlueHelmet_800,
  GreenHelmet,
  GreenHelmet_100,
  GreenHelmet_150,
  GreenHelmet_300,
  GreenHelmet_400,
  GreenHelmet_768,
  GreenHelmet_800,
  RedHelmet,
  RedHelmet_100,
  RedHelmet_150,
  RedHelmet_300,
  RedHelmet_400,
  RedHelmet_768,
  RedHelmet_800,
  BlueHelmet,
  BlueHelmet_100,
  BlueHelmet_150,
  BlueHelmet_300,
  BlueHelmet_400,
  BlueHelmet_768,
  BlueHelmet_800,
} from "../../assets/images/accessories/index";

const bicycles = [
  {
    productId: 1,
    productType: "Bicycles",
    name: "Kryo X26 MTB – Model K",
    src: Bicycle1_800,
    srcSet: [
      ` ${Bicycle1_100} 100w`,
      `${Bicycle1_150} 150w`,
      `${Bicycle1_300} 300w`,
      `${Bicycle1_400} 400w`,
      `${Bicycle1_768} 768w`,
      `${Bicycle1_800} 800w`,
      `${Bicycle1} 1000w`,
    ],
    alt: "model k",
    price: "350.00",
  },
  {
    productId: 2,
    productType: "Bicycles",
    name: "Kryo X26 MTB – Model X",
    src: Bicycle2_800,
    srcSet: [
      `${Bicycle2_100} 100w`,
      `${Bicycle2_150} 150w`,
      `${Bicycle2_300} 300w`,
      `${Bicycle2_400} 400w`,
      `${Bicycle2_768} 768w`,
      `${Bicycle2_800} 800w`,
      `${Bicycle2} 1000w`,
    ],
    alt: "model x",
    price: "350.00",
  },
  {
    productId: 3,
    productType: "Bicycles",
    name: "Kryo X26 MTB – Model Y",
    src: Bicycle3_800,
    srcSet: [
      `${Bicycle3_100} 100w`,
      `${Bicycle3_150} 150w`,
      `${Bicycle3_300} 300w`,
      `${Bicycle3_400} 400w`,
      `${Bicycle3_768} 768w`,
      `${Bicycle3_800} 800w`,
      `${Bicycle3} 1000w`,
    ],
    alt: "model y",
    price: "350.00",
  },
  {
    productId: 4,
    productType: "Bicycles",
    name: "Kryo X26 MTB – Model Z",
    src: Bicycle4_800,
    srcSet: [
      `${Bicycle4_100} 100w`,
      `${Bicycle4_150} 150w`,
      `${Bicycle4_300} 300w`,
      `${Bicycle4_400} 400w`,
      `${Bicycle4_768} 768w`,
      `${Bicycle4_800} 800w`,
      `${Bicycle4} 1000w`,
    ],
    alt: "model z",
    price: "350.00",
  },
];

const accessories = [
  {
    productId: 1,
    productType: "Accessories",
    name: "Bicycle Gloves Yellow",
    src: YellowGlove_800,
    srcSet: [
      `${YellowGlove_100} 100w`,
      `${YellowGlove_150} 150w`,
      `${YellowGlove_300} 300w`,
      `${YellowGlove_400} 400w`,
      `${YellowGlove_768} 768w`,
      `${YellowGlove_800} 800w`,
      `${YellowGlove} 1000w`,
    ],
    alt: "yellow gloves",
    prices: [
      {
        size: "l",
        cost: "30.00",
      },
      {
        size: "m",
        cost: "35.00",
      },
      {
        size: "xl",
        cost: "40.00",
      },
    ],
  },
  {
    productId: 2,
    productType: "Accessories",
    name: "Bicycle Gloves Gold",
    src: GoldGloves_800,
    srcSet: [
      `${GoldGloves_100} 100w`,
      `${GoldGloves_150} 150w`,
      `${GoldGloves_300} 300w`,
      `${GoldGloves_400} 400w`,
      `${GoldGloves_768} 768w`,
      `${GoldGloves_800} 800w`,
      `${GoldGloves} 1000w`,
    ],
    alt: "gold gloves",
    prices: [
      {
        size: "l",
        cost: "30.00",
      },
      {
        size: "m",
        cost: "40.00",
      },
      {
        size: "xl",
        cost: "50.00",
      },
    ],
  },
  {
    productId: 3,
    productType: "Accessories",
    name: "Bicycle Gloves Red",
    src: RedGloves_800,
    srcSet: [
      `${RedGloves_100} 100w`,
      `${RedGloves_150} 150w`,
      `${RedGloves_300} 300w`,
      `${RedGloves_400} 400w`,
      `${RedGloves_768} 768w`,
      `${RedGloves_800} 800w`,
      `${RedGloves} 1000w`,
    ],
    alt: "red gloves",
    prices: [
      {
        size: "l",
        cost: "145.00",
      },
      {
        size: "m",
        cost: "155.00",
      },
      {
        size: "xl",
        cost: "165.00",
      },
    ],
  },
  {
    productId: 4,
    productType: "Accessories",
    name: "Bicycle Gloves Blue",
    src: BlueGloves_800,
    srcSet: [
      `${BlueGloves_100} 100w`,
      `${BlueGloves_150} 150w`,
      `${BlueGloves_300} 300w`,
      `${BlueGloves_400} 400w`,
      `${BlueGloves_768} 768w`,
      `${BlueGloves_800} 800w`,
      `${BlueGloves} 1000w`,
    ],
    alt: "blue gloves",
    prices: [
      {
        size: "l",
        cost: "27.00",
      },
      {
        size: "m",
        cost: "30.00",
      },
      {
        size: "xl",
        cost: "35.00",
      },
    ],
  },
  {
    productId: 5,
    productType: "Accessories",
    name: "Bicycle Gloves Pink",
    src: PinkGloves_800,
    srcSet: [
      `${PinkGloves_100} 100w`,
      `${PinkGloves_150} 150w`,
      `${PinkGloves_300} 300w`,
      `${PinkGloves_400} 400w`,
      `${PinkGloves_768} 768w`,
      `${PinkGloves_800} 800w`,
      `${PinkGloves} 1000w`,
    ],
    alt: "pink gloves",
    prices: [
      {
        size: "l",
        cost: "27.00",
      },
      {
        size: "m",
        cost: "28.00",
      },
      {
        size: "xl",
        cost: "35.00",
      },
    ],
  },
  {
    productId: 6,
    productType: "Accessories",
    name: "Bicycle Helmet Pink",
    src: PinkHelmet_800,
    srcSet: [
      `${PinkHelmet_100} 100w`,
      `${PinkHelmet_150} 150w`,
      `${PinkHelmet_300} 300w`,
      `${PinkHelmet_400} 400w`,
      `${PinkHelmet_768} 768w`,
      `${PinkHelmet_800} 800w`,
      `${PinkHelmet} 1000w`,
    ],
    alt: "pink helmet",
    prices: [
      {
        size: "l",
        cost: "180.00",
      },
      {
        size: "m",
        cost: "190.00",
      },
      {
        size: "xl",
        cost: "200.00",
      },
    ],
  },
  {
    productId: 7,
    productType: "Accessories",
    name: "Bicycle Helmet Sky Blue",
    src: SkyBlueHelmet_800,
    srcSet: [
      `${SkyBlueHelmet_100} 100w`,
      `${SkyBlueHelmet_150} 150w`,
      `${SkyBlueHelmet_300} 300w`,
      `${SkyBlueHelmet_400} 400w`,
      `${SkyBlueHelmet_768} 768w`,
      `${SkyBlueHelmet_800} 800w`,
      `${SkyBlueHelmet} 1000w`,
    ],
    alt: "sky blue helmet",
    prices: [
      {
        size: "l",
        cost: "150.00",
      },
      {
        size: "m",
        cost: "165.00",
      },
      {
        size: "xl",
        cost: "175.00",
      },
    ],
  },
  {
    productId: 8,
    productType: "Accessories",
    name: "Bicycle Helmet Green",
    src: GreenHelmet_800,
    srcSet: [
      `${GreenHelmet_100} 100w`,
      `${GreenHelmet_150} 150w`,
      `${GreenHelmet_300} 300w`,
      `${GreenHelmet_400} 400w`,
      `${GreenHelmet_768} 768w`,
      `${GreenHelmet_800} 800w`,
      `${GreenHelmet} 1000w`,
    ],
    alt: "green helmet",
    prices: [
      {
        size: "l",
        cost: "135.00",
      },
      {
        size: "m",
        cost: "145.00",
      },
      {
        size: "xl",
        cost: "160.00",
      },
    ],
  },
  {
    productId: 9,
    productType: "Accessories",
    name: "Bicycle Helmet Red",
    src: RedHelmet_800,
    srcSet: [
      `${RedHelmet_100} 100w`,
      `${RedHelmet_150} 150w`,
      `${RedHelmet_300} 300w`,
      `${RedHelmet_400} 400w`,
      `${RedHelmet_768} 768w`,
      `${RedHelmet_800} 800w`,
      `${RedHelmet} 1000w`,
    ],
    alt: "red helmet",
    prices: [
      {
        size: "l",
        cost: "200.00",
      },
      {
        size: "m",
        cost: "215.00",
      },
      {
        size: "xl",
        cost: "255.00",
      },
    ],
  },
  {
    productId: 10,
    productType: "Accessories",
    name: "Bicycle Helmet Blue",
    src: BlueHelmet_800,
    srcSet: [
      `${BlueHelmet_100} 100w`,
      `${BlueHelmet_150} 150w`,
      `${BlueHelmet_300} 300w`,
      `${BlueHelmet_400} 400w`,
      `${BlueHelmet_768} 768w`,
      `${BlueHelmet_800} 800w`,
      `${BlueHelmet} 1000w`,
    ],
    alt: "blue helmet",
    prices: [
      {
        size: "l",
        cost: "125.00",
      },
      {
        size: "m",
        cost: "130.00",
      },
      {
        size: "xl",
        cost: "135.00",
      },
    ],
  },
];

export { bicycles, accessories };
