import { useState } from 'react';

export function useForm(valoresIniciais){
    
    const [valores, setValores] = useState(valoresIniciais);

    function setValor(chave, valor) {
        setValores({
            ...valores,
            [chave]: valor,
        })
    }

    function handleChange(evento) { 
        setValor(
            evento.target.getAttribute('name'),
            evento.target.value
        );
    }

    function clearForm() {
        setValores(valoresIniciais);
    }

    return {
        valores,
        handleChange,
        clearForm,
    }

}

export default useForm;