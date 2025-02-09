const dropdownActive = document.querySelector('.dropdown__value');
const dropdownList= document.querySelector('.dropdown__list')
const dropdownItem = Array.from(document.querySelectorAll('.dropdown__item'));

function openElements (){
    dropdownList.classList.toggle('dropdown__list_active')
}

dropdownActive.addEventListener("click", openElements)

dropdownItem.forEach(item => item.addEventListener("click", (ev) => {
    ev.preventDefault()
    openElements ()
    dropdownActive.textContent = item.textContent
    
}));
