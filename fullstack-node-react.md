my-app/
  ├── CLAUDE.md                    ← L1 org standard (auto-loaded)
  ├── .vscode/
  │   ├── extensions.json          ← Team extension recommendations
  │   └── settings.json            ← ESLint + Prettier + Claude settings
  ├── packages/
  │   ├── backend/                 ← Node.js / Express / Fastify
  │   │   ├── src/
  │   │   │   ├── config/          ← env, db, app config
  │   │   │   ├── modules/
  │   │   │   │   └── users/
  │   │   │   │       ├── users.controller.ts
  │   │   │   │       ├── users.service.ts
  │   │   │   │       ├── users.repository.ts
  │   │   │   │       ├── users.routes.ts
  │   │   │   │       ├── users.schema.ts   ← Zod validation
  │   │   │   │       ├── users.types.ts
  │   │   │   │       └── __tests__/
  │   │   │   ├── shared/          ← logger, result, http-client
  │   │   │   └── middlewares/     ← auth, rate-limit, error-handler
  │   │   ├── prisma/schema.prisma
  │   │   └── package.json
  │   └── frontend/                ← React + Vite + TypeScript
  │       ├── src/
  │       │   ├── components/      ← Shared UI components
  │       │   ├── features/        ← Feature slices (auth, dashboard)
  │       │   │   └── auth/
  │       │   │       ├── AuthPage.tsx
  │       │   │       ├── useAuth.ts
  │       │   │       ├── auth.api.ts
  │       │   │       └── __tests__/
  │       │   ├── hooks/           ← Shared custom hooks
  │       │   ├── services/        ← API client, interceptors
  │       │   └── store/           ← Redux store
  │       └── package.json
  └── package.json                 ← npm workspaces root
