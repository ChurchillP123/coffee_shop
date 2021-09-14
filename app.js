let bagels = document.getElementById('bagels');
let tea = document.getElementById('tea');
let coffee = document.getElementById('coffee');
let form = document.getElementById('shop');
let total = document.getElementById('total');

form.addEventListener('submit', function(e){
    e.preventDefault();
    total.value = Number((3 * bagels.value) + (7 * tea.value) + (11 * coffee.value)).toFixed(2);
});