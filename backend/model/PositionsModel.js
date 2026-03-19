// const { model } = require("mongoose");

// const { PositionsSchema } = require("../schemas/PositionsSchema");

// const PositionsModel = new model("position", PositionsModel);

// module.exports = { PositionsModel };
const mongoose = require("mongoose");
const { PositionsSchema } = require("../schemas/PositionsSchema");

const PositionsModel = mongoose.model("Position", PositionsSchema);

module.exports = PositionsModel;