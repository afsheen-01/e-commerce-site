//Request and response

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

// Redux states
export type UserState = {
  username: string;
  password: string;
  isLoggedIn: boolean;
};

export type AllStates = {
  LOGIN: {
    type: "LOGIN";
    payload: { username: string; password: string; isLoggedIn: true };
  };
  LOGOUT: {
    type: "LOGOUT";
    payload: { username: string; password: string; isLoggedIn: false };
  };
};
