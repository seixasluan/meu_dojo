import { FastifyInstance } from "fastify";
import * as alunoController from "../controllers/alunoController";

const alunoRoutes = async (fastify: FastifyInstance) => {
  fastify.post("/alunos", alunoController.createAluno);
  fastify.get("/alunos", alunoController.getAlunos);
  // Outras rotas...
};

export default alunoRoutes;
