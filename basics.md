### Descrevendo alguns arquivos padrões do Angular
- Package.json
Dependências para utilização e dependências de desenvolvimento (não são necessárias no uso)

- Karma -> testes
  
- Angular.json
Configurações do próprio projeto, folha de estilos padrão, nomes de pastas, controle de tamanho dos arquivos etc.

- Browserlistsrc
Lista de browsers suportados

#### Dentro do SRC
- Polyfills.ts
Trabalhar com browsers antigos
- Test.ts
- Styles.less -> css global
- Assets -> imagens
- Environments
Configurações de desenvolvimento e produção

#### Dentro de src/app
Código fonte da aplicação

- app-routing-module
Configurar o roteamento de novos componentes e módulos da app

#### Detalhes
- Compilação incremental (apenas o que é alterado)
- TS Hero (view, command palette): convenções de import no app.modules
- Modules são a forma de organizar a aplicação em Angular, todos os componentes dentro do módulo só são visíveis dentro dele, caso forem necessários fora, é necessário exportar
- material.io para alterar cores

#### Importando do Angular Material Component
- Vai no .module do module ou do app
- Importa conforme doc
- Adiciona no imports
- TS Hero
- Adiciona no HTML do local adicionado, conforme exemplo da doc
- É interessante colocar todos os modules do Angular Material em um module separado
Cria um module para isso: ng g m shared/app-material
Em app-material.module, no ngmodule, deixa apenas exports [] com os componentes do AM importados
No modules do modules a ser utilizado, no imports chama AppMaterialModule e tá ok

#### Roteamento
- Configura a rota de um componente no arquivo do module
- Depois configura a rota do module no arquivo global
- E adiciona lazy loading (tem estrutura na documentação do Angular): carrega modules angular apenas quando são necessários
- Indicar ao html que estamos utilizando roteamento com a tag <router-outlet></router-outlet> no html geral
  
#### Comandos básicos
- ng new nome-projeto
- ng g m nome-modulo --routing
- ng g c nome-modulo/nome-componente
- ng g s nome-modulo/services/nome-serviço

#### Conceitos relevantes
- Component (selector: tag html)
- Module
- Interface
- Interpolação (chamada de js no html)
- Model
- Service (manipulação de dados e lógica de negócio)
- Decorator @Injectable - Serviço e @Component - Componente: tratar ciclo de vida