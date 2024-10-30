import { FastifyRequest, FastifyReply } from "fastify";
import * as alunoService from "../services/alunoService";
import { alunoSchema, AlunoInput } from "../validators/alunoValidator";

export const createAluno = async (req: FastifyRequest, reply: FastifyReply) => {
  const alunoData: AlunoInput = alunoSchema.parse(req.body); // valid data

  const aluno = await alunoService.createAluno(alunoData);
  reply.status(201).send(aluno);
  console.log(aluno);
};

export const getAlunos = async (req: FastifyRequest, reply: FastifyReply) => {
  const alunos = await alunoService.getAlunos();
  reply.status(200).send(alunos);
  console.log(alunos);
};
