import "@babel/polyfill";
import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import fs from "fs";
import { StaticRouter } from "react-router-dom/server";
import ReactDOMServer from "react-dom/server";
import App from "../client/App";
import indexRouter from "./routes/index";
import { errorHandler, notFound } from "./middleware/errorHandler";

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use("/", express.static(__dirname));
app.use(cookieParser());

const PORT = process.env.PORT;

const createReactApp = async (location) => {
  const reactApp = ReactDOMServer.renderToString(
    <StaticRouter location={location}>
      <App />
    </StaticRouter>
  );
  const html = await fs.promises.readFile(`${__dirname}/index.html`, "utf-8");
  const reactHtml = html.replace(
    '<div id="root"></div>',
    `<div id="root">${reactApp}</div>`
  );
  return reactHtml;
};

app.use("/api", indexRouter);
app.get("*", async (req, res) => {
  const indexHtml = await createReactApp(req.url);
  res.status(200).send(indexHtml);
});
app.use(errorHandler);
app.use(notFound);

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
