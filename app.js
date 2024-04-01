import express from "express";
const app = express();

app.use("/api", () => {
  console.log("Hello");
});
app.listen(8000, () => {
  console.log(`Server on port 8000`);
});
