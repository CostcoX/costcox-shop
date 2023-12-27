import "@babel/polyfill";
import express from "express";
import fs from "fs";
import { StaticRouter } from "react-router-dom/server";
import ReactDOMServer from "react-dom/server";
import { Provider } from "react-redux";
import store from "../store/store";
import App from "../App";

const app = express();
app.use("/", express.static(__dirname));
const PORT = process.env.PORT;

const createReactApp = async (location) => {
  const reactApp = ReactDOMServer.renderToString(
    <Provider store={store}>
      <StaticRouter location={location}>
        <App />
      </StaticRouter>
    </Provider>
  );
  const html = await fs.promises.readFile(`${__dirname}/index.html`, "utf-8");
  const reactHtml = html.replace(
    '<div id="root"></div>',
    `<div id="root">${reactApp}</div>`
  );
  return reactHtml;
};

app.get("*", async (req, res) => {
  const indexHtml = await createReactApp(req.url);
  res.status(200).send(indexHtml);
});

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
