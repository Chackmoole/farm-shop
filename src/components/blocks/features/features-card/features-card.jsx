import "./features-card-style.css";
import { Text, defaultVariantMapping } from "../../../ui/text/text";

export const FeaturesCard = ({ title, description, subtitle, img, isFarm }) => {
  let featuresCardClass = isFarm
    ? "features-card"
    : "features-card features-card--shop";
  let featuresSubheddingClass = isFarm
    ? "features-card__subheading"
    : "features-card__subheading features-card__subheading--shop";

  return (
    <li className={featuresCardClass}>
      <div className="features-card__box">
        <img src={img} alt="" width={52} height={52} />
        <div className="features-card__inner">
          <Text
            variant={defaultVariantMapping.body1}
            className={featuresSubheddingClass}
          >
            {subtitle}
          </Text>
          <Text variant={defaultVariantMapping.body1}>{title}</Text>
        </div>
      </div>
      <Text variant={defaultVariantMapping.body1}>{description}</Text>
    </li>
  );
};
