const app = require("./app")
require("dotenv").config();

const port = process.env.PORT || 3000;

app.listen(port, '0.0.0.0', () => {
    console.log(`Servidor rodando na porta ${port}`);
});