import { BasketProduct, MenuProduct } from "@/types/Product";

export const EMPTY: BasketProduct[] = [];

type BasketProductOmitted = Omit<
  BasketProduct,
  "price" | "isAvailable" | "isAdvertised"
>;

export const SMALL: BasketProductOmitted[] = [
  {
    id: "1",
    title: "Burger Meal",
    imageSource: "/assets/burger1.png",
    quantity: 1,
  },
];

export const MEDIUM: (BasketProductOmitted & Pick<MenuProduct, "price">)[] = [
  {
    id: "1",
    imageSource: "/assets/burger1.png",
    title: "Burger Smoke BBQ",
    price: 5,
    quantity: 2,
  },
  {
    id: "2",
    imageSource: "/assets/burger6.png",
    title: "Vegan Burger",
    price: 5,
    quantity: 1,
  },
  {
    id: "3",
    imageSource:
      "https://www.ecomiam.com/images/Image/Frites-du-bistro-Code-Menlog.jpg",
    title: "Burger House",
    price: 5,
    quantity: 4,
  },
  {
    id: "4",
    imageSource: "/assets/drink1.png",
    title: "Cheese Burger",
    price: 5,
    quantity: 4,
  },
];

export const LARGE: BasketProduct[] = [
  {
    id: "1",
    imageSource: "/assets/fries3.png",
    title: "New York Fries",
    price: 3.1678,
    quantity: 13,
    isAvailable: true,
    isAdvertised: false,
  },
  {
    id: "2",
    imageSource: "/assets/drink1.png",
    title: "Coke 25cl",
    price: 3.568,
    quantity: 1,
    isAvailable: true,
    isAdvertised: false,
  },
  {
    id: "3",
    imageSource: "/assets/burger3.png",
    title: "Burger poulet",
    price: 5.367,
    quantity: 5,
    isAvailable: true,
    isAdvertised: false,
  },
  {
    id: "4",
    imageSource: "/assets/burger-vegan.png",
    title: "Vegan Burger",
    price: 5.4985,
    quantity: 1,
    isAvailable: true,
    isAdvertised: false,
  },
  {
    id: "5",
    imageSource: "/assets/drink2.png",
    title: "Pepsi 25cl",
    price: 3.487,
    quantity: 1,
    isAvailable: true,
    isAdvertised: false,
  },
  {
    id: "6",
    imageSource: "/assets/drink3.png",
    title: "Iced Tea 25cl",
    price: 3.356,
    quantity: 1,
    isAvailable: true,
    isAdvertised: false,
  },
  {
    id: "7",
    imageSource: "/assets/burger-bacon-egg.png",
    title: "Burger Smoke Bdhbedhbeheb",
    price: 5.598,
    quantity: 1,
    isAvailable: true,
    isAdvertised: false,
  },
  {
    id: "8",
    imageSource: "/assets/frites1.png",
    title: "Frites Paprika",
    price: 2.567,
    quantity: 1,
    isAvailable: true,
    isAdvertised: false,
  },
  {
    id: "9",
    imageSource: "/assets/wedges1.png",
    title: "Crispy Potatoes",
    price: 3.7,
    quantity: 1,
    isAvailable: true,
    isAdvertised: false,
  },
  {
    id: "10",
    imageSource: "/assets/ice-cream.png",
    title: "Glaces artisanales",
    price: 4.678,
    quantity: 1,
    isAvailable: true,
    isAdvertised: false,
  },
];

export const LARGE_WEIRD: BasketProduct[] = [
  {
    id: "1",
    imageSource: "/assets/fries3.png",
    title: "New York Fries",
    price: 3.1678,
    quantity: 13,
    isAvailable: true,
    isAdvertised: false,
  },
  {
    id: "2",
    imageSource: "/assets/drink1.png",
    title: "Coke 25cl",
    price: 3.568,
    quantity: 1,
    isAvailable: true,
    isAdvertised: false,
  },
  {
    id: "3",
    imageSource: "/assets/burger3.png",
    title: "Burger poulet chanmé",
    price: 0.0,
    quantity: 5,
    isAvailable: true,
    isAdvertised: false,
  },
  {
    id: "4",
    imageSource: "/assets/burger-vegan.png",
    title: "Vegan Burger",
    price: 5.4985,
    quantity: 1,
    isAvailable: true,
    isAdvertised: false,
  },
  {
    id: "5",
    imageSource: "/assets/drink2.png",
    title: "Pepsi 25cl MEGA OUF XXXL",
    price: 3.487,
    quantity: 1,
    isAvailable: true,
    isAdvertised: false,
  },
  {
    id: "6",
    imageSource: "/assets/drink3.png",
    title: "",
    price: 3.356,
    quantity: 1,
    isAvailable: true,
    isAdvertised: false,
  },
  {
    id: "7",
    imageSource: "/assets/burger-bacon-egg.png",
    title: "Burger Smoke Bdhbedhbeheb",
    price: 5.598,
    quantity: 1,
    isAvailable: true,
    isAdvertised: false,
  },
  {
    id: "8",
    imageSource: "/assets/frites1.png",
    title: "Frites Paprika",
    price: 2.567,
    quantity: 1,
    isAvailable: true,
    isAdvertised: false,
  },
  {
    id: "9",
    imageSource: "/assets/wedges1.png",
    title: "Crispy Potatoes",
    price: 3.7,
    quantity: 1,
    isAvailable: true,
    isAdvertised: false,
  },
  {
    id: "10",
    imageSource: "/assets/ice-cream.png",
    title: "Glaces artisanales",
    price: 4.678,
    quantity: 1,
    isAvailable: true,
    isAdvertised: false,
  },
];

export const fakeBasket = {
  EMPTY,
  SMALL,
  MEDIUM,
  LARGE,
  LARGE_WEIRD,
};
