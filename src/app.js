const express = require('express')
const app = express()
const ProductManager = require('./ProductManager.js')
const path = 'products.json'
const Productos = new ProductManager(path);

app.get('/products',(req,res) =>{

    let {limit} = req.query;
    const products = Productos.getProducts()
    let response = []
    let contador = 0
    if(limit > 0){
        for (const i of products) {
            contador+=1
            if (contador <= limit){
                response.push(i)
            }
        }
        console.log("response",response)
        res.send(response)
    }else{
        res.send(products)
        console.log("entra uno")
    }
    
})

app.get('/products/:pid', (req,res)=>{
    const idProduct = req.params.pid
    res.send(Productos.getProductById(parseInt(idProduct)))
})

app.listen(3000,err =>{
    console.log("escuchando el perto 3000")
})
