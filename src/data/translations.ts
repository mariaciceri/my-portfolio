export const content = {
    en: {
        header: {
            title: 'Full-stack Developer',
            navigator: ['Home', 'Experience', 'Projects', 'Contact'],
        },
        greeting: "Hey, I'm Maria",
        description: "Curious mind, former math teacher turned into data & software nerd. I must really love problem-solving and numbers?!",
        image: "/assets/ny.webp",
        theme: "english",
        about: `I followed a rabbit hole into the world of code.. and as a bunny owner, it felt oddly on brand.
\nI recently completed a diploma in software development(EQF level 5) with a specialisation in predictive analytics, and graduated with Merit: from home, on my own, with a lot of coffee and even more determination.
\nMypassion lies in solving problems, especially when they involve data, patterns, and a good puzzle. Whether it's predicting loan defaults using machine learning, building a shopping list app with JavaScript OOP, or managing healthcare inventories with Django and TDD, I'm all in: from backend logic to frontend polish (UX matters!). I've also dabbled in React(trice!), built a movie recommender in Python, and even crafted an Advent calendar app during a hackathon. Read more below ;). 
\nAt my internship at Qling.ai, I wore many hats: fullstack dev, ML support, UX designer, Scrum Master, and general code-quality cheerleader.
\nIn short: I'm someone who gets a little too excited about clean data, clever algorithms, and intuitive design.I thrive when I can learn, collaborate, and build meaningful things.
\nLet's create something awesome?`,
        exp: [
            {
                company: "Qling.ai",
                position: "Full-stack/ML Developer Intern",
                date: "04/2025 - 07/2025",
                description: `During my 3-month internship at Qling.ai, I worked as a fullstack developer and ML support, contributing across the entire stack: from frontend design using HTML and CSS to backend logic with Flask and SQLAlchemy. I was responsible for integrating Google APIs to enable user login, email classification, and sending emails on behalf of users. While I wasn't involved in building the ML models themselves, I handled everything around them: data handling, integration, and user interface. I also stepped into the role of Scrum Master, led daily standups, and promoted clean code and good practices within the team. The internship followed agile methodology with weekly sprints and JIRA for task tracking, and gave me the chance to collaborate closely with other developers in a fast-paced, product-focused environment.`
            },
            {
                company: "Futuraskolan Hertig Karl",
                position: "Math Teacher",
                date: "02/2023 - 07/2024",
                description: `Taught mathematics to grades 6-9 and served as mentor for grades 7-8. Introduced programming logic and Python using free resources, adapted lessons to diverse skill levels, and supported a student teacher with guidance and feedback, developing strong leadership, flexibility, and mentoring skills.`
            },
            {
                company: "ISSR",
                position: "Teaching Assistant",
                date: "02/2022 - 02/2023",
                description: `Assisted grade 4 students in the classroom and co-led a Scratch coding club. Gained valuable organizational and teamwork skills through weekly planning and close collaboration with the lead teacher.`
            }
        ],
        projects: [
            {
                name:"Coming Soon",
                description: "A React Native + Expo + TypeScript mobile app for managing your video game library—launching soon! Users can manually add games, but the real fun is the auto-suggest feature: type a game name, and the app fetches metadata and cover art. Linking Steam account is already integrated, with more platforms coming. The goal? Clean, intuitive UX for gamers, built collaboratively with my very gamer husband. So no more scrolling through your library or going to many places to find if you have a game or not.",
                link: "",
                github: "",
                tech: "Problem-solving with asynchronous API integration, UI finesse in TypeScript, Seamless mobile UX flows",
            },
            {
                name:"TakeCare Inventory Management",
                description: "A full-stack Python/Django web app managing healthcare stock levels: supplies, restocking thresholds, expiration dates, and user roles. I architected the backend (PostgreSQL + Django ORM), built responsive frontends with JavaScript/HTML/CSS, and enforced quality via TDD, writing unit tests for models, views, and API endpoints.",
                link: "https://takecare-inventory.onrender.com/",
                github: "https://github.com/mariaciceri/takecare_inventory",
                tech: "Python, Django, PostgreSQL, TDD, JavaScript, HTML, CSS, REST API, User Authentication, Role-based Access Control, Responsive Design",
            },
            {
                name:"Loan Default Predictor",
                description: "A machine learning project in Jupyter Notebook: I cleaned and engineered features from raw financial data, evaluated multiple classifiers in Scikit-learn, visualized results with Seaborn & Matplotlib. Wrapped it all in a polished Streamlit web UI so non-technical users could predict if someone's likely to default.",
                link: "https://loan-default-predictor-0ouz.onrender.com/",
                github: "https://github.com/mariaciceri/loan_default_predictor",
                tech: "Jupyter Notebook, Python, Pandas, Scikit-learn, Matplotlib, Seaborn, Streamlit, CSV data, Business Analysis, Clear Visual Storytelling",
            },
            {
                name:"Pin Head Lists",
                description: "An OOP-based JavaScript app for creating shopping lists. I built dynamic list creation, item editing/deleting, and localStorage persistence. Clean UI with HTML/CSS, plus modular JS classes for flexibility.",
                link: "https://mariaciceri.github.io/pin_head_list/",
                github: "https://github.com/mariaciceri/pin_head_list",
                tech: "JavaScript, HTML, CSS, OOP, DOM Manipulation, LocalStorage",
            },
            {
                name:"Best 1000 Movies Finder",
                description: "Built in Python using CSV parsing and OOP, this app reads a curated dataset, lets users search by title/genre/year, and shows details and recommendations, all in the terminal or with the basic UI developed by Code Institute.",
                link: "https://movie-recommendation-yryd.onrender.com/",
                github: "https://github.com/mariaciceri/movie-recommendation",
                tech: "Python, OOP, CSV data",
            },
            {
                name:"Vini Artist Portfolio",
                description: "A sleek React/JavaScript site showcasing an artist’s work. I integrated Bootstrap for responsiveness, CSS animations for flair, Netlify for fast deployment, and React state/hooks for filtering/viewing functionality.",
                link: "https://vini-artist.netlify.app/",
                github: "https://github.com/mariaciceri/viniPage",
                tech: "React, JavaScript, CSS, Bootstrap, Collaboration with the Client, Responsive Design, User-Centric Design",
            },
            {
                name:"Countdown to Xmas 2024",
                description: "A festive React app counting down to Christmas day, built during a hackathon! Displays daily surprises behind “calendar doors” (a nod to digital advent calendars). I handled state management, conditional rendering, styling, and deployment on Netlify, all under tight time constraints.",
                link: "https://countdown-to-xmas-2024.netlify.app/",
                github: "https://github.com/mariaciceri/advent-calendar",
                tech: "React, JavaScript, CSS, Hackathon Project, Time Management, Creative Problem Solving, Team Collaboration, Communication",
            },
            {
                name:"This very portfolio",
                description: "My latest creation: a custom React + TypeScript + Tailwind CSS site with elegant Framer Motion animations, all bundled via Vite and live on Netlify. Designed by myself without any templates, the goal was to seamlessly showcase my skills, experiences, and personality.",
                link: "",
                github: "https://github.com/mariaciceri/my-portfolio",
                tech: "React, TypeScript, Tailwind CSS, Framer Motion, Vite, UX Design, Responsive Design, Performance Optimization, Collaboration",
            },
        ],
        contact: {
            message:"Are you ready to build something amazing together? Let's connect and create something awesome!",
            email:"Send me an e-mail and let's go!"
        }
    },
    sv: {
        header: {
            title: 'Full-stack Utvecklare',
            navigator: ['Hem', 'Erfarenhet', 'Projekt', 'Kontakt'],
        },
        greeting: "Hej, jag heter Maria",
        description: "Nyfiken själ, före detta mattelärare som blivit data- och kodnörd. Jag älskar väl problemlösning och siffror!",
        image: "/assets/midsommar.webp",
        theme: "svensk",
        about: `Jag följde ett kaninhål in i kodandets värld.. och eftersom jag har två riktiga kaniner så känns det faktiskt ganska logiskt.
\nJag har nyligen avslutat en yrkesutbildning i mjukvaruutveckling (EQF nivå 5) med inriktning mot prediktiv analys, och tog examen med betyget Merit: hemifrån, helt själv, med mycket kaffe och ännu mer envishet.
\nMin passion ligger i att lösa problem, särskilt när de handlar om data, mönster och kluriga utmaningar. Oavsett om det gäller att förutsäga låneförluster med maskininlärning, bygga en inköpslista med OOP i JavaScript, eller hantera sjukvårdslager i Django med TDD, så är jag med hela vägen: från backend-logik till frontend och UX (för det spelar roll!). Jag har också experimenterat med React (tre gånger!), byggt en filmrekommendationstjänst i Python, och skapat en digital julkalender under ett hackathon. Läs mer nedan ;).
\nUnder min praktik på Qling.ai bar jag många hattar: fullstack-utvecklare, ML-stöd, UX-designer, Scrum Master och allmän förespråkare för god kod.
\nKort sagt: jag är en person som blir lite för entusiastisk över ren data, smarta algoritmer och intuitiv design. Jag trivs när jag får lära mig nytt, samarbeta och bygga saker som faktiskt spelar roll.
\nSka vi skapa något grymt tillsammans?`,
        exp: [
            {
                company: "Qling.ai",
                position: "Praktikant, Full-stack/ML Developer",
                date: "04/2025 - 07/2025",
                description: `Under min tre månader långa praktik på Qling.ai arbetade jag som fullstackutvecklare och ML-stöd, med uppgifter som sträckte sig över hela stacken: från frontenddesign med HTML och CSS till backendlogik med Flask och SQLAlchemy. Jag ansvarade för att integrera Googles API:er för att möjliggöra inloggning, e-postklassificering samt skicka mejl å användarens vägnar. Även om jag inte utvecklade själva ML-modellerna, hanterade jag all integration runt dem: datahantering, backendfunktionalitet och användargränssnitt. Jag tog också rollen som Scrum Master, ledde dagliga standups och drev på för god kodkvalitet och utvecklingspraxis i teamet. Praktiken följde agila arbetsmetoder med veckosprintar och JIRA, och gav mig värdefull erfarenhet av samarbete i en snabb och produktfokuserad miljö.`
            },
            {
                company: "Futuraskolan Hertig Karl",
                position: "Mattelärare",
                date: "02/2023 - 07/2024",
                description: `Undervisade matematik i årskurs 6-9 och var mentor för årskurs 7-8. Introducerade programmeringslogik och Python med hjälp av kostnadsfria resurser, anpassade undervisningen efter olika kunskapsnivåer och handledde en lärarstudent med stöd och återkoppling, vilket utvecklade mitt ledarskap, min flexibilitet och min handledningsförmåga.`
            },
            {
                company: "ISSR",
                position: "Lärarassistent",
                date: "02/2022 - 02/2023",
                description: `Stöttade elever i årskurs 4 i klassrummet och var medledare för en kodklubb i Scratch. Utvecklade god organisations- och samarbetsförmåga genom veckoplanering och nära samarbete med klassläraren.`
            }
        ],
        projects: [
            {
                name: "Kommer snart",
                description: "En mobilapp byggd med React Native + Expo + TypeScript för att hantera ditt tv-spelsbibliotek – lanseras snart! Användare kan lägga till spel manuellt, men det roligaste är autosuggest-funktionen: skriv in ett spelnamn så hämtar appen metadata och omslagsbild. Koppling till Steam-konto är redan integrerad, och fler plattformar är på väg. Målet? En ren, intuitiv UX för gamers, skapad tillsammans med min mycket spelintresserade man. Inga fler scrollande genom biblioteket eller letande efter om du äger ett visst spel eller inte.",
                link: "",
                github: "",
                tech: "Problemlösning med asynkron API-integration, UI-finess i TypeScript, Sömlösa UX-flöden för mobil",
            },
            {
                name: "TakeCare Inventory Management",
                description: "En fullstack Python/Django-webbapp för att hantera lagerstatus inom vården: förnödenheter, påfyllnadsnivåer, utgångsdatum och användarroller. Jag designade backend (PostgreSQL + Django ORM), byggde responsiva gränssnitt med JavaScript/HTML/CSS, och säkrade kvalitet med TDD genom att skriva unittester för modeller, vyer och API-endpoints.",
                link: "https://takecare-inventory.onrender.com/",
                github: "https://github.com/mariaciceri/takecare_inventory",
                tech: "Python, Django, PostgreSQL, TDD, JavaScript, HTML, CSS, REST API, Användarautentisering, Rollbaserad åtkomstkontroll, Responsiv design",
            },
            {
                name: "Loan Default Predictor",
                description: "Ett maskininlärningsprojekt i Jupyter Notebook: jag rensade och skapade features från rå finansiell data, utvärderade flera klassificerare i Scikit-learn, och visualiserade resultaten med Seaborn och Matplotlib. Allt paketerat i ett snyggt Streamlit-gränssnitt så även icke-tekniska användare kunde förutsäga om någon sannolikt kommer att missa en betalning.",
                link: "https://loan-default-predictor-0ouz.onrender.com/",
                github: "https://github.com/mariaciceri/loan_default_predictor",
                tech: "Jupyter Notebook, Python, Pandas, Scikit-learn, Matplotlib, Seaborn, Streamlit, CSV-data, Affärsanalys, Tydlig visuell berättelse",
            },
            {
                name: "Pin Head Lists",
                description: "En objektorienterad JavaScript-app för att skapa inköpslistor. Jag byggde dynamisk listskapning, redigering/borttagning av objekt samt lokal lagring med localStorage. Ren UI med HTML/CSS och modulära JS-klasser för flexibilitet.",
                link: "https://mariaciceri.github.io/pin_head_list/",
                github: "https://github.com/mariaciceri/pin_head_list",
                tech: "JavaScript, HTML, CSS, OOP, DOM Manipulation, LocalStorage",
            },
            {
                name: "Best 1000 Movies Finder",
                description: "Byggd i Python med CSV-parsing och objektorientering. Appen läser en utvald dataset, låter användaren söka efter titel/genre/år och visar detaljer och rekommendationer – allt i terminalen eller via det enkla gränssnittet från Code Institute.",
                link: "https://movie-recommendation-yryd.onrender.com/",
                github: "https://github.com/mariaciceri/movie-recommendation",
                tech: "Python, OOP, CSV data",
            },
            {
                name: "Vini Artist Portfolio",
                description: "En stilren React/JavaScript-sida som visar upp en konstnärs verk. Jag integrerade Bootstrap för responsivitet, CSS-animationer för extra känsla, Netlify för snabb publicering och React state/hooks för filtrering och visning.",
                link: "https://vini-artist.netlify.app/",
                github: "https://github.com/mariaciceri/viniPage",
                tech: "React, JavaScript, CSS, Bootstrap, Samarbete med kunden, Responsiv design, Användarcentrerad design",
            },
            {
                name: "Countdown to Xmas 2024",
                description: "En festlig React-app som räknar ner till julafton, skapad under ett hackathon! Visar dagliga överraskningar bakom 'kalenderluckor' (inspirerad av digitala adventskalendrar). Jag ansvarade för state management, villkorlig rendering, styling och publicering på Netlify – allt under tidspress.",
                link: "https://countdown-to-xmas-2024.netlify.app/",
                github: "https://github.com/mariaciceri/advent-calendar",
                tech: "React, JavaScript, CSS, Hackathonprojekt, Tidsplanering, Kreativ problemlösning, Teamsamarbete, Kommunikation",
            },
            {
                name: "Just denna portfölj",
                description: "Mitt senaste projekt: en skräddarsydd React + TypeScript + Tailwind CSS-sajt med eleganta Framer Motion-animationer, bundlad med Vite och publicerad på Netlify. Designad av mig utan några templates, med målet att visa upp mina färdigheter, erfarenheter och personlighet på ett sömlöst sätt.",
                link: "",
                github: "https://github.com/mariaciceri/my-portfolio",
                tech: "React, TypeScript, Tailwind CSS, Framer Motion, Vite, UX-design, Responsiv design, Prestandaoptimering, Samarbete",
            },
        ],
        contact: {
            message: "Är du redo att bygga något fantastiskt tillsammans? Låt oss koppla ihop oss och skapa något grymt!",
            email: "Skicka ett mejl till mig så pratar vi mer!"
        }
    },
};