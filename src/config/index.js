const URL_DEFAULT = window.location.hostname.includes('localhost')
? 'http://localhost:8080'
: 'https://goiasflix.herokuapp.com';

export default {
    URL_DEFAULT,
};