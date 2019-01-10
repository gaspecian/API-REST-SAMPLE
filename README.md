<h1>API-REST-SAMPLE com autenticação do passportJS</h1>

## ​Introdução

​	 Api exemplo feita em nodeJS, já com autenticação configurada do passportJS.

​    <strong>1- Como rodar a aplicação:</strong> 

- Depois de clonar o repositório, rodar "npm install" dentro do diretório;
- Modificar o secret na linha 24 do documento app.js;
- Modificar o db da aplicação na linha 31 do documento app.js;
- Rodar o comando "npm start" na linha de comando.

<strong>2- Como criar rotas: </strong>

​	Intro: essa API-REST segue alguns padrões de SOLID patterns e para acessar as rotas é necessário colocar na url 'localhost:8000/api/' + a funcionalidade desejada.

 - Para criar uma nova feature é necessário adicionar uma rota no documento '/routes/api/index.js'
 - Depois é necessário criar uma pasta com 3 documentos com o mesmo nome mas com os finais '.controller.js' ( onde ficam as regras de negócios e transformações de dados,), '.router.js' (onde ficam as rotas e os métodos para ativar as funções do controller) e '.model.js' (onde ficam o modelo feito no banco de dados e usado pelo controller para o controle dos dados )

