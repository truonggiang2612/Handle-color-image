const image = document.querySelector('img');
const filterControls = document.querySelectorAll('input[type=range]');

function applyFilter() {
    var computedFilter = '';
    filterControls.forEach((item, index) => {
        computedFilter += item.getAttribute('data-filter') + '(' + item.value + item.getAttribute('data-scale') + ')';
    });
    image.style.filter = computedFilter;
};

