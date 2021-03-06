import { toLink } from '~/utils';

export default {
  name: 'Nav',
  setup() {
    let isNavShow = useState('isNavShow');
    return {
      isNavShow
    }
  },
  data() {
    return {
      classNavShow: 'nav_show',
      classNavItemCurrent: 'nav__item_current',
      classNavItemOpen: 'nav__item_open',
      current: null,
      openItem: null,
      list: [
        {
          title: 'Каталог',
          href: '/catalog',
          subtitle: 'Выберите категорию',
          sub: [
            {
              title: 'Двигатель',
              href: '/catalog'
            },
            {
              title: 'Турбины',
              href: '/catalog'
            },
            {
              title: 'Трансмиссии',
              href: '/catalog'
            },
            {
              title: 'Выпускные системы',
              href: '/catalog'
            },
            {
              title: 'Впускные системы',
              href: '/catalog'
            },
            {
              title: 'Охлаждение',
              href: '/catalog'
            },
            {
              title: 'Тормозные системы',
              href: '/catalog'
            },
            {
              title: 'Подвеска',
              href: '/catalog'
            },
            {
              title: 'Топливные системы',
              href: '/catalog'
            },
            {
              title: 'Интерьер и экстерьер',
              href: '/catalog'
            },
            {
              title: 'Шины и диски',
              href: '/catalog'
            },
            {
              title: 'Электрика',
              href: '/catalog'
            },
            {
              title: 'Оригинальные детали',
              href: '/catalog'
            },
            {
              title: 'Подарки и мерс',
              href: '/catalog'
            },
          ]
        },
        {
          title: 'О нас',
          href: '',
          subtitle: 'О нас',
          sub: [
            {
              title: 'О компании',
              href: '/about'
            },
            {
              title: 'Доставка и оплата',
              href: '/delivery'
            },
          ]
        },
        {
          title: 'Новости',
          href: '/news',
        },
        {
          title: 'Контакты',
          href: '/contacts',
        },
        {
          title: 'Распродажи',
          href: '/catalog',
        },
        {
          title: 'Информация',
          href: '/info',
        },
        {
          title: 'Корзина',
          href: '/basket',
        },
      ],
      actions: [
        {
          title: 'Подбор по авто',
          text: 'Подберите для вашего авто',
          icon: '<svg width="24" height="18" viewBox="0 0 24 18" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M23.4802 5.44493H21.7201C21.586 5.44493 21.4571 5.49674 21.3604 5.58945L20.9846 5.9494C20.3513 4.48391 19.4427 3.0347 18.2154 1.53436C17.552 0.723683 16.5709 0.258789 15.5235 0.258789H8.47642C7.42891 0.258789 6.44782 0.723738 5.78477 1.53441C4.51876 3.08195 3.62822 4.49625 3.00986 5.94423L2.63968 5.58945C2.54291 5.49674 2.41401 5.44493 2.27995 5.44493H0.519865C0.232725 5.44493 0 5.67766 0 5.9648V7.16822C0 7.44263 0.213326 7.66969 0.487182 7.68703L2.29634 7.80097C2.02299 8.59975 1.80955 9.79006 1.80955 11.4687C1.80955 12.9253 2.10047 13.8826 2.60677 14.5023V17.3064C2.60677 17.5468 2.8017 17.7417 3.04215 17.7417H5.04474C5.2853 17.7417 5.48029 17.5468 5.48029 17.3064V15.5651H18.5198V17.3064C18.5198 17.5468 18.7148 17.7417 18.9552 17.7417H20.9578C21.1982 17.7417 21.3932 17.5468 21.3932 17.3064V14.5023C21.8994 13.8826 22.1905 12.9253 22.1905 11.4687C22.1905 9.79006 21.9771 8.59975 21.7037 7.80097L23.5129 7.68703C23.7867 7.66969 24 7.44263 24 7.16822V5.9648C24 5.67766 23.7674 5.44493 23.4802 5.44493ZM7.27055 2.74984C7.5677 2.38666 8.00724 2.17828 8.47642 2.17828H15.5235C15.9927 2.17828 16.4324 2.38666 16.7295 2.74984C17.5881 3.79941 18.2661 4.80384 18.7902 5.80439L5.19782 5.80694C5.7104 4.82863 6.39229 3.82336 7.27055 2.74984ZM5.78933 13.4357C4.79256 13.4357 3.98461 13.1101 3.98461 12.3203C3.98461 11.5306 4.27776 10.8903 5.27446 10.8903C6.27117 10.8903 7.59393 11.5306 7.59393 12.3203C7.59393 13.1101 6.78593 13.4357 5.78933 13.4357ZM13.8918 13.2711H10.1083C9.53794 13.2711 9.07393 12.8071 9.07393 12.2367C9.07393 12.0768 9.20366 11.9471 9.36374 11.9471H14.6365C14.7965 11.9471 14.9261 12.0768 14.9261 12.2367C14.9261 12.8071 14.4621 13.2711 13.8918 13.2711ZM18.2107 13.4357C17.214 13.4357 16.406 13.1101 16.406 12.3203C16.406 11.5306 17.7289 10.8903 18.7255 10.8903C19.7222 10.8903 20.0154 11.5306 20.0154 12.3203C20.0154 13.1101 19.2075 13.4357 18.2107 13.4357Z" fill="#F05454"/> </svg> ',
          href: '/select'
        },
        {
          title: 'Сравнение',
          text: 'Подберите для вашего авто',
          icon: '<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M11 6.33C11.85 6.03 12.53 5.35 12.83 4.5H16L13 11.5C13 13.16 14.57 14.5 16.5 14.5C18.43 14.5 20 13.16 20 11.5L17 4.5H19V2.5H12.83C12.42 1.33 11.31 0.5 10 0.5C8.69 0.5 7.58 1.33 7.17 2.5H1V4.5H3L0 11.5C0 13.16 1.57 14.5 3.5 14.5C5.43 14.5 7 13.16 7 11.5L4 4.5H7.17C7.47 5.35 8.15 6.03 9 6.33V17.5H0V19.5H20V17.5H11V6.33ZM18.37 11.5H14.63L16.5 7.14L18.37 11.5ZM5.37 11.5H1.63L3.5 7.14L5.37 11.5ZM10 4.5C9.45 4.5 9 4.05 9 3.5C9 2.95 9.45 2.5 10 2.5C10.55 2.5 11 2.95 11 3.5C11 4.05 10.55 4.5 10 4.5Z" fill="#F05454"/> </svg> ',
          href: '/profile/compare'
        },
        {
          title: 'Войти',
          text: 'Войти или зарегистрироваться',
          icon: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M15.25 6C15.25 7.79493 13.7949 9.25 12 9.25C10.2051 9.25 8.75 7.79493 8.75 6C8.75 4.20507 10.2051 2.75 12 2.75C13.7949 2.75 15.25 4.20507 15.25 6Z" stroke="#F05454" stroke-width="1.5"/> <path d="M18.25 17C18.25 18.0756 17.6409 19.1202 16.5138 19.9252C15.3882 20.7293 13.7947 21.25 12 21.25C10.2053 21.25 8.61181 20.7293 7.48618 19.9252C6.35911 19.1202 5.75 18.0756 5.75 17C5.75 15.9244 6.35911 14.8798 7.48618 14.0748C8.61181 13.2707 10.2053 12.75 12 12.75C13.7947 12.75 15.3882 13.2707 16.5138 14.0748C17.6409 14.8798 18.25 15.9244 18.25 17Z" stroke="#F05454" stroke-width="1.5"/> </svg> ',
          href: '/login'
        },
        {
          title: 'Корзина',
          text: 'Оформление заказа',
          icon: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M9 18C9.82843 18 10.5 18.6716 10.5 19.5C10.5 20.3284 9.82843 21 9 21C8.17157 21 7.5 20.3284 7.5 19.5C7.5 18.6716 8.17157 18 9 18Z" stroke="#F05454" stroke-width="1.5"/> <path d="M16 18C16.8284 18 17.5 18.6716 17.5 19.5C17.5 20.3284 16.8284 21 16 21C15.1716 21 14.5 20.3284 14.5 19.5C14.5 18.6716 15.1716 18 16 18Z" stroke="#F05454" stroke-width="1.5"/> <path d="M5.75 12C5.75 10.5646 5.75159 9.56347 5.85315 8.80812C5.9518 8.07434 6.13225 7.68577 6.40901 7.40901C6.68577 7.13225 7.07434 6.9518 7.80812 6.85315C8.56347 6.75159 9.56458 6.75 11 6.75H13.9172C15.5841 6.75 16.7537 6.75179 17.623 6.87517C18.4715 6.9956 18.8954 7.21511 19.1754 7.54566C19.4554 7.8762 19.6023 8.33044 19.5816 9.18719C19.5604 10.0649 19.3698 11.2189 19.0958 12.8631C18.8931 14.0793 18.7511 14.9228 18.5629 15.5551C18.3807 16.1672 18.1794 16.4911 17.913 16.7168C17.6465 16.9425 17.294 17.0878 16.6602 17.1669C16.0056 17.2486 15.1503 17.25 13.9172 17.25H11C9.56458 17.25 8.56347 17.2484 7.80812 17.1469C7.07434 17.0482 6.68577 16.8678 6.40901 16.591C6.13225 16.3142 5.9518 15.9257 5.85315 15.1919C5.75159 14.4365 5.75 13.4354 5.75 12Z" stroke="#F05454" stroke-width="1.5"/> <path d="M5.75 11.5V5C5.75 3.89543 4.85457 3 3.75 3H2.5" stroke="#F05454" stroke-width="1.5" stroke-linecap="round"/> </svg> ',
          href: '/basket'
        }
      ]
    }
  },
  methods: {
    toLink,
    toggleNavItem(item) {
      this.current = item;

      if (this.openItem == item) {
        this.openItem = null;
      } else {
        this.openItem = item;
      }
    }
  }
}
