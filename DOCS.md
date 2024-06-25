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

## Fonts: Import from Google Fonts
to import the font "Inter", in layout.js
```jsx
import { Inter } from "next/font/google";
```

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
