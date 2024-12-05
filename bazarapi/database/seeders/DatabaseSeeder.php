<?php

namespace Database\Seeders;


use Illuminate\Database\Seeder;
use App\Models\Produto;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        Produto::create(['categoria'=> 'roupa', 'preco'=> 10.1, 'material'=> 'algodao', 'estado'=> 'novo', 'marca'=> 'gucci', 'descricao'=> 'Camisa', 'cor'=> 'preta']);
        Produto::create(['categoria'=> 'movel', 'preco'=> 20.2, 'material'=> 'couro', 'estado'=> 'usado', 'marca'=> 'MobilFerreira', 'descricao'=> 'Sofa', 'cor'=> 'rosa']);
        Produto::create(['categoria'=> 'brinquedo', 'preco'=> 30.3, 'material'=> 'plastico', 'estado'=> 'novo', 'marca'=> 'Mattel', 'descricao'=> 'MaxSteel', 'cor'=> 'vermelho']);
        Produto::create(['categoria'=> 'eletrodomestico', 'preco'=> 40.4, 'material'=> 'aluminio', 'estado'=> 'usado', 'marca'=> 'RubaoEletronicos', 'descricao'=> 'Forno', 'cor'=> 'bege']);
        Produto::create(['categoria'=> 'luminaria', 'preco'=> 50.5, 'material'=> 'plastico', 'estado'=> 'novo', 'marca'=> 'IluminaBastante', 'descricao'=> 'Lampada', 'cor'=> 'branca']);
        Produto::create(['categoria'=> 'ferramenta', 'preco'=> 60.6, 'material'=> 'madeira', 'estado'=> 'usado', 'marca'=> 'ZeColmeiaFerramentas', 'descricao'=> 'Martelo', 'cor'=> 'marrom']);
        Produto::create(['categoria'=> 'utensilios', 'preco'=> 70.7, 'material'=> 'prata', 'estado'=> 'novo', 'marca'=> 'LePrate', 'descricao'=> 'Garfo', 'cor'=> 'prata']);

    }
}
