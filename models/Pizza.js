const { Schema, model } = require("mongoose");
const moment = require("moment");

// schema for pizza documents
const PizzaSchema = new Schema(
  {
    pizzaName: { type: String },
    createdBy: { type: String },
    createdAt: {
      type: Date,
      default: Date.now,
      get: (createdAtVal) =>
        moment(createdAtVal).format("MM DD, YYYY [at] hh:mm a"),
    },
    size: {
      type: String,
      default: "Large",
    },
    toppings: [],
    comments: [{ type: Schema.Types.ObjectId, ref: "Comment" }],
  },
  {
    toJSON: {
      virtuals: true,
      getters: true,
    },
    id: false,
  }
);

// get total count of comments and replies on retrieval
PizzaSchema.virtual("commentCount").get(function () {
  return this.comments.length;
});

//create the Pizza model using the PizzaSchema
const Pizza = model("Pizza", PizzaSchema);

// export the Pizza Model
module.exports = Pizza;
