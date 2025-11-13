import { StyledOrderPage } from "./order-page-styled";
import { OrderCard } from "./order-card/order-card";
import { products } from "../../../mock/products-data";

export const OrderPage = () => {
  console.log(products[0].name);
  return (
    <StyledOrderPage>
      {products.map((item) => (
        <OrderCard
          key={item.id}
          title={item.name}
          description={item.description}
          image={item.image}
        />
      ))}
    </StyledOrderPage>
  );
};
