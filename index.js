import express from "express";

import { renderToString } from "react-dom/server";
import App from "./components/App.jsx";

const app = express();

const PORT = process.env.PORT || 3001;

app.get("/", (req, res) => {
  res.send(`<html>
  <body>${renderToString(<App />)}</body>
  </html>`);
});

app.listen(PORT, () => {
  console.log(`Listening on Port ${PORT}`);
});
