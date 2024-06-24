create github repo & git clone

##React Framework: Next.js
Installation
```bash
npx create-next-app@latest
```
to run application
```bash
npm run dev
```

##TailWind CSS Library: shadcn, hyperui
Installation
```bash
npx shadcn-ui@latest init
```
to install components like button
```bash
npx shadcn-ui@latest add button
```
- text-primary configured at tailwind.config.js

##Fonts: Import from Google Fonts
to import the font "Inter", in layout.js
```jsx
import { Inter } from "next/font/google";
```

VsCode extensions: 
- PostCSS Language Support
- ES7+ React/Redux/React-Native
- Tailwind CSS IntelliSense


Under the app folder, any folders will be a https route. _NameOfRoute will not make the folder a https route.

Add default template 
```jsx
rcfe
```

Logoipsum to get the placeholder for the logo
public folder for assets
copy paste svg there

make sure your imports are from Next