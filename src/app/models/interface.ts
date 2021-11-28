export type ProductProps = {
  img: string;
  name: string;
  description: string;
  price: number;
  amount: number;
  totalPrice: number;
};

export type ProductsProps = ProductProps[];
