import { StyledOrderPurchaseForm } from "./order-purchase-form-styled";
import { OrderFilter } from "../order-filter/order-filter";
import { products } from "../../../../mock/products-data";
import { OrderFilterItem } from "../order-filter-item/order-filter-item";
import { OrderPurchase } from "../order-purchase/order-purchase";

export const OrderPurchaseForm = ({
  handelOnFilterChange,
  activeProducts,
  price,
}) => {
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
      <OrderPurchase price={price} />
    </StyledOrderPurchaseForm>
  );
};
