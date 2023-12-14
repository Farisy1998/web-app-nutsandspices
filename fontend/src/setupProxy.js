const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = (app) => {
  app.use(
    createProxyMiddleware("/products", {
      target: "http://localhost:8080/",
      changeOrigin: true,
    })
  );
  app.use(
    createProxyMiddleware("/categories", {
      target: "http://localhost:8080/",
      changeOrigin: true,
    })
  );
  app.use(
    createProxyMiddleware("/addcustomer", {
      target: "http://localhost:8080/",
      changeOrigin: true,
    })
  );
  app.use(
    createProxyMiddleware("/getcart", {
      target: "http://localhost:8080/",
      changeOrigin: true,
    })
  );
  app.use(
    createProxyMiddleware("/addcart", {
      target: "http://localhost:8080/",
      changeOrigin: true,
    })
  );
};
