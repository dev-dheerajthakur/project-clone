import mongoose from "mongoose";
import app from "./app";

const port = process.env.PORT || 8000;
const DB_CONN_STR = process.env.ATLAS_CONN_STR || "mongodb://localhost:27017";

mongoose.connect(DB_CONN_STR).then(()=>{
  console.log("db connected successfully....")
})


app.listen(port, ()=>{
  console.log("admin backend listing on port " + port);
});
