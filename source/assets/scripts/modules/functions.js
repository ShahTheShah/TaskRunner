'use strict';

// (() => {
//     let webP = new Image();
//     webP.onload = webP.onerror = () => (webP.height == 2) == true
//         ? document.querySelector('body').classList.add('webp')
//         : document.querySelector('body').classList.add('no-webp');
//     webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
// })();

const functions = {
    hello: name => `Hello, ${name}!`,
};

export default functions;