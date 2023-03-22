const express = require("express");
const {
  getAllHistorys,
  createHistory,
  getHistoryById,
  updateHistory,
  deleteHistory,
} = require("../controllers/HistoryController");
 
const router = express.Router();
 
router.route("/").get(getAllHistorys).post(createHistory);
router.route("/:id").get(getHistoryById).put(updateHistory).delete(deleteHistory);
 
module.exports = router;