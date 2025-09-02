import express from "express";
import cors from "cors";
import router from "./index";

const app = express();
const PORT = 4000;

app.use(cors());
app.use(express.json()); // JSONボディを解析するために追加
app.use(router);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

//bun x ts-node src/app.ts
