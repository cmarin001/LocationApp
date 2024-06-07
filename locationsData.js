const locationsData = {
  "New York": [
    {
      place_id: "ny1",
      display_name: "Central Park, New York",
      image_url: "https://upload.wikimedia.org/wikipedia/commons/4/40/Central_Park_New_York_City_New_York_23.jpg"
    },
    {
      place_id: "ny2",
      display_name: "Times Square, New York",
      image_url: "https://upload.wikimedia.org/wikipedia/commons/9/90/New_York_Times_Square_Terrace.jpg"
    },
    {
      place_id: "ny3",
      display_name: "Statue of Liberty, New York",
      image_url: "https://upload.wikimedia.org/wikipedia/commons/a/a1/Statue_of_Liberty_7.jpg"
    },
    {
      place_id: "ny4",
      display_name: "Empire State Building, New York",
      image_url: "https://upload.wikimedia.org/wikipedia/commons/9/9d/Empire_State_Building_from_the_Top_of_the_Rock.jpg"
    },
    {
      place_id: "ny5",
      display_name: "Brooklyn Bridge, New York",
      image_url: "https://upload.wikimedia.org/wikipedia/commons/5/5d/Brooklyn_Bridge_Postdlf.jpg"
    }
  ],
  "Germany": [
    {
      place_id: "de1",
      display_name: "Brandenburg Gate, Berlin",
      image_url: "https://upload.wikimedia.org/wikipedia/commons/4/4e/Brandenburg_gate_twg.JPG"
    },
    {
      place_id: "de2",
      display_name: "Neuschwanstein Castle, Bavaria",
      image_url: "https://upload.wikimedia.org/wikipedia/commons/6/66/Schloss_Neuschwanstein_2013.jpg"
    },
    {
      place_id: "de3",
      display_name: "Cologne Cathedral, Cologne",
      image_url: "https://upload.wikimedia.org/wikipedia/commons/6/6d/K%C3%B6lner_Dom_-_2014-12-28-7852.jpg"
    },
    {
      place_id: "de4",
      display_name: "Berlin TV Tower, Berlin",
      image_url: "https://upload.wikimedia.org/wikipedia/commons/4/4f/Berliner_Fernsehturm_2012.jpg"
    },
    {
      place_id: "de5",
      display_name: "Heidelberg Castle, Heidelberg",
      image_url: "https://upload.wikimedia.org/wikipedia/commons/6/69/Heidelberg_Castle_Panorama_2011.jpg"
    }
  ],
  "Paris": [
    {
      place_id: "pa1",
      display_name: "Eiffel Tower, Paris",
      image_url: "https://upload.wikimedia.org/wikipedia/commons/9/99/Eiffel_Tower_View_from_Trocadero.jpg"
    },
    {
      place_id: "pa2",
      display_name: "Louvre Museum, Paris",
      image_url: "https://upload.wikimedia.org/wikipedia/commons/3/3e/Louvre_Museum_Wikimedia_Commons.jpg"
    },
    {
      place_id: "pa3",
      display_name: "Notre-Dame Cathedral, Paris",
      image_url: "https://upload.wikimedia.org/wikipedia/commons/a/a6/Notre_Dame_de_Paris_Central_Facade.jpg"
    },
    {
      place_id: "pa4",
      display_name: "Arc de Triomphe, Paris",
      image_url: "https://upload.wikimedia.org/wikipedia/commons/6/6d/Arc_de_Triomphe%2C_Paris_21_October_2010.jpg"
    },
    {
      place_id: "pa5",
      display_name: "Sacré-Cœur Basilica, Paris",
      image_url: "https://upload.wikimedia.org/wikipedia/commons/d/da/Paris_Basilique_Sacr%C3%A9_C%C5%93ur_2014-07.jpg"
    }
  ],
  "Tokyo": [
    {
      place_id: "to1",
      display_name: "Shibuya Crossing, Tokyo",
      image_url: "https://upload.wikimedia.org/wikipedia/commons/b/bd/Shibuya_crossing_2018.jpg"
    },
    {
      place_id: "to2",
      display_name: "Tokyo Tower, Tokyo",
      image_url: "https://upload.wikimedia.org/wikipedia/commons/e/ed/Tokyo_Tower_and_around_Skyscrapers.jpg"
    },
    {
      place_id: "to3",
      display_name: "Sensō-ji Temple, Tokyo",
      image_url: "https://upload.wikimedia.org/wikipedia/commons/e/e4/Sensoji_Temple_at_night.jpg"
    },
    {
      place_id: "to4",
      display_name: "Tokyo Skytree, Tokyo",
      image_url: "https://upload.wikimedia.org/wikipedia/commons/2/2d/Tokyo_Skytree_2012.JPG"
    },
    {
      place_id: "to5",
      display_name: "Meiji Shrine, Tokyo",
      image_url: "https://upload.wikimedia.org/wikipedia/commons/5/5f/Meiji_Jingu_shrine_in_November_2013.jpg"
    }
  ],
  "Sydney": [
    {
      place_id: "sy1",
      display_name: "Sydney Opera House, Sydney",
      image_url: "https://upload.wikimedia.org/wikipedia/commons/4/44/Sydney_Opera_House_Sails.jpg"
    },
    {
      place_id: "sy2",
      display_name: "Sydney Harbour Bridge, Sydney",
      image_url: "https://upload.wikimedia.org/wikipedia/commons/e/e8/Sydney_Harbour_Bridge_2016.jpg"
    },
    {
      place_id: "sy3",
      display_name: "Bondi Beach, Sydney",
      image_url: "https://upload.wikimedia.org/wikipedia/commons/8/8e/Bondi_Beach_2013.jpg"
    },
    {
      place_id: "sy4",
      display_name: "Taronga Zoo, Sydney",
      image_url: "https://upload.wikimedia.org/wikipedia/commons/1/13/Taronga_Zoo_skyline.jpg"
    },
    {
      place_id: "sy5",
      display_name: "Darling Harbour, Sydney",
      image_url: "https://upload.wikimedia.org/wikipedia/commons/b/b6/Darling_Harbour_from_Tower.jpg"
    }
  ],
  "London": [
    {
      place_id: "lo1",
      display_name: "Big Ben, London",
      image_url: "https://upload.wikimedia.org/wikipedia/commons/1/15/Big_Ben_Elizabeth_Tower.jpg"
    },
    {
      place_id: "lo2",
      display_name: "Tower Bridge, London",
      image_url: "https://upload.wikimedia.org/wikipedia/commons/5/5e/Tower_Bridge%2C_London_2013.jpg"
    },
    {
      place_id: "lo3",
      display_name: "Buckingham Palace, London",
      image_url: "https://upload.wikimedia.org/wikipedia/commons/d/d0/Buckingham_Palace%2C_London_-_April_2009.jpg"
    },
    {
      place_id: "lo4",
      display_name: "London Eye, London",
      image_url: "https://upload.wikimedia.org/wikipedia/commons/f/f4/London_Eye_Twilight_April_2006.jpg"
    },
    {
      place_id: "lo5",
      display_name: "British Museum, London",
      image_url: "https://upload.wikimedia.org/wikipedia/commons/6/63/British_Museum_from_NE_2.JPG"
    }
  ],
  "Rome": [
    {
      place_id: "ro1",
      display_name: "Colosseum, Rome",
      image_url: "https://upload.wikimedia.org/wikipedia/commons/d/df/Colosseo_2020.jpg"
    },
    {
      place_id: "ro2",
      display_name: "Trevi Fountain, Rome",
      image_url: "https://upload.wikimedia.org/wikipedia/commons/5/5a/Trevi_Fountain%2C_Rome_%28cropped%29.jpg"
    },
    {
      place_id: "ro3",
      display_name: "St. Peter's Basilica, Vatican City",
      image_url: "https://upload.wikimedia.org/wikipedia/commons/4/4e/St_Peter%27s_Basilica_facade%2C_Vatican_City.jpg"
    },
    {
      place_id: "ro4",
      display_name: "Pantheon, Rome",
      image_url: "https://upload.wikimedia.org/wikipedia/commons/8/87/Rome_Pantheon_front.jpg"
    },
    {
      place_id: "ro5",
      display_name: "Roman Forum, Rome",
      image_url: "https://upload.wikimedia.org/wikipedia/commons/6/62/Roman_Forum_2010.jpg"
    }
  ],
  "San Francisco": [
    {
      place_id: "sf1",
      display_name: "Golden Gate Bridge, San Francisco",
      image_url: "https://upload.wikimedia.org/wikipedia/commons/0/0c/GoldenGateBridge-001.jpg"
    },
    {
      place_id: "sf2",
      display_name: "Alcatraz Island, San Francisco",
      image_url: "https://upload.wikimedia.org/wikipedia/commons/9/94/Alcatraz_Island_photo_D_Ramey_Logan.jpg"
    },
    {
      place_id: "sf3",
      display_name: "Lombard Street, San Francisco",
      image_url: "https://upload.wikimedia.org/wikipedia/commons/0/0f/Lombard_Street%2C_San_Francisco.jpg"
    },
    {
      place_id: "sf4",
      display_name: "Fisherman's Wharf, San Francisco",
      image_url: "https://upload.wikimedia.org/wikipedia/commons/5/5c/Fishermans_Wharf_San_Francisco.jpg"
    },
    {
      place_id: "sf5",
      display_name: "Golden Gate Park, San Francisco",
      image_url: "https://upload.wikimedia.org/wikipedia/commons/7/77/Golden_Gate_Park_de_Young_Museum.jpg"
    }
  ]
};

module.exports = locationsData;
