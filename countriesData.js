const countriesData = {
  USA: {
    "New York": [
      {
        place_id: "ny1",
        display_name: "Central Park",
        image_url: "/images/ny1.png",
        description:
          "Central Park is a sprawling urban oasis in the heart of New York City. Visitors can enjoy scenic landscapes, cultural landmarks, and recreational activities. Whether you're looking for a peaceful walk, a boat ride on the lake, or a visit to the Central Park Zoo, the park offers something for everyone.",
        rating: 4.8,
      },
      {
        place_id: "ny2",
        display_name: "Times Square",
        image_url: "/images/ny2.png",
        description:
          "Times Square is the bustling heart of New York City's entertainment district, famous for its bright lights, Broadway theaters, and diverse crowds. Visitors can experience the excitement of live performances, world-class dining, and iconic attractions in this vibrant hub.",
        rating: 4.7,
      },
      {
        place_id: "ny3",
        display_name: "Statue of Liberty",
        image_url: "/images/ny3.png",
        description:
          "The Statue of Liberty stands as a symbol of freedom and democracy. This iconic monument, located on Liberty Island, offers visitors a chance to explore its rich history, enjoy panoramic views of New York Harbor, and appreciate the significance of this national treasure.",
        rating: 4.9,
      },
      {
        place_id: "ny4",
        display_name: "Empire State Building",
        image_url: "/images/ny4.png",
        description:
          "The Empire State Building is an iconic skyscraper offering breathtaking views of New York City from its observation decks. Visitors can learn about the building's history, take in the city's skyline, and even enjoy interactive exhibits that highlight its architectural significance.",
        rating: 4.6,
      },
      {
        place_id: "ny5",
        display_name: "Brooklyn Bridge",
        image_url: "/images/ny5.png",
        description:
          "The Brooklyn Bridge is a historic engineering marvel connecting Manhattan and Brooklyn. Walking or biking across the bridge provides stunning views of the city skyline, making it a popular spot for both locals and tourists to capture memorable moments.",
        rating: 4.5,
      },
    ],
    "San Francisco": [
      {
        place_id: "sf1",
        display_name: "Golden Gate Bridge",
        image_url: "/images/sf1.png",
        description:
          "The Golden Gate Bridge is an iconic symbol of San Francisco, renowned for its stunning Art Deco design and breathtaking views. Visitors can walk, bike, or drive across the bridge, and explore the nearby parks and vistas for an unforgettable experience.",
        rating: 4.9,
      },
      {
        place_id: "sf2",
        display_name: "Alcatraz Island",
        image_url: "/images/sf2.png",
        description:
          "Alcatraz Island, once a notorious federal prison, now serves as a fascinating historical site. Visitors can take a ferry to the island, explore the prison cells, and learn about the infamous inmates and daring escape attempts through guided tours and exhibits.",
        rating: 4.7,
      },
      {
        place_id: "sf3",
        display_name: "Lombard Street",
        image_url: "/images/sf3.png",
        description:
          "Lombard Street, known as the 'crookedest street in the world,' is famous for its steep, winding turns and beautifully landscaped gardens. This iconic San Francisco landmark offers a unique driving and walking experience, with picturesque views of the city.",
        rating: 4.6,
      },
      {
        place_id: "sf4",
        display_name: "Fisherman's Wharf",
        image_url: "/images/sf4.png",
        description:
          "Fisherman's Wharf is a vibrant waterfront district, offering fresh seafood, unique shops, and lively entertainment. Visitors can enjoy boat tours, street performances, and attractions like Pier 39, where sea lions bask in the sun and amuse onlookers.",
        rating: 4.5,
      },
      {
        place_id: "sf5",
        display_name: "Golden Gate Park",
        image_url: "/images/sf5.png",
        description:
          "Golden Gate Park is a vast urban park that boasts beautiful gardens, cultural institutions, and recreational facilities. Visitors can explore the Conservatory of Flowers, the de Young Museum, and the Japanese Tea Garden, or simply enjoy the park's natural beauty.",
        rating: 4.8,
      },
    ],
    "Los Angeles": [
      {
        place_id: "la1",
        display_name: "Hollywood Sign",
        image_url: "/images/la1.png",
        description:
          "The Hollywood Sign is an iconic symbol of the entertainment industry, perched high in the Hollywood Hills. Visitors can hike to vantage points for stunning views of the sign and the sprawling cityscape of Los Angeles, making it a must-see landmark.",
        rating: 4.7,
      },
      {
        place_id: "la2",
        display_name: "Venice Beach",
        image_url: "/images/la2.png",
        description:
          "Venice Beach is a lively coastal destination known for its eclectic boardwalk, street performers, and Muscle Beach gym. Visitors can enjoy sunbathing, surfing, and exploring the vibrant arts and culture scene that defines this unique Los Angeles neighborhood.",
        rating: 4.6,
      },
      {
        place_id: "la3",
        display_name: "Griffith Observatory",
        image_url: "/images/la3.png",
        description:
          "Griffith Observatory offers breathtaking views of Los Angeles and the stars above. Visitors can explore exhibits on astronomy and space, view celestial bodies through telescopes, and enjoy hiking trails in Griffith Park, making it a perfect blend of education and recreation.",
        rating: 4.8,
      },
      {
        place_id: "la4",
        display_name: "Santa Monica Pier",
        image_url: "/images/la4.png",
        description:
          "Santa Monica Pier is a beloved landmark featuring an amusement park, aquarium, and vibrant dining options. Visitors can enjoy scenic ocean views, ride the historic carousel, and indulge in classic seaside fun along this bustling California coast destination.",
        rating: 4.7,
      },
      {
        place_id: "la5",
        display_name: "Universal Studios Hollywood",
        image_url: "/images/la5.png",
        description:
          "Universal Studios Hollywood is a premier film studio and theme park offering thrilling rides, behind-the-scenes tours, and immersive attractions. Visitors can experience the magic of Hollywood movies and TV shows, making it a top entertainment destination.",
        rating: 4.9,
      },
    ],
    Chicago: [
      {
        place_id: "ch1",
        display_name: "Millennium Park",
        image_url: "/images/ch1.png",
        description:
          "Millennium Park is a vibrant public space in the heart of Chicago, known for its stunning art installations, lush gardens, and cultural events. Visitors can marvel at the iconic Cloud Gate sculpture, enjoy concerts at the Jay Pritzker Pavilion, and relax in the serene Lurie Garden.",
        rating: 4.8,
      },
      {
        place_id: "ch2",
        display_name: "Navy Pier",
        image_url: "/images/ch2.png",
        description:
          "Navy Pier is a bustling waterfront attraction featuring a mix of entertainment, dining, and cultural experiences. Visitors can ride the Ferris wheel, watch live performances, and explore interactive exhibits, all while enjoying stunning views of Lake Michigan.",
        rating: 4.6,
      },
      {
        place_id: "ch3",
        display_name: "The Art Institute of Chicago",
        image_url: "/images/ch3.png",
        description:
          "The Art Institute of Chicago is one of the world's premier art museums, housing an extensive collection of artworks spanning centuries and cultures. Visitors can admire masterpieces by renowned artists, explore diverse exhibits, and participate in educational programs.",
        rating: 4.9,
      },
      {
        place_id: "ch4",
        display_name: "Willis Tower",
        image_url: "/images/ch4.png",
        description:
          "Willis Tower, formerly known as the Sears Tower, offers breathtaking views from its Skydeck, located 1,353 feet above the ground. Visitors can step out onto The Ledge, a glass balcony extending from the building, for a thrilling perspective of Chicago's skyline.",
        rating: 4.7,
      },
      {
        place_id: "ch5",
        display_name: "Shedd Aquarium",
        image_url: "/images/ch5.png",
        description:
          "Shedd Aquarium is a world-renowned aquatic science facility showcasing a diverse array of marine life. Visitors can explore exhibits featuring sharks, dolphins, and exotic fish, as well as participate in interactive experiences and educational programs.",
        rating: 4.6,
      },
    ],
    Miami: [
      {
        place_id: "mi1",
        display_name: "South Beach",
        image_url: "/images/mi1.png",
        description:
          "South Beach is a vibrant neighborhood in Miami Beach, famous for its beautiful sandy shores, Art Deco architecture, and lively nightlife. Visitors can soak up the sun, swim in the turquoise waters, and explore the bustling Ocean Drive filled with restaurants and bars.",
        rating: 4.8,
      },
      {
        place_id: "mi2",
        display_name: "Vizcaya Museum and Gardens",
        image_url: "/images/mi2.png",
        description:
          "Vizcaya Museum and Gardens is a historic estate that offers a glimpse into Miami's past with its beautiful European-inspired architecture and lush gardens. Visitors can tour the grand mansion, stroll through the meticulously maintained gardens, and enjoy the serene waterfront views.",
        rating: 4.7,
      },
      {
        place_id: "mi3",
        display_name: "Miami Seaquarium",
        image_url: "/images/mi3.png",
        description:
          "Miami Seaquarium is a marine park that provides exciting encounters with marine life through its exhibits and shows. Visitors can watch dolphins and sea lions perform, learn about conservation efforts, and even swim with some of the park's aquatic residents.",
        rating: 4.5,
      },
      {
        place_id: "mi4",
        display_name: "Wynwood Walls",
        image_url: "/images/mi4.png",
        description:
          "Wynwood Walls is an outdoor art gallery featuring large-scale murals by some of the world's best street artists. Visitors can explore the colorful and vibrant artworks that transform the warehouse district into a dynamic cultural hub.",
        rating: 4.6,
      },
      {
        place_id: "mi5",
        display_name: "Bayside Marketplace",
        image_url: "/images/mi5.png",
        description:
          "Bayside Marketplace is a bustling waterfront shopping center offering a variety of shops, restaurants, and live entertainment. Visitors can enjoy boat tours, browse unique boutiques, and savor local cuisine while taking in the scenic views of Biscayne Bay.",
        rating: 4.6,
      },
    ],
    "Las Vegas": [
      {
        place_id: "lv1",
        display_name: "The Strip",
        image_url: "/images/lv1.png",
        description:
          "The Strip is the vibrant heart of Las Vegas, known for its dazzling lights, luxurious hotels, and world-class entertainment. Visitors can experience the excitement of casinos, shows, and nightlife that make The Strip a top destination for travelers from around the world.",
        rating: 4.9,
      },
      {
        place_id: "lv2",
        display_name: "Fremont Street Experience",
        image_url: "/images/lv2.png",
        description:
          "Fremont Street Experience is a lively pedestrian mall in downtown Las Vegas, featuring a massive LED canopy, live music, and street performers. Visitors can enjoy the vibrant atmosphere, explore unique shops, and experience the thrill of the SlotZilla zipline.",
        rating: 4.7,
      },
      {
        place_id: "lv3",
        display_name: "Bellagio Fountains",
        image_url: "/images/lv3.png",
        description:
          "The Bellagio Fountains are an iconic Las Vegas attraction, offering mesmerizing water shows set to music and lights. Visitors can watch the stunning displays from various vantage points along the Strip, creating memorable moments in the heart of the city.",
        rating: 4.8,
      },
      {
        place_id: "lv4",
        display_name: "The Venetian",
        image_url: "/images/lv4.png",
        description:
          "The Venetian is a luxurious resort and casino that recreates the charm of Venice, Italy, with its canals, gondolas, and stunning architecture. Visitors can enjoy a romantic gondola ride, dine at world-class restaurants, and explore high-end shops in this lavish setting.",
        rating: 4.9,
      },
      {
        place_id: "lv5",
        display_name: "Hoover Dam",
        image_url: "/images/lv5.png",
        description:
          "Hoover Dam is a marvel of modern engineering, offering visitors a chance to learn about its history and significance. Tours provide insights into the dam's construction and operations, while the surrounding area offers breathtaking views of the Colorado River and Lake Mead.",
        rating: 4.7,
      },
    ],
    "Washington, D.C.": [
      {
        place_id: "dc1",
        display_name: "The White House",
        image_url: "/images/dc1.png",
        description:
          "The White House is the official residence and workplace of the President of the United States, symbolizing American leadership and history. Visitors can explore its storied past, admire its iconic architecture, and learn about its role in the nation's governance.",
        rating: 4.8,
      },
      {
        place_id: "dc2",
        display_name: "Lincoln Memorial",
        image_url: "/images/dc2.png",
        description:
          "The Lincoln Memorial honors Abraham Lincoln, the 16th President of the United States, with a majestic statue and inspiring inscriptions. Visitors can reflect on Lincoln's legacy and enjoy panoramic views of the National Mall from this revered monument.",
        rating: 4.9,
      },
      {
        place_id: "dc3",
        display_name: "Smithsonian National Air and Space Museum",
        image_url: "/images/dc3.png",
        description:
          "The Smithsonian National Air and Space Museum showcases the history and technology of aviation and space exploration. Visitors can marvel at historic aircraft, spacecraft, and interactive exhibits that inspire curiosity and wonder about the universe.",
        rating: 4.7,
      },
      {
        place_id: "dc4",
        display_name: "United States Capitol",
        image_url: "/images/dc4.png",
        description:
          "The United States Capitol is the home of the U.S. Congress and a symbol of the American government. Visitors can tour its historic chambers, learn about the legislative process, and appreciate the stunning architecture and art that adorn this national landmark.",
        rating: 4.8,
      },
      {
        place_id: "dc5",
        display_name: "National Mall",
        image_url: "/images/dc5.png",
        description:
          "The National Mall is a grand open space in Washington, D.C., lined with iconic monuments, memorials, and museums. Visitors can explore the rich history and culture of the United States, enjoy leisurely walks, and participate in events and activities.",
        rating: 4.9,
      },
    ],
    Orlando: [
      {
        place_id: "or1",
        display_name: "Walt Disney World",
        image_url: "/images/or1.png",
        description:
          "Walt Disney World is a magical resort complex offering four theme parks, two water parks, and countless entertainment options. Visitors can immerse themselves in enchanting experiences, meet beloved characters, and create unforgettable memories in this fantasy-filled destination.",
        rating: 4.9,
      },
      {
        place_id: "or2",
        display_name: "Universal Studios Florida",
        image_url: "/images/or2.png",
        description:
          "Universal Studios Florida brings movies and TV shows to life with thrilling rides, interactive attractions, and live entertainment. Visitors can step into their favorite stories, encounter beloved characters, and enjoy a day of action-packed fun and adventure.",
        rating: 4.8,
      },
      {
        place_id: "or3",
        display_name: "SeaWorld Orlando",
        image_url: "/images/or3.png",
        description:
          "SeaWorld Orlando offers marine life exhibits, thrilling rides, and engaging shows that educate and entertain. Visitors can learn about ocean conservation, interact with marine animals, and experience the excitement of roller coasters and water attractions.",
        rating: 4.7,
      },
      {
        place_id: "or4",
        display_name: "Epcot",
        image_url: "/images/or4.png",
        description:
          "Epcot is a unique theme park at Walt Disney World that celebrates human achievement and innovation. Visitors can explore futuristic attractions, experience cultural pavilions from around the world, and enjoy festivals that highlight food, art, and technology.",
        rating: 4.8,
      },
      {
        place_id: "or5",
        display_name: "Magic Kingdom",
        image_url: "/images/or5.png",
        description:
          "Magic Kingdom is the most iconic park at Walt Disney World, known for its fairy tale castles, classic attractions, and enchanting parades. Visitors can meet Disney characters, experience beloved rides, and enjoy fireworks that light up the night sky.",
        rating: 4.9,
      },
    ],
    Boston: [
      {
        place_id: "bo1",
        display_name: "Freedom Trail",
        image_url: "/images/bo1.png",
        description:
          "The Freedom Trail is a 2.5-mile-long path through downtown Boston that passes by significant historical sites. Visitors can walk the trail to learn about the American Revolution, visit historic landmarks, and immerse themselves in the rich history of Boston.",
        rating: 4.8,
      },
      {
        place_id: "bo2",
        display_name: "Fenway Park",
        image_url: "/images/bo2.png",
        description:
          "Fenway Park is one of the most famous baseball stadiums in the United States, home to the Boston Red Sox. Visitors can tour the historic ballpark, learn about its storied past, and experience the excitement of a live baseball game in this beloved venue.",
        rating: 4.7,
      },
      {
        place_id: "bo3",
        display_name: "Boston Common",
        image_url: "/images/bo3.png",
        description:
          "Boston Common is the oldest public park in the United States, offering a peaceful green space in the heart of the city. Visitors can enjoy leisurely strolls, picnics, and seasonal activities in this historic park that has been a gathering place for centuries.",
        rating: 4.6,
      },
      {
        place_id: "bo4",
        display_name: "New England Aquarium",
        image_url: "/images/bo4.png",
        description:
          "The New England Aquarium is a world-renowned marine science institution featuring a diverse array of marine life exhibits. Visitors can explore the central aquarium tank, watch sea lion shows, and learn about ocean conservation efforts through interactive displays.",
        rating: 4.8,
      },
      {
        place_id: "bo5",
        display_name: "Museum of Fine Arts, Boston",
        image_url: "/images/bo5.png",
        description:
          "The Museum of Fine Arts, Boston, is one of the largest art museums in the United States, with a vast collection spanning thousands of years. Visitors can admire works from ancient civilizations to contemporary artists, participate in educational programs, and enjoy special exhibitions.",
        rating: 4.9,
      },
    ],
    "New Orleans": [
      {
        place_id: "no1",
        display_name: "French Quarter",
        image_url: "/images/no1.png",
        description:
          "The French Quarter is the oldest neighborhood in New Orleans, known for its vibrant nightlife, historic architecture, and rich cultural heritage. Visitors can explore its narrow streets, enjoy jazz music, and savor the unique flavors of Creole and Cajun cuisine.",
        rating: 4.8,
      },
      {
        place_id: "no2",
        display_name: "Bourbon Street",
        image_url: "/images/no2.png",
        description:
          "Bourbon Street is the heart of New Orleans' nightlife, famous for its lively bars, clubs, and street performances. Visitors can experience the energetic atmosphere, enjoy live music, and participate in the festivities that make Bourbon Street a must-visit destination.",
        rating: 4.7,
      },
      {
        place_id: "no3",
        display_name: "Jackson Square",
        image_url: "/images/no3.png",
        description:
          "Jackson Square is a historic park in the French Quarter, surrounded by stunning architecture and vibrant street life. Visitors can admire the St. Louis Cathedral, browse local art, and relax in the picturesque surroundings of this central New Orleans landmark.",
        rating: 4.6,
      },
      {
        place_id: "no4",
        display_name: "St. Louis Cathedral",
        image_url: "/images/no4.png",
        description:
          "St. Louis Cathedral is the oldest continuously active Roman Catholic cathedral in the United States, located in Jackson Square. Visitors can explore its beautiful interior, learn about its history, and appreciate the architectural beauty of this iconic New Orleans landmark.",
        rating: 4.8,
      },
      {
        place_id: "no5",
        display_name: "Garden District",
        image_url: "/images/no5.png",
        description:
          "The Garden District is a charming neighborhood known for its historic mansions, lush gardens, and oak-lined streets. Visitors can take guided tours, admire the stunning architecture, and enjoy the peaceful ambiance of this picturesque area.",
        rating: 4.7,
      },
    ],
    Seattle: [
      {
        place_id: "se1",
        display_name: "Space Needle",
        image_url: "/images/se1.png",
        description:
          "The Space Needle is an iconic observation tower offering panoramic views of Seattle and its surrounding landscapes. Visitors can take an elevator ride to the top, dine in the revolving restaurant, and enjoy breathtaking vistas of the city, mountains, and waterways.",
        rating: 4.8,
      },
      {
        place_id: "se2",
        display_name: "Pike Place Market",
        image_url: "/images/se2.png",
        description:
          "Pike Place Market is a historic public market overlooking Elliott Bay, famous for its fresh seafood, local produce, and unique shops. Visitors can watch the fishmongers throw fish, browse artisan crafts, and savor the diverse culinary offerings in this bustling market.",
        rating: 4.7,
      },
      {
        place_id: "se3",
        display_name: "Chihuly Garden and Glass",
        image_url: "/images/se3.png",
        description:
          "Chihuly Garden and Glass showcases the stunning glass artwork of Dale Chihuly. Visitors can explore the vibrant indoor galleries, stroll through the beautifully landscaped gardens, and marvel at the intricate glass sculptures that transform the space into a visual wonderland.",
        rating: 4.9,
      },
      {
        place_id: "se4",
        display_name: "Museum of Pop Culture",
        image_url: "/images/se4.png",
        description:
          "The Museum of Pop Culture is dedicated to contemporary popular culture, featuring exhibits on music, film, and video games. Visitors can explore interactive installations, view iconic artifacts, and celebrate the creativity and innovation that define modern pop culture.",
        rating: 4.8,
      },
      {
        place_id: "se5",
        display_name: "Seattle Aquarium",
        image_url: "/images/se5.png",
        description:
          "The Seattle Aquarium offers a window into the marine life of the Pacific Northwest. Visitors can view exhibits featuring local sea creatures, participate in interactive experiences, and learn about ocean conservation efforts through engaging programs and displays.",
        rating: 4.6,
      },
    ],
  },
  Germany: {
    Berlin: [
      {
        place_id: "de1",
        display_name: "Brandenburg Gate",
        image_url: "/images/de1.png",
      },
      {
        place_id: "de2",
        display_name: "Berlin TV Tower",
        image_url: "/images/de2.png",
      },
      {
        place_id: "de3",
        display_name: "Reichstag Building",
        image_url: "/images/de3.png",
      },
      {
        place_id: "de4",
        display_name: "Berlin Wall Memorial",
        image_url: "/images/de4.png",
      },
      {
        place_id: "de5",
        display_name: "Museum Island",
        image_url: "/images/de5.png",
      },
    ],
    Munich: [
      {
        place_id: "mu1",
        display_name: "Marienplatz",
        image_url: "/images/mu1.png",
      },
      {
        place_id: "mu2",
        display_name: "English Garden",
        image_url: "/images/mu2.png",
      },
      {
        place_id: "mu3",
        display_name: "Nymphenburg Palace",
        image_url: "/images/mu3.png",
      },
      {
        place_id: "mu4",
        display_name: "BMW Museum",
        image_url: "/images/mu4.png",
      },
      {
        place_id: "mu5",
        display_name: "Olympiapark",
        image_url: "/images/mu5.png",
      },
    ],
    Hamburg: [
      {
        place_id: "ha1",
        display_name: "Miniatur Wunderland",
        image_url: "/images/ha1.png",
      },
      {
        place_id: "ha2",
        display_name: "Elbphilharmonie",
        image_url: "/images/ha2.png",
      },
      {
        place_id: "ha3",
        display_name: "Hamburg Harbor",
        image_url: "/images/ha3.png",
      },
      {
        place_id: "ha4",
        display_name: "Speicherstadt",
        image_url: "/images/ha4.png",
      },
      {
        place_id: "ha5",
        display_name: "St. Michael's Church",
        image_url: "/images/ha5.png",
      },
    ],
    Frankfurt: [
      {
        place_id: "fr1",
        display_name: "Römer",
        image_url: "/images/fr1.png",
      },
      {
        place_id: "fr2",
        display_name: "Main Tower",
        image_url: "/images/fr2.png",
      },
      {
        place_id: "fr3",
        display_name: "Palmengarten",
        image_url: "/images/fr3.png",
      },
      {
        place_id: "fr4",
        display_name: "Städel Museum",
        image_url: "/images/fr4.png",
      },
      {
        place_id: "fr5",
        display_name: "Frankfurt Cathedral",
        image_url: "/images/fr5.png",
      },
    ],
    Cologne: [
      {
        place_id: "co1",
        display_name: "Cologne Cathedral",
        image_url: "/images/co1.png",
      },
      {
        place_id: "co2",
        display_name: "Hohenzollern Bridge",
        image_url: "/images/co2.png",
      },
      {
        place_id: "co3",
        display_name: "Museum Ludwig",
        image_url: "/images/co3.png",
      },
      {
        place_id: "co4",
        display_name: "Cologne Old Town",
        image_url: "/images/co4.png",
      },
      {
        place_id: "co5",
        display_name: "Cologne Zoo",
        image_url: "/images/co5.png",
      },
    ],
    Stuttgart: [
      {
        place_id: "st1",
        display_name: "Mercedes-Benz Museum",
        image_url: "/images/st1.png",
      },
      {
        place_id: "st2",
        display_name: "Porsche Museum",
        image_url: "/images/st2.png",
      },
      {
        place_id: "st3",
        display_name: "Wilhelma Zoo and Botanical Garden",
        image_url: "/images/st3.png",
      },
      {
        place_id: "st4",
        display_name: "Stuttgart TV Tower",
        image_url: "/images/st4.png",
      },
      {
        place_id: "st5",
        display_name: "Königstraße",
        image_url: "/images/st5.png",
      },
    ],
    Dresden: [
      {
        place_id: "dr1",
        display_name: "Zwinger",
        image_url: "/images/dr1.png",
      },
      {
        place_id: "dr2",
        display_name: "Frauenkirche",
        image_url: "/images/dr2.png",
      },
      {
        place_id: "dr3",
        display_name: "Semperoper",
        image_url: "/images/dr3.png",
      },
      {
        place_id: "dr4",
        display_name: "Dresden Castle",
        image_url: "/images/dr4.png",
      },
      {
        place_id: "dr5",
        display_name: "Pillnitz Castle",
        image_url: "/images/dr5.png",
      },
    ],
    Leipzig: [
      {
        place_id: "le1",
        display_name: "Monument to the Battle of the Nations",
        image_url: "/images/le1.png",
      },
      {
        place_id: "le2",
        display_name: "St. Thomas Church",
        image_url: "/images/le2.png",
      },
      {
        place_id: "le3",
        display_name: "Leipzig Zoo",
        image_url: "/images/le3.png",
      },
      {
        place_id: "le4",
        display_name: "Leipzig Panometer",
        image_url: "/images/le4.png",
      },
      {
        place_id: "le5",
        display_name: "Grassi Museum",
        image_url: "/images/le5.png",
      },
    ],
    Düsseldorf: [
      {
        place_id: "du1",
        display_name: "Königsallee",
        image_url: "/images/du1.png",
      },
      {
        place_id: "du2",
        display_name: "Rhine Tower",
        image_url: "/images/du2.png",
      },
      {
        place_id: "du3",
        display_name: "MedienHafen",
        image_url: "/images/du3.png",
      },
      {
        place_id: "du4",
        display_name: "Düsseldorf Old Town",
        image_url: "/images/du4.png",
      },
      {
        place_id: "du5",
        display_name: "Benrath Palace",
        image_url: "/images/du5.png",
      },
    ],
    Nuremberg: [
      {
        place_id: "nu1",
        display_name: "Nuremberg Castle",
        image_url: "/images/nu1.png",
      },
      {
        place_id: "nu2",
        display_name: "Nuremberg Zoo",
        image_url: "/images/nu2.png",
      },
      {
        place_id: "nu3",
        display_name: "Albrecht Dürer's House",
        image_url: "/images/nu3.png",
      },
      {
        place_id: "nu4",
        display_name: "Nuremberg Old Town",
        image_url: "/images/nu4.png",
      },
      {
        place_id: "nu5",
        display_name: "Documentation Center Nazi Party Rally Grounds",
        image_url: "/images/nu5.png",
      },
    ],
    Heidelberg: [
      {
        place_id: "he1",
        display_name: "Heidelberg Castle",
        image_url: "/images/he1.png",
      },
      {
        place_id: "he2",
        display_name: "Old Bridge Heidelberg",
        image_url: "/images/he2.png",
      },
      {
        place_id: "he3",
        display_name: "Philosopher's Walk",
        image_url: "/images/he3.png",
      },
      {
        place_id: "he4",
        display_name: "Heidelberg University",
        image_url: "/images/he4.png",
      },
      {
        place_id: "he5",
        display_name: "Königstuhl",
        image_url: "/images/he5.png",
      },
    ],
    Bremen: [
      {
        place_id: "br1",
        display_name: "Bremen Town Musicians",
        image_url: "/images/br1.png",
      },
      {
        place_id: "br2",
        display_name: "Schnoor Quarter",
        image_url: "/images/br2.png",
      },
      {
        place_id: "br3",
        display_name: "Bremen Roland",
        image_url: "/images/br3.png",
      },
      {
        place_id: "br4",
        display_name: "Bremen Cathedral",
        image_url: "/images/br4.png",
      },
      {
        place_id: "br5",
        display_name: "Übersee-Museum",
        image_url: "/images/br5.png",
      },
    ],
    Hanover: [
      {
        place_id: "ha1",
        display_name: "Herrenhausen Gardens",
        image_url: "/images/ha1.png",
      },
      {
        place_id: "ha2",
        display_name: "New Town Hall",
        image_url: "/images/ha2.png",
      },
      {
        place_id: "ha3",
        display_name: "Maschsee",
        image_url: "/images/ha3.png",
      },
      {
        place_id: "ha4",
        display_name: "Hanover Zoo",
        image_url: "/images/ha4.png",
      },
      {
        place_id: "ha5",
        display_name: "Sprengel Museum",
        image_url: "/images/ha5.png",
      },
    ],
    Freiburg: [
      {
        place_id: "fr1",
        display_name: "Freiburg Minster",
        image_url: "/images/fr1.png",
      },
      {
        place_id: "fr2",
        display_name: "Schwabentor",
        image_url: "/images/fr2.png",
      },
      {
        place_id: "fr3",
        display_name: "Augustiner Museum",
        image_url: "/images/fr3.png",
      },
      {
        place_id: "fr4",
        display_name: "Schlossberg",
        image_url: "/images/fr4.png",
      },
      {
        place_id: "fr5",
        display_name: "Munsterplatz",
        image_url: "/images/fr5.png",
      },
    ],
    Potsdam: [
      {
        place_id: "po1",
        display_name: "Sanssouci Palace",
        image_url: "/images/po1.png",
      },
      {
        place_id: "po2",
        display_name: "Cecilienhof Palace",
        image_url: "/images/po2.png",
      },
      {
        place_id: "po3",
        display_name: "New Palace",
        image_url: "/images/po3.png",
      },
      {
        place_id: "po4",
        display_name: "Babelsberg Palace",
        image_url: "/images/po4.png",
      },
      {
        place_id: "po5",
        display_name: "Dutch Quarter",
        image_url: "/images/po5.png",
      },
    ],
    Augsburg: [
      {
        place_id: "au1",
        display_name: "Fuggerei",
        image_url: "/images/au1.png",
      },
      {
        place_id: "au2",
        display_name: "Augsburg Town Hall",
        image_url: "/images/au2.png",
      },
      {
        place_id: "au3",
        display_name: "Perlachturm",
        image_url: "/images/au3.png",
      },
      {
        place_id: "au4",
        display_name: "Augsburg Cathedral",
        image_url: "/images/au4.png",
      },
      {
        place_id: "au5",
        display_name: "Schaezlerpalais",
        image_url: "/images/au5.png",
      },
    ],
    "Rothenburg ob der Tauber": [
      {
        place_id: "ro1",
        display_name: "Rothenburg Town Hall",
        image_url: "/images/ro1.png",
      },
      {
        place_id: "ro2",
        display_name: "Plönlein",
        image_url: "/images/ro2.png",
      },
      {
        place_id: "ro3",
        display_name: "St. James's Church",
        image_url: "/images/ro3.png",
      },
      {
        place_id: "ro4",
        display_name: "Medieval Crime Museum",
        image_url: "/images/ro4.png",
      },
      {
        place_id: "ro5",
        display_name: "Burggarten",
        image_url: "/images/ro5.png",
      },
    ],
    Würzburg: [
      {
        place_id: "wu1",
        display_name: "Würzburg Residence",
        image_url: "/images/wu1.png",
      },
      {
        place_id: "wu2",
        display_name: "Marienberg Fortress",
        image_url: "/images/wu2.png",
      },
      {
        place_id: "wu3",
        display_name: "Alte Mainbrücke",
        image_url: "/images/wu3.png",
      },
      {
        place_id: "wu4",
        display_name: "Würzburg Cathedral",
        image_url: "/images/wu4.png",
      },
      {
        place_id: "wu5",
        display_name: "Käppele Sanctuary",
        image_url: "/images/wu5.png",
      },
    ],
  },
  France: {
    Paris: [
      {
        place_id: "pa1",
        display_name: "Eiffel Tower",
        image_url: "/images/pa1.png",
      },
      {
        place_id: "pa2",
        display_name: "Louvre Museum",
        image_url: "/images/pa2.png",
      },
      {
        place_id: "pa3",
        display_name: "Notre-Dame Cathedral",
        image_url: "/images/pa3.png",
      },
      {
        place_id: "pa4",
        display_name: "Arc de Triomphe",
        image_url: "/images/pa4.png",
      },
      {
        place_id: "pa5",
        display_name: "Sacré-Cœur Basilica",
        image_url: "/images/pa5.png",
      },
    ],
    Nice: [
      {
        place_id: "ni1",
        display_name: "Promenade des Anglais",
        image_url: "/images/ni1.png",
      },
      {
        place_id: "ni2",
        display_name: "Castle Hill",
        image_url: "/images/ni2.png",
      },
      {
        place_id: "ni3",
        display_name: "Marc Chagall National Museum",
        image_url: "/images/ni3.png",
      },
      {
        place_id: "ni4",
        display_name: "Old Town (Vieux Nice)",
        image_url: "/images/ni4.png",
      },
      {
        place_id: "ni5",
        display_name: "Nice Cathedral",
        image_url: "/images/ni5.png",
      },
    ],
    Lyon: [
      {
        place_id: "ly1",
        display_name: "Basilica of Notre-Dame de Fourvière",
        image_url: "/images/ly1.png",
      },
      {
        place_id: "ly2",
        display_name: "Parc de la Tête d'Or",
        image_url: "/images/ly2.png",
      },
      {
        place_id: "ly3",
        display_name: "Lyon Cathedral",
        image_url: "/images/ly3.png",
      },
      {
        place_id: "ly4",
        display_name: "Place Bellecour",
        image_url: "/images/ly4.png",
      },
      {
        place_id: "ly5",
        display_name: "Museum of Fine Arts of Lyon",
        image_url: "/images/ly5.png",
      },
    ],
    Marseille: [
      {
        place_id: "ma1",
        display_name: "Old Port of Marseille",
        image_url: "/images/ma1.png",
      },
      {
        place_id: "ma2",
        display_name: "Basilica of Notre-Dame de la Garde",
        image_url: "/images/ma2.png",
      },
      {
        place_id: "ma3",
        display_name: "Calanques National Park",
        image_url: "/images/ma3.png",
      },
      {
        place_id: "ma4",
        display_name: "Le Panier",
        image_url: "/images/ma4.png",
      },
      {
        place_id: "ma5",
        display_name: "Museum of European and Mediterranean Civilizations",
        image_url: "/images/ma5.png",
      },
    ],
    Bordeaux: [
      {
        place_id: "bo1",
        display_name: "Place de la Bourse",
        image_url: "/images/bo1.png",
      },
      {
        place_id: "bo2",
        display_name: "The Water Mirror",
        image_url: "/images/bo2.png",
      },
      {
        place_id: "bo3",
        display_name: "Bordeaux Cathedral",
        image_url: "/images/bo3.png",
      },
      {
        place_id: "bo4",
        display_name: "Cité du Vin",
        image_url: "/images/bo4.png",
      },
      {
        place_id: "bo5",
        display_name: "Pont de Pierre",
        image_url: "/images/bo5.png",
      },
    ],
    Toulouse: [
      {
        place_id: "to1",
        display_name: "Capitole de Toulouse",
        image_url: "/images/to1.png",
      },
      {
        place_id: "to2",
        display_name: "Basilica of Saint-Sernin",
        image_url: "/images/to2.png",
      },
      {
        place_id: "to3",
        display_name: "Cité de l'Espace",
        image_url: "/images/to3.png",
      },
      {
        place_id: "to4",
        display_name: "Musée des Augustins",
        image_url: "/images/to4.png",
      },
      {
        place_id: "to5",
        display_name: "Pont Neuf",
        image_url: "/images/to5.png",
      },
    ],
    Lille: [
      {
        place_id: "li1",
        display_name: "Grand Place",
        image_url: "/images/li1.png",
      },
      {
        place_id: "li2",
        display_name: "Palais des Beaux-Arts de Lille",
        image_url: "/images/li2.png",
      },
      {
        place_id: "li3",
        display_name: "Vieille Bourse",
        image_url: "/images/li3.png",
      },
      {
        place_id: "li4",
        display_name: "Lille Cathedral",
        image_url: "/images/li4.png",
      },
      {
        place_id: "li5",
        display_name: "Citadel of Lille",
        image_url: "/images/li5.png",
      },
    ],
    Strasbourg: [
      {
        place_id: "st1",
        display_name: "Strasbourg Cathedral",
        image_url: "/images/st1.png",
      },
      {
        place_id: "st2",
        display_name: "Petite France",
        image_url: "/images/st2.png",
      },
      {
        place_id: "st3",
        display_name: "European Parliament",
        image_url: "/images/st3.png",
      },
      {
        place_id: "st4",
        display_name: "Palais Rohan",
        image_url: "/images/st4.png",
      },
      {
        place_id: "st5",
        display_name: "Barrage Vauban",
        image_url: "/images/st5.png",
      },
    ],
    Montpellier: [
      {
        place_id: "mo1",
        display_name: "Place de la Comédie",
        image_url: "/images/mo1.png",
      },
      {
        place_id: "mo2",
        display_name: "Montpellier Cathedral",
        image_url: "/images/mo2.png",
      },
      {
        place_id: "mo3",
        display_name: "Musée Fabre",
        image_url: "/images/mo3.png",
      },
      {
        place_id: "mo4",
        display_name: "Promenade du Peyrou",
        image_url: "/images/mo4.png",
      },
      {
        place_id: "mo5",
        display_name: "Jardin des Plantes",
        image_url: "/images/mo5.png",
      },
    ],
    Nantes: [
      {
        place_id: "na1",
        display_name: "Les Machines de l'île",
        image_url: "/images/na1.png",
      },
      {
        place_id: "na2",
        display_name: "Château des Ducs de Bretagne",
        image_url: "/images/na2.png",
      },
      {
        place_id: "na3",
        display_name: "Nantes Cathedral",
        image_url: "/images/na3.png",
      },
      {
        place_id: "na4",
        display_name: "Jardin des Plantes",
        image_url: "/images/na4.png",
      },
      {
        place_id: "na5",
        display_name: "Passage Pommeraye",
        image_url: "/images/na5.png",
      },
    ],
    Rennes: [
      {
        place_id: "re1",
        display_name: "Parlement de Bretagne",
        image_url: "/images/re1.png",
      },
      {
        place_id: "re2",
        display_name: "Rennes Cathedral",
        image_url: "/images/re2.png",
      },
      {
        place_id: "re3",
        display_name: "Thabor Park",
        image_url: "/images/re3.png",
      },
      {
        place_id: "re4",
        display_name: "Place des Lices",
        image_url: "/images/re4.png",
      },
      {
        place_id: "re5",
        display_name: "Les Champs Libres",
        image_url: "/images/re5.png",
      },
    ],
    Cannes: [
      {
        place_id: "ca1",
        display_name: "La Croisette",
        image_url: "/images/ca1.png",
      },
      {
        place_id: "ca2",
        display_name: "Palais des Festivals",
        image_url: "/images/ca2.png",
      },
      {
        place_id: "ca3",
        display_name: "Île Sainte-Marguerite",
        image_url: "/images/ca3.png",
      },
      {
        place_id: "ca4",
        display_name: "Le Suquet",
        image_url: "/images/ca4.png",
      },
      {
        place_id: "ca5",
        display_name: "Marché Forville",
        image_url: "/images/ca5.png",
      },
    ],
    Avignon: [
      {
        place_id: "av1",
        display_name: "Palais des Papes",
        image_url: "/images/av1.png",
      },
      {
        place_id: "av2",
        display_name: "Pont d'Avignon",
        image_url: "/images/av2.png",
      },
      {
        place_id: "av3",
        display_name: "Avignon Cathedral",
        image_url: "/images/av3.png",
      },
      {
        place_id: "av4",
        display_name: "Place de l'Horloge",
        image_url: "/images/av4.png",
      },
      {
        place_id: "av5",
        display_name: "Rocher des Doms",
        image_url: "/images/av5.png",
      },
    ],
    Rouen: [
      {
        place_id: "ro1",
        display_name: "Rouen Cathedral",
        image_url: "/images/ro1.png",
      },
      {
        place_id: "ro2",
        display_name: "Gros Horloge",
        image_url: "/images/ro2.png",
      },
      {
        place_id: "ro3",
        display_name: "Place du Vieux-Marché",
        image_url: "/images/ro3.png",
      },
      {
        place_id: "ro4",
        display_name: "Musée des Beaux-Arts de Rouen",
        image_url: "/images/ro4.png",
      },
      {
        place_id: "ro5",
        display_name: "Church of St. Joan of Arc",
        image_url: "/images/ro5.png",
      },
    ],
    Versailles: [
      {
        place_id: "ve1",
        display_name: "Palace of Versailles",
        image_url: "/images/ve1.png",
      },
      {
        place_id: "ve2",
        display_name: "Hall of Mirrors",
        image_url: "/images/ve2.png",
      },
      {
        place_id: "ve3",
        display_name: "Versailles Gardens",
        image_url: "/images/ve3.png",
      },
      {
        place_id: "ve4",
        display_name: "The Grand Trianon",
        image_url: "/images/ve4.png",
      },
      {
        place_id: "ve5",
        display_name: "The Royal Chapel",
        image_url: "/images/ve5.png",
      },
    ],
    "Aix-en-Provence": [
      {
        place_id: "ai1",
        display_name: "Cours Mirabeau",
        image_url: "/images/ai1.png",
      },
      {
        place_id: "ai2",
        display_name: "Saint-Sauveur Cathedral",
        image_url: "/images/ai2.png",
      },
      {
        place_id: "ai3",
        display_name: "Granet Museum",
        image_url: "/images/ai3.png",
      },
      {
        place_id: "ai4",
        display_name: "Place des Quatre Dauphins",
        image_url: "/images/ai4.png",
      },
      {
        place_id: "ai5",
        display_name: "Pavillon de Vendôme",
        image_url: "/images/ai5.png",
      },
    ],
    Antibes: [
      {
        place_id: "an1",
        display_name: "Musée Picasso",
        image_url: "/images/an1.png",
      },
      {
        place_id: "an2",
        display_name: "Fort Carré",
        image_url: "/images/an2.png",
      },
      {
        place_id: "an3",
        display_name: "Port Vauban",
        image_url: "/images/an3.png",
      },
      {
        place_id: "an4",
        display_name: "Cap d'Antibes",
        image_url: "/images/an4.png",
      },
      {
        place_id: "an5",
        display_name: "Marineland",
        image_url: "/images/an5.png",
      },
    ],
    Arles: [
      {
        place_id: "ar1",
        display_name: "Arles Amphitheatre",
        image_url: "/images/ar1.png",
      },
      {
        place_id: "ar2",
        display_name: "Church of St. Trophime",
        image_url: "/images/ar2.png",
      },
      {
        place_id: "ar3",
        display_name: "Alyscamps",
        image_url: "/images/ar3.png",
      },
      {
        place_id: "ar4",
        display_name: "Van Gogh Foundation",
        image_url: "/images/ar4.png",
      },
      {
        place_id: "ar5",
        display_name: "Luma Arles",
        image_url: "/images/ar5.png",
      },
    ],
    Biarritz: [
      {
        place_id: "bi1",
        display_name: "Rocher de la Vierge",
        image_url: "/images/bi1.png",
      },
      {
        place_id: "bi2",
        display_name: "Aquarium de Biarritz",
        image_url: "/images/bi2.png",
      },
      {
        place_id: "bi3",
        display_name: "Grande Plage",
        image_url: "/images/bi3.png",
      },
      {
        place_id: "bi4",
        display_name: "Cité de l'Océan",
        image_url: "/images/bi4.png",
      },
      {
        place_id: "bi5",
        display_name: "Biarritz Lighthouse",
        image_url: "/images/bi5.png",
      },
    ],
    Toulon: [
      {
        place_id: "tl1",
        display_name: "Mont Faron",
        image_url: "/images/tl1.png",
      },
      {
        place_id: "tl2",
        display_name: "Toulon Cathedral",
        image_url: "/images/tl2.png",
      },
      {
        place_id: "tl3",
        display_name: "Musée National de la Marine",
        image_url: "/images/tl3.png",
      },
      {
        place_id: "tl4",
        display_name: "Anse Méjean",
        image_url: "/images/tl4.png",
      },
      {
        place_id: "tl5",
        display_name: "Place de la Liberté",
        image_url: "/images/tl5.png",
      },
    ],
    Grenoble: [
      {
        place_id: "gr1",
        display_name: "Grenoble Bastille",
        image_url: "/images/gr1.png",
      },
      {
        place_id: "gr2",
        display_name: "Musée de Grenoble",
        image_url: "/images/gr2.png",
      },
      {
        place_id: "gr3",
        display_name: "Parc Paul Mistral",
        image_url: "/images/gr3.png",
      },
      {
        place_id: "gr4",
        display_name: "Grenoble Archaeological Museum",
        image_url: "/images/gr4.png",
      },
      {
        place_id: "gr5",
        display_name: "Place Grenette",
        image_url: "/images/gr5.png",
      },
    ],
  },
  Japan: {
    Tokyo: [
      {
        place_id: "tok1",
        display_name: "Shibuya Crossing",
        image_url: "/images/tok1.png",
      },
      {
        place_id: "tok2",
        display_name: "Tokyo Tower",
        image_url: "/images/tok2.png",
      },
      {
        place_id: "tok3",
        display_name: "Sensō-ji Temple",
        image_url: "/images/tok3.png",
      },
      {
        place_id: "tok4",
        display_name: "Tokyo Skytree",
        image_url: "/images/tok4.png",
      },
      {
        place_id: "tok5",
        display_name: "Meiji Shrine",
        image_url: "/images/tok5.png",
      },
    ],
    Kyoto: [
      {
        place_id: "ky1",
        display_name: "Fushimi Inari Shrine",
        image_url: "/images/ky1.png",
      },
      {
        place_id: "ky2",
        display_name: "Kinkaku-ji (Golden Pavilion)",
        image_url: "/images/ky2.png",
      },
      {
        place_id: "ky3",
        display_name: "Arashiyama Bamboo Grove",
        image_url: "/images/ky3.png",
      },
      {
        place_id: "ky4",
        display_name: "Kiyomizu-dera Temple",
        image_url: "/images/ky4.png",
      },
      {
        place_id: "ky5",
        display_name: "Nijō Castle",
        image_url: "/images/ky5.png",
      },
    ],
    Osaka: [
      {
        place_id: "os1",
        display_name: "Osaka Castle",
        image_url: "/images/os1.png",
      },
      {
        place_id: "os2",
        display_name: "Dotonbori",
        image_url: "/images/os2.png",
      },
      {
        place_id: "os3",
        display_name: "Universal Studios Japan",
        image_url: "/images/os3.png",
      },
      {
        place_id: "os4",
        display_name: "Umeda Sky Building",
        image_url: "/images/os4.png",
      },
      {
        place_id: "os5",
        display_name: "Shinsekai",
        image_url: "/images/os5.png",
      },
    ],
    Hiroshima: [
      {
        place_id: "hi1",
        display_name: "Hiroshima Peace Memorial Park",
        image_url: "/images/hi1.png",
      },
      {
        place_id: "hi2",
        display_name: "Atomic Bomb Dome",
        image_url: "/images/hi2.png",
      },
      {
        place_id: "hi3",
        display_name: "Itsukushima Shrine",
        image_url: "/images/hi3.png",
      },
      {
        place_id: "hi4",
        display_name: "Hiroshima Castle",
        image_url: "/images/hi4.png",
      },
      {
        place_id: "hi5",
        display_name: "Shukkei-en Garden",
        image_url: "/images/hi5.png",
      },
    ],
    Nagoya: [
      {
        place_id: "na1",
        display_name: "Nagoya Castle",
        image_url: "/images/na1.png",
      },
      {
        place_id: "na2",
        display_name: "Atsuta Shrine",
        image_url: "/images/na2.png",
      },
      {
        place_id: "na3",
        display_name: "Nagoya City Science Museum",
        image_url: "/images/na3.png",
      },
      {
        place_id: "na4",
        display_name: "Osu Shopping District",
        image_url: "/images/na4.png",
      },
      {
        place_id: "na5",
        display_name: "Toyota Commemorative Museum",
        image_url: "/images/na5.png",
      },
    ],
    Nara: [
      {
        place_id: "nr1",
        display_name: "Tōdai-ji Temple",
        image_url: "/images/nr1.png",
      },
      {
        place_id: "nr2",
        display_name: "Nara Park",
        image_url: "/images/nr2.png",
      },
      {
        place_id: "nr3",
        display_name: "Kasuga-taisha Shrine",
        image_url: "/images/nr3.png",
      },
      {
        place_id: "nr4",
        display_name: "Kōfuku-ji Temple",
        image_url: "/images/nr4.png",
      },
      {
        place_id: "nr5",
        display_name: "Naramachi",
        image_url: "/images/nr5.png",
      },
    ],
    Sapporo: [
      {
        place_id: "sa1",
        display_name: "Odori Park",
        image_url: "/images/sa1.png",
      },
      {
        place_id: "sa2",
        display_name: "Sapporo Clock Tower",
        image_url: "/images/sa2.png",
      },
      {
        place_id: "sa3",
        display_name: "Sapporo Beer Museum",
        image_url: "/images/sa3.png",
      },
      {
        place_id: "sa4",
        display_name: "Mount Moiwa",
        image_url: "/images/sa4.png",
      },
      {
        place_id: "sa5",
        display_name: "Hokkaido Shrine",
        image_url: "/images/sa5.png",
      },
    ],
    Fukuoka: [
      {
        place_id: "fu1",
        display_name: "Ohori Park",
        image_url: "/images/fu1.png",
      },
      {
        place_id: "fu2",
        display_name: "Fukuoka Castle",
        image_url: "/images/fu2.png",
      },
      {
        place_id: "fu3",
        display_name: "Canal City Hakata",
        image_url: "/images/fu3.png",
      },
      {
        place_id: "fu4",
        display_name: "Kushida Shrine",
        image_url: "/images/fu4.png",
      },
      {
        place_id: "fu5",
        display_name: "Fukuoka Tower",
        image_url: "/images/fu5.png",
      },
    ],
    Kobe: [
      {
        place_id: "ko1",
        display_name: "Kobe Harborland",
        image_url: "/images/ko1.png",
      },
      {
        place_id: "ko2",
        display_name: "Kobe Port Tower",
        image_url: "/images/ko2.png",
      },
      {
        place_id: "ko3",
        display_name: "Kobe Animal Kingdom",
        image_url: "/images/ko3.png",
      },
      {
        place_id: "ko4",
        display_name: "Ikuta Shrine",
        image_url: "/images/ko4.png",
      },
      {
        place_id: "ko5",
        display_name: "Nunobiki Herb Garden",
        image_url: "/images/ko5.png",
      },
    ],
    Yokohama: [
      {
        place_id: "yo1",
        display_name: "Minato Mirai 21",
        image_url: "/images/yo1.png",
      },
      {
        place_id: "yo2",
        display_name: "Yokohama Chinatown",
        image_url: "/images/yo2.png",
      },
      {
        place_id: "yo3",
        display_name: "Sankeien Garden",
        image_url: "/images/yo3.png",
      },
      {
        place_id: "yo4",
        display_name: "Cup Noodles Museum",
        image_url: "/images/yo4.png",
      },
      {
        place_id: "yo5",
        display_name: "Landmark Tower",
        image_url: "/images/yo5.png",
      },
    ],
    Kanazawa: [
      {
        place_id: "ka1",
        display_name: "Kenroku-en Garden",
        image_url: "/images/ka1.png",
      },
      {
        place_id: "ka2",
        display_name: "Kanazawa Castle",
        image_url: "/images/ka2.png",
      },
      {
        place_id: "ka3",
        display_name: "Higashi Chaya District",
        image_url: "/images/ka3.png",
      },
      {
        place_id: "ka4",
        display_name: "21st Century Museum of Contemporary Art",
        image_url: "/images/ka4.png",
      },
      {
        place_id: "ka5",
        display_name: "Nagamachi Samurai District",
        image_url: "/images/ka5.png",
      },
    ],
    Nagasaki: [
      {
        place_id: "na1",
        display_name: "Glover Garden",
        image_url: "/images/na1.png",
      },
      {
        place_id: "na2",
        display_name: "Nagasaki Peace Park",
        image_url: "/images/na2.png",
      },
      {
        place_id: "na3",
        display_name: "Oura Church",
        image_url: "/images/na3.png",
      },
      {
        place_id: "na4",
        display_name: "Dejima",
        image_url: "/images/na4.png",
      },
      {
        place_id: "na5",
        display_name: "Nagasaki Chinatown",
        image_url: "/images/na5.png",
      },
    ],
    Hakone: [
      {
        place_id: "ha1",
        display_name: "Hakone Shrine",
        image_url: "/images/ha1.png",
      },
      {
        place_id: "ha2",
        display_name: "Lake Ashi",
        image_url: "/images/ha2.png",
      },
      {
        place_id: "ha3",
        display_name: "Hakone Open-Air Museum",
        image_url: "/images/ha3.png",
      },
      {
        place_id: "ha4",
        display_name: "Ōwakudani",
        image_url: "/images/ha4.png",
      },
      {
        place_id: "ha5",
        display_name: "Gora Park",
        image_url: "/images/ha5.png",
      },
    ],
    Kamakura: [
      {
        place_id: "ka1",
        display_name: "Great Buddha of Kamakura",
        image_url: "/images/ka1.png",
      },
      {
        place_id: "ka2",
        display_name: "Tsurugaoka Hachimangu Shrine",
        image_url: "/images/ka2.png",
      },
      {
        place_id: "ka3",
        display_name: "Hase-dera Temple",
        image_url: "/images/ka3.png",
      },
      {
        place_id: "ka4",
        display_name: "Enoshima Island",
        image_url: "/images/ka4.png",
      },
      {
        place_id: "ka5",
        display_name: "Zeniarai Benten Shrine",
        image_url: "/images/ka5.png",
      },
    ],
    Takayama: [
      {
        place_id: "ta1",
        display_name: "Sanmachi Suji",
        image_url: "/images/ta1.png",
      },
      {
        place_id: "ta2",
        display_name: "Takayama Jinya",
        image_url: "/images/ta2.png",
      },
      {
        place_id: "ta3",
        display_name: "Hida Folk Village",
        image_url: "/images/ta3.png",
      },
      {
        place_id: "ta4",
        display_name: "Takayama Festival Floats Exhibition Hall",
        image_url: "/images/ta4.png",
      },
      {
        place_id: "ta5",
        display_name: "Higashiyama Walking Course",
        image_url: "/images/ta5.png",
      },
    ],
    Matsumoto: [
      {
        place_id: "ma1",
        display_name: "Matsumoto Castle",
        image_url: "/images/ma1.png",
      },
      {
        place_id: "ma2",
        display_name: "Nawate Street",
        image_url: "/images/ma2.png",
      },
      {
        place_id: "ma3",
        display_name: "Yohashira Shrine",
        image_url: "/images/ma3.png",
      },
      {
        place_id: "ma4",
        display_name: "Japan Ukiyo-e Museum",
        image_url: "/images/ma4.png",
      },
      {
        place_id: "ma5",
        display_name: "Kaichi School Museum",
        image_url: "/images/ma5.png",
      },
    ],
    Nikko: [
      {
        place_id: "ni1",
        display_name: "Nikkō Tōshō-gū",
        image_url: "/images/ni1.png",
      },
      {
        place_id: "ni2",
        display_name: "Rinno-ji Temple",
        image_url: "/images/ni2.png",
      },
      {
        place_id: "ni3",
        display_name: "Lake Chuzenji",
        image_url: "/images/ni3.png",
      },
      {
        place_id: "ni4",
        display_name: "Kegon Falls",
        image_url: "/images/ni4.png",
      },
      {
        place_id: "ni5",
        display_name: "Shinkyo Bridge",
        image_url: "/images/ni5.png",
      },
    ],
    Kagoshima: [
      {
        place_id: "ka1",
        display_name: "Sakurajima",
        image_url: "/images/ka1.png",
      },
      {
        place_id: "ka2",
        display_name: "Sengan-en",
        image_url: "/images/ka2.png",
      },
      {
        place_id: "ka3",
        display_name: "Kagoshima Aquarium",
        image_url: "/images/ka3.png",
      },
      {
        place_id: "ka4",
        display_name: "Shiroyama Observatory",
        image_url: "/images/ka4.png",
      },
      {
        place_id: "ka5",
        display_name: "Ibusuki Onsen",
        image_url: "/images/ka5.png",
      },
    ],
    Okinawa: [
      {
        place_id: "ok1",
        display_name: "Shuri Castle",
        image_url: "/images/ok1.png",
      },
      {
        place_id: "ok2",
        display_name: "Okinawa Churaumi Aquarium",
        image_url: "/images/ok2.png",
      },
      {
        place_id: "ok3",
        display_name: "Kokusai Dori",
        image_url: "/images/ok3.png",
      },
      {
        place_id: "ok4",
        display_name: "Cape Manzamo",
        image_url: "/images/ok4.png",
      },
      {
        place_id: "ok5",
        display_name: "Nakagusuku Castle",
        image_url: "/images/ok5.png",
      },
    ],
  },
  Australia: {
    Sydney: [
      {
        place_id: "sy1",
        display_name: "Sydney Opera House",
        image_url: "/images/sy1.png",
      },
      {
        place_id: "sy2",
        display_name: "Sydney Harbour Bridge",
        image_url: "/images/sy2.png",
      },
      {
        place_id: "sy3",
        display_name: "Bondi Beach",
        image_url: "/images/sy3.png",
      },
      {
        place_id: "sy4",
        display_name: "Taronga Zoo",
        image_url: "/images/sy4.png",
      },
      {
        place_id: "sy5",
        display_name: "Darling Harbour",
        image_url: "/images/sy5.png",
      },
    ],
    Melbourne: [
      {
        place_id: "me1",
        display_name: "Federation Square",
        image_url: "/images/me1.png",
      },
      {
        place_id: "me2",
        display_name: "Royal Botanic Gardens",
        image_url: "/images/me2.png",
      },
      {
        place_id: "me3",
        display_name: "Melbourne Zoo",
        image_url: "/images/me3.png",
      },
      {
        place_id: "me4",
        display_name: "Eureka Skydeck",
        image_url: "/images/me4.png",
      },
      {
        place_id: "me5",
        display_name: "Queen Victoria Market",
        image_url: "/images/me5.png",
      },
    ],
    Brisbane: [
      {
        place_id: "br1",
        display_name: "South Bank Parklands",
        image_url: "/images/br1.png",
      },
      {
        place_id: "br2",
        display_name: "Lone Pine Koala Sanctuary",
        image_url: "/images/br2.png",
      },
      {
        place_id: "br3",
        display_name: "Story Bridge",
        image_url: "/images/br3.png",
      },
      {
        place_id: "br4",
        display_name: "Queensland Art Gallery",
        image_url: "/images/br4.png",
      },
      {
        place_id: "br5",
        display_name: "Mount Coot-tha Lookout",
        image_url: "/images/br5.png",
      },
    ],
    Perth: [
      {
        place_id: "pe1",
        display_name: "Kings Park and Botanic Garden",
        image_url: "/images/pe1.png",
      },
      {
        place_id: "pe2",
        display_name: "Cottesloe Beach",
        image_url: "/images/pe2.png",
      },
      {
        place_id: "pe3",
        display_name: "Perth Zoo",
        image_url: "/images/pe3.png",
      },
      {
        place_id: "pe4",
        display_name: "The Perth Mint",
        image_url: "/images/pe4.png",
      },
      {
        place_id: "pe5",
        display_name: "Swan River",
        image_url: "/images/pe5.png",
      },
    ],
    Adelaide: [
      {
        place_id: "ad1",
        display_name: "Adelaide Botanic Garden",
        image_url: "/images/ad1.png",
      },
      {
        place_id: "ad2",
        display_name: "Adelaide Zoo",
        image_url: "/images/ad2.png",
      },
      {
        place_id: "ad3",
        display_name: "Art Gallery of South Australia",
        image_url: "/images/ad3.png",
      },
      {
        place_id: "ad4",
        display_name: "Rundle Mall",
        image_url: "/images/ad4.png",
      },
      {
        place_id: "ad5",
        display_name: "Glenelg Beach",
        image_url: "/images/ad5.png",
      },
    ],
    Canberra: [
      {
        place_id: "ca1",
        display_name: "Australian War Memorial",
        image_url: "/images/ca1.png",
      },
      {
        place_id: "ca2",
        display_name: "Parliament House",
        image_url: "/images/ca2.png",
      },
      {
        place_id: "ca3",
        display_name: "National Gallery of Australia",
        image_url: "/images/ca3.png",
      },
      {
        place_id: "ca4",
        display_name: "Lake Burley Griffin",
        image_url: "/images/ca4.png",
      },
      {
        place_id: "ca5",
        display_name: "Questacon",
        image_url: "/images/ca5.png",
      },
    ],
    "Gold Coast": [
      {
        place_id: "gc1",
        display_name: "Surfers Paradise Beach",
        image_url: "/images/gc1.png",
      },
      {
        place_id: "gc2",
        display_name: "Sea World",
        image_url: "/images/gc2.png",
      },
      {
        place_id: "gc3",
        display_name: "Warner Bros. Movie World",
        image_url: "/images/gc3.png",
      },
      {
        place_id: "gc4",
        display_name: "Currumbin Wildlife Sanctuary",
        image_url: "/images/gc4.png",
      },
      {
        place_id: "gc5",
        display_name: "SkyPoint Observation Deck",
        image_url: "/images/gc5.png",
      },
    ],
    Hobart: [
      {
        place_id: "ho1",
        display_name: "Mount Wellington",
        image_url: "/images/ho1.png",
      },
      {
        place_id: "ho2",
        display_name: "Salamanca Market",
        image_url: "/images/ho2.png",
      },
      {
        place_id: "ho3",
        display_name: "MONA (Museum of Old and New Art)",
        image_url: "/images/ho3.png",
      },
      {
        place_id: "ho4",
        display_name: "Battery Point",
        image_url: "/images/ho4.png",
      },
      {
        place_id: "ho5",
        display_name: "Royal Tasmanian Botanical Gardens",
        image_url: "/images/ho5.png",
      },
    ],
    Darwin: [
      {
        place_id: "da1",
        display_name: "Kakadu National Park",
        image_url: "/images/da1.png",
      },
      {
        place_id: "da2",
        display_name: "Mindil Beach",
        image_url: "/images/da2.png",
      },
      {
        place_id: "da3",
        display_name: "Crocosaurus Cove",
        image_url: "/images/da3.png",
      },
      {
        place_id: "da4",
        display_name: "Litchfield National Park",
        image_url: "/images/da4.png",
      },
      {
        place_id: "da5",
        display_name: "Darwin Waterfront",
        image_url: "/images/da5.png",
      },
    ],
    Cairns: [
      {
        place_id: "ca1",
        display_name: "Great Barrier Reef",
        image_url: "/images/ca1.png",
      },
      {
        place_id: "ca2",
        display_name: "Daintree Rainforest",
        image_url: "/images/ca2.png",
      },
      {
        place_id: "ca3",
        display_name: "Kuranda Scenic Railway",
        image_url: "/images/ca3.png",
      },
      {
        place_id: "ca4",
        display_name: "Cairns Esplanade",
        image_url: "/images/ca4.png",
      },
      {
        place_id: "ca5",
        display_name: "Skyrail Rainforest Cableway",
        image_url: "/images/ca5.png",
      },
    ],
    "Alice Springs": [
      {
        place_id: "as1",
        display_name: "Uluru (Ayers Rock)",
        image_url: "/images/as1.png",
      },
      {
        place_id: "as2",
        display_name: "Alice Springs Desert Park",
        image_url: "/images/as2.png",
      },
      {
        place_id: "as3",
        display_name: "Royal Flying Doctor Service",
        image_url: "/images/as3.png",
      },
      {
        place_id: "as4",
        display_name: "Simpsons Gap",
        image_url: "/images/as4.png",
      },
      {
        place_id: "as5",
        display_name: "Alice Springs Telegraph Station",
        image_url: "/images/as5.png",
      },
    ],
    Newcastle: [
      {
        place_id: "ne1",
        display_name: "Nobbys Beach",
        image_url: "/images/ne1.png",
      },
      {
        place_id: "ne2",
        display_name: "Fort Scratchley",
        image_url: "/images/ne2.png",
      },
      {
        place_id: "ne3",
        display_name: "Blackbutt Reserve",
        image_url: "/images/ne3.png",
      },
      {
        place_id: "ne4",
        display_name: "Merewether Beach",
        image_url: "/images/ne4.png",
      },
      {
        place_id: "ne5",
        display_name: "Hunter Valley Gardens",
        image_url: "/images/ne5.png",
      },
    ],
    Geelong: [
      {
        place_id: "ge1",
        display_name: "Eastern Beach Reserve",
        image_url: "/images/ge1.png",
      },
      {
        place_id: "ge2",
        display_name: "Geelong Waterfront",
        image_url: "/images/ge2.png",
      },
      {
        place_id: "ge3",
        display_name: "National Wool Museum",
        image_url: "/images/ge3.png",
      },
      {
        place_id: "ge4",
        display_name: "Bellarine Rail Trail",
        image_url: "/images/ge4.png",
      },
      {
        place_id: "ge5",
        display_name: "Adventure Park Geelong",
        image_url: "/images/ge5.png",
      },
    ],
    Townsville: [
      {
        place_id: "to1",
        display_name: "The Strand",
        image_url: "/images/to1.png",
      },
      {
        place_id: "to2",
        display_name: "Billabong Sanctuary",
        image_url: "/images/to2.png",
      },
      {
        place_id: "to3",
        display_name: "Castle Hill",
        image_url: "/images/to3.png",
      },
      {
        place_id: "to4",
        display_name: "Reef HQ Great Barrier Reef Aquarium",
        image_url: "/images/to4.png",
      },
      {
        place_id: "to5",
        display_name: "Magnetic Island",
        image_url: "/images/to5.png",
      },
    ],
    Wollongong: [
      {
        place_id: "wo1",
        display_name: "Nan Tien Temple",
        image_url: "/images/wo1.png",
      },
      {
        place_id: "wo2",
        display_name: "Wollongong Botanic Garden",
        image_url: "/images/wo2.png",
      },
      {
        place_id: "wo3",
        display_name: "Sea Cliff Bridge",
        image_url: "/images/wo3.png",
      },
      {
        place_id: "wo4",
        display_name: "Symbio Wildlife Park",
        image_url: "/images/wo4.png",
      },
      {
        place_id: "wo5",
        display_name: "Wollongong Head Lighthouse",
        image_url: "/images/wo5.png",
      },
    ],
    Darwin: [
      {
        place_id: "da1",
        display_name: "Mindil Beach",
        image_url: "/images/da1.png",
      },
      {
        place_id: "da2",
        display_name: "Litchfield National Park",
        image_url: "/images/da2.png",
      },
      {
        place_id: "da3",
        display_name: "Kakadu National Park",
        image_url: "/images/da3.png",
      },
      {
        place_id: "da4",
        display_name: "Crocosaurus Cove",
        image_url: "/images/da4.png",
      },
      {
        place_id: "da5",
        display_name: "Museum and Art Gallery of the Northern Territory",
        image_url: "/images/da5.png",
      },
    ],
    "Byron Bay": [
      {
        place_id: "by1",
        display_name: "Cape Byron Lighthouse",
        image_url: "/images/by1.png",
      },
      {
        place_id: "by2",
        display_name: "Wategos Beach",
        image_url: "/images/by2.png",
      },
      {
        place_id: "by3",
        display_name: "Byron Bay Markets",
        image_url: "/images/by3.png",
      },
      {
        place_id: "by4",
        display_name: "Arakwal National Park",
        image_url: "/images/by4.png",
      },
      {
        place_id: "by5",
        display_name: "Tallow Beach",
        image_url: "/images/by5.png",
      },
    ],
    Broome: [
      {
        place_id: "br1",
        display_name: "Cable Beach",
        image_url: "/images/br1.png",
      },
      {
        place_id: "br2",
        display_name: "Gantheaume Point",
        image_url: "/images/br2.png",
      },
      {
        place_id: "br3",
        display_name: "Broome Historical Museum",
        image_url: "/images/br3.png",
      },
      {
        place_id: "br4",
        display_name: "Willie Creek Pearl Farm",
        image_url: "/images/br4.png",
      },
      {
        place_id: "br5",
        display_name: "Broome Town Beach",
        image_url: "/images/br5.png",
      },
    ],
  },
  UK: {
    London: [
      {
        place_id: "lo1",
        display_name: "Big Ben",
        image_url: "/images/lo1.png",
      },
      {
        place_id: "lo2",
        display_name: "Tower Bridge",
        image_url: "/images/lo2.png",
      },
      {
        place_id: "lo3",
        display_name: "Buckingham Palace",
        image_url: "/images/lo3.png",
      },
      {
        place_id: "lo4",
        display_name: "London Eye",
        image_url: "/images/lo4.png",
      },
      {
        place_id: "lo5",
        display_name: "British Museum",
        image_url: "/images/lo5.png",
      },
    ],
    Edinburgh: [
      {
        place_id: "ed1",
        display_name: "Edinburgh Castle",
        image_url: "/images/ed1.png",
      },
      {
        place_id: "ed2",
        display_name: "Royal Mile",
        image_url: "/images/ed2.png",
      },
      {
        place_id: "ed3",
        display_name: "Arthur's Seat",
        image_url: "/images/ed3.png",
      },
      {
        place_id: "ed4",
        display_name: "Holyrood Palace",
        image_url: "/images/ed4.png",
      },
      {
        place_id: "ed5",
        display_name: "National Museum of Scotland",
        image_url: "/images/ed5.png",
      },
    ],
    Manchester: [
      {
        place_id: "ma1",
        display_name: "Manchester Cathedral",
        image_url: "/images/ma1.png",
      },
      {
        place_id: "ma2",
        display_name: "Old Trafford",
        image_url: "/images/ma2.png",
      },
      {
        place_id: "ma3",
        display_name: "Science and Industry Museum",
        image_url: "/images/ma3.png",
      },
      {
        place_id: "ma4",
        display_name: "Manchester Art Gallery",
        image_url: "/images/ma4.png",
      },
      {
        place_id: "ma5",
        display_name: "Heaton Park",
        image_url: "/images/ma5.png",
      },
    ],
    Birmingham: [
      {
        place_id: "bi1",
        display_name: "Cadbury World",
        image_url: "/images/bi1.png",
      },
      {
        place_id: "bi2",
        display_name: "Birmingham Museum and Art Gallery",
        image_url: "/images/bi2.png",
      },
      {
        place_id: "bi3",
        display_name: "Bullring & Grand Central",
        image_url: "/images/bi3.png",
      },
      {
        place_id: "bi4",
        display_name: "Birmingham Botanical Gardens",
        image_url: "/images/bi4.png",
      },
      {
        place_id: "bi5",
        display_name: "National SEA LIFE Centre",
        image_url: "/images/bi5.png",
      },
    ],
    Liverpool: [
      {
        place_id: "li1",
        display_name: "The Beatles Story",
        image_url: "/images/li1.png",
      },
      {
        place_id: "li2",
        display_name: "Royal Albert Dock Liverpool",
        image_url: "/images/li2.png",
      },
      {
        place_id: "li3",
        display_name: "Liverpool Cathedral",
        image_url: "/images/li3.png",
      },
      {
        place_id: "li4",
        display_name: "Anfield Stadium",
        image_url: "/images/li4.png",
      },
      {
        place_id: "li5",
        display_name: "Tate Liverpool",
        image_url: "/images/li5.png",
      },
    ],
    Glasgow: [
      {
        place_id: "gl1",
        display_name: "Kelvingrove Art Gallery and Museum",
        image_url: "/images/gl1.png",
      },
      {
        place_id: "gl2",
        display_name: "Glasgow Cathedral",
        image_url: "/images/gl2.png",
      },
      {
        place_id: "gl3",
        display_name: "Riverside Museum",
        image_url: "/images/gl3.png",
      },
      {
        place_id: "gl4",
        display_name: "George Square",
        image_url: "/images/gl4.png",
      },
      {
        place_id: "gl5",
        display_name: "Glasgow Science Centre",
        image_url: "/images/gl5.png",
      },
    ],
    Bristol: [
      {
        place_id: "br1",
        display_name: "Clifton Suspension Bridge",
        image_url: "/images/br1.png",
      },
      {
        place_id: "br2",
        display_name: "SS Great Britain",
        image_url: "/images/br2.png",
      },
      {
        place_id: "br3",
        display_name: "Bristol Zoo Gardens",
        image_url: "/images/br3.png",
      },
      {
        place_id: "br4",
        display_name: "Cabot Tower",
        image_url: "/images/br4.png",
      },
      {
        place_id: "br5",
        display_name: "Bristol Museum & Art Gallery",
        image_url: "/images/br5.png",
      },
    ],
    Oxford: [
      {
        place_id: "ox1",
        display_name: "University of Oxford",
        image_url: "/images/ox1.png",
      },
      {
        place_id: "ox2",
        display_name: "Ashmolean Museum",
        image_url: "/images/ox2.png",
      },
      {
        place_id: "ox3",
        display_name: "Bodleian Library",
        image_url: "/images/ox3.png",
      },
      {
        place_id: "ox4",
        display_name: "Christ Church College",
        image_url: "/images/ox4.png",
      },
      {
        place_id: "ox5",
        display_name: "Oxford Castle",
        image_url: "/images/ox5.png",
      },
    ],
    Cambridge: [
      {
        place_id: "ca1",
        display_name: "University of Cambridge",
        image_url: "/images/ca1.png",
      },
      {
        place_id: "ca2",
        display_name: "King's College Chapel",
        image_url: "/images/ca2.png",
      },
      {
        place_id: "ca3",
        display_name: "The Fitzwilliam Museum",
        image_url: "/images/ca3.png",
      },
      {
        place_id: "ca4",
        display_name: "Cambridge University Botanic Garden",
        image_url: "/images/ca4.png",
      },
      {
        place_id: "ca5",
        display_name: "The Backs",
        image_url: "/images/ca5.png",
      },
    ],
    Bath: [
      {
        place_id: "ba1",
        display_name: "Roman Baths",
        image_url: "/images/ba1.png",
      },
      {
        place_id: "ba2",
        display_name: "Bath Abbey",
        image_url: "/images/ba2.png",
      },
      {
        place_id: "ba3",
        display_name: "Pulteney Bridge",
        image_url: "/images/ba3.png",
      },
      {
        place_id: "ba4",
        display_name: "Royal Crescent",
        image_url: "/images/ba4.png",
      },
      {
        place_id: "ba5",
        display_name: "Thermae Bath Spa",
        image_url: "/images/ba5.png",
      },
    ],
    York: [
      {
        place_id: "yo1",
        display_name: "York Minster",
        image_url: "/images/yo1.png",
      },
      {
        place_id: "yo2",
        display_name: "The Shambles",
        image_url: "/images/yo2.png",
      },
      {
        place_id: "yo3",
        display_name: "Clifford's Tower",
        image_url: "/images/yo3.png",
      },
      {
        place_id: "yo4",
        display_name: "National Railway Museum",
        image_url: "/images/yo4.png",
      },
      {
        place_id: "yo5",
        display_name: "Jorvik Viking Centre",
        image_url: "/images/yo5.png",
      },
    ],
    Cardiff: [
      {
        place_id: "ca1",
        display_name: "Cardiff Castle",
        image_url: "/images/ca1.png",
      },
      {
        place_id: "ca2",
        display_name: "Cardiff Bay",
        image_url: "/images/ca2.png",
      },
      {
        place_id: "ca3",
        display_name: "National Museum Cardiff",
        image_url: "/images/ca3.png",
      },
      {
        place_id: "ca4",
        display_name: "Principality Stadium",
        image_url: "/images/ca4.png",
      },
      {
        place_id: "ca5",
        display_name: "Bute Park",
        image_url: "/images/ca5.png",
      },
    ],
    Belfast: [
      {
        place_id: "be1",
        display_name: "Titanic Belfast",
        image_url: "/images/be1.png",
      },
      {
        place_id: "be2",
        display_name: "Belfast Castle",
        image_url: "/images/be2.png",
      },
      {
        place_id: "be3",
        display_name: "St. George's Market",
        image_url: "/images/be3.png",
      },
      {
        place_id: "be4",
        display_name: "Ulster Museum",
        image_url: "/images/be4.png",
      },
      {
        place_id: "be5",
        display_name: "Belfast City Hall",
        image_url: "/images/be5.png",
      },
    ],
    Brighton: [
      {
        place_id: "br1",
        display_name: "Royal Pavilion",
        image_url: "/images/br1.png",
      },
      {
        place_id: "br2",
        display_name: "Brighton Palace Pier",
        image_url: "/images/br2.png",
      },
      {
        place_id: "br3",
        display_name: "British Airways i360",
        image_url: "/images/br3.png",
      },
      {
        place_id: "br4",
        display_name: "The Lanes",
        image_url: "/images/br4.png",
      },
      {
        place_id: "br5",
        display_name: "Brighton Beach",
        image_url: "/images/br5.png",
      },
    ],
    "Newcastle upon Tyne": [
      {
        place_id: "ne1",
        display_name: "Tyne Bridge",
        image_url: "/images/ne1.png",
      },
      {
        place_id: "ne2",
        display_name: "Newcastle Castle",
        image_url: "/images/ne2.png",
      },
      {
        place_id: "ne3",
        display_name: "Quayside",
        image_url: "/images/ne3.png",
      },
      {
        place_id: "ne4",
        display_name: "St. Nicholas' Cathedral",
        image_url: "/images/ne4.png",
      },
      {
        place_id: "ne5",
        display_name: "The Sage Gateshead",
        image_url: "/images/ne5.png",
      },
    ],
    Aberdeen: [
      {
        place_id: "ab1",
        display_name: "Aberdeen Maritime Museum",
        image_url: "/images/ab1.png",
      },
      {
        place_id: "ab2",
        display_name: "Duthie Park",
        image_url: "/images/ab2.png",
      },
      {
        place_id: "ab3",
        display_name: "St. Machar's Cathedral",
        image_url: "/images/ab3.png",
      },
      {
        place_id: "ab4",
        display_name: "Aberdeen Art Gallery",
        image_url: "/images/ab4.png",
      },
      {
        place_id: "ab5",
        display_name: "Footdee (Fittie)",
        image_url: "/images/ab5.png",
      },
    ],
    Inverness: [
      {
        place_id: "in1",
        display_name: "Inverness Castle",
        image_url: "/images/in1.png",
      },
      {
        place_id: "in2",
        display_name: "Loch Ness",
        image_url: "/images/in2.png",
      },
      {
        place_id: "in3",
        display_name: "Culloden Battlefield",
        image_url: "/images/in3.png",
      },
      {
        place_id: "in4",
        display_name: "Inverness Botanic Gardens",
        image_url: "/images/in4.png",
      },
      {
        place_id: "in5",
        display_name: "Eden Court Theatre",
        image_url: "/images/in5.png",
      },
    ],
    Stirling: [
      {
        place_id: "st1",
        display_name: "Stirling Castle",
        image_url: "/images/st1.png",
      },
      {
        place_id: "st2",
        display_name: "The National Wallace Monument",
        image_url: "/images/st2.png",
      },
      {
        place_id: "st3",
        display_name: "Bannockburn",
        image_url: "/images/st3.png",
      },
      {
        place_id: "st4",
        display_name: "Church of the Holy Rude",
        image_url: "/images/st4.png",
      },
      {
        place_id: "st5",
        display_name: "Argyll's Lodging",
        image_url: "/images/st5.png",
      },
    ],
    Exeter: [
      {
        place_id: "ex1",
        display_name: "Exeter Cathedral",
        image_url: "/images/ex1.png",
      },
      {
        place_id: "ex2",
        display_name: "Royal Albert Memorial Museum",
        image_url: "/images/ex2.png",
      },
      {
        place_id: "ex3",
        display_name: "Northernhay Gardens",
        image_url: "/images/ex3.png",
      },
      {
        place_id: "ex4",
        display_name: "Quayside",
        image_url: "/images/ex4.png",
      },
      {
        place_id: "ex5",
        display_name: "Underground Passages",
        image_url: "/images/ex5.png",
      },
    ],
    Norwich: [
      {
        place_id: "no1",
        display_name: "Norwich Cathedral",
        image_url: "/images/no1.png",
      },
      {
        place_id: "no2",
        display_name: "Norwich Castle",
        image_url: "/images/no2.png",
      },
      {
        place_id: "no3",
        display_name: "The Lanes",
        image_url: "/images/no3.png",
      },
      {
        place_id: "no4",
        display_name: "Eaton Park",
        image_url: "/images/no4.png",
      },
      {
        place_id: "no5",
        display_name: "Strangers' Hall",
        image_url: "/images/no5.png",
      },
    ],
  },
  Italy: {
    Rome: [
      {
        place_id: "ro1",
        display_name: "Colosseum",
        image_url: "/images/ro1.png",
      },
      {
        place_id: "ro2",
        display_name: "Trevi Fountain",
        image_url: "/images/ro2.png",
      },
      {
        place_id: "ro3",
        display_name: "St. Peter's Basilica",
        image_url: "/images/ro3.png",
      },
      {
        place_id: "ro4",
        display_name: "Pantheon",
        image_url: "/images/ro4.png",
      },
      {
        place_id: "ro5",
        display_name: "Roman Forum",
        image_url: "/images/ro5.png",
      },
    ],
    Florence: [
      {
        place_id: "fl1",
        display_name: "Cathedral of Santa Maria del Fiore",
        image_url: "/images/fl1.png",
      },
      {
        place_id: "fl2",
        display_name: "Uffizi Gallery",
        image_url: "/images/fl2.png",
      },
      {
        place_id: "fl3",
        display_name: "Ponte Vecchio",
        image_url: "/images/fl3.png",
      },
      {
        place_id: "fl4",
        display_name: "Palazzo Vecchio",
        image_url: "/images/fl4.png",
      },
      {
        place_id: "fl5",
        display_name: "Basilica of Santa Croce",
        image_url: "/images/fl5.png",
      },
    ],
    Venice: [
      {
        place_id: "ve1",
        display_name: "St. Mark's Basilica",
        image_url: "/images/ve1.png",
      },
      {
        place_id: "ve2",
        display_name: "Grand Canal",
        image_url: "/images/ve2.png",
      },
      {
        place_id: "ve3",
        display_name: "Rialto Bridge",
        image_url: "/images/ve3.png",
      },
      {
        place_id: "ve4",
        display_name: "Doge's Palace",
        image_url: "/images/ve4.png",
      },
      {
        place_id: "ve5",
        display_name: "Piazza San Marco",
        image_url: "/images/ve5.png",
      },
    ],
    Milan: [
      {
        place_id: "mi1",
        display_name: "Milan Cathedral",
        image_url: "/images/mi1.png",
      },
      {
        place_id: "mi2",
        display_name: "Galleria Vittorio Emanuele II",
        image_url: "/images/mi2.png",
      },
      {
        place_id: "mi3",
        display_name: "Sforza Castle",
        image_url: "/images/mi3.png",
      },
      {
        place_id: "mi4",
        display_name: "Teatro alla Scala",
        image_url: "/images/mi4.png",
      },
      {
        place_id: "mi5",
        display_name: "Santa Maria delle Grazie",
        image_url: "/images/mi5.png",
      },
    ],
    Naples: [
      {
        place_id: "na1",
        display_name: "Pompeii",
        image_url: "/images/na1.png",
      },
      {
        place_id: "na2",
        display_name: "Mount Vesuvius",
        image_url: "/images/na2.png",
      },
      {
        place_id: "na3",
        display_name: "Naples National Archaeological Museum",
        image_url: "/images/na3.png",
      },
      {
        place_id: "na4",
        display_name: "Castel dell'Ovo",
        image_url: "/images/na4.png",
      },
      {
        place_id: "na5",
        display_name: "Spaccanapoli",
        image_url: "/images/na5.png",
      },
    ],
    Turin: [
      {
        place_id: "tu1",
        display_name: "Mole Antonelliana",
        image_url: "/images/tu1.png",
      },
      {
        place_id: "tu2",
        display_name: "Egyptian Museum",
        image_url: "/images/tu2.png",
      },
      {
        place_id: "tu3",
        display_name: "Piazza Castello",
        image_url: "/images/tu3.png",
      },
      {
        place_id: "tu4",
        display_name: "Royal Palace of Turin",
        image_url: "/images/tu4.png",
      },
      {
        place_id: "tu5",
        display_name: "Turin Cathedral",
        image_url: "/images/tu5.png",
      },
    ],
    Genoa: [
      {
        place_id: "ge1",
        display_name: "Aquarium of Genoa",
        image_url: "/images/ge1.png",
      },
      {
        place_id: "ge2",
        display_name: "Via Garibaldi",
        image_url: "/images/ge2.png",
      },
      {
        place_id: "ge3",
        display_name: "Palazzo Ducale",
        image_url: "/images/ge3.png",
      },
      {
        place_id: "ge4",
        display_name: "Genoa Cathedral",
        image_url: "/images/ge4.png",
      },
      {
        place_id: "ge5",
        display_name: "Boccadasse",
        image_url: "/images/ge5.png",
      },
    ],
    Verona: [
      {
        place_id: "ve1",
        display_name: "Verona Arena",
        image_url: "/images/ve1.png",
      },
      {
        place_id: "ve2",
        display_name: "Juliet's House",
        image_url: "/images/ve2.png",
      },
      {
        place_id: "ve3",
        display_name: "Piazza delle Erbe",
        image_url: "/images/ve3.png",
      },
      {
        place_id: "ve4",
        display_name: "Castelvecchio",
        image_url: "/images/ve4.png",
      },
      {
        place_id: "ve5",
        display_name: "Basilica of San Zeno",
        image_url: "/images/ve5.png",
      },
    ],
    Bologna: [
      {
        place_id: "bo1",
        display_name: "Piazza Maggiore",
        image_url: "/images/bo1.png",
      },
      {
        place_id: "bo2",
        display_name: "Basilica of San Petronio",
        image_url: "/images/bo2.png",
      },
      {
        place_id: "bo3",
        display_name: "Two Towers",
        image_url: "/images/bo3.png",
      },
      {
        place_id: "bo4",
        display_name: "Archiginnasio of Bologna",
        image_url: "/images/bo4.png",
      },
      {
        place_id: "bo5",
        display_name: "Sanctuary of the Madonna di San Luca",
        image_url: "/images/bo5.png",
      },
    ],
    Palermo: [
      {
        place_id: "pa1",
        display_name: "Palermo Cathedral",
        image_url: "/images/pa1.png",
      },
      {
        place_id: "pa2",
        display_name: "Palazzo dei Normanni",
        image_url: "/images/pa2.png",
      },
      {
        place_id: "pa3",
        display_name: "Teatro Massimo",
        image_url: "/images/pa3.png",
      },
      {
        place_id: "pa4",
        display_name: "Quattro Canti",
        image_url: "/images/pa4.png",
      },
      {
        place_id: "pa5",
        display_name: "Catacombe dei Cappuccini",
        image_url: "/images/pa5.png",
      },
    ],
    Siena: [
      {
        place_id: "si1",
        display_name: "Piazza del Campo",
        image_url: "/images/si1.png",
      },
      {
        place_id: "si2",
        display_name: "Siena Cathedral",
        image_url: "/images/si2.png",
      },
      {
        place_id: "si3",
        display_name: "Torre del Mangia",
        image_url: "/images/si3.png",
      },
      {
        place_id: "si4",
        display_name: "Palazzo Pubblico",
        image_url: "/images/si4.png",
      },
      {
        place_id: "si5",
        display_name: "Basilica of San Domenico",
        image_url: "/images/si5.png",
      },
    ],
    Pisa: [
      {
        place_id: "pi1",
        display_name: "Leaning Tower of Pisa",
        image_url: "/images/pi1.png",
      },
      {
        place_id: "pi2",
        display_name: "Piazza dei Miracoli",
        image_url: "/images/pi2.png",
      },
      {
        place_id: "pi3",
        display_name: "Pisa Cathedral",
        image_url: "/images/pi3.png",
      },
      {
        place_id: "pi4",
        display_name: "Camposanto Monumentale",
        image_url: "/images/pi4.png",
      },
      {
        place_id: "pi5",
        display_name: "Baptistery of St. John",
        image_url: "/images/pi5.png",
      },
    ],
    Ravenna: [
      {
        place_id: "ra1",
        display_name: "Basilica di San Vitale",
        image_url: "/images/ra1.png",
      },
      {
        place_id: "ra2",
        display_name: "Mausoleum of Galla Placidia",
        image_url: "/images/ra2.png",
      },
      {
        place_id: "ra3",
        display_name: "Basilica di Sant'Apollinare Nuovo",
        image_url: "/images/ra3.png",
      },
      {
        place_id: "ra4",
        display_name: "Battistero Neoniano",
        image_url: "/images/ra4.png",
      },
      {
        place_id: "ra5",
        display_name: "Dante's Tomb",
        image_url: "/images/ra5.png",
      },
    ],
    Matera: [
      {
        place_id: "ma1",
        display_name: "Sassi di Matera",
        image_url: "/images/ma1.png",
      },
      {
        place_id: "ma2",
        display_name: "Casa Grotta di Vico Solitario",
        image_url: "/images/ma2.png",
      },
      {
        place_id: "ma3",
        display_name: "Matera Cathedral",
        image_url: "/images/ma3.png",
      },
      {
        place_id: "ma4",
        display_name: "Palombaro Lungo",
        image_url: "/images/ma4.png",
      },
      {
        place_id: "ma5",
        display_name: "Parco della Murgia Materana",
        image_url: "/images/ma5.png",
      },
    ],
    Amalfi: [
      {
        place_id: "am1",
        display_name: "Amalfi Cathedral",
        image_url: "/images/am1.png",
      },
      {
        place_id: "am2",
        display_name: "Valle delle Ferriere",
        image_url: "/images/am2.png",
      },
      {
        place_id: "am3",
        display_name: "Amalfi Coast",
        image_url: "/images/am3.png",
      },
      {
        place_id: "am4",
        display_name: "Museo Arsenale Amalfi",
        image_url: "/images/am4.png",
      },
      {
        place_id: "am5",
        display_name: "Cloister of Paradise",
        image_url: "/images/am5.png",
      },
    ],
    Bergamo: [
      {
        place_id: "be1",
        display_name: "Città Alta",
        image_url: "/images/be1.png",
      },
      {
        place_id: "be2",
        display_name: "Piazza Vecchia",
        image_url: "/images/be2.png",
      },
      {
        place_id: "be3",
        display_name: "Basilica di Santa Maria Maggiore",
        image_url: "/images/be3.png",
      },
      {
        place_id: "be4",
        display_name: "Campanone",
        image_url: "/images/be4.png",
      },
      {
        place_id: "be5",
        display_name: "Accademia Carrara",
        image_url: "/images/be5.png",
      },
    ],
    Catania: [
      {
        place_id: "ct1",
        display_name: "Mount Etna",
        image_url: "/images/ct1.png",
      },
      {
        place_id: "ct2",
        display_name: "Catania Cathedral",
        image_url: "/images/ct2.png",
      },
      {
        place_id: "ct3",
        display_name: "Piazza del Duomo",
        image_url: "/images/ct3.png",
      },
      {
        place_id: "ct4",
        display_name: "Teatro Romano",
        image_url: "/images/ct4.png",
      },
      {
        place_id: "ct5",
        display_name: "Monastero dei Benedettini",
        image_url: "/images/ct5.png",
      },
    ],
  },
};

module.exports = countriesData;
