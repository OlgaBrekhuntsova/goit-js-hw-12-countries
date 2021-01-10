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
const url = 'https://restcountries.eu/rest/v2/name/';
const debouncedSearch = _.debounce(() => {
    if (refs.input.value !== "") {
        fetchCountries(url + refs.input.value.toLowerCase())
            .then(data => {searchMarkup(data)})
            .catch(() => {
error({
title:"No matches!",
     text: "Please try another query.",
     type: 'error'
 });
     refs.output.innerHTML = "";
 })
};
}, 500);

const searchMarkup = function (data) {
    if (data.length === 1) { refs.output.innerHTML = oneCountryMarkup(data) }
    else
    if (data.length > 1 & data.length <= 10) { refs.output.innerHTML = upToTenCountriesMarkup(data) }
    else if (data.length > 10) {
            error({
                title: "Too many matches found!",
                text: "Please enter a more specific query.",
                type: 'error'
            });
            refs.output.innerHTML = "";
        };
}

refs.input.addEventListener('input', debouncedSearch);
refs.input.addEventListener('submit', event => event.preventDefault());