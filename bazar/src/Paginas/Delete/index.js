import axios from "axios";
import { useParams, Link } from "react-router-dom";
import { useState } from "react";

export default function ProdutoDelete() {
    const { id } = useParams(); // Obtém o id do produto da URL
    const [status, setStatus] = useState("");

    const excluirProduto = async () => {
        try {
            await axios.delete(`http://127.0.0.1:8000/api/produtos/${id}`);
            setStatus("Produto excluído com sucesso!");
        } catch (erro) {
            setStatus("Falha ao excluir o produto.");
        }
    };

    return (
        <div>
            <h2>Excluir Produto</h2>
            <p>Deseja excluir o produto?</p>
            <button onClick={excluirProduto}>Sim</button>
            <h3>{status}</h3>
            <Link to="/produto">Voltar</Link>
        </div>
    );
}