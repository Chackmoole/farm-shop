import chicken from "../assets/img/products/chicken.jpg";
import steak from "../assets/img/products/steak.webp";
import forcemeat from "../assets/img/products/forcemeat.webp";
import loin from "../assets/img/products/loin.webp";
import duck from "../assets/img/products/duck.webp";

export const products = [
  {
    id: 1,
    name: "Филе бедра цыпленка",
    description:
      "Филе бедра без кожи и кости. Птица содержится в свободных птичниках, выращивается на натуральных зерновых кормах, что влияет положительно на вкус мяса. Филейная часть бедра обладает насыщенным вкусом и мясным ароматом.",
    characteristics: {
      id: 1,
      weight: "0,7 кг. (595-805 г.)",
      beforeDate: "6 суток",
      breed: "КОББ 500",
      place: "Тверская область",
    },
    properties: {
      id: 2,
      energy: "135",
      energyUnit: "565",
      // nutritional: "белки - 13,8 г., жиры - 8,7 г., углеводы - 0 г.; на 100 г.",
      nutritional: { proteins: "13,8", fats: "8,7", carbohydrates: "0" },
    },
    image: chicken,
    price: "400",
    priceText: "400 руб. / 700 гр",
  },

  {
    id: 2,
    name: "Оссобуко стейк говяжий (заморозка)",
    description:
      "Говяжий стейк оссобуко настоящий деликатес, который приятно удивит своими вкусовыми качествами даже гурмана. Голяшка нижняя часть телячьей ноги, идеально подходящая для приготовления этого блюда. Готовое мясо получается очень сочным и ароматным. Рекомендуем сопроводить его гарниром в итальянском стиле: овощами, ризотто или пастой. Фото продукции может отличаться.",
    characteristics: {
      id: 1,
      weight: "0.8 кг. (0.400 - 1.2 кг.)",
      beforeDate: "180 суток",
      breed: "КОББ 200",
      place: "Воронежская область",
    },
    properties: {
      id: 2,
      energy: "131",
      energyUit: "548",
      // nutritional:
      //   "белки - 18,6 г., жиры - 4,61 г., углеводы - 0 г.; на 100 г.",
      nutritional: { proteins: "18,6", fats: "4,61", carbohydrates: "0" },
    },
    image: steak,
    price: "1479",
    priceText: "1479 руб. / 800 гр",
  },

  {
    id: 3,
    name: "Фарш говяжий (замороженный)",
    description:
      "Говяжий фарш представляет собой мелко измельченную говядину с жиром. Благодаря оптимальному соотношению мяса и жира, не требует добавления свинины, хлеба и иных ингредиентов. Прекрасно подходит для приготовления домашних котлет и настоящих гамбургеров. Фото продукции может отличаться.",
    characteristics: {
      id: 1,
      weight: "500 г. (400-750г.)",
      beforeDate: "180 суток",
      breed: "КОББ 700",
      place: "Москва",
    },
    properties: {
      id: 2,
      energy: "131",
      energyUnit: "548",
      // nutritional:
      //   "белки - 18,6 г., жиры - 20,0 г., углеводы - 0 г.; на 100 г.",
      nutritional: { proteins: "18,6", fats: "20,0", carbohydrates: "0" },
    },
    image: forcemeat,
    price: "560",
    priceText: "560 руб. / 500 гр",
  },

  {
    id: 4,
    name: "Корейка баранья 12 ребер (заморозка)",
    description:
      "Корейка спинная часть тушки в приготовлении очень мягкая и сочная. Её можно запекать, жарить, готовить на гриле, и все это получается очень вкусно. Фото продукции может отличаться.",
    characteristics: {
      id: 1,
      weight: "2 кг. (1 - 3 кг.)",
      beforeDate: "180 сут.",
      breed: "КОББ 2000",
      place: "Ставрополье",
    },
    properties: {
      id: 2,
      energy: "209",
      energyUnit: "874,45",
      // nutritional:
      //   "белки - 15,6 г., жиры - 16,3 г., углеводы - 0 г.; на 100 г.",
      nutritional: { proteins: "15,6", fats: "16,3", carbohydrates: "0" },
    },
    image: loin,
    price: "6998",
    priceText: "6998 руб. / 2 кг",
  },

  {
    id: 5,
    name: "Утка (заморозка)",
    description:
      "Фермерская утка, запеченная в духовке целиком с яблоками, станет вашим фирменным блюдом. Мясо обладает приятной текстурой и нежным вкусом. Обращаем ваше внимание на то, что домашняя утка содержалась на свободном выгуле, а значит обладает большим процентом жировой прослойки.",
    characteristics: {
      id: 1,
      weight: "2 кг. (1-3кг.)",
      beforeDate: "180 суток",
      breed: "Star-53",
      place: "Тверская область",
    },
    properties: {
      id: 2,
      energy: "215",
      energyUnit: "899,58",
      // nutritional:
      //   "белки - 13,5 г., жиры - 28,6 г., углеводы - 0,94 г.; на 100 г.",
      nutritional: { proteins: "13,5", fats: "28,6", carbohydrates: "0" },
    },
    image: duck,
    price: "2536",
    priceText: "2536 руб. / 2 кг",
  },
];
