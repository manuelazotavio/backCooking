# Guarda-Receita (BackEnd)

## 📌 Sobre o Projeto
O **Guarda-Receita** é uma aplicação que permite aos usuários armazenar e gerenciar suas receitas culinárias. Ele conta com três interfaces principais:

- **Site Público (Landing Page):** Apresenta a plataforma e permite o cadastro e login de novos usuários.
- **Site para Usuários:** Onde os usuários podem cadastrar, editar, consultar e excluir receitas.
- **Versão Mobile:** Versão adaptada para dispositivos móveis, oferecendo a mesma funcionalidade do site.

## 📐 Padrão de Projeto
O projeto segue o padrão **MVC (Model-View-Controller)**, garantindo organização, separação de responsabilidades e escalabilidade. Além disso, foram utilizados conceitos de **Clean Architecture** e **boas práticas de desenvolvimento**, garantindo manutenção fácil e código limpo.

## 🛠️ Tecnologias Utilizadas
A solução foi desenvolvida com as seguintes tecnologias:

- **Back-end:**
  - Node.js para o ambiente do servidor.
  - Prisma para integração com o banco de dados.
  - Zod para validação de dados internos.
  - Jest para testes automatizados.

- **Banco de Dados e Armazenamento:**
  - Supabase para armazenamento de dados e imagens.

- **Versionamento:**
  - Git e GitHub para controle de versão.

## 🔌 API e Endpoints
### 🔹 Autenticação
- `POST /auth/cadastrar` → Cria um novo usuário
- `POST /auth/login` → Faz login e retorna um token JWT

### 🔹 Receitas
- `POST /receitas` → Cria uma nova receita
- `GET /receitas` → Retorna todas as receitas
- `GET /receitas/:id` → Retorna uma receita específica
- `PUT /receitas/:id` → Atualiza uma receita
- `DELETE /receitas/:id` → Remove uma receita

## 📜 Arquitetura do Projeto
O **Guarda-Receita** segue os padrões de **Clean Architecture**, com a divisão em camadas:
- **Controllers**: Responsável por receber as requisições e chamar os casos de uso.
- **Models**: Contém a lógica de negócio do sistema.
- **View**: Responsáveis pela visualização dos dados pelo usuário.

## 📊 Diagrama do Banco de Dados
![prisma-erd](https://github.com/user-attachments/assets/61227c98-3c47-46f6-9201-008688d5c457)

## ✅ Conclusão
O **Guarda-Receita** atingiu os objetivos propostos ao oferecer uma solução integrada e acessível para o gerenciamento de receitas culinárias. O uso das tecnologias modernas permitiu a criação de uma plataforma robusta, interativa, segura e responsiva, alinhada com as necessidades de um sistema eficiente.

## 🛠 Contribuição
1. Faça um fork do repositório.
2. Crie um branch para a sua feature: `git checkout -b minha-feature`.
3. Commit suas alterações: `git commit -m 'Adicionando nova feature'`.
4. Envie seu código: `git push origin minha-feature`.
5. Abra um Pull Request.

## 📚 Referências
- [Supabase](https://supabase.com/)
- [React](https://react.dev/)
- [Node.js](https://nodejs.org/en/docs)
- [Prisma](https://www.prisma.io/docs)
- [React Native](https://reactnative.dev/docs/getting-started)
- [GitHub](https://github.com/)
