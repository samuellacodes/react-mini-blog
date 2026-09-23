# React Mini Blog

A small Mini Blog application built with **React, TypeScript, and Vite**.

## Features

* Header with Dev Insights logo and New Post link
* Three sample blog posts
* Reusable `Post` component
* TypeScript types and typed props
* External CSS and inline styling
* Conditional styling based on post author
* `React.memo` for component optimization
* Unique keys when rendering posts
* `withLogger` Higher-Order Component for mount/unmount logging

## Technologies

* React
* TypeScript
* Vite
* ESLint

## Project Structure

```text
src/
├── components/
│   ├── Header.tsx
│   ├── Post.tsx
│   └── PostList.tsx
├── hoc/
│   └── withLogger.tsx
├── styles/
│   ├── Header.css
│   ├── Post.css
│   └── PostList.css
├── types/
│   └── Post.ts
├── App.tsx
├── index.css
└── main.tsx
```

## Installation and Usage

Clone the repository and install the dependencies:

```bash
git clone <https://github.com/samuellacodes/react-mini-blog.git>
cd react-mini-blog
npm install
```

Start the development server:

```bash
npm run dev
```

Run ESLint:

```bash
npm run lint
```

Create a production build:

```bash
npm run build
```

This project uses **Vite** for development and production builds.

## Design Choices

Functional components were used because they are simple, reusable, and work well with React Hooks. The `Post` component receives its data through typed props, making it reusable for different posts.

External CSS is used for the main component styling, while inline styles are used for conditional highlighting.

`React.memo` is used to reduce unnecessary re-renders of the `Post` component, and unique `key` values are used when rendering posts.

The `withLogger` HOC uses `useEffect` to log when the Header is mounted and unmounted.

## Webpack

Webpack was covered during the learning activities, but this assessment requires the application to use **Vite**, so Vite was used for the final project.

## Challenges

One challenge was understanding how TypeScript types work with React props. Creating a `Post` interface and typed props helped make the data structure clearer.

Another challenge was implementing the HOC while keeping the project compatible with ESLint. Applying the HOC in `App.tsx` allowed the project to pass the lint checks.

## External Packages

* React
* React DOM
* TypeScript
* Vite
* ESLint
