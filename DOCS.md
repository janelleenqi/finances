create github repo & git clone

## React Framework: Next.js
Installation
```bash
npx create-next-app@latest
```
to run application
```bash
npm run dev
```

## TailWind CSS Library: shadcn, hyperui
Installation
```bash
npx shadcn-ui@latest init
```
to install components like button
```bash
npx shadcn-ui@latest add button
```
- text-primary configured at tailwind.config.js
- Icons: lucide-react is installed with shadcn
to install dialogue component
```bash
npx shadcn-ui@latest add dialog
```
- button
- dialog
- input
- sonner

## Fonts: Import from Google Fonts
to import the font "Inter", in layout.js
```jsx
import { Inter } from "next/font/google";
```

## Emoji: Import from https://www.npmjs.com/package/emoji-picker-react
note: emoji picker is only workable in client

## VsCode extensions: 
- PostCSS Language Support
- ES7+ React/Redux/React-Native
- Tailwind CSS IntelliSense


## Project Structure
Under the app folder, any folders will be a https route. _NameOfRoute will not make the folder a https route. (NameOfRoute) will also not be a https route.
### Creating a new file
Add default template 
```jsx
rcfe
```
make sure your imports are from Next


## Assets
in folder '.public'
### Logo: Logoipsum
svg images for logo placeholders



## Authentication: Clerk
Installation, then follow other steps
```bash
npm install @clerk/nextjs
```
### Set your environment variables
In '.env.local' file, add these keys (retrieve these keys anytime from the API keys page).
```py
#to client side ui
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_ZnVuLW1vbGx5LTMuY2xlcmsuYWNjb3VudHMuZGV2JA

#to nextjs server
CLERK_SECRET_KEY=sk_test_qwMD0oh8oHbNK7d16t2Zf31mD3PNwYZnfhzqnTUoZ6
```
### Create middleware nextjs on server
'middleware.ts' to enforce authentication: middleware that runs on nextjs server before rendering components to client (before any requests are completed)
```ts
//routes where authentication is needed for request to be completed
const isProtectedRoute = createRouteMatcher([
  '/dashboard',
]);
```
connect button to a link
```js
<Link href = {'/sign-in'}>
    <Button>Get Started</Button>
</Link>
```

### useEffect
Components that requires useEffect only works in a Client Component. So its parents need to be marked with "use client", else they're Server Components by default.
```js
"use client"
```
- useEffect

### components
<div></div> vs <UserButton/>
```js
<div className='fixed bottom-10 p-5 flex gap-2 items-center'>
  <UserButton/>Profile
</div>
```

## Database: Postgres
- Drizzle ORM & PostgreSQL
- database is serverless
- PostgreSQL database: Neon
Installation
- drizzle-orm and @neondatabase/serverless
- drizzle-kit as a development dependency
```bash
npm i drizzle-orm @neondatabase/serverless
npm i -D drizzle-kit
```
Problem where an older version of react was needed
```bash
npm install drizzle-orm @neondatabase/serverless --legacy-peer-deps
```
- The --legacy-peer-deps option tells npm to use a more lenient peer dependency resolution algorithm (older, npm v6 instead of npm v7) 
for resolving peer dependencies, which can often resolve conflicts react version peer dependency conflicts.
For .env.local
```bash
npm install dotenv
```
Use process.env.NEXT_PUBLIC_DATABASE_URL so you do not expose your url. To expose, export.
After all installations, running
```npm run db:push```
will give ```[✓] Changes applied``` if it works
To run app
```npm run db:studio```


## npm vs pip
- npm install will create a folder node_modules and install dependencies there
- pip install will install python packages (using uv is good cause u can have a particular python version and its packages)

