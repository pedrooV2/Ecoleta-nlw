// Rota: Endereço completo da requisição; Elas são semânticas
// Recurso: Qual entidade estamos acessando do sistema

// GET: Buscar uma ou mais informações do back-end
// POST: Criar uma nova informação no back-end
// PUT: Atualizar uma informação existente no back-end
// DELETE: Remover uma informação do back-end

// Request Param: Parâmetros que vem na própria rota que identificam um recurso
// Query Param: Parâmetros quem vem na própria rota geralmente opcionais para filtros, paginação
// Request Body: Parâmetros para criação/atualização de informações

const users = [
  'Diego',
  'Pedro',
  'Gabriel',
  'Vinícius',
  'Robson',
  'Cleiton'
]

app.get('/users', (request, response) => {
  
  const search = String(request.query.search);

  const filteredUsers = search ? users.filter(user => user.includes(search)) : users;

  return response.json(filteredUsers);
});

app.get('/users/:id', (req, res) => {
  const id = Number(req.params.id);

  const user = users[id];

  return res.json(user);
});

app.post('/users', (req, res) => {

  const data = req.body;

  console.log(data);

  const user = {
    name: data.name,
    email: data.email
  }

  return res.json(user);
});

// ------------------------------------------------------------------------------
// Migration = histórico do banco de dados

// Rodar as migrations
// npx --knexfile knexfile.ts migrate:latest
