import { Title, TitleVariants } from '../../ui/title/title';
import { Text, TextVariant } from '../../ui/text/text';
import './about-style.css';
import { PageWrapper } from '../../layout/page-wrapper/page-wrapper';
import mainImg from '../../../assets/img/main-img.png';

export const About = () => { 
    return  <section className='about'>
                <PageWrapper>
                    <div className='about__wrapper'>
                        <div className='about__inner'>
                            <Title variant={TitleVariants.h1} className='about__style'>Магазин фермерских продуктов с доставкой</Title>
                            <Text variant={TextVariant.normal}>Все продукты изготавливаются под заказ. Фермеры начинают готовить продукты за день до отправки заказа клиентам. Именно поэтому мы принимаем заказы заранее и доставляем продукты максимально свежими.</Text>
                        </div>
                        <img className='about__img' src={mainImg} alt="Фермер со свежими продуктами" />
                    </div>
                </PageWrapper>
            </section>
}