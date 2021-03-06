"use strict";
var data = {};


// Topics
data.topics = [{
    id: "Sports",
    name: "Sports",
    genreWeightings: [1, 0.6, 0.6, 1, 0.7, 1],
    audienceWeightings: [1, 1, 0.8]
}, {
    id: "Military",
    name: "Military",
    genreWeightings: [1, 0.6, 0.8, 1, 1, 0.6],
    audienceWeightings: [0.7, 0.9, 1]
}, {
    id: "Medieval",
    name: "Medieval",
    genreWeightings: [1, 1, 1, 0.8,
        1, 0.7
    ],
    audienceWeightings: [1, 1, 0.9]
}, {
    id: "Space",
    name: "Space",
    genreWeightings: [1, 0.8, 0.6, 1, 1, 0.7],
    audienceWeightings: [0.8, 1, 1]
}, {
    id: "Racing",
    name: "Racing",
    genreWeightings: [0.9, 0.6, 0.8, 1, 0.7, 1],
    audienceWeightings: [1, 1, 0.9]
}, {
    id: "Fantasy",
    name: "Fantasy",
    genreWeightings: [1, 1, 1, 0.8, 1, 0.6],
    audienceWeightings: [1, 1, 1]
}, {
    id: "Pirate",
    name: "Pirate",
    genreWeightings: [0.8, 1, 0.9, 0.9, 0.7, 0.8],
    audienceWeightings: [1, 1, 0.8]
}, {
    id: "Sci-Fi",
    name: "Sci-Fi",
    genreWeightings: [1, 1, 1, 1, 1, 0.8],
    audienceWeightings: [0.8, 1, 1]
}, {
    id: "Airplane",
    name: "Airplane",
    genreWeightings: [1, 0.6, 0.8, 1, 1, 1],
    audienceWeightings: [1, 1, 0.9]
}, {
    id: "Dungeon",
    name: "Dungeon",
    genreWeightings: [1, 0.8, 1, 1, 1, 0.6],
    audienceWeightings: [0.8, 1, 1]
}, {
    id: "Mystery",
    name: "Mystery",
    genreWeightings: [0.6, 1, 1, 0.8, 0.6, 0.8],
    audienceWeightings: [0.8, 0.9, 1]
}, {
    id: "Martial Arts",
    name: "Martial Arts",
    genreWeightings: [1, 0.8, 1, 1, 0.7, 1],
    audienceWeightings: [0.7, 0.9, 1]
}, {
    id: "History",
    name: "History",
    genreWeightings: [0.8, 0.8, 0.8, 1, 1, 0.9],
    audienceWeightings: [0.8, 1, 0.9]
}, {
    id: "Horror",
    name: "Horror",
    genreWeightings: [1, 1, 0.8, 0.6, 0.7, 0.8],
    audienceWeightings: [0.6, 0.9, 1]
}, {
    id: "Business",
    name: "Business",
    genreWeightings: [0.6, 0.8, 0.8, 1, 1, 0.6],
    audienceWeightings: [0.9, 1, 0.7]
}, {
    id: "Transport",
    name: "Transport",
    genreWeightings: [0.6,
        0.6, 0.6, 1, 1, 0.6
    ],
    audienceWeightings: [0.9, 1, 0.7]
}, {
    id: "Comedy",
    name: "Comedy",
    genreWeightings: [0.6, 1, 0.8, 0.6, 0.6, 1],
    audienceWeightings: [0.8, 0.9, 1]
}, {
    id: "Ninja",
    name: "Ninja",
    genreWeightings: [1, 0.8, 0.8, 0.6, 0.8, 0.9],
    audienceWeightings: [1, 0.9, 0.9]
}, {
    id: "Romance",
    name: "Romance",
    genreWeightings: [0.6, 1, 0.8, 0.9, 0.6, 0.9],
    audienceWeightings: [0.8, 1, 1]
}, {
    id: "Movies",
    name: "Movies",
    genreWeightings: [0.8, 0.8, 0.6, 1, 0.6, 1],
    audienceWeightings: [0.9,
        1, 0.9
    ]
}, {
    id: "Spy",
    name: "Spy",
    genreWeightings: [1, 1, 1, 0.8, 0.7, 0.8],
    audienceWeightings: [0.8, 0.9, 1]
}, {
    id: "Detective",
    name: "Detective",
    genreWeightings: [0.6, 1, 1, 0.8, 0.6, 0.9],
    audienceWeightings: [0.9, 1, 0.8]
}, {
    id: "Cyberpunk",
    name: "Cyberpunk",
    genreWeightings: [1, 0.8, 1,
        0.8, 0.7, 0.6
    ],
    audienceWeightings: [0.7, 0.9, 1]
}, {
    id: "UFO",
    name: "UFO",
    genreWeightings: [1, 0.8, 0.6, 0.8, 1, 0.8],
    audienceWeightings: [0.8, 1, 0.9]
}, {
    id: "Hospital",
    name: "Hospital",
    genreWeightings: [0.6, 0.6, 0.8, 1, 0.8, 0.7],
    audienceWeightings: [0.7, 1, 0.8]
}, {
    id: "Evolution",
    name: "Evolution",
    genreWeightings: [0.7,
        0.6, 0.6, 1, 1, 0.6
    ],
    audienceWeightings: [0.8, 1, 0.7]
}, {
    id: "Time Travel",
    name: "Time Travel",
    genreWeightings: [0.9, 1, 1, 0.7, 0.6, 0.7],
    audienceWeightings: [0.9, 1, 0.8]
}, {
    id: "Life",
    name: "Life",
    genreWeightings: [0.6, 1, 0.9, 1, 0.6, 0.8],
    audienceWeightings: [1, 1, 0.8]
}, {
    id: "Virtual Pet",
    name: "Virtual Pet",
    genreWeightings: [0.6, 0.8, 0.9, 1, 0.9, 1],
    audienceWeightings: [1, 0.8, 0.7]
}, {
    id: "Vocabulary",
    name: "Vocabulary",
    genreWeightings: [0.6,
        0.6, 0.6, 1, 1, 1
    ],
    audienceWeightings: [0.9, 1, 0.6]
}, {
    id: "Hunting",
    name: "Hunting",
    genreWeightings: [1, 0.9, 0.9, 1, 0.7, 0.9],
    audienceWeightings: [0.9, 1, 0.9]
}, {
    id: "Law",
    name: "Law",
    genreWeightings: [0.6, 1, 0.9, 0.9, 0.9, 0.6],
    audienceWeightings: [0.8, 1, 0.7]
}, {
    id: "Game Dev",
    name: "Game Dev",
    genreWeightings: [0.6,
        0.7, 0.6, 1, 0.6, 0.8
    ],
    audienceWeightings: [0.9, 1, 0.7]
}, {
    id: "City",
    name: "City",
    genreWeightings: [0.7, 0.6, 0.7, 1, 1, 0.7],
    audienceWeightings: [0.9, 1, 0.8]
}, {
    id: "School",
    name: "School",
    genreWeightings: [0.8, 1, 1, 1, 1, 0.8],
    audienceWeightings: [1, 0.9, 0.7]
}, {
    id: "Fashion",
    name: "Fashion",
    genreWeightings: [0.6, 0.8, 1, 1, 0.6, 1],
    audienceWeightings: [1, 0.8, 0.6]
}, {
    id: "Zombies",
    name: "Zombies",
    genreWeightings: [1, 0.7, 0.9, 0.7, 0.9, 1],
    audienceWeightings: [0.9,
        0.8, 1
    ]
}, {
    id: "Hacking",
    name: "Hacking",
    genreWeightings: [0.7, 0.8, 0.7, 1, 1, 0.6],
    audienceWeightings: [0.7, 0.9, 1]
}, {
    id: "Government",
    name: "Government",
    genreWeightings: [0.6, 0.6, 0.6, 1, 1, 0.7],
    audienceWeightings: [0.6, 1, 0.8]
}, {
    id: "Prison",
    name: "Prison",
    genreWeightings: [1, 1, 0.8, 1, 0.8, 0.6],
    audienceWeightings: [0.7, 0.9, 1]
}, {
    id: "Surgery",
    name: "Surgery",
    genreWeightings: [0.8, 0.7, 0.6, 1, 0.7, 0.6],
    audienceWeightings: [0.8, 1, 0.9]
}, {
    id: "Music",
    name: "Music",
    genreWeightings: [1, 0.9, 0.6, 1, 0.6, 1],
    audienceWeightings: [1, 0.9, 0.8]
}, {
    id: "Rythm",
    name: "Rhythm",
    genreWeightings: [1, 0.7, 0.7, 1, 0.6, 1],
    audienceWeightings: [1, 0.9, 0.8]
}, {
    id: "Superheroes",
    name: "Superheroes",
    genreWeightings: [1, 0.6, 0.9, 0.6, 0.6, 0.7],
    audienceWeightings: [1, 1, 1]
}, {
    id: "Post Apocalyptic",
    name: "Post Apocalyptic",
    genreWeightings: [1, 0.8, 1, 0.6, 0.9, 0.6],
    audienceWeightings: [0.6, 0.9, 1]
}, {
    id: "Alternate History",
    name: "Alternate History",
    genreWeightings: [1, 0.8, 1, 0.8, 0.9, 0.6],
    audienceWeightings: [0.6, 1, 1]
}, {
    id: "Vampire",
    name: "Vampire",
    genreWeightings: [1, 0.8, 1, 0.6, 0.6, 0.7],
    audienceWeightings: [0.7, 1, 1]
}, {
    id: "Werewolf",
    name: "Werewolf",
    genreWeightings: [1, 0.8, 1, 0.6, 0.6, 0.7],
    audienceWeightings: [0.7, 0.9, 1]
}, {
    id: "Aliens",
    name: "Aliens",
    genreWeightings: [1, 0.8, 1, 0.6, 0.9, 0.7],
    audienceWeightings: [0.9, 1, 1]
}, {
    id: "Wild West",
    name: "Wild West",
    genreWeightings: [0.9, 0.7, 1, 0.6, 0.6, 0.7],
    audienceWeightings: [1, 0.9, 1]
}, {
    id: "Dance",
    name: "Dance",
    genreWeightings: [0.7, 0.6, 0.6, 1, 0.6, 1],
    audienceWeightings: [1, 0.9, 0.8]
}, {
    id: "Cooking",
    name: "Cooking",
    genreWeightings: [0.9, 0.7, 0.8, 1, 0.7, 1],
    audienceWeightings: [0.8, 1, 0.6]
}, {
    id: "Farming",
    name: "Farming",
    genreWeightings: [0.6, 0.7, 0.6, 1, 0.6, 1],
    audienceWeightings: [0.9, 1, 0.8]
}, {
    id: "Crime",
    name: "Crime",
    genreWeightings: [1, 0.7, 0.8, 0.9, 0.7, 0.6],
    audienceWeightings: [0.6, 0.8, 1]
}, {
    id: "Disasters",
    name: "Disasters",
    genreWeightings: [0.9, 0.8, 0.7, 1, 1, 0.7],
    audienceWeightings: [0.7, 0.9, 1]
}, {
    id: "Assassin",
    name: "Assassin",
    genreWeightings: [1, 0.7, 1, 0.8, 0.6, 0.6],
    audienceWeightings: [0.6, 0.8, 1]
}, {
    id: "Thief",
    name: "Thief",
    genreWeightings: [0.9, 0.8, 1, 0.9, 0.6, 0.9],
    audienceWeightings: [0.7, 1, 1]
}, {
    id: "Colonization",
    name: "Colonization",
    genreWeightings: [0.7, 0.6, 0.6, 1, 1, 0.7],
    audienceWeightings: [0.7, 1, 0.8]
}, {
    id: "Construction",
    name: "Construction",
    genreWeightings: [0.7, 0.6, 0.6, 1, 0.9, 0.8],
    audienceWeightings: [0.8, 1, 0.9]
}, {
    id: "Mythology",
    name: "Mythology",
    genreWeightings: [1, 0.8, 0.9, 0.9, 0.8, 0.7],
    audienceWeightings: [0.7, 1, 1]
}, {
    id: "Abstract",
    name: "Abstract",
    genreWeightings: [0.9, 1, 0.6, 0.6, 0.8, 0.6],
    audienceWeightings: [0.8, 0.9, 1]
}, {
    id: "Mad Science",
    name: "Mad Science",
    genreWeightings: [0.9, 1, 0.7, 0.9, 0.6, 0.6],
    audienceWeightings: [0.8, 0.9, 1]
}, {
    id: "Extreme Sports",
    name: "Extreme Sports",
    genreWeightings: [1, 0.6, 0.6, 1, 0.7, 0.9],
    audienceWeightings: [1, 0.7, 1]
}, {
    id: "Dystopian",
    name: "Dystopian",
    genreWeightings: [0.8, 0.9, 0.8, 1, 0.9, 0.6],
    audienceWeightings: [0.6, 0.8, 1]
}, {
    id: "Expedition",
    name: "Expedition",
    genreWeightings: [0.7, 0.9, 0.6, 0.9, 1, 0.6],
    audienceWeightings: [0.8, 1, 0.9]
}, {
    id: "Technology",
    name: "Technology",
    genreWeightings: [0.6, 0.7, 0.6, 1, 0.9, 0.6],
    audienceWeightings: [0.8, 1, 0.9]
}];

// Genres
data.genres = {
    Action: {
        id: "Action",
        name: "Action"
    },
    Adventure: {
        id: "Adventure",
        name: "Adventure"
    },
    RPG: {
        id: "RPG",
        name: "RPG"
    },
    Simulation: {
        id: "Simulation",
        name: "Simulation"
    },
    Strategy: {
        id: "Strategy",
        name: "Strategy"
    },
    Casual: {
        id: "Casual",
        name: "Casual"
    }
}

// Consoles
data.consoles = [{
        id: "PC",
        name: "PC",
        published: "1/1/1",
        platformRetireDate: "260/12/4",
        genreWeightings: [0.9, 1, 0.9, 1, 1, 0.6],
        audienceWeightings: [0.8, 0.9, 1]
    }, {
        id: "G64",
        name: "G64",
        company: "Govodore",
        published: "1/1/1",
        platformRetireDate: "4/6/2",
        genreWeightings: [0.9, 1, 0.9, 0.9, 1, 0.7],
        audienceWeightings: [0.8, 0.9, 1],
    }, {
        id: "TES",
        name: "TES",
        company: "Ninvento",
        published: "2/1/2",
        platformRetireDate: "6/6/2",
        genreWeightings: [0.8, 0.7, 0.8, 0.8, 0.7, 1],
        audienceWeightings: [1, 0.9, 0.6],
    },
    {
        id: "Master V",
        name: "Master V",
        company: "Vena",
        published: "3/2/3",
        platformRetireDate: "11/3/4",
        genreWeightings: [0.9, 0.7, 0.8, 0.8, 0.7, 1],
        audienceWeightings: [0.9, 1, 0.7],
    }, {
        id: "Gameling",
        name: "Gameling",
        company: "Ninvento",
        published: "3/9/2",
        platformRetireDate: "14/4/2",
        genreWeightings: [0.8, 0.7, 0.9, 0.9, 0.6, 1],
        audienceWeightings: [1, 0.9, 0.6],
    },
    {
        id: "Vena Gear",
        name: "Vena Gear",
        company: "Vena",
        published: "4/2/4",
        platformRetireDate: "8/4/1",
        genreWeightings: [0.9, 0.8, 0.8, 0.9, 0.6, 1],
        audienceWeightings: [0.9, 1, 0.8],
    }, {
        id: "Vena Oasis",
        name: "Vena Oasis",
        company: "Vena",
        published: "5/2/4",
        platformRetireDate: "10/11/1",
        genreWeightings: [1, 0.8, 0.8, 0.9, 0.6, 0.7],
        audienceWeightings: [0.8, 1, 0.9],
    }, {
        id: "Super TES",
        name: "Super TES",
        company: "Ninvento",
        published: "5/12/4",
        platformRetireDate: "9/8/1",
        genreWeightings: [0.9, 0.9, 0.9, 1, 0.7, 0.9],
        audienceWeightings: [1, 0.9, 0.7],
    }, {
        id: "Playsystem",
        name: "Playsystem",
        company: "Vonny",
        published: "7/7/1",
        platformRetireDate: "12/11/3",
        genreWeightings: [1, 0.8, 1, 0.9, 0.7, 0.6],
        audienceWeightings: [0.8, 1, 0.9],
    }, {
        id: "TES 64",
        name: "TES 64",
        company: "Ninvento",
        published: "9/2/1",
        platformRetireDate: "13/5/4",
        genreWeightings: [0.9, 0.8, 0.7, 0.8, 0.7, 0.9],
        audienceWeightings: [1, 0.9, 0.9],
    },
    {
        id: "DreamVast",
        name: "DreamVast",
        company: "Vena",
        published: "10/8/3",
        platformRetireDate: "14/1/4",
        genreWeightings: [1, 0.7, 0.8, 1, 0.7, 0.7],
        audienceWeightings: [0.7, 1, 1],
    }, {
        id: "Playsystem 2",
        name: "Playsystem 2",
        company: "Vonny",
        published: "11/5/2",
        platformRetireDate: "18/6/3",
        genreWeightings: [1, 0.8, 1, 0.9, 0.7, 0.9],
        audienceWeightings: [0.9, 1, 0.8],
    }, {
        id: "mBox",
        name: "mBox",
        company: "Mirconoft",
        published: "11/12/4",
        platformRetireDate: "17/2/3",
        genreWeightings: [1, 0.8, 0.9, 0.9, 0.7, 0.7],
        audienceWeightings: [0.8, 1, 0.9],
    }, {
        id: "gameSphere",
        name: "Game Sphere",
        company: "Ninvento",
        published: "12/12/1",
        platformRetireDate: "17/2/3",
        genreWeightings: [0.8, 0.8, 0.7, 0.8, 0.7, 1],
        audienceWeightings: [0.9, 0.9, 0.8],
    }, {
        id: "GS",
        name: "GS",
        company: "Ninvento",
        published: "13/8/4",
        platformRetireDate: "260/12/4",
        genreWeightings: [0.9, 0.9, 1, 0.9, 0.9, 1],
        audienceWeightings: [1, 0.9, 0.8],
    }, {
        id: "PPS",
        name: "PPS",
        company: "Vonny",
        published: "14/3/4",
        platformRetireDate: "260/12/4",
        genreWeightings: [1, 0.7, 1, 0.8, 0.8, 0.8],
        audienceWeightings: [0.8, 0.9, 1],
    }, {
        id: "mBox 360",
        name: "mBox 360",
        company: "Mirconoft",
        published: "16/8/4",
        platformRetireDate: "24/2/3",
        genreWeightings: [1, 0.9, 1, 0.9, 0.7, 0.9],
        audienceWeightings: [0.8, 0.9, 1],
    }, {
        id: "Nuu",
        name: "Nuu",
        company: "Ninvento",
        published: "17/4/4",
        platformRetireDate: "21/6/3",
        genreWeightings: [0.8, 0.6, 0.7, 1, 0.7, 1],
        audienceWeightings: [1, 1, 0.7],
    }, {
        id: "Playsystem 3",
        name: "Playsystem 3",
        company: "Vonny",
        published: "17/12/4",
        platformRetireDate: "24/9/3",
        genreWeightings: [1, 0.9, 0.9, 1, 0.7, 0.8],
        audienceWeightings: [0.8, 1, 0.9],
    }, {
        id: "grPhone",
        name: "grPhone",
        company: "Grapple",
        published: "18/9/1",
        platformRetireDate: "260/12/4",
        genreWeightings: [0.8, 0.8, 0.7, 0.9, 0.7, 1],
        audienceWeightings: [0.9, 1, 0.6],
    }, {
        id: "grPad",
        name: "grPad",
        company: "Grapple",
        published: "19/7/4",
        platformRetireDate: "260/12/4",
        genreWeightings: [0.8, 0.9, 0.7, 0.9, 0.9, 1],
        audienceWeightings: [0.9, 1, 0.6],
    }, {
        id: "mPad",
        name: "mPad",
        company: "Mirconoft",
        published: "20/10/4",
        platformRetireDate: "260/12/4",
        genreWeightings: [0.7, 0.9, 0.8, 0.9, 0.7, 0.9],
        audienceWeightings: [0.7, 0.9, 0.8],
    }, {
        id: "Wuu",
        name: "Wuu",
        company: "Ninvento",
        published: "20/12/4",
        platformRetireDate: "26/5/2",
        developmentCosts: 8E4,
        genreWeightings: [0.9, 0.7, 0.8, 1, 0.7, 1],
        audienceWeightings: [0.9, 1, 0.7],
    }, {
        id: "OYA",
        name: "OYA",
        company: "KickIT",
        published: "22/10/4",
        platformRetireDate: "260/12/4",
        genreWeightings: [0.9, 0.7, 0.8, 0.9, 0.8, 1],
        audienceWeightings: [0.8, 1, 0.9],
    }, {
        id: "mBox One",
        name: "mBox One",
        company: "Mirconoft",
        published: "23/8/4",
        platformRetireDate: "29/12/4",
        genreWeightings: [1, 0.8, 0.9, 0.9, 0.7, 0.9],
        audienceWeightings: [0.7, 1, 0.8],
    }, {
        id: "Playsystem 4",
        name: "Playsystem 4",
        company: "Vonny",
        published: "23/10/4",
        platformRetireDate: "29/4/4",
        genreWeightings: [1, 0.8, 1, 0.9, 0.7, 0.9],
        audienceWeightings: [0.8, 1, 0.9],
    }, {
        id: "Swap",
        name: "Swap",
        company: "Ninvento",
        published: "25/3/1",
        platformRetireDate: "260/12/4",
        genreWeightings: [0.9, 0.8, 1, 0.8, 0.7, 1],
        audienceWeightings: [0.9, 1, 0.8],
    }, {
        id: "mBox Next",
        name: "mBox Next",
        company: "Mirconoft",
        published: "27/8/4",
        platformRetireDate: "260/12/4",
        genreWeightings: [0.9, 0.9, 0.9, 0.8, 0.7, 1],
        audienceWeightings: [0.9, 1, 0.8],
    }, {
        id: "Playsystem 5",
        name: "Playsystem 5",
        company: "Vonny",
        published: "27/10/4",
        platformRetireDate: "260/12/4",
        genreWeightings: [1, 0.7, 0.9, 1, 0.7, 0.9],
        audienceWeightings: [0.8, 1, 0.9],
    }
]

var toJSON = function(data, file) {
    var fs = require('fs');
    fs.writeFile(file, JSON.stringify(data, null, 2), 'utf8', console.log)
}

// Uncomment the following line if you need to put this in game_data.json again!
// toJSON(data, 'game_data.json')