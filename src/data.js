export const SPORTS = [
  {
    id: 'football', name: 'Football', tagline: "The People's Game",
    desc: "From dusty village pitches to FUFA Big League. We scout, develop and represent footballers across Uganda's 135 districts.",
    iso: 'football', tint: 'rgba(46,196,182,0.35)',
    athletes: 84, schools: 42, clubs: 18,
    facts: [
      { k: 'Active scouts', v: '12' }, { k: 'Partner academies', v: '9' }, { k: 'Regional combines / yr', v: '6' },
    ],
    history: "Football is Uganda's most-played sport, yet our top players still slip through the cracks. Athleco runs structured scouting across every region — finding the next Magogo, Kaddu, or Aucho before age 16.",
    pathway: ['School scouting (U13)', 'Regional academy (U15)', 'Showcase combines (U17)', 'Club placement (U19)', 'Agency representation (Pro)'],
  },
  {
    id: 'athletics', name: 'Athletics', tagline: 'Track. Field. Road.',
    desc: "Sprints, distance, jumps, throws. Uganda's legacy on the track is unmatched — we're building the next generation of Cheptegei's.",
    iso: 'athletics', tint: 'rgba(255,200,87,0.32)',
    athletes: 56, schools: 31, clubs: 7,
    facts: [
      { k: 'World-finalist alumni', v: '4' }, { k: 'Altitude camps run', v: '8' }, { k: 'Disciplines covered', v: '14' },
    ],
    history: 'Uganda has produced Olympic and World champions in distance running. Athleco extends this success to sprints, jumps and throws — disciplines historically under-served.',
    pathway: ['Talent ID camps', 'Altitude residential', 'Federation pathway', 'International circuit', 'Brand partnership'],
  },
  {
    id: 'basketball', name: 'Basketball', tagline: 'Court Vision',
    desc: "NBA Africa is here. We're ready. Identifying tall, fast, coachable talent for the BAL pipeline and college-bound scholarships.",
    iso: 'basketball', tint: 'rgba(245,160,84,0.32)',
    athletes: 38, schools: 24, clubs: 9,
    facts: [
      { k: 'NCAA prospects', v: '6' }, { k: 'BAL eligible', v: '3' }, { k: 'Hoops camps / yr', v: '4' },
    ],
    history: 'A young, vertical sport in Uganda — but the FIBA-Africa pipeline is real. Athleco partners with NBL clubs and schools to surface elite prospects.',
    pathway: ['School league scouting', 'Combines + film', 'Showcase tournaments', 'NCAA / BAL placement', 'Pro career management'],
  },
  {
    id: 'boxing', name: 'Boxing', tagline: 'Sweet Science',
    desc: 'A proud Ugandan tradition — from Bombers to amateur Olympians. We support boxers from gym to ring with management, sparring and medical care.',
    iso: 'boxing', tint: 'rgba(181,23,158,0.32)',
    athletes: 24, schools: 11, clubs: 14,
    facts: [
      { k: 'Pro fighters managed', v: '7' }, { k: 'Olympic hopefuls', v: '3' }, { k: 'Partner gyms', v: '14' },
    ],
    history: 'Uganda Bombers carry a legacy of fearless boxing. Athleco modernizes the support around fighters — nutrition, fight purse negotiation, international bouts.',
    pathway: ['Gym partnership', 'Amateur registration', 'National team funnel', 'Pro debut', 'International fights'],
  },
  {
    id: 'volleyball', name: 'Volleyball', tagline: 'Rise Together',
    desc: 'School and beach volleyball is exploding in Uganda. We are the agency standing behind the next AVP-bound stars.',
    iso: 'volleyball', tint: 'rgba(76,201,240,0.32)',
    athletes: 32, schools: 22, clubs: 6,
    facts: [
      { k: 'School partners', v: '22' }, { k: 'National team feeders', v: '4' }, { k: 'Beach circuit events', v: '5' },
    ],
    history: "Rapidly growing — especially in girls' school volleyball. Athleco fills the gap between school stardom and adult professional pathways.",
    pathway: ['School league ID', 'Provincial team', 'National pool', 'Pro contract', 'International transfer'],
  },
  {
    id: 'rugby', name: 'Rugby', tagline: 'Cranes & Lady Cranes',
    desc: 'Uganda Rugby is a sleeping giant on the African continent. We back the Cranes, the Lady Cranes, and the schoolboy pipeline.',
    iso: 'rugby', tint: 'rgba(46,196,182,0.32)',
    athletes: 28, schools: 18, clubs: 8,
    facts: [
      { k: 'Schoolboy pipeline', v: '18' }, { k: 'Rugby Africa caps', v: '12' }, { k: 'Sevens prospects', v: '9' },
    ],
    history: "Uganda's rugby teams punch above their weight in Africa. Athleco partners with URU and schools to grow the base.",
    pathway: ['Schools rugby', 'U18 academy', 'Premier club', 'National team', 'Overseas pro'],
  },
  {
    id: 'netball', name: 'Netball', tagline: 'She Cranes',
    desc: 'The She Cranes are world top-7. We invest in the wider pipeline — schools, talent ID and overseas placement.',
    iso: 'netball', tint: 'rgba(232,123,30,0.32)',
    athletes: 31, schools: 26, clubs: 5,
    facts: [
      { k: 'World Cup alumni', v: '6' }, { k: 'School scouts', v: '12' }, { k: 'Overseas placements', v: '4' },
    ],
    history: "Netball is the flagship women's sport — Athleco helps the pipeline keep up with the senior team's success.",
    pathway: ['School scouting', 'Regional camps', 'Club league', 'She Cranes pool', 'Overseas career'],
  },
  {
    id: 'swimming', name: 'Swimming', tagline: 'Lake & Pool',
    desc: 'Uganda has the water, the lung capacity, and the desire — we provide structure for open-water and pool athletes.',
    iso: 'swimming', tint: 'rgba(76,201,240,0.32)',
    athletes: 14, schools: 9, clubs: 4,
    facts: [
      { k: 'Pool partners', v: '4' }, { k: 'Open-water events', v: '3' }, { k: 'CANA-A entries', v: '5' },
    ],
    history: 'Long under-funded — Athleco is committing to a swimming pathway with lake-side and pool training centers.',
    pathway: ['Learn-to-swim', 'Club competitive', 'National junior', 'CANA / FINA entry', 'Olympic pathway'],
  },
  {
    id: 'cricket', name: 'Cricket', tagline: 'Cricket Cranes',
    desc: "T20 World Cup qualified — Uganda's Cricket Cranes are rising. We back the players and the wider development pyramid.",
    iso: 'cricket', tint: 'rgba(255,200,87,0.32)',
    athletes: 22, schools: 14, clubs: 6,
    facts: [
      { k: 'T20 capped', v: '8' }, { k: 'Academy intake', v: '24/yr' }, { k: 'Format coverage', v: 'T20 · ODI' },
    ],
    history: 'Historic T20 World Cup qualification was a watershed. We make sure the structure now matches the moment.',
    pathway: ['School cricket', 'UCA pathway', 'A-team', 'Cricket Cranes', 'Franchise cricket'],
  },
  {
    id: 'paralympic', name: 'Para Sport', tagline: 'Same Talent. Bigger Story.',
    desc: 'Athletics, sitting volleyball, wheelchair basketball. Athleco runs Uganda\'s most ambitious Para development program.',
    iso: 'para', tint: 'rgba(232,123,30,0.32)',
    athletes: 18, schools: 12, clubs: 4,
    facts: [
      { k: 'Para disciplines', v: '6' }, { k: 'Classified athletes', v: '18' }, { k: 'Paralympic hopefuls', v: '4' },
    ],
    history: 'Often overlooked — Athleco treats Para sport as a flagship, not an afterthought.',
    pathway: ['Classification', 'Discipline placement', 'Specialist coaching', 'National Para pool', 'Paralympic Games'],
  },
];

export const ATHLETES = [
  { id: 'david-ochieng', name: 'David Ochieng', sport: 'athletics', event: '400m Sprint', city: 'Kampala', age: 22, since: 2022, status: 'Senior', bio: 'Discovered at Namilyango College on a school scout day. National U20 record holder. Currently training out of Kapchorwa altitude camp.', achievements: ['African U20 silver (2024)', 'National 400m record holder', '4× National champion'], pb: '44.96s', club: 'Police Athletics Club', socials: { ig: '@d.ocheng', x: '@d_ocheng' } },
  { id: 'sarah-namukasa', name: 'Sarah Namukasa', sport: 'football', event: 'Attacking Mid', city: 'Entebbe', age: 19, since: 2023, status: 'Senior', bio: "Spotted at the FUFA Girls' Cup. Two-footed playmaker with vision. Currently in the Crested Cranes squad.", achievements: ['Crested Cranes debut (2024)', 'CECAFA U20 top scorer', 'Player of the Tournament — Uganda Cup'], pb: '12 caps · 4 goals', club: 'Kampala Queens FC', socials: { ig: '@s.namukasa10', x: '@SarahNK' } },
  { id: 'moses-kiprotich', name: 'Moses Kiprotich', sport: 'boxing', event: 'Lightweight (60kg)', city: 'Jinja', age: 24, since: 2021, status: 'Pro', bio: 'Came up through the Jinja Boxing Club. Switch-stance counterpuncher. 12-1 as a pro, IBF-Africa rankings.', achievements: ['12-1 (8 KO) pro record', 'IBF-Africa #4 ranked', 'East African gold (2023)'], pb: '12-1 (8 KO)', club: 'Jinja Boxing Club', socials: { ig: '@mk_lightweight', x: '@KiprotichBox' } },
  { id: 'brian-waiswa', name: 'Brian Waiswa', sport: 'basketball', event: 'Point Guard', city: 'Kampala', age: 20, since: 2023, status: 'Pro', bio: 'NBL season MVP candidate. NCAA Division I scholarship offers pending review. 6\'2", explosive, lefty.', achievements: ['NBL season MVP (2025)', 'BAL combine invite', 'AfroBasket U18 — Final Four'], pb: '21.4 PPG · 7.1 APG', club: 'KIU Titans', socials: { ig: '@b.waiswa', x: '@BWaiswa1' } },
  { id: 'patricia-nakalema', name: 'Patricia Nakalema', sport: 'netball', event: 'Goal Shooter', city: 'Mbarara', age: 21, since: 2022, status: 'Senior', bio: 'She Cranes pool member. Tall, accurate, calm under pressure. Tipped for English Superleague move.', achievements: ['She Cranes pool', 'World Cup squad (2027)', 'NetCup top scorer'], pb: "6'1\" · 92% shooting", club: 'KCCA Netball', socials: { ig: '@p.nakalema' } },
  { id: 'amos-byaruhanga', name: 'Amos Byaruhanga', sport: 'rugby', event: 'Loose-head Prop', city: 'Fort Portal', age: 26, since: 2020, status: 'Pro', bio: 'Cranes regular. Scrum technician. Currently negotiating a Pro D2 contract in France.', achievements: ['18 Cranes caps', 'Rugby Africa Cup MVP nominee', 'Currency Cup top XV'], pb: '110kg · 18 caps', club: 'Heathens RFC', socials: { ig: '@amos_byh' } },
  { id: 'janet-akello', name: 'Janet Akello', sport: 'athletics', event: '10,000m', city: 'Bukwo', age: 23, since: 2021, status: 'Senior', bio: "Long-distance runner trained out of Bukwo. Came through Athleco's rural talent ID. World Champs finalist.", achievements: ['World Champs finalist', 'CAA East Africa gold', 'PB 30:41.22'], pb: '30:41.22', club: 'Prisons Athletics', socials: { ig: '@janetakello' } },
  { id: 'tony-ssemambo', name: 'Tony Ssemambo', sport: 'football', event: 'Centre-back', city: 'Kampala', age: 21, since: 2022, status: 'Senior', bio: 'Powerful in the air, calm on the ball. Cranes call-up in 2024. Linked with Belgian Jupiler Pro League.', achievements: ['Cranes debut (2024)', 'FUFA Big League Defender of the Season', '6 Cranes caps'], pb: "6'3\" · 6 caps", club: 'Vipers SC', socials: { ig: '@tony_ssemambo' } },
  { id: 'grace-asiimwe', name: 'Grace Asiimwe', sport: 'volleyball', event: 'Outside Hitter', city: 'Mbale', age: 20, since: 2023, status: 'Senior', bio: 'Reach of 3.05m, smart play, captain of the Uganda U21 squad.', achievements: ['Uganda U21 captain', 'CAVB All-tournament team', 'School league MVP'], pb: 'Reach 3.05m', club: 'KAVC Eagles', socials: { ig: '@g.asiimwe' } },
  { id: 'isaac-tumusiime', name: 'Isaac Tumusiime', sport: 'cricket', event: 'Right-arm Pace', city: 'Lugazi', age: 22, since: 2022, status: 'Senior', bio: "T20I capped seamer. Bowls 138-141 kph. Athleco's first cricket signing — pioneer of the program.", achievements: ['Cricket Cranes T20I cap', '4-wicket haul vs PNG', 'UCA Player of the Year (2024)'], pb: '4/22', club: 'Lugazi Cricketers', socials: { ig: '@isaactumu' } },
  { id: 'phiona-mukasa', name: 'Phiona Mukasa', sport: 'swimming', event: '200m Freestyle', city: 'Entebbe', age: 18, since: 2024, status: 'Junior', bio: 'Open-water specialist who crossed over to pool. Bukasa Island background. Rising fast.', achievements: ['CANA Zone IV gold', 'National U18 record', 'Olympic Solidarity scholarship'], pb: '2:01.45', club: 'Entebbe Aquatic', socials: { ig: '@phiona_mks' } },
  { id: 'samson-okello', name: 'Samson Okello', sport: 'paralympic', event: 'T44 — 100m', city: 'Gulu', age: 25, since: 2021, status: 'Senior', bio: 'Lost his leg in childhood. Sprinter and program ambassador. Paralympic 2028 hopeful.', achievements: ['Africa Para Games bronze', 'PB 11.31s', 'Athleco Para ambassador'], pb: '11.31s', club: 'Gulu Para Athletics', socials: { ig: '@samson_okello' } },
];

export const TEAM = [
  { id: 'henry-musoke', name: 'Henry Musoke', role: 'Founder & CEO', initials: 'HM', dept: 'Leadership', city: 'Kampala', bio: 'Former NCS athlete, FIFA-licensed agent, MBA Strathmore. Founded Athleco after seeing too many Ugandan talents lost to lack of structure.', joined: '2018', focus: 'Strategy · Partnerships' },
  { id: 'patricia-nansubuga', name: 'Patricia Nansubuga', role: 'COO', initials: 'PN', dept: 'Leadership', city: 'Kampala', bio: 'Operations leader. Built the school scouting network from 4 schools to 145 in five years.', joined: '2019', focus: 'Operations · Scouting' },
  { id: 'samuel-okwir', name: 'Samuel Okwir', role: 'Head of Scouting', initials: 'SO', dept: 'Scouting', city: 'Lira', bio: 'Ex-FUFA coach. Runs the regional combine network across northern and eastern Uganda.', joined: '2020', focus: 'Football · Athletics' },
  { id: 'evelyn-kabuye', name: 'Evelyn Kabuye', role: 'Head of Athletes', initials: 'EK', dept: 'Athletes', city: 'Kampala', bio: 'Athlete liaison. Manages day-to-day welfare, training schedules and contract reviews for the full roster.', joined: '2021', focus: 'Welfare · Contracts' },
  { id: 'paul-rwakatale', name: 'Paul Rwakatale', role: 'Sports Director', initials: 'PR', dept: 'Sports', city: 'Mbarara', bio: 'Designs the technical pathway for each sport — pulled from his time at WADA and the Commonwealth Games Federation.', joined: '2020', focus: 'Technical · Coaching' },
  { id: 'rita-namara', name: 'Rita Namara', role: 'Head of Marketing', initials: 'RN', dept: 'Marketing', city: 'Kampala', bio: 'Built the Athleco brand. Storyteller, photographer, occasional creative director. Loves a good slow-mo.', joined: '2022', focus: 'Brand · Content' },
  { id: 'derrick-opondo', name: 'Derrick Opondo', role: 'Head of Infrastructure', initials: 'DO', dept: 'Infrastructure', city: 'Jinja', bio: 'Civil engineer. Oversees facility design, construction and maintenance across the country.', joined: '2023', focus: 'Facilities · Construction' },
  { id: 'mariam-najjemba', name: 'Mariam Najjemba', role: 'Legal Counsel', initials: 'MN', dept: 'Legal', city: 'Kampala', bio: 'Sports law specialist. Handles contracts, image rights and dispute resolution for our athletes.', joined: '2023', focus: 'Law · Contracts' },
  { id: 'james-otim', name: 'James Otim', role: 'Performance Coach', initials: 'JO', dept: 'Performance', city: 'Kapchorwa', bio: "S&C coach with the altitude camp. Designed Uganda's first sport-science protocol stack for endurance athletes.", joined: '2022', focus: 'S&C · Endurance' },
  { id: 'cynthia-nantongo', name: 'Cynthia Nantongo', role: 'Nutritionist', initials: 'CN', dept: 'Performance', city: 'Kampala', bio: 'Sports nutritionist. Builds fueling plans tailored to athlete budget and local food availability.', joined: '2024', focus: 'Nutrition · Welfare' },
  { id: 'edward-mwesigwa', name: 'Edward Mwesigwa', role: 'Physio Lead', initials: 'EM', dept: 'Medical', city: 'Kampala', bio: 'Lead physio, recovery and rehab. Built the network of regional physios available to every athlete.', joined: '2023', focus: 'Physio · Recovery' },
  { id: 'doreen-akampa', name: 'Doreen Akampa', role: 'Education Manager', initials: 'DA', dept: 'Education', city: 'Kampala', bio: 'Runs the schools program — ensuring athletes balance training with academics.', joined: '2023', focus: 'Education · Pathway' },
];

export const NEWS = [
  { id: 'cricket-cranes-t20', title: 'Cricket Cranes Land Maiden T20 World Cup', kicker: 'CRICKET', date: 'Mar 14, 2026', category: 'Athletes', read: '4 min', excerpt: 'Historic qualification rewrites Ugandan cricket. Athleco-backed Isaac Tumusiime took two key wickets.', body: "When the final ball was bowled in Windhoek, Uganda had done what most thought was years away — qualified for a global cricket showcase. The Cricket Cranes' run was anchored by a young pace attack that includes Athleco-managed Isaac Tumusiime, whose 4/22 in the qualifier semi-final has become the highlight reel of the season." },
  { id: 'altitude-camp-launch', title: 'Athleco Opens Kapchorwa Altitude Residential', kicker: 'CAMPS', date: 'Feb 02, 2026', category: 'Programs', read: '6 min', excerpt: 'A 24-bed residential facility for endurance athletes, 2,400m above sea level. Year-round.', body: "Kapchorwa is already a global destination for distance running. With our new residential — 24 beds, full medical, S&C suite, on-site nutrition — Uganda's athletes no longer need to train abroad to access world-class altitude support." },
  { id: 'school-pipeline-145', title: 'School Network Reaches 145 Partner Institutions', kicker: 'GRASSROOTS', date: 'Jan 19, 2026', category: 'Programs', read: '3 min', excerpt: 'From four schools in 2019 to 145 today. The scouting pipeline that is rewiring Ugandan sport.', body: 'The Athleco Schools Network is now the largest structured talent-ID pipeline in East Africa. We visit each partner school at least twice a term, running combines, talent days and coach education.' },
  { id: 'sarah-cranes-debut', title: 'Sarah Namukasa Debuts for Crested Cranes', kicker: 'FOOTBALL', date: 'Dec 11, 2025', category: 'Athletes', read: '3 min', excerpt: "Three years after we spotted her at the FUFA Girls' Cup, she's wearing the crest.", body: "Sarah Namukasa's debut against Tanzania was as composed as her game suggests it would be — calm on the ball, alive to space, vocal off the ball. The story is one we hope to tell many more times." },
  { id: 'partnership-fufa', title: 'Strategic MOU With FUFA Signed', kicker: 'PARTNERSHIPS', date: 'Nov 08, 2025', category: 'Company', read: '2 min', excerpt: 'A five-year memorandum to formalize the Athleco talent pipeline into the national federation.', body: 'The MOU formalizes what has been working informally for years — a shared talent pipeline between Athleco scouts and the FUFA youth pathway. The next five years will see joint combines and shared technical staff.' },
  { id: 'para-program-launch', title: 'Para Sport Program Goes National', kicker: 'PARA SPORT', date: 'Oct 24, 2025', category: 'Programs', read: '5 min', excerpt: 'Six disciplines, twelve regional scouts, one ambition: a podium at LA 2028.', body: "Our Para program is no longer pilot — it's flagship. We've classified athletes across six disciplines and built coaching teams for each. LA 2028 is the goal." },
];

export const PROGRAMS = [
  { id: 'schools', name: 'Athleco Schools Network', sub: 'Grassroots talent ID', count: '145 partner schools', desc: 'A network of secondary schools across Uganda where Athleco runs structured talent identification, coach education and combine days.', kpis: [['145','Schools'], ['12','Regions'], ['1,200+','Scouted /yr']] },
  { id: 'altitude', name: 'Kapchorwa Altitude Camp', sub: 'Endurance residential', count: '24 beds · 2,400m', desc: "Year-round altitude residential for distance, middle-distance, road running and triathletes. Sports science, medical, S&C, nutrition.", kpis: [['24','Beds'], ['2,400m','Altitude'], ['365','Days /yr']] },
  { id: 'academies', name: 'Sport-Specific Academies', sub: 'Discipline mastery', count: '9 active academies', desc: 'Dedicated academies for football, basketball, athletics, rugby, netball and volleyball — each with technical, performance and welfare staff.', kpis: [['9','Academies'], ['320','Athletes'], ['46','Coaches']] },
  { id: 'agency', name: 'Athleco Agency', sub: 'Pro representation', count: '60+ athletes managed', desc: 'FIFA-, FIBA- and IRB-licensed agency arm. Contracts, image rights, brand partnerships, overseas transfers.', kpis: [['60+','Athletes'], ['4','Federations'], ['18','Brand deals']] },
  { id: 'infrastructure', name: 'Facility Build & Manage', sub: 'Where talent lives', count: '6 facilities', desc: 'Design, build and maintain training facilities in regions beyond Kampala — investing where the talent actually lives.', kpis: [['6','Facilities'], ['4','Regions'], ['12','In-pipeline']] },
  { id: 'events', name: 'Events & Competitions', sub: 'Showcase moments', count: '14 events / yr', desc: 'Athleco-run combines, showcase tournaments, talent days and the annual Athleco Awards.', kpis: [['14','Events /yr'], ['4,800','Attendees'], ['12','Sports']] },
];

export const PARTNERS = [
  { name: 'FUFA', type: 'Federation', sport: 'Football', since: '2025' },
  { name: 'Uganda Athletics Federation', type: 'Federation', sport: 'Athletics', since: '2022' },
  { name: 'Uganda Rugby Union', type: 'Federation', sport: 'Rugby', since: '2024' },
  { name: 'Uganda Cricket Association', type: 'Federation', sport: 'Cricket', since: '2024' },
  { name: 'National Council of Sports', type: 'Government', sport: 'All', since: '2021' },
  { name: 'Olympic Committee Uganda', type: 'Olympic body', sport: 'Olympic sports', since: '2023' },
  { name: 'Ministry of Education', type: 'Government', sport: 'Schools', since: '2022' },
  { name: 'Stanbic Bank Uganda', type: 'Corporate', sport: 'Sponsorship', since: '2023' },
  { name: 'MTN Uganda', type: 'Corporate', sport: 'Telecom', since: '2024' },
  { name: 'Nile Breweries', type: 'Corporate', sport: 'Sponsorship', since: '2025' },
  { name: 'World Athletics', type: 'International', sport: 'Athletics', since: '2024' },
  { name: 'NBA Africa', type: 'International', sport: 'Basketball', since: '2025' },
];

export const TESTIMONIALS = [
  { quote: "Athleco didn't just sign me — they built the structure my career needed.", name: 'Brian Waiswa', role: 'NBL MVP · Athleco athlete' },
  { quote: "In two years they've done what we have been trying to do for ten — connect talent to opportunity.", name: 'Coach M. Atuhaire', role: 'Namilyango College' },
  { quote: 'The combine at Bukwo is how I got found. Without Athleco, I am running for fun, not for Uganda.', name: 'Janet Akello', role: 'World Champs finalist' },
  { quote: 'A serious agency that takes our players seriously. That is rare in this market.', name: 'D. Mugenyi', role: 'Vipers SC · Director' },
];
