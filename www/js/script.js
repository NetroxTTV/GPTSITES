const sites = [
    {name: "Earnlab", url: "https://earnlab.com/r/netrox", logo: "../imgs/earnlab.png", featured: true, description: "80-90% Rates | Highest Paying Website", rates: 90, offerwalls: ["primeearn", "torox", "ayetstudios", "revu", "adscend", "adgate", "adgem", "adtowall", "mmwall", "hangmyads", "lootably"]},
    {name: "CashinStyle", url: "https://cashinstyle.com/?ref=NETROX", logo: "../imgs/cis.svg", featured: true, description: "90% Rates | Highest Paying Offerwalls", rates: 90, offerwalls: ["primeearn", "torox", "ayetstudios", "revu", "adscend", "adgate", "adgem", "adtowall", "mmwall", "hangmyads", "lootably"]},
    {name: "GemsLoot", url: "https://gemsloot.com/?aff=netrox", logo: "../imgs/gemsloot.jpg", featured: true, description: "65-95% Rates | Instant Cashouts & Exclusive Offers", rates: 75, offerwalls: ["primeearn", "torox", "ayetstudios", "revu", "adscend", "adgate", "adgem", "adtowall", "mmwall", "hangmyads", "lootably", "waxrewards"]},
    {name: "Earnopolis", url: "https://earnopolis.com/r/?r=netrox", logo: "../imgs/earnopolis.webp", featured: true, description: "95% Rates | Fast Cashouts & Exclusive Offers", rates: 95, offerwalls: ["primeearn", "torox", "myChips", "ayet", "adscend", "timewall"]},
    {name: "MoonMiles", url: "https://moonmiles.io/r/netrox", logo: "../imgs/moonmiles.png", featured: true, description: "80% Rates | Fast Cashouts", rates: 80, offerwalls: ["torox", "revu", "ayet", "adtowall", "lootably", "adscend"]},
    {name: "Pengu Pace", url: "https://go.scrambly.io/kPE2RU", logo: "../imgs/pengu.png", featured: true, isApp: true, description: "Exclusive Offers | Instant Cashout", rates: 50, offerwalls: []},
    {name: "Scrambly", url: "https://go.scrambly.io/ao1aoE", logo: "../imgs/scrambly_ logo.jpg", featured: true, isApp: true, description: "Exclusive Offers | Instant Cashout", rates: 50, offerwalls: []},
    {name: "RewardFlow", url: "https://rewardflow.me?ref=NETROX", logo: "../imgs/rewardflow.png", featured: true, description: "New GPT Site | Multiple Offerwalls", rates: 65, offerwalls: ["torox", "adscend", "notik", "timewall", "adtowall", "lootably", "mmwall", "gemiwall"]},
    {name: "CoinPayU", url: "https://www.coinpayu.com/?r=Netrox", logo: "../imgs/coinpayu.gif", featured: true, description: "80-85% Rates | High Site Bonuses", rates: 75, offerwalls: ["primeearn", "adgate", "torox", "ayetstudios", "mmwall", "hangmyads", "lootably"]},
    {name: "CashTask", url: "https://cashtask.net/r/47CWX93", logo: "../imgs/cashtask.webp", featured: true, description: "85% Rates on Offerwalls | Instant Cashouts", rates: 85, offerwalls: ["gemiwall", "waxrewards", "lootably", "adtowall", "monlix", "notik", "mmwall"]},
    {name: "Chequity", url: "https://chequity.io/r/128BDC40", logo: "../imgs/cheq.png", featured: true, description: "80% Rates | Simple Website", rates: 80, offerwalls: ["torox", "ayetstudios", "revu", "adscend", "adgate", "adgem", "adtowall", "mmwall", "hangmyads", "lootably", "waxrewards"]},
    {name: "CashEarn", url: "https://cashearn.gg/r/8L3D1M7", logo: "../imgs/cashearn.webp", featured: true, description: "80% Rates on Offerwalls", rates: 80, offerwalls: ["gemiwall", "waxrewards", "myChips", "adtowall", "ayet", "lootably", "notik"]},
    {name: "RBXFast", url: "https://rbxfast.com/r/netrox", logo: "../imgs/rbxfast.webp", featured: true, description: "80% Rates", rates: 80, offerwalls: ["gemiwall", "adtowall", "waxrewards", "adscend", "lootably", "monlix", "myChips"]},
    {name: "Gain.gg", url: "https://gain.gg/r/netrox", logo: "../imgs/gain.png", featured: true, description: "70-80% Rates | Instant Cashouts", rates: 80, offerwalls: ["adgate", "primeearn", "adtowall", "torox", "lootably", "myChips", "ayet", "adscend", "revu"]},
    {name: "CashTipay", url: "https://cashtipay.com/register?referral=netrox", logo: "../imgs/cashtipay.png", featured: true, description: "Brand New Site | A Lot of Potential", rates: 50, offerwalls: ["adgate", "torox"]},
    {name: "EzzCash", url: "https://ezz.cash/?ref=netrox", logo: "../imgs/ezzcash.png", featured: true, description: "70-75% Rates", rates: 75, offerwalls: ["ayet", "lootably", "mmwall", "notik", "adtowall"]},
    {name: "FreeCash", url: "https://freecash.com/r/netroxx", logo: "../imgs/freecash.png", featured: true, description: "70-75% Rates | Instant Cashouts", rates: 70, offerwalls: ["adgate", "adgem", "lootably", "torox", "ayet", "myChips", "notik", "mmwall", "revu", "monlix", "adscend"]},
    {name: "GimmeBux", url: "https://gimmebux.com/r/netrox", logo: "../imgs/gimmebux.svg", featured: true, description: "Low Rates | Good Leaderboards", rates: 50, offerwalls: ["adgate", "lootably"]},
    {name: "Ysense", url: "https://www.ysense.com/?rb=139348631", logo: "../imgs/ysense.png", featured: true, description: "Good Offers when boosts ONLY", rates: 50, offerwalls: ["adgate", "adgem"]},
    {name: "SwagBucks", url: "https://www.swagbucks.com/p/register?rb=195191067&rp=1", logo: "../imgs/swagbucks.png", featured: true, description: "Good Offers when boosts ONLY", rates: 50, offerwalls: ["adgate", "revu"]},
    {name: "FastAsk", url: "https://fastask.net/?ref=296", logo: "../imgs/fastask.png", featured: true, description: "100% Rates on WaxRewards", rates: 100, offerwalls: ["waxrewards", "lootably", "myChips"]},
    {name: "SplitDrop", url: "https://splitdrop.com/friend/74388", logo: "../imgs/splitdrop.png", featured: true, description: "70-75% Rates", rates: 75, offerwalls: ["gemiwall", "myChips", "ayet", "torox", "hangmyads", "adtowall", "adgate", "mmwall", "notik", "monlix", "adscend", "lootably", "timewall", "revu"]},
    {name: "GameHag", url: "https://gamehag.com/r/netrox", logo: "../imgs/gamehag.png", featured: true, description: "80% Rates", rates: 65, offerwalls: ["revu", "torox", "lootably", "ayet", "myChips", "adscend", "timewall"]},
    {name: "KashRewards", url: "https://kashrewards.com/?a=383", logo: "../imgs/kashrewards.ico", featured: true, description: "65% Rates", rates: 65, offerwalls: ["lootably", "monlix", "ayet", "notik", "adtowall", "timewall"]},
    {name: "GG2U", url: "https://premium.gg2u.org/?referrer=netroxtv", logo: "../imgs/gg2u.png", featured: true, description: "70-75% Rates", rates: 75},
    {name: "Freeward", url: "https://freeward.net/ref/lom3w", logo: "../imgs/freeward.png", featured: true, description: "70-80% Rates", rates: 80, offerwalls: ["primeearn", "torox", "ayet", "adtowall", "mmwall", "lootably", "waxrewards", "myChips", "monlix", "adscend", "revu", "notik", "timewall"]},
    {name: "CashHut", url: "https://cashhut.net/ref/L7TLOG", logo: "../imgs/cashhut.png", featured: true, description: "75% Rates", rates: 75, offerwalls: ["ayet", "adtowall", "lootably", "waxrewards", "notik", "timewall"]},
    {name: "GrindBux", url: "https://grindbux.com/ref/netroxtv", logo: "../imgs/GrindBux.png", featured: true, description: "70% Rates", rates: 70, offerwalls: ["torox", "adscend", "ayet", "adtowall", "mmwall", "timewall", "lootably", "adgem", "revu", "monlix", "hangmyads", "myChips", "notik", "waxrewards"]},
    {name: "WeCash", url: "https://wecash.one?inviteCode=iEnuXi6cT7MyzTUqGuqp", logo: "../imgs/wecash.png", featured: true, description: "60% Rates", rates: 60, offerwalls: ["torox", "ayet", "adgate", "lootably", "adscend", "mmwall", "timewall", "monlix", "notik", "myChips"]},
    {name: "Earnably", url: "https://earnably.com/join/3079623", logo: "../imgs/earnably.png", featured: true, description: "70-75% Rates", rates: 75, offerwalls: ["adgate", "adtowall", "torox", "lootably", "myChips", "ayet", "adscend", "revu"]},
    {name: "GaintPlay", url: "https://gaintplay.com/refer/netrox", logo: "../imgs/gaintplay.png", featured: true, description: "60% Rates", rates: 60, offerwalls: ["torox", "adgem", "adscend", "lootably", "hangmyads", "revu", "notik", "timewall"]},
    {name: "Paidcash", url: "https://paidcash.co/r/ZWWEYY", logo: "../imgs/paidcash.png", featured: true, description: "70% Rates", rates: 70, offerwalls: ["adgate", "adtowall", "torox", "lootably", "myChips", "ayet", "adscend", "revu"]},
    {name: "Giftably", url: "https://giftably.net/login/Lucas", logo: "../imgs/giftably.webp", featured: true, description: "80% Rates", rates: 80},
    {name: "RewardXP", url: "https://www.rewardxp.com/join/1425421", logo: "../imgs/rewardxp.png", featured: true, description: "80% Rates", rates: 80, offerwalls: ["torox", "timewall", "myChips", "adscend", "ayet"]},
    {name: "PrizeBear", url: "https://prizebear.com/r/uWEzvO", logo: "../imgs/prizebear.png", featured: true, description: "80% Rates", rates: 80, offerwalls: ["adgate", "adtowall", "torox", "lootably", "myChips", "ayet", "adscend", "revu"]},
    {name: "Gainify", url: "https://gainify.net/ref/ae28248e0ce0", logo: "../imgs/gainify.png", featured: true, description: "70% Rates", rates: 70, offerwalls: ["adgate", "adtowall", "torox", "lootably", "myChips", "ayet", "adscend", "revu"]},
    {name: "Sparkvey", url: "https://sparkvey.com/?ref=netrox", logo: "../imgs/sparkvey.ico", featured: true, description: "80% Rates", rates: 80, offerwalls: ["adgate", "adtowall", "torox", "lootably", "myChips", "ayet", "adscend", "revu"]},
    {name: "EasyBucks", url: "https://www.easybucks.app?rb=160502816", logo: "../imgs/easybucks.png", featured: true, description: "60% Rates", rates: 60, offerwalls: ["adgate", "adtowall", "torox", "lootably", "myChips", "ayet", "adscend", "revu"]},
    {name: "MoneyTune", url: "https://moneytune.page.link/o3QaXaYYsGDMwQscA", logo: "../imgs/moneytune.png", featured: true, description: "", rates: 50, offerwalls: ["adgate", "adtowall", "torox", "lootably", "myChips", "ayet", "adscend", "revu"]},
    {name: "EarnLoop", url: "https://earnloop.net/r/YLNMXR5KWR", logo: "../imgs/earnloop.svg", featured: true, description: "85% Rates | Fast Cashouts", rates: 85, offerwalls: ["adgate", "adtowall", "torox", "lootably", "myChips", "ayet", "adscend", "revu"]},
    {name: "Roaster Earn", url: "https://play.google.com/store/apps/details?id=com.roaster.earn.easy", logo: "../imgs/roasterEarn.webp", featured: true, description: "Mobile App", rates: 55, offerwalls: ["adgate", "adtowall", "torox", "lootably", "myChips", "ayet", "adscend", "revu"]},
    {name: "JumpTask", url: "https://www.jumptask.io/r/vulykapahymy", logo: "../imgs/jumptask.webp", featured: true, description: "", rates: 50, offerwalls: ["adgate", "adtowall", "torox", "lootably", "myChips", "ayet", "adscend", "revu"]},
    {name: "FreeMoneyCoins", url: "https://freemoneycoins.com/referral/netrox", logo: "../imgs/freemoneycoins.png", featured: true, description: "", rates: 50, offerwalls: ["adgate", "adtowall", "torox", "lootably", "myChips", "ayet", "adscend", "revu"]},
    {name: "CortalyCash", url: "https://cortalycash.com/ref/NetroxTV", logo: "../imgs/cortalyCash.png", featured: true, description: "", rates: 50, offerwalls: ["adgate", "adtowall", "torox", "lootably", "myChips", "ayet", "adscend", "revu"]},
    {name: "TurtleCash", url: "https://turtlecash.eu/index.php?inscription&p=NetroxTTV", logo: "../imgs/turtleCash.png", featured: true, description: "", rates: 50, offerwalls: ["adgate", "adtowall", "torox", "lootably", "myChips", "ayet", "adscend", "revu"]},
    {name: "Timebucks", url: "https://timebucks.com/?refID=225428688", logo: "../imgs/timebucks.png", featured: true, description: "10+ Years of Activity | Fast Payouts", rates: 90, offerwalls: ["adgate", "adtowall", "torox", "lootably", "myChips", "ayet", "adscend", "revu"]},
    {name: "ZemCrypto", url: "https://zemcrypto.com/?a=3781", logo: "../imgs/zemcrypto.png", featured: true, description: "", rates: 60, offerwalls: ["adgate", "adtowall", "torox", "lootably", "myChips", "ayet", "adscend", "revu"]},
    {name: "NitroLoot", url: "https://nitroloot.com/r/a5zzpc7weh", logo: "../imgs/nitroloot.png", featured: true, description: "", rates: 50, offerwalls: ["adgate", "adtowall", "torox", "lootably", "myChips", "ayet", "adscend", "revu"]},
    {name: "BambooRush", url: "https://bamboorush.com/?r=netrox", logo: "../imgs/bamboorushLogo.webp", featured: true, description: "70% Rates", rates: 70, offerwalls: ["adgate", "adtowall", "torox", "lootably", "myChips", "ayet", "adscend", "revu"]},
    {name: "Cashzy", url: "https://www.cashzy.net/register?ref=NETROX", logo: "../imgs/cashzy.jpeg", featured: true, description: "Might scam", rates: 60, offerwalls: ["torox", "adtowall", "notik", "ayet", "gemiwall", "mmwall", "lootably", "timewall", "monlix"]},
];

const offerwalls = [
  {id: "primeearn", name: "Prime Earn", logo: "../offerwalls/primeearn.webp"},
  {id: "torox", name: "Torox", logo: "../offerwalls/torox.png"},
  {id: "adscend", name: "AdscendMedia", logo: "../offerwalls/adscend.svg"},
  {id: "ayetstudios", name: "AyeT Studios", logo: "../offerwalls/ayetstudios.png"},
  {id: "adtowall", name: "dtowall", logo: "../offerwalls/adtowall.svg"},
  {id: "adgatemedia", name: "AdGateMedia", logo: "../offerwalls/adgatemedia.png"},
  {id: "gemiwall", name: "GemiWall", logo: "../offerwalls/gemiwall.webp"},
  {id: "waxrewards", name: "Wax Rewards", logo: "../offerwalls/waxrewards.png"},
  {id: "timewall", name: "TimeWall", logo: "../offerwalls/timewall.webp"},
  {id: "adgem", name: "AdGem", logo: "../offerwalls/adgem.png"},
  {id: "revu", name: "RevU", logo: "../offerwalls/revenueuniverse.svg"},
  {id: "monlix", name: "Monlix", logo: "../offerwalls/monlix.svg"},
  {id: "hangmyads", name: "Hang My Ads", logo: "../offerwalls/hangmyads.png"},
  {id: "myChips", name: "myChips", logo: "../offerwalls/mychipsLogoDark.svg"},
  {id: "notik", name: "notik", logo: "../offerwalls/notik.webp"},
  {id: "lootably", name: "Lootably", logo: "../offerwalls/lootably.png"},
  {id: "mmwall", name: "MM Wall", logo: "../offerwalls/mmwall.svg"},
];

function createSecondaryBadge(siteName) {
  const badgeMap = {
    "Earnlab": '<span class="bonus-badge gamdom">Gamdom +25%</span>',
    "FreeCash": '<span class="bonus-badge stake">Stake +15%</span>',
    "GimmeBux": '<span class="bonus-badge stake">Stake +15%</span>',
    "GemsLoot": '<span class="bonus-badge roobet">Roobet +20%</span>',
    "GameHag": '<span class="bonus-badge clash">Clash.gg +25%</span>',
    "Chequity": '<span class="bonus-badge clash">Clash.gg +25%</span>',
    "Scrambly": '<span class="bonus-badge app">Mobile App</span>',
    "Pengu Pace": '<span class="bonus-badge app">Mobile App</span>'
  };
  return badgeMap[siteName] || '';
}

function createSecondaryBadgeCard(siteName) {
  const badgeMap = {
    "Earnlab": '<div class="badge secondary gamdom"><span>Gamdom +25%</span></div>',
    "FreeCash": '<div class="badge secondary stake">Stake +15%</div>',
    "GimmeBux": '<div class="badge secondary stake">Stake +15%</div>',
    "GemsLoot": '<div class="badge secondary roobet"><span>Roobet +20%</span></div>',
    "GameHag": '<div class="badge secondary clash"><span>Clash.gg +25%</span></div>',
    "Chequity": '<div class="badge secondary clash"><span>Clash.gg +25%</span></div>',
    "Scrambly": '<div class="badge secondary app">Mobile App</div>',
    "Pengu Pace": '<div class="badge secondary app">Mobile App</div>'
  };
  return badgeMap[siteName] || '';
}


const siteGrid = document.getElementById('siteGrid');
const searchBar = document.getElementById('searchBar');

const banners = [
  {
    image: "../imgs/rewardflow_banner.png",
    link: "https://rewardflow.me?ref=NETROX"
  },
  {
    image: "https://cdn.earnlab.com/banners/Earn.avif",
    link: "https://earnlab.com/r/netrox"
  },
  {
    image: "../imgs/bannerGemsloot.png",
    link: "https://gemsloot.com/?aff=netrox"
  },
  {
    image: "../imgs/coinpayubanner.jpg",
    link: "https://www.coinpayu.com/?r=Netrox"
  },
];

let currentBannerIndex = 0;

function rotateBanner() {
  const bannerImage = document.getElementById('bannerImage');
  const bannerLink = document.getElementById('bannerLink');
  
  currentBannerIndex = (currentBannerIndex + 1) % banners.length;
  
  bannerImage.style.opacity = '0';
  
  setTimeout(() => {
    bannerImage.src = banners[currentBannerIndex].image;
    bannerLink.href = banners[currentBannerIndex].link;
    bannerImage.style.opacity = '1';
  }, 300);
}

// Initialize banner
const bannerImage = document.getElementById('bannerImage');
const bannerLink = document.getElementById('bannerLink');
if (bannerImage && bannerLink) {
  bannerImage.src = banners[0].image;
  bannerLink.href = banners[0].link;
  bannerImage.style.transition = 'opacity 0.3s ease';
  setInterval(rotateBanner, 10000);
}

function displaySites(filteredSites, isSearching = false) {
    siteGrid.innerHTML = '';

    const featuredTitle = document.getElementById('featuredSites');
    if (featuredTitle) {

        featuredTitle.style.display = isSearching ? 'none' : 'block';
    }

    const sortedSites = [...filteredSites];
      // Only show featured section when NOT searching
    const featuredSites = isSearching ? [] : sortedSites.slice(0, 4);
    const regularSites = isSearching ? sortedSites : sortedSites.slice(4);

    if (featuredSites.length > 0) {
        const featuredSection = document.createElement('div');
        featuredSection.className = 'featured-section';
        
        featuredSites.forEach((site, index) => {
            const featuredCard = document.createElement('div');
            featuredCard.className = index === 0 ? 'featured-card one' : 'featured-card';
            
            const logoImg = site.logo ?
                `<img src="${site.logo}" alt="${site.name} Logo" loading="lazy" onerror="this.src='https://via.placeholder.com/80?text=${site.name.charAt(0)}'; this.onerror=null;">` :
                `<img src="https://via.placeholder.com/80?text=${site.name.charAt(0)}" alt="${site.name} Logo" loading="lazy">`;

            featuredCard.innerHTML = `
                <div class="featured-number">#${index + 1}</div>
                <div class="featured-logo">${logoImg}</div>
                <div class="featured-info">
                    <h3>${site.name}</h3>
                    <p>${site.description}</p>
                    ${createSecondaryBadge(site.name)}
                </div>
                <div class="featured-action">
                    <a class="btn btn-featured" href="${site.url}" target="_blank" rel="noopener">Visit Site</a>
                </div>
            `;
            
            featuredSection.appendChild(featuredCard);
            
            requestAnimationFrame(() => {
                setTimeout(() => {
                    featuredCard.classList.add('visible');
                });
            });
        });
        
        siteGrid.appendChild(featuredSection);
    }
    // Always show the regular section with search bar
    const regularSection = document.createElement('div');
    regularSection.className = 'regular-section';
    
    const sectionTitle = isSearching ? 'Search Results' : 'Other Sites';
    regularSection.innerHTML = `
        <h2 class="section-title">
        ${sectionTitle}</h2>
        <div class="search-container-inline">
            <input type="text" id="dynamicSearchBar" placeholder="Search for a GPT site...">
        </div> 
        <div class="regular-grid" id="regularGrid"></div>`;
    siteGrid.appendChild(regularSection);
    const regularGrid = document.getElementById('regularGrid');

    if (regularSites.length === 0 && isSearching) {
        const noResults = document.createElement('div');
        noResults.className = 'no-results';
        noResults.innerHTML = `
            <h3>No sites found matching your search</h3>
            <p>Try a different search term or browse other sites</p>
        `;
        regularGrid.appendChild(noResults);
        
    }
    // Attach event listener to the dynamic search bar
    const dynamicSearchBar = document.getElementById('dynamicSearchBar');
    if (dynamicSearchBar) {
        // Create a separate debounced function for the dynamic search bar
        const currentQuery = isSearching && featuredTitle.style.display === 'none' 
                           ? document.getElementById('searchBar')?.value || '' 
                           : ''; 

        const globalSearchBar = document.getElementById('searchBar');
        if (globalSearchBar) {
            dynamicSearchBar.value = globalSearchBar.value;
        }

        let dynamicDebounceTimeout;
        dynamicSearchBar.addEventListener('input', function() {
            clearTimeout(dynamicDebounceTimeout);
            const query = this.value.toLowerCase().trim();

            if (globalSearchBar) {
                globalSearchBar.value = this.value; 
            }

            dynamicDebounceTimeout = setTimeout(() => {
                const isSearchingNow = query.length > 0;
                const filtered = sites.filter(site => site.name.toLowerCase().includes(query));
                displaySites(filtered, isSearchingNow);
                
                // Re-focus on the search bar and restore the query
                const newSearchBar = document.getElementById('dynamicSearchBar');
                if (newSearchBar) {
                    newSearchBar.value = query;
                    newSearchBar.focus();
                    // Set cursor at the end
                    newSearchBar.setSelectionRange(query.length, query.length);
                }

                
            }, 300);
        });
    }

    
    if (regularSites.length > 0) {
        regularSites.forEach((site, index) => {
            const card = document.createElement('div');
            card.className = 'card';
           
            
            const logoImg = site.logo ?
                `<img src="${site.logo}" alt="${site.name} Logo" loading="lazy" onerror="this.src='https://via.placeholder.com/150?text=${site.name.charAt(0)}'; this.onerror=null;">` :
                `<img src="https://via.placeholder.com/150?text=${site.name.charAt(0)}" alt="${site.name} Logo" loading="lazy">`;

            let stars = '';
            const rating = site.featured ? 5 : 4;
            for (let i = 0; i < rating; i++) {
                stars += '★';
            }

            let badge = '';
            if (site.featured) {
                const originalIndex = sites.findIndex(s => s.name === site.name && s.url === site.url);
                
                if (originalIndex >= 0 && originalIndex < 4) {
                    badge = '<div class="badge featured">Featured</div>';
                } else if (originalIndex >= 4 && originalIndex < 8) {
                    badge = '<div class="badge new">New</div>';
                } else if (originalIndex >= 8 && originalIndex < 12) {
                    badge = '<div class="badge popular">Popular</div>';
                }
            }

            const secondaryBadge = createSecondaryBadgeCard(site.name);
            
            // Add 'no-badge' class if there are no badges
            if (!badge && !secondaryBadge) {
                card.className = 'card no-badge';
            }

            card.innerHTML = `
                ${badge}
                ${secondaryBadge}
                <div class="card-content">
                    ${logoImg}
                    <h3>${site.name}</h3>
                    <p>${site.description}</p>
                    <div class="stars">${stars}</div>
                </div>
                <div class="btn-group">
                    <a class="btn btn-primary" href="${site.url}" target="_blank" rel="noopener">Visit Site</a>
                </div>
            `;
            regularGrid.appendChild(card);

            requestAnimationFrame(() => {
                setTimeout(() => {
                    card.classList.add('visible');
                }, (index + 4));
            });
        });
    }
}

function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

const debouncedSearch = debounce(() => {
  const query = searchBar.value.toLowerCase().trim();
  const isSearching = query.length > 0;
  
  const filtered = sites.filter(site => site.name.toLowerCase().includes(query));
  displaySites(filtered, isSearching);

  const promoBanner = document.getElementById('promoBanner');
  if (promoBanner) {
    if (isSearching) {
      promoBanner.classList.remove('visible');
      promoBanner.classList.add('hidden');
    } else {
      promoBanner.classList.remove('hidden');
      promoBanner.classList.add('visible');
    }
  }

  const bannerContainer = document.querySelector('.banner-container');
  if (bannerContainer) {
    if (isSearching) {
      bannerContainer.classList.remove('visible');
      bannerContainer.classList.add('hidden');
    } else {
      bannerContainer.classList.remove('hidden');
      bannerContainer.classList.add('visible');
    }
  }

  // Hide/show "Featured GPT Sites" title when searching
  const featuredTitle = document.getElementById('featuredSites');
  if (featuredTitle) {
    if (isSearching) {
      featuredTitle.style.display = 'none';
    } else {
      featuredTitle.style.display = 'block';
    }
  }
}, 300); // Wait 300ms after user stops typing

if (searchBar) {
  searchBar.addEventListener('input', debouncedSearch);
}

if (siteGrid) {
  displaySites(sites);
}

function displayOfferwalls() {
  const offerwallsGrid = document.getElementById('offerwallsGrid');
  if (!offerwallsGrid) return;
  
  offerwallsGrid.innerHTML = '';
  
  offerwalls.forEach((offerwall, index) => {
    const card = document.createElement('div');
    card.className = 'offerwall-card';
    
    card.innerHTML = `
      <img src="${offerwall.logo}" alt="${offerwall.name}" class="offerwall-logo">
      <h3>${offerwall.name}</h3>
    `;
    
    card.addEventListener('click', () => showSitesForOfferwall(offerwall.id, offerwall.name));
    
    offerwallsGrid.appendChild(card);
    
    requestAnimationFrame(() => {
      setTimeout(() => {
        card.classList.add('visible');
      }, index);
    });
  });
}

function showSitesForOfferwall(offerwallId, offerwallName) {
  const modal = document.getElementById('sitesModal');
  const modalTitle = document.getElementById('modalTitle');
  const modalSitesList = document.getElementById('modalSitesList');
  
  const sitesWithOfferwall = sites.filter(site => 
    site.offerwalls && site.offerwalls.includes(offerwallId)
  );
  
  // Sort by rates (highest to lowest) when we click on an offerwall
  sitesWithOfferwall.sort((a, b) => b.rates - a.rates);
  
  modalTitle.textContent = `Sites with ${offerwallName}`;
  modalSitesList.innerHTML = '';
  
  if (sitesWithOfferwall.length === 0) {
    modalSitesList.innerHTML = '<p class="no-sites">No sites found with this offerwall</p>';
  } else {
    sitesWithOfferwall.forEach(site => {
      const siteCard = document.createElement('div');
      siteCard.className = 'modal-site-card';
      
      const logoImg = site.logo ?
        `<img src="${site.logo}" alt="${site.name}" loading="lazy" onerror="this.src='https://via.placeholder.com/60?text=${site.name.charAt(0)}'; this.onerror=null;">` :
        `<img src="https://via.placeholder.com/60?text=${site.name.charAt(0)}" alt="${site.name}" loading="lazy">`;
      
      const rateDisplay = site.rates > 0 ? `${site.rates}% | ` : '';
      
      siteCard.innerHTML = `
        <div class="modal-site-logo">${logoImg}</div>
        <div class="modal-site-info">
          <h4>${site.name}</h4>
          <p>${site.rates}% Rates</p>
        </div>
        <a href="${site.url}" target="_blank" rel="noopener" class="btn btn-small">Visit</a>
      `;
      
      modalSitesList.appendChild(siteCard);
    });
  }
  
  modal.style.display = 'block';
  
  // Reset scroll position to top after content is rendered
  setTimeout(() => {
    modalSitesList.scrollTop = 0;
  }, 0);
}

// Modal close functionality
const modal = document.getElementById('sitesModal');
const closeBtn = document.querySelector('.close');

if (closeBtn) {
  closeBtn.onclick = function() {
    modal.style.display = 'none';
  };
}

if (modal) {
  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = 'none';
    }
  };
}

// Initialize offerwalls page if on that page
if (document.getElementById('offerwallsGrid')) {
  displayOfferwalls();
}

// Mobile menu functionality
let isToggling = false;

function toggleMobileMenu() {
  if (isToggling) {
    return;
  }
  
  isToggling = true;
  const mobileMenu = document.getElementById('mobileMenu');
  const mobileMenuButton = document.querySelector('.mobile-menu-button');
  
  if (!mobileMenu) {
    isToggling = false;
    return;
  }
  
  mobileMenu.classList.toggle('active');
  
  if (mobileMenuButton) {
    mobileMenuButton.textContent = mobileMenu.classList.contains('active') ? '✕' : '☰';
  }
  
  if (mobileMenu.classList.contains('active')) {
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style.overflow = '';
  }
  
  updateArrowVisibility();
  
  setTimeout(() => {
    isToggling = false;
  }, 100);
}

function closeMobileMenu() {
  const mobileMenu = document.getElementById('mobileMenu');
  const mobileMenuButton = document.querySelector('.mobile-menu-button');
  
  if (!mobileMenu) return;
  
  mobileMenu.classList.remove('active');
  
  if (mobileMenuButton) {
    mobileMenuButton.textContent = '☰';
  }
  
  document.body.style.overflow = '';
  updateArrowVisibility();
}

// Close mobile menu when clicking on navigation links
document.addEventListener('DOMContentLoaded', function() {
  const mobileMenuLinks = document.querySelectorAll('.mobile-menu-nav a');
  
  mobileMenuLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      // Close the menu immediately
      closeMobileMenu();
      
      // If it's an anchor link on the same page, handle scrolling
      const href = this.getAttribute('href');
      if (href && href.startsWith('#')) {
        e.preventDefault();
        const target = document.querySelector(href);
        if (target) {
          setTimeout(() => {
            target.scrollIntoView({ behavior: 'smooth' });
          }, 100);
        }
      }
    });
  });
});

// Scroll arrow functionality
function scrollToFeatured() {
  const featuredSection = document.getElementById('scroll');
  if (featuredSection) {
    featuredSection.scrollIntoView({ 
      behavior: 'smooth',
      block: 'start'
    });
  }
}

// Add smooth scroll to navigation links
document.addEventListener('DOMContentLoaded', function() {
  // Select all anchor links that point to sections on the same page
  const navLinks = document.querySelectorAll('a[href^="#"]');
  
  navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      const href = this.getAttribute('href');
      
      // Skip empty anchors
      if (!href || href === '#') return;
      
      e.preventDefault();
      const target = document.querySelector(href);
      
      if (target) {
        target.scrollIntoView({ 
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });
});

// Hide arrow when mobile menu is active
function updateArrowVisibility() {
  const scrollArrow = document.getElementById('scrollArrow');
  const mobileMenu = document.getElementById('mobileMenu');
  
  if (scrollArrow && mobileMenu) {
    if (mobileMenu.classList.contains('active')) {
      scrollArrow.classList.add('hidden');
    } else {
      scrollArrow.classList.remove('hidden');
    }
  }
}

// Guide filtering functionality
document.addEventListener('DOMContentLoaded', function() {
  const filterTags = document.querySelectorAll('.filter-tag');
  const guideCards = document.querySelectorAll('.guide-card');
  
  if (filterTags.length > 0 && guideCards.length > 0) {
    filterTags.forEach(tag => {
      tag.addEventListener('click', function() {
        const filter = this.getAttribute('data-filter');
        
        // Update active state
        filterTags.forEach(t => t.classList.remove('active'));
        this.classList.add('active');
        
        // Filter guides
        guideCards.forEach(card => {
          if (filter === 'all') {
            card.classList.remove('hidden');
          } else {
            const cardTags = card.getAttribute('data-tags');
            if (cardTags && cardTags.includes(filter)) {
              card.classList.remove('hidden');
            } else {
              card.classList.add('hidden');
            }
          }
        });
      });
    });
  }
});
