import { About } from "../../blocks/about/about";
import { Features } from "../../blocks/features/features";
import { OrderPage } from "../../blocks/order-page/order-page";

export const MainPage = () => {
  return (
    <>
      <OrderPage />
      <main>
        <About />
        <Features />
      </main>
    </>
  );
};
