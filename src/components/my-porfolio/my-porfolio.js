import $ from 'jquery';
window.$ = window.jQuery = require('jquery');


$('.my-portfolio__works-menu li a').click(function() {
    return false;
});

const portfolioWorks = document.querySelector('.my-portfolio__works');
const portfolioWorksLinks = document.querySelectorAll('.my-portfolio__work');

let items = '',
    it = '';
for (let item of portfolioWorksLinks) {
    it = item.getAttribute('data-filter').replace(/\s/gi,'');
    items += it + ',';
}

items = items.split(',');
items.pop();

const labels = new Set(items);

const worksMenu = document.querySelector('.my-portfolio__works-menu');

for (let label of labels) {
    let li = document.createElement('li');
    li.classList.add('my-portfolio__works-menu-item');
    worksMenu.append(li);
    li.innerHTML = '<a href="#" data-target="' + label + '" class="my-portfolio__works-menu-link">' + label + '</a>';
}

const worksMenuLabels = document.querySelectorAll('.my-portfolio__works-menu-item');
worksMenu.onclick = function(e){
    e.preventDefault();
    let target = e.target.getAttribute('data-target');
    e.target.classList.add('current-link');

    for (let link of portfolioWorksLinks) {
        link.classList.add('hidden');
    }
    for (let link of portfolioWorksLinks) {
         if ( link.getAttribute('data-filter').indexOf(target) >= 0 ) {
             link.classList.remove('hidden');
        }
    }
}

