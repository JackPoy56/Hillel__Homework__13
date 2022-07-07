(() => {
    const inputTextEl = document.querySelector('#text');
    const btnEl = document.querySelector('.btn');
    const listEl = document.querySelector('.list');
    const btnCheckAll = document.querySelector('#checkAll');
    const btnDeleteAll = document.querySelector('#deleteAll');

    function addToDoList(){
        let userValue = inputTextEl.value.trim();
        
        if (userValue !== '') {
            const newElLi = document.createElement('li');
            newElLi.innerText = userValue;
            
            const newElInputInLi = document.createElement('input');
            newElInputInLi.type = 'checkbox';

            const newBtnDelLi = document.createElement('button');
            newBtnDelLi.innerText = 'Delete line';

            listEl.append(newElLi);
            newElLi.append(newElInputInLi, newBtnDelLi);

            inputTextEl.value = ''; 

            function addStyleLineThrough(){  
                if (!newElInputInLi.checked) {
                    newElLi.classList.remove('line__through');               
                } else {
                    newElLi.classList.add('line__through');
                }
            }

            function addCheckAll(){
                const allInput = document.querySelectorAll('input');
        
                Array.from(allInput).forEach(e => {                    
                    e.checked = true;   
                });    
            }
          
            btnCheckAll.addEventListener('click', addCheckAll);
            btnCheckAll.addEventListener('click', addStyleLineThrough);

            newElInputInLi.addEventListener('click', addStyleLineThrough);             

            newBtnDelLi.addEventListener('click', () => newElLi.remove()); 

            btnDeleteAll.addEventListener('click', () => newElLi.remove());
        } else {
            alert('There is nothing to add!');
        }   
    }

    btnEl.addEventListener('click', addToDoList);

    inputTextEl.addEventListener('keydown', e => {
        if (e.code === 'Enter') addToDoList();        
    });

})();