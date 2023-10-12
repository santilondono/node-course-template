import Express from "express";

//Import Routes
import { usersRouter } from "./routes/usersRoutes.js";

const app = Express();
const port = 3000;

//App Routes

app.use('/api/users',usersRouter)

app.use('/', (req, res) => {
	res.send('Hello World!');
})

app.listen(port, () => {
	console.log(`Server running on port http://localhost:${port}`);
});