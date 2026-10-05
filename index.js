import express from "express";
import fs from "fs"; // permite trabajar con file system

const app = express();

const readData = () => {
    try {
        const data = fs.readFileSync("./db.json");
        return JSON.parse(data);
    } catch (error) {
        console.log(error);
    }
};

const writeData = (data) => {
    try {
        fs.writeFileSync("./db.json", JSON.stringify(data));
    } catch (error) {
        console.log(error);
    }
};


// RUTA PRINCIPAL
app.get("/", (req, res) => {
    res.send("Bienvenido a mi primer api con Node JS !!");
});


// MOSTRAR TODA LA MÚSICA
app.get("/Musica", (req, res) => {
    const data = readData();
    res.json(data.Musica);
});


app.listen(3000, () => {
    console.log("Servidor escuchando por el puerto 3000");
});


// Una función callback => (o función de devolución de llamada) es una función que se
// pasa como argumento a otra función, con la idea de que se ejecute ("se llame
// de vuelta") más tarde, cuando termine una tarea o suceda un evento.