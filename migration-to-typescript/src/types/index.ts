
export interface SourceResp {
    status: string;
    sources: Array<SourceItem>;
}

export interface SourceItem {
    id: string;
    name: string;
    description: string;
    url: string;
    category: string;
    language: string;
    country: string;
}

export interface ArticlesResp {
    status: string;
    totalResults: number;
    articles: Array<ArticlesItem>;
}

export interface ArticlesItem {
    source: Source;
    author: string;
    title: string;
    description: string;
    url: string;
    urlToImage: string;
    publishedAt: string;
    content: string;
}

export interface Source {
    id: string;
    name: string;
}

export interface Options {
    [key: string]: string;
}




// {
//     "status": "ok",
//     "totalResults": 4305,
//     "articles": [
//       {
//         "source": {
//           "id": "abc-news",
//           "name": "ABC News"
//         },
//         "author": "ABC News",
//         "title": "North Macedonia: 47 police officers injured in protests",
//         "description": "Police in North Macedonia say officers were injured, two of them seriously, after a group of mostly young people threw stones, metal bars, eggs and Molotov cocktails at the parliament building in the capital",
//         "url": "https://abcnews.go.com/International/wireStory/north-macedonia-47-police-officers-injured-protests-86288027",
//         "urlToImage": "https://s.abcnews.com/images/International/WireAP_01e97d28240e4e4e9b7d6ce2ccb9e94f_16x9_992.jpg",
//         "publishedAt": "2022-07-06T09:05:51Z",
//         "content": "SKOPJE, North Macedonia -- Police in North Macedonia said 47 officers were injured, two of them seriously, after a group of mostly young people threw stones, metal bars, eggs and Molotov cocktails at… [+1888 chars]"
//       },
//       {
//         "source": {
//           "id": "abc-news",
//           "name": "ABC News"
//         },
//         "author": "ABC News",
//         "title": "Dutch police shoot at tractor during night of farm protests",
//         "description": "Dutch police have shot at a tractor during a heated night of farm protests and detained three demonstrators",
//         "url": "https://abcnews.go.com/International/wireStory/dutch-police-shoot-tractor-night-farm-protests-86287687",
//         "urlToImage": "https://s.abcnews.com/images/International/WireAP_10466f20fb484b93bd8723f3acf30980_16x9_992.jpg",
//         "publishedAt": "2022-07-06T08:49:13Z",
//         "content": "AMSTERDAM -- Dutch police shot at a tractor during a heated night of farm protests and detained three demonstrators, the latest incident in a string of protests against government plans to cut pollut… [+1037 chars]"
//       },
//       {
//         "source": {
//           "id": "abc-news",
//           "name": "ABC News"
//         },
//         "author": "ABC News",
//         "title": "South Africa holds funeral for 21 teens who died in tavern",
//         "description": "More than a thousand grieving family and community members are attending the funeral in South Africa’s East London for 21 teenagers who died in a mysterious tragedy at a nightclub nearly two weeks ago",
//         "url": "https://abcnews.go.com/International/wireStory/south-africa-holds-funeral-21-teens-died-tavern-86287451",
//         "urlToImage": "https://s.abcnews.com/images/International/WireAP_3a3fdd1d79b34e3fb2c8fa130932c1e9_16x9_992.jpg",
//         "publishedAt": "2022-07-06T08:45:42Z",
//         "content": "EAST LONDON, South Africa -- More than a thousand grieving family and community members are attending the funeral in South Africa's East London for 21 teenagers who died in a mysterious tragedy at a … [+1750 chars]"
//       },
//       {
//         "source": {
//           "id": "abc-news",
//           "name": "ABC News"
//         },
//         "author": "ABC News",
//         "title": "France's train traffic disrupted amid strike for higher pay",
//         "description": "A strike by railway workers demanding higher pay amid cost of living increases is interrupting train service in France",
//         "url": "https://abcnews.go.com/International/wireStory/frances-train-traffic-disrupted-amid-strike-higher-pay-86287217",
//         "urlToImage": "https://s.abcnews.com/images/US/abc_news_default_2000x2000_update_16x9_992.jpg",
//         "publishedAt": "2022-07-06T08:43:25Z",
//         "content": "PARIS -- A strike by railway workers demanding higher pay amid cost of living increases interrupted train service in France on Wednesday.\r\nNational railway company SNCF said about one in four high-sp… [+747 chars]"
//       },
//       {
//         "source": {
//           "id": "abc-news",
//           "name": "ABC News"
//         },
//         "author": "ABC News",
//         "title": "South African president joins hundreds of mourners at funeral for 21 teenagers who died in mysterious tavern tragedy",
//         "description": "South African president joins hundreds of mourners at  funeral for 21 teenagers who died in mysterious tavern tragedy",
//         "url": "https://abcnews.go.com/International/wireStory/south-african-president-joins-hundreds-mourners-funeral-21-86287214",
//         "urlToImage": "https://s.abcnews.com/images/International/WireAP_3a3fdd1d79b34e3fb2c8fa130932c1e9_16x9_992.jpg",
//         "publishedAt": "2022-07-06T08:40:51Z",
//         "content": "EAST LONDON, South Africa -- South African president joins hundreds of mourners at funeral for 21 teenagers who died in mysterious tavern tragedy."
//       },
//       {
//         "source": {
//           "id": "abc-news",
//           "name": "ABC News"
//         },
//         "author": "ABC News",
//         "title": "EU chief warns of danger of complete cut-off of Russian gas",
//         "description": "European Commission chief Ursula von der Leyen says the 27-nation Europe Union needs to make emergency plans to prepare for a complete cut-off of Russian gas in the wake of the Kremlin’s war in Ukraine",
//         "url": "https://abcnews.go.com/Business/wireStory/eu-chief-warns-danger-complete-cut-off-russian-86286978",
//         "urlToImage": "https://s.abcnews.com/images/International/WireAP_07dc9f268aa840e3a618c20ea879fd4c_16x9_992.jpg",
//         "publishedAt": "2022-07-06T08:37:27Z",
//         "content": "BRUSSELS -- European Commission chief Ursula von der Leyen said Wednesday that the 27-nation European Union needs to make emergency plans to prepare for a complete cut-off of Russian gas in the wake … [+3037 chars]"
//       },
//       {
//         "source": {
//           "id": "abc-news",
//           "name": "ABC News"
//         },
//         "author": "ABC News",
//         "title": "Student charged in southern Sweden high-school killing",
//         "description": "Prosecutors say an 18-year-old man who attacked and killed two teachers with a knife and an ax at a high school in southern Sweden in March has been charged with two counts of murder",
//         "url": "https://abcnews.go.com/International/wireStory/student-charged-southern-sweden-high-school-killing-86286977",
//         "urlToImage": "https://s.abcnews.com/images/US/abc_news_default_2000x2000_update_16x9_992.jpg",
//         "publishedAt": "2022-07-06T08:23:52Z",
//         "content": "COPENHAGEN, Denmark -- An 18-year-old man who attacked and killed two teachers with a knife and an ax at a high school in southern Sweden in March has been charged with two counts of murder, prosecut… [+990 chars]"
//       },
//       {
//         "source": {
//           "id": "abc-news",
//           "name": "ABC News"
//         },
//         "author": "ABC News",
//         "title": "5 killed as Russia pounds eastern Ukraine region of Donetsk",
//         "description": "A Ukrainian official says Russian shelling has killed five civilians over the past 24 hours and wounded 21 more in the eastern Donetsk province, where Russia has stepped up its offensive in recent days",
//         "url": "https://abcnews.go.com/International/wireStory/killed-russia-pounds-eastern-ukraine-region-donetsk-86286976",
//         "urlToImage": "https://s.abcnews.com/images/US/abc_news_default_2000x2000_update_16x9_992.jpg",
//         "publishedAt": "2022-07-06T08:19:58Z",
//         "content": "KRAMATORSK, Ukraine -- A Ukrainian official says Russian shelling has killed five civilians over the past 24 hours and wounded 21 more in the eastern Donetsk province, where Russia has stepped up its… [+1524 chars]"
//       },
//       {
//         "source": {
//           "id": "abc-news",
//           "name": "ABC News"
//         },
//         "author": "ABC News",
//         "title": "UK's Johnson vows to stay in office after top ministers quit",
//         "description": "A defiant British Prime Minister Boris Johnson is battling to stay in power after his government was rocked by the resignation of two top ministers",
//         "url": "https://abcnews.go.com/International/wireStory/uks-johnson-vows-stay-office-top-ministers-quit-86286745",
//         "urlToImage": "https://s.abcnews.com/images/International/WireAP_37576aedd60a4bd3a9f370ba9c72b9b6_16x9_992.jpg",
//         "publishedAt": "2022-07-06T08:04:16Z",
//         "content": "LONDON -- A defiant British Prime Minister Boris Johnson was battling to stay in power on Wednesday after his government was rocked by the resignation of two top ministers, who said they could no lon… [+3831 chars]"
//       },
//       {
//         "source": {
//           "id": "abc-news",
//           "name": "ABC News"
//         },
//         "author": "ABC News",
//         "title": "EU chief warns of danger of complete cut-off of Russian gas",
//         "description": "European Commission chief Ursula von der Leyen says the 27-nation Europe Union needs to make emergency plans to prepare for a complete cut-off of Russian gas in the wake of the Kremlin’s war in Ukraine",
//         "url": "https://abcnews.go.com/International/wireStory/eu-chief-warns-danger-complete-cut-off-russian-86286388",
//         "urlToImage": "https://s.abcnews.com/images/International/WireAP_07dc9f268aa840e3a618c20ea879fd4c_16x9_992.jpg",
//         "publishedAt": "2022-07-06T08:04:08Z",
//         "content": "BRUSSELS -- European Commission chief Ursula von der Leyen said Wednesday that the 27-nation Europe Union needs to make emergency plans to prepare for a complete cut-off of Russian gas in the wake of… [+439 chars]"
//       },
//       {
//         "source": {
//           "id": "abc-news",
//           "name": "ABC News"
//         },
//         "author": "ABC News",
//         "title": "UK's Johnson vows to stay in office after top ministers quit",
//         "description": "A defiant British Prime Minister Boris Johnson is battling to stay in power after his government was rocked by the resignation of two top ministers",
//         "url": "https://abcnews.go.com/International/wireStory/uks-johnson-vows-stay-office-top-ministers-quit-86286974",
//         "urlToImage": "https://s.abcnews.com/images/International/WireAP_37576aedd60a4bd3a9f370ba9c72b9b6_16x9_992.jpg",
//         "publishedAt": "2022-07-06T08:03:04Z",
//         "content": "LONDON -- A defiant British Prime Minister Boris Johnson was battling to stay in power on Wednesday after his government was rocked by the resignation of two top ministers, who said they could no lon… [+3831 chars]"
//       },
//       {
//         "source": {
//           "id": "abc-news",
//           "name": "ABC News"
//         },
//         "author": "ABC News",
//         "title": "Economists: Current measures won't meet German energy goals",
//         "description": "Economists say current measures aren’t enough to achieve Germany’s targets for phasing out fossil fuels and ramping up renewable energy by 2030",
//         "url": "https://abcnews.go.com/International/wireStory/economists-current-measures-meet-german-energy-goals-86286975",
//         "urlToImage": "https://s.abcnews.com/images/US/abc_news_default_2000x2000_update_16x9_992.jpg",
//         "publishedAt": "2022-07-06T08:01:56Z",
//         "content": "BERLIN -- Germany won't achieve its targets for phasing out fossil fuels and ramping up renewable energy by 2030 with the measures currently in place, according to a think tank report released Wednes… [+971 chars]"
//       },
//       {
//         "source": {
//           "id": "abc-news",
//           "name": "ABC News"
//         },
//         "author": "ABC News",
//         "title": "Israeli army kills Palestinian in West Bank arrest raid",
//         "description": "The Israeli military says it has shot and killed a Palestinian man during an arrest raid near the city of Jenin in the occupied West Bank",
//         "url": "https://abcnews.go.com/International/wireStory/israeli-army-kills-palestinian-west-bank-arrest-raid-86286973",
//         "urlToImage": "https://s.abcnews.com/images/US/abc_news_default_2000x2000_update_16x9_992.jpg",
//         "publishedAt": "2022-07-06T07:59:39Z",
//         "content": "JERUSALEM -- The Israeli military said it shot and killed a Palestinian man during an arrest raid near the city of Jenin in the occupied West Bank on Wednesday. \r\nThe army said that during one of a s… [+2137 chars]"
//       },
//       {
//         "source": {
//           "id": "abc-news",
//           "name": "ABC News"
//         },
//         "author": "ABC News",
//         "title": "EU parliament set for cliff-edge vote on green investments",
//         "description": "European lawmakers will decide Wednesday whether fossil gas and nuclear energies can be included in the EU’s list of sustainable activities",
//         "url": "https://abcnews.go.com/International/wireStory/eu-parliament-set-cliff-edge-vote-green-investments-86286972",
//         "urlToImage": "https://s.abcnews.com/images/International/WireAP_3450d2b4e8b24d389189252652ace4e2_16x9_992.jpg",
//         "publishedAt": "2022-07-06T07:59:33Z",
//         "content": "BRUSSELS -- European lawmakers will decide Wednesday whether fossil gas and nuclear energies can be included in the EUs list of sustainable activities, in a cliff-edge vote targeting climate change b… [+2544 chars]"
//       },
//       {
//         "source": {
//           "id": "abc-news",
//           "name": "ABC News"
//         },
//         "author": "ABC News",
//         "title": "UK's Johnson vows to stay in office after top ministers quit",
//         "description": "A defiant British Prime Minister Boris Johnson is battling to stay in power after his government was rocked by the resignation of two top ministers",
//         "url": "https://abcnews.go.com/International/wireStory/uks-johnson-vows-stay-office-top-ministers-quit-86286947",
//         "urlToImage": "https://s.abcnews.com/images/International/WireAP_37576aedd60a4bd3a9f370ba9c72b9b6_16x9_992.jpg",
//         "publishedAt": "2022-07-06T07:58:48Z",
//         "content": "LONDON -- A defiant British Prime Minister Boris Johnson was battling to stay in power on Wednesday after his government was rocked by the resignation of two top ministers, who said they could no lon… [+3831 chars]"
//       },
//       {
//         "source": {
//           "id": "abc-news",
//           "name": "ABC News"
//         },
//         "author": "ABC News",
//         "title": "Judges keeping Capitol riot trials in DC amid bias claims",
//         "description": "A growing number of Capitol riot defendants are pushing to get their trials moved out of Washington",
//         "url": "https://abcnews.go.com/Politics/wireStory/judges-keeping-capitol-riot-trials-dc-amid-bias-86281282",
//         "urlToImage": "https://s.abcnews.com/images/Politics/WireAP_7f635a55348047359312ebb148072f56_16x9_992.jpg",
//         "publishedAt": "2022-07-06T07:49:41Z",
//         "content": "WASHINGTON -- For some of the Washington, D.C., residents who reported for jury duty last month, a pro-Trump mob's assault on the U.S. Capitol felt like a personal attack.\r\nAhead of a trial for a Mic… [+7931 chars]"
//       },
//       {
//         "source": {
//           "id": "abc-news",
//           "name": "ABC News"
//         },
//         "author": "ABC News",
//         "title": "G-20 meeting may lead to wider divisions over war in Ukraine",
//         "description": "Foreign ministers from the world’s largest nations are looking to address the war in Ukraine and its impact on energy and food security when they meet this week",
//         "url": "https://abcnews.go.com/Politics/wireStory/20-meeting-lead-wider-divisions-war-ukraine-86281396",
//         "urlToImage": "https://s.abcnews.com/images/Politics/WireAP_556714b335054c2e867ebba503939d64_16x9_992.jpg",
//         "publishedAt": "2022-07-06T07:41:26Z",
//         "content": "WASHINGTON -- Foreign ministers from the worlds largest nations are looking to address the war in Ukraine and its impact on global energy and food security when they meet in Indonesia this week. Yet … [+5843 chars]"
//       },
//       {
//         "source": {
//           "id": "abc-news",
//           "name": "ABC News"
//         },
//         "author": "ABC News",
//         "title": "OPEC secretary-general is dead, Nigerian officials announce",
//         "description": "Nigerian authorities have announced that the Secretary-General of the Organization of Petroleum Exporting Countries has died",
//         "url": "https://abcnews.go.com/International/wireStory/opec-secretary-general-dead-nigerian-officials-announce-86286062",
//         "urlToImage": "https://s.abcnews.com/images/International/WireAP_98d0ddf994f648029686c70e6e20d1a7_16x9_992.jpg",
//         "publishedAt": "2022-07-06T07:39:15Z",
//         "content": "ABUJA, Nigeria -- The Secretary-General of the Organization of Petroleum Exporting Countries has died, Nigerian authorities announced Wednesday.\r\nMohammad Barkindo, 63, died late Tuesday, a spokesper… [+850 chars]"
//       },
//       {
//         "source": {
//           "id": "abc-news",
//           "name": "ABC News"
//         },
//         "author": "ABC News",
//         "title": "OPEC secretary-general is dead, Nigerian officials announce",
//         "description": "Nigerian authorities have announced that the Secretary-General of the Organization of Petroleum Exporting Countries has died",
//         "url": "https://abcnews.go.com/Business/wireStory/opec-secretary-general-dead-nigerian-officials-announce-86286064",
//         "urlToImage": "https://s.abcnews.com/images/International/WireAP_98d0ddf994f648029686c70e6e20d1a7_16x9_992.jpg",
//         "publishedAt": "2022-07-06T07:39:07Z",
//         "content": "ABUJA, Nigeria -- The Secretary-General of the Organization of Petroleum Exporting Countries has died, Nigerian authorities announced Wednesday.\r\nMohammad Barkindo, 63, died late Tuesday, a spokesper… [+850 chars]"
//       },
//       {
//         "source": {
//           "id": "abc-news",
//           "name": "ABC News"
//         },
//         "author": "ABC News",
//         "title": "OPEC secretary-general is dead, Nigerian officials announce",
//         "description": "Nigerian authorities have announced that the Secretary-General of the Organization of Petroleum Exporting Countries has died",
//         "url": "https://abcnews.go.com/International/wireStory/opec-secretary-general-dead-nigerian-officials-announce-86286061",
//         "urlToImage": "https://s.abcnews.com/images/International/WireAP_98d0ddf994f648029686c70e6e20d1a7_16x9_992.jpg",
//         "publishedAt": "2022-07-06T07:38:46Z",
//         "content": "ABUJA, Nigeria -- The Secretary-General of the Organization of Petroleum Exporting Countries has died, Nigerian authorities announced Wednesday.\r\nMohammad Barkindo, 63, died late Tuesday, a spokesper… [+850 chars]"
//       },
//       {
//         "source": {
//           "id": "abc-news",
//           "name": "ABC News"
//         },
//         "author": "ABC News",
//         "title": "OPEC secretary-general is dead, Nigerian officials announce",
//         "description": "Nigerian authorities have announced that the Secretary-General of the Organization of Petroleum Exporting Countries has died",
//         "url": "https://abcnews.go.com/International/wireStory/opec-secretary-general-dead-nigerian-officials-announce-86286060",
//         "urlToImage": "https://s.abcnews.com/images/International/WireAP_98d0ddf994f648029686c70e6e20d1a7_16x9_992.jpg",
//         "publishedAt": "2022-07-06T07:38:36Z",
//         "content": "ABUJA, Nigeria -- The Secretary-General of the Organization of Petroleum Exporting Countries has died, Nigerian authorities announced Wednesday.\r\nMohammad Barkindo, 63, died late Tuesday, a spokesper… [+850 chars]"
//       },
//       {
//         "source": {
//           "id": "abc-news",
//           "name": "ABC News"
//         },
//         "author": "ABC News",
//         "title": "The Secretary-General of the Organization of Petroleum Exporting Countries, Nigerian Mohammad Barkindo, has died.",
//         "description": "The Secretary-General of the Organization of Petroleum Exporting Countries, Nigerian Mohammad Barkindo, has died.",
//         "url": "https://abcnews.go.com/International/wireStory/secretary-general-organization-petroleum-exporting-countries-nigerian-mohammad-86285598",
//         "urlToImage": "https://s.abcnews.com/images/US/abc_news_default_2000x2000_update_16x9_992.jpg",
//         "publishedAt": "2022-07-06T07:21:22Z",
//         "content": "ABUJA, Nigeria -- The Secretary-General of the Organization of Petroleum Exporting Countries, Nigerian Mohammad Barkindo, has died."
//       },
//       {
//         "source": {
//           "id": "abc-news",
//           "name": "ABC News"
//         },
//         "author": "ABC News",
//         "title": "Star Trek’s ‘Strange New Worlds’: In defense of episodic TV",
//         "description": "High-end TV today is all about intricate story arcs, deep serialization, a requirement for sequential viewing and a serious attention span",
//         "url": "https://abcnews.go.com/Entertainment/wireStory/star-treks-strange-worlds-defense-episodic-tv-86285371",
//         "urlToImage": "https://s.abcnews.com/images/Entertainment/WireAP_c8ea86c1de25416a8722048f2039fd5f_16x9_992.jpg",
//         "publishedAt": "2022-07-06T07:07:20Z",
//         "content": "Two generations after its 1966 debut, the universe of Star Trek has become a vast and sprawling mural in these heady days of streaming TV.\r\nTheres the dark and bingeworthy Star Trek: Picard, a deep c… [+5842 chars]"
//       },
//       {
//         "source": {
//           "id": "abc-news",
//           "name": "ABC News"
//         },
//         "author": "ABC News",
//         "title": "The next frontier for drones: letting them fly out of sight",
//         "description": "For years, there’s been a cardinal rule for flying civilian drones: Keep them within your line of sight",
//         "url": "https://abcnews.go.com/Technology/wireStory/frontier-drones-letting-fly-sight-86285031",
//         "urlToImage": "https://s.abcnews.com/images/US/abc_news_default_2000x2000_update_16x9_992.jpg",
//         "publishedAt": "2022-07-06T07:02:34Z",
//         "content": "REMINGTON, Va. -- For years, there's been a cardinal rule for flying civilian drones: Keep them within your line of sight. Not just because it's a good idea it's also the law.\r\nBut some drones have r… [+4970 chars]"
//       },
//       {
//         "source": {
//           "id": "abc-news",
//           "name": "ABC News"
//         },
//         "author": "ABC News",
//         "title": "Marcos plays balancing act in meeting with China's FM",
//         "description": "New Philippine President Ferdinand Marcos Jr. will meet China’s top diplomat to discuss long-simmering disputes in the South China Sea as he wades into foreign policy dilemmas that include the U.S.-China rivalry in the region",
//         "url": "https://abcnews.go.com/International/wireStory/marcos-plays-balancing-act-meeting-chinas-fm-86285030",
//         "urlToImage": "https://s.abcnews.com/images/International/WireAP_68f6c3273a394507bc8a330160ef990d_16x9_992.jpg",
//         "publishedAt": "2022-07-06T07:02:29Z",
//         "content": "MANILA, Philippines -- New Philippine President Ferdinand Marcos Jr. will meet Chinas top diplomat Wednesday to discuss long-simmering disputes in the South China Sea, as he wades into foreign policy… [+3952 chars]"
//       },
//       {
//         "source": {
//           "id": "abc-news",
//           "name": "ABC News"
//         },
//         "author": "ABC News",
//         "title": "Russian foreign minister stops in Vietnam ahead of G-20",
//         "description": "Russian Foreign Minister Sergey Lavrov is visiting Vietnam as part of an effort to bolster ties with a country that has not openly condemned the war in Ukraine",
//         "url": "https://abcnews.go.com/International/wireStory/russian-foreign-minister-stops-vietnam-ahead-20-86284690",
//         "urlToImage": "https://s.abcnews.com/images/International/WireAP_e5c2ecbc55b4429fa7c0cc34c600104f_16x9_992.jpg",
//         "publishedAt": "2022-07-06T06:43:21Z",
//         "content": "HANOI, Vietnam -- Russian Foreign Minister Sergey Lavrov visited Vietnam on Wednesday as part of an effort to bolster ties with a country that has not openly condemned its invasion of Ukraine. \r\nLavr… [+963 chars]"
//       },
//       {
//         "source": {
//           "id": "abc-news",
//           "name": "ABC News"
//         },
//         "author": "ABC News",
//         "title": "Asian benchmarks mostly lower after tepid Wall St session",
//         "description": "Asian shares are mostly lower after tepid trading on Wall Street amid worries about a global recession",
//         "url": "https://abcnews.go.com/Business/wireStory/asian-benchmarks-lower-tepid-wall-st-session-86284348",
//         "urlToImage": "https://s.abcnews.com/images/Business/WireAP_0b4b73e74a914f5684abaa654fedca3d_16x9_992.jpg",
//         "publishedAt": "2022-07-06T06:33:57Z",
//         "content": "TOKYO -- Asian shares were mostly lower Wednesday after tepid trading on Wall Street amid worries about a global recession.\r\nMajor benchmarks fell across Asia. Oil prices recouped some lost ground. A… [+3953 chars]"
//       },
//       {
//         "source": {
//           "id": "abc-news",
//           "name": "ABC News"
//         },
//         "author": "ABC News",
//         "title": "Some Russians won't halt war protests, despite arrest fears",
//         "description": "Despite a massive government crackdown on protests of the invasion of Ukraine, some Russians persist in speaking out against the invasion",
//         "url": "https://abcnews.go.com/International/wireStory/russians-halt-war-protests-arrest-fears-86284347",
//         "urlToImage": "https://s.abcnews.com/images/International/WireAP_234f42f3efb44e2db51fd39b5e12dee9_16x9_992.jpg",
//         "publishedAt": "2022-07-06T06:31:58Z",
//         "content": "Ever since Russia invaded Ukraine, Anastasia has started her day by composing an anti-war message and posting it on the wall at the entrance of her apartment block in the industrial city of Perm in t… [+5225 chars]"
//       },
//       {
//         "source": {
//           "id": "abc-news",
//           "name": "ABC News"
//         },
//         "author": "ABC News",
//         "title": "Cairo's historic Nile River houseboats removed in govt push",
//         "description": "An Egyptian government push to remove the string of houseboats that dot Cairo’s Nile River banks has seen their numbers dwindle from several dozen to just a handful",
//         "url": "https://abcnews.go.com/International/wireStory/cairos-historic-nile-river-houseboats-removed-govt-push-86284007",
//         "urlToImage": "https://s.abcnews.com/images/International/WireAP_9cf19b4e86b74b1a8afb06a87aab26a6_16x9_992.jpg",
//         "publishedAt": "2022-07-06T06:11:27Z",
//         "content": "CAIRO -- With verdant gardens on one side and water on the other, they were an anomaly in a city bordered on three sides by desert. For decades, Cairo's houseboats occupied prime waterfront real esta… [+5939 chars]"
//       },
//       {
//         "source": {
//           "id": "abc-news",
//           "name": "ABC News"
//         },
//         "author": "ABC News",
//         "title": "EXPLAINER: Factors behind Sydney's recent flood emergecies",
//         "description": "Parts of Australia’s largest city have been inundated by four major floods since March last year, leaving weary victims questioning how many times they can rebuild",
//         "url": "https://abcnews.go.com/Technology/wireStory/explainer-factors-sydneys-recent-flood-emergecies-86283667",
//         "urlToImage": "https://s.abcnews.com/images/International/WireAP_a8cf9c8df61b4d2284c46741c1c19498_16x9_992.jpg",
//         "publishedAt": "2022-07-06T06:03:17Z",
//         "content": "CANBERRA, Australia -- Parts of Australias largest city have been inundated by four major floods since March last year, leaving weary victims questioning how many times they can rebuild.\r\nThe latest … [+4289 chars]"
//       },
//       {
//         "source": {
//           "id": "abc-news",
//           "name": "ABC News"
//         },
//         "author": "ABC News",
//         "title": "Shanghai, Beijing order new round of mass COVID-19 testing",
//         "description": "Residents of parts of Shanghai and Beijing have been ordered to undergo further rounds of COVID-19 testing following the discovery of new cases in the two cities",
//         "url": "https://abcnews.go.com/Health/wireStory/shanghai-beijing-order-round-mass-covid-19-testing-86283553",
//         "urlToImage": "https://s.abcnews.com/images/Health/WireAP_c46c9f3d127247698efd11ed2dc151ad_16x9_992.jpg",
//         "publishedAt": "2022-07-06T05:55:56Z",
//         "content": "BEIJING -- Residents of parts of Shanghai and Beijing have been ordered to undergo further rounds of COVID-19 testing following the discovery of new cases in the two cities, while tight restrictions … [+4640 chars]"
//       },
//       {
//         "source": {
//           "id": "abc-news",
//           "name": "ABC News"
//         },
//         "author": "ABC News",
//         "title": "Sri Lanka's crisis rings alarm for other troubled economies",
//         "description": "Sri Lanka is desperate for help to weather its worst crisis in recent memory, but it’s not the only economy that’s in serious trouble as prices of food, fuel and other staples soar, partly due to the war in Ukraine",
//         "url": "https://abcnews.go.com/Business/wireStory/sri-lankas-crisis-rings-alarm-troubled-economies-86281738",
//         "urlToImage": "https://s.abcnews.com/images/Business/WireAP_31c49e3e373947f2b3a2d353f81672db_16x9_992.jpg",
//         "publishedAt": "2022-07-06T04:27:10Z",
//         "content": "BANGKOK -- Sri Lanka is desperate for help with weathering its worst crisis in recent memory. Its schools are closed for lack of fuel to get kids and teachers to classrooms. Its effort to arrange a b… [+7910 chars]"
//       },
//       {
//         "source": {
//           "id": "abc-news",
//           "name": "ABC News"
//         },
//         "author": "ABC News",
//         "title": "Sri Lanka's crisis rings alarm for other troubled economies",
//         "description": "Sri Lanka is desperate for help to weather its worst crisis in recent memory, but it’s not the only economy that’s in serious trouble as prices of food, fuel and other staples soar, partly due to the war in Ukraine",
//         "url": "https://abcnews.go.com/Business/wireStory/sri-lankas-crisis-rings-alarm-troubled-economies-86281737",
//         "urlToImage": "https://s.abcnews.com/images/Business/WireAP_31c49e3e373947f2b3a2d353f81672db_16x9_992.jpg",
//         "publishedAt": "2022-07-06T04:27:03Z",
//         "content": "BANGKOK -- Sri Lanka is desperate for help with weathering its worst crisis in recent memory. Its schools are closed for lack of fuel to get kids and teachers to classrooms. Its effort to arrange a b… [+7910 chars]"
//       },
//       {
//         "source": {
//           "id": "abc-news",
//           "name": "ABC News"
//         },
//         "author": "ABC News",
//         "title": "G-20 meeting may lead to wider divisions over war in Ukraine",
//         "description": "Foreign ministers from the world’s largest nations are looking to address the war in Ukraine and its impact on energy and food security when they meet this week",
//         "url": "https://abcnews.go.com/Business/wireStory/20-meeting-lead-wider-divisions-war-ukraine-86281397",
//         "urlToImage": "https://s.abcnews.com/images/Politics/WireAP_556714b335054c2e867ebba503939d64_16x9_992.jpg",
//         "publishedAt": "2022-07-06T04:20:12Z",
//         "content": "WASHINGTON -- Foreign ministers from the worlds largest nations are looking to address the war in Ukraine and its impact on global energy and food security when they meet in Indonesia this week. Yet … [+5843 chars]"
//       },
//       {
//         "source": {
//           "id": "abc-news",
//           "name": "ABC News"
//         },
//         "author": "ABC News",
//         "title": "Argentina's economic change underlines president's weakening",
//         "description": "The abrupt resignation of Argentina’s economy minister has engulfed the country in an all-too familiar anxiety that flows from its periodic financial crises in recent decades",
//         "url": "https://abcnews.go.com/International/wireStory/argentinas-economic-change-underlines-presidents-weakening-86281051",
//         "urlToImage": "https://s.abcnews.com/images/International/WireAP_8f4967a0324849ddb52e2a5f155a294b_16x9_992.jpg",
//         "publishedAt": "2022-07-06T04:07:44Z",
//         "content": "BUENOS AIRES, Argentina -- The abrupt resignation of Argentinas economy minister has engulfed the country in an all-too familiar anxiety that flows from its periodic financial crises in recent decade… [+4452 chars]"
//       },
//       {
//         "source": {
//           "id": "abc-news",
//           "name": "ABC News"
//         },
//         "author": "ABC News",
//         "title": "Today in History: July 6, Richard III is crowned",
//         "description": "Today in History \n\nToday is Wednesday, July 6, the 187th day of 2022. There are 178 days left in the year. \n\nToday’s Highlight in History: \n\nOn July 6, 1944, an estimated 168 people died in a fire that broke out during a performance in the main tent of the Ri…",
//         "url": "https://abcnews.go.com/US/wireStory/today-history-july-richard-iii-crowned-86280556",
//         "urlToImage": "https://s.abcnews.com/images/US/abc_news_default_2000x2000_update_16x9_992.jpg",
//         "publishedAt": "2022-07-06T04:00:30Z",
//         "content": "Today in History \r\nToday is Wednesday, July 6, the 187th day of 2022. There are 178 days left in the year. \r\nTodays Highlight in History: \r\nOn July 6, 1944, an estimated 168 people died in a fire tha… [+4560 chars]"
//       },
//       {
//         "source": {
//           "id": "abc-news",
//           "name": "ABC News"
//         },
//         "author": "ABC News",
//         "title": "FDA temporarily suspends order banning Juul cigarettes",
//         "description": "The Food and Drug Administration has issued an administrative stay on the order it issued last month for vaping company Juul to pull its electronic cigarettes from the market",
//         "url": "https://abcnews.go.com/Business/wireStory/fda-temporarily-suspends-order-banning-juul-cigarettes-86278496",
//         "urlToImage": "https://s.abcnews.com/images/Health/WireAP_e50053a0876048adb8f15a53510c56f2_16x9_992.jpg",
//         "publishedAt": "2022-07-06T03:18:04Z",
//         "content": "WASHINGTON -- The Food and Drug Administration issued an administrative stay Tuesday on the order it issued last month for vaping company Juul to pull its electronic cigarettes from the market.\r\nThe … [+1350 chars]"
//       },
//       {
//         "source": {
//           "id": "abc-news",
//           "name": "ABC News"
//         },
//         "author": "ABC News",
//         "title": "FDA temporarily suspends order banning Juul cigarettes",
//         "description": "The Food and Drug Administration has issued an administrative stay on the order it issued last month for vaping company Juul to pull its electronic cigarettes from the market",
//         "url": "https://abcnews.go.com/Health/wireStory/fda-temporarily-suspends-order-banning-juul-cigarettes-86277726",
//         "urlToImage": "https://s.abcnews.com/images/Health/WireAP_e50053a0876048adb8f15a53510c56f2_16x9_992.jpg",
//         "publishedAt": "2022-07-06T02:57:02Z",
//         "content": "WASHINGTON -- The Food and Drug Administration issued an administrative stay Tuesday on the order it issued last month for vaping company Juul to pull its electronic cigarettes from the market.\r\nThe … [+1350 chars]"
//       },
//       {
//         "source": {
//           "id": "abc-news",
//           "name": "ABC News"
//         },
//         "author": "ABC News",
//         "title": "Wisconsin court to rule on immunity in sex trafficking case",
//         "description": "Wisconsin's Supreme Court is set to decide whether a sex trafficking victim accused of homicide can argue at trial that she was justified in killing the man who trafficked her",
//         "url": "https://abcnews.go.com/US/wireStory/wisconsin-court-rule-immunity-sex-trafficking-case-86277611",
//         "urlToImage": "https://s.abcnews.com/images/US/WireAP_3a7a7648e14c4dc3ad8356fcc856034b_16x9_992.jpg",
//         "publishedAt": "2022-07-06T02:51:54Z",
//         "content": "MADISON, Wis. -- Wisconsin's Supreme Court is set to decide Wednesday whether a sex trafficking victim accused of homicide can argue at trial that she was justified in killing the man who trafficked … [+2750 chars]"
//       },
//       {
//         "source": {
//           "id": "abc-news",
//           "name": "ABC News"
//         },
//         "author": "ABC News",
//         "title": "Homes of 85,000 people at risk, but rain eases around Sydney",
//         "description": "Floodwaters have inundated or are threatening the homes of 85,000 people around Sydney",
//         "url": "https://abcnews.go.com/International/wireStory/homes-85000-people-risk-rain-eases-sydney-86274148",
//         "urlToImage": "https://s.abcnews.com/images/International/WireAP_79fd550fd5b24dd29b0a430aec29f414_16x9_992.jpg",
//         "publishedAt": "2022-07-06T01:47:32Z",
//         "content": "SYDNEY -- Floodwaters had inundated or were threatening the homes of 85,000 people around Sydney on Wednesday as rivers started to recede and the heavy rains tracked north of Australias largest city.… [+2711 chars]"
//       },
//       {
//         "source": {
//           "id": "abc-news",
//           "name": "ABC News"
//         },
//         "author": "ABC News",
//         "title": "West Coast dockworkers still talking after contract expires",
//         "description": "A contract between shipping companies and 22,000 West Coast dockworkers has expired",
//         "url": "https://abcnews.go.com/Business/wireStory/west-coast-dockworkers-talking-contract-expires-86273081",
//         "urlToImage": "https://s.abcnews.com/images/US/WireAP_04d4f065f31d42d1a23962c9f3868966_16x9_992.jpg",
//         "publishedAt": "2022-07-06T01:46:45Z",
//         "content": "LOS ANGELES -- A contract between shipping companies and 22,000 West Coast dockworkers expired over the weekend. But both sides continued to talk and said they want to avoid a strike that could savag… [+4310 chars]"
//       },
//       {
//         "source": {
//           "id": "abc-news",
//           "name": "ABC News"
//         },
//         "author": "ABC News",
//         "title": "Caribbean court finds anti-sodomy law unconstitutional",
//         "description": "A Caribbean court has ruled that a law in Antigua and Barbuda that criminalizes sex between men is unconstitutional",
//         "url": "https://abcnews.go.com/International/wireStory/caribbean-court-finds-anti-sodomy-law-unconstitutional-86272966",
//         "urlToImage": "https://s.abcnews.com/images/US/abc_news_default_2000x2000_update_16x9_992.jpg",
//         "publishedAt": "2022-07-06T01:34:58Z",
//         "content": "SAN JUAN, Puerto Rico -- A Caribbean court ruled Tuesday that a law in Antigua and Barbuda that criminalizes sex between men is unconstitutional.\r\nThe Eastern Caribbean Supreme Court found that the s… [+2014 chars]"
//       },
//       {
//         "source": {
//           "id": "abc-news",
//           "name": "ABC News"
//         },
//         "author": "ABC News",
//         "title": "2-year-old's parents killed in Highland Park shooting",
//         "description": "The parents of a toddler were killed in a mass shooting at the Fourth of July parade in Highland Park, Illinois, on Monday, the city manager said.",
//         "url": "https://abcnews.go.com/US/year-olds-parents-killed-highland-park-shooting/story?id=86268695",
//         "urlToImage": "https://s.abcnews.com/images/US/highland-park-chicago-july-4-parade-shooting-police-victims-06-gty-llr-220705_1657071195203_hpMain_16x9_992.jpg",
//         "publishedAt": "2022-07-06T01:34:41Z",
//         "content": "The parents of a 2-year-old child were killed in a mass shooting at the Fourth of July parade in Highland Park, Illinois, ABC News has learned.\r\nIrina McCarthy, 35, and Kevin McCarthy, 37, were among… [+819 chars]"
//       },
//       {
//         "source": {
//           "id": "abc-news",
//           "name": "ABC News"
//         },
//         "author": "ABC News",
//         "title": "Kamala Harris makes unscheduled trip to Highland Park after parade shooting",
//         "description": "Vice President Kamala Harris made a previously unscheduled trip on Tuesday to Highland Park, Illinois, one day after a mass shooting at a Fourth of July parade there",
//         "url": "https://abcnews.go.com/Politics/kamala-harris-makes-unscheduled-trip-highland-park-parade/story?id=86272153",
//         "urlToImage": "https://s.abcnews.com/images/Politics/highland-park-chicago-july-4-parade-shooting-vice-president-kamala-harris-02-gty-llr-220705_1657069180644_hpMain_16x9_992.jpg",
//         "publishedAt": "2022-07-06T01:29:12Z",
//         "content": "Vice President Kamala Harris made a previously unscheduled trip on Tuesday night to Highland Park, Illinois -- the site of a deadly mass shooting during a Fourth of July parade the previous day.\r\nThe… [+4119 chars]"
//       },
//       {
//         "source": {
//           "id": "abc-news",
//           "name": "ABC News"
//         },
//         "author": "ABC News",
//         "title": "West Coast dockworkers still talking after contract expires",
//         "description": "A contract between shipping companies and 22,000 West Coast dockworkers has expired",
//         "url": "https://abcnews.go.com/US/wireStory/west-coast-dockworkers-talking-contract-expires-86272269",
//         "urlToImage": "https://s.abcnews.com/images/US/abc_news_default_2000x2000_update_16x9_992.jpg",
//         "publishedAt": "2022-07-06T01:18:26Z",
//         "content": "LOS ANGELES -- A contract between shipping companies and 22,000 West Coast dockworkers expired over the weekend. But both sides continued to talk and said they want to avoid a strike that could savag… [+4310 chars]"
//       },
//       {
//         "source": {
//           "id": "abc-news",
//           "name": "ABC News"
//         },
//         "author": "ABC News",
//         "title": "Bradford Freeman, last \"Band of Brothers\" survivor has died",
//         "description": "Bradford Freeman, the last survivor of the Army unit featured in the World War II oral history book and miniseries “Band of Brothers” has died at the age of 97",
//         "url": "https://abcnews.go.com/US/wireStory/bradford-freeman-band-brothers-survivor-died-86271708",
//         "urlToImage": "https://s.abcnews.com/images/US/abc_news_default_2000x2000_update_16x9_992.jpg",
//         "publishedAt": "2022-07-06T00:57:56Z",
//         "content": "CALEDONIA, Miss. -- Bradford Freeman, the last survivor of the famed Army unit featured in the World War II oral history book and miniseries Band of Brothers has died at the age of 97. \r\nFreeman died… [+1353 chars]"
//       },
//       {
//         "source": {
//           "id": "abc-news",
//           "name": "ABC News"
//         },
//         "author": "ABC News",
//         "title": "Officials: Nine fatal drug overdoses in rural Florida county",
//         "description": "Officials say nine people died over the holiday weekend from likely drug overdoses in a rural Florida Panhandle county",
//         "url": "https://abcnews.go.com/US/wireStory/officials-fatal-drug-overdoses-rural-florida-county-86271239",
//         "urlToImage": "https://s.abcnews.com/images/US/abc_news_default_2000x2000_update_16x9_992.jpg",
//         "publishedAt": "2022-07-06T00:40:40Z",
//         "content": "QUINCY, Fla. -- Nine people died over the holiday weekend from likely drug overdoses in a rural Florida Panhandle county, officials said.\r\nAfter two women were found dead of an apparent overdose Frid… [+510 chars]"
//       },
//       {
//         "source": {
//           "id": "abc-news",
//           "name": "ABC News"
//         },
//         "author": "ABC News",
//         "title": "Alleged Chinese police database hack leaks data of 1 billion",
//         "description": "Hackers claim to have obtained a trove of data on 1 billion Chinese from a Shanghai police database in a leak that, if confirmed, could be one of the largest data breaches in history",
//         "url": "https://abcnews.go.com/Business/wireStory/alleged-chinese-police-database-hack-leaks-data-billion-86270997",
//         "urlToImage": "https://s.abcnews.com/images/Technology/WireAP_00d8ad518a2646c89049eccd76639101_16x9_992.jpg",
//         "publishedAt": "2022-07-06T00:37:12Z",
//         "content": "HONG KONG -- Hackers claim to have obtained a trove of data on 1 billion Chinese from a Shanghai police database in a leak that, if confirmed, could be one of the largest data breaches in history.\r\nI… [+4100 chars]"
//       },
//       {
//         "source": {
//           "id": "abc-news",
//           "name": "ABC News"
//         },
//         "author": "ABC News",
//         "title": "Canada to throw out 13.6M doses of AstraZeneca vaccine",
//         "description": "Canada is going to throw out about 13.6 million doses of the Oxford-AstraZeneca COVID-19 vaccine because it couldn’t find any takers for it either at home or abroad",
//         "url": "https://abcnews.go.com/International/wireStory/canada-throw-136m-doses-astrazeneca-vaccine-86270891",
//         "urlToImage": "https://s.abcnews.com/images/US/abc_news_default_2000x2000_update_16x9_992.jpg",
//         "publishedAt": "2022-07-06T00:29:26Z",
//         "content": "OTTAWA -- Canada is going to throw out about 13.6 million doses of the Oxford-AstraZeneca COVID-19 vaccine because it couldnt find any takers for it either at home or abroad.\r\nCanada signed a contrac… [+1114 chars]"
//       },
//       {
//         "source": {
//           "id": "abc-news",
//           "name": "ABC News"
//         },
//         "author": "ABC News",
//         "title": "Biden read Brittney Griner's letter, White House won't say if he'll meet her family",
//         "description": "WNBA star Brittney Griner appealed to President Joe Biden for help in getting out of Russia in a a handwritten letter, saying she fears she will be detained \"forever.\"",
//         "url": "https://abcnews.go.com/Politics/white-house-biden-read-brittney-griners-letter-russia/story?id=86262640",
//         "urlToImage": "https://s.abcnews.com/images/US/abc_news_default_2000x2000_update_16x9_992.jpg",
//         "publishedAt": "2022-07-05T23:37:11Z",
//         "content": "As WNBA star Brittney Griner appeals to Joe Biden for help in getting released from Russian custody, her case is a \"top priority\" for the president, according to the White House.\r\nPress secretary Kar… [+6260 chars]"
//       },
//       {
//         "source": {
//           "id": "abc-news",
//           "name": "ABC News"
//         },
//         "author": "Thomas Smith",
//         "title": "ICYMI: Watch the Full Panel Discussion on Tiana’s Bayou Adventure in New Orleans",
//         "description": "Watch the full panel down in New Orleans at ESSENCE Fest celebrating Tiana’s Bayou Adventure, coming to Magic Kingdom in Florida and Disneyland park in California in late 2024.",
//         "url": "https://disneyparks.disney.go.com/blog/2022/07/icymi-watch-the-full-panel-discussion-on-tianas-bayou-adventure-in-new-orleans/",
//         "urlToImage": "https://cdn1.parksmedia.wdprapps.disney.com/media/blog/wp-content/uploads/2022/07/patf58454349.jpg",
//         "publishedAt": "2022-07-05T23:33:55Z",
//         "content": "In case you\r\nmissed it over the weekend, we were down in New Orleans at ESSENCE Fest celebrating\r\nTianas Bayou Adventure, coming to Magic Kingdom in Florida and Disneyland park\r\nin California in late… [+1137 chars]"
//       },
//       {
//         "source": {
//           "id": "abc-news",
//           "name": "ABC News"
//         },
//         "author": "ABC News",
//         "title": "Spirit wins takeoff and landing rights at key Newark airport",
//         "description": "Spirit Airlines is getting a chance to expand at Newark-Liberty International Airport, which is close to New York City",
//         "url": "https://abcnews.go.com/Business/wireStory/spirit-wins-takeoff-landing-rights-key-newark-airport-86267998",
//         "urlToImage": "https://s.abcnews.com/images/Business/WireAP_80ed5e8bd6f9417384f96ef6e9993946_16x9_992.jpg",
//         "publishedAt": "2022-07-05T23:14:59Z",
//         "content": "WASHINGTON -- Spirit Airlines will get valuable takeoff and landing times that Southwest Airlines is abandoning at busy Newark-Liberty International Airport near New York City.\r\nThe U.S. Transportati… [+993 chars]"
//       },
//       {
//         "source": {
//           "id": "abc-news",
//           "name": "ABC News"
//         },
//         "author": "ABC News",
//         "title": "Police: Mother drowned children, then killed herself",
//         "description": "Three children whose bodies were found in a suburban Minneapolis lake over the holiday weekend died in drownings that were classified as homicides, and their mother died of a drowning that was suicide",
//         "url": "https://abcnews.go.com/US/wireStory/police-mother-drowned-children-killed-86267997",
//         "urlToImage": "https://s.abcnews.com/images/US/abc_news_default_2000x2000_update_16x9_992.jpg",
//         "publishedAt": "2022-07-05T23:10:11Z",
//         "content": "ST. PAUL, Minn. -- Three children whose bodies were found in a suburban Minneapolis lake over the holiday weekend died in drownings that were classified as homicides, and their mother died of a drown… [+885 chars]"
//       },
//       {
//         "source": {
//           "id": "abc-news",
//           "name": "ABC News"
//         },
//         "author": "ABC News",
//         "title": "Mexican navy sets net hooks in bid to help vaquita porpoise",
//         "description": "The Mexican navy has begun a controversial plan to drop dozens of concrete blocks onto the bottom of the Gulf of California in bid to snag illegal nets that drown critically endangered vaquita marina porpoises",
//         "url": "https://abcnews.go.com/International/wireStory/mexican-navy-sets-net-hooks-bid-vaquita-porpoise-86267501",
//         "urlToImage": "https://s.abcnews.com/images/International/WireAP_1877812610f04cc89f6d78ed9bdc3337_16x9_992.jpg",
//         "publishedAt": "2022-07-05T22:45:44Z",
//         "content": "MEXICO CITY -- The Mexican navy said Tuesday it has begun a controversial plan to drop concrete blocks onto the bottom of the Gulf of California to snag illegal nets that drown critically endangered … [+3312 chars]"
//       },
//       {
//         "source": {
//           "id": "abc-news",
//           "name": "ABC News"
//         },
//         "author": "ABC News",
//         "title": "Prosecutor says suspect in July 4 parade shooting charged with 7 counts of first-degree murder, more charges to come.",
//         "description": "Prosecutor says suspect in July 4 parade shooting charged with 7 counts of first-degree murder, more charges to come.",
//         "url": "https://abcnews.go.com/US/wireStory/prosecutor-suspect-july-parade-shooting-charged-counts-degree-86267393",
//         "urlToImage": "https://s.abcnews.com/images/US/abc_news_default_2000x2000_update_16x9_992.jpg",
//         "publishedAt": "2022-07-05T22:39:37Z",
//         "content": "HIGHLAND PARK, Ill. -- Prosecutor says suspect in July 4 parade shooting charged with 7 counts of first-degree murder, more charges to come."
//       },
//       {
//         "source": {
//           "id": "abc-news",
//           "name": "ABC News"
//         },
//         "author": "ABC News",
//         "title": "John Hinckley Jr. seeks forgiveness for shooting Reagan, presidential entourage",
//         "description": "John Hinckley Jr. sits down with \"Nightline\" weeks after he was released from court supervision and expresses remorse for shooting President Ronald Reagan.",
//         "url": "https://abcnews.go.com/US/john-hinckley-jr-seeks-forgiveness-shooting-reagan-presidential/story?id=85925642",
//         "urlToImage": "https://s.abcnews.com/images/US/hinckley-chang-abc-rc-220703_1656960104894_hpMain_2_16x9_992.jpg",
//         "publishedAt": "2022-07-05T22:27:10Z",
//         "content": "More than 40 years after he shot President Ronald Reagan and three others, John Hinckley Jr. said he's filled with remorse over his actions, but he's ready to move forward with his life.\r\nHinckley, 6… [+4884 chars]"
//       },
//       {
//         "source": {
//           "id": "abc-news",
//           "name": "ABC News"
//         },
//         "author": "ABC News",
//         "title": "Judge OKs transfer plan for beagles from troubled facility",
//         "description": "A federal judge has approved a plan that calls for transferring about 4,000 dogs currently housed at a troubled Virginia breeding facility to shelters where they can be adopted",
//         "url": "https://abcnews.go.com/US/wireStory/judge-oks-transfer-plan-beagles-troubled-facility-86267382",
//         "urlToImage": "https://s.abcnews.com/images/US/abc_news_default_2000x2000_update_16x9_992.jpg",
//         "publishedAt": "2022-07-05T22:22:15Z",
//         "content": "CUMBERLAND, Va. -- A federal judge on Tuesday approved a plan that calls for transferring about 4,000 dogs currently housed at a troubled Virginia breeding facility to shelters where they can be adop… [+1605 chars]"
//       },
//       {
//         "source": {
//           "id": "abc-news",
//           "name": "ABC News"
//         },
//         "author": "ABC News",
//         "title": "North Carolina man pleads guilty in police officer's death",
//         "description": "Authorities in North Carolina say a man pleaded guilty on Tuesday to charges stemming from the fatal shooting of a police officer in 2020",
//         "url": "https://abcnews.go.com/US/wireStory/north-carolina-man-pleads-guilty-police-officers-death-86267381",
//         "urlToImage": "https://s.abcnews.com/images/US/abc_news_default_2000x2000_update_16x9_992.jpg",
//         "publishedAt": "2022-07-05T22:13:37Z",
//         "content": "MOIUNT HOLLY, N.C. -- A North Carolina man pleaded guilty on Tuesday to charges stemming from the fatal shooting of a police officer in 2020, authorities said.\r\nDuring his hearing, Joshua Tyler Funk,… [+518 chars]"
//       },
//       {
//         "source": {
//           "id": "abc-news",
//           "name": "ABC News"
//         },
//         "author": "ABC News",
//         "title": "Colorado funeral home owner pleads guilty in body sales case",
//         "description": "A Colorado funeral home operator accused of illegally selling body parts and giving clients fake ashes has pleaded guilty to mail fraud in federal court",
//         "url": "https://abcnews.go.com/US/wireStory/colorado-funeral-home-owner-pleads-guilty-body-sales-86267024",
//         "urlToImage": "https://s.abcnews.com/images/US/abc_news_default_2000x2000_update_16x9_992.jpg",
//         "publishedAt": "2022-07-05T22:02:33Z",
//         "content": "GRAND JUNCTION, Colo. -- A Colorado funeral home operator accused of illegally selling body parts and giving clients fake ashes has pleaded guilty to mail fraud in federal court.\r\nThe Daily Sentinel … [+1585 chars]"
//       },
//       {
//         "source": {
//           "id": "abc-news",
//           "name": "ABC News"
//         },
//         "author": "ABC News",
//         "title": "2 drown in separate incidents at same beach",
//         "description": "A 12-year-old and 44-year-old drowned in two separate incidents at Virginia Beach on the same day.",
//         "url": "https://abcnews.go.com/US/drown-separate-incidents-virginia-beach/story?id=86254481",
//         "urlToImage": "https://s.abcnews.com/images/US/virginia-beach-drowning-01-ht-jt-220705_1657054346524_hpMain_16x9_992.jpg",
//         "publishedAt": "2022-07-05T22:01:23Z",
//         "content": "Two individuals, a 12-year-old boy and 44-year-old man, died after drowning in the Chesapeake Bay in separate incidents, officials said.\r\nZamari Wilson, who was visiting Virginia Beach with his famil… [+4440 chars]"
//       },
//       {
//         "source": {
//           "id": "abc-news",
//           "name": "ABC News"
//         },
//         "author": "Betsy Sanchez",
//         "title": "Celebrating Disability Pride Month at Disney Parks",
//         "description": "This July, we celebrate Disability Pride Month by honoring the diversity and intersectionality of our cast members and guests with disabilities.  Though we are reflecting on the contributions of our cast members and guests with disabilities this month, it is …",
//         "url": "https://disneyparks.disney.go.com/blog/2022/07/celebrating-disability-pride-month-at-disney-parks/",
//         "urlToImage": "https://cdn1.parksmedia.wdprapps.disney.com/media/blog/wp-content/uploads/2022/07/FIN7656576576.png",
//         "publishedAt": "2022-07-05T22:00:38Z",
//         "content": "This July, we celebrate Disability Pride Month by honoring the diversity and intersectionality of our cast members and guests with disabilities. \r\nThough we are reflecting on the contributions of our… [+1435 chars]"
//       },
//       {
//         "source": {
//           "id": "abc-news",
//           "name": "ABC News"
//         },
//         "author": "ABC News",
//         "title": "Deadly July 4 parade: Shots, then a frantic rush to escape",
//         "description": "For many people, the mass shooting that killed at least seven people and injured 30 others in a Chicago suburb on July 4 was yet another reminder that any place, any event in the U.S. can turn dangerous or deadly",
//         "url": "https://abcnews.go.com/US/wireStory/deadly-july-parade-shots-frantic-rush-escape-86265928",
//         "urlToImage": "https://s.abcnews.com/images/US/WireAP_41ae0679f6cc4c21b8b7f2fe3939f608_16x9_992.jpg",
//         "publishedAt": "2022-07-05T21:43:09Z",
//         "content": "HIGHLAND PARK, Ill. -- David Shapiro and his wife brought their two young kids to enjoy the Independence Day parade in their hometown north of Chicago, snagging a spot in front of a boutique winery. … [+6298 chars]"
//       },
//       {
//         "source": {
//           "id": "abc-news",
//           "name": "ABC News"
//         },
//         "author": "ABC News",
//         "title": "Western states could settle feud over beleaguered Rio Grande",
//         "description": "The fight between Texas and New Mexico over the management of one of the longest rivers in North America could be nearing an end",
//         "url": "https://abcnews.go.com/US/wireStory/western-states-settle-feud-beleaguered-rio-grande-86265603",
//         "urlToImage": "https://s.abcnews.com/images/US/abc_news_default_2000x2000_update_16x9_992.jpg",
//         "publishedAt": "2022-07-05T21:36:41Z",
//         "content": "ALBUQUERQUE, N.M. -- The fight between Texas and New Mexico over the management of one of the longest rivers in North America could be nearing an end as a date to resume the trial has been put off pe… [+3205 chars]"
//       },
//       {
//         "source": {
//           "id": "abc-news",
//           "name": "ABC News"
//         },
//         "author": "ABC News",
//         "title": "Morocco accused of blocking UN visit to Western Sahara",
//         "description": "The pro-independence Polisario Front is accusing Morocco of obstructing a visit by the U.N. envoy for the disputed Western Sahara region and is calling on the United Nations to reveal the reasons why",
//         "url": "https://abcnews.go.com/US/wireStory/morocco-accused-blocking-visit-western-sahara-86265602",
//         "urlToImage": "https://s.abcnews.com/images/US/abc_news_default_2000x2000_update_16x9_992.jpg",
//         "publishedAt": "2022-07-05T21:34:22Z",
//         "content": "UNITED NATIONS -- The pro-independence Polisario Front accused Morocco of obstructing a visit by the U.N. envoy for the disputed Western Sahara region and called on the United Nations to reveal the r… [+2717 chars]"
//       },
//       {
//         "source": {
//           "id": "abc-news",
//           "name": "ABC News"
//         },
//         "author": "ABC News",
//         "title": "Pakistan police arrest TV journalist on outskirts of capital",
//         "description": "A prominent Pakistani TV anchorperson known for publicly supporting former Prime Minister Imran Khan has been arrested on the outskirts of the capital",
//         "url": "https://abcnews.go.com/International/wireStory/pakistan-police-arrest-tv-journalist-outskirts-capital-86265071",
//         "urlToImage": "https://s.abcnews.com/images/US/abc_news_default_2000x2000_update_16x9_992.jpg",
//         "publishedAt": "2022-07-05T21:20:11Z",
//         "content": "ISLAMABAD -- A prominent Pakistani TV anchorperson known for publicly supporting former Prime Minister Imran Khan was arrested Tuesday on the outskirts of the capital, his colleagues said.\r\nIt was un… [+620 chars]"
//       },
//       {
//         "source": {
//           "id": "abc-news",
//           "name": "ABC News"
//         },
//         "author": "ABC News",
//         "title": "Warming world creates hazard for Alpine glaciers",
//         "description": "Italy endured a prolonged heat wave before an Alpine glacier broke off and killed seven hikers and left others unaccounted for",
//         "url": "https://abcnews.go.com/International/wireStory/warming-world-creates-hazard-alpine-glaciers-86264975",
//         "urlToImage": "https://s.abcnews.com/images/International/WireAP_3f451ab667884046ad0dfa7158a7e3dc_16x9_992.jpg",
//         "publishedAt": "2022-07-05T21:17:38Z",
//         "content": "Italy was enduring a prolonged heat wave before a massive piece of Alpine glacier broke off and killed hikers on Sunday and experts say climate change will make those hot, destabilizing conditions mo… [+4903 chars]"
//       },
//       {
//         "source": {
//           "id": "abc-news",
//           "name": "ABC News"
//         },
//         "author": "ABC News",
//         "title": "Great Salt Lake hits new historic low for 2nd time in a year",
//         "description": "The Great Salt Lake has hit a new historic low for the second time in less than a year as the ongoing megadrought worsened by climate change continues to shrink the largest natural lake west of the Mississippi",
//         "url": "https://abcnews.go.com/US/wireStory/great-salt-lake-hits-historic-low-2nd-time-86264004",
//         "urlToImage": "https://s.abcnews.com/images/US/abc_news_default_2000x2000_update_16x9_992.jpg",
//         "publishedAt": "2022-07-05T21:10:56Z",
//         "content": "SALT LAKE CITY -- The Great Salt Lake has hit a new historic low for the second time in less than a year as the ongoing megadrought worsened by climate change continues to shrink the largest natural … [+966 chars]"
//       },
//       {
//         "source": {
//           "id": "abc-news",
//           "name": "ABC News"
//         },
//         "author": "ABC News",
//         "title": "Highland Park set tight gun limits long before parade attack",
//         "description": "The latest act of mass violence to hit the U.S. has focused attention on Highland Park’s 2013 ban on semi-automatic weapons and large-capacity magazines",
//         "url": "https://abcnews.go.com/US/wireStory/highland-park-set-tight-gun-limits-long-parade-86262918",
//         "urlToImage": "https://s.abcnews.com/images/US/abc_news_default_2000x2000_update_16x9_992.jpg",
//         "publishedAt": "2022-07-05T20:43:56Z",
//         "content": "CHICAGO -- In a state with some of the countrys toughest gun regulations and a city that bans semi-automatic weapons, Dana Gordon still feared a mass shooting could happen here. \r\nGordon, a Highland … [+4037 chars]"
//       },
//       {
//         "source": {
//           "id": "abc-news",
//           "name": "ABC News"
//         },
//         "author": "ABC News",
//         "title": "Smithfield Foods settles pork price-fixing lawsuit for $42M",
//         "description": "Smithfield Foods will pay restaurants and caterers $42 million to settle a lawsuit that accused the giant meat producer of conspiring to inflate pork prices",
//         "url": "https://abcnews.go.com/Business/wireStory/smithfield-foods-settles-pork-price-fixing-lawsuit-42m-86262681",
//         "urlToImage": "https://s.abcnews.com/images/Business/WireAP_d5e5817004f14b4b9e5d5dc2b032caec_16x9_992.jpg",
//         "publishedAt": "2022-07-05T20:39:31Z",
//         "content": "OMAHA, Neb. -- Smithfield Foods will pay restaurants and caterers $42 million to settle a lawsuit that accused the giant meat producer of conspiring to inflate pork prices, which will likely only add… [+2395 chars]"
//       },
//       {
//         "source": {
//           "id": "abc-news",
//           "name": "ABC News"
//         },
//         "author": "ABC News",
//         "title": "Justice Department sues Arizona for requiring proof of citizenship to vote in presidential elections - ABC News",
//         "description": "<ol><li>Justice Department sues Arizona for requiring proof of citizenship to vote in presidential elections  ABC News\r\n</li><li>Biden admin sues Arizona over law requiring proof of citizenship to vote in federal elections  Fox News\r\n</li><li>Justice Departme…",
//         "url": "https://abcnews.go.com/Politics/justice-department-sues-arizona-requiring-proof-citizenship-vote/story?id=86259073",
//         "urlToImage": "https://s.abcnews.com/images/Politics/arizona-voters-gty-jc-210422_1619116997998_hpMain_16x9_992.jpg",
//         "publishedAt": "2022-07-05T20:37:30Z",
//         "content": "The Justice Department has filed suit against Arizona challenging its recently enacted voting law that requires proof of citizenship in order to vote in presidential elections.\r\nThe lawsuit contends … [+2335 chars]"
//       },
//       {
//         "source": {
//           "id": "abc-news",
//           "name": "ABC News"
//         },
//         "author": "ABC News",
//         "title": "How major US stock indexes fared Tuesday 7/5/2022",
//         "description": "Major stock indexes shook off an early slump and ended with meager gains on Wall Street Tuesday as worries about the economy continue to weigh on markets",
//         "url": "https://abcnews.go.com/Business/wireStory/major-us-stock-indexes-fared-tuesday-752022-86262285",
//         "urlToImage": "https://s.abcnews.com/images/US/abc_news_default_2000x2000_update_16x9_992.jpg",
//         "publishedAt": "2022-07-05T20:26:54Z",
//         "content": "Major stock indexes shook off an early slump and ended with meager gains on Wall Street Tuesday as worries about the economy continue to weigh on markets. \r\nOil prices slumped, bringing the price of … [+616 chars]"
//       },
//       {
//         "source": {
//           "id": "abc-news",
//           "name": "ABC News"
//         },
//         "author": "ABC News",
//         "title": "Newmont, ConocoPhillips fall; Moderna, Cowen rise",
//         "description": "Stocks that traded heavily or had substantial price changes Tuesday: Newmont, ConocoPhillips fall; Moderna, Cowen rise",
//         "url": "https://abcnews.go.com/Business/wireStory/newmont-conocophillips-fall-moderna-cowen-rise-86262076",
//         "urlToImage": "https://s.abcnews.com/images/US/abc_news_default_2000x2000_update_16x9_992.jpg",
//         "publishedAt": "2022-07-05T20:24:24Z",
//         "content": "NEW YORK -- Stocks that traded heavily or had substantial price changes Tuesday: \r\nAstraZeneca Plc., down 44 cents to $65.51.\r\nThe pharmaceutical company is buying drug developer TeneoTwo.\r\nNewmont C… [+893 chars]"
//       },
//       {
//         "source": {
//           "id": "abc-news",
//           "name": "ABC News"
//         },
//         "author": "ABC News",
//         "title": "Judge rejects request by Mississippi’s only abortion clinic to temporarily block a state law banning most abortions",
//         "description": "Judge rejects request by Mississippi’s only abortion clinic to temporarily block a state law banning most abortions",
//         "url": "https://abcnews.go.com/Health/wireStory/judge-rejects-request-mississippis-abortion-clinic-temporarily-block-86261548",
//         "urlToImage": "https://s.abcnews.com/images/US/abc_news_default_2000x2000_update_16x9_992.jpg",
//         "publishedAt": "2022-07-05T20:19:22Z",
//         "content": "JACKSON, Miss. -- Judge rejects request by Mississippis only abortion clinic to temporarily block a state law banning most abortions."
//       },
//       {
//         "source": {
//           "id": "abc-news",
//           "name": "ABC News"
//         },
//         "author": "ABC News",
//         "title": "Biden to Ohio, spotlighting rescued pensions for millions",
//         "description": "President Joe Biden is taking a message of shoring up workers' pensions to Ohio, hoping to reinvigorate his political standing with blue-collar voters",
//         "url": "https://abcnews.go.com/Business/wireStory/biden-ohio-spotlighting-rescued-pensions-millions-86261535",
//         "urlToImage": "https://s.abcnews.com/images/US/abc_news_default_2000x2000_update_16x9_992.jpg",
//         "publishedAt": "2022-07-05T20:18:56Z",
//         "content": "WASHINGTON -- Seeking to boost his standing with frustrated blue-collar voters, President Joe Biden on Wednesday will use the backdrop of a union training center in Cleveland to tell workers his poli… [+5310 chars]"
//       },
//       {
//         "source": {
//           "id": "abc-news",
//           "name": "ABC News"
//         },
//         "author": "ABC News",
//         "title": "The top 10 audiobooks on Audible.com",
//         "description": "Audible best-sellers for week ending July 1st",
//         "url": "https://abcnews.go.com/Entertainment/wireStory/top-10-audiobooks-audible-86261487",
//         "urlToImage": "https://s.abcnews.com/images/US/abc_news_default_2000x2000_update_16x9_992.jpg",
//         "publishedAt": "2022-07-05T20:17:53Z",
//         "content": "Nonfiction \r\n1. Atomic Habits by James Clear, narrated by the author (Penguin Audio)\r\n2. Greenlights by Matthew McConaughey, narrated by the author (Random House Audio) \r\n3. Scars and Stripes by Tim … [+1809 chars]"
//       },
//       {
//         "source": {
//           "id": "abc-news",
//           "name": "ABC News"
//         },
//         "author": "ABC News",
//         "title": "A celebrity volcanologist couple spotlighted in new doc",
//         "description": "The names might not be especially well-known today, but in the 1970s and 80s, French scientists Katia Krafft and Maurice Krafft were to volcanoes what Jacques Cousteau was to oceans",
//         "url": "https://abcnews.go.com/Entertainment/wireStory/celebrity-volcanologist-couple-spotlighted-doc-86259522",
//         "urlToImage": "https://s.abcnews.com/images/Entertainment/WireAP_d9617856e62d431eb2bc4809ef43ccae_16x9_992.jpg",
//         "publishedAt": "2022-07-05T19:53:02Z",
//         "content": "There is a curious love triangle that sits at the center of the new documentary Fire of Love.\" It's between a man, a woman and a volcano. Well, all volcanoes really. \r\nThe names might not be especial… [+3883 chars]"
//       },
//       {
//         "source": {
//           "id": "abc-news",
//           "name": "ABC News"
//         },
//         "author": "ABC News",
//         "title": "Synagogue member, father among the dead in parade shooting",
//         "description": "Portraits of the dead are beginning to emerge as investigators search for evidence in the shooting that killed at least seven and wounded 30 in Highland Park, an affluent suburb on Chicago’s north shore",
//         "url": "https://abcnews.go.com/US/wireStory/synagogue-member-father-dead-parade-shooting-86259400",
//         "urlToImage": "https://s.abcnews.com/images/US/WireAP_20f6a8532879466292f1380c42e20340_16x9_992.jpg",
//         "publishedAt": "2022-07-05T19:50:44Z",
//         "content": "One person who died in the Independence Day parade shooting in suburban Chicago was an active member of a local Jewish congregation, who once taught preschool and coordinated bar and bat mitzvah cere… [+2061 chars]"
//       },
//       {
//         "source": {
//           "id": "abc-news",
//           "name": "ABC News"
//         },
//         "author": "ABC News",
//         "title": "2 key UK Cabinet ministers quit Boris Johnson's government",
//         "description": "Two of Britain’s most senior Cabinet ministers have quit in a move that could spell the end of Prime Minister Boris Johnson’s leadership after months of scandals",
//         "url": "https://abcnews.go.com/Business/wireStory/key-uk-cabinet-ministers-quit-boris-johnsons-government-86259071",
//         "urlToImage": "https://s.abcnews.com/images/International/WireAP_14974d0a89f64b25b8def44a9be98a89_16x9_992.jpg",
//         "publishedAt": "2022-07-05T19:50:36Z",
//         "content": "LONDON -- Two of Britains most senior Cabinet ministers resigned on Tuesday, a move that could spell the end of Prime Minister Boris Johnsons leadership after months of scandals.\r\nTreasury chief Rish… [+6580 chars]"
//       },
//       {
//         "source": {
//           "id": "abc-news",
//           "name": "ABC News"
//         },
//         "author": "ABC News",
//         "title": "Profiles of Sunak and Javid, who quit Johnson's Cabinet",
//         "description": "British Prime Minister Boris Johnson’s government is facing a fresh crisis after two of his most senior Cabinet ministers resigned within minutes of each other",
//         "url": "https://abcnews.go.com/International/wireStory/profiles-sunak-javid-quit-johnsons-cabinet-86259072",
//         "urlToImage": "https://s.abcnews.com/images/International/WireAP_a25b72f277484bbd9019f3d247e89840_16x9_992.jpg",
//         "publishedAt": "2022-07-05T19:44:27Z",
//         "content": "LONDON -- British Prime Minister Boris Johnson's government faced a new crisis Tuesday after two of his most senior Cabinet ministers resigned within minutes of each other. \r\nTreasury chief Rishi Sun… [+3270 chars]"
//       },
//       {
//         "source": {
//           "id": "abc-news",
//           "name": "ABC News"
//         },
//         "author": "ABC News",
//         "title": "CDC: Florida ice cream possible source of listeria outbreak",
//         "description": "The estate of an Illinois woman who died earlier this year from a listeria infection has filed a federal lawsuit against a Florida ice cream company that health officials have connected to a multistate outbreak",
//         "url": "https://abcnews.go.com/Health/wireStory/cdc-florida-ice-cream-source-listeria-outbreak-86259069",
//         "urlToImage": "https://s.abcnews.com/images/US/abc_news_default_2000x2000_update_16x9_992.jpg",
//         "publishedAt": "2022-07-05T19:42:26Z",
//         "content": "MIAMI -- The estate of an Illinois woman who died earlier this year from a listeria infection filed a federal lawsuit Tuesday against a Florida ice cream company that health officials have connected … [+2150 chars]"
//       },
//       {
//         "source": {
//           "id": "abc-news",
//           "name": "ABC News"
//         },
//         "author": "ABC News",
//         "title": "Father: Blown tire caused fatal blast at Michigan air show",
//         "description": "The father of the jet engine-powered semitruck driver who died during a performance at a southwestern Michigan air show says the truck burst into flames after a blown tire ruptured the fuel tank",
//         "url": "https://abcnews.go.com/US/wireStory/father-blown-tire-caused-fatal-blast-michigan-air-86258718",
//         "urlToImage": "https://s.abcnews.com/images/US/abc_news_default_2000x2000_update_16x9_992.jpg",
//         "publishedAt": "2022-07-05T19:35:11Z",
//         "content": "LANSING, Mich. -- The father of the jet engine-powered semitruck driver who died during a performance at a southwestern Michigan air show said Tuesday that the truck burst into flames after a blown t… [+1677 chars]"
//       },
//       {
//         "source": {
//           "id": "abc-news",
//           "name": "ABC News"
//         },
//         "author": "ABC News",
//         "title": "More Texas migrant truck victims identified; youngest was 13",
//         "description": "Officials in Texas say more than half of the 53 migrants found dead or dying in a tractor-trailer last week in San Antonio have been identified",
//         "url": "https://abcnews.go.com/US/wireStory/texas-migrant-truck-victims-identified-youngest-13-86258832",
//         "urlToImage": "https://s.abcnews.com/images/US/WireAP_6b1e151907cb463fb2ec66ada83607ce_16x9_992.jpg",
//         "publishedAt": "2022-07-05T19:26:55Z",
//         "content": "SAN ANTONIO -- More than half of the 53 migrants found dead or dying in a tractor-trailer in Texas last week have been identified, the youngest among them 13 years old, officials said Tuesday. \r\nThe … [+782 chars]"
//       },
//       {
//         "source": {
//           "id": "abc-news",
//           "name": "ABC News"
//         },
//         "author": "ABC News",
//         "title": "Mexico leader to end daylight saving, keep \"God's clock\"",
//         "description": "Mexico's president has submitted a bill to end daylight saving time and end the practice of changing clocks twice a year",
//         "url": "https://abcnews.go.com/International/wireStory/mexico-leader-end-daylight-saving-gods-clock-86257812",
//         "urlToImage": "https://s.abcnews.com/images/US/abc_news_default_2000x2000_update_16x9_992.jpg",
//         "publishedAt": "2022-07-05T19:21:37Z",
//         "content": "MEXICO CITY -- Mexicos president submitted a bill Tuesday to end daylight saving time, putting an end to the practice of changing clocks twice a year. \r\nHealth Secretary Jorge Alcocer said Mexico sho… [+1420 chars]"
//       },
//       {
//         "source": {
//           "id": "abc-news",
//           "name": "ABC News"
//         },
//         "author": "ABC News",
//         "title": "Closing prices for crude oil, gold and other commodities",
//         "description": "Closing prices for crude oil, gold and other commodities, and foreign exchange levels",
//         "url": "https://abcnews.go.com/Business/wireStory/closing-prices-crude-oil-gold-commodities-86258588",
//         "urlToImage": "https://s.abcnews.com/images/US/abc_news_default_2000x2000_update_16x9_992.jpg",
//         "publishedAt": "2022-07-05T19:21:34Z",
//         "content": "Benchmark U.S. crude oil for August delivery fell $8.93 to $99.50 a barrel Tuesday. Brent crude for September delivery fell $10.73 to $102.70 a barrel.\r\nWholesale gasoline for August delivery fell 36… [+413 chars]"
//       },
//       {
//         "source": {
//           "id": "abc-news",
//           "name": "ABC News"
//         },
//         "author": "ABC News",
//         "title": "Police say a seventh person has died as a result of the mass shooting at a July 4 parade in Highland Park, Illinois",
//         "description": "Police say a seventh person has died as a result of the mass shooting at a July 4 parade in Highland Park, Illinois",
//         "url": "https://abcnews.go.com/US/wireStory/police-seventh-person-died-result-mass-shooting-july-86258587",
//         "urlToImage": "https://s.abcnews.com/images/US/abc_news_default_2000x2000_update_16x9_992.jpg",
//         "publishedAt": "2022-07-05T19:21:27Z",
//         "content": "HIGHLAND PARK, Ill. -- Police say a seventh person has died as a result of the mass shooting at a July 4 parade in Highland Park, Illinois."
//       },
//       {
//         "source": {
//           "id": "abc-news",
//           "name": "ABC News"
//         },
//         "author": "ABC News",
//         "title": "Albanian jailed for life over killing of 2 Czech tourists",
//         "description": "Albania’s Supreme Court has upheld a life sentence imposed on a local man for the killing of two Czech tourists during a carjacking robbery in 2015",
//         "url": "https://abcnews.go.com/International/wireStory/albanian-jailed-life-killing-czech-tourists-86257703",
//         "urlToImage": "https://s.abcnews.com/images/US/abc_news_default_2000x2000_update_16x9_992.jpg",
//         "publishedAt": "2022-07-05T19:06:56Z",
//         "content": "TIRANA, Albania -- Albania's Supreme Court on Tuesday upheld a life sentence imposed on a local man over the killing of two Czech tourists during a carjacking robbery in 2015.\r\nSokol Mjacaj, 27, was … [+1065 chars]"
//       },
//       {
//         "source": {
//           "id": "abc-news",
//           "name": "ABC News"
//         },
//         "author": "ABC News",
//         "title": "Funerals begin for 3 Kentucky officers killed in ambush",
//         "description": "The first of three Kentucky police officers killed in an ambush last week has been laid to rest",
//         "url": "https://abcnews.go.com/US/wireStory/funerals-begin-kentucky-officers-killed-ambush-86257702",
//         "urlToImage": "https://s.abcnews.com/images/US/WireAP_dff8ffca0188490489b8a47a174ff809_16x9_992.jpg",
//         "publishedAt": "2022-07-05T19:05:12Z",
//         "content": "Sheriff John Hunt fought back tears while saying goodbye to his longtime friend, William Petry, one of three law enforcement officers killed in an ambush while serving a warrant in eastern Kentucky l… [+2933 chars]"
//       },
//       {
//         "source": {
//           "id": "abc-news",
//           "name": "ABC News"
//         },
//         "author": "ABC News",
//         "title": "As 'Run 3' begins, CERN touts discovery of exotic particles",
//         "description": "The physics lab that’s home to the world’s largest atom smasher has announced the observation of three new “exotic particles” that could provide clues to the force that binds subatomic particles together",
//         "url": "https://abcnews.go.com/Technology/wireStory/run-begins-cern-touts-discovery-exotic-particles-86257701",
//         "urlToImage": "https://s.abcnews.com/images/US/abc_news_default_2000x2000_update_16x9_992.jpg",
//         "publishedAt": "2022-07-05T19:04:07Z",
//         "content": "GENEVA -- The physics lab thats home to the worlds largest atom smasher announced on Tuesday the observation of three new exotic particles that could provide clues about the force that binds subatomi… [+1549 chars]"
//       },
//       {
//         "source": {
//           "id": "abc-news",
//           "name": "ABC News"
//         },
//         "author": "ABC News",
//         "title": "Fulton County subpoenas Giuliani, Graham in probe into election interference",
//         "description": "Fulton County is investigating whether former President Donald Trump pushed officials to change Georgia's results in the 2020 election.",
//         "url": "https://abcnews.go.com/Politics/fulton-county-subpoenas-rudy-giuliani-lindsey-graham-probe/story?id=86252892",
//         "urlToImage": "https://s.abcnews.com/images/Politics/rudy-giuliani_hpMain_20220705-135044_16x9_992.jpg",
//         "publishedAt": "2022-07-05T19:01:44Z",
//         "content": "The Fulton County special grand jury investigating possible criminal interference in Georgia's 2020 elections has issued subpoenas for Rudy Giuliani, Sen. Lindsey Graham, R-S.C., and several others i… [+92 chars]"
//       },
//       {
//         "source": {
//           "id": "abc-news",
//           "name": "ABC News"
//         },
//         "author": "ABC News",
//         "title": "Ukrainian governor urges evacuation of 350,000 residents",
//         "description": "A day after Russian President Vladimir Putin declared victory in seizing an eastern Ukraine province essential to his wartime aims, his troops escalated their offensive in a neighboring province",
//         "url": "https://abcnews.go.com/Business/wireStory/ukrainian-governor-urges-evacuation-350000-residents-86257207",
//         "urlToImage": "https://s.abcnews.com/images/International/WireAP_5d55f489e7d44c6faf598037ff245d55_16x9_992.jpg",
//         "publishedAt": "2022-07-05T18:56:05Z",
//         "content": "KRAMATORSK, Ukraine -- A day after Russian President Vladimir Putin declared victory in seizing an eastern Ukraine province essential to his wartime aims, his troops escalated their offensive in the … [+6987 chars]"
//       },
//       {
//         "source": {
//           "id": "abc-news",
//           "name": "ABC News"
//         },
//         "author": "ABC News",
//         "title": "Review: In 'Fire of Love,' the mysterious alchemy of romance",
//         "description": "Rarely have the conditions for love been less hospitable than in Sara Dosa’s documentary “Fire of Love.”",
//         "url": "https://abcnews.go.com/Entertainment/wireStory/review-fire-love-mysterious-alchemy-romance-86257173",
//         "urlToImage": "https://s.abcnews.com/images/Entertainment/WireAP_80dbb18ba5ee4fec9d8529c9b29e4938_16x9_992.jpg",
//         "publishedAt": "2022-07-05T18:55:46Z",
//         "content": "Rarely have the conditions for love been less hospitable than in Sara Dosas documentary Fire of Love.\" Yet here, amid shifting tectonics and quaking craters, French volcanologists Katia and Maurice K… [+3237 chars]"
//       },
//       {
//         "source": {
//           "id": "abc-news",
//           "name": "ABC News"
//         },
//         "author": "ABC News",
//         "title": "US seeks focus on 'urgent' needs of Ukraine at Swiss meeting",
//         "description": "A top U.S. diplomat urged allies of Ukraine to help the war-battered country meet its “immediate and urgent” needs, as scores of countries wrapped up a two-day conference aimed to help Ukraine recover from Russia war when it ends one day",
//         "url": "https://abcnews.go.com/Business/wireStory/us-seeks-focus-urgent-ukraine-swiss-meeting-86257122",
//         "urlToImage": "https://s.abcnews.com/images/International/WireAP_a6b2187e9da047258c5e25071ab34a35_16x9_992.jpg",
//         "publishedAt": "2022-07-05T18:55:01Z",
//         "content": "LUGANO, Switzerland -- A top U.S. diplomat on Tuesday urged allies of Ukraine to help the war-battered country meet its immediate and urgent needs not only longer-term rebuilding as scores of countri… [+3490 chars]"
//       },
//       {
//         "source": {
//           "id": "abc-news",
//           "name": "ABC News"
//         },
//         "author": "ABC News",
//         "title": "Review: An Irish hitman juggles murder with parenthood",
//         "description": "In “The Lemon Man,” Dublin, Ireland, hitman Patrick Callen discovers a baby after killing its drug-dealing father",
//         "url": "https://abcnews.go.com/Entertainment/wireStory/review-irish-hitman-juggles-murder-parenthood-86256265",
//         "urlToImage": "https://s.abcnews.com/images/Entertainment/WireAP_9464fb5f139c48bbaa20eca9ccbf233f_16x9_992.jpg",
//         "publishedAt": "2022-07-05T18:44:43Z",
//         "content": "The Lemon Man by Keith Bruton (Brash Books)\r\nPatrick Callen, a Dublin, Ireland hitman with a mild case of obsessive-compulsive disorder, stays organized by making lists. On his first day in Keith Bru… [+2306 chars]"
//       },
//       {
//         "source": {
//           "id": "abc-news",
//           "name": "ABC News"
//         },
//         "author": "ABC News",
//         "title": "NASA: Contact lost with spacecraft on way to test moon orbit",
//         "description": "NASA says contact has been lost with a spacecraft headed to the moon to test out a lopsided lunar orbit",
//         "url": "https://abcnews.go.com/Technology/wireStory/nasa-contact-lost-spacecraft-test-moon-orbit-86255356",
//         "urlToImage": "https://s.abcnews.com/images/Technology/WireAP_116d37b91ecd41d8b8fbe35ebbb0290f_16x9_992.jpg",
//         "publishedAt": "2022-07-05T18:38:57Z",
//         "content": "WASHINGTON -- NASA said Tuesday it has lost contact with a $32.7 million spacecraft headed to the moon to test out a lopsided lunar orbit, but agency engineers are hopeful they can fix the problem.\r\n… [+974 chars]"
//       },
//       {
//         "source": {
//           "id": "abc-news",
//           "name": "ABC News"
//         },
//         "author": "ABC News",
//         "title": "Turkey to 'intensify' negotiations for Ukraine grain deal",
//         "description": "Turkish President Recep Tayyip Erdogan says he intends to “intensify” negotiations with Russia and Ukraine in the hope of reaching a deal on a U.N. plan to export Ukrainian grain to world markets",
//         "url": "https://abcnews.go.com/International/wireStory/turkey-intensify-negotiations-ukraine-grain-deal-86254482",
//         "urlToImage": "https://s.abcnews.com/images/International/WireAP_0fcdd77695a94fed9cae837981af19a4_16x9_992.jpg",
//         "publishedAt": "2022-07-05T18:27:59Z",
//         "content": "ANKARA, Turkey -- Turkish President Recep Tayyip Erdogan said Tuesday he intends to intensify negotiations with Russia and Ukraine in the hope of reaching a deal on a U.N. plan to export Ukrainian gr… [+1540 chars]"
//       },
//       {
//         "source": {
//           "id": "abc-news",
//           "name": "ABC News"
//         },
//         "author": "ABC News",
//         "title": "HarperCollins workers approve potential strike",
//         "description": "The union representing more than 250 HarperCollins workers says those employees have overwhelmingly voted to strike if the publisher doesn’t meet their demands for a fair contract",
//         "url": "https://abcnews.go.com/Entertainment/wireStory/harpercollins-workers-approve-potential-strike-86253711",
//         "urlToImage": "https://s.abcnews.com/images/US/abc_news_default_2000x2000_update_16x9_992.jpg",
//         "publishedAt": "2022-07-05T18:17:00Z",
//         "content": "The union representing more than 250 HarperCollins workers says those employees have overwhelmingly voted to strike if the publisher doesn't meet contract demands.\r\nThe United Auto Workers Local 2110… [+1737 chars]"
//       },
//       {
//         "source": {
//           "id": "abc-news",
//           "name": "ABC News"
//         },
//         "author": "ABC News",
//         "title": "2 Egyptian peacekeepers killed, 5 others injured in Mali",
//         "description": "Two United Nations peacekeepers from Egypt were killed and five others seriously wounded when their vehicle hit a landmine planted by suspected jihadis in northern Mali on Tuesday",
//         "url": "https://abcnews.go.com/International/wireStory/egyptian-peacekeepers-killed-injured-mali-86253465",
//         "urlToImage": "https://s.abcnews.com/images/US/abc_news_default_2000x2000_update_16x9_992.jpg",
//         "publishedAt": "2022-07-05T18:14:58Z",
//         "content": "BAMAKO, Mali -- Two United Nations peacekeepers from Egypt were killed and five others seriously wounded when their vehicle hit a landmine planted by suspected jihadis in northern Mali on Tuesday, th… [+2329 chars]"
//       },
//       {
//         "source": {
//           "id": "abc-news",
//           "name": "ABC News"
//         },
//         "author": "ABC News",
//         "title": "2 UN peacekeepers from Egypt were killed, 5 wounded in Mali",
//         "description": "A U.N. armored vehicle has hit a mine in central Mali, killing two Egyptian peacekeepers and seriously wounding five others",
//         "url": "https://abcnews.go.com/US/wireStory/peacekeepers-egypt-killed-wounded-mali-86252938",
//         "urlToImage": "https://s.abcnews.com/images/US/abc_news_default_2000x2000_update_16x9_992.jpg",
//         "publishedAt": "2022-07-05T18:05:08Z",
//         "content": "UNITED NATIONS -- A U.N. armored vehicle hit a mine Tuesday in central Mali, killing two Egyptian peacekeepers and seriously wounding five others in another deadly incident targeting the U.N. mission… [+1628 chars]"
//       },
//       {
//         "source": {
//           "id": "abc-news",
//           "name": "ABC News"
//         },
//         "author": "ABC News",
//         "title": "Governor of Ukraine's Donetsk province urges more than a quarter-million residents to evacuate as Russians advance",
//         "description": "Governor of Ukraine's Donetsk province urges more than a quarter-million residents to evacuate as Russians advance",
//         "url": "https://abcnews.go.com/International/wireStory/governor-ukraines-donetsk-province-urges-quarter-million-residents-86252800",
//         "urlToImage": "https://s.abcnews.com/images/US/abc_news_default_2000x2000_update_16x9_992.jpg",
//         "publishedAt": "2022-07-05T18:02:37Z",
//         "content": "KRAMATORSK, Ukraine -- Governor of Ukraine's Donetsk province urges more than a quarter-million residents to evacuate as Russians advance."
//       },
//       {
//         "source": {
//           "id": "abc-news",
//           "name": "ABC News"
//         },
//         "author": "Krissy Nocerino",
//         "title": "Onboard the Disney Wish: Discover a Wealth of Uniquely Themed, Adult-Exclusive Bars and Lounges",
//         "description": "Listen up, Disney Wish cruisers. It’s time for a … (and please be sure to read this next part in Mirabel from Encanto’s voice) … adult area round-up!  While the Disney Wish was purpose-designed with families in mind, there are more spaces than ever before for…",
//         "url": "https://disneyparks.disney.go.com/blog/2022/07/onboard-the-disney-wish-discover-a-wealth-of-uniquely-themed-adult-exclusive-bars-and-lounges/",
//         "urlToImage": "https://cdn1.parksmedia.wdprapps.disney.com/media/blog/wp-content/uploads/2022/07/FI86767676.jpeg",
//         "publishedAt": "2022-07-05T18:00:17Z",
//         "content": "Listen up, Disney Wish cruisers. Its time for a  (and please be sure to read this next part in Mirabel from Encantos voice)  adult area round-up! \r\nWhile the Disney Wish was purpose-designed with fam… [+2638 chars]"
//       }
//     ]
//   }





// {
//     "status": "ok",
//     "sources": [
//       {
//         "id": "abc-news",
//         "name": "ABC News",
//         "description": "Your trusted source for breaking news, analysis, exclusive interviews, headlines, and videos at ABCNews.com.",
//         "url": "https://abcnews.go.com",
//         "category": "general",
//         "language": "en",
//         "country": "us"
//       },
//       {
//         "id": "abc-news-au",
//         "name": "ABC News (AU)",
//         "description": "Australia's most trusted source of local, national and world news. Comprehensive, independent, in-depth analysis, the latest business, sport, weather and more.",
//         "url": "http://www.abc.net.au/news",
//         "category": "general",
//         "language": "en",
//         "country": "au"
//       },
//       {
//         "id": "aftenposten",
//         "name": "Aftenposten",
//         "description": "Norges ledende nettavis med alltid oppdaterte nyheter innenfor innenriks, utenriks, sport og kultur.",
//         "url": "https://www.aftenposten.no",
//         "category": "general",
//         "language": "no",
//         "country": "no"
//       },
//       {
//         "id": "al-jazeera-english",
//         "name": "Al Jazeera English",
//         "description": "News, analysis from the Middle East and worldwide, multimedia and interactives, opinions, documentaries, podcasts, long reads and broadcast schedule.",
//         "url": "http://www.aljazeera.com",
//         "category": "general",
//         "language": "en",
//         "country": "us"
//       },
//       {
//         "id": "ansa",
//         "name": "ANSA.it",
//         "description": "Agenzia ANSA: ultime notizie, foto, video e approfondimenti su: cronaca, politica, economia, regioni, mondo, sport, calcio, cultura e tecnologia.",
//         "url": "http://www.ansa.it",
//         "category": "general",
//         "language": "it",
//         "country": "it"
//       },
//       {
//         "id": "argaam",
//         "name": "Argaam",
//         "description": "ارقام موقع متخصص في متابعة سوق الأسهم السعودي تداول - تاسي - مع تغطيه معمقة لشركات واسعار ومنتجات البتروكيماويات , تقارير مالية الاكتتابات الجديده ",
//         "url": "http://www.argaam.com",
//         "category": "business",
//         "language": "ar",
//         "country": "sa"
//       },
//       {
//         "id": "ars-technica",
//         "name": "Ars Technica",
//         "description": "The PC enthusiast's resource. Power users and the tools they love, without computing religion.",
//         "url": "http://arstechnica.com",
//         "category": "technology",
//         "language": "en",
//         "country": "us"
//       },
//       {
//         "id": "ary-news",
//         "name": "Ary News",
//         "description": "ARY News is a Pakistani news channel committed to bring you up-to-the minute Pakistan news and featured stories from around Pakistan and all over the world.",
//         "url": "https://arynews.tv/ud/",
//         "category": "general",
//         "language": "ud",
//         "country": "pk"
//       },
//       {
//         "id": "associated-press",
//         "name": "Associated Press",
//         "description": "The AP delivers in-depth coverage on the international, politics, lifestyle, business, and entertainment news.",
//         "url": "https://apnews.com/",
//         "category": "general",
//         "language": "en",
//         "country": "us"
//       },
//       {
//         "id": "australian-financial-review",
//         "name": "Australian Financial Review",
//         "description": "The Australian Financial Review reports the latest news from business, finance, investment and politics, updated in real time. It has a reputation for independent, award-winning journalism and is essential reading for the business and investor community.",
//         "url": "http://www.afr.com",
//         "category": "business",
//         "language": "en",
//         "country": "au"
//       },
//       {
//         "id": "axios",
//         "name": "Axios",
//         "description": "Axios are a new media company delivering vital, trustworthy news and analysis in the most efficient, illuminating and shareable ways possible.",
//         "url": "https://www.axios.com",
//         "category": "general",
//         "language": "en",
//         "country": "us"
//       },
//       {
//         "id": "bbc-news",
//         "name": "BBC News",
//         "description": "Use BBC News for up-to-the-minute news, breaking news, video, audio and feature stories. BBC News provides trusted World and UK news as well as local and regional perspectives. Also entertainment, business, science, technology and health news.",
//         "url": "http://www.bbc.co.uk/news",
//         "category": "general",
//         "language": "en",
//         "country": "gb"
//       },
//       {
//         "id": "bbc-sport",
//         "name": "BBC Sport",
//         "description": "The home of BBC Sport online. Includes live sports coverage, breaking news, results, video, audio and analysis on Football, F1, Cricket, Rugby Union, Rugby League, Golf, Tennis and all the main world sports, plus major events such as the Olympic Games.",
//         "url": "http://www.bbc.co.uk/sport",
//         "category": "sports",
//         "language": "en",
//         "country": "gb"
//       },
//       {
//         "id": "bild",
//         "name": "Bild",
//         "description": "Die Seite 1 für aktuelle Nachrichten und Themen, Bilder und Videos aus den Bereichen News, Wirtschaft, Politik, Show, Sport, und Promis.",
//         "url": "http://www.bild.de",
//         "category": "general",
//         "language": "de",
//         "country": "de"
//       },
//       {
//         "id": "blasting-news-br",
//         "name": "Blasting News (BR)",
//         "description": "Descubra a seção brasileira da Blasting News, a primeira revista feita pelo  público, com notícias globais e vídeos independentes. Junte-se a nós e torne- se um repórter.",
//         "url": "https://br.blastingnews.com",
//         "category": "general",
//         "language": "pt",
//         "country": "br"
//       },
//       {
//         "id": "bleacher-report",
//         "name": "Bleacher Report",
//         "description": "Sports journalists and bloggers covering NFL, MLB, NBA, NHL, MMA, college football and basketball, NASCAR, fantasy sports and more. News, photos, mock drafts, game scores, player profiles and more!",
//         "url": "http://www.bleacherreport.com",
//         "category": "sports",
//         "language": "en",
//         "country": "us"
//       },
//       {
//         "id": "bloomberg",
//         "name": "Bloomberg",
//         "description": "Bloomberg delivers business and markets news, data, analysis, and video to the world, featuring stories from Businessweek and Bloomberg News.",
//         "url": "http://www.bloomberg.com",
//         "category": "business",
//         "language": "en",
//         "country": "us"
//       },
//       {
//         "id": "breitbart-news",
//         "name": "Breitbart News",
//         "description": "Syndicated news and opinion website providing continuously updated headlines to top news and analysis sources.",
//         "url": "http://www.breitbart.com",
//         "category": "general",
//         "language": "en",
//         "country": "us"
//       },
//       {
//         "id": "business-insider",
//         "name": "Business Insider",
//         "description": "Business Insider is a fast-growing business site with deep financial, media, tech, and other industry verticals. Launched in 2007, the site is now the largest business news site on the web.",
//         "url": "http://www.businessinsider.com",
//         "category": "business",
//         "language": "en",
//         "country": "us"
//       },
//       {
//         "id": "business-insider-uk",
//         "name": "Business Insider (UK)",
//         "description": "Business Insider is a fast-growing business site with deep financial, media, tech, and other industry verticals. Launched in 2007, the site is now the largest business news site on the web.",
//         "url": "http://uk.businessinsider.com",
//         "category": "business",
//         "language": "en",
//         "country": "gb"
//       },
//       {
//         "id": "buzzfeed",
//         "name": "Buzzfeed",
//         "description": "BuzzFeed is a cross-platform, global network for news and entertainment that generates seven billion views each month.",
//         "url": "https://www.buzzfeed.com",
//         "category": "entertainment",
//         "language": "en",
//         "country": "us"
//       },
//       {
//         "id": "cbc-news",
//         "name": "CBC News",
//         "description": "CBC News is the division of the Canadian Broadcasting Corporation responsible for the news gathering and production of news programs on the corporation's English-language operations, namely CBC Television, CBC Radio, CBC News Network, and CBC.ca.",
//         "url": "http://www.cbc.ca/news",
//         "category": "general",
//         "language": "en",
//         "country": "ca"
//       },
//       {
//         "id": "cbs-news",
//         "name": "CBS News",
//         "description": "CBS News: dedicated to providing the best in journalism under standards it pioneered at the dawn of radio and television and continue in the digital age.",
//         "url": "http://www.cbsnews.com",
//         "category": "general",
//         "language": "en",
//         "country": "us"
//       },
//       {
//         "id": "cnn",
//         "name": "CNN",
//         "description": "View the latest news and breaking news today for U.S., world, weather, entertainment, politics and health at CNN",
//         "url": "http://us.cnn.com",
//         "category": "general",
//         "language": "en",
//         "country": "us"
//       },
//       {
//         "id": "cnn-es",
//         "name": "CNN Spanish",
//         "description": "Lee las últimas noticias e información sobre Latinoamérica, Estados Unidos, mundo, entretenimiento, política, salud, tecnología y deportes en CNNEspañol.com.",
//         "url": "http://cnnespanol.cnn.com/",
//         "category": "general",
//         "language": "es",
//         "country": "us"
//       },
//       {
//         "id": "crypto-coins-news",
//         "name": "Crypto Coins News",
//         "description": "Providing breaking cryptocurrency news - focusing on Bitcoin, Ethereum, ICOs, blockchain technology, and smart contracts.",
//         "url": "https://www.ccn.com",
//         "category": "technology",
//         "language": "en",
//         "country": "us"
//       },
//       {
//         "id": "der-tagesspiegel",
//         "name": "Der Tagesspiegel",
//         "description": "Nachrichten, News und neueste Meldungen aus dem Inland und dem Ausland - aktuell präsentiert von tagesspiegel.de.",
//         "url": "http://www.tagesspiegel.de",
//         "category": "general",
//         "language": "de",
//         "country": "de"
//       },
//       {
//         "id": "die-zeit",
//         "name": "Die Zeit",
//         "description": "Aktuelle Nachrichten, Kommentare, Analysen und Hintergrundberichte aus Politik, Wirtschaft, Gesellschaft, Wissen, Kultur und Sport lesen Sie auf ZEIT ONLINE.",
//         "url": "http://www.zeit.de/index",
//         "category": "business",
//         "language": "de",
//         "country": "de"
//       },
//       {
//         "id": "el-mundo",
//         "name": "El Mundo",
//         "description": "Noticias, actualidad, álbumes, debates, sociedad, servicios, entretenimiento y última hora en España y el mundo.",
//         "url": "http://www.elmundo.es",
//         "category": "general",
//         "language": "es",
//         "country": "es"
//       },
//       {
//         "id": "engadget",
//         "name": "Engadget",
//         "description": "Engadget is a web magazine with obsessive daily coverage of everything new in gadgets and consumer electronics.",
//         "url": "https://www.engadget.com",
//         "category": "technology",
//         "language": "en",
//         "country": "us"
//       },
//       {
//         "id": "entertainment-weekly",
//         "name": "Entertainment Weekly",
//         "description": "Online version of the print magazine includes entertainment news, interviews, reviews of music, film, TV and books, and a special area for magazine subscribers.",
//         "url": "http://www.ew.com",
//         "category": "entertainment",
//         "language": "en",
//         "country": "us"
//       },
//       {
//         "id": "espn",
//         "name": "ESPN",
//         "description": "ESPN has up-to-the-minute sports news coverage, scores, highlights and commentary for NFL, MLB, NBA, College Football, NCAA Basketball and more.",
//         "url": "http://espn.go.com",
//         "category": "sports",
//         "language": "en",
//         "country": "us"
//       },
//       {
//         "id": "espn-cric-info",
//         "name": "ESPN Cric Info",
//         "description": "ESPN Cricinfo provides the most comprehensive cricket coverage available including live ball-by-ball commentary, news, unparalleled statistics, quality editorial comment and analysis.",
//         "url": "http://www.espncricinfo.com/",
//         "category": "sports",
//         "language": "en",
//         "country": "us"
//       },
//       {
//         "id": "financial-post",
//         "name": "Financial Post",
//         "description": "Find the latest happenings in the Canadian Financial Sector and stay up to date with changing trends in Business Markets. Read trading and investing advice from professionals.",
//         "url": "http://business.financialpost.com",
//         "category": "business",
//         "language": "en",
//         "country": "ca"
//       },
//       {
//         "id": "focus",
//         "name": "Focus",
//         "description": "Minutenaktuelle Nachrichten und Service-Informationen von Deutschlands modernem Nachrichtenmagazin.",
//         "url": "http://www.focus.de",
//         "category": "general",
//         "language": "de",
//         "country": "de"
//       },
//       {
//         "id": "football-italia",
//         "name": "Football Italia",
//         "description": "Italian football news, analysis, fixtures and results for the latest from Serie A, Serie B and the Azzurri.",
//         "url": "http://www.football-italia.net",
//         "category": "sports",
//         "language": "en",
//         "country": "it"
//       },
//       {
//         "id": "fortune",
//         "name": "Fortune",
//         "description": "Fortune 500 Daily and Breaking Business News",
//         "url": "http://fortune.com",
//         "category": "business",
//         "language": "en",
//         "country": "us"
//       },
//       {
//         "id": "four-four-two",
//         "name": "FourFourTwo",
//         "description": "The latest football news, in-depth features, tactical and statistical analysis from FourFourTwo, the UK&#039;s favourite football monthly.",
//         "url": "http://www.fourfourtwo.com/news",
//         "category": "sports",
//         "language": "en",
//         "country": "gb"
//       },
//       {
//         "id": "fox-news",
//         "name": "Fox News",
//         "description": "Breaking News, Latest News and Current News from FOXNews.com. Breaking news and video. Latest Current News: U.S., World, Entertainment, Health, Business, Technology, Politics, Sports.",
//         "url": "http://www.foxnews.com",
//         "category": "general",
//         "language": "en",
//         "country": "us"
//       },
//       {
//         "id": "fox-sports",
//         "name": "Fox Sports",
//         "description": "Find live scores, player and team news, videos, rumors, stats, standings, schedules and fantasy games on FOX Sports.",
//         "url": "http://www.foxsports.com",
//         "category": "sports",
//         "language": "en",
//         "country": "us"
//       },
//       {
//         "id": "globo",
//         "name": "Globo",
//         "description": "Só na globo.com você encontra tudo sobre o conteúdo e marcas do Grupo Globo. O melhor acervo de vídeos online sobre entretenimento, esportes e jornalismo do Brasil.",
//         "url": "http://www.globo.com/",
//         "category": "general",
//         "language": "pt",
//         "country": "br"
//       },
//       {
//         "id": "google-news",
//         "name": "Google News",
//         "description": "Comprehensive, up-to-date news coverage, aggregated from sources all over the world by Google News.",
//         "url": "https://news.google.com",
//         "category": "general",
//         "language": "en",
//         "country": "us"
//       },
//       {
//         "id": "google-news-ar",
//         "name": "Google News (Argentina)",
//         "description": "Completa cobertura actualizada de noticias agregadas a partir de fuentes de todo el mundo por Google Noticias.",
//         "url": "https://news.google.com",
//         "category": "general",
//         "language": "es",
//         "country": "ar"
//       },
//       {
//         "id": "google-news-au",
//         "name": "Google News (Australia)",
//         "description": "Comprehensive, up-to-date Australia news coverage, aggregated from sources all over the world by Google News.",
//         "url": "https://news.google.com",
//         "category": "general",
//         "language": "en",
//         "country": "au"
//       },
//       {
//         "id": "google-news-br",
//         "name": "Google News (Brasil)",
//         "description": "Cobertura jornalística abrangente e atualizada, agregada de fontes do mundo inteiro pelo Google Notícias.",
//         "url": "https://news.google.com",
//         "category": "general",
//         "language": "pt",
//         "country": "br"
//       },
//       {
//         "id": "google-news-ca",
//         "name": "Google News (Canada)",
//         "description": "Comprehensive, up-to-date Canada news coverage, aggregated from sources all over the world by Google News.",
//         "url": "https://news.google.com",
//         "category": "general",
//         "language": "en",
//         "country": "ca"
//       },
//       {
//         "id": "google-news-fr",
//         "name": "Google News (France)",
//         "description": "Informations complètes et à jour, compilées par Google Actualités à partir de sources d&#39;actualités du monde entier.",
//         "url": "https://news.google.com",
//         "category": "general",
//         "language": "fr",
//         "country": "fr"
//       },
//       {
//         "id": "google-news-in",
//         "name": "Google News (India)",
//         "description": "Comprehensive, up-to-date India news coverage, aggregated from sources all over the world by Google News.",
//         "url": "https://news.google.com",
//         "category": "general",
//         "language": "en",
//         "country": "in"
//       },
//       {
//         "id": "google-news-is",
//         "name": "Google News (Israel)",
//         "description": "כיסוי מקיף ועדכני של חדשות שהצטברו ממקורות בכל העולם על ידי &#39;חדשות Google&#39;.",
//         "url": "https://news.google.com",
//         "category": "general",
//         "language": "he",
//         "country": "is"
//       },
//       {
//         "id": "google-news-it",
//         "name": "Google News (Italy)",
//         "description": "Copertura giornalistica completa e aggiornata ottenuta combinando fonti di notizie in tutto il mondo attraverso Google News.",
//         "url": "https://news.google.com",
//         "category": "general",
//         "language": "it",
//         "country": "it"
//       },
//       {
//         "id": "google-news-ru",
//         "name": "Google News (Russia)",
//         "description": "Исчерпывающая и актуальная информация, собранная службой &quot;Новости Google&quot; со всего света.",
//         "url": "https://news.google.com",
//         "category": "general",
//         "language": "ru",
//         "country": "ru"
//       },
//       {
//         "id": "google-news-sa",
//         "name": "Google News (Saudi Arabia)",
//         "description": "تغطية شاملة ومتجددة للأخبار، تم جمعها من مصادر أخبار من جميع أنحاء العالم بواسطة أخبار Google.",
//         "url": "https://news.google.com",
//         "category": "general",
//         "language": "ar",
//         "country": "sa"
//       },
//       {
//         "id": "google-news-uk",
//         "name": "Google News (UK)",
//         "description": "Comprehensive, up-to-date UK news coverage, aggregated from sources all over the world by Google News.",
//         "url": "https://news.google.com",
//         "category": "general",
//         "language": "en",
//         "country": "gb"
//       },
//       {
//         "id": "goteborgs-posten",
//         "name": "Göteborgs-Posten",
//         "description": "Göteborgs-Posten, abbreviated GP, is a major Swedish language daily newspaper published in Gothenburg, Sweden.",
//         "url": "http://www.gp.se",
//         "category": "general",
//         "language": "sv",
//         "country": "se"
//       },
//       {
//         "id": "gruenderszene",
//         "name": "Gruenderszene",
//         "description": "Online-Magazin für Startups und die digitale Wirtschaft. News und Hintergründe zu Investment, VC und Gründungen.",
//         "url": "http://www.gruenderszene.de",
//         "category": "technology",
//         "language": "de",
//         "country": "de"
//       },
//       {
//         "id": "hacker-news",
//         "name": "Hacker News",
//         "description": "Hacker News is a social news website focusing on computer science and entrepreneurship. It is run by Paul Graham's investment fund and startup incubator, Y Combinator. In general, content that can be submitted is defined as \"anything that gratifies one's intellectual curiosity\".",
//         "url": "https://news.ycombinator.com",
//         "category": "technology",
//         "language": "en",
//         "country": "us"
//       },
//       {
//         "id": "handelsblatt",
//         "name": "Handelsblatt",
//         "description": "Auf Handelsblatt lesen sie Nachrichten über Unternehmen, Finanzen, Politik und Technik. Verwalten Sie Ihre Finanzanlagen mit Hilfe unserer Börsenkurse.",
//         "url": "http://www.handelsblatt.com",
//         "category": "business",
//         "language": "de",
//         "country": "de"
//       },
//       {
//         "id": "ign",
//         "name": "IGN",
//         "description": "IGN is your site for Xbox One, PS4, PC, Wii-U, Xbox 360, PS3, Wii, 3DS, PS Vita and iPhone games with expert reviews, news, previews, trailers, cheat codes, wiki guides and walkthroughs.",
//         "url": "http://www.ign.com",
//         "category": "entertainment",
//         "language": "en",
//         "country": "us"
//       },
//       {
//         "id": "il-sole-24-ore",
//         "name": "Il Sole 24 Ore",
//         "description": "Notizie di economia, cronaca italiana ed estera, quotazioni borsa in tempo reale e di finanza, norme e tributi, fondi e obbligazioni, mutui, prestiti e lavoro a cura de Il Sole 24 Ore.",
//         "url": "https://www.ilsole24ore.com",
//         "category": "business",
//         "language": "it",
//         "country": "it"
//       },
//       {
//         "id": "independent",
//         "name": "Independent",
//         "description": "National morning quality (tabloid) includes free online access to news and supplements. Insight by Robert Fisk and various other columnists.",
//         "url": "http://www.independent.co.uk",
//         "category": "general",
//         "language": "en",
//         "country": "gb"
//       },
//       {
//         "id": "infobae",
//         "name": "Infobae",
//         "description": "Noticias de Argentina y del mundo en tiempo real. Información, videos y fotos sobre los hechos más relevantes y sus protagonistas. Léelo antes en infobae.",
//         "url": "http://www.infobae.com/?noredirect",
//         "category": "general",
//         "language": "es",
//         "country": "ar"
//       },
//       {
//         "id": "info-money",
//         "name": "InfoMoney",
//         "description": "No InfoMoney você encontra tudo o que precisa sobre dinheiro. Ações, investimentos, bolsas de valores e muito mais. Aqui você encontra informação que vale dinheiro!",
//         "url": "https://www.infomoney.com.br",
//         "category": "business",
//         "language": "pt",
//         "country": "br"
//       },
//       {
//         "id": "la-gaceta",
//         "name": "La Gaceta",
//         "description": "El diario de Tucumán, noticias 24 horas online - San Miguel de Tucumán - Argentina - Ultimo momento - Ultimas noticias.",
//         "url": "http://www.lagaceta.com.ar",
//         "category": "general",
//         "language": "es",
//         "country": "ar"
//       },
//       {
//         "id": "la-nacion",
//         "name": "La Nacion",
//         "description": "Información confiable en Internet. Noticias de Argentina y del mundo - ¡Informate ya!",
//         "url": "http://www.lanacion.com.ar",
//         "category": "general",
//         "language": "es",
//         "country": "ar"
//       },
//       {
//         "id": "la-repubblica",
//         "name": "La Repubblica",
//         "description": "Breaking News, Latest News and Current News from FOXNews.com. Breaking news and video. Latest Current News: U.S., World, Entertainment, Health, Business, Technology, Politics, Sports.",
//         "url": "http://www.repubblica.it",
//         "category": "general",
//         "language": "it",
//         "country": "it"
//       },
//       {
//         "id": "le-monde",
//         "name": "Le Monde",
//         "description": "Les articles du journal et toute l'actualit&eacute; en continu : International, France, Soci&eacute;t&eacute;, Economie, Culture, Environnement, Blogs ...",
//         "url": "http://www.lemonde.fr",
//         "category": "general",
//         "language": "fr",
//         "country": "fr"
//       },
//       {
//         "id": "lenta",
//         "name": "Lenta",
//         "description": "Новости, статьи, фотографии, видео. Семь дней в неделю, 24 часа в сутки.",
//         "url": "https://lenta.ru",
//         "category": "general",
//         "language": "ru",
//         "country": "ru"
//       },
//       {
//         "id": "lequipe",
//         "name": "L'equipe",
//         "description": "Le sport en direct sur L'EQUIPE.fr. Les informations, résultats et classements de tous les sports. Directs commentés, images et vidéos à regarder et à partager !",
//         "url": "https://www.lequipe.fr",
//         "category": "sports",
//         "language": "fr",
//         "country": "fr"
//       },
//       {
//         "id": "les-echos",
//         "name": "Les Echos",
//         "description": "Toute l'actualité économique, financière et boursière française et internationale sur Les Echos.fr",
//         "url": "https://www.lesechos.fr",
//         "category": "business",
//         "language": "fr",
//         "country": "fr"
//       },
//       {
//         "id": "liberation",
//         "name": "Libération",
//         "description": "Toute l'actualité en direct - photos et vidéos avec Libération",
//         "url": "http://www.liberation.fr",
//         "category": "general",
//         "language": "fr",
//         "country": "fr"
//       },
//       {
//         "id": "marca",
//         "name": "Marca",
//         "description": "La mejor información deportiva en castellano actualizada minuto a minuto en noticias, vídeos, fotos, retransmisiones y resultados en directo.",
//         "url": "http://www.marca.com",
//         "category": "sports",
//         "language": "es",
//         "country": "es"
//       },
//       {
//         "id": "mashable",
//         "name": "Mashable",
//         "description": "Mashable is a global, multi-platform media and entertainment company.",
//         "url": "https://mashable.com",
//         "category": "entertainment",
//         "language": "en",
//         "country": "us"
//       },
//       {
//         "id": "medical-news-today",
//         "name": "Medical News Today",
//         "description": "Medical news and health news headlines posted throughout the day, every day.",
//         "url": "http://www.medicalnewstoday.com",
//         "category": "health",
//         "language": "en",
//         "country": "us"
//       },
//       {
//         "id": "msnbc",
//         "name": "MSNBC",
//         "description": "Breaking news and in-depth analysis of the headlines, as well as commentary and informed perspectives from The Rachel Maddow Show, Morning Joe & more.",
//         "url": "http://www.msnbc.com",
//         "category": "general",
//         "language": "en",
//         "country": "us"
//       },
//       {
//         "id": "mtv-news",
//         "name": "MTV News",
//         "description": "The ultimate news source for music, celebrity, entertainment, movies, and current events on the web. It's pop culture on steroids.",
//         "url": "http://www.mtv.com/news",
//         "category": "entertainment",
//         "language": "en",
//         "country": "us"
//       },
//       {
//         "id": "mtv-news-uk",
//         "name": "MTV News (UK)",
//         "description": "All the latest celebrity news, gossip, exclusive interviews and pictures from the world of music and entertainment.",
//         "url": "http://www.mtv.co.uk/news",
//         "category": "entertainment",
//         "language": "en",
//         "country": "gb"
//       },
//       {
//         "id": "national-geographic",
//         "name": "National Geographic",
//         "description": "Reporting our world daily: original nature and science news from National Geographic.",
//         "url": "http://news.nationalgeographic.com",
//         "category": "science",
//         "language": "en",
//         "country": "us"
//       },
//       {
//         "id": "national-review",
//         "name": "National Review",
//         "description": "National Review: Conservative News, Opinion, Politics, Policy, & Current Events.",
//         "url": "https://www.nationalreview.com/",
//         "category": "general",
//         "language": "en",
//         "country": "us"
//       },
//       {
//         "id": "nbc-news",
//         "name": "NBC News",
//         "description": "Breaking news, videos, and the latest top stories in world news, business, politics, health and pop culture.",
//         "url": "http://www.nbcnews.com",
//         "category": "general",
//         "language": "en",
//         "country": "us"
//       },
//       {
//         "id": "news24",
//         "name": "News24",
//         "description": "South Africa's premier news source, provides breaking news on national, world, Africa, sport, entertainment, technology and more.",
//         "url": "http://www.news24.com",
//         "category": "general",
//         "language": "en",
//         "country": "za"
//       },
//       {
//         "id": "new-scientist",
//         "name": "New Scientist",
//         "description": "Breaking science and technology news from around the world. Exclusive stories and expert analysis on space, technology, health, physics, life and Earth.",
//         "url": "https://www.newscientist.com/section/news",
//         "category": "science",
//         "language": "en",
//         "country": "us"
//       },
//       {
//         "id": "news-com-au",
//         "name": "News.com.au",
//         "description": "We say what people are thinking and cover the issues that get people talking balancing Australian and global moments — from politics to pop culture.",
//         "url": "http://www.news.com.au",
//         "category": "general",
//         "language": "en",
//         "country": "au"
//       },
//       {
//         "id": "newsweek",
//         "name": "Newsweek",
//         "description": "Newsweek provides in-depth analysis, news and opinion about international issues, technology, business, culture and politics.",
//         "url": "https://www.newsweek.com",
//         "category": "general",
//         "language": "en",
//         "country": "us"
//       },
//       {
//         "id": "new-york-magazine",
//         "name": "New York Magazine",
//         "description": "NYMAG and New York magazine cover the new, the undiscovered, the next in politics, culture, food, fashion, and behavior nationally, through a New York lens.",
//         "url": "http://nymag.com",
//         "category": "general",
//         "language": "en",
//         "country": "us"
//       },
//       {
//         "id": "next-big-future",
//         "name": "Next Big Future",
//         "description": "Coverage of science and technology that have the potential for disruption, and analysis of plans, policies, and technology that enable radical improvement.",
//         "url": "https://www.nextbigfuture.com",
//         "category": "science",
//         "language": "en",
//         "country": "us"
//       },
//       {
//         "id": "nfl-news",
//         "name": "NFL News",
//         "description": "The official source for NFL news, schedules, stats, scores and more.",
//         "url": "http://www.nfl.com/news",
//         "category": "sports",
//         "language": "en",
//         "country": "us"
//       },
//       {
//         "id": "nhl-news",
//         "name": "NHL News",
//         "description": "The most up-to-date breaking hockey news from the official source including interviews, rumors, statistics and schedules.",
//         "url": "https://www.nhl.com/news",
//         "category": "sports",
//         "language": "en",
//         "country": "us"
//       },
//       {
//         "id": "nrk",
//         "name": "NRK",
//         "description": "NRK er Norges største tilbud på nett: nyheter fra Norge og verden, lokalnyheter, radio- og tv-program, podcast, vær, helse-, kultur-, underholdning-, humor- og debattstoff.",
//         "url": "https://www.nrk.no",
//         "category": "general",
//         "language": "no",
//         "country": "no"
//       },
//       {
//         "id": "politico",
//         "name": "Politico",
//         "description": "Political news about Congress, the White House, campaigns, lobbyists and issues.",
//         "url": "https://www.politico.com",
//         "category": "general",
//         "language": "en",
//         "country": "us"
//       },
//       {
//         "id": "polygon",
//         "name": "Polygon",
//         "description": "Polygon is a gaming website in partnership with Vox Media. Our culture focused site covers games, their creators, the fans, trending stories and entertainment news.",
//         "url": "http://www.polygon.com",
//         "category": "entertainment",
//         "language": "en",
//         "country": "us"
//       },
//       {
//         "id": "rbc",
//         "name": "RBC",
//         "description": "Главные новости политики, экономики и бизнеса, комментарии аналитиков, финансовые данные с российских и мировых биржевых систем на сайте rbc.ru.",
//         "url": "https://www.rbc.ru",
//         "category": "general",
//         "language": "ru",
//         "country": "ru"
//       },
//       {
//         "id": "recode",
//         "name": "Recode",
//         "description": "Get the latest independent tech news, reviews and analysis from Recode with the most informed and respected journalists in technology and media.",
//         "url": "http://www.recode.net",
//         "category": "technology",
//         "language": "en",
//         "country": "us"
//       },
//       {
//         "id": "reddit-r-all",
//         "name": "Reddit /r/all",
//         "description": "Reddit is an entertainment, social news networking service, and news website. Reddit's registered community members can submit content, such as text posts or direct links.",
//         "url": "https://www.reddit.com/r/all",
//         "category": "general",
//         "language": "en",
//         "country": "us"
//       },
//       {
//         "id": "reuters",
//         "name": "Reuters",
//         "description": "Reuters.com brings you the latest news from around the world, covering breaking news in business, politics, entertainment, technology, video and pictures.",
//         "url": "http://www.reuters.com",
//         "category": "general",
//         "language": "en",
//         "country": "us"
//       },
//       {
//         "id": "rt",
//         "name": "RT",
//         "description": "Актуальная картина дня на RT: круглосуточное ежедневное обновление новостей политики, бизнеса, финансов, спорта, науки, культуры. Онлайн-репортажи с места событий. Комментарии экспертов, актуальные интервью, фото и видео репортажи.",
//         "url": "https://russian.rt.com",
//         "category": "general",
//         "language": "ru",
//         "country": "ru"
//       },
//       {
//         "id": "rte",
//         "name": "RTE",
//         "description": "Get all of the latest breaking local and international news stories as they happen, with up to the minute updates and analysis, from Ireland's National Broadcaster.",
//         "url": "https://www.rte.ie/news",
//         "category": "general",
//         "language": "en",
//         "country": "ie"
//       },
//       {
//         "id": "rtl-nieuws",
//         "name": "RTL Nieuws",
//         "description": "Volg het nieuws terwijl het gebeurt. RTL Nieuws informeert haar lezers op een onafhankelijke, boeiende en toegankelijke wijze over belangrijke ontwikkelingen in eigen land en de rest van de wereld.",
//         "url": "https://www.rtlnieuws.nl/",
//         "category": "general",
//         "language": "nl",
//         "country": "nl"
//       },
//       {
//         "id": "sabq",
//         "name": "SABQ",
//         "description": "صحيفة الكترونية سعودية هدفها السبق في نقل الحدث بمهنية ومصداقية خدمة للوطن والمواطن.",
//         "url": "https://sabq.org",
//         "category": "general",
//         "language": "ar",
//         "country": "sa"
//       },
//       {
//         "id": "spiegel-online",
//         "name": "Spiegel Online",
//         "description": "Deutschlands führende Nachrichtenseite. Alles Wichtige aus Politik, Wirtschaft, Sport, Kultur, Wissenschaft, Technik und mehr.",
//         "url": "http://www.spiegel.de",
//         "category": "general",
//         "language": "de",
//         "country": "de"
//       },
//       {
//         "id": "svenska-dagbladet",
//         "name": "Svenska Dagbladet",
//         "description": "Sveriges ledande mediesajt - SvD.se. Svenska Dagbladets nyhetssajt låter läsarna ta plats och fördjupar nyheterna.",
//         "url": "https://www.svd.se",
//         "category": "general",
//         "language": "sv",
//         "country": "se"
//       },
//       {
//         "id": "t3n",
//         "name": "T3n",
//         "description": "Das Online-Magazin bietet Artikel zu den Themen E-Business, Social Media, Startups und Webdesign.",
//         "url": "https://t3n.de",
//         "category": "technology",
//         "language": "de",
//         "country": "de"
//       },
//       {
//         "id": "talksport",
//         "name": "TalkSport",
//         "description": "Tune in to the world's biggest sports radio station - Live Premier League football coverage, breaking sports news, transfer rumours &amp; exclusive interviews.",
//         "url": "http://talksport.com",
//         "category": "sports",
//         "language": "en",
//         "country": "gb"
//       },
//       {
//         "id": "techcrunch",
//         "name": "TechCrunch",
//         "description": "TechCrunch is a leading technology media property, dedicated to obsessively profiling startups, reviewing new Internet products, and breaking tech news.",
//         "url": "https://techcrunch.com",
//         "category": "technology",
//         "language": "en",
//         "country": "us"
//       },
//       {
//         "id": "techcrunch-cn",
//         "name": "TechCrunch (CN)",
//         "description": "TechCrunch is a leading technology media property, dedicated to obsessively profiling startups, reviewing new Internet products, and breaking tech news.",
//         "url": "https://techcrunch.cn",
//         "category": "technology",
//         "language": "zh",
//         "country": "zh"
//       },
//       {
//         "id": "techradar",
//         "name": "TechRadar",
//         "description": "The latest technology news and reviews, covering computing, home entertainment systems, gadgets and more.",
//         "url": "http://www.techradar.com",
//         "category": "technology",
//         "language": "en",
//         "country": "us"
//       },
//       {
//         "id": "the-american-conservative",
//         "name": "The American Conservative",
//         "description": "Realism and reform. A new voice for a new generation of conservatives.",
//         "url": "http://www.theamericanconservative.com/",
//         "category": "general",
//         "language": "en",
//         "country": "us"
//       },
//       {
//         "id": "the-globe-and-mail",
//         "name": "The Globe And Mail",
//         "description": "The Globe and Mail offers the most authoritative news in Canada, featuring national and international news.",
//         "url": "https://www.theglobeandmail.com",
//         "category": "general",
//         "language": "en",
//         "country": "ca"
//       },
//       {
//         "id": "the-hill",
//         "name": "The Hill",
//         "description": "The Hill is a top US political website, read by the White House and more lawmakers than any other site -- vital for policy, politics and election campaigns.",
//         "url": "http://thehill.com",
//         "category": "general",
//         "language": "en",
//         "country": "us"
//       },
//       {
//         "id": "the-hindu",
//         "name": "The Hindu",
//         "description": "The Hindu. latest news, analysis, comment, in-depth coverage of politics, business, sport, environment, cinema and arts from India's national newspaper.",
//         "url": "http://www.thehindu.com",
//         "category": "general",
//         "language": "en",
//         "country": "in"
//       },
//       {
//         "id": "the-huffington-post",
//         "name": "The Huffington Post",
//         "description": "The Huffington Post is a politically liberal American online news aggregator and blog that has both localized and international editions founded by Arianna Huffington, Kenneth Lerer, Andrew Breitbart, and Jonah Peretti, featuring columnists.",
//         "url": "http://www.huffingtonpost.com",
//         "category": "general",
//         "language": "en",
//         "country": "us"
//       },
//       {
//         "id": "the-irish-times",
//         "name": "The Irish Times",
//         "description": "The Irish Times online. Latest news including sport, analysis, business, weather and more from the definitive brand of quality news in Ireland.",
//         "url": "https://www.irishtimes.com",
//         "category": "general",
//         "language": "en",
//         "country": "ie"
//       },
//       {
//         "id": "the-jerusalem-post",
//         "name": "The Jerusalem Post",
//         "description": "The Jerusalem Post is the leading online newspaper for English speaking Jewry since 1932, bringing news and updates from the Middle East and all over the Jewish world.",
//         "url": "https://www.jpost.com/",
//         "category": "general",
//         "language": "en",
//         "country": "is"
//       },
//       {
//         "id": "the-lad-bible",
//         "name": "The Lad Bible",
//         "description": "The LAD Bible is one of the largest community for guys aged 16-30 in the world. Send us your funniest pictures and videos!",
//         "url": "https://www.theladbible.com",
//         "category": "entertainment",
//         "language": "en",
//         "country": "gb"
//       },
//       {
//         "id": "the-next-web",
//         "name": "The Next Web",
//         "description": "The Next Web is one of the world’s largest online publications that delivers an international perspective on the latest news about Internet technology, business and culture.",
//         "url": "http://thenextweb.com",
//         "category": "technology",
//         "language": "en",
//         "country": "us"
//       },
//       {
//         "id": "the-sport-bible",
//         "name": "The Sport Bible",
//         "description": "TheSPORTbible is one of the largest communities for sports fans across the world. Send us your sporting pictures and videos!",
//         "url": "https://www.thesportbible.com",
//         "category": "sports",
//         "language": "en",
//         "country": "gb"
//       },
//       {
//         "id": "the-times-of-india",
//         "name": "The Times of India",
//         "description": "Times of India brings the Latest News and Top Breaking headlines on Politics and Current Affairs in India and around the World, Sports, Business, Bollywood News and Entertainment, Science, Technology, Health and Fitness news, Cricket and opinions from leading columnists.",
//         "url": "http://timesofindia.indiatimes.com",
//         "category": "general",
//         "language": "en",
//         "country": "in"
//       },
//       {
//         "id": "the-verge",
//         "name": "The Verge",
//         "description": "The Verge covers the intersection of technology, science, art, and culture.",
//         "url": "http://www.theverge.com",
//         "category": "technology",
//         "language": "en",
//         "country": "us"
//       },
//       {
//         "id": "the-wall-street-journal",
//         "name": "The Wall Street Journal",
//         "description": "WSJ online coverage of breaking news and current headlines from the US and around the world. Top stories, photos, videos, detailed analysis and in-depth reporting.",
//         "url": "http://www.wsj.com",
//         "category": "business",
//         "language": "en",
//         "country": "us"
//       },
//       {
//         "id": "the-washington-post",
//         "name": "The Washington Post",
//         "description": "Breaking news and analysis on politics, business, world national news, entertainment more. In-depth DC, Virginia, Maryland news coverage including traffic, weather, crime, education, restaurant reviews and more.",
//         "url": "https://www.washingtonpost.com",
//         "category": "general",
//         "language": "en",
//         "country": "us"
//       },
//       {
//         "id": "the-washington-times",
//         "name": "The Washington Times",
//         "description": "The Washington Times delivers breaking news and commentary on the issues that affect the future of our nation.",
//         "url": "https://www.washingtontimes.com/",
//         "category": "general",
//         "language": "en",
//         "country": "us"
//       },
//       {
//         "id": "time",
//         "name": "Time",
//         "description": "Breaking news and analysis from TIME.com. Politics, world news, photos, video, tech reviews, health, science and entertainment news.",
//         "url": "http://time.com",
//         "category": "general",
//         "language": "en",
//         "country": "us"
//       },
//       {
//         "id": "usa-today",
//         "name": "USA Today",
//         "description": "Get the latest national, international, and political news at USATODAY.com.",
//         "url": "http://www.usatoday.com/news",
//         "category": "general",
//         "language": "en",
//         "country": "us"
//       },
//       {
//         "id": "vice-news",
//         "name": "Vice News",
//         "description": "Vice News is Vice Media, Inc.'s current affairs channel, producing daily documentary essays and video through its website and YouTube channel. It promotes itself on its coverage of \"under - reported stories\".",
//         "url": "https://news.vice.com",
//         "category": "general",
//         "language": "en",
//         "country": "us"
//       },
//       {
//         "id": "wired",
//         "name": "Wired",
//         "description": "Wired is a monthly American magazine, published in print and online editions, that focuses on how emerging technologies affect culture, the economy, and politics.",
//         "url": "https://www.wired.com",
//         "category": "technology",
//         "language": "en",
//         "country": "us"
//       },
//       {
//         "id": "wired-de",
//         "name": "Wired.de",
//         "description": "Wired reports on how emerging technologies affect culture, the economy and politics.",
//         "url": "https://www.wired.de",
//         "category": "technology",
//         "language": "de",
//         "country": "de"
//       },
//       {
//         "id": "wirtschafts-woche",
//         "name": "Wirtschafts Woche",
//         "description": "Das Online-Portal des führenden Wirtschaftsmagazins in Deutschland. Das Entscheidende zu Unternehmen, Finanzen, Erfolg und Technik.",
//         "url": "http://www.wiwo.de",
//         "category": "business",
//         "language": "de",
//         "country": "de"
//       },
//       {
//         "id": "xinhua-net",
//         "name": "Xinhua Net",
//         "description": "中国主要重点新闻网站,依托新华社遍布全球的采编网络,记者遍布世界100多个国家和地区,地方频道分布全国31个省市自治区,每天24小时同时使用6种语言滚动发稿,权威、准确、及时播发国内外重要新闻和重大突发事件,受众覆盖200多个国家和地区,发展论坛是全球知名的中文论坛。",
//         "url": "http://xinhuanet.com/",
//         "category": "general",
//         "language": "zh",
//         "country": "zh"
//       },
//       {
//         "id": "ynet",
//         "name": "Ynet",
//         "description": "ynet דף הבית: אתר החדשות המוביל בישראל מבית ידיעות אחרונות. סיקור מלא של חדשות מישראל והעולם, ספורט, כלכלה, תרבות, אוכל, מדע וטבע, כל מה שקורה וכל מה שמעניין ב ynet.",
//         "url": "http://www.ynet.co.il",
//         "category": "general",
//         "language": "he",
//         "country": "is"
//       }
//     ]
//   }