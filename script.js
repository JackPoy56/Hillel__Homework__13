(() => {
    const inputValueEl = document.querySelector('#user__value');
    const btnAddItemEl = document.querySelector('#add__item');
    const listEl = document.querySelector('.list');
    const btnCheckAllEl = document.querySelector('#check__all');
    const btnDeleteAllEl = document.querySelector('#delete__all');

    function onAddToDoList(){
        let userValue = inputValueEl.value.trim();
        
        if (userValue !== '') {
            const newElLi = document.createElement('li');
            newElLi.innerText = userValue;
            
            const newElInputInLi = document.createElement('input');
            newElInputInLi.type = 'checkbox';

            const newBtnDelLi = document.createElement('button');
            newBtnDelLi.innerText = 'Delete line';

            listEl.append(newElLi);
            newElLi.append(newElInputInLi, newBtnDelLi);

            inputValueEl.value = ''; 

            function onAddStyleLineThrough(){  
                if (!newElInputInLi.checked) {
                    newElLi.classList.remove('line__through');               
                } else {
                    newElLi.classList.add('line__through');
                }
            }

            function onCheckAll(){
                const allInput = document.querySelectorAll('input');
        
                Array.from(allInput).forEach(e => {                    
                    e.checked = true;   
                });    
            }
          
            btnCheckAllEl.addEventListener('click', onCheckAll);
            btnCheckAllEl.addEventListener('click', onAddStyleLineThrough);

            newElInputInLi.addEventListener('click', onAddStyleLineThrough);             

            newBtnDelLi.addEventListener('click', () => newElLi.remove()); 

            btnDeleteAllEl.addEventListener('click', () => newElLi.remove());
        } else {
            alert('There is nothing to add!');
        }   
    }

    btnAddItemEl.addEventListener('click', onAddToDoList);

    inputValueEl.addEventListener('keydown', e => {
        if (e.code === 'Enter') onAddToDoList();        
    });

})();