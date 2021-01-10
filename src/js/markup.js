import fetchCountries from './fetchCountries';
// import refs from './refs.js';
import { success, info, error } from './pnotify.js';
import oneCountryMarkup from '../templates/oneCountry.hbs';
import upToTenCountriesMarkup from '../templates/upToTenCountries.hbs';

const refs = {
    input: document.querySelector('#js-input'),
    output: document.querySelector('#js-output'),
};
const _ = require('lodash');
refs.input.value = '';
let resultArray = [];

const url = 'https://restcountries.eu/rest/v2/name/';
const debounced = _.debounce(() => {
    if (refs.input.value !== "") {
        fetchCountries(url + refs.input.value.toLowerCase())
            .then(data => {              
             refs.output.innerHTML=oneCountryMarkup(data)
            })
    };
}, 2000);



const tooManyCountriesAlert = error({
  text: "Too many matches found. Please enter a more specific query!",
  type: 'error'
});

console.log(tooManyCountriesAlert);



// const menuListRef = document.querySelector('ul.js-menu');
// const markup = menuTemplate(menuItems);
// menuListRef.innerHTML = markup; //будет перезаписан весь список
refs.input.addEventListener('input', debounced);
refs.input.addEventListener('submit', event => event.preventDefault());