### Spring

#### Springboot (ferramenta)
- Parecido com o Angular CLI
- Facilitador, abstrai configurações iniciais
- Com a popularização de microsserviços, o TomCat foi incluído na ferramenta, o que possibilita a execução em dockers, gerando um arquivo .jar (só precisa do java pra executar), facilitando a adoção de microsserviços no mundo Java
#### Criar projeto
- Dependências
  Spring Web (aplicação web)
  Dev Tools (carregamento automatico tipo ng server)
  Lombok (ajuda no dev do código)
  Spring Data JPA (SQL)
  H2 Database (testes iniciais com db, dps troca pra mysql etc)

- Arquivos criados
    pom.xml: controle de versões
    aplication.properties: padronizar a declaração de propriedades no projeto
- MVC e JSP

#### Detalhes
- @RestController -> @Controller e @ResponseBody
#### Links
- Spring init: https://start.spring.io/
- Roadmap: https://www.geeksforgeeks.org/best-way-to-master-spring-boot-a-complete-roadmap/
  
#### Update
- Vai até o pom.xml, apaga a versão, ctrl space e vê qual é a nova