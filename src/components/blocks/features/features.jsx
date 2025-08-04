import "./features-style.css";
import { FeaturesCard } from "./features-card/features-card";
import { PageWrapper } from "../../layout/page-wrapper/page-wrapper";
export const Features = () => {
  return (
    <PageWrapper>
      <section className="features">
        <ul className="features__list">
          <FeaturesCard />
        </ul>
      </section>
    </PageWrapper>
  );
};
