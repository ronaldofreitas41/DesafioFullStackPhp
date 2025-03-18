# Desafio para full stack Grupo Adriano Cobuccio

**Candidato**: Ronaldo Luiz de Freitas Santos

## Frontend

### Criação do Projeto

Crie o frontend da aplicação utilizando Next.js, um framework para React focado em renderização híbrida e desempenho otimizado. Este comando inicializa o projeto com a estrutura básica necessária.

```
npx create-next-app@latest nome-aplicação
```
### Adicionar Componentes da Biblioteca ShadcnUI

Utilize a biblioteca de componentes ShadcnUI, que oferece componentes open-source estilizados e prontos para uso, acelerando o processo de desenvolvimento do frontend.

```
npx shadcn@latest add nome-dos-componentes
```

## Backend

O framework utilizado backend foi o Laravel, devido à sua robustez e simplicidade no desenvolvimento de APIs, autenticação e operações em bancos de dados.

### Criação do Projeto em Laravel
Inicializa o projeto Laravel para o backend da aplicação, configurando automaticamente a estrutura básica para o servidor.
```
composer create-project laravel/laravel backend
```
### Adicionar o Breeze às Dependências do Projeto

Adicione o pacote Laravel Breeze, que fornece autenticação simples e rápida para a aplicação, incluindo registro, login e controle de sessão.
```
composer require laravel/breeze --dev
```
### Instalar o Breeze no Ambiente de Backend

Configure o Breeze no ambiente do Laravel para integrar as funcionalidades básicas de autenticação.

```
php artisan breeze:install
```

### Adicionar um User Resource à Aplicação

Crie um resource do Laravel para transformar os dados do modelo User em uma resposta JSON estruturada e pronta para APIs.
```
php artisan make:resource UserResource
```


### Criação das Migrations para as tabelas

Crie as migrations para estruturar o banco de dados e definir as tabelas necessárias: contatos, depósitos, investimentos e fundos.

```php artisan make:migration create_contacts_table
php artisan make:migration create_deposits_table
php artisan make:migration create_investments_table
php artisan make:migration create_transference_table
php artisan make:migration create_funds_table
```

### Execução das Migrations

Execute as migrations criadas para aplicar a estrutura no banco de dados.
```
php artisan migrate
```

### Criação dos Seeders para Popular as Tabelas com Dados de Teste

Seeders permitem popular tabelas do banco com dados iniciais para facilitar os testes de desenvolvimento.

```
php artisan make:seeder UsersTableSeeder
php artisan make:seeder ContactsTableSeeder
php artisan make:seeder FundsTableSeeder
php artisan make:seeder DepositsTableSeeder
php artisan make:seeder TransferenceTableSeeder
php artisan make:seeder InvestmentsTableSeeder
```

### Rodar Seeders e Enviar Dados de Teste para o Banco

Rode todos os seeders para alimentar o banco com os dados de teste definidos.

``` 
php artisan db:seed
```

### Criação dos Controladores para as Classes

Controladores são responsáveis por organizar a lógica das requisições e respostas. Crie controladores para gerenciar os dados dos usuários, contatos, fundos, depósitos, investimentos e autenticação.

```
php artisan make:controller UserController
php artisan make:controller ContactController
php artisan make:controller FundController
php artisan make:controller DepositController
php artisan make:controller InvestmentController
php artisan make:controller TransferenceController
php artisan make:controller Auth/LoginController
```

### Autenticação com Laravel Sanctum

Adicione Laravel Sanctum ao projeto para fornecer autenticação segura e baseada em tokens, facilitando o desenvolvimento de APIs protegidas.

```
composer require laravel/sanctum
php artisan vendor:publish --provider="Laravel\Sanctum\SanctumServiceProvider"
php artisan migrate
```

### Testes de requisições da API pelo

Utilize o Postman para testar as rotas da API e validar o funcionamento correto do backend e autenticação.

- #### Inicie o servidor backend:
    No terminal dentro da pasta de backend informe o seguintes comando:
    ```
    php artisan serve
    ```

- #### Faça a Requisição de Login no Postman:

    **Método:** POST  
    **URL:** http://127.0.0.1:8000/api/login  
    **Body:** Selecione raw e JSON e insira o JSON com email e senha.

- #### Obtenha o Token de Autenticação:

    Após fazer login, você receberá um token de autenticação no formato JSON.

- #### Adicione o Token de Autenticação no Postman:

    No Postman, vá para a aba Authorization.  
    Selecione Bearer Token no tipo de autorização.  
    Insira o token de autenticação que você recebeu após o login.

- #### Teste as Rotas Autenticadas no Postman:

    Agora você pode testar as rotas autenticadas no Postman usando o token de autenticação.