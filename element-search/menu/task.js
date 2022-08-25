const link = Array.from(document.querySelectorAll('.menu__link'))

for (let i = 0; i < link.length; i++) {

    link[i].onclick = () => {
     
        let parent = link[i].parentElement.querySelector('.menu_sub')
               
        if (parent){
          parent.classList.toggle('menu_active'); 
          return false
        };
    };    
};
