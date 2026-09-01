/* Линтер настроен на поиск настоящих ошибок, а не на переписывание стиля:
   код писался долго и вручную, массовые правки стиля только мешали бы ревью. */
const browserGlobals = {
  window: 'readonly', document: 'readonly', navigator: 'readonly', location: 'writable',
  localStorage: 'readonly', sessionStorage: 'readonly', console: 'readonly', fetch: 'readonly',
  setTimeout: 'readonly', clearTimeout: 'readonly', setInterval: 'readonly', clearInterval: 'readonly',
  requestAnimationFrame: 'readonly', cancelAnimationFrame: 'readonly',
  alert: 'readonly', confirm: 'readonly', prompt: 'readonly',
  Blob: 'readonly', URL: 'readonly', URLSearchParams: 'readonly', FileReader: 'readonly',
  CustomEvent: 'readonly', Event: 'readonly', MutationObserver: 'readonly', IntersectionObserver: 'readonly',
  Storage: 'readonly', history: 'readonly', crypto: 'readonly', getComputedStyle: 'readonly',
  DeviceMotionEvent: 'readonly', DeviceOrientationEvent: 'readonly', matchMedia: 'readonly',
  Audio: 'readonly', AudioContext: 'readonly', webkitAudioContext: 'readonly',
  Image: 'readonly', Notification: 'readonly', screen: 'readonly', performance: 'readonly',
  Intl: 'readonly', structuredClone: 'readonly', CSS: 'readonly'
};

const workerGlobals = {
  self: 'readonly', caches: 'readonly', clients: 'readonly', location: 'readonly',
  fetch: 'readonly', Response: 'readonly', Request: 'readonly', URL: 'readonly', console: 'readonly'
};

const nodeGlobals = {
  process: 'readonly', console: 'readonly', fetch: 'readonly', URL: 'readonly',
  setTimeout: 'readonly', clearTimeout: 'readonly', Buffer: 'readonly'
};

const rules = {
  'no-undef': 'error',
  'no-dupe-keys': 'error',
  'no-dupe-args': 'error',
  'no-dupe-else-if': 'error',
  'no-duplicate-case': 'error',
  'no-unreachable': 'error',
  'no-const-assign': 'error',
  'no-func-assign': 'error',
  'no-import-assign': 'error',
  'no-self-assign': 'error',
  'no-self-compare': 'error',
  'no-unsafe-negation': 'error',
  'no-unsafe-optional-chaining': 'error',
  'use-isnan': 'error',
  'valid-typeof': 'error',
  'no-fallthrough': 'error',
  'no-cond-assign': 'error',
  'no-empty': ['warn', { allowEmptyCatch: true }],
  'no-unused-vars': ['warn', { args: 'none', caughtErrors: 'none', varsIgnorePattern: '^_' }]
};

export default [
  {
    files: ['scripts/app.js'],
    languageOptions: { ecmaVersion: 2022, sourceType: 'script', globals: browserGlobals },
    rules
  },
  {
    files: ['scripts/family-auth.js', 'scripts/supabase-config.js', 'scripts/vendor/supabase.js'],
    languageOptions: { ecmaVersion: 2022, sourceType: 'module', globals: browserGlobals },
    rules
  },
  {
    files: ['sw.js'],
    languageOptions: { ecmaVersion: 2022, sourceType: 'script', globals: workerGlobals },
    rules
  },
  {
    files: ['tools/**/*.mjs', 'eslint.config.js'],
    languageOptions: { ecmaVersion: 2022, sourceType: 'module', globals: nodeGlobals },
    rules
  },
  {
    /* В тестах часть кода выполняется внутри страницы (page.evaluate),
       поэтому здесь легальны и Node-, и браузерные глобальные объекты. */
    files: ['tests/**/*.mjs'],
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: 'module',
      globals: { ...nodeGlobals, ...browserGlobals, isBackupKey: 'readonly' }
    },
    rules
  }
];
