if (!self.define) {
  let e,
    s = {};
  const a = (a, t) => (
    (a = new URL(a + ".js", t).href),
    s[a] ||
      new Promise((s) => {
        if ("document" in self) {
          const e = document.createElement("script");
          (e.src = a), (e.onload = s), document.head.appendChild(e);
        } else (e = a), importScripts(a), s();
      }).then(() => {
        let e = s[a];
        if (!e) throw new Error(`Module ${a} didn’t register its module`);
        return e;
      })
  );
  self.define = (t, c) => {
    const i =
      e ||
      ("document" in self ? document.currentScript.src : "") ||
      location.href;
    if (s[i]) return;
    let n = {};
    const o = (e) => a(e, i),
      r = { module: { uri: i }, exports: n, require: o };
    s[i] = Promise.all(t.map((e) => r[e] || o(e))).then((e) => (c(...e), n));
  };
}
define(["./workbox-9b4d2a02"], function (e) {
  "use strict";
  importScripts(),
    self.skipWaiting(),
    e.clientsClaim(),
    e.precacheAndRoute(
      [
        {
          url: "/_next/app-build-manifest.json",
          revision: "eeed5dba71067ffd21bc71469361b210"
        },
        {
          url: "/_next/static/chunks/1085.855758b3d8074ca3.js",
          revision: "855758b3d8074ca3"
        },
        {
          url: "/_next/static/chunks/1151-8363bd20256cf5d6.js",
          revision: "koeOVp1Jcq2_4PNfCtuqw"
        },
        {
          url: "/_next/static/chunks/1354-ee3e82e3a6838b78.js",
          revision: "koeOVp1Jcq2_4PNfCtuqw"
        },
        {
          url: "/_next/static/chunks/1532-2cdfb9825227787c.js",
          revision: "koeOVp1Jcq2_4PNfCtuqw"
        },
        {
          url: "/_next/static/chunks/2270-29251c63e66244a7.js",
          revision: "koeOVp1Jcq2_4PNfCtuqw"
        },
        {
          url: "/_next/static/chunks/231-dc33b599831db54c.js",
          revision: "koeOVp1Jcq2_4PNfCtuqw"
        },
        {
          url: "/_next/static/chunks/232-43800ee870cc2a30.js",
          revision: "koeOVp1Jcq2_4PNfCtuqw"
        },
        {
          url: "/_next/static/chunks/2366-0db5be8c4eecf101.js",
          revision: "koeOVp1Jcq2_4PNfCtuqw"
        },
        {
          url: "/_next/static/chunks/2381.118b44e7e07b6fe7.js",
          revision: "118b44e7e07b6fe7"
        },
        {
          url: "/_next/static/chunks/2437-a62050626ae7fe18.js",
          revision: "koeOVp1Jcq2_4PNfCtuqw"
        },
        {
          url: "/_next/static/chunks/2994-d1a38fe74e5d08ac.js",
          revision: "koeOVp1Jcq2_4PNfCtuqw"
        },
        {
          url: "/_next/static/chunks/3206-6efd318bb703b5c9.js",
          revision: "koeOVp1Jcq2_4PNfCtuqw"
        },
        {
          url: "/_next/static/chunks/3246-1e7071098525ab59.js",
          revision: "koeOVp1Jcq2_4PNfCtuqw"
        },
        {
          url: "/_next/static/chunks/3270-34cab1919efa4a28.js",
          revision: "koeOVp1Jcq2_4PNfCtuqw"
        },
        {
          url: "/_next/static/chunks/3453-ec4cb18d1f6015b9.js",
          revision: "koeOVp1Jcq2_4PNfCtuqw"
        },
        {
          url: "/_next/static/chunks/3482-ca49b23f476adb7c.js",
          revision: "koeOVp1Jcq2_4PNfCtuqw"
        },
        {
          url: "/_next/static/chunks/3571-cf02cc5e10c2cacb.js",
          revision: "koeOVp1Jcq2_4PNfCtuqw"
        },
        {
          url: "/_next/static/chunks/4430-5bb9c78308e86d90.js",
          revision: "koeOVp1Jcq2_4PNfCtuqw"
        },
        {
          url: "/_next/static/chunks/4914-4c0c761dadb3521e.js",
          revision: "koeOVp1Jcq2_4PNfCtuqw"
        },
        {
          url: "/_next/static/chunks/5026.65c3c295651fca75.js",
          revision: "65c3c295651fca75"
        },
        {
          url: "/_next/static/chunks/508202eb.0e2d9c385b1f2007.js",
          revision: "0e2d9c385b1f2007"
        },
        {
          url: "/_next/static/chunks/5137-3b3be6d825886700.js",
          revision: "koeOVp1Jcq2_4PNfCtuqw"
        },
        {
          url: "/_next/static/chunks/525-59772b21e4788110.js",
          revision: "koeOVp1Jcq2_4PNfCtuqw"
        },
        {
          url: "/_next/static/chunks/5286-7e0c8ed478fb9f8f.js",
          revision: "koeOVp1Jcq2_4PNfCtuqw"
        },
        {
          url: "/_next/static/chunks/5318.dedf1503b6c5f634.js",
          revision: "dedf1503b6c5f634"
        },
        {
          url: "/_next/static/chunks/5467-40a04db982c98423.js",
          revision: "koeOVp1Jcq2_4PNfCtuqw"
        },
        {
          url: "/_next/static/chunks/5813-4965f07e41a2e0a4.js",
          revision: "koeOVp1Jcq2_4PNfCtuqw"
        },
        {
          url: "/_next/static/chunks/5837-fe37fa27dbac05eb.js",
          revision: "koeOVp1Jcq2_4PNfCtuqw"
        },
        {
          url: "/_next/static/chunks/5ab80550-89b2aad507ee9750.js",
          revision: "koeOVp1Jcq2_4PNfCtuqw"
        },
        {
          url: "/_next/static/chunks/6098-8874c8750ffd0728.js",
          revision: "koeOVp1Jcq2_4PNfCtuqw"
        },
        {
          url: "/_next/static/chunks/610-c4690ca24b322fb9.js",
          revision: "koeOVp1Jcq2_4PNfCtuqw"
        },
        {
          url: "/_next/static/chunks/6385-850f77d1cda1cb9a.js",
          revision: "koeOVp1Jcq2_4PNfCtuqw"
        },
        {
          url: "/_next/static/chunks/6575-e059486e051d2925.js",
          revision: "koeOVp1Jcq2_4PNfCtuqw"
        },
        {
          url: "/_next/static/chunks/6648-e4d8a9ab92d64d27.js",
          revision: "koeOVp1Jcq2_4PNfCtuqw"
        },
        {
          url: "/_next/static/chunks/6708-343f4bc5c0c1c91e.js",
          revision: "koeOVp1Jcq2_4PNfCtuqw"
        },
        {
          url: "/_next/static/chunks/6735-c8456bbb80dba9ca.js",
          revision: "koeOVp1Jcq2_4PNfCtuqw"
        },
        {
          url: "/_next/static/chunks/6755-1da4e7cb14876bcb.js",
          revision: "koeOVp1Jcq2_4PNfCtuqw"
        },
        {
          url: "/_next/static/chunks/6861.ed9f7d9de55fc97b.js",
          revision: "ed9f7d9de55fc97b"
        },
        {
          url: "/_next/static/chunks/7023-573ec679daf64644.js",
          revision: "koeOVp1Jcq2_4PNfCtuqw"
        },
        {
          url: "/_next/static/chunks/7046.9b86f7dc651c515b.js",
          revision: "9b86f7dc651c515b"
        },
        {
          url: "/_next/static/chunks/7322.8bde0f9bef4a8686.js",
          revision: "8bde0f9bef4a8686"
        },
        {
          url: "/_next/static/chunks/7434.6865e4d4a52af017.js",
          revision: "6865e4d4a52af017"
        },
        {
          url: "/_next/static/chunks/7610-0d97c08a6e1a8359.js",
          revision: "koeOVp1Jcq2_4PNfCtuqw"
        },
        {
          url: "/_next/static/chunks/767-c1fc84ee1ffe05a8.js",
          revision: "koeOVp1Jcq2_4PNfCtuqw"
        },
        {
          url: "/_next/static/chunks/8128-4bf74922b7e82464.js",
          revision: "koeOVp1Jcq2_4PNfCtuqw"
        },
        {
          url: "/_next/static/chunks/8235-6c3c244559ff13c4.js",
          revision: "koeOVp1Jcq2_4PNfCtuqw"
        },
        {
          url: "/_next/static/chunks/8472-a4643418fda51d24.js",
          revision: "koeOVp1Jcq2_4PNfCtuqw"
        },
        {
          url: "/_next/static/chunks/8847-666d7f10f602d7e3.js",
          revision: "koeOVp1Jcq2_4PNfCtuqw"
        },
        {
          url: "/_next/static/chunks/8890-d89597812eca5ab1.js",
          revision: "koeOVp1Jcq2_4PNfCtuqw"
        },
        {
          url: "/_next/static/chunks/9039-b313702edf3e0007.js",
          revision: "koeOVp1Jcq2_4PNfCtuqw"
        },
        {
          url: "/_next/static/chunks/9424.5d9a8d694142c705.js",
          revision: "5d9a8d694142c705"
        },
        {
          url: "/_next/static/chunks/app/%5Blang%5D/%5B...not-found%5D/page-4bb56edcc9e00b1c.js",
          revision: "koeOVp1Jcq2_4PNfCtuqw"
        },
        {
          url: "/_next/static/chunks/app/%5Blang%5D/%5BquizId%5D/bim-finance/what-is-bim-finance/page-399c81abeb2dfde7.js",
          revision: "koeOVp1Jcq2_4PNfCtuqw"
        },
        {
          url: "/_next/static/chunks/app/%5Blang%5D/%5BquizId%5D/bitcoin/introduction-to-bitcoin/page-29765e8307fdb028.js",
          revision: "koeOVp1Jcq2_4PNfCtuqw"
        },
        {
          url: "/_next/static/chunks/app/%5Blang%5D/%5BquizId%5D/bitcoin/lightning-network/page-007d5e46579fe75a.js",
          revision: "koeOVp1Jcq2_4PNfCtuqw"
        },
        {
          url: "/_next/static/chunks/app/%5Blang%5D/%5BquizId%5D/bitcoin/the-halving/page-cbd2a4225d4f0c72.js",
          revision: "koeOVp1Jcq2_4PNfCtuqw"
        },
        {
          url: "/_next/static/chunks/app/%5Blang%5D/%5BquizId%5D/bitcoin/the-history-of-bitcoin/page-83bbb95dad20548b.js",
          revision: "koeOVp1Jcq2_4PNfCtuqw"
        },
        {
          url: "/_next/static/chunks/app/%5Blang%5D/%5BquizId%5D/blockchain/censorship-resistance/page-70d29fee85c71488.js",
          revision: "koeOVp1Jcq2_4PNfCtuqw"
        },
        {
          url: "/_next/static/chunks/app/%5Blang%5D/%5BquizId%5D/blockchain/consensus-mechanisms/page-7f66d1c451ca226d.js",
          revision: "koeOVp1Jcq2_4PNfCtuqw"
        },
        {
          url: "/_next/static/chunks/app/%5Blang%5D/%5BquizId%5D/blockchain/what-is-a-blockchain/page-9587761e959ad64e.js",
          revision: "koeOVp1Jcq2_4PNfCtuqw"
        },
        {
          url: "/_next/static/chunks/app/%5Blang%5D/%5BquizId%5D/ethereum/evm/page-904357917617b160.js",
          revision: "koeOVp1Jcq2_4PNfCtuqw"
        },
        {
          url: "/_next/static/chunks/app/%5Blang%5D/%5BquizId%5D/ethereum/introduction-to-ethereum/page-feb3f0474bee84d7.js",
          revision: "koeOVp1Jcq2_4PNfCtuqw"
        },
        {
          url: "/_next/static/chunks/app/%5Blang%5D/%5BquizId%5D/ethereum/liquid-staking/page-611d795543fc04c4.js",
          revision: "koeOVp1Jcq2_4PNfCtuqw"
        },
        {
          url: "/_next/static/chunks/app/%5Blang%5D/%5BquizId%5D/ethereum/smart-contracts/page-dc886c343a5219d1.js",
          revision: "koeOVp1Jcq2_4PNfCtuqw"
        },
        {
          url: "/_next/static/chunks/app/%5Blang%5D/%5BquizId%5D/ethereum/understand-the-layers-2/page-bd55304ebf77273a.js",
          revision: "koeOVp1Jcq2_4PNfCtuqw"
        },
        {
          url: "/_next/static/chunks/app/%5Blang%5D/%5BquizId%5D/governance/snapshot-protocol/page-67e5ac194099448c.js",
          revision: "koeOVp1Jcq2_4PNfCtuqw"
        },
        {
          url: "/_next/static/chunks/app/%5Blang%5D/%5BquizId%5D/governance/types-of-daos/page-c6d57394846a9e03.js",
          revision: "koeOVp1Jcq2_4PNfCtuqw"
        },
        {
          url: "/_next/static/chunks/app/%5Blang%5D/%5BquizId%5D/governance/what-are-daos/page-2997a3525d9852d1.js",
          revision: "koeOVp1Jcq2_4PNfCtuqw"
        },
        {
          url: "/_next/static/chunks/app/%5Blang%5D/%5BquizId%5D/investing/bonds-vs-stocks/page-98614480f1c3e834.js",
          revision: "koeOVp1Jcq2_4PNfCtuqw"
        },
        {
          url: "/_next/static/chunks/app/%5Blang%5D/%5BquizId%5D/investing/dollar-cost-averaging/page-8a7d5f7bf1398a8b.js",
          revision: "koeOVp1Jcq2_4PNfCtuqw"
        },
        {
          url: "/_next/static/chunks/app/%5Blang%5D/%5BquizId%5D/investing/fundamental-analysis/page-eba4435046415bc1.js",
          revision: "koeOVp1Jcq2_4PNfCtuqw"
        },
        {
          url: "/_next/static/chunks/app/%5Blang%5D/%5BquizId%5D/layout-a7830bda72ef3553.js",
          revision: "koeOVp1Jcq2_4PNfCtuqw"
        },
        {
          url: "/_next/static/chunks/app/%5Blang%5D/%5BquizId%5D/metaverse/the-metaverse/page-d9bc59e3063fcf95.js",
          revision: "koeOVp1Jcq2_4PNfCtuqw"
        },
        {
          url: "/_next/static/chunks/app/%5Blang%5D/%5BquizId%5D/nfts/introduction-to-nfts/page-c53d39ccd1ca7682.js",
          revision: "koeOVp1Jcq2_4PNfCtuqw"
        },
        {
          url: "/_next/static/chunks/app/%5Blang%5D/%5BquizId%5D/nfts/price-floor/page-0b063d696d18303d.js",
          revision: "koeOVp1Jcq2_4PNfCtuqw"
        },
        {
          url: "/_next/static/chunks/app/%5Blang%5D/%5BquizId%5D/nfts/soulbound-tokens/page-ecc8180360898497.js",
          revision: "koeOVp1Jcq2_4PNfCtuqw"
        },
        {
          url: "/_next/static/chunks/app/%5Blang%5D/%5BquizId%5D/stablecoins/introduction-to-stablecoins/page-b09c706ff8f52079.js",
          revision: "koeOVp1Jcq2_4PNfCtuqw"
        },
        {
          url: "/_next/static/chunks/app/%5Blang%5D/%5BquizId%5D/stablecoins/terra-luna-crash/page-a02826701c5e653f.js",
          revision: "koeOVp1Jcq2_4PNfCtuqw"
        },
        {
          url: "/_next/static/chunks/app/%5Blang%5D/%5BquizId%5D/stablecoins/usdc-by-circle/page-9f18dd38a346aff2.js",
          revision: "koeOVp1Jcq2_4PNfCtuqw"
        },
        {
          url: "/_next/static/chunks/app/%5Blang%5D/%5BquizId%5D/trading/5-cognitive-biases/page-4b38068e986ce01f.js",
          revision: "koeOVp1Jcq2_4PNfCtuqw"
        },
        {
          url: "/_next/static/chunks/app/%5Blang%5D/%5BquizId%5D/trading/5-trading-rules/page-5b234b64bb1f3460.js",
          revision: "koeOVp1Jcq2_4PNfCtuqw"
        },
        {
          url: "/_next/static/chunks/app/%5Blang%5D/%5BquizId%5D/trading/day-trading/page-fb3e1c2443d43b0f.js",
          revision: "koeOVp1Jcq2_4PNfCtuqw"
        },
        {
          url: "/_next/static/chunks/app/%5Blang%5D/%5BquizId%5D/trading/futures-contracts/page-adce5b2375155295.js",
          revision: "koeOVp1Jcq2_4PNfCtuqw"
        },
        {
          url: "/_next/static/chunks/app/%5Blang%5D/%5BquizId%5D/trotelcoin/buy-the-nfts/page-c09df8c3d422efc6.js",
          revision: "koeOVp1Jcq2_4PNfCtuqw"
        },
        {
          url: "/_next/static/chunks/app/%5Blang%5D/%5BquizId%5D/trotelcoin/introduction-to-trotelcoin/page-2317c55f9f4edbc3.js",
          revision: "koeOVp1Jcq2_4PNfCtuqw"
        },
        {
          url: "/_next/static/chunks/app/%5Blang%5D/%5BquizId%5D/trotelcoin/proof-of-collective-intelligence/page-518f7e326cb38414.js",
          revision: "koeOVp1Jcq2_4PNfCtuqw"
        },
        {
          url: "/_next/static/chunks/app/%5Blang%5D/%5BquizId%5D/trotelcoin/stake-your-trotel/page-0389afe11c7c62cc.js",
          revision: "koeOVp1Jcq2_4PNfCtuqw"
        },
        {
          url: "/_next/static/chunks/app/%5Blang%5D/%5BquizId%5D/wallet/create-your-first-wallet/page-594f33e3b621b91e.js",
          revision: "koeOVp1Jcq2_4PNfCtuqw"
        },
        {
          url: "/_next/static/chunks/app/%5Blang%5D/%5BquizId%5D/wallet/make-your-first-transaction/page-c2fb6699329a74c6.js",
          revision: "koeOVp1Jcq2_4PNfCtuqw"
        },
        {
          url: "/_next/static/chunks/app/%5Blang%5D/%5BquizId%5D/wallet/secure-your-wallet/page-e88842446dab2827.js",
          revision: "koeOVp1Jcq2_4PNfCtuqw"
        },
        {
          url: "/_next/static/chunks/app/%5Blang%5D/%5BquizId%5D/wallet/sign-in-with-your-wallet/page-65104940eca0fe5a.js",
          revision: "koeOVp1Jcq2_4PNfCtuqw"
        },
        {
          url: "/_next/static/chunks/app/%5Blang%5D/%5BquizId%5D/web3/airdrops/page-0fe83b5907fad185.js",
          revision: "koeOVp1Jcq2_4PNfCtuqw"
        },
        {
          url: "/_next/static/chunks/app/%5Blang%5D/%5BquizId%5D/web3/ens/page-d160925fa4147130.js",
          revision: "koeOVp1Jcq2_4PNfCtuqw"
        },
        {
          url: "/_next/static/chunks/app/%5Blang%5D/%5BquizId%5D/web3/ipfs/page-ceb72bc0b3b39a38.js",
          revision: "koeOVp1Jcq2_4PNfCtuqw"
        },
        {
          url: "/_next/static/chunks/app/%5Blang%5D/%5BquizId%5D/web3/oracles/page-163f0b7195654800.js",
          revision: "koeOVp1Jcq2_4PNfCtuqw"
        },
        {
          url: "/_next/static/chunks/app/%5Blang%5D/%5BquizId%5D/web3/web3-essentials/page-db7db8d0f5cdfb17.js",
          revision: "koeOVp1Jcq2_4PNfCtuqw"
        },
        {
          url: "/_next/static/chunks/app/%5Blang%5D/account/page-b952f603bbb2ec0e.js",
          revision: "koeOVp1Jcq2_4PNfCtuqw"
        },
        {
          url: "/_next/static/chunks/app/%5Blang%5D/buy/page-e23f936f62002276.js",
          revision: "koeOVp1Jcq2_4PNfCtuqw"
        },
        {
          url: "/_next/static/chunks/app/%5Blang%5D/category/%5BcategoryUrl%5D/page-d81d23afd8e614f8.js",
          revision: "koeOVp1Jcq2_4PNfCtuqw"
        },
        {
          url: "/_next/static/chunks/app/%5Blang%5D/claim/page-adcb01ddf39d6379.js",
          revision: "koeOVp1Jcq2_4PNfCtuqw"
        },
        {
          url: "/_next/static/chunks/app/%5Blang%5D/home/page-acbabbc463a48e4c.js",
          revision: "koeOVp1Jcq2_4PNfCtuqw"
        },
        {
          url: "/_next/static/chunks/app/%5Blang%5D/inventory/page-9598cb70a438154f.js",
          revision: "koeOVp1Jcq2_4PNfCtuqw"
        },
        {
          url: "/_next/static/chunks/app/%5Blang%5D/layout-8d119cb2d5ce07cf.js",
          revision: "koeOVp1Jcq2_4PNfCtuqw"
        },
        {
          url: "/_next/static/chunks/app/%5Blang%5D/leaderboard/page-76a269c42a7cbbbd.js",
          revision: "koeOVp1Jcq2_4PNfCtuqw"
        },
        {
          url: "/_next/static/chunks/app/%5Blang%5D/learn/page-585c3af559bed96d.js",
          revision: "koeOVp1Jcq2_4PNfCtuqw"
        },
        {
          url: "/_next/static/chunks/app/%5Blang%5D/not-found-baa26f808d5f369a.js",
          revision: "koeOVp1Jcq2_4PNfCtuqw"
        },
        {
          url: "/_next/static/chunks/app/%5Blang%5D/not-premium/page-6083d9202f9f9eee.js",
          revision: "koeOVp1Jcq2_4PNfCtuqw"
        },
        {
          url: "/_next/static/chunks/app/%5Blang%5D/premium/page-d696c82fcd2894f5.js",
          revision: "koeOVp1Jcq2_4PNfCtuqw"
        },
        {
          url: "/_next/static/chunks/app/%5Blang%5D/receive/page-a34e1cf455118ca7.js",
          revision: "koeOVp1Jcq2_4PNfCtuqw"
        },
        {
          url: "/_next/static/chunks/app/%5Blang%5D/send/page-4a5714fc4dd3a27c.js",
          revision: "koeOVp1Jcq2_4PNfCtuqw"
        },
        {
          url: "/_next/static/chunks/app/%5Blang%5D/shop/page-6ef513bbc961396f.js",
          revision: "koeOVp1Jcq2_4PNfCtuqw"
        },
        {
          url: "/_next/static/chunks/app/%5Blang%5D/stake/page-cca9bc75f6d9fa1c.js",
          revision: "koeOVp1Jcq2_4PNfCtuqw"
        },
        {
          url: "/_next/static/chunks/app/%5Blang%5D/statistics/page-dd6b006f03a1a51b.js",
          revision: "koeOVp1Jcq2_4PNfCtuqw"
        },
        {
          url: "/_next/static/chunks/app/%5Blang%5D/submit-a-course/page-8856ed9bd7248163.js",
          revision: "koeOVp1Jcq2_4PNfCtuqw"
        },
        {
          url: "/_next/static/chunks/app/%5Blang%5D/swap/page-90aa42af4ad49ba5.js",
          revision: "koeOVp1Jcq2_4PNfCtuqw"
        },
        {
          url: "/_next/static/chunks/app/%5Blang%5D/terms-of-service/page-520e4b2d477f89eb.js",
          revision: "koeOVp1Jcq2_4PNfCtuqw"
        },
        {
          url: "/_next/static/chunks/app/%5Blang%5D/vocabulary/page-370a890144514ea4.js",
          revision: "koeOVp1Jcq2_4PNfCtuqw"
        },
        {
          url: "/_next/static/chunks/app/_not-found/page-422a585e767afbec.js",
          revision: "koeOVp1Jcq2_4PNfCtuqw"
        },
        {
          url: "/_next/static/chunks/f8e4659f-36179fbbbd6ae6d1.js",
          revision: "koeOVp1Jcq2_4PNfCtuqw"
        },
        {
          url: "/_next/static/chunks/fd9d1056-230aeb65b32f174d.js",
          revision: "koeOVp1Jcq2_4PNfCtuqw"
        },
        {
          url: "/_next/static/chunks/framework-8e0e0f4a6b83a956.js",
          revision: "koeOVp1Jcq2_4PNfCtuqw"
        },
        {
          url: "/_next/static/chunks/main-9303aa4bf8ab27d7.js",
          revision: "koeOVp1Jcq2_4PNfCtuqw"
        },
        {
          url: "/_next/static/chunks/main-app-53b930afef1ba611.js",
          revision: "koeOVp1Jcq2_4PNfCtuqw"
        },
        {
          url: "/_next/static/chunks/pages/_app-f870474a17b7f2fd.js",
          revision: "koeOVp1Jcq2_4PNfCtuqw"
        },
        {
          url: "/_next/static/chunks/pages/_error-c66a4e8afc46f17b.js",
          revision: "koeOVp1Jcq2_4PNfCtuqw"
        },
        {
          url: "/_next/static/chunks/polyfills-78c92fac7aa8fdd8.js",
          revision: "79330112775102f91e1010318bae2bd3"
        },
        {
          url: "/_next/static/chunks/webpack-45effd6e01aadab3.js",
          revision: "koeOVp1Jcq2_4PNfCtuqw"
        },
        {
          url: "/_next/static/css/070d216f498cf568.css",
          revision: "070d216f498cf568"
        },
        {
          url: "/_next/static/css/39a919040e151a85.css",
          revision: "39a919040e151a85"
        },
        {
          url: "/_next/static/css/c88eb6171b8ddd4e.css",
          revision: "c88eb6171b8ddd4e"
        },
        {
          url: "/_next/static/css/ffc03de3ebc3b635.css",
          revision: "ffc03de3ebc3b635"
        },
        {
          url: "/_next/static/koeOVp1Jcq2_4PNfCtuqw/_buildManifest.js",
          revision: "3e2d62a10f4d6bf0b92e14aecf7836f4"
        },
        {
          url: "/_next/static/koeOVp1Jcq2_4PNfCtuqw/_ssgManifest.js",
          revision: "b6652df95db52feb4daf4eca35380933"
        },
        {
          url: "/_next/static/media/0484562807a97172-s.p.woff2",
          revision: "b550bca8934bd86812d1f5e28c9cc1de"
        },
        {
          url: "/_next/static/media/0a03a6d30c07af2e-s.woff2",
          revision: "79da53ebaf3308c806394df4882b343d"
        },
        {
          url: "/_next/static/media/30cd8f99d32fa6e8-s.woff2",
          revision: "e5c1b944d9e3380a062bf911e26728a3"
        },
        {
          url: "/_next/static/media/3f9466fc53690ba7-s.woff2",
          revision: "173212bc7f69965527b29df7419d615c"
        },
        {
          url: "/_next/static/media/46c21389e888bf13-s.woff2",
          revision: "272930c09ba14c81bb294be1fe18b049"
        },
        {
          url: "/_next/static/media/4c285fdca692ea22-s.p.woff2",
          revision: "42d3308e3aca8742731f63154187bdd7"
        },
        {
          url: "/_next/static/media/6245472ced48d3be-s.p.woff2",
          revision: "335da181ffc3c425a4abf0e8fc0f1e42"
        },
        {
          url: "/_next/static/media/7108afb8b1381ad1-s.p.woff2",
          revision: "d5a9cbc34d22ffd5c4eb636dcca02f5d"
        },
        {
          url: "/_next/static/media/7db6c35d839a711c-s.p.woff2",
          revision: "de2b6fe4e663c0669007e5b501c2026b"
        },
        {
          url: "/_next/static/media/8888a3826f4a3af4-s.p.woff2",
          revision: "792477d09826b11d1e5a611162c9797a"
        },
        {
          url: "/_next/static/media/8d346445d24062b5-s.woff2",
          revision: "c965abed1310982a4d2148cb81765b56"
        },
        {
          url: "/_next/static/media/94575ae3783e7c88-s.woff2",
          revision: "a56bc9adab4ad49a6e6d19f72ac23bc0"
        },
        {
          url: "/_next/static/media/9e82d62334b205f4-s.p.woff2",
          revision: "1c2ea932e7620e3a752301d0e54d3d91"
        },
        {
          url: "/_next/static/media/b957ea75a84b6ea7-s.p.woff2",
          revision: "0bd523f6049956faaf43c254a719d06a"
        },
        {
          url: "/_next/static/media/dfa2ccbeca9e77a8-s.woff2",
          revision: "4d88c8f550833714f8721257780b9000"
        },
        {
          url: "/_next/static/media/eafabf029ad39a43-s.p.woff2",
          revision: "43751174b6b810eb169101a20d8c26f8"
        },
        {
          url: "/_next/static/media/f5767adec246cdc1-s.woff2",
          revision: "7a1c6501aa2b3327c1cf556362a851cb"
        },
        {
          url: "/_next/static/media/f7099cae2a5aa83f-s.woff2",
          revision: "8717ab2d20ae5ec51c6ac277e0331511"
        },
        {
          url: "/assets/banner/trotelcoin-banner.png",
          revision: "75317bc4dff27403f345de67c7f2b644"
        },
        {
          url: "/assets/courses/bim-finance/what-is-bim-finance.jpg",
          revision: "d18ccf5e4d05527fd082335f43724c1a"
        },
        {
          url: "/assets/courses/bitcoin/introduction-to-bitcoin.jpg",
          revision: "fd4642b626e179c39fe4666b2b8da5a1"
        },
        {
          url: "/assets/courses/bitcoin/lightning-network.jpg",
          revision: "853026f3de9c6e52dbf1a8340dc64e19"
        },
        {
          url: "/assets/courses/bitcoin/the-halving.jpg",
          revision: "c1898152a93c3b2e00ae72821ee43d79"
        },
        {
          url: "/assets/courses/bitcoin/the-history-of-bitcoin.jpg",
          revision: "3445457496ed64cd3253be58d96aba7d"
        },
        {
          url: "/assets/courses/blockchain/censorship-resistance.jpg",
          revision: "803bad22ffabb6e6dd0651f72d918e88"
        },
        {
          url: "/assets/courses/blockchain/consensus-mechanisms.jpg",
          revision: "4f335c9075a784112318a858640ff60c"
        },
        {
          url: "/assets/courses/blockchain/what-is-a-blockchain.jpg",
          revision: "ded6c92417b19fe75ece6258b31af6e7"
        },
        {
          url: "/assets/courses/ethereum/evm.jpg",
          revision: "a6111ce46010d758952d23c483b88899"
        },
        {
          url: "/assets/courses/ethereum/introduction-to-ethereum.jpg",
          revision: "10a48e84585edde0b9061b4b252866c8"
        },
        {
          url: "/assets/courses/ethereum/liquid-staking.jpg",
          revision: "272b6a06816512855d8d0fdff9d61c44"
        },
        {
          url: "/assets/courses/ethereum/smart-contracts.jpg",
          revision: "af4bfa009474233669854c0d749dc5b6"
        },
        {
          url: "/assets/courses/ethereum/understand-the-layers-2.jpg",
          revision: "96b5539300d7cdb7cb2f04363f807ae9"
        },
        {
          url: "/assets/courses/governance/snapshot-protocol.jpg",
          revision: "c1e6b9859182019ff2912ae6d9302cf9"
        },
        {
          url: "/assets/courses/governance/types-of-daos.jpg",
          revision: "34fbd03d3754961f1ecf802b3842b0b4"
        },
        {
          url: "/assets/courses/governance/what-are-daos.jpg",
          revision: "252f2e00730bd1ba9015cf770933a0ff"
        },
        {
          url: "/assets/courses/investing/bonds-vs-stocks.jpg",
          revision: "980f82228c62f71dbbccd134f2185ae9"
        },
        {
          url: "/assets/courses/investing/dca.jpg",
          revision: "04c7c6566a3c571347c5895f8ee67dfb"
        },
        {
          url: "/assets/courses/investing/fundamental-analysis.jpg",
          revision: "349ab2399daaedf971b667e2bfa18a03"
        },
        {
          url: "/assets/courses/metaverse/the-metaverse.jpg",
          revision: "3cdddb65244ec418cf5704cb31fb49d0"
        },
        {
          url: "/assets/courses/nfts/floor-price.jpg",
          revision: "2954094578c15e4c8d13ec8c62a12950"
        },
        {
          url: "/assets/courses/nfts/introduction-to-nfts.jpg",
          revision: "85db119a6528ae9103ba1a6f9933d475"
        },
        {
          url: "/assets/courses/nfts/soulbound-tokens.jpg",
          revision: "99ed7fc3817563347d507c020a0b7b37"
        },
        {
          url: "/assets/courses/stablecoins/introduction-to-stablecoins.jpg",
          revision: "017e22aa0ae4860753fa126007713d88"
        },
        {
          url: "/assets/courses/stablecoins/terra-luna-crash.jpg",
          revision: "513b544e55239dd7076cd55f6271aced"
        },
        {
          url: "/assets/courses/stablecoins/usdc-by-circle.jpg",
          revision: "71a899039b37f5d0d66b85a66fbf8d0a"
        },
        {
          url: "/assets/courses/trading/biaises.jpg",
          revision: "8acde2fad21fab4ca8cfbf03ced3b75e"
        },
        {
          url: "/assets/courses/trading/day-trading.jpg",
          revision: "20468abe3ddaafc9e359ed16ef86a565"
        },
        {
          url: "/assets/courses/trading/futures.jpg",
          revision: "58a4722b339f95c957f804ca2e6ef4c4"
        },
        {
          url: "/assets/courses/trading/trading-rules.jpg",
          revision: "c93568f9ee7f60ce9de8585f24351d4c"
        },
        {
          url: "/assets/courses/trotelcoin/buy-the-nfts.jpg",
          revision: "260a47c00f0259d78d99166f470a1502"
        },
        {
          url: "/assets/courses/trotelcoin/introduction-to-trotelcoin.jpg",
          revision: "6dba4e133e24b3842ccc91691287841f"
        },
        {
          url: "/assets/courses/trotelcoin/proof-of-collective-intelligence.jpg",
          revision: "745a2300cc863450037c7cc9f9796537"
        },
        {
          url: "/assets/courses/trotelcoin/stake-your-trotel.jpg",
          revision: "91bce53eacd49e4b5b893bd4f2d4273e"
        },
        {
          url: "/assets/courses/wallet/create-your-first-wallet.jpg",
          revision: "3f77e71cd324bf7e052fd7f1fc1d6db1"
        },
        {
          url: "/assets/courses/wallet/make-your-first-transaction.jpg",
          revision: "6392a4fe95f2fb6cf40a091a6d7fb776"
        },
        {
          url: "/assets/courses/wallet/secure-your-wallet.jpg",
          revision: "3b20f47905cd108b55f9b206e5753d88"
        },
        {
          url: "/assets/courses/wallet/sign-in-with-your-wallet.jpg",
          revision: "1f08bd12aaff81c3cf972110959f2a0f"
        },
        {
          url: "/assets/courses/web3/airdrops.jpg",
          revision: "9119e73eea518cec29ad6ad691ca2a5b"
        },
        {
          url: "/assets/courses/web3/ens.jpg",
          revision: "6de1370e4ed307a3c7d529157b404add"
        },
        {
          url: "/assets/courses/web3/ipfs.jpg",
          revision: "8e828e20e9a1c3fdd2d9f7615a6bd788"
        },
        {
          url: "/assets/courses/web3/oracles.jpg",
          revision: "be7c765bf026c2273623e8da52985f24"
        },
        {
          url: "/assets/courses/web3/web3-essentials.jpg",
          revision: "2d3f759eaf036eb404aa025f049a29a6"
        },
        {
          url: "/assets/logo/trotelcoin-dark.jpg",
          revision: "23f70fe00aac836aec67700d750eaef1"
        },
        {
          url: "/assets/logo/trotelcoin-white-72.png",
          revision: "8b51c182745a54a17d5d6de1e8b49f18"
        },
        {
          url: "/assets/logo/trotelcoin-white.png",
          revision: "6aea91084927610a4cfcf32837d5b568"
        },
        {
          url: "/assets/logo/trotelcoin.png",
          revision: "eff77de0be1ad2a5974c57835e0e5620"
        },
        {
          url: "/assets/logo/trotelcoin.svg",
          revision: "dff0ddd0d6f485783a6bfa1fd792f416"
        },
        {
          url: "/assets/sponsors/bim-finance/bim-finance-logo.png",
          revision: "1ec7b1742fedd379c57719b381539fae"
        },
        {
          url: "/audio/sounds/bad-answer.wav",
          revision: "234fd1e4988fc36f204abca174aaf496"
        },
        {
          url: "/audio/sounds/claimed-rewards.wav",
          revision: "6e3db8991d28b95e9751ad5f553c47b9"
        },
        {
          url: "/audio/sounds/course-finished.wav",
          revision: "131108985b657c263e1414966c6da8ec"
        },
        {
          url: "/audio/sounds/fail-modal.wav",
          revision: "1f3b2259f99dd816d287063a283f48e7"
        },
        {
          url: "/audio/sounds/good-answer.wav",
          revision: "8fb75c98bb5ee8764a33b368b68caeb5"
        },
        {
          url: "/audio/sounds/potion.wav",
          revision: "7789f96e7176876d8c8880c5472fdcdc"
        },
        {
          url: "/audio/sounds/success-modal.wav",
          revision: "9623ac57bd85a14167bac1e07d9b85e5"
        },
        {
          url: "/audio/sounds/warning-modal.wav",
          revision: "1d1ae8f5915153d8e3f16279fdb36a74"
        },
        { url: "/manifest.json", revision: "4c303dbb9d32c1b1b8e093554685e2d9" },
        { url: "/mintme.html", revision: "3396024d39143989d719cf5ebeb4ef86" }
      ],
      { ignoreURLParametersMatching: [] }
    ),
    e.cleanupOutdatedCaches(),
    e.registerRoute(
      "/",
      new e.NetworkFirst({
        cacheName: "start-url",
        plugins: [
          {
            cacheWillUpdate: async ({
              request: e,
              response: s,
              event: a,
              state: t
            }) =>
              s && "opaqueredirect" === s.type
                ? new Response(s.body, {
                    status: 200,
                    statusText: "OK",
                    headers: s.headers
                  })
                : s
          }
        ]
      }),
      "GET"
    ),
    e.registerRoute(
      /^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,
      new e.CacheFirst({
        cacheName: "google-fonts-webfonts",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 4, maxAgeSeconds: 31536e3 })
        ]
      }),
      "GET"
    ),
    e.registerRoute(
      /^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,
      new e.StaleWhileRevalidate({
        cacheName: "google-fonts-stylesheets",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 4, maxAgeSeconds: 604800 })
        ]
      }),
      "GET"
    ),
    e.registerRoute(
      /\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,
      new e.StaleWhileRevalidate({
        cacheName: "static-font-assets",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 4, maxAgeSeconds: 604800 })
        ]
      }),
      "GET"
    ),
    e.registerRoute(
      /\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,
      new e.StaleWhileRevalidate({
        cacheName: "static-image-assets",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 64, maxAgeSeconds: 86400 })
        ]
      }),
      "GET"
    ),
    e.registerRoute(
      /\/_next\/image\?url=.+$/i,
      new e.StaleWhileRevalidate({
        cacheName: "next-image",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 64, maxAgeSeconds: 86400 })
        ]
      }),
      "GET"
    ),
    e.registerRoute(
      /\.(?:mp3|wav|ogg)$/i,
      new e.CacheFirst({
        cacheName: "static-audio-assets",
        plugins: [
          new e.RangeRequestsPlugin(),
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 })
        ]
      }),
      "GET"
    ),
    e.registerRoute(
      /\.(?:mp4)$/i,
      new e.CacheFirst({
        cacheName: "static-video-assets",
        plugins: [
          new e.RangeRequestsPlugin(),
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 })
        ]
      }),
      "GET"
    ),
    e.registerRoute(
      /\.(?:js)$/i,
      new e.StaleWhileRevalidate({
        cacheName: "static-js-assets",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 })
        ]
      }),
      "GET"
    ),
    e.registerRoute(
      /\.(?:css|less)$/i,
      new e.StaleWhileRevalidate({
        cacheName: "static-style-assets",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 })
        ]
      }),
      "GET"
    ),
    e.registerRoute(
      /\/_next\/data\/.+\/.+\.json$/i,
      new e.StaleWhileRevalidate({
        cacheName: "next-data",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 })
        ]
      }),
      "GET"
    ),
    e.registerRoute(
      /\.(?:json|xml|csv)$/i,
      new e.NetworkFirst({
        cacheName: "static-data-assets",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 })
        ]
      }),
      "GET"
    ),
    e.registerRoute(
      ({ url: e }) => {
        if (!(self.origin === e.origin)) return !1;
        const s = e.pathname;
        return !s.startsWith("/api/auth/") && !!s.startsWith("/api/");
      },
      new e.NetworkFirst({
        cacheName: "apis",
        networkTimeoutSeconds: 10,
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 16, maxAgeSeconds: 86400 })
        ]
      }),
      "GET"
    ),
    e.registerRoute(
      ({ url: e }) => {
        if (!(self.origin === e.origin)) return !1;
        return !e.pathname.startsWith("/api/");
      },
      new e.NetworkFirst({
        cacheName: "others",
        networkTimeoutSeconds: 10,
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 })
        ]
      }),
      "GET"
    ),
    e.registerRoute(
      ({ url: e }) => !(self.origin === e.origin),
      new e.NetworkFirst({
        cacheName: "cross-origin",
        networkTimeoutSeconds: 10,
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 3600 })
        ]
      }),
      "GET"
    );
});
