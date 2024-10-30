import fastify from "fastify";
import dotenv from "dotenv";
import alunoRoutes from "./routes/alunoRoutes";

dotenv.config();

const port = process.env.SERVER_PORT || 3000;

const app = fastify();

app.register(alunoRoutes, { prefix: "/alunos" });

const start = async () => {
  try {
    await app.listen({ port: Number(port) });
    console.log(`Server running on port ${port}`);
  } catch (err) {
    app.log.error(err);
    process.exit(1);
  }
};

start();
