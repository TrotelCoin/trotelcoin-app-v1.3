if(!self.define){let e,a={};const s=(s,t)=>(s=new URL(s+".js",t).href,a[s]||new Promise((a=>{if("document"in self){const e=document.createElement("script");e.src=s,e.onload=a,document.head.appendChild(e)}else e=s,importScripts(s),a()})).then((()=>{let e=a[s];if(!e)throw new Error(`Module ${s} didn’t register its module`);return e})));self.define=(t,i)=>{const n=e||("document"in self?document.currentScript.src:"")||location.href;if(a[n])return;let c={};const r=e=>s(e,n),o={module:{uri:n},exports:c,require:r};a[n]=Promise.all(t.map((e=>o[e]||r(e)))).then((e=>(i(...e),c)))}}define(["./workbox-9b4d2a02"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/app-build-manifest.json",revision:"d9c3ccd07a18594c621ae2fbc0ba66be"},{url:"/_next/static/0EBYkWOia0vt27kqTPvUt/_buildManifest.js",revision:"2b54d7db375d2b4c0e6af318090bebea"},{url:"/_next/static/0EBYkWOia0vt27kqTPvUt/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/_next/static/chunks/1174.b266dd48f74236b6.js",revision:"b266dd48f74236b6"},{url:"/_next/static/chunks/1598-1edcab9ba04a3f24.js",revision:"0EBYkWOia0vt27kqTPvUt"},{url:"/_next/static/chunks/1685-c9f79ffa1496139e.js",revision:"0EBYkWOia0vt27kqTPvUt"},{url:"/_next/static/chunks/1773-49452523f8273ae3.js",revision:"0EBYkWOia0vt27kqTPvUt"},{url:"/_next/static/chunks/1852-86af534ea4fb01c3.js",revision:"0EBYkWOia0vt27kqTPvUt"},{url:"/_next/static/chunks/188.852dbd1148666379.js",revision:"852dbd1148666379"},{url:"/_next/static/chunks/223.b5292fac0b08664c.js",revision:"b5292fac0b08664c"},{url:"/_next/static/chunks/287-ff428a981c130b59.js",revision:"0EBYkWOia0vt27kqTPvUt"},{url:"/_next/static/chunks/3289-bf469c3f842ff5ed.js",revision:"0EBYkWOia0vt27kqTPvUt"},{url:"/_next/static/chunks/3521-11e7879bc4153df4.js",revision:"0EBYkWOia0vt27kqTPvUt"},{url:"/_next/static/chunks/4478.aefffeb37352c5b5.js",revision:"aefffeb37352c5b5"},{url:"/_next/static/chunks/4696.b4352c6297349a0f.js",revision:"b4352c6297349a0f"},{url:"/_next/static/chunks/4911-7e4c85671e64c1d6.js",revision:"0EBYkWOia0vt27kqTPvUt"},{url:"/_next/static/chunks/5250-1d59ba113329731e.js",revision:"0EBYkWOia0vt27kqTPvUt"},{url:"/_next/static/chunks/5346-5b3c849984affd5d.js",revision:"0EBYkWOia0vt27kqTPvUt"},{url:"/_next/static/chunks/5544-c28eae5d70a576f6.js",revision:"0EBYkWOia0vt27kqTPvUt"},{url:"/_next/static/chunks/5883.e4477e9126daa625.js",revision:"e4477e9126daa625"},{url:"/_next/static/chunks/6064-566f025961ac658b.js",revision:"0EBYkWOia0vt27kqTPvUt"},{url:"/_next/static/chunks/6383-ddda9f54068d275f.js",revision:"0EBYkWOia0vt27kqTPvUt"},{url:"/_next/static/chunks/6526-cfcb244d420b35bc.js",revision:"0EBYkWOia0vt27kqTPvUt"},{url:"/_next/static/chunks/6621-b5cdc697895105d5.js",revision:"0EBYkWOia0vt27kqTPvUt"},{url:"/_next/static/chunks/6770.00daeb6b03469e87.js",revision:"00daeb6b03469e87"},{url:"/_next/static/chunks/682-82900fc443188faf.js",revision:"0EBYkWOia0vt27kqTPvUt"},{url:"/_next/static/chunks/6878.5657c32e06476a2e.js",revision:"5657c32e06476a2e"},{url:"/_next/static/chunks/696-ccb55c6722b0f08f.js",revision:"0EBYkWOia0vt27kqTPvUt"},{url:"/_next/static/chunks/703-6f0ec9bfb52c7db6.js",revision:"0EBYkWOia0vt27kqTPvUt"},{url:"/_next/static/chunks/710-76e90e6f2d9ce58b.js",revision:"0EBYkWOia0vt27kqTPvUt"},{url:"/_next/static/chunks/7186-7e5f88a3eeab9ca3.js",revision:"0EBYkWOia0vt27kqTPvUt"},{url:"/_next/static/chunks/7238-f32c506ea9ebe284.js",revision:"0EBYkWOia0vt27kqTPvUt"},{url:"/_next/static/chunks/7243-cecbbe845e68f57d.js",revision:"0EBYkWOia0vt27kqTPvUt"},{url:"/_next/static/chunks/7738-080ecafea4f71a57.js",revision:"0EBYkWOia0vt27kqTPvUt"},{url:"/_next/static/chunks/7908-a368e44dbe6f3609.js",revision:"0EBYkWOia0vt27kqTPvUt"},{url:"/_next/static/chunks/8016-8b28e1360fbaa44b.js",revision:"0EBYkWOia0vt27kqTPvUt"},{url:"/_next/static/chunks/8069-6086411732849f97.js",revision:"0EBYkWOia0vt27kqTPvUt"},{url:"/_next/static/chunks/8388-9ba1d112974a6bac.js",revision:"0EBYkWOia0vt27kqTPvUt"},{url:"/_next/static/chunks/9315-d519120f2c60575d.js",revision:"0EBYkWOia0vt27kqTPvUt"},{url:"/_next/static/chunks/app/%5Blang%5D/%5B...not-found%5D/page-18b36eef7ac43d3e.js",revision:"0EBYkWOia0vt27kqTPvUt"},{url:"/_next/static/chunks/app/%5Blang%5D/%5BquizId%5D/bitcoin/introduction-to-bitcoin/page-83d23a87df9ad6b5.js",revision:"0EBYkWOia0vt27kqTPvUt"},{url:"/_next/static/chunks/app/%5Blang%5D/%5BquizId%5D/bitcoin/the-history-of-bitcoin/page-0d0a052151e81f57.js",revision:"0EBYkWOia0vt27kqTPvUt"},{url:"/_next/static/chunks/app/%5Blang%5D/%5BquizId%5D/blockchain/consensus-mechanisms/page-2df2194447364d58.js",revision:"0EBYkWOia0vt27kqTPvUt"},{url:"/_next/static/chunks/app/%5Blang%5D/%5BquizId%5D/blockchain/what-is-a-blockchain/page-dbc0dc3179d55430.js",revision:"0EBYkWOia0vt27kqTPvUt"},{url:"/_next/static/chunks/app/%5Blang%5D/%5BquizId%5D/ethereum/evm/page-daf67a771f9e09f3.js",revision:"0EBYkWOia0vt27kqTPvUt"},{url:"/_next/static/chunks/app/%5Blang%5D/%5BquizId%5D/ethereum/introduction-to-ethereum/page-d37d418b8cf8b9b1.js",revision:"0EBYkWOia0vt27kqTPvUt"},{url:"/_next/static/chunks/app/%5Blang%5D/%5BquizId%5D/ethereum/smart-contracts/page-4810c679a430d5d3.js",revision:"0EBYkWOia0vt27kqTPvUt"},{url:"/_next/static/chunks/app/%5Blang%5D/%5BquizId%5D/ethereum/understand-the-layers-2/page-95f11e126a2a40df.js",revision:"0EBYkWOia0vt27kqTPvUt"},{url:"/_next/static/chunks/app/%5Blang%5D/%5BquizId%5D/governance/what-are-daos/page-d71a8ad1af7a2fe1.js",revision:"0EBYkWOia0vt27kqTPvUt"},{url:"/_next/static/chunks/app/%5Blang%5D/%5BquizId%5D/layout-a2343f40de3d22f1.js",revision:"0EBYkWOia0vt27kqTPvUt"},{url:"/_next/static/chunks/app/%5Blang%5D/%5BquizId%5D/stablecoins/introduction-to-stablecoins/page-a2f984d46459c019.js",revision:"0EBYkWOia0vt27kqTPvUt"},{url:"/_next/static/chunks/app/%5Blang%5D/%5BquizId%5D/trotelcoin/claim-your-nfts/page-9d5625f61b2e6e27.js",revision:"0EBYkWOia0vt27kqTPvUt"},{url:"/_next/static/chunks/app/%5Blang%5D/%5BquizId%5D/trotelcoin/introduction-to-trotelcoin/page-7a179ba9cc94b15a.js",revision:"0EBYkWOia0vt27kqTPvUt"},{url:"/_next/static/chunks/app/%5Blang%5D/%5BquizId%5D/trotelcoin/stake-your-trotelcoins/page-1e0e5974bc5dda06.js",revision:"0EBYkWOia0vt27kqTPvUt"},{url:"/_next/static/chunks/app/%5Blang%5D/%5BquizId%5D/wallet/create-your-first-wallet/page-b5957017f9705edc.js",revision:"0EBYkWOia0vt27kqTPvUt"},{url:"/_next/static/chunks/app/%5Blang%5D/%5BquizId%5D/wallet/make-your-first-transaction/page-d81e216fed798306.js",revision:"0EBYkWOia0vt27kqTPvUt"},{url:"/_next/static/chunks/app/%5Blang%5D/%5BquizId%5D/wallet/secure-your-wallet/page-0ce72b16ec9243cd.js",revision:"0EBYkWOia0vt27kqTPvUt"},{url:"/_next/static/chunks/app/%5Blang%5D/%5BquizId%5D/wallet/sign-in-with-your-wallet/page-e80282c9880079c4.js",revision:"0EBYkWOia0vt27kqTPvUt"},{url:"/_next/static/chunks/app/%5Blang%5D/%5BquizId%5D/web3/web3-essentials/page-ba5c60dd1d8b817c.js",revision:"0EBYkWOia0vt27kqTPvUt"},{url:"/_next/static/chunks/app/%5Blang%5D/account/page-7098c883f1d09222.js",revision:"0EBYkWOia0vt27kqTPvUt"},{url:"/_next/static/chunks/app/%5Blang%5D/category/%5Bcategory%5D/page-59697a3c37596699.js",revision:"0EBYkWOia0vt27kqTPvUt"},{url:"/_next/static/chunks/app/%5Blang%5D/home/page-66929534cf72bbc3.js",revision:"0EBYkWOia0vt27kqTPvUt"},{url:"/_next/static/chunks/app/%5Blang%5D/layout-7acd5105c6b4a9b5.js",revision:"0EBYkWOia0vt27kqTPvUt"},{url:"/_next/static/chunks/app/%5Blang%5D/leaderboard/page-0bb5e85cd65caadd.js",revision:"0EBYkWOia0vt27kqTPvUt"},{url:"/_next/static/chunks/app/%5Blang%5D/learn/chapters/page-565553c64db24f59.js",revision:"0EBYkWOia0vt27kqTPvUt"},{url:"/_next/static/chunks/app/%5Blang%5D/learn/page-4594aef59e69cdb1.js",revision:"0EBYkWOia0vt27kqTPvUt"},{url:"/_next/static/chunks/app/%5Blang%5D/learn/vocabulary/page-fda75887b7e6eb4f.js",revision:"0EBYkWOia0vt27kqTPvUt"},{url:"/_next/static/chunks/app/%5Blang%5D/not-found-de8b3807e0b55926.js",revision:"0EBYkWOia0vt27kqTPvUt"},{url:"/_next/static/chunks/app/%5Blang%5D/not-premium/page-818dbc6d865aabfc.js",revision:"0EBYkWOia0vt27kqTPvUt"},{url:"/_next/static/chunks/app/%5Blang%5D/shop/inventory/page-db0ff3476fb9e560.js",revision:"0EBYkWOia0vt27kqTPvUt"},{url:"/_next/static/chunks/app/%5Blang%5D/shop/items/page-b9f7582735458f1d.js",revision:"0EBYkWOia0vt27kqTPvUt"},{url:"/_next/static/chunks/app/%5Blang%5D/shop/page-0c70a6e85bd29d10.js",revision:"0EBYkWOia0vt27kqTPvUt"},{url:"/_next/static/chunks/app/%5Blang%5D/shop/ranks/page-b7f4b3e9cae37dc1.js",revision:"0EBYkWOia0vt27kqTPvUt"},{url:"/_next/static/chunks/app/%5Blang%5D/statistics/page-5d38d8a2f276f095.js",revision:"0EBYkWOia0vt27kqTPvUt"},{url:"/_next/static/chunks/app/%5Blang%5D/terms-of-service/page-4f3b0be86ef4b4d4.js",revision:"0EBYkWOia0vt27kqTPvUt"},{url:"/_next/static/chunks/app/%5Blang%5D/wallet/buy/page-57ef829a442a1187.js",revision:"0EBYkWOia0vt27kqTPvUt"},{url:"/_next/static/chunks/app/%5Blang%5D/wallet/claim/page-cdeb74239fb21bcc.js",revision:"0EBYkWOia0vt27kqTPvUt"},{url:"/_next/static/chunks/app/%5Blang%5D/wallet/page-9b09666a6dccef7c.js",revision:"0EBYkWOia0vt27kqTPvUt"},{url:"/_next/static/chunks/app/%5Blang%5D/wallet/stake/page-8068e3e4e827fa0f.js",revision:"0EBYkWOia0vt27kqTPvUt"},{url:"/_next/static/chunks/app/%5Blang%5D/wallet/swap/page-f2d13de4d86a8e3f.js",revision:"0EBYkWOia0vt27kqTPvUt"},{url:"/_next/static/chunks/app/_not-found-a8a4a338dd233099.js",revision:"0EBYkWOia0vt27kqTPvUt"},{url:"/_next/static/chunks/fd9d1056-28cf2dc9a72dfb63.js",revision:"0EBYkWOia0vt27kqTPvUt"},{url:"/_next/static/chunks/framework-08aa667e5202eed8.js",revision:"0EBYkWOia0vt27kqTPvUt"},{url:"/_next/static/chunks/main-429a458c0bd680e1.js",revision:"0EBYkWOia0vt27kqTPvUt"},{url:"/_next/static/chunks/main-app-25082b317387445b.js",revision:"0EBYkWOia0vt27kqTPvUt"},{url:"/_next/static/chunks/pages/_app-57bdff7978360b1c.js",revision:"0EBYkWOia0vt27kqTPvUt"},{url:"/_next/static/chunks/pages/_error-29037c284dd0eec6.js",revision:"0EBYkWOia0vt27kqTPvUt"},{url:"/_next/static/chunks/polyfills-c67a75d1b6f99dc8.js",revision:"837c0df77fd5009c9e46d446188ecfd0"},{url:"/_next/static/chunks/webpack-4c83470c3ee1f2d2.js",revision:"0EBYkWOia0vt27kqTPvUt"},{url:"/_next/static/css/5cf8883976cc858b.css",revision:"5cf8883976cc858b"},{url:"/_next/static/css/74ca9f22b09fe3e5.css",revision:"74ca9f22b09fe3e5"},{url:"/_next/static/css/7c81f1e1351f6790.css",revision:"7c81f1e1351f6790"},{url:"/_next/static/css/9b12fb59ed7d39f6.css",revision:"9b12fb59ed7d39f6"},{url:"/_next/static/media/0662b626da5db789-s.p.woff2",revision:"7092f7117afa134bee383085e5baffcb"},{url:"/_next/static/media/10939feefdad71be-s.woff2",revision:"72b3ae37567ee5efdf2254b657c36ba9"},{url:"/_next/static/media/1b097aa12b72d9f9-s.woff2",revision:"ba40202b1c1dcacbdbb7bcd2042a410f"},{url:"/_next/static/media/1fe84a733deddad4-s.woff2",revision:"c9f346d5d19d0d10e27b26904f5f6d7f"},{url:"/_next/static/media/20b8b8f6f47c1e10-s.p.woff2",revision:"7def222d1a45cb1cb7d8c3ae675dbdcc"},{url:"/_next/static/media/370d1cc320ec5619-s.woff2",revision:"a6ff41d10fa89e7f8fec937c243d7428"},{url:"/_next/static/media/376dd8dc38524313-s.woff2",revision:"af4d371a10271dafeb343f1eace762bc"},{url:"/_next/static/media/3828f203592f7603-s.p.woff2",revision:"e9fd398a43c9e51f9ee14e757eaf95d9"},{url:"/_next/static/media/51051a7edfeea436-s.p.woff2",revision:"f1b74fe764967ea8636858297f750d66"},{url:"/_next/static/media/591327bf3b62a611-s.woff2",revision:"0ed299a4bb5262e17e2145783b2c18f1"},{url:"/_next/static/media/7777133e901cd5ed-s.woff2",revision:"a09f2fccfee35b7247b08a1a266f0328"},{url:"/_next/static/media/7a78f1ce0329757f-s.woff2",revision:"15ef609d3bea2ccc8a36910ba440e1f3"},{url:"/_next/static/media/839135d04a097cea-s.p.woff2",revision:"79e6e81d255edac7e8627c7e16baccf5"},{url:"/_next/static/media/87c72f23c47212b9-s.p.woff2",revision:"790d0c8dbcd491d29d58f1369c199d40"},{url:"/_next/static/media/8d1a51bb45dd4d14-s.p.woff2",revision:"185244e129c78b5a1e8de9b0319e5f93"},{url:"/_next/static/media/916d3686010a8de2-s.woff2",revision:"9212f6f9860f9fc6c69b02fedf6db8c3"},{url:"/_next/static/media/953974ac5e9ff354-s.woff2",revision:"6731e1ba3788bda094c89ee8fc131aef"},{url:"/_next/static/media/9a881e2ac07d406b-s.woff2",revision:"25b0e113ca7cce3770d542736db26368"},{url:"/_next/static/media/9b44cfc48addbfc9-s.woff2",revision:"b8f12782fb372c92a5c8e3380f926e17"},{url:"/_next/static/media/ac614beb32f7a7c2-s.p.woff2",revision:"20f5992a9c019fb146a38e1cc0c101d3"},{url:"/_next/static/media/aefc8ad6d88b3354-s.woff2",revision:"6a4298fc0390ec22c52f618daa0e82bf"},{url:"/_next/static/media/bd427f25ac24d036-s.woff2",revision:"5426bf50c8455aab7a3e89d1138eb969"},{url:"/_next/static/media/c04551857776278f-s.woff2",revision:"8d91ec1ca2d8b56640a47117e313a3e9"},{url:"/_next/static/media/d36a2a2bb416f59e-s.woff2",revision:"a7f7eebec745ef48ccf7a3d08c66d84a"},{url:"/_next/static/media/d869208648ca5469-s.woff2",revision:"72993dddf88a63e8f226656f7de88e57"},{url:"/_next/static/media/e025c64520263018-s.p.woff2",revision:"dc820d9f0f62811268590ff631f36be9"},{url:"/_next/static/media/f93b79c1ea023ab6-s.woff2",revision:"96b6d54684daa94742f7bfd72a981213"},{url:"/assets/banner/trotelcoin-banner.png",revision:"75317bc4dff27403f345de67c7f2b644"},{url:"/assets/courses/1/algorithm-simulation.png",revision:"2d1ddf40410d9b84e7b84e5a24ad190c"},{url:"/assets/courses/1/distribution.png",revision:"53608a4854f5e7ce9d4f78fdbb4c23d3"},{url:"/assets/courses/1/liquidity.png",revision:"60d81a539755799af589e5a8cfbdce05"},{url:"/assets/courses/1/tokenomics.png",revision:"4d1b53e4e8ba44444fa4d2cfae88baff"},{url:"/assets/courses/1/web2-web3.png",revision:"4d4858ad6310d2adfb1a47b288facfea"},{url:"/assets/courses/16/staking-interface.png",revision:"edd8fa29718bae875e3eab4eea9b026e"},{url:"/assets/courses/16/staking-voting-power.png",revision:"98ddc788792c233d7fc74032b40e9e91"},{url:"/assets/courses/2/advantages.png",revision:"b88da50b1a769510d93ae60a6d2b37b6"},{url:"/assets/courses/2/claim.png",revision:"9a8f8ef83a453f0a081e284381dcbf4d"},{url:"/assets/courses/3/seed-phrase.png",revision:"3f043c4a4315833e4bf06beb60641942"},{url:"/assets/courses/3/wallet.png",revision:"609ad5302997ed58960a4b6276e42580"},{url:"/assets/courses/9/commodities.png",revision:"986d88efd875f0ed5e57be00c9b44a4e"},{url:"/assets/courses/9/encryption.png",revision:"04a50e34a73b848325c4d84f11371d17"},{url:"/assets/courses/9/gold-and-bitcoin.png",revision:"f54bec0ac1a1c13e274c8540f8e1a0b6"},{url:"/assets/courses/9/unicorn-exchange.png",revision:"b2e53cc4f11125d2789970d79a54cbe7"},{url:"/assets/courses/placeholder.gif",revision:"4f562754810fb0faf14089f31f5036f7"},{url:"/assets/logo/trotelcoin-dark.jpg",revision:"23f70fe00aac836aec67700d750eaef1"},{url:"/assets/logo/trotelcoin-white-72.png",revision:"8b51c182745a54a17d5d6de1e8b49f18"},{url:"/assets/logo/trotelcoin-white.png",revision:"6aea91084927610a4cfcf32837d5b568"},{url:"/assets/logo/trotelcoin.png",revision:"eff77de0be1ad2a5974c57835e0e5620"},{url:"/assets/logo/trotelcoin.svg",revision:"dff0ddd0d6f485783a6bfa1fd792f416"},{url:"/audio/lofi.mp3",revision:"f0934ff7e5a95393b11804ca00200cc6"},{url:"/audio/sounds/bad-answer.wav",revision:"234fd1e4988fc36f204abca174aaf496"},{url:"/audio/sounds/blue-button.wav",revision:"0c98a6b5fc9a66e0c474b9716bab3a03"},{url:"/audio/sounds/claimed-rewards.wav",revision:"6e3db8991d28b95e9751ad5f553c47b9"},{url:"/audio/sounds/course-finished.wav",revision:"131108985b657c263e1414966c6da8ec"},{url:"/audio/sounds/fail-modal.wav",revision:"1f3b2259f99dd816d287063a283f48e7"},{url:"/audio/sounds/good-answer.wav",revision:"8fb75c98bb5ee8764a33b368b68caeb5"},{url:"/audio/sounds/potion.wav",revision:"7789f96e7176876d8c8880c5472fdcdc"},{url:"/audio/sounds/success-modal.wav",revision:"9623ac57bd85a14167bac1e07d9b85e5"},{url:"/audio/sounds/warning-modal.wav",revision:"1d1ae8f5915153d8e3f16279fdb36a74"},{url:"/favicon.ico",revision:"9a9859b4a8b2e3dae8a07a821b74578c"},{url:"/manifest.json",revision:"4c303dbb9d32c1b1b8e093554685e2d9"},{url:"/mintme.html",revision:"10bc6ee3356dbdf6c29635b2c704f22f"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:a,event:s,state:t})=>a&&"opaqueredirect"===a.type?new Response(a.body,{status:200,statusText:"OK",headers:a.headers}):a}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const a=e.pathname;return!a.startsWith("/api/auth/")&&!!a.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
