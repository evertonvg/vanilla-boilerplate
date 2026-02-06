# Vanilla Boilerplate

Um boilerplate moderno e minimalista para criar landing pages de alta conversão com **Astro**, **SCSS** e **Alpine.js**. Otimizado para SEO e performance.

## ✨ Características

- 🚀 **Astro 5** - Framework moderno para sites estáticos otimizados
- 🎨 **SCSS** - Sistema de estilos com design tokens e utilities
- 🔧 **Alpine.js** - Interatividade leve e simples
- 📱 **Responsivo** - Breakpoints configurados para mobile, tablet, laptop, desktop e wide
- ♿ **Acessível** - Boas práticas de acessibilidade implementadas
- 🎯 **SEO Ready** - Meta tags e estrutura otimizadas
- 🏗️ **Componentizado** - UI components reutilizáveis e bem organizados
- 💪 **TypeScript** - Suporte completo a TypeScript

## 🚀 Início Rápido

### Pré-requisitos
- Node.js 18+ 
- npm ou yarn

### Instalação

```bash
# Instalar dependências
npm install

# Iniciar servidor de desenvolvimento
npm run dev
```

O site estará disponível em `http://localhost:4321`

## 📁 Estrutura do Projeto

```
vanilla-boilerplate/
├── public/                    # Arquivos estáticos (imagens, etc)
├── src/
│   ├── components/            # Componentes reutilizáveis
│   │   ├── layout/           # Componentes de layout
│   │   │   └── Container/    # Container responsivo
│   │   └── ui/               # Componentes de UI
│   │       ├── Button/       # Botão
│   │       ├── Heading/      # Títulos
│   │       ├── Image/        # Imagem responsiva
│   │       └── Text/         # Texto
│   ├── layouts/               # Layouts de página
│   │   └── BaseLayout.astro  # Layout base com meta tags
│   ├── lib/                   # Utilitários e configurações
│   │   └── breakpoints.ts    # Breakpoints responsivos
│   ├── pages/                 # Rotas (cada .astro = uma página)
│   │   ├── index.astro       # Página inicial
│   │   └── sobre.astro       # Página sobre
│   ├── scripts/               # Scripts JavaScript
│   │   ├── alpine.js         # Inicialização do Alpine.js
│   │   └── main.js           # Scripts globais
│   └── styles/                # Styles globais
│       ├── main.scss         # Importações principais
│       ├── base/             # Reset, tokens globais
│       ├── components/       # Estilos de componentes
│       ├── layout/           # Estilos de layout
│       ├── utilities/        # Classes auxiliares
│       └── tokens/           # Design tokens
├── astro.config.mjs          # Configuração do Astro
├── tsconfig.json             # Configuração TypeScript
└── package.json              # Dependências do projeto
```

## 🧞 Comandos

| Comando | Ação |
|---------|------|
| `npm run dev` | Inicia servidor de desenvolvimento em `localhost:4321` |
| `npm run build` | Build para produção em `./dist/` |
| `npm run preview` | Visualiza build localmente antes de publicar |
| `npm run astro` | Executa comandos da CLI do Astro |

## 🎨 Design System

### Breakpoints
Um sistema de breakpoints pré-configurado para design responsivo:

```typescript
- mobile:  (max-width: 480px)
- tablet:  (max-width: 768px)
- laptop:  (max-width: 1024px)
- desktop: (max-width: 1280px)
- wide:    (min-width: 1281px)
```

Use no SCSS:
```scss
@media (max-width: 768px) {
  // estilos para tablet
}
```

### Design Tokens
Configuração centralizada de:
- **Cores** - Palheta de cores do projeto
- **Spacing** - Espaçamentos e gaps
- **Typography** - Fonte padrão (Roboto), tamanhos e pesos
- **Radii** - Border radius padrões
- **Shadows** - Sombras reutilizáveis
- **Z-index** - Camadas verticais
- **Layout** - Grid e containers

Todos os tokens estão em `src/styles/tokens/`

## 🧩 Componentes Disponíveis

### Button
```astro
<Button variant="primary" size="lg">Clique aqui</Button>
```
**Props**: `variant` (primary, secondary), `size` (sm, md, lg)

### Heading
```astro
<Heading level="h1">Título da Página</Heading>
```
**Props**: `level` (h1-h6)

### Text
```astro
<Text as="p" variant="body">Parágrafo de texto</Text>
```

### Image
```astro
<Image 
  alt="Descrição"
  fallbackSrc="url-padrao"
  width={1200}
  height={800}
  sources={[...]}
/>
```

### Container
```astro
<Container role="main">
  Conteúdo com padding responsivo
</Container>
```

## 🔧 Customização

### Adicionar nova página
Crie um arquivo `.astro` em `src/pages/`:
```astro
---
import BaseLayout from "@/layouts/BaseLayout.astro";
---

<BaseLayout title="Minha Página" description="Descrição da página">
  <!-- Conteúdo -->
</BaseLayout>
```

### Adicionar novo estilo
Importe em `src/styles/main.scss`:
```scss
@use './seu-arquivo';
```

### Usar Alpine.js
```astro
<div x-data="{ aberto: false }">
  <button @click="aberto = !aberto">Toggle</button>
  <div x-show="aberto">Conteúdo</div>
</div>
```

## 📦 Dependências

- **astro** ^5.17.1 - Framework web moderno
- **alpinejs** ^3.15.8 - Framework JavaScript minimalista
- **sass** ^1.97.3 - Pré-processador CSS

## 🌐 Deploy

### Vercel/Netlify
```bash
npm run build
```

Os arquivos estáticos estão em `./dist/` prontos para publicação.

## 📚 Documentação

- [Astro Docs](https://docs.astro.build)
- [Alpine.js Docs](https://alpinejs.dev)
- [Sass Docs](https://sass-lang.com/documentation)

## 📝 Licença

MIT - Sinta-se livre para usar este boilerplate em seus projetos!

---

**Desenvolvido com ❤️ para criadores de landing pages modernas**
