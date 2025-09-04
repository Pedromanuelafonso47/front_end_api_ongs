
# 🌍 Front-end API ONGs

Este projeto é uma aplicação **front-end** desenvolvida em **Next.js**, que consome uma **API de ONGs confiáveis**. O objetivo é permitir que usuários filtrem e encontrem ONGs por **cidade** e **categoria**, exibindo as informações de forma clara, moderna e responsiva.

---

## 🚀 Funcionalidades

* Listagem de ONGs cadastradas na API.
* Filtro por **cidade** e **categoria**.
* Modal de **sugestões automáticas** ao digitar.
* Exibição estilizada das ONGs com **descrição, imagem e detalhes**.
* Totalmente responsivo (desktop e mobile).

---

## 📂 Estrutura do Projeto

```
front_end_api_ongs/
│-- app/                 # Páginas e rotas do Next.js
│-- components/          # Componentes reutilizáveis (ex: FeaturedOngs, Carrossel, etc.)
│-- public/              # Arquivos estáticos (imagens, ícones, etc.)
│-- styles/              # Estilos globais
│-- package.json         # Dependências do projeto
│-- README.md            # Documentação
```

---

## 🛠️ Tecnologias Utilizadas

* [Next.js](https://nextjs.org/)
* [React](https://react.dev/)
* [TailwindCSS](https://tailwindcss.com/)
* [TypeScript](https://www.typescriptlang.org/)
* [Vercel](https://vercel.com/) (deploy)

---

## ▶️ Como Executar Localmente

1. Clone este repositório:

```bash
git clone https://github.com/seu-usuario/front_end_api_ongs.git
cd front_end_api_ongs
```

2. Instale as dependências:

```bash
npm install
# ou
yarn install
# ou
pnpm install
```

3. Execute o servidor de desenvolvimento:

```bash
npm run dev
```

4. Abra no navegador: [http://localhost:3000](http://localhost:3000)

---

## 🔗 Conexão com a API

Este front-end consome dados da **API de ONGs confiáveis** que tu já desenvolveste.
Basta configurar o **endpoint da API** no código (exemplo em `.env.local`):

```
NEXT_PUBLIC_API_URL=https://seu-endpoint-da-api.com
```

---

## 📌 Melhorias Futuras

* Autenticação de usuários.
* Painel administrativo para cadastro/edição de ONGs.
* Integração com mapas para localização geográfica.
* Sistema de doações online.

---

## 👨‍💻 Autor

Projeto desenvolvido por **Pedro Afonso** 🚀
