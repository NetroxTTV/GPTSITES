const sites = [
  {name: "Earnlab", url: "https://earnlab.com/r/netrox", logo: src="/imgs/earnlab.png", featured: true, rates: "80-90% Rates | Highest Paying Webiste"},
  {name: "CashinStyle", url: "https://cashinstyle.com/?ref=NETROX", logo: src="/imgs/cis.svg", featured: true, rates: "90% Rates | Highest Paying Offerwalls"},
  {name: "FreeCash", url: "https://freecash.com/r/netroxx", logo: src="/imgs/freecash.png", featured: true, rates: "70-75% Rates | Instant Cashouts"},
  {name: "CoinPayU", url: "https://www.coinpayu.com/?r=Netrox", logo: src="/imgs/coinpayu.gif", featured: true, rates: "80-85% Rates | High Site Bonuses"},
 
 // ... (rest of the site objects)
  {name: "Earnlab", url: "https://earnlab.com/r/netrox", logo: src="/imgs/earnlab.png", featured: true, rates: "80-90% Rates | Highest Paying Webiste"},
  {name: "CashinStyle", url: "https://cashinstyle.com/?ref=NETROX", logo: src="/imgs/cis.svg", featured: true, rates: "90% Rates | Highest Paying Offerwalls"},
  {name: "FreeCash", url: "https://freecash.com/r/netroxx", logo: src="/imgs/freecash.png", featured: true, rates: "70-75% Rates | Instant Cashouts"},
  {name: "CoinPayU", url: "https://www.coinpayu.com/?r=Netrox", logo: src="/imgs/coinpayu.gif", featured: true, rates: "80-85% Rates | High Site Bonuses"},
  {name: "Gain.gg", url: "https://gain.gg/r/netrox", logo: src="/imgs/gain.png", featured: true, rates: "80-90% Rates | Highing Paying Webiste"},
  {name: "Chequity", url: "https://chequity.io/r/128BDC40", logo: src="/imgs/cheq.png", featured: true, rates: "80% Rates | Simple Website"},
  {name: "GemsLoot", url: "https://gemsloot.com/?aff=netrox", logo: src="/imgs/gemsloot.jpg", featured: true, rates: "65-95% Rates | Instant Cashouts & Esclusive Offers"},
  {name: "FastAsk", url: "https://fastask.net/?ref=296", logo: src="/imgs/fastask.png", featured: true, rates: "100% Rates on WaxRewards"},
  {name: "Azcash", url: "https://azcash.me/register?ref=netrox", logo: src="/imgs/azcash.ico", featured: true, rates: "85% Rates | Exclusive Casino Offers"},
  {name: "CashTipay", url: "https://cashtipay.com/register?referral=netrox", logo: src="/imgs/cashtipay.png", featured: true, rates: ""},
  {name: "EzzCash", url: "https://ezz.cash/?ref=netrox", logo: src="/imgs/ezzcash.png", featured: true, rates: ""},
  {name: "GimmeBux", url: "https://gimmebux.com/r/netrox", logo: src="/imgs/gimmebux.svg", featured: true, rates: ""},
  {name: "Ysense", url: "https://www.ysense.com/?rb=139348631", logo: src="/imgs/ysense.png", featured: true, rates: ""},
  {name: "SwagBucks", url: "https://www.swagbucks.com/p/register?rb=195191067&rp=1", logo: src="/imgs/swagbucks.png", featured: true, rates: ""},
  {name: "SplitDrop", url: "https://splitdrop.com/friend/74388", logo: src="/imgs/splitdrop.png", featured: true, rates: ""},
  {name: "GameHag", url: "https://gamehag.com/r/netrox", logo: src="/imgs/gamehag.png", featured: true, rates: ""},
  {name: "KashRewards", url: "https://kashrewards.com/?a=383", logo: src="/imgs/kashrewards.ico", featured: true, rates: ""},
  {name: "GG2U", url: "https://premium.gg2u.org/?referrer=netroxtv", logo: src="/imgs/gg2u.png", featured: true, rates: ""},
  {name: "Freeward", url: "https://freeward.net/ref/lom3w", logo: src="/imgs/freeward.png", featured: true, rates: ""},
  {name: "Earnut", url: "https://earnut.com/?r=NetroxTV", logo: src="/imgs/earnut.webp", featured: true, rates: ""},
  {name: "CashHut", url: "https://cashhut.net/ref/L7TLOG", logo: src="/imgs/cashhut.png", featured: true, rates: ""},
  {name: "WeCash", url: "https://wecash.one?inviteCode=iEnuXi6cT7MyzTUqGuqp", logo: src="/imgs/wecash.png", featured: true, rates: ""},
  {name: "Earnably", url: "https://earnably.com/join/3079623", logo: src="/imgs/earnably.png", featured: true, rates: ""},
  {name: "RBXRise", url: "https://rbxrise.com/?ref=461699957", logo: src="/imgs/rbxrise.png", featured: true, rates: ""},
  {name: "GaintPlay", url: "https://gaintplay.com/refer/netrix", logo: src="/imgs/gaintplay.png", featured: true, rates: ""},
  {name: "Paidcash", url: "https://paidcash.co/r/ZWWEYY", logo: src="/imgs/paidcash.png", featured: true, rates: ""},
  {name: "Giftably", url: "https://giftably.net/login/Lucas", logo: src="/imgs/giftably.webp", featured: true, rates: ""},
  {name: "RewardXP", url: "https://www.rewardxp.com/join/1363972", logo: src="/imgs/rewardxp.webp", featured: true, rates: ""},
  {name: "PrizeBear", url: "https://prizebear.com/r/uWEzvO", logo: src="/imgs/prizebear.png", featured: true, rates: ""},
  {name: "Gainify", url: "https://gainify.net/ref/ae28248e0ce0", logo: src="/imgs/gainify.png", featured: true, rates: ""},
  {name: "Sparkvey", url: "https://sparkvey.com/?ref=netrox", logo: src="/imgs/sparkvey.ico", featured: true, rates: ""},
  {name: "KlinkFinance", url: "https://join.klinkfinance.com/NFuII9neEPb", logo: src="/imgs/klinkfinance.png", featured: true, rates: ""},
  {name: "EasyBucks", url: "https://www.easybucks.app?rb=160502816", logo: src="/imgs/easybucks.png", featured: true, rates: ""},
  {name: "MoneyTune", url: "https://moneytune.page.link/o3QaXaYYsGDMwQscA", logo: src="/imgs/moneytune.png", featured: true, rates: ""},
  {name: "EarnLoop", url: "https://earnloop.net/r/YLNMXR5KWR", logo: src="/imgs/earnloop.svg", featured: true, rates: ""},
  {name: "Roaster Earn", url: "https://play.google.com/store/apps/details?id=com.roaster.earn.easy", logo: src="/imgs/roasterEarn.webp", featured: true, rates: ""},
  {name: "Kash.gg", url: "www.kash.gg/r/sG9CXqkxBkfk1ox0I08oXEykIHj1", logo: src="/imgs/kashgg.png", featured: true, rates: ""},
  {name: "JumpTask", url: "https://www.jumptask.io/r/vulykapahymy", logo: src="/imgs/jumptask.webp", featured: true, rates: ""},
  {name: "FreeMoneyCoins", url: "https://freemoneycoins.com/referral/netrox", logo: src="/imgs/freemoneycoins.png", featured: true, rates: ""},
  {name: "Lootly", url: "https://lootly.fun/?ref=6rC6iPpjeYEjR46C", logo: src="/imgs/lootly.png", featured: true, rates: ""},
  {name: "Offers2Cash", url: "https://offers2cash.com/invite/L2J1XL", logo: src="/imgs/offers2cash.png", featured: true, rates: ""},
  {name: "CortalyCash", url: "https://cortalycash.com/ref/NetroxTV", logo: src="/imgs/cortalyCash.png", featured: true, rates: ""},
  {name: "EmberFund", url: "https://emberfund.onelink.me/ljTI/l4g18zii", logo: src="/imgs/emberFund.png", featured: true, rates: ""},
  {name: "TurtleCash", url: "https://turtlecash.eu/index.php?inscription&p=NetroxTTV", logo: src="/imgs/turtleCash.png", featured: true, rates: ""},
  {name: "Timebucks", url: "https://timebucks.com/?refID=225428688", logo: src="/imgs/timebucks.png", featured: true, rates: ""},
  {name: "ZemCrypto", url: "https://zemcrypto.com/?a=3781", logo: src="/imgs/zemcrypto.png", featured: true, rates: ""},
  {name: "NitroLoot", url: "https://nitroloot.com/r/a5zzpc7weh", logo: src="/imgs/nitroloot.png", featured: true, rates: ""},
  {name: "BambooRush", url: "https://bamboorush.com/?r=netrox", logo: src="/imgs/bambooRushLogo.webp", featured: true, rates: ""},

];

const siteGrid = document.getElementById('siteGrid');
const searchBar = document.getElementById('searchBar');

const banners = [
  {
    image: "https://cdn.earnlab.com/banners/Earn.avif",
    link: "https://earnlab.com/r/netrox"
  },
  {
    image: "imgs/bannerGemsloot.png",
    link: "https://gemsloot.com/?aff=netrox"
  },
  {
    image: "imgs/coinpayubanner.jpg",
    link: "https://www.coinpayu.com/?r=Netrox"
  },
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

  // Separate featured sites (first 4)
  const featuredSites = sortedSites.slice(0, 4);
  const regularSites = sortedSites.slice(4);

  // Create featured section
  if (featuredSites.length > 0) {
    const featuredSection = document.createElement('div');
    featuredSection.className = 'featured-section';
    
    featuredSites.forEach((site, index) => {
      const featuredCard = document.createElement('div');
      if (index === 0) featuredCard.className = 'featured-card one';
      else featuredCard.className = 'featured-card';

      const logoImg = site.logo ?
        `<img src="${site.logo}" alt="${site.name} Logo" onerror="this.src='https://via.placeholder.com/80?text=${site.name.charAt(0)}'; this.onerror=null;">` :
        `<img src="https://via.placeholder.com/80?text=${site.name.charAt(0)}" alt="${site.name} Logo">`;

      // Secondary badge assignment
      let secondaryBadge = '';
      if (site.name === "Earnlab") {
        secondaryBadge = `<span class="bonus-badge gamdom">Gamdom +25%</span>`;
      }
      if (site.name === "FreeCash" || site.name === "GimmeBux") {
        secondaryBadge = `<span class="bonus-badge stake">Stake +15%</span>`;
      }
      if (site.name === "GemsLoot") {
        secondaryBadge = `<span class="bonus-badge roobet">Roobet +20%</span>`;
      }
      if (site.name === "GameHag" || site.name === "Chequity") {
        secondaryBadge = `<span class="bonus-badge clash">Clash.gg +25%</span>`;
      }

      featuredCard.innerHTML = `
        <div class="featured-number">#${index + 1}</div>
        <div class="featured-logo">${logoImg}</div>
        <div class="featured-info">
          <h3>${site.name}</h3>
          <p>${site.rates}</p>
          ${secondaryBadge}
        </div>
        <div class="featured-action">
          <a class="btn btn-featured" href="${site.url}" target="_blank">Visit Site</a>
        </div>
      `;
      
      featuredSection.appendChild(featuredCard);
      
      setTimeout(() => {
        featuredCard.classList.add('visible');
      }, index * 100);
    });
    
    siteGrid.appendChild(featuredSection);
  }

  // Create regular grid section
  if (regularSites.length > 0) {
    const regularSection = document.createElement('div');
    regularSection.className = 'regular-section';
    regularSection.innerHTML = '<h2 class="section-title">All Sites</h2><div class="regular-grid" id="regularGrid"></div>';
    siteGrid.appendChild(regularSection);
    
    const regularGrid = document.getElementById('regularGrid');

    let featuredCount = 0;

    regularSites.forEach((site, index) => {
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
      regularGrid.appendChild(card);

      setTimeout(() => {
        card.classList.add('visible');
      }, (index + 4) * 30);
    });
  }
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