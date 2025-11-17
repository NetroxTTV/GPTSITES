const sites = [
  {name: "Earnlab", url: "https://earnlab.com/r/netrox", logo: "https://logo.clearbit.com/earnlab.com", featured: true, rates: "80-90% Rates | Highest Paying Webiste"},
  {name: "CashinStyle", url: "https://cashinstyle.com/?ref=NETROX", logo: "https://cashinstyle.com/static/images/cis_logo_new.svg", featured: true, rates: "90% Rates | Highest Paying Offerwalls"},
  {name: "FreeCash", url: "https://freecash.com/r/netroxx", logo: "https://logo.clearbit.com/freecash.com", featured: true, rates: "70-75% Rates | Instant Cashouts"},
  {name: "CoinPayU", url: "https://www.coinpayu.com/?r=Netrox", logo: "https://www.coinpayu.com/static/newImg/index/earn_v2.gif", featured: true, rates: "80-85% Rates | High Site Bonuses"},
  {name: "Gain.gg", url: "https://gain.gg/r/netrox", logo: "https://gain.gg/public/img/logoLightSmall.png", featured: true, rates: "80-90% Rates | Highing Paying Webiste"},
  {name: "Chequity", url: "https://chequity.io/r/128BDC40", logo: "https://chequity.io/img/logo-teal.png", featured: true, rates: "80% Rates | Simple Website"},
  {name: "GemsLoot", url: "https://gemsloot.com/?aff=netrox", logo: src="/imgs/gemsloot.jpg", featured: true, rates: "65-95% Rates | Instant Cashouts & Esclusive Offers"},
  {name: "FastAsk", url: "https://fastask.net/?ref=296", logo: "https://i.ibb.co/m5YYk2c1/fastask-nobg-black.png", featured: true, rates: "100% Rates on WaxRewards"},
  {name: "Azcash", url: "https://azcash.me/register?ref=netrox", logo: "https://consumersiteimages.trustpilot.net/business-units/6821f57ba7f05429a8389e3b-198x149-1x.jpg", featured: true, rates: "85% Rates | Exclusive Casino Offers"},
  {name: "CashTipay", url: "https://cashtipay.com/register?referral=netrox", logo: "https://logo.clearbit.com/cashtipay.com", featured: true, rates: ""},
  {name: "EzzCash", url: "https://ezz.cash/?ref=netrox", logo: "https://ezz.cash/images/ezzcash.png", featured: true, rates: ""},
  {name: "GimmeBux", url: "https://gimmebux.com/r/netrox", logo: "https://gimmebux.com/gimmebux-free-cash-online-logo.svg", featured: true, rates: ""},
  {name: "Ysense", url: "https://www.ysense.com/?rb=139348631", logo: src="/imgs/ysense.png", featured: true, rates: ""},
  {name: "SwagBucks", url: "https://www.swagbucks.com/p/register?rb=195191067&rp=1", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLi_WBgaofdLcOjYbSUvfVd64z434ItW-WKA&s", featured: true, rates: ""},
  {name: "SplitDrop", url: "https://splitdrop.com/friend/74388", logo: "https://splitdrop.com/images/logo.svg", featured: true, rates: ""},
  {name: "GameHag", url: "https://gamehag.com/r/netrox", logo: "https://logo.clearbit.com/gamehag.com", featured: true, rates: ""},
  {name: "KashRewards", url: "https://kashrewards.com/?a=383", logo: "https://logo.clearbit.com/kashrewards.com", featured: true, rates: ""},
  {name: "GG2U", url: "https://premium.gg2u.org/?referrer=netroxtv", logo: "https://logo.clearbit.com/gg2u.org", featured: true, rates: ""},
  {name: "Freeward", url: "https://freeward.net/ref/lom3w", logo: "https://logo.clearbit.com/freeward.net", featured: true, rates: ""},
  {name: "Earnut", url: "https://earnut.com/?r=NetroxTV", logo: "https://logo.clearbit.com/earnut.com", featured: true, rates: ""},
  {name: "CashHut", url: "https://cashhut.net/ref/L7TLOG", logo: "https://logo.clearbit.com/cashhut.net", featured: true, rates: ""},
  {name: "WeCash", url: "https://wecash.one?inviteCode=iEnuXi6cT7MyzTUqGuqp", logo: src="/imgs/wecash.png", featured: true, rates: ""},
  {name: "Earnably", url: "https://earnably.com/join/3079623", logo: "https://s3-eu-west-1.amazonaws.com/tpd/logos/5cf5373e3d0cda00014a380f/0x0.png", featured: true, rates: ""},
  {name: "RBXRise", url: "https://rbxrise.com/?ref=461699957", logo: "https://logo.clearbit.com/rbxrise.com", featured: true, rates: ""},
  {name: "GaintPlay", url: "https://gaintplay.com/refer/netrix", logo: "https://logo.clearbit.com/gaintplay.com", featured: true, rates: ""},
  {name: "Paidcash", url: "https://paidcash.co/r/ZWWEYY", logo: "https://paidcash.co/assets/img/icon.png", featured: true, rates: ""},
  {name: "Giftably", url: "https://giftably.net/login/Lucas", logo: src="/imgs/giftably.webp", featured: true, rates: ""},
  {name: "RewardXP", url: "https://www.rewardxp.com/join/1363972", logo: "https://www.rewardxp.com/images/logo.png?v=1593280623", featured: true, rates: ""},
  {name: "PrizeBear", url: "https://prizebear.com/r/uWEzvO", logo: "https://prizebear.com/images/logo/logo.png?2?1", featured: true, rates: ""},
  {name: "Gainify", url: "https://gainify.net/ref/ae28248e0ce0", logo: "https://i.postimg.cc/ydVhJCbn/d8a5ee0c27ce0b34598729b7d88bf74e.png", featured: true, rates: ""},
  {name: "Sparkvey", url: "https://sparkvey.com/?ref=netrox", logo: "https://logo.clearbit.com/sparkvey.com", featured: true, rates: ""},
  {name: "KlinkFinance", url: "https://join.klinkfinance.com/NFuII9neEPb", logo: "https://logo.clearbit.com/klinkfinance.com", featured: true, rates: ""},
  {name: "EasyBucks", url: "https://www.easybucks.app?rb=160502816", logo: "https://play-lh.googleusercontent.com/C5UQXHtmuNVkhOavIEPMMbDqS2tO9keKcfR7QQ4NlNfF3_gfWUhkFuqrsuNpylGIcqM=w240-h480-rw", featured: true, rates: ""},
  {name: "MoneyTune", url: "https://moneytune.page.link/o3QaXaYYsGDMwQscA", logo: "https://play-lh.googleusercontent.com/wwb4LFDO2xyC_8TZIOCG7MX5PgGlNGMtCOJjqKYBJqNVC_vofYgJbPczyIhRxqYqa7Ow=s48-rw", featured: true, rates: ""},
  {name: "EarnLoop", url: "https://earnloop.net/r/YLNMXR5KWR", logo: "https://i.postimg.cc/TwCVgH8x/87d192b1c5fe2dbfb23a21380fc34613.png", featured: true, rates: ""},
  {name: "Roaster Earn", url: "https://play.google.com/store/apps/details?id=com.roaster.earn.easy", logo: "https://play-lh.googleusercontent.com/wbGlIJVoKGWzO-3U9A-bZGHiPQDzVF_saAeZCYO9F8D3zHmHHjVfLBnRxwWt9mQ1Tg=w240-h480-rw", featured: true, rates: ""},
  {name: "Kash.gg", url: "www.kash.gg/r/sG9CXqkxBkfk1ox0I08oXEykIHj1", logo: "https://gpthub.gg/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fkfi5mz5t%2Fproduction%2F607290524c03363d51c8e07449c4adde186b2c21-800x200.png%3Ffit%3Dmax%26auto%3Dformat&w=640&q=75", featured: true, rates: ""},
  {name: "JumpTask", url: "https://www.jumptask.io/r/vulykapahymy", logo: "https://pbs.twimg.com/profile_images/1712419529811230720/hBZpD0zU_400x400.jpg", featured: true, rates: ""},
  {name: "FreeMoneyCoins", url: "https://freemoneycoins.com/referral/netrox", logo: "https://freemoneycoins.com/assets/images/logo_icon.svg", featured: true, rates: ""},
  {name: "Lootly", url: "https://lootly.fun/?ref=6rC6iPpjeYEjR46C", logo: "https://lootly.fun/assets/img/logo.svg", featured: true, rates: ""},
  {name: "Offers2Cash", url: "https://offers2cash.com/invite/L2J1XL", logo: "https://ironscript-bucket.s3.eu-west-2.amazonaws.com/user_files/1/1623919505_logo-Offers2Cash-horizontal.png", featured: true, rates: ""},
  {name: "CortalyCash", url: "https://cortalycash.com/ref/NetroxTV", logo: "https://cortalycash.com/Client/img/CortalyLogo.webp", featured: true, rates: ""},
  {name: "EmberFund", url: "https://emberfund.onelink.me/ljTI/l4g18zii", logo: "https://play-lh.googleusercontent.com/njc4ZDIjq3tUrnwOrPtXmh7mwah8Ad9D4o2g1IMIae6HMsEBh84k2oaG2tScTXnJvug=w240-h480-rw", featured: true, rates: ""},
  {name: "TurtleCash", url: "https://turtlecash.eu/index.php?inscription&p=NetroxTTV", logo: "https://turtlecash.eu/img/logo.png", featured: true, rates: ""},
  {name: "Timebucks", url: "https://timebucks.com/?refID=225428688", logo: "https://timebucks.com/publishers/images/logo-shadow-small.png?v=2", featured: true, rates: ""},
  {name: "ZemCrypto", url: "https://zemcrypto.com/?a=3781", logo: "https://zemcrypto.com/assets/logo.webp", featured: true, rates: ""},
  {name: "NitroLoot", url: "https://nitroloot.com/r/a5zzpc7weh", logo: "https://logo.clearbit.com/nitroloot.com", featured: true, rates: ""},
  {name: "BambooRush", url: "https://bamboorush.com/?r=netrox", logo: src="/imgs/bambooRushLogo.webp", featured: true, rates: ""},

];

const siteGrid = document.getElementById('siteGrid');
const searchBar = document.getElementById('searchBar');

const banners = [
  {
    image: "https://cdn.earnlab.com/banners/Earn.avif",
    link: "https://earnloop.net/r/YLNMXR5KWR"
  }
];

let currentBannerIndex = 0;

function rotateBanner() {
    document.getElementById('bannerImage').src = banners[0].image;
    document.getElementById('bannerLink').href = banners[0].link;
  
  currentBannerIndex = (currentBannerIndex + 1) % banners.length;
  
  bannerImage.style.opacity = '0';
  
  setTimeout(() => {
    bannerImage.src = banners[currentBannerIndex].image;
    bannerLink.href = banners[currentBannerIndex].link;
    bannerImage.style.opacity = '1';
  }, 300);
}

document.getElementById('bannerImage').src = banners[0].image;
document.getElementById('bannerLink').href = banners[0].link;
document.getElementById('bannerImage').style.transition = 'opacity 0.3s ease';

setInterval(rotateBanner, 10000);

function displaySites(filteredSites) {
  siteGrid.innerHTML = '';

  if (filteredSites.length === 0) {
    const noResults = document.createElement('div');
    noResults.className = 'no-results';
    noResults.innerHTML = '<h3>No sites found matching your search</h3><p>Try a different search term or browse all sites</p>';
    siteGrid.appendChild(noResults);
    return;
  }

  const sortedSites = [...filteredSites];

  let featuredCount = 0;

  sortedSites.forEach((site, index) => {
    const card = document.createElement('div');
    card.className = 'card';

    const logoImg = site.logo ?
      `<img src="${site.logo}" alt="${site.name} Logo" onerror="this.src='https://via.placeholder.com/150?text=${site.name.charAt(0)}'; this.onerror=null;">` :
      `<img src="https://via.placeholder.com/150?text=${site.name.charAt(0)}" alt="${site.name} Logo">`;

    let stars = '';
    const rating = site.featured ? 5 : 4;
    for (let i = 0; i < rating; i++) {
      stars += '★';
    }

    let badge = '';
    if (site.featured) {
      if (featuredCount < 4) badge = '<div class="badge featured">Featured</div>';
      else if (featuredCount < 7) badge = '<div class="badge popular">Popular</div>';
      else if (featuredCount < 11) badge = '<div class="badge new">New</div>';
      featuredCount++;
    }

    // Secondary badge assignment
    let secondaryBadge = '';
    if (site.name === "Earnlab") {
      secondaryBadge = `
        <div class="badge secondary gamdom">
          <span>Gamdom +25%</span>
        </div>
      `;
    }
    if (site.name === "FreeCash" || site.name === "GimmeBux") {
      secondaryBadge = `
        <div class="badge secondary stake">
          Stake +15%
        </div>
      `;
    }
    if (site.name === "GemsLoot") {
      secondaryBadge = `
        <div class="badge secondary roobet">
          <span>Roobet +20%</span>
        </div>
      `;
    }
    if (site.name === "GameHag" || site.name === "Chequity") {
      secondaryBadge = `
        <div class="badge secondary clash">
          <span>Clash.gg +25%</span>
        </div>
      `;
    }

    card.innerHTML = `
        ${badge}
        ${secondaryBadge}
        <div class="card-content">
            ${logoImg}
            <h3>${site.name}</h3>
            <p>${site.rates}</p>
            <div class="stars">${stars}</div>
        </div>
        <div class="btn-group">
            <a class="btn btn-primary" href="${site.url}" target="_blank">Visit Site</a>
        </div>
    `;
    siteGrid.appendChild(card);

    setTimeout(() => {
      card.classList.add('visible');
    }, index * 30);
  });
}

searchBar.addEventListener('input', () => {
  const query = searchBar.value.toLowerCase().trim();
  const filtered = sites.filter(site => site.name.toLowerCase().includes(query));
  displaySites(filtered);

  const promoBanner = document.getElementById('promoBanner');
  if (query.length > 0) {
    promoBanner.classList.remove('visible');
    promoBanner.classList.add('hidden');
  } else {
    promoBanner.classList.remove('hidden');
    promoBanner.classList.add('visible');
  }
});

// Initial display
displaySites(sites);