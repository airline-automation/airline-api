import express from "express";
import cors from "cors";

import { register as register_user_service } from "./user-service/index.js";
import { appendroutes as appendroutes_user_api } from "./user-api/index.js";

const app = express();
app.use(cors());

register_user_service();
appendroutes_user_api(app);

app.get("/", (req, res) => {
    res.send({ message: "hello client!" });
});

app.listen(5000, () => {
    console.log("server is running on port 5000.");
});
