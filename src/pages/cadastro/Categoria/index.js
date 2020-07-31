import React, { useState } from 'react';
import PageDefault from '../../../components/PageDefault';
import { Link } from 'react-router-dom';
import FormField from '../../../components/FormField';

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
        const { getAttribute , value} = evento.target; 
        setValor(
            getAttribute('name'), 
            value
        )
    }

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
                    value={valores.nome}
                    name="nome"
                    onChange={handleChange}
                />

                <FormField
                    label="Descrição"
                    type="text"
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

                <button>
                    Cadastrar
                </button>
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