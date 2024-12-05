<?php

namespace App\Http\Controllers;

use App\Models\Produto;
use Illuminate\Http\Request;

class ProdutoController extends Controller
{

    public function index()
    {
        return Produto::all();
    }

    
    public function create()
    {
        //
    }

    
    public function store(Request $request)
    {
        return Produto::create($request->all());
    }

    public function show(Produto $produto)
    {
        return $produto;
    }


    public function edit(Produto $produto)
    {
        //
    }

    public function update(Request $request, Produto $produto)
    {
        $produto->update($request->all());
        
        return response()->json(['message' => 'Produto atualizado!', 'produto' => $produto], 200);
    }


    public function destroy(Produto $produto)
    {
        $produto->delete();
        return response()->json(['message' => 'Produto excluído!'], 200);
    }
}
