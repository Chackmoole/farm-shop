import {
  StyledOrderCardWrapper,
  StyledOrderPage,
  StyledOrderPageBox,
} from "./order-page-styled";
import { OrderCard } from "./order-card/order-card";
import { products } from "../../../mock/products-data";
import { PageWrapper } from "../../layout/page-wrapper/page-wrapper";
import { OrderFilter } from "./order-filter/order-filter";

export const OrderPage = () => {
  return (
    <StyledOrderPage>
      <PageWrapper>
        <StyledOrderPageBox>
          <OrderFilter />
          <StyledOrderCardWrapper>
            {products.map((item) => (
              <OrderCard
                key={item.id}
                title={item.name}
                description={item.description}
                image={item.image}
              />
            ))}
          </StyledOrderCardWrapper>
        </StyledOrderPageBox>
      </PageWrapper>
    </StyledOrderPage>
  );
};
