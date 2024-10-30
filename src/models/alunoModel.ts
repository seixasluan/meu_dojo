import db from "../database/db";
import { Aluno } from "../types/alunoTypes";

export const createAluno = async (data: Aluno): Promise<Aluno> => {
  const result = await db.query(
    "INSERT INTO alunos (name, email, phone) VALUES ($1, $2, $3) RETURNING *",
    [data.name, data.email, data.phone]
  );

  return result.rows[0]; // return the created aluno
};

export const getAlunos = async (): Promise<Aluno[]> => {
  const result = await db.query("SELECT * FROM alunos");
  return result.rows; // return all alunos
};

// getAlunoById

// updateAlunoById

// removeAlunoById
