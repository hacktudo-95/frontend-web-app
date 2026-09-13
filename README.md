# Sabiá

Frontend web mockado (sem backend real) do MVP de hackathon **Sabiá**. O app
simula o uso de um smartphone como ferramenta pedagógica: o aluno pratica
conteúdos com IA por voz, o professor acompanha lacunas de aprendizagem, e a
gestão escolar acompanha métricas agregadas — tudo em uma única demo,
alternando entre os três perfis.

Projetado como app mobile, mas rodando no navegador (sem versão desktop):
largura de conteúdo limitada, navegação por bottom tab bar e cards, sem
simular moldura de celular.

## Stack

- React + Vite + Tailwind CSS v4
- Sem backend, dads vem de mocks em `src/mocks/`

## Como rodar

```bash
npm install
npm run dev      # servidor de desenvolvimento

```

## Perfis e telas

O app simula 3 "modos" distintos, como se fossem 3 apps diferentes, trocáveis
por um seletor discreto no avatar do cabeçalho:

- **Aluno** (Maitê, 8º ano B) — Home, Biblioteca, Sessões de Prática, Estúdio
  de Criação, Perfil, além de atalhos para Check-in de Humor, Trilha de
  Revisão e Duelos entre Turmas.
- **Professor** (Renata) — Dashboard, Anexar Conteúdo, Conexões
  Interdisciplinares, Nova Sessão em Sala, Nova Missão de Casa e Mapa de
  Lacunas da turma.
- **Gestão** (Coord. Flávia) — Painel Institucional, Orientação Educacional e
  Base de Conhecimento.

