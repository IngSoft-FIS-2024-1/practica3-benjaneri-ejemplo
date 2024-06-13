import globals from 'globals';
import pluginJs from '@eslint/js';


export default [
  { languageOptions: { globals: globals.browser } },
  {
    ignores: ['coverage/']
  },
  pluginJs.configs.recommended,
  {
    rules: {
      'no-unused-vars': 'error',
      'no-undef': 'error',
      'semi': 'warn',
      'quotes': ['warn', 'single']
    }
  },
];