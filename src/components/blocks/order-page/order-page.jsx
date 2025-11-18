import {
  StyledOrderCardWrapper,
  StyledOrderPage,
  StyledOrderPageBox,
} from "./order-page-styled";
import { OrderCard } from "./order-card/order-card";
import { products } from "../../../mock/products-data";
import { PageWrapper } from "../../layout/page-wrapper/page-wrapper";
import { OrderFilter } from "./order-filter/order-filter";
import { OrderFilterItem } from "./order-filter-item/order-filter-item";

export const OrderPage = () => {
  return (
    <StyledOrderPage>
      <PageWrapper>
        <StyledOrderPageBox>
          <OrderFilter>
            {products.map((product) => {
              return (
                <OrderFilterItem
                  key={product.id}
                  name={product.name}
                  // price={product.price}
                />
              );
            })}
          </OrderFilter>
          <StyledOrderCardWrapper>
            {products.map((item) => (
              <OrderCard
                key={item.id}
                title={item.name}
                description={item.description}
                image={item.image}
                priceText={item.priceText}
                characteristics={item.characteristics}
                properties={item.properties}
              />
            ))}
          </StyledOrderCardWrapper>
        </StyledOrderPageBox>
      </PageWrapper>
    </StyledOrderPage>
  );
};
