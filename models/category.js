import mongoose from "mongoose";

const categorySchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    price :{
      type: Number,
      required : true
    }
  }
);

const Category = mongoose.model("categories", categorySchema);

export default Category;