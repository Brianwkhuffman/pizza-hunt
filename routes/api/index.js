const router = require("express").Router();
const pizzaRouter = require("./pizza-routes");
const commentRouter = require("./comment-routes");

// add prefix of `/pizza` to routes creatd in `pizza-routes.js`

router.use("/comments", commentRouter);

router.use("/pizzas", pizzaRouter);

module.exports = router;
