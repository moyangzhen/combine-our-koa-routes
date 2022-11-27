import User from "./test";

// 增
const user = {
  name: "brian",
  age: 30,
  email: "brian@toimc.com",
};

const run = async () => {
  const data = new User(user);

  const result = await data.save();
  // console.log(result);
};
run();
// 查
const findMethods = async () => {
  const result = await User.find();
  // console.log(result);
};
findMethods();
// 改
const updateMethods = async () => {
  const result = await User.updateOne(
    { name: "brian" },
    { email: "ldh@163.com" }
  );
  // console.log(result, User.find());
};
updateMethods();
// 删
const deleteMethods = async () => {
  const result = await User.deleteOne({ name: "brian" });
  console.log(result);
};
deleteMethods();
