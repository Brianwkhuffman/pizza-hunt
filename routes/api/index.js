const router = require("express").Router();
const pizzaRouter = require("./pizza-routes");

// add prefix of `/pizza` to routes creatd in `pizza-routes.js`

router.use("/pizzas", pizzaRouter);

module.exports = router;
