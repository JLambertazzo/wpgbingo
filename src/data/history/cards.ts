import type { tCard } from '@/types';

// images are relative to /public/images/history

const cards: tCard[] = [
  {
    id: 'a1',
    name: 'Bittersweet Way',
    desc: 'The development of St. Vital is explained. Abinojii Mikanah at St. Mary’s Rd.',
    img: '1-bittersweet.JPG',
  },
  {
    id: 'b1',
    name: 'La Barriere',
    desc: 'A monument tells of Metis resistance. Pembina Highway, south of De L’Eglise Ave.',
    img: '2-la-barriere.JPG',
  },
  {
    id: 'c1',
    name: 'St. Norbert Historical Park',
    desc: 'A park showing the history of St. Norbert. Off Pembina Highway on Turnbull Dr.',
    img: '3-stn-hist-park.JPG',
  },
  {
    id: 'd1',
    name: 'Floodway',
    desc: 'A flood-prevention mega-project at Duff Roblin provincial park, off Courchaine Rd.',
    img: '4-floodway.JPG',
  },
  {
    id: 'e1',
    name: 'Monastery',
    desc: 'The ruins of a monastery off Rue des Trappistes.',
    img: '5-monastery.JPG',
  },
  {
    id: 'a2',
    name: 'Louis Riel Sr. Mill',
    desc: 'Louis Riel’s father operated a mill here on the Seine river, north of John Bruce Rd.',
    img: '6-riel-mill.JPG',
  },
  {
    id: 'b2',
    name: 'Legislature',
    desc: 'Statues and monuments adorn the legislature grounds.',
    img: '7-legislature.JPG',
  },
  {
    id: 'c2',
    name: 'The Forks',
    desc: 'Signage on the Red River side of The Forks explains Winnipeg’s roots.',
    img: '8-forks.JPG',
  },
  {
    id: 'd2',
    name: "Grant's Old Mill",
    desc: 'A recreation of a mill operated by Cuthbert Grant, along the Sturgeon Creek trail.',
    img: '9-grants.JPG',
  },
  {
    id: 'e2',
    name: 'Stopping the Survey',
    desc: 'Riel and his men confronted uninvited surveyors here, off Cloverwood Rd.',
    img: '10-survey.jpg',
  },
  {
    id: 'a3',
    name: 'The Mint',
    desc: 'Countries around the world, shown by flags, use coins produced here.',
    img: '11-mint.JPG',
  },
  {
    id: 'b3',
    name: 'Upper Fort Garry',
    desc: 'The fort where the path to provincehood was laid. Main St. near Broadway.',
    img: '12-ufg.jpg',
  },
  {
    id: 'c3',
    name: 'Early Skyscrapers',
    desc: 'A monument to boom times and historic architecture, Main St. near McDermott.',
    img: '13-skyscrapers.JPG',
  },
  {
    id: 'd3',
    name: 'Air Force Way',
    desc: 'Historic military planes lie along Air Force Way, off the Yellow Ribbon trail.',
    img: '14-air-force.jpg',
  },
  {
    id: 'e3',
    name: 'Pacific Junction',
    desc: 'A small train station lay here, along the Harte trail near Elmhurst Rd.',
    img: '15-pacific-junction.JPG',
  },
  {
    id: 'a4',
    name: 'Shoal Lake Aqueduct',
    desc: 'A tribute to the source of Winnipeg’s drinking water. On the Seine river north of Provencher.',
    img: '16-shoal.JPG',
  },
  {
    id: 'b4',
    name: 'St. Boniface Cathedral',
    desc: 'The cathedral in the heart of St. Boniface.',
    img: '17-cathedral.jpg',
  },
  {
    id: 'c4',
    name: 'Bloody Saturday',
    desc: 'A monument to the general strike of 1919. Main St. at Market Ave.',
    img: '18-bloody-sat.JPG',
  },
  {
    id: 'd4',
    name: 'McClung Park',
    desc: 'A small park named after a fighter for equality. Wolseley Ave. near Lenore. St.',
    img: '19-mcclung.JPG',
  },
  {
    id: 'e4',
    name: "Citizen's Hall of Fame",
    desc: 'Busts of renowned people line the path in the southeast corner of Assiniboine Park.',
    img: '20-chof.JPG',
  },
  {
    id: 'a5',
    name: 'CNR 2747',
    desc: 'The first steam locomotive built in western Canada. Transcona trail near Plessis Rd.',
    img: '21-cn2747.JPG',
  },
  {
    id: 'b5',
    name: 'Elzear Goulet Park',
    desc: 'A memorial to a Metis leader. Tache Ave. near Aubert Rd.',
    img: '22-elzear.JPG',
  },
  {
    id: 'c5',
    name: 'Ross House',
    desc: 'The first post office in western Canada. Meade St. N near Euclid Ave.',
    img: '23-ross-house.JPG',
  },
  {
    id: 'd5',
    name: 'Ukrainian Labour Temple',
    desc: 'A hub for Ukrainian culture and the labour movement. McGregor St. at Pritchard Ave.',
    img: '24-ukr-temple.JPG',
  },
  {
    id: 'e5',
    name: 'Assiniboia School',
    desc: 'The site of a former residential school. Academy Rd, east of Route 90.',
    img: '25-boia-school.jpg',
  },
  {
    id: 'a6',
    name: 'Transcona Cordite Plant',
    desc: 'A former munitions plant and Japanese internment camp. Transcona trail near Redonda St.',
    img: '26-tcona-plant.JPG',
  },
  {
    id: 'b6',
    name: 'Paddle to the Amazon',
    desc: 'The Starkells paddled 12,000 miles to Brazil from here. Kildonan Dr. near Bronx Pl.',
    img: '27-amazon-paddle.JPG',
  },
  {
    id: 'c6',
    // there are thin spaces (U+2009) around the solidus (/) to help with wrapping
    name: 'Chief Peguis / Tommy Prince',
    desc: 'Statues of Chief Peguis and Tommy Prince. Kildonan Park next to Prairie’s Edge restaurant.',
    img: '28-peguis-prince.jpg',
  },
  {
    id: 'd6',
    name: 'Battle of Seven Oaks',
    desc: 'Site of a bloody fur-trade era battle. Main St. at Rupertsland Blvd.',
    img: '29-battle-7oaks.JPG',
  },
  {
    id: 'e6',
    name: 'Valour Road Plaza',
    desc: 'Three men from this street were awarded the Victoria Cross. Valour Rd. at Sargent Ave.',
    img: '30-valour-rd.JPG',
  },
];

export default cards;
