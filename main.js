"use strict";
window.onload = () => {
    const scroll = skrollr.init({
        constants: {
            box: '100p'
        },

        render: function(data) {
            console.log(data.curTop)
        },

    });

    skrollr.menu.init(scroll, {
        updateUrl: false
    })



}
