## O que esse projeto tem a oferecer?
Esse projeto em Django oferece um sistema de CRUD de usuário e de anúncios, utilizando o rest_framework, trabalhando em conjunto com o front-end.


## Configuração

1. Clone este repositório em sua máquina local.
2. Crie e ative um ambiente virtual (opcional).
3. Instale as dependências do projeto executando o seguinte comando:
```
pip install -r requirements.txt
```

## Configuração do Banco de Dados

Este projeto usa o MySQL como banco de dados através do Docker. Siga as etapas abaixo para configurar o banco de dados:

1. Certifique-se de ter o Docker instalado em sua máquina.
2. No terminal, navegue até o diretório raiz do projeto.
3. Execute o seguinte comando para iniciar o banco de dados MySQL em um contêiner Docker:
```
docker-compose up -d
```
4. O banco de dados estará disponível na porta 3306.
5. Certifique-se de que as variáveis ​​de ambiente do banco de dados no arquivo `docker-compose.yml` correspondam às suas configurações.

## Executando o Projeto

1. Certifique-se de que o banco de dados Docker esteja em execução.
2. Execute os seguinte comandos para aplicar as migrações do banco de dados:
```
python manage.py makemigrations
python manage.py migrate
```
3. Execute o seguinte comando para iniciar o servidor de desenvolvimento do Django:
```
python manage.py runserver
```
4. O servidor estará disponível em http://localhost:8000.

