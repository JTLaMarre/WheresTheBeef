const router = require("express").Router();
const oosRoutes = require("./oos");

// oos routes
router.use("/oos", oosRoutes);

module.exports = router;