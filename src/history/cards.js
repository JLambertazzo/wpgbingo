const cards = [
  [
    {
      name: "Bittersweet Way",
      description:
        "The development of St. Vital is explained. Abinojii Mikanah at St. Mary’s Rd.",
      img: "/history/img/1-bittersweet.JPG",
      full_img: "/history/img/1-bittersweet.JPG",
    },
    {
      name: "La Barriere",
      description:
        "A monument tells of Metis resistance. Pembina Highway, south of De L’Eglise Ave.",
      img: "/history/img/2-la-barriere.JPG",
      full_img: "/history/img/2-la-barriere.JPG",
    },
    {
      name: "St. Norbert Historical Park",
      description:
        "A park showing the history of St. Norbert. Off Pembina Highway on Turnbull Dr.",
      img: "/history/img/3-stn-hist-park.JPG",
      full_img: "/history/img/3-stn-hist-park.JPG",
    },
    {
      name: "Floodway",
      description:
        "A flood-prevention megaproject at Duff Roblin provincial park, off Courchaine Rd.",
      img: "/history/img/4-floodway.JPG",
      full_img: "/history/img/4-floodway.JPG",
    },
    {
      name: "Monastery",
      description: "The ruins of a monastery off Rue des Trappistes.",
      img: "/history/img/5-monastery.JPG",
      full_img: "/history/img/5-monastery.JPG",
    },
  ],
  [
    {
      name: "Louis Riel Sr. Mill",
      description:
        "Louis Riel’s father operated a mill here on the Seine river, north of John Bruce Rd.",
      img: "/history/img/6-riel-mill.JPG",
      full_img: "/history/img/6-riel-mill.JPG",
    },
    {
      name: "Legislature",
      description: "Statues and monuments adorn the legislature grounds.",
      img: "/history/img/7-legislature.JPG",
      full_img: "/history/img/7-legislature.JPG",
    },
    {
      name: "The Forks",
      description:
        "Signage on the Red River side of The Forks explains Winnipeg’s roots.",
      img: "/history/img/8-forks.JPG",
      full_img: "/history/img/8-forks.JPG",
    },
    {
      name: "Grant's Old Mill",
      description:
        "A recreation of a mill operated by Cuthbert Grant, along the Sturgeon Creek trail.",
      img: "/history/img/9-grants.JPG",
      full_img: "/history/img/9-grants.JPG",
    },
    {
      name: "Stopping the Survey",
      description:
        "Riel and his men confronted uninvited surveyors here, off Cloverwood Rd.",
      img: "/history/img/10-survey.jpg",
      full_img: "/history/img/10-survey.jpg",
    },
  ],
  [
    {
      name: "The Mint",
      description:
        "Countries around the world, shown by flags, use coins produced here.",
      img: "/history/img/11-mint.JPG",
      full_img: "/history/img/11-mint.JPG",
    },
    {
      name: "Upper Fort Garry",
      description:
        "The fort where the path to provincehood was laid. Main St. near Broadway.",
      img: "/history/img/12-ufg.jpg",
      full_img: "/history/img/12-ufg.jpg",
    },
    {
      name: "Early Skyscrapers",
      description:
        "A monument to boom times and historic architecture, Main St. near McDermott",
      img: "/history/img/13-skyscrapers.JPG",
      full_img: "/history/img/13-skyscrapers.JPG",
    },
    {
      name: "Air Force Way",
      description:
        "Historic military planes lie along Air Force Way, off the Yellow Ribbon trail.",
      img: "/history/img/14-air-force.jpg",
      full_img: "/history/img/14-air-force.jpg",
    },
    {
      name: "Pacific Junction",
      description:
        "A small train station lay here, along the Harte trail near Elmhurst Rd.",
      img: "/history/img/15-pacific-junction.JPG",
      full_img: "/history/img/15-pacific-junction.JPG",
    },
  ],
  [
    {
      name: "Shoal Lake Aqueduct",
      description:
        "A tribute to the source of Winnipeg’s drinking water. On the Seine river north of Provencher.",
      img: "/history/img/16-shoal.JPG",
      full_img: "/history/img/16-shoal.JPG",
    },
    {
      name: "St. Boniface Cathedral",
      description: "The cathedral in the heart of St. Boniface.",
      img: "/history/img/17-cathedral.jpg",
      full_img: "/history/img/17-cathedral.jpg",
    },
    {
      name: "Bloody Saturday",
      description:
        "A monument to the general strike of 1919. Main St. at Market Ave.",
      img: "/history/img/18-bloody-sat.JPG",
      full_img: "/history/img/18-bloody-sat.JPG",
    },
    {
      name: "McClung Park",
      description:
        "A small park named after a fighter for equality. Wolseley Ave. near Lenore. St.",
      img: "/history/img/19-mcclung.JPG",
      full_img: "/history/img/19-mcclung.JPG",
    },
    {
      name: "Citizen's Hall of Fame",
      description:
        "Busts of renowned people line the path in the southeast corner of Assiniboine Park.",
      img: "/history/img/20-chof.JPG",
      full_img: "/history/img/20-chof.JPG",
    },
  ],
  [
    {
      name: "CNR 2747",
      description:
        "The first steam locomotive built in western Canada. Transcona trail near Plessis Rd.",
      img: "/history/img/21-cn2747.JPG",
      full_img: "/history/img/21-cn2747.JPG",
    },
    {
      name: "Elzear Goulet Park",
      description: "A memorial to a Metis leader. Tache Ave. near Aubert Rd.",
      img: "/history/img/22-elzear.JPG",
      full_img: "/history/img/22-elzear.JPG",
    },
    {
      name: "Ross House",
      description:
        "The first post office in western Canada. Meade St. N near Euclid Ave.",
      img: "/history/img/23-ross-house.JPG",
      full_img: "/history/img/23-ross-house.JPG",
    },
    {
      name: "Ukrainian Labour Temple",
      description:
        "A hub for Ukrainian culture and the labour movement. McGregor St. at Pritchard Ave.",
      img: "/history/img/24-ukr-temple.JPG",
      full_img: "/history/img/24-ukr-temple.JPG",
    },
    {
      name: "Assiniboia School",
      description:
        "The site of a former residential school. Academy Rd, east of Route 90.",
      img: "/history/img/25-boia-school.jpg",
      full_img: "/history/img/25-boia-school.jpg",
    },
  ],
  [
    {
      name: "Transcona Cordite Plant",
      description:
        "A former munitions plant and Japanese internment camp. Transcona trail near Redonda St.",
      img: "/history/img/26-tcona-plant.JPG",
      full_img: "/history/img/26-tcona-plant.JPG",
    },
    {
      name: "Paddle to the Amazon",
      description:
        "The Starkells paddled 12,000 miles to Brazil from here. Kildonan Dr. near Bronx Pl.",
      img: "/history/img/27-amazon-paddle.JPG",
      full_img: "/history/img/27-amazon-paddle.JPG",
    },
    {
      name: "Chief Peguis/Tommy Prince",
      description:
        "Statues of Chief Peguis and Tommy Prince. Kildonan Park next to Prairie’s Edge restaurant.",
      img: "/history/img/28-peguis-prince.jpg",
      full_img: "/history/img/28-peguis-prince.jpg",
    },
    {
      name: "Battle of Seven Oaks",
      description:
        "Site of a bloody fur-trade era battle. Main St. at Rupertsland Blvd.",
      img: "/history/img/29-battle-7oaks.JPG",
      full_img: "/history/img/29-battle-7oaks.JPG",
    },
    {
      name: "Valour Road Plaza",
      description:
        "Three men from this street were awarded the Victoria Cross. Valour Rd. at Sargent Ave.",
      img: "/history/img/30-valour-rd.JPG",
      full_img: "/history/img/30-valour-rd.JPG",
    },
  ],
];
