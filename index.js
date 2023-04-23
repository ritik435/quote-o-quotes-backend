import Express  from "express";
import router from "./routes/index.js";
import db from "./utils/mongoose.js";
import bodyParser from "body-parser";

const PORT=3000;
const app = Express();


app.use(bodyParser.urlencoded({ extended: true }));
app.use(Express.json());


app.use('/',router);
db();

  // app is listening...
app.listen(PORT,()=>{
  console.log(`App is listening to http://localhost:${PORT}/get-posts`);
})

// Export the Express API
export default app;