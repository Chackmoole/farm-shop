import { Text } from "../../ui/text/text";
import { PageWrapper } from "../../layout/page-wrapper/page-wrapper";
import mainImg from "../../../assets/img/main-img.png";
import {
  StyledAbout,
  StyledAboutImg,
  StyledAboutInner,
  StyledAboutWrapper,
} from "./about-styled";

export const About = () => {
  return (
    <StyledAbout>
      <PageWrapper>
        <StyledAboutWrapper>
          <StyledAboutInner>
            <Text variant="h1" mb="24px">
              Магазин фермерских продуктов с доставкой
            </Text>
            <Text variant="body1">
              Все продукты изготавливаются под заказ. Фермеры начинают готовить
              продукты за день до отправки заказа клиентам. Именно поэтому мы
              принимаем заказы заранее и доставляем продукты максимально
              свежими.
            </Text>
          </StyledAboutInner>
          <StyledAboutImg src={mainImg} alt="Фермер со свежими продуктами" />
        </StyledAboutWrapper>
      </PageWrapper>
    </StyledAbout>
  );
};
