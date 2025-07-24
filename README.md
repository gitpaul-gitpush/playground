# React TypeScript Starter

A minimalist React application setup with TypeScript, Webpack, and modern development tools.

## Features

- ⚛️ React 19
- 📝 TypeScript for type safety
- 🔨 Webpack 5 for bundling
- 🔥 Hot Module Replacement
- 📦 HTML Webpack Plugin for automatic HTML generation

## Prerequisites

- Node.js (Latest LTS version recommended)
- npm (comes with Node.js)

## Getting Started

1. Clone the repository
2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```
This will open your default browser to `http://localhost:3000`

4. To create a production build:
```bash
npm run build
```
The build artifacts will be stored in the `dist/` directory.

## Project Structure

```
.
├── src/
│   ├── index.html    # HTML template
│   └── index.tsx     # Application entry point
├── package.json      # Project dependencies and scripts
├── tsconfig.json     # TypeScript configuration
└── webpack.config.js # Webpack configuration
```

## Scripts

- `npm start` - Starts the development server with hot reload
- `npm run build` - Creates a production build in the `dist` directory

## Dependencies

### Main Dependencies
- React
- React DOM

### Development Dependencies
- TypeScript
- Webpack (with development server and HTML plugin)
- TypeScript loader for Webpack
- React/React DOM type definitions

## License

ISC