export const numberToWords = (num: number): string => {
  const ones = [
    '',
    'один',
    'два',
    'три',
    'четыре',
    'пять',
    'шесть',
    'семь',
    'восемь',
    'девять',
    'десять',
    'одиннадцать',
    'двенадцать',
    'тринадцать',
    'четырнадцать',
    'пятнадцать',
    'шестнадцать',
    'семнадцать',
    'восемнадцать',
    'девятнадцать',
  ];

  const tens = [
    '',
    '',
    'двадцать',
    'тридцать',
    'сорок',
    'пятьдесят',
    'шестьдесят',
    'семьдесят',
    'восемьдесят',
    'девяносто',
  ];

  const hundreds = [
    '',
    'сто',
    'двести',
    'триста',
    'четыреста',
    'пятьсот',
    'шестьсот',
    'семьсот',
    'восемьсот',
    'девятьсот',
  ];

  if (num < 20) {
    return ones[num];
  } else if (num < 100) {
    const ten = Math.floor(num / 10);
    const one = num % 10;
    return `${tens[ten]} ${ones[one]}`.trim();
  } else if (num < 1000) {
    const hundred = Math.floor(num / 100);
    const remainder = num % 100;
    return `${hundreds[hundred]} ${numberToWords(remainder)}`.trim();
  } else {
    return 'Число вне диапазона';
  }
};

export const timeToWords = (
  value: number,
  unit: 'hours' | 'minutes' | 'seconds',
): string => {
  const getPlural = (
    num: number,
    one: string,
    few: string,
    many: string,
  ): string => {
    if (num % 10 === 1 && num % 100 !== 11) {
      return one;
    } else if (
      num % 10 >= 2 &&
      num % 10 <= 4 &&
      (num % 100 < 10 || num % 100 >= 20)
    ) {
      return few;
    } else {
      return many;
    }
  };

  switch (unit) {
    case 'hours':
      return `${value} ${getPlural(value, 'час', 'часа', 'часов')}`;
    case 'minutes':
      return `${value} ${getPlural(value, 'минута', 'минуты', 'минут')}`;
    case 'seconds':
      return `${value} ${getPlural(value, 'секунда', 'секунды', 'секунд')}`;
    default:
      return `${value}`;
  }
};
