import {
  StyledOrderCardWrapper,
  StyledOrderPage,
  StyledOrderPageBox,
} from "./order-page-styled";
import { OrderCard } from "./order-card/order-card";
import { products } from "../../../mock/products-data";
import { PageWrapper } from "../../layout/page-wrapper/page-wrapper";
import { useState } from "react";
import { OrderPurchaseForm } from "./order-purchase-form/order-purchase-form";

export const OrderPage = () => {
  const [activeProducts, setActiveProducts] = useState([1, 2]);

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
          <OrderPurchaseForm
            handelOnFilterChange={handelOnFilterChange}
            activeProducts={activeProducts}
          />
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
