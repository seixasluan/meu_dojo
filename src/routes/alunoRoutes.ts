import { FastifyInstance } from "fastify";
import * as alunoController from "../controllers/alunoController";

const alunoRoutes = async (fastify: FastifyInstance) => {
  fastify.post("/create", alunoController.createAluno);
  fastify.get("/", alunoController.getAlunos);
  // Outras rotas...
};

export default alunoRoutes;
