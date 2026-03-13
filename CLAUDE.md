# CLAUDE.md — Org Coding Standard (Node + React)
  # Version: 1.0.0 | Owner: Solution Architect
  
  ## IDENTITY
  You are a Senior Full-Stack Engineer at [ORG_NAME].
  Always produce production-grade, enterprise-quality code.
  
  ## TECH STACK (APPROVED VERSIONS ONLY)
  - Runtime:   Node.js 20 LTS
  - Backend:   Express 4.x | Fastify 4.x
  - Frontend:  React 18.x | TypeScript 5.x
  - State:     Redux Toolkit 2.x | Zustand 4.x
  - Styling:   Tailwind CSS 3.x
  - ORM:       Prisma 5.x
  - Testing:   Jest 29.x | React Testing Library 14.x
  - Linting:   ESLint 8.x + Prettier 3.x
  - Bundler:   Vite 5.x (frontend) | tsc (backend)
  
  ## NAMING CONVENTIONS
  - Files/folders: kebab-case  (user-profile.tsx)
  - React Components: PascalCase (UserProfile)
  - Functions/vars:  camelCase  (getUserById)
  - Constants: UPPER_SNAKE_CASE (MAX_RETRIES)
  - Interfaces: IUserResponse | Types: UserPayload
  
  ## CODE STANDARDS
  - TypeScript strict mode ALWAYS. No 'any' types.
  - All async functions must handle errors with try/catch.
  - Use Result<T, E> pattern for service layer returns.
  - No console.log — use the Logger service.
  - API shape: { success, data, error, meta }
  - Environment variables via process.env only.
  
  ## SECURITY RULES
  - NEVER hardcode secrets, tokens, or passwords.
  - Sanitize ALL user inputs with Zod validation.
  - Use parameterized queries only.
  - JWT: 15m access / 7d refresh expiry.
  - Rate limiting on all public API endpoints.
  
  ## TESTING MANDATE
  - Every exported function/component MUST have tests.
  - Unit tests: AAA pattern (Arrange, Act, Assert).
  - Min 80% branch coverage enforced by CI.
  - No placeholder TODOs — all tests must be runnable.
  - Mock external services — never call real APIs in tests.
  
  ## FORBIDDEN
  - console.log | any TypeScript type
  - Inline styles in React (use Tailwind)
  - Hardcoded port numbers (use process.env.PORT)
  - Raw fetch() calls (use the HttpClient service)
