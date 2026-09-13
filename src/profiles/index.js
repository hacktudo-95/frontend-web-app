import { alunoProfile } from './aluno'
import { gestaoProfile } from './gestao'
import { professorProfile } from './professor'

export const profiles = {
  aluno: alunoProfile,
  professor: professorProfile,
  gestao: gestaoProfile,
}

export const profileOrder = ['aluno', 'professor', 'gestao']
