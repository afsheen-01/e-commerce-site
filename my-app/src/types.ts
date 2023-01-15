export type Product = {
  category: string;
  description: string;
  id: number;
  image: string;
  price: number;
  rating: {
    count: number;
    rate: number;
  };
  title: string;
  quantity?: number;
};
export type ProductResponse = Array<Product>;
export type Cart = Array<{ id: number; quantity: number }>;
export type Categories = Array<string>;
export type LoginBody = { username: string; password: string };
export type LoginResponse = { token: string };

export type UserState = {
  userId: number;
  username: string;
  password: string;
  isLoggedIn: boolean;
};

export type CartProduct = {
  productId: number;
  quantity: number;
};

export type CartProducts = {
  userId: number;
  date: string;
  products: Array<CartProduct>;
};
