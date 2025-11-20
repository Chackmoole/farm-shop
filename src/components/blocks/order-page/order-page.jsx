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
import { useState } from "react";

export const OrderPage = () => {
  const [activeProducts, setActiveProducts] = useState([]);

  const addProduct = (idProduct) => {
    setActiveProducts((prevState) => {
      return [...prevState, idProduct];
    });
  };

  const removeProduct = (idProduct) => {
    setActiveProducts((prevState) => {
      return prevState.filter((product) => idProduct !== product);
    });
  };

  const handelOnFilterChange = (idProduct) => {
    if (activeProducts.includes(idProduct)) {
      removeProduct(idProduct);
    } else {
      addProduct(idProduct);
    }
  };

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
                  onChange={() => {
                    handelOnFilterChange(product.id);
                  }}
                  isChecked={activeProducts.includes(product.id)}
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
