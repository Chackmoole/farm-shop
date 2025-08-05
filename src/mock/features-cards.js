import eat from '../assets/img/eat.png';
import garbage from '../assets/img/garbage.png';
import sprout from '../assets/img/sprout.png';
import noMeat from '../assets/img/no-meat.png';

export const FEATURES_CARDS = [
    {
        id: '1',
        title: 'Еда намного вкуснее',
        description: 'Домашняя колбаса из мяса, соли и специй и колбаса из магазина — два настолько разных продукта, что они даже не родственники',
        subtitle: 'Фермерские продукты',
        img: eat,
        isFarm: true,
    },
    {
        id: '2',
        title: 'Просроченные продукты',
        description: 'Из-за большого количество товара сотрудники магазинов не успевают своевременно производить замену товара',
        subtitle: 'Магазинные продукты',
        img: garbage,
        isFarm: false,
    },
    {
        id: '3',
        title: 'Натуральные продукты',
        description: 'Поставляем местные органические продукты выращенные без пестицидов и химических удобрений.',
        subtitle: 'Фермерские продукты',
        img: sprout,
        isFarm: true,
    },
    {
        id: '4',
        title: 'Некачественное мясо',
        description: 'Мясные полуфабрикаты, в которых содержится чрезмерно много натрия, вредных жиров, консервантов',
        subtitle: 'Магазинные продукты',
        img: noMeat,
        isFarm: false,
    }

]