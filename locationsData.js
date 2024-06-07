const locationsData = {
    "New York": [
      {
        place_id: "ny1",
        display_name: "Central Park, New York",
        image_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/Central_Park_New_York_City_New_York_23.jpg/800px-Central_Park_New_York_City_New_York_23.jpg"
      },
      {
        place_id: "ny2",
        display_name: "Times Square, New York",
        image_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/New_York_Times_Square_Terrace.jpg/800px-New_York_Times_Square_Terrace.jpg"
      },
      {
        place_id: "ny3",
        display_name: "Statue of Liberty, New York",
        image_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a1/Statue_of_Liberty_7.jpg/800px-Statue_of_Liberty_7.jpg"
      }
    ],
    "Germany": [
      {
        place_id: "de1",
        display_name: "Brandenburg Gate, Berlin",
        image_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Brandenburg_gate_twg.JPG/800px-Brandenburg_gate_twg.JPG"
      },
      {
        place_id: "de2",
        display_name: "Neuschwanstein Castle, Bavaria",
        image_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/Schloss_Neuschwanstein_2013.jpg/800px-Schloss_Neuschwanstein_2013.jpg"
      },
      {
        place_id: "de3",
        display_name: "Cologne Cathedral, Cologne",
        image_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/K%C3%B6lner_Dom_-_2014-12-28-7852.jpg/800px-K%C3%B6lner_Dom_-_2014-12-28-7852.jpg"
      }
    ],
    "Paris": [
      {
        place_id: "pa1",
        display_name: "Eiffel Tower, Paris",
        image_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Eiffel_Tower_View_from_Trocadero.jpg/800px-Eiffel_Tower_View_from_Trocadero.jpg"
      },
      {
        place_id: "pa2",
        display_name: "Louvre Museum, Paris",
        image_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Louvre_Museum_Wikimedia_Commons.jpg/800px-Louvre_Museum_Wikimedia_Commons.jpg"
      },
      {
        place_id: "pa3",
        display_name: "Notre-Dame Cathedral, Paris",
        image_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Notre_Dame_de_Paris_Central_Facade.jpg/800px-Notre_Dame_de_Paris_Central_Facade.jpg"
      }
    ],
    "Tokyo": [
      {
        place_id: "to1",
        display_name: "Shibuya Crossing, Tokyo",
        image_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Shibuya_crossing_2018.jpg/800px-Shibuya_crossing_2018.jpg"
      },
      {
        place_id: "to2",
        display_name: "Tokyo Tower, Tokyo",
        image_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ed/Tokyo_Tower_and_around_Skyscrapers.jpg/800px-Tokyo_Tower_and_around_Skyscrapers.jpg"
      },
      {
        place_id: "to3",
        display_name: "Sensō-ji Temple, Tokyo",
        image_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Sensoji_Temple_at_night.jpg/800px-Sensoji_Temple_at_night.jpg"
      }
    ],
    "Sydney": [
      {
        place_id: "sy1",
        display_name: "Sydney Opera House, Sydney",
        image_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Sydney_Opera_House_Sails.jpg/800px-Sydney_Opera_House_Sails.jpg"
      },
      {
        place_id: "sy2",
        display_name: "Sydney Harbour Bridge, Sydney",
        image_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/Sydney_Harbour_Bridge_2016.jpg/800px-Sydney_Harbour_Bridge_2016.jpg"
      },
      {
        place_id: "sy3",
        display_name: "Bondi Beach, Sydney",
        image_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Bondi_Beach_2013.jpg/800px-Bondi_Beach_2013.jpg"
      }
    ],
    "London": [
      {
        place_id: "lo1",
        display_name: "Big Ben, London",
        image_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Big_Ben_Elizabeth_Tower.jpg/800px-Big_Ben_Elizabeth_Tower.jpg"
      },
      {
        place_id: "lo2",
        display_name: "Tower Bridge, London",
        image_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Tower_Bridge%2C_London_2013.jpg/800px-Tower_Bridge%2C_London_2013.jpg"
      },
      {
        place_id: "lo3",
        display_name: "Buckingham Palace, London",
        image_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/Buckingham_Palace%2C_London_-_April_2009.jpg/800px-Buckingham_Palace%2C_London_-_April_2009.jpg"
      }
    ],
    "Rome": [
      {
        place_id: "ro1",
        display_name: "Colosseum, Rome",
        image_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/Colosseo_2020.jpg/800px-Colosseo_2020.jpg"
      },
      {
        place_id: "ro2",
        display_name: "Trevi Fountain, Rome",
        image_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Trevi_Fountain%2C_Rome_%28cropped%29.jpg/800px-Trevi_Fountain%2C_Rome_%28cropped%29.jpg"
      },
      {
        place_id: "ro3",
        display_name: "St. Peter's Basilica, Vatican City",
        image_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/St_Peter%27s_Basilica_facade%2C_Vatican_City.jpg/800px-St_Peter%27s_Basilica_facade%2C_Vatican_City.jpg"
      }
    ],
    "San Francisco": [
      {
        place_id: "sf1",
        display_name: "Golden Gate Bridge, San Francisco",
        image_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/GoldenGateBridge-001.jpg/800px-GoldenGateBridge-001.jpg"
      },
      {
        place_id: "sf2",
        display_name: "Alcatraz Island, San Francisco",
        image_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/94/Alcatraz_Island_photo_D_Ramey_Logan.jpg/800px-Alcatraz_Island_photo_D_Ramey_Logan.jpg"
      },
      {
        place_id: "sf3",
        display_name: "Lombard Street, San Francisco",
        image_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/Lombard_Street%2C_San_Francisco.jpg/800px-Lombard_Street%2C_San_Francisco.jpg"
      }
    ]
  };
  
  module.exports = locationsData;
  