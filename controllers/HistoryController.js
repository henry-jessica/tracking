const historyService = require("../services/HistoryService");
 
exports.getAllHistorys = async (req, res) => {
  try {
    const historys = await historyService.getAllHistory();
    res.json({ data: historys, status: "success" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
 
exports.createHistory = async (req, res) => {
  try {
    console.log('req.body', req.body);
    const history = await historyService.createHistory(req.body);
    res.json({ data: history, status: "success" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
 
exports.getHistoryById = async (req, res) => {
  try {
    const history = await historyService.getHistoryById(req.params.id);
    res.json({ data: history, status: "success" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
 
exports.updateHistory = async (req, res) => {
  try {
    const history = await historyService.updateHistory(req.params.id, req.body);
    res.json({ data: history, status: "success" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
 
exports.deleteHistory = async (req, res) => {
  try {
    const history = await historyService.deleteHistory(req.params.id);
    res.json({ data: history, status: "success" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};