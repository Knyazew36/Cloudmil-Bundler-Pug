import 'parsleyjs';
import $ from 'jquery';
import Inputmask from 'inputmask';

export const parsleyFunc = () => {
  $('form').parsley({
    errorsContainer: function (ParsleyField) {
      return ParsleyField.$element.closest('.select-wrapper');
    },
  });

  Inputmask({ mask: '+7 (999) 999-99-99', showMaskOnHover: false }).mask(
    '[data-mask-phone]'
  );

  window.Parsley.addValidator('phoneRequired', {
    validateString: function (value) {
      if (value === null || value === undefined) {
        return false;
      } else {
        var digits = value.replace(/\D/g, '');
        return digits.length === 11;
      }
    },
    messages: {
      ru: 'Пожалуйста, введите полный номер телефона.',
    },
  });

  $('[data-mask-phone]').attr('data-parsley-phone-required', '');

  Parsley.addMessages('ru', {
    defaultMessage: 'Некорректное значение',
    type: {
      email: 'Введите адрес электронной почты',
      url: 'Введите URL адрес',
      number: 'Введите число',
      integer: 'Введите целое число',
      digits: 'Введите только цифры',
      alphanum: 'Введите буквенно-цифровое значение',
    },
    notblank: 'Это поле должно быть заполнено',
    required: 'Обязательное поле',
    pattern: 'Это значение некорректно',
    min: 'Это значение должно быть не менее чем %s',
    max: 'Это значение должно быть не более чем %s',
    range: 'Это значение должно быть от %s до %s',
    minlength: 'Минимум %s символов',
    maxlength: 'Это значение должно содержать не более %s символов',
    length: 'Это значение должно содержать от %s до %s символов',
    mincheck: 'Выберите не менее %s значений',
    maxcheck: 'Выберите не более %s значений',
    check: 'Выберите от %s до %s значений',
    equalto: 'Пароли не совпадают',
  });

  Parsley.setLocale('ru');
};
