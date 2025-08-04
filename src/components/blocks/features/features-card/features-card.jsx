import "./features-card-style.css";
import { Text, TextVariant } from "../../../ui/text/text";
import imgSrc from "../../../../assets/img/eat.png";

export const FeaturesCard = () => {
  return (
    <li className="features-card">
      <div className="features-card__box">
        <img src={imgSrc} alt="" width={52} height={52} />
        <div className="features-card__inner">
          <Text
            variant={TextVariant.small}
            className="features-card__subheading"
          >
            Фермерские продукты
          </Text>
          <Text variant={TextVariant.bold}>Еда намного вкуснее</Text>
        </div>
      </div>
      <Text variant={TextVariant.normal}>
        Домашняя колбаса из мяса, соли и специй и колбаса из магазина —
        два настолько разных продукта, что они даже не родственники
      </Text>
    </li>
  );
};
