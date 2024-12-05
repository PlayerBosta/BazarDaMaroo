import axios from "axios";
import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

export default function ProdutoUpdate() {
    const { id } = useParams();
    const [produto, setProduto] = useState(null);
    const [status, setStatus] = useState("");
    const [categoria, setCategoria] = useState("");
    const [preco, setPreco] = useState("");
    const [material, setMaterial] = useState("");
    const [estado, setEstado] = useState("");
    const [marca, setMarca] = useState("");
    const [descricao, setDescricao] = useState("");
    const [cor, setCor] = useState("");

    useEffect(() => {
        if (!id) return;

        async function consultarProduto() {
            try {
                const resposta = await axios.get(`http://127.0.0.1:8000/api/produtos/${id}`);
                console.log(resposta.data);

                if (resposta.data) {
                    setProduto(resposta.data);
                    setCategoria(resposta.data.categoria || "");
                    setPreco(resposta.data.preco || "");
                    setMaterial(resposta.data.material || "");
                    setEstado(resposta.data.estado || "");
                    setMarca(resposta.data.marca || "");
                    setDescricao(resposta.data.descricao || "");
                    setCor(resposta.data.cor || "");
                }
            } catch (erro) {
                console.log(erro);
                setStatus("Erro ao buscar o produto.");
            }
        }

        consultarProduto();
    }, [id]);

    const atualizarProduto = async (e) => {
        e.preventDefault();
        try {
            const produtoAtualizado = {
                categoria,
                preco,
                material,
                estado,
                marca,
                descricao,
                cor,
            };

            await axios.put(`http://127.0.0.1:8000/api/produtos/${id}`, produtoAtualizado);
            setStatus("Produto atualizado com sucesso!");
        } catch (erro) {
            console.log(erro);
            setStatus("Falha ao atualizar o produto.");
        }
    };

    return (
            <div>
                <h2>Editar Produto</h2>
                <form onSubmit={atualizarProduto}>
                Categoria: <input
            type="text"
            value={categoria}
            onChange={(e) => setCategoria(e.target.value)} 
            required
            />
            Preço:
            <input
            type="number"
            value={preco}
            onChange={(e) => setPreco(e.target.value)} 
            required
            />
            Material:
            <input
            type="text"
            value={material}
            onChange={(e) => setMaterial(e.target.value)} 
            required
            />
            Estado:
            <input
            type="text"
            value={estado}
            onChange={(e) => setEstado(e.target.value)} 
            required
            />
            Marca:
            <input
            type="text"
            value={marca}
            onChange={(e) => setMarca(e.target.value)} 
            required
            />
            Descrição:
            <input
            type="text"
            value={descricao}
            onChange={(e) => setDescricao(e.target.value)} 
            required
            />
            Cor:
            <input
            type="text"
            value={cor}
            onChange={(e) => setCor(e.target.value)} 
            required
            />
                    <button type="submit">Editar</button>
                </form>
                <h3>{status}</h3>
                <Link to="/produto">Voltar</Link>
            </div>
        );
}
