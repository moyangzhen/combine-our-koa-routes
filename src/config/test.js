import { getHValue, getValue, setValue, delValue } from "./RedisConfig";
setValue("imooc", "imooc message from redis client");
getValue("imooc").then((res) => {
  console.log("getValue" + res);
});
delValue("imooc");
setValue("imoocobj", { name: "brian", age: 30, email: "brian@imooc.com" });

getHValue("imoocobj").then((res) => {
  console.log("getHValue" + JSON.stringify(res));
});
