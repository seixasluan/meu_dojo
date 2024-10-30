import { FastifyInstance } from "fastify";
import * as alunoController from "../controllers/alunoController";

const alunoRoutes = async (fastify: FastifyInstance) => {
  fastify.post("/create", alunoController.createAluno);
  fastify.get("/", alunoController.getAlunos);
  fastify.get("/:id", alunoController.getAlunoById);
};

export default alunoRoutes;
