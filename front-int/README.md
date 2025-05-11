# Organização de Projeto React

## 1 - Estrutura clara  e modular
- src/components/ → Para componentes reutilizáveis (Button.jsx, Card.jsx, etc.).
- src/pages/ → Para páginas do app (Home.jsx, Dashboard.jsx, etc.).
- src/styles/ → Para arquivos de estilo globais e módulos CSS.
- src/hooks/ → Para hooks personalizados (useAuth.js, useFetch.js).
- src/context/ → Para gerenciar contexto global.
- src/utils/ → Para funções auxiliares (formatDate.js, api.js).

## 2 - Nomeação de arquivos
- Componentes React: PascalCase → LoginForm.jsx, Navbar.jsx
- CSS/SCSS: camelCase ou kebab-case → navbar.module.css, profilePage.css
- Páginas: PascalCase → Home.jsx, Profile.jsx
- Funções utilitárias: camelCase.js → formatDate.js, fetchData.js

## 3 - Comentários no códigos
. adicionar um código -> fazer um comentário:
```//lucas - fiz essa função pipipipopopo```

. alterar um código -> deixar o comentário anterior e adicionar a sua
``` //lucas - fiz... -> felipao - alterei essa parte pq tava errado```

obs: comentários curtos e comentários no fim do arquivo

## 4 - Branches no github
Todos devem criar uma branch e oq vai fazer
exemplo: lucas-main, felipe-versão, Luis-login-page 1