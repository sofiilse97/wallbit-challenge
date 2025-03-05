export type ProductType = {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating?: {
    rate: number;
    count: number;
  };
  amount: number;
  quantity: number;
};

export type CartType = {
  id: number;
  createdAt: Date;
  products: ProductType[];
  cartTotal: number;
};

interface CartContextType {
  cart: CartType | null;
  setCart: (value: CartType | null) => void;
}
