export default {
  name: 'Filter',
  setup() {
    let isVisible = useState('isVisibleFilter', false);
    return {
      isVisible
    }
  },
  data() {
    return {
      max: {
        name: 'max',
        list: [
          { title: '10 мм', checked: false }, 
          { title: '15 мм', checked: false }, 
          { title: '20 мм', checked: false }, 
          { title: '25 мм', checked: false }, 
          { title: '30 мм', checked: false } 
        ]
      },
      price: {
        start: [2000, 8000],
        range: {
          min: 0,
          max: 10000 
        },
      },
      select: {
        lorem: {
          current: '',
          list: [ { name: '1' }, { name: '2' }, { name: '3' }]
        },
        min: {
          current: '',
          list: [ { name: '10' }, { name: '20' }, { name: '30' }]
        },
        max: {
          current: '',
          list: [ { name: '51' }, { name: '52' }, { name: '53' }]
        },
        other: {
          current: '',
          list: [ { name: '51' }, { name: '52' }, { name: '53' }]
        },
        other2: {
          current: '',
          list: [ { name: '51' }, { name: '52' }, { name: '53' }]
        },
        other3: {
          current: '',
          list: [ { name: '51' }, { name: '52' }, { name: '53' }]
        },
      },
      myauto: '',
      checks: {
        name: 'checks',
        list: [
          { title: 'Чекбокс', checked: false }
        ]
      },
      radios: {
        name: 'radios',
        list: ['Переключатель 1', 'Переключатель 2'],
        current: 'Переключатель 1'
      }
    }
  }
}
