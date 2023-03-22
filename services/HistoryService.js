const HistoryModel = require("../models/history");
 
exports.getAllHistory = async () => {
  return await HistoryModel.find();
};
 
exports.createHistory = async (history) => {
  return await HistoryModel.create(history);
};
exports.getHistoryById = async (id) => {
  return await HistoryModel.findById(id);
};
 
exports.updateHistory = async (id, history) => {
  return await HistoryModel.findByIdAndUpdate(id, history);
};
 
exports.deleteHistory = async (id) => {
  return await HistoryModel.findByIdAndDelete(id);
};