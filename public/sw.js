if(!self.define){let e,s={};const n=(n,i)=>(n=new URL(n+".js",i).href,s[n]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=s,document.head.appendChild(e)}else e=n,importScripts(n),s()})).then((()=>{let e=s[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(i,r)=>{const a=e||("document"in self?document.currentScript.src:"")||location.href;if(s[a])return;let c={};const t=e=>n(e,a),o={module:{uri:a},exports:c,require:t};s[a]=Promise.all(i.map((e=>o[e]||t(e)))).then((e=>(r(...e),c)))}}define(["./workbox-5afaf374"],(function(e){"use strict";importScripts("fallback-mOf6vVDjr7oZiTs1DNYnp.js"),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/Resume.pdf",revision:"ca338f517ba5579c34a38ec6ce8efcb1"},{url:"/_next/static/chunks/125-68e152f1813c57a4.js",revision:"mOf6vVDjr7oZiTs1DNYnp"},{url:"/_next/static/chunks/731-cde4a786e34c3bce.js",revision:"mOf6vVDjr7oZiTs1DNYnp"},{url:"/_next/static/chunks/972-a27cae45baf52fb5.js",revision:"mOf6vVDjr7oZiTs1DNYnp"},{url:"/_next/static/chunks/framework-5f4595e5518b5600.js",revision:"mOf6vVDjr7oZiTs1DNYnp"},{url:"/_next/static/chunks/main-a46c5bcbfeefc6bc.js",revision:"mOf6vVDjr7oZiTs1DNYnp"},{url:"/_next/static/chunks/pages/_app-b6c35b89044e3dad.js",revision:"mOf6vVDjr7oZiTs1DNYnp"},{url:"/_next/static/chunks/pages/_error-1995526792b513b2.js",revision:"mOf6vVDjr7oZiTs1DNYnp"},{url:"/_next/static/chunks/pages/_offline-e72381431769c7f6.js",revision:"mOf6vVDjr7oZiTs1DNYnp"},{url:"/_next/static/chunks/pages/feed-e124aee49175000a.js",revision:"mOf6vVDjr7oZiTs1DNYnp"},{url:"/_next/static/chunks/pages/index-f5ff8efb2ca9cf5c.js",revision:"mOf6vVDjr7oZiTs1DNYnp"},{url:"/_next/static/chunks/pages/posts-fb89556b0c197002.js",revision:"mOf6vVDjr7oZiTs1DNYnp"},{url:"/_next/static/chunks/pages/posts/%5Bslug%5D-780e53fda9126631.js",revision:"mOf6vVDjr7oZiTs1DNYnp"},{url:"/_next/static/chunks/pages/posts/page/%5Bpage%5D-7b1e066d403d1e00.js",revision:"mOf6vVDjr7oZiTs1DNYnp"},{url:"/_next/static/chunks/pages/posts/search-a8a8959b68e290eb.js",revision:"mOf6vVDjr7oZiTs1DNYnp"},{url:"/_next/static/chunks/pages/posts/tag/%5Btag%5D-d3afeee09e3f464e.js",revision:"mOf6vVDjr7oZiTs1DNYnp"},{url:"/_next/static/chunks/pages/works-bd7bb2e13e37391d.js",revision:"mOf6vVDjr7oZiTs1DNYnp"},{url:"/_next/static/chunks/pages/works/%5Bid%5D-8683afcbff6b356d.js",revision:"mOf6vVDjr7oZiTs1DNYnp"},{url:"/_next/static/chunks/polyfills-5cd94c89d3acac5f.js",revision:"mOf6vVDjr7oZiTs1DNYnp"},{url:"/_next/static/chunks/webpack-42cdea76c8170223.js",revision:"mOf6vVDjr7oZiTs1DNYnp"},{url:"/_next/static/css/416c741e7307f75c.css",revision:"mOf6vVDjr7oZiTs1DNYnp"},{url:"/_next/static/mOf6vVDjr7oZiTs1DNYnp/_buildManifest.js",revision:"mOf6vVDjr7oZiTs1DNYnp"},{url:"/_next/static/mOf6vVDjr7oZiTs1DNYnp/_middlewareManifest.js",revision:"mOf6vVDjr7oZiTs1DNYnp"},{url:"/_next/static/mOf6vVDjr7oZiTs1DNYnp/_ssgManifest.js",revision:"mOf6vVDjr7oZiTs1DNYnp"},{url:"/_next/static/media/griffex.3c71f276.png",revision:"mOf6vVDjr7oZiTs1DNYnp"},{url:"/_next/static/media/noften.1012f98f.png",revision:"mOf6vVDjr7oZiTs1DNYnp"},{url:"/_offline",revision:"mOf6vVDjr7oZiTs1DNYnp"},{url:"/cover-image-thumb.jpg",revision:"5bd59c99e302997d1ff9e54d7d966c6d"},{url:"/favicon.ico",revision:"aff29f359f5d4b7044254f73fa587fd1"},{url:"/icon-128x128.png",revision:"a45ac5e4ce7f0a46e132c0834ea2305c"},{url:"/icon-144x144.png",revision:"c4a6bf45f0f8b447c35bfbbd2256c1e9"},{url:"/icon-152x152.png",revision:"6c73bb3e92cbed55b77eda34f11af9f4"},{url:"/icon-192x192.png",revision:"7e9a4ee710bea32fbeb6e207483953fb"},{url:"/icon-384x384.png",revision:"b67c1243ca28eeffc72d722b2aea5746"},{url:"/icon-512x512.png",revision:"b1d8899603946b1cd02933e68c55abcc"},{url:"/icon-72x72.png",revision:"0f6514c025846e2255b42c85676d2e03"},{url:"/icon-96x96.png",revision:"84eb461400dd1a7247c8b12ecc646f1c"},{url:"/images/default-cover.jpg",revision:"24ea206b8da2b8b916c63fed288cd862"},{url:"/images/griffex.png",revision:"42b0aa3b9c83ed34e9a1b4faa55f2fd6"},{url:"/images/logo-dark.svg",revision:"5f63be885cbecc90bc4d56fb4746245c"},{url:"/images/logo.svg",revision:"0ea1ebff8bc6a270dfbb903b565b5f3a"},{url:"/images/logo_thick-dark.png",revision:"be59897cd46f916c3dac3a7c9f4ecfad"},{url:"/images/logo_thick-dark.svg",revision:"12e704798f415f4e65587b4214ffd473"},{url:"/images/logo_thick.png",revision:"8de24a7d3827c5ce4f1434cfd78377c3"},{url:"/images/logo_thick.svg",revision:"3e9047f00e6c98449a93cfa5f57b5ec6"},{url:"/images/noften.png",revision:"20e75570ad805b0e0b8aa8fc76993c32"},{url:"/images/profile.jpg",revision:"32f974813ba7e4ddab005a7efa996557"},{url:"/manifest.json",revision:"4a88e2e775743a7bf56d1d0f4c92b5dc"},{url:"/vercel.svg",revision:"4b4f1876502eb6721764637fe5c41702"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:n,state:i})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s},{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET")}));
