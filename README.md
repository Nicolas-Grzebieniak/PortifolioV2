# Portfólio do Nicolas (React + Vite)

## Rodar
```bash
npm install
npm run dev      # desenvolvimento
npm run build    # gera a pasta dist/ para publicar
```

## Onde editar (você quase nunca precisa mexer em componentes)
| Quero... | Arquivo |
|---|---|
| Mudar textos (hero, about, títulos, contato) | `data/site.js` |
| Adicionar/editar um projeto | `data/projects.js` |
| Adicionar um certificado | `data/certificates.js` |
| Mudar a linha do tempo da formação | `data/education.js` |
| Mudar as skills e os níveis (1 a 10) | `data/skills.js` |
| Mudar seções/posição dos nomes na régua | `data/sections.js` |
| Trocar a foto | `assets/photo.jpg` |
| Mudar cores, fontes e espaçamentos | `styles/global.css` (variáveis no topo) |

### Adicionar um projeto
Copie um bloco de `data/projects.js` e preencha `title`, `tags`, `description` e `github`.
Sem `mock`, o projeto aparece só com texto. Para criar uma tela ilustrativa nova, adicione
um `.html` em `components/mocks/` e registre-o em `components/mocks/index.js`.

## Formulário de contato (Web3Forms)
1. Crie a chave em https://web3forms.com com o e-mail que vai receber as mensagens.
2. Cole a chave em `web3formsKey` no arquivo `data/site.js`.
Sem chave, o formulário abre o app de e-mail do visitante (`email` no mesmo arquivo).

## Estrutura
```
App.jsx / main.jsx / index.html   entrada (App.jsx fica na raiz)
data/        conteúdo editável
components/  seções da página
effects/     animações e comportamentos (régua, grid, loops dos mockups)
styles/      CSS global
assets/      imagens
```
