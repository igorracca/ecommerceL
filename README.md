# E-commerce do L 

-----------

## Installation 

First make sure that you have installed: 

1.  [Node.js] (https://nodejs.org/en/download/) <br> 
2.  [Express.js] (https://expressjs.com/) <br> Assuming you've already installed Node.js, type: `npm install mongoose`
3.  [MongoDB] (https://www.mongodb.com/download-center#community) <br> 
4.  [Mongoose] (https://www.npmjs.com/package/mongoose) <br> Assuming you've already installed Node.js, type: `npm install mongoose` 

## Running the program

run mongodb on default port:
> 27017

In the terminam, go to ecommerceL directory and type:
> npm start

Open a browser window and go to:
> http://localhost:3000

The login is a bonus feature. To add a product, you have to log in. 
The user and password are:
> admin, admin

To filter the products by category, type the category after /products/.
For example:
> http://localhost:3000/products/c1

-----------

# Descrição

## Modelagem de Sistema

O objetivo desta tarefa é mostrar que você sabe modelar sistemas. Para a mesma precisamos que você modele o seguinte sistema baseado nas necessidades do usuário. Você precisará entregar todas as telas que criar (imagens, pode usar software, papel e lápis, o que quiser) além das funcionalidades (explicar o porquê delas existirem e o que fazem).

Light Lawliet, mais conhecido como L, é um inventor de produtos inúteis. Sua tarefa é fazer com que um inútil como ele ganhe dinheiro! L. Acaba de criar seu novo produto (você já sabe qual é, vai fazer sucesso esse! Talvez… sei lá, depende de VOCÊ!). Contamos com a sua habilidade de UX e Design para fazer um e-commerce atrativo para os clientes de forma que os produtos inúteis do L sejam vendidos! Não nos importamos com o quão bonito você desenha (ou quão legal seu software de fazer sites é) mas sim com a funcionalidade e usabilidade do mesmo (sim, iremos testar eles com pessoas de verdade). Não se esqueça de enviar junto com as telas explicações contendo todas as ações possíveis.

**As telas se encontram no PDF dentro do repositorio ou neste [Link] (https://github.com/igorracca/ecommerceL/blob/master/telasUX.pdf)**

## Time to Code, not yet! 

Antes de colocarmos a mão na massa, precisamos nos planejar, não é mesmo? Não queremos sair codificando tudo sem planejamento, certo? (CERTO!)

Portanto nesta etapa, queremos que você faça o design do sistema, a única obrigatoriedade é usar NodeJS e MongoDB (recomendamos o uso de Express.js e Mongoose), lembre-se de justificar o porquê de suas decisões e de ser bem claro e específico na sua justificativa! Lembre-se que não existem respostas certas ou erradas, queremos pessoas que saibam argumentar e justificar seus pontos de vista! 

	Seu objetivo é tornar o sonho de L realidade! \o

Vamos fazer um MVP para o L. Primeiramente você precisará criar apenas uma tela para listar os produtos (nome, descrição, preço e categoria) e uma para realizar cadastros. Só tem um problema, L é um idiota. Não se esqueça de fazer verificações para que L não entre com preços negativos (ou faça qualquer outra cagada). 

L também gostaria de poder filtrar os produtos através da url, por exemplo: www.kposiuaisfoaf.com.br/produtos/categoriaX iria listar apenas os produtos da categoria X
 
Não se preocupe em fazer um html/css/js extremamente bonito (afinal você já mostrou como deve ficar com seu super desenho, que ficou bem bonito (Y)), queremos saber como você modela o backend do sistema.

-----------

## Credits

This library (https://github.com/chriso/validator.js) was used in order to validate de input data.
