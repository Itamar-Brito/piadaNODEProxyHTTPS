const express = require("express");
const axios = require("axios");

const app = express();

// Definir a rota para o proxy
app.get("/api/get-piadas", async (req, res) => {
    try {
        const response = await axios.get("http://piada.atwebpages.com/php_action/api/get-piadas.php");
        res.json(response.data);
    } catch (error) {
        console.error("Erro no proxy:", error.message);
        res.status(500).json({ error: "Erro ao conectar ao backend" });
    }
});

// Iniciar o servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
