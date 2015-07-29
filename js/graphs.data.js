var personalData = {
    name: 'F. Javier R. Donado',
    bornYear: '13.06.1984' // The beginning of time (for me, at least)
};

// Generated line with my age
// Generated timeline

var personalFacts = [
    {
        name: 'Where I was living',
        facts: [
            {name: 'Getafe', until: '01.06.2011'},
            {name: 'Madrid', until: '15.09.2012'},
            {name: 'Kornwestheim', until: '01.04.2014'},
            {name: 'Stuttgart', until: 'Today'}
        ]
    }, {
        name: 'What I was doing',
        facts: [
            {name: 'Play a lot', until: '01.01.1989'},
            {name: 'Play a lot with the PC', until: '01.01.1999'},
            {name: 'Play guitar', until: '01.01.1999'},
            {name: 'Play in a band', until: '01.09.2002'},
            {name: 'Study a lot', until: '01.01.2009'},
            {name: 'Learn foreign languages', until: '01.01.2014'},
            {name: 'Develop my own stuff', until: 'Today'}
        ]
    },
    {
        name: 'What I had in mind',
        facts: [
            {name: 'What is all this?', until: '01.01.1989'},
            {name: 'What is this thing called PC?', until: '01.01.1999'},
            {name: 'How do you play this instrument?', until: '01.09.2002'},
            {name: 'How do you solve this problem?', until: '01.09.2009'},
            {name: 'How do you say this in German?', until: '01.09.2012'},
            {name: 'And now, what?', until: 'Today'},
        ]
    }
];

var milestones = [
    {name: 'My dad got a PC', date: '1989'},
    {name: 'I got a guitar', date: '1999'},
    {name: 'Uni begins', date: '2002'},
    {name: 'I got my degree', date: '2009'},
    {name: 'First job as a developer', date: '2010'},
    {name: 'Went to Germany', date: '2012'}
];


//////

var dataUni = [
        {value: 24, label: "Computer Science"},
        {value: 24, label: "Electronics"},
        {value: 19, label: "Signal Theory"},
        {value: 14, label: "Physics"},
        {value: 14, label: "Maths"},
        {value: 5, label: "Other stuff"}
    ],
    dataProgLang = {
        labels: ["Java", "PHP", "Javascript", "HTML", "CSS", "MYSQL", "C#", 'C++', 'UML'],
        data: [4, 3.5, 4, 4, 4, 3, 3, 2.5, 3.5]
    },
    keyWords = [
        {text: "Java", weight: 4},
        {text: "PHP", weight: 3.5},
        {text: "Javascript", weight: 4},
        {text: "HTML", weight: 3},
        {text: "CSS", weight: 3},
        {text: "MySQL", weight: 3},
        {text: "C++", weight: 2.5},
        {text: "UML", weight: 4},
        {text: "TDD", weight: 2.7},
        {text: "Linux Admin", weight: 2.5},
        {text: "GIT", weight: 4},
        {text: "SVN", weight: 1.5},
        {text: "VIM", weight: 2},
        {text: "Gimp", weight: 1.5},
        {text: "WebSphere MQ", weight: 1},
        {text: "Shell Scripting", weight: 1},
        {text: "Perl", weight: 1},
        {text: "WebSphere MB", weight: 1.5},
        {text: "Inkscape", weight: 2.5},
        {text: "C#", weight: 3}
    ],
    dataWork = [
        {value: 60, label: "Software Developer"},
        {value: 20, label: "Software Integrator"},
        {value: 15, label: "System Admin."},
        {value: 5, label: "System Tester"}
    ],
    dataSector = [
        {value: 20, label: "NLP"},
        {value: 20, label: "SOA"},
        {value: 20, label: "Digital Signage"},
        {value: 20, label: "Vehicle Telematics"},
        {value: 20, label: "Others"}
    ],
    languagesISpeak = [
        {name: 'Spanish'},
        {name: 'English'},
        {name: 'German'}
    ],
    companiesAndClients = [
        {
            name: 'Primeur S.A.',
            clients: [
                {name: 'Mitsubishi'},
                {name: 'Repsol'},
                {name: 'El Corte Inglés'},
                {name: 'IBM'}
            ]
        },        {
            name: 'Daedalus S.A.',
            clients: [
                {name: 'Mitsubishi'},
                {name: 'Repsol'},
                {name: 'El Corte Inglés'},
                {name: 'IBM'}
            ]
        },
        {
            name: 'mm-lab GmbH', // Bosch, Daimler, Bachmann
            clients: [
                {name: 'Mitsubishi'},
                {name: 'Repsol'},
                {name: 'El Corte Inglés'},
                {name: 'IBM'}
            ]
        },        {
            name: 'Netvico GmbH',
            clients: [
                {name: 'Mitsubishi'}, // Deutsche Bahn, Lowa, Porsche, Apollo Optik, Peek&Cloppenburg
                {name: 'Repsol'},
                {name: 'El Corte Inglés'},
                {name: 'IBM'}
            ]
        },
    ];