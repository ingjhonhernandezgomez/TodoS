import react from 'react';
import React from 'react';

//Esto es un Custom Hooks - Abstracción del codigo
function useLocalStorage(itemName, initialValue){

    const [item, setItem] = React.useState(initialValue);
    const [loading, setLoading] = React.useState(true);
    const [error, setError] = React.useState(false);
    
    React.useEffect(()=>{
        setTimeout(()=>{
            try{

                const localStorageItem = localStorage.getItem(itemName);
                let parsedItem;

                if (!localStorageItem) {
                    localStorage.setItem(itemName, JSON.stringify(initialValue));
                    parsedItem = initialValue;
                } else {
                    parsedItem = JSON.parse(localStorageItem);
                    setItem(parsedItem);
                }

                setLoading(false);

            }catch (e){
                setLoading(false);
                setError(true);
            }
        },2000);
    },[]);

    const saveItem = (newItem) => {
        localStorage.removeItem(itemName);
        localStorage.setItem(itemName, JSON.stringify(newItem));
        setItem(newItem);
    }

    return {item, saveItem, loading, error};

}

export {useLocalStorage};

/* 
localStorage.removeItem('TODOS_V1');

const defaultTodos = [
  {text: 'prueba1', completed:false},
  {text: 'prueba2', completed:true},
  {text: 'prueba3', completed:false},
  {text: 'prueba4', completed:true}
]

localStorage.setItem('TODOS_V1',JSON.stringify(defaultTodos)); */
