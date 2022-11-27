import { mongo } from "mongoose";
import mongoose from "../config/DBHelpler";
import mongoose from "../config/DBHelpler";
const Schema = mongoose.Schema;
const TestSchema = new Schema({
  name: { type: String },
  age: { type: Number },
  email: { type: String },
});
const TestModel = mongoose.model("users", TestSchema);
export default TestModel;
