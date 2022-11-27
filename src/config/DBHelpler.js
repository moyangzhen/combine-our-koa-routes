import mongoose from "mongoose";
import config from "./index";

// 创建链接
mongoose.connect(config.DB_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
// 链接成功
mongoose.connection.on("connected", () => {
  console.log("mongoose connection open to " + config.DB_URL);
});

// 链接异常
mongoose.connection.on("error", (error) => {
  console.log("mongoose connection error " + error);
});

// 断开链接
mongoose.connection.on("disconnected", () => {
  console.log("mongoose connection disconnected");
});

export default mongoose;
