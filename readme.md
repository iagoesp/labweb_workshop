# Primeiros Passos

Este projeto foi feito utilizando NodeJs em conjunto com Typescript para execução de workshop para disciplina de Laboratório WEB 2021/1.

É importante que já é esperado que você tenha o node instalado em sua máquina, caso não o tenha siga as instruções descritas aqui: https://nodejs.org/en/ para baixar e instalá-lo.

Após realizar o clone do projeto, abra-o no seu editor favorito (recomendamos fortemente o VSCode Studio para projetos que utilizem Typescript) e execute o comando abaixo para instalar as dependências:

```
npm i
```

Após instalar as dependências, você poderá ativar o servidor através do comando:

```
npm start
```



---

## Dependências utilizadas

- Express (https://expressjs.com/pt-br/)
- Ts-node (https://www.npmjs.com/package/ts-node)
- Ts-node-dev (https://www.npmjs.com/package/ts-node-dev)
- Typescript (https://www.typescriptlang.org/)
- Cors (https://www.npmjs.com/package/cors)

## Rotas Disponíveis

- CreateAuthor (/author) - **POST**
```
Payload: {
    author: {
        name: "Keila Mellman"
    }
}
```

- GetAuthors (/authors) - **GET**
```
Response: [
  {
    "name": "Keila Mellman"
  }
]
```

---

## Agora é com você :D