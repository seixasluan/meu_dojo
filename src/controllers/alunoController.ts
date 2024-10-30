import { FastifyRequest, FastifyReply } from "fastify";
import * as alunoService from "../services/alunoService";
import { alunoSchema, AlunoInput } from "../validators/alunoValidator";
import { Params } from "../types/paramTypes";

// create aluno
export const createAluno = async (req: FastifyRequest, reply: FastifyReply) => {
  // remember to put a verification for duplicated data
  const alunoData: AlunoInput = alunoSchema.parse(req.body); // valid data

  const aluno = await alunoService.createAluno(alunoData);
  reply.status(201).send(aluno);
  console.log(aluno);
};

// get all alunos
export const getAlunos = async (req: FastifyRequest, reply: FastifyReply) => {
  const alunos = await alunoService.getAlunos();
  if (alunos.length === 0) {
    return reply.status(404).send({ message: "Alunos Not Found" });
  }
  reply.status(200).send(alunos);
  console.log(alunos);
};

// get aluno by id
export const getAlunoById = async (
  req: FastifyRequest<{ Params: Params }>,
  reply: FastifyReply
) => {
  const id = req.params.id;
  const aluno = await alunoService.getAlunoById(id);

  if (!aluno) {
    return reply.status(404).send({ message: "Aluno Not Found" });
  }

  reply.status(200).send(aluno);
  console.log(aluno);
};
