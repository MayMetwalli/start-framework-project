
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: 'C:/Program Files/Git/start-framework-project/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "redirectTo": "/C:/Program Files/Git/start-framework-project/home",
    "route": "/C:/Program Files/Git/start-framework-project"
  },
  {
    "renderMode": 2,
    "route": "/C:/Program Files/Git/start-framework-project/home"
  },
  {
    "renderMode": 2,
    "route": "/C:/Program Files/Git/start-framework-project/about"
  },
  {
    "renderMode": 2,
    "route": "/C:/Program Files/Git/start-framework-project/portfolio"
  },
  {
    "renderMode": 2,
    "route": "/C:/Program Files/Git/start-framework-project/contact"
  }
],
  assets: {
    'index.csr.html': {size: 5984, hash: 'f717c61558c382284b15b7f6565f17f4a7ac4cd3a842db5230a78c235e44c898', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1127, hash: 'a25365ad09516623de3d0248c764d796bd37cd44f513e9a8325ff08439bd801b', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'portfolio/index.html': {size: 17848, hash: 'b4631493561a90996bf7b74f6f224fa181cf28133d3c1eb8788c74c501dcad24', text: () => import('./assets-chunks/portfolio_index_html.mjs').then(m => m.default)},
    'about/index.html': {size: 17848, hash: 'b4631493561a90996bf7b74f6f224fa181cf28133d3c1eb8788c74c501dcad24', text: () => import('./assets-chunks/about_index_html.mjs').then(m => m.default)},
    'home/index.html': {size: 17848, hash: 'b4631493561a90996bf7b74f6f224fa181cf28133d3c1eb8788c74c501dcad24', text: () => import('./assets-chunks/home_index_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 17848, hash: 'b4631493561a90996bf7b74f6f224fa181cf28133d3c1eb8788c74c501dcad24', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'styles-J7BN47AV.css': {size: 305312, hash: '1pwIKQx7/Nk', text: () => import('./assets-chunks/styles-J7BN47AV_css.mjs').then(m => m.default)}
  },
};
