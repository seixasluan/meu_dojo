# Projeto para RBJJ TEAM

### ANOTAÇÕES DE DESENVOLVIMENTO

- controllers/: Contém os controladores, que recebem as requisições HTTP e chamam os serviços apropriados. Cada controlador deve ser responsável por uma entidade do seu sistema.

- models/: Define a estrutura de dados que você vai usar, representando as entidades no banco de dados.

- routes/: Define as rotas da sua API, onde você vincula as URLs às funções dos controladores.

- services/: Contém a lógica de negócio, onde as interações entre os modelos e as regras de negócio são definidas.

- database/: Contém a configuração da conexão com o banco de dados PostgreSQL.

- index.ts: Ponto de entrada da aplicação, onde você configura o Fastify e registra as rotas.

- .env: Arquivo para armazenar variáveis de ambiente (como credenciais do banco de dados).
