import { StyledOrderPurchaseForm } from "./order-purchase-form-styled";
import { OrderFilter } from "../order-filter/order-filter";
import { products } from "../../../../mock/products-data";
import { OrderFilterItem } from "../order-filter-item/order-filter-item";
import { OrderPurchase } from "../order-purchase/order-purchase";
import { useState } from "react";

export const OrderPurchaseForm = ({
  handelOnFilterChange,
  activeProducts,
  price,
}) => {
  const isAvailable = activeProducts.length > 0;

  const [address, setAddress] = useState("");
  const handleOnChange = (e) => {
    setAddress(e.target.value);
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    alert(
      `Заказаны продукты с id ${activeProducts} и адресом доставки ${address}`
    );
    setAddress("");
  };
  return (
    <StyledOrderPurchaseForm>
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
      <OrderPurchase
        price={price}
        isAvailable={isAvailable}
        onClick={handleOnSubmit}
        onChange={handleOnChange}
        inputValue={address}
      />
    </StyledOrderPurchaseForm>
  );
};
