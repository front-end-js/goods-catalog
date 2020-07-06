'use strict';

let count = 0;
let amount = 0;

window.addEventListener('load', () => {

    scan('num1', 'amo1');

    const row = document.querySelector('#main_box');
    row.addEventListener('click', () => {
        let target = event.target;
        if (target == '[object HTMLButtonElement]') {
            let parent = target.parentNode;
            let price_box = parent.querySelector('h5');
            let price = parseFloat(price_box.innerText);
            count++;
            amount += price;
            display('num2', count);
            display('amo2', amount);
            window.scrollTo(0, 0);
        }
    })

});