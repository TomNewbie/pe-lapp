const path = require("path").join(__dirname, "..", "..", "server", ".env");
const buf = require("fs").readFileSync(path);
const { SERVER_DOMAIN, PORT } = require("dotenv").parse(buf);

const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    "/api",
    createProxyMiddleware({
      target: `${SERVER_DOMAIN}:${PORT}`,
      changeOrigin: true,
    })
  );
};
