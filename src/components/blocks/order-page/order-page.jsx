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
import { OrderNoData } from "./order-no-data/order-no-data";
import { Layout } from "../../layout/layout";

export const OrderPage = () => {
  const [activeProducts, setActiveProducts] = useState([]);

  const getFullPrice = () => {
    let fullPrice = 0;

    products.forEach((element) => {
      activeProducts.forEach((item) => {
        if (element.id === item) {
          fullPrice = fullPrice + Number(element.price);
        }
      });
    });
    return fullPrice;
  };

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
    <Layout>
      <StyledOrderPage>
        <PageWrapper>
          <StyledOrderPageBox>
            <OrderPurchaseForm
              handelOnFilterChange={handelOnFilterChange}
              activeProducts={activeProducts}
              price={getFullPrice()}
            />
            <StyledOrderCardWrapper>
              {products.length > 0 ? (
                products.map((item) => (
                  <OrderCard
                    key={item.id}
                    title={item.name}
                    description={item.description}
                    image={item.image}
                    priceText={item.priceText}
                    characteristics={item.characteristics}
                    properties={item.properties}
                  />
                ))
              ) : (
                <OrderNoData />
              )}
            </StyledOrderCardWrapper>
          </StyledOrderPageBox>
        </PageWrapper>
      </StyledOrderPage>
    </Layout>
  );
};
