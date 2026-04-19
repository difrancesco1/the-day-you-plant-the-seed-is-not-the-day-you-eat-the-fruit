# CLAUDE.md

## Conventions

- Backend: async/await everywhere, Pydantic models for request/response schemas, each API domain in its own sub-package under `api/`
- Frontend: Tailwind for styling, modular component design pattern, kebab file naming (example-component.tsx)
- Backend deps in `requirements.txt`, frontend in `package.json` via pnpm
- Use Shadcn for UI components where you can

## Do Not

- Implement large changes without properly planning with the end user
- Break or change existing API contracts without updating both backend and frontend together
- Change asset formats/locations or deployment configs without reason
- Commit `.env` files or secrets

## Good to know

- Media uploads go through Supabase storage (`services/storage.py`), not the local filesystem
- Middleware order in `main.py` matters, don't reorder without understanding the auth flow
- If changing an endpoint shape, both backend route and the corresponding frontend api logic must be updated together
