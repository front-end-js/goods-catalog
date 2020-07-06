'use strict';

function display(outId, value) {
    let out = document.getElementById(outId);
    out.innerText = value;
}

function scan(outId1, outId2) {
    let carts = document.querySelectorAll('.col-md-3');
    let n = carts.length;
    display(outId1, n);

    let s = 0;
    let p = 0;
    for (let item of carts) {
        p = item.querySelector('h5').innerText;
        s += parseFloat(p);
    }
    display(outId2, s);
}