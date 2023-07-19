import { Component } from '@angular/core';

@Component({
  selector: 'app-destination-list',
  templateUrl: './destination-list.component.html',
  styleUrls: ['./destination-list.component.css']
})
export class DestinationListComponent {
  list: any = [
    {
      "_id": 0,
      "name": "Salar de Uyuni",
      "country": "Bolivia",
      "description": "The worlds largest salt flat, it creates a mirror effect after the rain.",
      "_ownerId": "35c62d76-8152-4626-8712-eeb96381bea8",
      "img": "/assets/destination-images/salar-de-uyuni.webp",
      "_createdOn": 1689698702962
    },
    {
      "_id": 1,
      "name": "Angkor wat",
      "country": "Cambodia",
      "description": "Beautiful ancient temple ruins.",
      "_ownerId": "35c62d76-8152-4626-8712-eeb96381bea8",
      "img": "/assets/destination-images/Angkor-wat-Cambodia.webp",
      "_createdOn": 1689698702963
    },
    {
      "_id": 2,
      "name": "Cinque Terre, Rio Maggiore",
      "country": "Italy",
      "description": "The 5 Lands of colored homes perched on a cliff by the sea.",
      "_ownerId": "35c62d76-8152-4626-8712-eeb96381bea8",
      "img": "/assets/destination-images/Cinque-terre-199x300.webp",
      "_createdOn": 1689698702964
    },
    {
      "_id": 3,
      "name": "Blue Lagoon",
      "country": "Iceland",
      "description": "Natural thermal hot springs.",
      "_ownerId": "35c62d76-8152-4626-8712-eeb96381bea8",
      "img": "/assets/destination-images/Icelands-Blue-Lagoon-365x360.webp",
      "_createdOn": 1689698702965
    },
    {
      "_id": 4,
      "name": "Maldives",
      "country": "Maldives",
      "description": "This archipelago is the ultimate tropical island paradise.",
      "_ownerId": "35c62d76-8152-4626-8712-eeb96381bea8",
      "img": "/assets/destination-images/Maldives.webp",
      "_createdOn": 1689698702966
    },
    {
      "_id": 5,
      "name": "Yellowstone National Park, Wyoming",
      "country": "USA",
      "description": "Home of the famous Old Faithful Geyser.",
      "_ownerId": "35c62d76-8152-4626-8712-eeb96381bea8",
      "img": "/assets/destination-images/Yellowstone-500x500.webp",
      "_createdOn": 1689698702967
    },
    {
      "_id": 6,
      "name": "Glass Beach, California",
      "country": "USA",
      "description": "A beach buried in colorful sea glass.",
      "_ownerId": "35c62d76-8152-4626-8712-eeb96381bea8",
      "img": "/assets/destination-images/Glass-beach-california-365x365.webp",
      "_createdOn": 1689698702968
    },
    {
      "_id": 7,
      "name": "Pamukkule",
      "country": "Turkey",
      "description": "Hot springs spilling over rock terraces. A UNESCO world heritage site.",
      "_ownerId": "35c62d76-8152-4626-8712-eeb96381bea8",
      "img": "/assets/destination-images/Pamukkale-Turkey-365x320.webp",
      "_createdOn": 1689698702969
    },
    {
      "_id": 8,
      "name": "Big Island, Hawaii",
      "country": "USA",
      "description": "Where lava meets ocean.",
      "_ownerId": "35c62d76-8152-4626-8712-eeb96381bea8",
      "img": "/assets/destination-images/Lava-flows-hawaii-500x500.webp",
      "_createdOn": 1689698702970
    },
    {
      "_id": 9,
      "name": "St. Lucia",
      "country": "Caribbean",
      "description": "Luxurious tropical island in the Caribbean.",
      "_ownerId": "35c62d76-8152-4626-8712-eeb96381bea8",
      "img": "/assets/destination-images/St.-Lucia-300x260.webp",
      "_createdOn": 1689698702971
    },
    {
      "_id": 10,
      "name": "Santorini",
      "country": "Greece",
      "description": "Iconic blue and white buildings on a cliff by the sea.",
      "_ownerId": "35c62d76-8152-4626-8712-eeb96381bea8",
      "img": "/assets/destination-images/Santorini-Greece-365x365.webp",
      "_createdOn": 1689698702972
    },
    {
      "_id": 11,
      "name": "Neuschwanstein Castle",
      "country": "Germany",
      "description": "The gorgeous former castle of the king.",
      "_ownerId": "35c62d76-8152-4626-8712-eeb96381bea8",
      "img": "/assets/destination-images/Neuschwanstein-Castle-Germany-500x500.webp",
      "_createdOn": 1689698702973
    },
    {
      "_id": 12,
      "name": "Marble Caves",
      "country": "Chile",
      "description": "Caves of marble reflect the blue water.",
      "_ownerId": "35c62d76-8152-4626-8712-eeb96381bea8",
      "img": "/assets/destination-images/Marble-Caves-Chile-500x500.webp",
      "_createdOn": 1689698702974
    },
    {
      "_id": 13,
      "name": "Chittorgarh Fort",
      "country": "India",
      "description": "The largest fort in India looks like a city lost in time.",
      "_ownerId": "35c62d76-8152-4626-8712-eeb96381bea8",
      "img": "/assets/destination-images/Chittorgarh-Fort-India-365x365.webp",
      "_createdOn": 1689698702975
    },
    {
      "_id": 14,
      "name": "Giethoorn",
      "country": "Holland",
      "description": "Cozy homes in this town are only accessible by waterways.",
      "_ownerId": "35c62d76-8152-4626-8712-eeb96381bea8",
      "img": "/assets/destination-images/Giethorn-Holland.webp",
      "_createdOn": 1689698702976
    },
    {
      "_id": 15,
      "name": "Crystal Cave",
      "country": "Iceland",
      "description": "Majestic ice caves, dangerous in summer but beautiful in winter.",
      "_ownerId": "35c62d76-8152-4626-8712-eeb96381bea8",
      "img": "/assets/destination-images/Crystal-Cave-Iceland.webp",
      "_createdOn": 1689698702977
    },
    {
      "_id": 16,
      "name": "Aogashima Volcano",
      "country": "Japan",
      "description": "A small village living in a volcanic island.",
      "_ownerId": "35c62d76-8152-4626-8712-eeb96381bea8",
      "img": "/assets/destination-images/Aogashima-volcano-Japan-500x500.webp",
      "_createdOn": 1689698702978
    },
    {
      "_id": 17,
      "name": "Longji Rice Terrace",
      "country": "China",
      "description": "Stunningly beautiful terraced rice fields. It is one of my favorite landscapes, and I couldnt pick just one picture.",
      "_ownerId": "35c62d76-8152-4626-8712-eeb96381bea8",
      "img": "/assets/destination-images/longji-rice-terrace-china.webp",
      "_createdOn": 1689698702979
    },
    {
      "_id": 18,
      "name": "Amazon Rainforest",
      "country": "Brazil",
      "description": "The amazing rainforest and Amazon River span several countries in South America.",
      "_ownerId": "35c62d76-8152-4626-8712-eeb96381bea8",
      "img": "/assets/destination-images/Amazon-River-Brazil-365x365.webp",
      "_createdOn": 1689698702980
    },
    {
      "_id": 19,
      "name": "Venice",
      "country": "Italy",
      "description": "The city of colorful winding corridors and canals, and good food.",
      "_ownerId": "35c62d76-8152-4626-8712-eeb96381bea8",
      "img": "/assets/destination-images/Venice_Italy-500x500.webp",
      "_createdOn": 1689698702981
    },
    {
      "_id": 20,
      "name": "Petra",
      "country": "Jordan",
      "description": "An enormous ancient temple carved into the cliffs of Jordan.",
      "_ownerId": "35c62d76-8152-4626-8712-eeb96381bea8",
      "img": "/assets/destination-images/Petra-Jordan-500x500.webp",
      "_createdOn": 1689698702982
    },
    {
      "_id": 31,
      "name": "Machu Picchu",
      "country": "Peru",
      "description": "The city of the Incas, high amongst the clouds.",
      "_ownerId": "847ec027-f659-4086-8032-5173e2f9c93a",
      "img": "/assets/destination-images/Machu-Picchu-Peru-500x500.webp",
      "_createdOn": 1689698702993
    },
    {
      "_id": 32,
      "name": "Tuscany",
      "country": "Italy",
      "description": "The land of richly colored rolling hills and old luxury.",
      "_ownerId": "847ec027-f659-4086-8032-5173e2f9c93a",
      "img": "/assets/destination-images/Tuscany-Italy-300x193.webp",
      "_createdOn": 1689698702994
    },
    {
      "_id": 33,
      "name": "Carlsbad Caverns, New Mexico",
      "country": "USA",
      "description": "An enormous cave system and national park.",
      "_ownerId": "847ec027-f659-4086-8032-5173e2f9c93a",
      "img": "/assets/destination-images/Carlsbad-Caverns-New-Mexico-USA-365x365.webp",
      "_createdOn": 1689698702995
    },
    {
      "_id": 34,
      "name": "Shirakawa-go Village",
      "country": "Japan",
      "description": "Cozy homes with thatched roofs, like something straight from an old video game.",
      "_ownerId": "847ec027-f659-4086-8032-5173e2f9c93a",
      "img": "/assets/destination-images/Shirakawa-go-Village-Japan-300x199.webp",
      "_createdOn": 1689698702996
    },
    {
      "_id": 35,
      "name": "Galapagos Islands",
      "country": "Ecuador",
      "description": "Beautiful in themselves, with an amazing assortment of unique wildlife.",
      "_ownerId": "847ec027-f659-4086-8032-5173e2f9c93a",
      "img": "/assets/destination-images/Galapagos-Ecuador--365x350.webp",
      "_createdOn": 1689698702997
    },
    {
      "_id": 36,
      "name": "Himalayas",
      "country": "Nepal",
      "description": "Home of snow-capped mountains, colorful prayer flags, and Mt. Everest.",
      "_ownerId": "847ec027-f659-4086-8032-5173e2f9c93a",
      "img": "/assets/destination-images/Mt.-Everest-Nepal-500x500.webp",
      "_createdOn": 1689698702998
    },
    {
      "_id": 37,
      "name": "Bali",
      "country": "Bali",
      "description": "It was so hard to pick one photo to represent this unique paradise. From the rice terraces to the luxury hotels, everything is beautiful.",
      "_ownerId": "847ec027-f659-4086-8032-5173e2f9c93a",
      "img": "/assets/destination-images/Bali.webp",
      "_createdOn": 1689698702999
    },
    {
      "_id": 38,
      "name": "Serengeti",
      "country": "Tanzania",
      "description": "A perfect place to adventure among the iconic trees and wild animals.",
      "_ownerId": "847ec027-f659-4086-8032-5173e2f9c93a",
      "img": "/assets/destination-images/Serengeti-Tanzania-Africa-500x500.webp",
      "_createdOn": 1689698703000
    },
    {
      "_id": 39,
      "name": "Sahara Desert",
      "country": "Egypt",
      "description": "The unforgiving sea of sand.",
      "_ownerId": "847ec027-f659-4086-8032-5173e2f9c93a",
      "img": "/assets/destination-images/sahara-desert1-365x300.webp",
      "_createdOn": 1689698703001
    },
    {
      "_id": 40,
      "name": "Dubai",
      "country": "United Arab Emirates",
      "description": "The city of the future, with some of the most amazing architecture in the world.",
      "_ownerId": "847ec027-f659-4086-8032-5173e2f9c93a",
      "img": "/assets/destination-images/Dubai-United-Arab-Emirates-500x500.webp",
      "_createdOn": 1689698703002
    },
    {
      "_id": 41,
      "name": "Ha Long Bay",
      "country": "Vietnam",
      "description": "Beautiful limestone formations jetting out of the green water. A UNESCO world heritage site.",
      "_ownerId": "847ec027-f659-4086-8032-5173e2f9c93a",
      "img": "/assets/destination-images/Ha-Long-Bay-Vietnam.webp",
      "_createdOn": 1689698703003
    },
    {
      "_id": 42,
      "name": "Moeraki Boulders",
      "country": "New Zealand",
      "description": "Strange spherical boulders line the shore.",
      "_ownerId": "847ec027-f659-4086-8032-5173e2f9c93a",
      "img": "/assets/destination-images/Moeraki-Boulders-New-Zealand-365x365.webp",
      "_createdOn": 1689698703004
    },
    {
      "_id": 43,
      "name": "The Great Wall of China",
      "country": "China",
      "description": "It cannot actually be seen from space. Except with a telescope. But then lots of things can be.",
      "_ownerId": "847ec027-f659-4086-8032-5173e2f9c93a",
      "img": "/assets/destination-images/Great-Wall-of-China-365x365.webp",
      "_createdOn": 1689698703005
    },
    {
      "_id": 44,
      "name": "Antarctica",
      "country": "Antarctica",
      "description": "Harsh but beautiful sea of ice.",
      "_ownerId": "847ec027-f659-4086-8032-5173e2f9c93a",
      "img": "/assets/destination-images/Antarctica1-300x200.webp",
      "_createdOn": 1689698703006
    },
    {
      "_id": 45,
      "name": "Lake Retba",
      "country": "Senegal",
      "description": "An extremely salty lake turned pink by algea.",
      "_ownerId": "847ec027-f659-4086-8032-5173e2f9c93a",
      "img": "/assets/destination-images/Lake-retba-enegal-365x365.webp",
      "_createdOn": 1689698703007
    },
    {
      "_id": 46,
      "name": "Morocco",
      "country": "Morocco",
      "description": "An exotic world of its own, from the colorful marketplaces to the luxurious hotels, everything in this place is different and unique from everything else.",
      "_ownerId": "847ec027-f659-4086-8032-5173e2f9c93a",
      "img": "/assets/destination-images/Morocco-197x300.webp",
      "_createdOn": 1689698703008
    },
    {
      "_id": 47,
      "name": "The Fjords of Norway",
      "country": "Norway",
      "description": "The things of fairytales.",
      "_ownerId": "847ec027-f659-4086-8032-5173e2f9c93a",
      "img": "/assets/destination-images/The-Fjords-of-Norway.webp",
      "_createdOn": 1689698703009
    },
    {
      "_id": 48,
      "name": "Socotra",
      "country": "Yemen",
      "description": "Strange, other worldly landscapes.",
      "_ownerId": "847ec027-f659-4086-8032-5173e2f9c93a",
      "img": "/assets/destination-images/socotra-republic-of-yemen-365x280.webp",
      "_createdOn": 1689698703010
    },
    {
      "_id": 49,
      "name": "Alaska",
      "country": "USA",
      "description": "Snow capped mountains in winter and greenery in summer.",
      "_ownerId": "847ec027-f659-4086-8032-5173e2f9c93a",
      "img": "/assets/destination-images/Alaska-365x365.webp",
      "_createdOn": 1689698703011
    },
    {
      "_id": 61,
      "name": "Victoria",
      "country": "Australia",
      "description": "Limestone stacks of the 12 Apostles, on the sea.",
      "_ownerId": "847ec027-f659-4086-8032-8c42f830dffc",
      "img": "/assets/destination-images/Victoria-12-apostles-australia-500x500.webp",
      "_createdOn": 1689698703023
    },
    {
      "_id": 62,
      "name": "Fingals Cave",
      "country": "Scotland",
      "description": "Unusual basalt columns formed by lava flow.",
      "_ownerId": "847ec027-f659-4086-8032-8c42f830dffc",
      "img": "/assets/destination-images/Fingals-Cave-Scotland-500x500.webp",
      "_createdOn": 1689698703024
    },
    {
      "_id": 63,
      "name": "Giants Causeway",
      "country": "Ireland",
      "description": "Also formed by lava flows, a UNESCO world heritage site.",
      "_ownerId": "847ec027-f659-4086-8032-8c42f830dffc",
      "img": "/assets/destination-images/Giants-Causeway-300x199.webp",
      "_createdOn": 1689698703025
    },
    {
      "_id": 64,
      "name": "Lake Tahoe, California & Nevada",
      "country": "USA",
      "description": "An enormous lake surrounded by evergreens and relaxing scenery.",
      "_ownerId": "847ec027-f659-4086-8032-8c42f830dffc",
      "img": "/assets/destination-images/Lake-Tahoe-California-Nevada-USA.webp",
      "_createdOn": 1689698703026
    },
    {
      "_id": 65,
      "name": "Cappadocia",
      "country": "Turkey",
      "description": "Hundreds of underground buildings and fairy chimneys make this land unique.",
      "_ownerId": "847ec027-f659-4086-8032-8c42f830dffc",
      "img": "/assets/destination-images/Cappadocia-Turkey-365x365.webp",
      "_createdOn": 1689698703027
    },
    {
      "_id": 66,
      "name": "Havasu Falls, Grand Canyon, Arizona",
      "country": "USA",
      "description": "In Grand Canyon National Park is this majestic waterfall.",
      "_ownerId": "847ec027-f659-4086-8032-8c42f830dffc",
      "img": "/assets/destination-images/Havasu-Falls-300x205.webp",
      "_createdOn": 1689698703028
    },
    {
      "_id": 67,
      "name": "Glow worm cave",
      "country": "New Zealand",
      "description": "The walls glitter with glow worms in the dark, like a night sky. Ive wanted to go here ever since the Rocket Power movie came out",
      "_ownerId": "847ec027-f659-4086-8032-8c42f830dffc",
      "img": "/assets/destination-images/Glow-worm-cave-new-zealand-460x310-365x310.webp",
      "_createdOn": 1689698703029
    },
    {
      "_id": 68,
      "name": "The Australian Outback",
      "country": "Australia",
      "description": "A vast wilderness with unique animals.",
      "_ownerId": "847ec027-f659-4086-8032-8c42f830dffc",
      "img": "/assets/destination-images/Australian-outback-365x365.webp",
      "_createdOn": 1689698703030
    },
    {
      "_id": 69,
      "name": "Tikal",
      "country": "Guatemala",
      "description": "An ancient Mayan city, mysterious and waiting to be explored.",
      "_ownerId": "847ec027-f659-4086-8032-8c42f830dffc",
      "img": "/assets/destination-images/Tikal-Guatemala.webp",
      "_createdOn": 1689698703031
    },
    {
      "_id": 70,
      "name": "Antelope Canyon, Arizona",
      "country": "USA",
      "description": "A gorgeous and beautifully colored canyon.",
      "_ownerId": "847ec027-f659-4086-8032-8c42f830dffc",
      "img": "/assets/destination-images/Antelope-Canyon-Arizona-500x500.webp",
      "_createdOn": 1689698703032
    },
    {
      "_id": 71,
      "name": "Reed Flut Cave",
      "country": "China",
      "description": "A vibrant natural limestone cave.",
      "_ownerId": "847ec027-f659-4086-8032-8c42f830dffc",
      "img": "/assets/destination-images/Reed-Flute-Cave_China-365x365.webp",
      "_createdOn": 1689698703033
    },
    {
      "_id": 72,
      "name": "Verdon Gorge",
      "country": "France",
      "description": "Limestone canyon with turquoise waters.",
      "_ownerId": "847ec027-f659-4086-8032-8c42f830dffc",
      "img": "/assets/destination-images/Verdon_Gorge_France-300x194.webp",
      "_createdOn": 1689698703034
    },
    {
      "_id": 73,
      "name": "Bagan/Pagan",
      "country": "Myanmar",
      "description": "The mystical Thousand Pagodas Plain.",
      "_ownerId": "847ec027-f659-4086-8032-8c42f830dffc",
      "img": "/assets/destination-images/Pagan-thousand-pagodas-plains-myanmar-365x365.webp",
      "_createdOn": 1689698703035
    },
    {
      "_id": 74,
      "name": "Swiss Alps",
      "country": "Switzerland",
      "description": "The epic and majestic mountain range.",
      "_ownerId": "847ec027-f659-4086-8032-8c42f830dffc",
      "img": "/assets/destination-images/Swiss-alps1-500x500.webp",
      "_createdOn": 1689698703036
    },
    {
      "_id": 75,
      "name": "Lake Bled",
      "country": "Slovenia",
      "description": "Back to the world of fairytales.",
      "_ownerId": "847ec027-f659-4086-8032-8c42f830dffc",
      "img": "/assets/destination-images/Lake-Bled-Slovenia-300x168.webp",
      "_createdOn": 1689698703037
    },
    {
      "_id": 76,
      "name": "Whitehaven Beach",
      "country": "Australia",
      "description": "Cream-colored swirls of sand and surf.",
      "_ownerId": "847ec027-f659-4086-8032-8c42f830dffc",
      "img": "/assets/destination-images/Whitehaven-Beach-Australia-500x500.webp",
      "_createdOn": 1689698703038
    },
    {
      "_id": 77,
      "name": "Luxor",
      "country": "Egypt",
      "description": "The great Karnak Temple.",
      "_ownerId": "847ec027-f659-4086-8032-8c42f830dffc",
      "img": "/assets/destination-images/Karmak-Temple-Egypt.webp",
      "_createdOn": 1689698703039
    },
    {
      "_id": 78,
      "name": "Beachy Head",
      "country": "England",
      "description": "White cliffs and a little candy striped lighthouse.",
      "_ownerId": "847ec027-f659-4086-8032-8c42f830dffc",
      "img": "/assets/destination-images/Beachy-Head-England-199x300.webp",
      "_createdOn": 1689698703040
    },
    {
      "_id": 79,
      "name": "Rio de Janeiro",
      "country": "Brazil",
      "description": "The iconic statue overlooking the city.",
      "_ownerId": "847ec027-f659-4086-8032-8c42f830dffc",
      "img": "/assets/destination-images/Rio-de-Janeiro-Brazil-365x365.webp",
      "_createdOn": 1689698703041
    },
    {
      "_id": 80,
      "name": "Spotted Lake",
      "country": "Canada",
      "description": "When the water starts to evaporate it forms colorful circles.",
      "_ownerId": "847ec027-f659-4086-8032-8c42f830dffc",
      "img": "/assets/destination-images/Spotted-Lake-Canada-500x500.webp",
      "_createdOn": 1689698703042
    },
    {
      "_id": 81,
      "name": "Hushe Valley, Karakoram Mountains",
      "country": "Pakistan",
      "description": "Laila Peak creates one of the most stunning mountainscapes on Earth.",
      "_ownerId": "847ec027-f659-4086-8032-8c42f830dffc",
      "img": "/assets/destination-images/Karakorum-S-K6-500x500.webp",
      "_createdOn": 1689698703043
    },
    {
      "_id": 82,
      "name": "Plitvice Lakes National Park",
      "country": "Croatia",
      "description": "Green waters and ribbons of waterfalls in dense vegetation.",
      "_ownerId": "847ec027-f659-4086-8032-8c42f830dffc",
      "img": "/assets/destination-images/Plitvice-Lakes-National-Park-Croatia-199x300.webp",
      "_createdOn": 1689698703044
    },
    {
      "_id": 83,
      "name": "Binalong Bay, Bay of Fires",
      "country": "Tasmania",
      "description": "Brightly colored rocks contrast the cool water.",
      "_ownerId": "847ec027-f659-4086-8032-8c42f830dffc",
      "img": "/assets/destination-images/Binalong-Bay-Bay-of-Fires-Tasmania.webp",
      "_createdOn": 1689698703045
    },
    {
      "_id": 84,
      "name": "Republic of Fiji",
      "country": "Fiji",
      "description": "Tropical island paradise.",
      "_ownerId": "847ec027-f659-4086-8032-8c42f830dffc",
      "img": "/assets/destination-images/Fiji-Japan-500x500.webp",
      "_createdOn": 1689698703046
    }
  ]
  constructor(){
    
  }
}
