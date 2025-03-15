
# Dados-PIB-IBGE

Visualização e análise de dados do PIB brasileiro fornecidos pelo IBGE.

Uma aplicação web interativa que permite aos usuários explorar e visualizar dados do Produto Interno Bruto (PIB) do Brasil, obtidos diretamente do Instituto Brasileiro de Geografia e Estatística (IBGE). A aplicação oferece gráficos e tabelas dinâmicas para facilitar a análise e compreensão dos dados.

## Link para Deploy da Aplicação

* \[[O link para o deploy da aplicação aqui](https://dados-pib-ibge-cv3z8qmjf-arthur-luizs-projects-b00c85db.vercel.app/)]

## Instruções de Instalação

### Pré-requisitos

* Node.js (versão 18 ou superior)
* npm (ou yarn)

### Passos

1.  Clone o repositório: `git clone https://github.com/Arthur-Luiz19/Dados-PIB-IBGE`
2.  Navegue até o diretório do projeto: `cd Dados-PIB-IBGE`
3.  Instale as dependências: `npm install`

### Execução

1.  Inicie o servidor de desenvolvimento: `npm run dev`
2.  Abra o navegador e acesse: `http://localhost:5173`

## Tecnologias utilzadas

* **React:**
    * Utilizado para construir a interface de usuário interativa e reativa.
    * Permite a criação de componentes reutilizáveis, facilitando a manutenção e o desenvolvimento futuro.

* **Vite:**
    * Ferramenta de build rápida e eficiente para projetos React.
    * Oferece hot module replacement (HMR) para uma experiência de desenvolvimento mais ágil.

* **Tailwind CSS:**
    * Framework CSS utilitário para estilização rápida e personalizada.
    * Permite criar interfaces responsivas e visualmente atraentes com facilidade.

* **Chart.js:**
    * Biblioteca JavaScript para criação de gráficos interativos.
    * Utilizada para visualizar os dados do PIB de forma clara e intuitiva.

* **React Router Dom:**
    * Utilizado para fazer a navegação entre as paginas da aplicação.

* **Jest e Testing Library:**
    * Framework de teste e biblioteca de teste para garantir a qualidade e a robustez do código.

* **IBGE API:**
    * A API do IBGE é utilizada para obter os dados do PIB brasileiro.
    * A API oferece dados atualizados e confiáveis, garantindo a precisão das informações exibidas na aplicação.

## Decisões de Design:

* **Consistência Visual:**
    * O design prioriza a apresentação clara e direta dos dados, evitando elementos visuais desnecessários que possam distrair o usuário.
    * A linguagem utilizada é concisa e fácil de entender, garantindo que os usuários possam interpretar as informações sem dificuldade.
    * O projeto mantém um estilo visual consistente em todas as páginas, utilizando o mesmo esquema de cores, fontes e layout.
    * Essa consistência contribui para uma experiência de usuário coesa e profissional, facilitando a navegação e a compreensão da aplicação.

* **Ênfase na Usabilidade:**
    * A interface é projetada para ser intuitiva e fácil de usar, com elementos de interação claros e bem definidos.
    * A hierarquia visual facilita a identificação das informações mais importantes e a realização das tarefas principais.

* **Visualização de Dados Eficaz:**
    * O projeto utiliza gráficos e tabelas para apresentar os dados do PIB de forma clara e informativa.
    * A escolha dos tipos de gráficos e a formatação das tabelas são adequadas para cada tipo de dado, garantindo a melhor visualização possível.

* **Navegabilidade:**
    * A aplicação possui uma boa navegabilidade, com botões para retornar ao inicio e para gerar os graficos e tabelas.


