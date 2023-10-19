// Funcion que maneja el metodo GET de la ruta /api/products
export function getProducts(req, res){
    res.send("GET /api/products");
}

//Funcion que maneja el metodo GET de la ruta /api/products/:id
export function getProductById(req, res){
    res.send("GET /api/products/:id");
}

//Funcion que maneja el metodo PUT de la ruta /api/products/:id
export function putProduct(req, res){
    res.send("PUT /api/products/:id");
}

//Funcion que maneja el metodo POST de la ruta /api/products
export function postProduct(req, res){
    res.send("POST /api/products");
}

//Funcion que maneja el metodo DELETE de la ruta /api/products/:id
export function deleteProduct(req, res){
    res.send("DELETE /api/products/:id");
}