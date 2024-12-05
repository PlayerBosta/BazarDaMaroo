import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import './produto.scss';
export default function Produto(){
    const [produtos, setProdutos] = useState([])
    useEffect(
        function(){
            async function consultar() {
                const resposta = await axios.get("http://127.0.0.1:8000/api/produtos");
                console.log(resposta)
                setProdutos(resposta.data)
            }
            consultar();
        }
        ,[]
    )
    return(
        <div>
            <Link to='/produto/create'>Novo</Link>
            <table>
                <thead><tr><th>     Categoria        </th><th>       Preço      </th><th>     Material        </th>
                <th>        Estado      </th><th>       Marca      </th><th>        Descrição       </th><th>       Cor        </th></tr></thead>
                <tbody>
                    {produtos==null ? null : produtos.map (
                        (produto) => 
                            <tr key={produto.id}>
                                <td>{produto.categoria}</td>
                                <td>{produto.preco}</td>
                                <td>{produto.material}</td>
                                <td>{produto.estado}</td>
                                <td>{produto.marca}</td>
                                <td>{produto.descricao}</td>
                                <td>{produto.cor}</td>
                                <td><Link to={"/produto/update/" + produto.id}>Alterar</Link></td>
                                <td><Link to={"/produto/delete/" + produto.id}>Excluir</Link></td>
                                </tr>
                    )}
                </tbody>
            </table>
            <Link to="/">Voltar</Link>
        </div>   
    )
}