<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

Usado o [Nest](https://github.com/nestjs/nest) para a criação do microserviço de conexão com o TEF.

## Padrões de projeto

O ESlint e o Prettier vão ficar responsáveis por manter o padrão do projeto limpo e bonito. Além do uso do .editorconfig para avisar quando algo está errado.

##### Formatação do código

- Aspas simples
- Uso de ponto e vírgula no final da linha:
  - No final de cada linha;
  - Quando houver quebra de linha em array/objeto;
- Identação com tabs e largura 2

##### Estrutura do projeto

***app***: É responsável pelos casos uso, entidades e repositórios da aplicação.
Não deverá ter quaisquer código em NestJs, ela é o core da aplicação.

***helpers***: São os ajudantes das tipagens da aplicação.

***infra***: Todo o código que possui vínculo com tecnologias externas, ou seja, NestJs, Prisma e Kafka.
Controllers, services, utils ficam dentro da pasta http dentro do infra, que faz parte das conexões da aplicação.

## Rodando aplicação com Docker

Recomendado o uso do WSL2 juntamente com o docker engine.
Com docker engine, os comandos mudam levemente ficando sem o hífen, por exemplo:

```bash
# Subir aplicação
$ docker compose up

# Parar aplicação
$ docker compose down
```

Se estiver usando o linux, o comando do docker fica o padrão:

```bash
# Subir aplicação
$ docker-compose up
```

## Documentação

Para ver a documentação da api com os endpoints:

```bash
localhost:3000/docs
```
