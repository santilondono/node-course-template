//Funcion que maneja el metodo GET de la ruta /api/users
export function getUsers(req, res) {
  res.send("GET /api/users");
}

//Funcion que maneja el metodo GET de la ruta /api/users/:id
export function getUserById(req, res) {
  res.send("GET /api/users/:id");
}

//Funcion que maneja el metodo PUT de la ruta /api/users/:id
export function putUser(req, res) {
  res.send("PUT /api/users/:id");
}

//Funcion que maneja el metodo POST de la ruta /api/users
export function postUser(req, res) {
  res.send("POST /api/users");
}

//Funcion que maneja el metodo DELETE de la ruta /api/users/:id
export function deleteUser(req, res) {
  res.send("DELETE /api/users/:id");
}   