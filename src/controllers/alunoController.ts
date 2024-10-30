import { FastifyRequest, FastifyReply } from "fastify";
import * as alunoService from "../services/alunoService";
import { alunoSchema, AlunoInput } from "../validators/alunoValidator";

export const createAluno = async (req: FastifyRequest, rep: FastifyReply) => {
  const alunoData: AlunoInput = alunoSchema.parse(req.body); // valid data

  const aluno = await alunoService.createAluno(alunoData);
  rep.status(201).send(aluno);
};

export const getAlunos = async (req: FastifyRequest, rep: FastifyReply) => {
  const alunos = await alunoService.getAlunos();
  rep.send(alunos);
};
