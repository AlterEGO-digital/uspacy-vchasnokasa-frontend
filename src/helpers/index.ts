export const isDev = process.env.NODE_ENV === 'development';

export const isStage = window.location.host.includes('staging.uspacy.tech');

export const DOMAIN = isDev || isStage ? 'https://test-vchasnokasa.alterego.biz.ua' : 'https://vchasnokasa-uspacy.alterego.digital';
