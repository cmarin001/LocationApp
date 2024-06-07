const locationsData = {
  "New York": [
    {
      place_id: "ny1",
      display_name: "Central Park, New York",
      image_url: "https://www.pexels.com/photo/central-park-new-york-1658030/"
    },
    {
      place_id: "ny2",
      display_name: "Times Square, New York",
      image_url: "https://www.pexels.com/photo/times-square-new-york-190682/"
    },
    {
      place_id: "ny3",
      display_name: "Statue of Liberty, New York",
      image_url: "https://www.pexels.com/photo/statue-of-liberty-35550/"
    },
    {
      place_id: "ny4",
      display_name: "Empire State Building, New York",
      image_url: "https://unsplash.com/photos/empire-state-building-1760/"
    },
    {
      place_id: "ny5",
      display_name: "Brooklyn Bridge, New York",
      image_url: "https://unsplash.com/photos/brooklyn-bridge-47898/"
    }
  ],
  "Germany": [
    {
      place_id: "de1",
      display_name: "Brandenburg Gate, Berlin",
      image_url: "https://www.pexels.com/photo/brandenburg-gate-1209979/"
    },
    {
      place_id: "de2",
      display_name: "Neuschwanstein Castle, Bavaria",
      image_url: "https://www.pexels.com/photo/neuschwanstein-castle-1094551/"
    },
    {
      place_id: "de3",
      display_name: "Cologne Cathedral, Cologne",
      image_url: "https://unsplash.com/photos/cologne-cathedral-2790/"
    },
    {
      place_id: "de4",
      display_name: "Berlin TV Tower, Berlin",
      image_url: "https://www.vecteezy.com/photo/berlin-tv-tower-185392/"
    },
    {
      place_id: "de5",
      display_name: "Heidelberg Castle, Heidelberg",
      image_url: "https://www.vecteezy.com/photo/heidelberg-castle-187329/"
    }
  ],
  "Paris": [
    {
      place_id: "pa1",
      display_name: "Eiffel Tower, Paris",
      image_url: "https://www.pexels.com/photo/eiffel-tower-paris-161348/"
    },
    {
      place_id: "pa2",
      display_name: "Louvre Museum, Paris",
      image_url: "https://unsplash.com/photos/louvre-museum-18461/"
    },
    {
      place_id: "pa3",
      display_name: "Notre-Dame Cathedral, Paris",
      image_url: "https://www.pexels.com/photo/notre-dame-cathedral-192915/"
    },
    {
      place_id: "pa4",
      display_name: "Arc de Triomphe, Paris",
      image_url: "https://www.vecteezy.com/photo/arc-de-triomphe-29561/"
    },
    {
      place_id: "pa5",
      display_name: "Sacré-Cœur Basilica, Paris",
      image_url: "https://unsplash.com/photos/sacre-coeur-29361/"
    }
  ],
  "Tokyo": [
    {
      place_id: "to1",
      display_name: "Shibuya Crossing, Tokyo",
      image_url: "https://www.pexels.com/photo/shibuya-crossing-171777/"
    },
    {
      place_id: "to2",
      display_name: "Tokyo Tower, Tokyo",
      image_url: "https://unsplash.com/photos/tokyo-tower-18098/"
    },
    {
      place_id: "to3",
      display_name: "Sensō-ji Temple, Tokyo",
      image_url: "https://www.pexels.com/photo/sensoji-temple-1482391/"
    },
    {
      place_id: "to4",
      display_name: "Tokyo Skytree, Tokyo",
      image_url: "https://www.vecteezy.com/photo/tokyo-skytree-191938/"
    },
    {
      place_id: "to5",
      display_name: "Meiji Shrine, Tokyo",
      image_url: "https://unsplash.com/photos/meiji-shrine-20792/"
    }
  ],
  "Sydney": [
    {
      place_id: "sy1",
      display_name: "Sydney Opera House, Sydney",
      image_url: "https://www.pexels.com/photo/sydney-opera-house-231354/"
    },
    {
      place_id: "sy2",
      display_name: "Sydney Harbour Bridge, Sydney",
      image_url: "https://unsplash.com/photos/sydney-harbour-bridge-18942/"
    },
    {
      place_id: "sy3",
      display_name: "Bondi Beach, Sydney",
      image_url: "https://www.pexels.com/photo/bondi-beach-73435/"
    },
    {
      place_id: "sy4",
      display_name: "Taronga Zoo, Sydney",
      image_url: "https://www.vecteezy.com/photo/taronga-zoo-12347/"
    },
    {
      place_id: "sy5",
      display_name: "Darling Harbour, Sydney",
      image_url: "https://unsplash.com/photos/darling-harbour-28340/"
    }
  ],
  "London": [
    {
      place_id: "lo1",
      display_name: "Big Ben, London",
      image_url: "https://www.pexels.com/photo/big-ben-39861/"
    },
    {
      place_id: "lo2",
      display_name: "Tower Bridge, London",
      image_url: "https://unsplash.com/photos/tower-bridge-27172/"
    },
    {
      place_id: "lo3",
      display_name: "Buckingham Palace, London",
      image_url: "https://www.pexels.com/photo/buckingham-palace-18156/"
    },
    {
      place_id: "lo4",
      display_name: "London Eye, London",
      image_url: "https://www.vecteezy.com/photo/london-eye-11352/"
    },
    {
      place_id: "lo5",
      display_name: "British Museum, London",
      image_url: "https://unsplash.com/photos/british-museum-21175/"
    }
  ],
  "Rome": [
    {
      place_id: "ro1",
      display_name: "Colosseum, Rome",
      image_url: "https://www.pexels.com/photo/colosseum-76860/"
    },
    {
      place_id: "ro2",
      display_name: "Trevi Fountain, Rome",
      image_url: "https://unsplash.com/photos/trevi-fountain-22912/"
    },
    {
      place_id: "ro3",
      display_name: "St. Peter's Basilica, Vatican City",
      image_url: "https://www.pexels.com/photo/st-peters-basilica-14564/"
    },
    {
      place_id: "ro4",
      display_name: "Pantheon, Rome",
      image_url: "https://www.vecteezy.com/photo/pantheon-13248/"
    },
    {
      place_id: "ro5",
      display_name: "Roman Forum, Rome",
      image_url: "https://unsplash.com/photos/roman-forum-27158/"
    }
  ],
  "San Francisco": [
    {
      place_id: "sf1",
      display_name: "Golden Gate Bridge, San Francisco",
      image_url: "https://www.pexels.com/photo/golden-gate-bridge-17745/"
    },
    {
      place_id: "sf2",
      display_name: "Alcatraz Island, San Francisco",
      image_url: "https://unsplash.com/photos/alcatraz-island-21794/"
    },
    {
      place_id: "sf3",
      display_name: "Lombard Street, San Francisco",
      image_url: "https://www.pexels.com/photo/lombard-street-19134/"
    },
    {
      place_id: "sf4",
      display_name: "Fisherman's Wharf, San Francisco",
      image_url: "https://www.vecteezy.com/photo/fishermans-wharf-21791/"
    },
    {
      place_id: "sf5",
      display_name: "Golden Gate Park, San Francisco",
      image_url: "https://unsplash.com/photos/golden-gate-park-19376/"
    }
  ]
};

module.exports = locationsData;
