//Funcion que maneja el metodo GET de la ruta /api/users
function getUsers(req, res) {
  res.send("GET /api/users");
}

//Funcion que maneja el metodo GET de la ruta /api/users/:id
function getUserById(req, res) {
  res.send("GET /api/users/:id");
}

//Funcion que maneja el metodo PUT de la ruta /api/users/:id
function putUser(req, res) {
  res.send("PUT /api/users/:id");
}

//Funcion que maneja el metodo POST de la ruta /api/users
function postUser(req, res) {
  res.send("POST /api/users");
}

//Funcion que maneja el metodo DELETE de la ruta /api/users/:id
function deleteUser(req, res) {
  res.send("DELETE /api/users/:id");
}   