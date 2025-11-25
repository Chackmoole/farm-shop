import { About } from "../../blocks/about/about";
import { Features } from "../../blocks/features/features";
import { Layout } from "../../layout/layout";

export const MainPage = () => {
  return (
    <>
      <main>
        <Layout>
          <About />
          <Features />
        </Layout>
      </main>
    </>
  );
};
