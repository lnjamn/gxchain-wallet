import Vue from 'vue';
import VueI18n from 'vue-i18n';
import { set_item, get_item } from '@/services/CommonService';

import en from './en-US';
import zh from './zh-CN';
import ko from './ko-KR';

Vue.use(VueI18n);

const messages = {
    'en-US': en,
    'zh-CN': zh,
    'ko-KR': ko
};

const numberFormats = {
    'en-US': {
        currency: {
            style: 'currency', currency: 'USD', currencyDisplay: 'symbol'
        }
    },
    'zh-CN': {
        currency: {
            style: 'currency', currency: 'CNY', currencyDisplay: 'symbol'
        }
    },
    'ko-KR': {
        currency: {
            style: 'currency', currency: 'USD', currencyDisplay: 'symbol'
        }
    }
};

const dateTimeFormats = {
    'en-US': {
        short: {
            year: 'numeric', month: 'short', day: 'numeric', hour12: true
        },
        long: {
            year: 'numeric',
            month: 'short',
            day: 'numeric',
            hour: 'numeric',
            minute: 'numeric',
            hour12: true
        }
    },
    'zh-CN': {
        short: {
            year: 'numeric', month: 'short', day: 'numeric', hour12: false
        },
        long: {
            year: 'numeric',
            month: 'short',
            day: 'numeric',
            hour: 'numeric',
            minute: 'numeric',
            hour12: false
        }
    },
    'ko-KR': {
        short: {
            year: 'numeric', month: 'short', day: 'numeric', hour12: true
        },
        long: {
            year: 'numeric',
            month: 'short',
            day: 'numeric',
            hour: 'numeric',
            minute: 'numeric',
            hour12: true
        },
        longlong: {
            year: 'numeric',
            month: 'short',
            day: 'numeric',
            hour: 'numeric',
            minute: 'numeric',
            second: 'numeric',
            hour12: true
        }
    }
};

let locale = get_item('_locale') || navigator.language;
locale = locale.split('-')[0].toLowerCase() + '-' + locale.split('-')[1].toUpperCase();
set_item('_locale', locale);

export default new VueI18n({
    locale: locale,
    fallbackLocale: 'en-US',
    numberFormats,
    dateTimeFormats,
    messages
});
