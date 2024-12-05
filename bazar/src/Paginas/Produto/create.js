import axios from 'axios';
import { useRef, useState } from 'react';
import { Link } from 'react-router-dom';

export default function ProdutoCreate()
{
    const [status,setStatus] = useState("");
    const categoria = useRef("");
    const preco = useRef("");
    const material = useRef("");
    const estado = useRef("");
    const marca = useRef("");
    const descricao = useRef("");
    const cor = useRef("");

    return(
        <div>
            <h2>Cadastrar Produto</h2>
            <form onSubmit={ gravar }>
            Categoria: 
            <input
            ref={categoria}
            type="text"
            maxLength="70"
            required
            />
            Preço:
            <input
            ref={preco}
            type="number"
            step="0.01"
            required
            />
            Material:
            <input
            ref={material}
            type="text"
            maxLength="70"
            required
            />
            Estado:
            <input
            ref={estado}
            type="text"
            maxLength="50"
            required
            />
            Marca:
            <input
            ref={marca}
            type="text"
            maxLength="60"
            required
            />
            Descrição:
            <input
            ref={descricao}
            type="text"
            maxLength="200"
            required
            />
            Cor:
            <input
            ref={cor}
            type="text"
            maxLength="50"
            required
            />
                <button type='submit'>Enviar</button>
            </form>
            <h3>{status}</h3>
            <Link to='/produto'>Voltar</Link>
        </div>
    )

    async function gravar(e){
        e.preventDefault();
        try{
            const produto = {
                categoria: categoria.current.value,
                preco: parseFloat(preco.current.value),
                material: material.current.value,
                estado: estado.current.value,
                marca: marca.current.value,
                descricao: descricao.current.value,
                cor: cor.current.value
            };
            const resposta = await axios.post('http://127.0.0.1:8000/api/produtos', produto);
            setStatus("Produto cadastrado");
            console.log(resposta);
        } catch(erro){
            console.log("Erro ao cadastrar produto", erro);
            setStatus("Falha ao cadastrar");
        }
    }

}