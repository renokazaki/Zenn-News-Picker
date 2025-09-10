import express from "express";
import cors from "cors";
import router from "./routers";

const app = express();
const PORT = 4000;

app.use(cors());
app.use(express.json()); // JSONボディを解析するために必要
app.use(router);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

//npx ts-node src/app.ts
