import eslint from '@eslint/js';
import tseslint from '@typescript-eslint/eslint-plugin';
import tseslintParser from '@typescript-eslint/parser';
import eslintPluginAstro from 'eslint-plugin-astro';

export default [
  // Configuración global
  {
    ignores: ['dist/**', 'node_modules/**']
  },
  
  // Configuración base para archivos JavaScript/TypeScript
  eslint.configs.recommended,
  
  // Configuración de TypeScript
  {
    files: ['**/*.{ts,tsx}'],
    plugins: {
      '@typescript-eslint': tseslint
    },
    languageOptions: {
      parser: tseslintParser,
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        project: './tsconfig.json'
      }
    },
    rules: {
      // Tus reglas personalizadas para TypeScript
    }
  },
  
  // Configuración para archivos Astro
  ...eslintPluginAstro.configs.recommended,
  {
    files: ['**/*.astro'],
    languageOptions: {
      parserOptions: {
        parser: tseslintParser,
        extraFileExtensions: ['.astro']
      }
    },
    rules: {
      // Reglas personalizadas para archivos Astro
      // Por ejemplo:
      // "astro/no-set-html-directive": "error"
      "no-undef": "error",          // Variable no definida
      "no-unused-vars": "error",    // Variable no utilizada
      "astro/no-conflict-set-directives": "error"  // Conflicto de directivas
    }
  }
];