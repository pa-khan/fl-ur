import { toPriceFormat } from '~/utils';
import Swiper, { Thumbs } from 'swiper';
import { Products } from '~/data/products';

export default {
  name: 'Card',
  data() {
    return {
      name: 'Комплект винтовой подвески BC Racing серия BR тип RA',
      price: 2750,
      text: 'Представленные предложения ввиду своего комплексного характера сочетают в себе выгоду при затратах времени и средств и полноту реализации выбранного вами уровня усовершенствования.Представленные предложения ввиду своего комплексного характера сочетают в себе выгоду при затратах времени и средств и ',
      complect: 'Болты 5х10, еще какие-то болты, сам товар, куча пупырки, воздух немецкий, коробка, ненужный болт из-за которого вы потом все снимите и соберете заново, инструкция по сборке шкафа икея',
      images: [
        '/assets/images/product.jpg',
        '/assets/images/product.jpg',
        '/assets/images/product.jpg',
        '/assets/images/product.jpg',
        '/assets/images/product.jpg',
        '/assets/images/product.jpg',
        '/assets/images/product.jpg',
        '/assets/images/product.jpg',
      ],
      sets: [
        { title: '10 мм', checked: true }, 
        { title: '15 мм' },
        { title: '20 мм' },
        { title: '32 мм' },
        { title: '35 мм' },
        { title: '40 мм' },
        { title: '50 мм' }
      ],
      chars: [
        {
          title: 'Артикул',
          value: 'H-04-2638'
        },
        {
          title: 'Артикул производителя',
          value: 'H-04-2638'
        },
        {
          title: 'Вид товара',
          value: 'Винтовая подвеска'
        },
        {
          title: 'Гарантия',
          value: '1 год'
        },
        {
          title: 'Максимальное занижение, мм',
          value: '100'
        },
        {
          title: 'Материал опор',
          value: 'Алюминий 6016'
        },
        {
          title: 'Материал пружин',
          value: 'SAE9254'
        },
        {
          title: 'Минимальное занижение, мм',
          value: '5'
        },
        {
          title: 'Производитель',
          value: 'BC Racing'
        },
        {
          title: 'Страна производства',
          value: 'Тайвань'
        },
        {
          title: 'Оригинальный номер по vin',
          value: '12344124124weq'
        },
      ],
      tabs: {
        current: null,
        list: [
          {
            title: 'Характеристики',
          },
          {
            title: 'Аналоги',
          },
          {
            title: 'Отзывы',
          },
        ],
      },
      reviews: [
        {
          img: '/assets/images/product.jpg',
          title: 'Иванов Иван Иванович',
          text: 'Представленные предложения ввиду своего комплексного характера сочетают в себе выгоду при затратах времени и средств и полноту.'
        }
      ],
      analogs: [],
      selects: {
        step: 0,
        current: {
          mark: null,
          model: null
        },
        marks: [
          {
            name: 'Volkswagen',
            icon: '/assets/images/marks/volkswagen.svg',
          },
          {
            name: 'Porsche',
            icon: '/assets/images/marks/porsche.svg',
            models: [
              {
                name: '911',
                mods: [
                  { name: '911' },
                  { name: '911 Carrera' },
                  { name: '911 R' },
                  { name: '911 Turbo' },
                  { name: '911 Turbo S' },
                ]
              },
              {
                name: 'Cayenne',
                mods: [
                  { name: 'Cayenne' },
                  { name: 'Cayenne Diesel' },
                  { name: 'Cayenne S' },
                  { name: 'Cayenne Turbo' },
                ]
              }
            ]
          },
          {
            name: 'Audi',
            icon: '/assets/images/marks/audi.svg',
            models: [
              {
                name: '100',
                mods: [
                  { name: '100' },
                  { name: '100 S4' },
                ]
              },
              {
                name: 'A5',
                mods: [
                  { name: 'A5' },
                  { name: 'A5 g-tron' },
                ]
              },

            ]
          },
          {
            name: 'BMW',
            icon: '/assets/images/marks/bmw.svg',
            models: [
              {
                name: 'X1',
                mods: [
                  { name: 'X1' },
                  { name: 'X1 16d' },
                  { name: 'X1 18d' },
                  { name: 'X1 18i' },
                  { name: 'X1 20d' },
                  { name: 'X1 20i' },
                  { name: 'X1 23d' },
                  { name: 'X1 28i' },
                ]
              },
              {
                name: 'X2',
                mods: [
                  { name: 'X2' },
                  { name: 'X2 16d' },
                  { name: 'X2 18d' },
                  { name: 'X2 18i' },
                  { name: 'X2 20d' },
                  { name: 'X2 20i' },
                  { name: 'X2 23d' },
                  { name: 'X2 28i' },
                ]
              },
              {
                name: 'X3',
                mods: [
                  { name: 'X3' },
                  { name: 'X3 16d' },
                  { name: 'X3 18d' },
                  { name: 'X3 18i' },
                  { name: 'X3 20d' },
                  { name: 'X3 20i' },
                  { name: 'X3 23d' },
                  { name: 'X3 28i' },
                ]
              },
            ]
          },
          {
            name: 'Mini',
            icon: '/assets/images/marks/mini.svg',
            models: [
              {
                name: 'Cabrio',
                mods: [
                  { name: 'Cabrio Cooper' },
                  { name: 'Cabrio Cooper D' },
                  { name: 'Cabrio Cooper S' },
                ]
              }
            ]
          },
        ]
      }
    }
  },
  methods: {
    toPriceFormat,
    setCurrentMark(mark) {
      this.selects.current.mark = mark;
      this.selects.step++;
    },
    setCurrentModel(model) {
      this.selects.current.model = model;
      this.selects.step++;
    },
    goBack() {
      this.selects.step--;
    },
    getModelWord(value = 0) {
      let text = '';

      if (value == 0) {
        text = 'Для всех моделей';
        return text;
      } else if (value == 1) {
        text = 'модель';
      } else if (value >= 2 && value <= 4) {
        text = 'модели';
      } else {
        text = 'моделей';
      }

      return value + ' ' + text;
    }
  },
  created() {
    this.tabs.current = this.tabs.list[0];

    let counter = 0;
    for(let i = 0; i < 3; i++) {
      this.analogs.push(Products[counter]);
      counter = counter == 0 ? 1 : 0;
    }
  },
  mounted() {

    let pagination = new Swiper(this.$refs.pagination, {
      slidesPerView: 'auto',
      spaceBetween: 10,
    });

    new Swiper(this.$refs.images, {
      thumbs: {
        swiper: pagination
      },
      modules: [Thumbs]
    });
  }
}
