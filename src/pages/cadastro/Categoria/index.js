import React, { useState, useEffect } from 'react';
import PageDefault from '../../../components/PageDefault';
import { Link } from 'react-router-dom';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button/button';

function CadastroCategoria() {

    const valoresIniciais = {
        nome: '',
        descricao: '',
        cor: '',
    }

    const [categorias, setCategorias] = useState([]);
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

    useEffect(() => {
        if(window.location.href.includes('localhost')) {
          const URL = window.location.hostname.includes('localhost')
          ? 'http://localhost:8080/categorias'
          : 'https://goiasflix.herokuapp.com/categorias'  
          fetch(URL)
           .then(async (respostaDoServer) =>{
            if(respostaDoServer.ok) {
              const resposta = await respostaDoServer.json();
              setCategorias(resposta);
              return; 
            }
            throw new Error('Não foi possível pegar os dados');
           })
        }    
      }, []);

    return (
        <PageDefault>
            <h1>Cadastro de Categoria: {valores.nome}</h1>

            <form onSubmit={function handleSubmit(evento) {
                evento.preventDefault();
                setCategorias([
                    ...categorias,
                    valores
                ]);
                setValores(valoresIniciais)
            }}>
                {/* State */}

                <FormField     
                    label="Nome"
                    type="text"
                    name="nome"
                    value={valores.nome}
                    onChange={handleChange}
                />

                <FormField
                    label="Descrição"
                    type="textarea"
                    value={valores.descricao}
                    name="descricao"
                    onChange={handleChange}
                />

                <FormField
                    label="Cor"
                    type="color"
                    value={valores.cor}
                    name="cor"
                    onChange={handleChange}
                />

                <Button>
                    Cadastrar
                </Button>
            </form>

            <ul>
                {categorias.map((categoria, indice) => {
                    return (
                        <li key={`${categoria}${indice}`}>
                            {categoria.nome}
                        </li>
                    )
                })}
            </ul>

            <Link to="/">
                Voltar para a home
            </Link>
        </PageDefault>
    );
}

export default CadastroCategoria;