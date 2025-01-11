const cards = [
    [
        {
            name: 'Fraipont Park',
            description: 'The lookout structure is in the new Bonavista neighbourhood, off Evelyne Reese Blvd',
            img: 'https://imgur.com/xaKUZzj.jpg',
            full_img: 'https://imgur.com/3rd02fb.jpg'
        },
        {
            name: 'Learning Nook',
            description: 'A little nook in Bois Des Esprits, just north of Shorehill Drive',
            img: 'https://imgur.com/4PZW93w.jpg',
            full_img: 'https://imgur.com/2INCrvi.jpg'
        },
        {
            name: 'Princess Auto Stadium',
            description: 'Princess Auto Stadium is on the University of Manitoba campus',
            img: '/img/harder/3princessautostadium.jpeg',
            full_img: '/img/harder/3princessautostadium.jpeg'
        },
        {
            name: 'Pollock Island',
            description: 'See the La Salle River empty into the Red at Pollock Island, via St. Pierre Street',
            img: 'https://imgur.com/ZPZ7u98.jpg',
            full_img: 'https://imgur.com/arhLi9H.jpg'
        },
        {
            name: 'Bridgwater Lakes Fountain',
            description: 'There are a few fountains in Bridgwater. The most impressive is Bridgwater Lakes, west of Kenaston',
            img: 'https://imgur.com/4dxgthI.jpg',
            full_img: 'https://imgur.com/760iCcM.jpg'
        }
    ],
    [
        {
            name: 'John Bruce Bridge',
            description: 'A foot bridge over the Seine river on John Bruce Road',
            img: 'https://imgur.com/35wYb1J.jpg',
            full_img: 'https://imgur.com/rxgMYOf.jpg'
        },
        {
            name: 'Bear Carving',
            description: 'A large carving on Kingston Crescent, south of the foot bridge',
            img: 'https://imgur.com/wiMtnY7.jpg',
            full_img: 'https://imgur.com/pBBOi2L.jpg'
        },
        {
            name: 'Tea Kettle',
            description: 'The tea kettle is at the Beaumont rapid transit station',
            img: 'https://imgur.com/xxDfaV9.jpg',
            full_img: 'https://imgur.com/GlVydex.jpg'
        },
        {
            name: 'Row Row Row',
            description: 'Row Row Row is an art installation at the Clarence rapid transit station',
            img: 'https://imgur.com/jO3QAYU.jpg',
            full_img: 'https://imgur.com/e2EYPOP.jpg'
        },
        {
            name: 'Sod House',
            description: 'The sod house is along the main bike path through Fort Whyte Alive',
            img: 'https://imgur.com/a3pYIc2.jpg',
            full_img: 'https://imgur.com/QVPL1L9.jpg'
        }
    ],
    [
        {
            name: 'Niakwa Bridge',
            description: 'A foot bridge over the Seine river at Niakwa Rd.',
            img: 'https://imgur.com/fG3Yflx.jpg',
            full_img: 'https://imgur.com/3GEXpUo.jpg'
        },
        {
            name: 'Gandhi Statue',
            description: 'The statue of Gandhi is near the Canadian Museum for Human Rights',
            img: 'https://imgur.com/aUePzci.jpg',
            full_img: 'https://imgur.com/5Tk6Ma6.jpg'
        },
        {
            name: 'Winnipeg Sign',
            description: 'The big sign at the Forks',
            img: 'https://imgur.com/41sPEAc.jpg',
            full_img: 'https://imgur.com/ZshSYLF.jpg'
        },
        {
            name: 'Arctic Alley',
            description: 'Arctic Alley is a colourful back lane near Canora Street and Wolseley Ave.',
            img: 'https://imgur.com/zPhJG5m.jpg',
            full_img: 'https://imgur.com/VnhYUtG.jpg'
        },
        {
            name: 'Harte Trail Train',
            description: 'The site of a former train station along the Harte Trail near Elmhurst Road',
            img: 'https://imgur.com/Zi3Ydeq.jpg',
            full_img: 'https://imgur.com/H7FcFLg.jpg'
        }
    ],
    [
        {
            name: 'Voyageur Bridge',
            description: 'The Voyageur foot bridge is just north of Provencher near Des Meurons',
            img: 'https://imgur.com/CQCboPg.jpg',
            full_img: 'https://imgur.com/RnczMxu.jpg'
        },
        {
            name: 'Disraeli Pedestrian Bridge',
            description: 'The active transportation bridge next to the Disraeli freeway',
            img: 'https://imgur.com/mtnAFUw.jpg',
            full_img: 'https://imgur.com/LaAAfjv.jpg'
        },
        {
            name: 'Seven Oaks House',
            description: 'Winnipeg’s oldest remaining house, on Mac Street, near Scotia Street.',
            img: 'https://imgur.com/RQHUD9q.jpg',
            full_img: 'https://imgur.com/9vPDDa7.jpg'
        },
        {
            name: 'Fort Garry Artillery',
            description: 'The Fort Garry Horse Museum and Archives near Cathedral Ave. and McGregor St.',
            img: 'https://imgur.com/ZOfKBRP.jpg',
            full_img: 'https://imgur.com/zzu7vql.jpg'
        },
        {
            name: 'Garbage Hill',
            description: 'Garbage Hill, off Wellington Ave., offers a nice view of the skyline.',
            img: 'https://imgur.com/NQAWRpz.jpg',
            full_img: 'https://imgur.com/xBcZY0z.jpg'
        }
    ],
    [
        {
            name: 'Hi Neighbour',
            description: 'The Hi Neighbour statue in the middle of Regent Ave',
            img: 'https://imgur.com/Us0TXaE.jpg',
            full_img: 'https://imgur.com/SGXy36f.jpg'
        },
        {
            name: 'Life Journey',
            description: 'The evolution of a butterfly, on the Northeast Pioneers Greenway trail near Concordia Ave',
            img: 'https://imgur.com/ukGK5WK.jpg',
            full_img: 'https://imgur.com/0GcIESb.jpg'
        },
        {
            name: 'Bunn\'s Creek',
            description: 'The Bunn’s Creek trail, off the Northeast Pioneers Greenway trail',
            img: 'https://imgur.com/K0p2tMo.jpg',
            full_img: 'https://imgur.com/K8Vr9Wt.jpg'
        },
        {
            name: 'McBeth Park',
            description: 'McBeth Park, home to huge trees, is a little north of Kildonan Park',
            img: 'https://imgur.com/RR4XNMJ.jpg',
            full_img: 'https://imgur.com/QjwiD1U.jpg'
        },
        {
            name: 'Dr. Jose Rizal',
            description: 'The statue of Filipino leader Jose Rizal sits near Adsum Drive',
            img: 'https://imgur.com/3EjJG4B.jpg',
            full_img: 'https://imgur.com/hFXMW4e.jpg'
        }
    ],
]