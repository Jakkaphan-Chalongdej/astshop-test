let data = {
  cart: [],
  wishlist: [],
  vat: 7, //vat in percentage
  cartTotal: 0,
  orderSuccess: false,
  promoCode: [
    {
      code: "ASTSHOP",
      percentage: 10,
    },
    {
      code: "NEWSHOP",
      percentage: 5,
    },
  ],
  usedPromoCode: null,
  deliveryOptions: [
    {
      id: 1,
      name: "standard",
      duration: "24 - 72 hours",
      cost: 300,
    },
    {
      id: 2,
      name: "fastest",
      duration: "1 - 24 hours",
      cost: 1000,
    },
  ],
  productMaxShowModal: false,
  modalMessage: null,
  showSideNavigation: false,
  // used currency should load with the default currency name and rate
  usedCurrency: { THB: 1, symbol: "฿ " },
  // exchange rates can be got from any api source
  exchangeRates: {
    base: "TH",
    date: "2020-12-26",
    rates: {
      THB: 1,
      USD: 0.033,
      
      
      
    },
  },
  // overkill but doing it for fun
  currencySymbols: {
    TH:"฿ ",
    USD: "$",
    
  },
  priceFilter: {
    min: 0,
    max: 30000,
    pricerange: 30000,
  },
  products: [
    {
      id: 1,
      name: "DS-2CD2021G1-I  ",
      img: "/images/DS-2CD2021G1-I.jpg",
      des: "กล้องวงจรปิด Hikvision",
      slug: "DS-2CD2021G1-I",
      price: 2000,
      discount_price: 2800,
      category: "Camera",
      subcategory: "",
      sale: true,
      article: "watch",
      quantity: 5,

      options: [1, 2, 3],
      fulfilled_by_duka: true,
      approved: true,
      ratings: {
        star_ratings: 4.8,
        votes: 350,
      },
    },
    {
      id: 2,
      name: "DS-2CD1123G0E-I",
      des: "กล้องวงจรปิด Hikvision",
      slug: "DS-2CD1123G0E-I",
      price: 2800,
      discount_price: 0,
      category: "Camera",
      subcategory: "",
      sale: false,
      article: "Camera",
      quantity: 8,
      img: "/images/DS-2CD1123GOE-I.jpg",
      options: [],
      fulfilled: true,
      approved: false,
    
      ratings: {
        star_ratings: 3.6,
        votes: 200,
      },
    },
    {
      id: 3,
      name: "DS-2CD1023G0E-I",
      des: "กล้องวงจรปิด Hikvision",
      slug: "DS-2CD1023G0E-I",
      price: 3000,
      discount_price: 4000,
      category: "Camera",
      subcategory: "Camera",
      sale: true,
      article: "Camera",
      quantity: 3,
      img: "/images/DS-2CD1023G0E-I.jpeg",
      options: [2],
      fulfilled: false,
      approved: true,  
      ratings: {
        star_ratings: 2.5,
        votes: 150,
      },
    },
    {
      id: 4,
      name: "CDS-2CE56D8T-IT3ZF",
      des: "กล้องวงจรปิด Hikvision",
      slug: "CDS-2CE56D8T-IT3ZF",
      price: 2700,
      discount_price: 0,
      category: "Camera",
      subcategory: "",
      sale: false,
      article: "Camera",
      quantity: 10,
      img: "/images/16003-ds_2ce56d8t_it3zf-640x480.jpg",
      options: [],
      fulfilled: true,
      ratings: {
        star_ratings: 3.8,
        votes: 20,
      },
    },
    {
      id: 5,
      name: "DS-2CE16U1T-ITF",
      des: "กล้องวงจรปิด Hikvision",
      slug: "DS-2CE16U1T-ITF",
      price: 3700,
      discount_price: 4000,
      category: "Camera",
      subcategory: "",
      sale: true,
      article: "Camera",
      quantity: 10,
      img: "/images/DS-2CE16U1T-ITF.jpg",
      options: [],
      fulfilled: false,
      approved: true,
      ratings: {
        star_ratings: 4.0,
        votes: 130,
      },
    },
    {
      id: 6,
      name: "DS-2CD2685FWD-IZS",
      des: "กล้องวงจรปิด Hikvision",
      slug: "DS-2CD2685FWD-IZS",
      price: 4100,
      discount_price: 4650,
      category: "Camera",
      subcategory: "Camera",
      sale: true,
      article: "dress",
      quantity: 2,
      img: "/images/20170605074453780.png",
      options: [],
      fulfilled: true,
      approved: true,
      ratings: {
        star_ratings: 2.1,
        votes: 268,
      },
    },
  
  ],
};

export default data;