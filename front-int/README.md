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
- Adicionar um código -> fazer um comentário:
```// Lucas - Fiz essa função```

- Alterar um código -> deixar o comentário anterior e adicionar a sua:
```// Lucas - Fiz... -> Felipe - Alterei essa parte```

obs: comentários curtos e comentários no fim do arquivo

## 4 - Branches no github
Todos devem criar uma branch e nomeá-la com o que vai ser alterado. 
Exemplo: `lucas-main, felipe-versão, luis-login-page`
