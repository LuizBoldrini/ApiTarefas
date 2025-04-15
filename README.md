# API Tarefas

Aplicação desenvolvida para realizar o gerenciamento de tarefas, com funcionalidades de cadastro de usuários, conjuntos e tarefas. A aplicação é uma API RESTful desenvolvida em Node.js com Sequelize e MySQL.

## Tecnologias Utilizadas
- Node.js
- Express
- Sequelize
- SQL Server

## Instruções de instalação da api
1. Instalar o Node.js
2. Instalar o SQL Server
3. Criar o arquivo .env com as variáveis de ambiente
4. Criar o banco de dados e informe o nome na variável de ambiente DB_DATABASE
5. Rodar o seguinte comando no Prompt de Comando:

```bash
cd apitarefas
npm install
npx sequelize-cli db:migrate
npm start
```

## Rotas Mapeadas:
Usando o Insomnia ou Postman, faça as requisições para as seguintes rotas:


USUÁRIOS

- POST ``/usuarios/cadastrar`` - Registra um novo usuário
```
{
  "nome": "Maria Souza",
  "email": "maria@email.com",
  "senha": "senha123",
  "telefone": "11999999999"
}
```

- GET ``/usuarios/acessar`` - Faz o login do usuário
```
{
  "email": "maria@email.com",
  "senha": "senha123"
}
```


CONJUNTO

- POST ``/conjunto/cadastrar`` - Cadastra um novo conjunto
```
{
  "nome": "Conjunto 1",
  "descricao": "Descrição do conjunto 1",
  "usuarioId": 1
}
```

- GET ``/conjunto/listar/id`` - Lista todos os conjuntos do usuário

- PUT ``/conjunto/id`` - Atualiza nome do conjunto
```
{
  "descricao": "Conjunto 1"
}
```

- DELETE ``/conjunto/id`` - Deleta o conjunto


TAREFA

- POST ``/conjunto/tarefas`` - Cadastra uma nova tarefa
```
{
  "nome": "Tarefa 1",
  "descricao": "teste tarefa 1",
  "conjuntoId": 1
}
```

- GET ``/conjunto/tarefas/id`` - Lista todas as tarefas do conjunto

- PUT ``/conjunto/tarefas/nome/id`` - Atualiza nome da tarefa
```
{
  "nome": "Tarefa 1"
}
```

- PUT ``/conjunto/tarefas/status/id`` - Atualiza status da tarefa
```
{
  "status": "concluida"
}
```
- DELETE ``/conjunto/tarefas/id`` - Deleta a tarefa
