import $ from 'jquery';

import 'jquery.maskedinput/src/jquery.maskedinput';
import 'jquery-validation/dist/jquery.validate';
import 'jquery-validation/dist/localization/messages_ru';

$.validator.addMethod('condition', function(value, element, condition) {
    if (typeof condition !== 'function') {
        throw new Error('"condition" rule must return a function');
    }

    return this.optional(element) || condition(value);
});


const cbForm = $('.contact-form');
const phone = $('[name="phone"]');
const fieldErrorClassName = 'contact-form__field-error';
const fieldValidClassName = 'contact-form__field-valid';
const selectedFiles = [];

phone.mask('+380 (99) 999-99-99', { autoclear: false });

cbForm.validate({
    rules: {
        name: {
            required: true,
            condition: () => (value) => {
                const expression = new RegExp(/^[а-яА-ЯёЁ\s]+$/);
                if(expression.test(value)) {
                    return expression.test(value);
                };
            },
            minlength: 3
        },
        phone: {
            required: true,
            condition: () => (value) => value.indexOf('_') === -1
        },
        email: {
            required: true,
            condition: () => (value) => {
                const expression = new RegExp(/^([a-zA-Z0-9_-]+\.)*[a-zA-Z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/);
                return expression.test(value);
            }
        },
        city: {
            required: true,
            condition: () => (value) => {
                const expression = new RegExp(/^[а-яА-ЯёЁ\s]+$/);
                if(expression.test(value)) {
                    return expression.test(value);
                };
            },
            minlength: 3
        }
    },

    messages: {
        name: {
            condition: 'Пожалуйста, введите Ваше имя.'
        },
        email: {
            condition: 'Пожалуйста, введите правильный адрес Вашей электронной почты.'
        },
        phone: {
            condition: 'Пожалуйста, введите правильный номер Вашего телефона.'
        },
        city: {
            condition: 'Пожалуйста, введите Ваш город по-русски.'
        }
    },

    highlight: (element) => {
        $(element).addClass(fieldErrorClassName).removeClass(fieldValidClassName);
    },

    unhighlight: (element) => {fieldErrorClassName
        $(element).removeClass(fieldErrorClassName).addClass(fieldValidClassName);
    },

    errorPlacement: function(error, element) {
        error.addClass('contact-form__error-message');
        error.insertAfter(element);
    },

    submitHandler: function(form) {
        const cbData = cbForm.serializeArray().reduce((result, item) => {
            result[item.name] = item.value;
            return result;
        }, {});


        $.post('mail.php', cbData).done(function(response) {
            console.log(response);
            openThanksModal();
            cbForm.trigger('reset');
        });

    }
});