import * as alunoModel from "../models/alunoModel";
import { Aluno } from "../types/alunoTypes";

export const createAluno = async (data: Aluno) => {
  return await alunoModel.createAluno(data);
};

export const getAlunos = async () => {
  return await alunoModel.getAlunos();
};
