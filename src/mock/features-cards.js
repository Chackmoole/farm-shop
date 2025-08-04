import eat from '../assets/img/eat.png';
import garbage from '../assets/img/garbage.png';
import sprout from '../assets/img/sprout.png';
import noMeat from '../assets/img/no-meat.png';

export const FEATURES_CARDS = [
    {
        title: 'Еда намного вкуснее',
        description: 'Домашняя колбаса из мяса, соли и специй и колбаса из магазина — два настолько разных продукта, что они даже не родственники',
        subtitle: 'Фермерские продукты',
        img: eat,
        farm: true,
    },
    {
        title: 'Просроченные продукты',
        description: 'Из-за большого количество товара сотрудники магазинов не успевают своевременно производить замену товара',
        subtitle: 'Магазинные продукты',
        img: garbage,
        farm: false,
    },
    {
        title: 'Натуральные продукты',
        description: 'Поставляем местные органические продукты выращенные без пестицидов и химических удобрений.',
        subtitle: 'Фермерские продукты',
        img: sprout,
        farm: true,
    },
    {
        title: 'Некачественное мясо',
        description: 'Мясные полуфабрикаты, в которых содержится чрезмерно много натрия, вредных жиров, консервантов',
        subtitle: 'Магазинные продукты',
        img: noMeat,
        farm: false,
    }

]