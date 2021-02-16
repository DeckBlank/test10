import dotenv from "dotenv";
dotenv.config();
import express from "express";

const http = express();

http.use(express.json());
http.use(express.static("./productosfront/dist"));

http.get("/productos/vista", function (req, res) {
  let path = "index.html";
  res.sendFile(path, { root: "./productosfront/dist" });
});

const PORT = process.env.PORT || 8080;

const server = http.listen(PORT, () => {
  console.log(`Aplicacion en puerto ${PORT}`);
});

import { productos } from "./routes";

http.use("/api/productos", productos);
