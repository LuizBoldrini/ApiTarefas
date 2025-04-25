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

- POST ``/conjuntos/cadastrar`` - Cadastra um novo conjunto
```
{
  "nome": "Conjunto 1",
  "descricao": "Descrição do conjunto 1",
  "usuarioId": 1
}
```

- GET ``/conjuntos/id`` - Lista todos os conjuntos do usuário

- PUT ``/conjuntos/editar/id`` - Atualiza nome do conjunto
```
{
    "nome": "Nome",
    "descricao": "Decricao"
}
```

- DELETE ``/conjuntos/id`` - Deleta o conjunto


TAREFA

- POST ``/conjunto/tarefas/cadastrar`` - Cadastra uma nova tarefa
```
{
  "nome": "Tarefa 1",
  "descricao": "Descricao tarefa 1",
  "conjuntoId": 1
}
```

- GET ``/conjunto/tarefas/id`` - Lista todas as tarefas do conjunto

- PUT ``/conjunto/tarefas/nome/id`` - Atualiza nome e descrição da tarefa
```
{
  "nome": "Tarefa 1"
  "descricao": "Descricao tarefa 1"
}
```

- PUT ``/conjunto/tarefas/editar/status/id`` - Atualiza status da tarefa
```
{
  "status": "concluida"
}
```
- DELETE ``/conjunto/tarefas/id`` - Deleta a tarefa
