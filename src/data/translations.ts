export const content = {
    en: {
        header: {
            title: 'Full-stack Developer & Data Analyst',
            navigator: ['Home', 'Experience', 'About Me','Projects', 'Contact'],
        },
        greeting: "Hey, I'm Maria",
        description: "Curious mind, former math teacher turned into data & software development nerd. I guess I really love problem-solving and numbers?!",
        image: "/assets/ny.webp",
        theme: "english",
        about: `I fell down the rabbit hole of coding, and as a bunny owner, it felt oddly on brand.
\nI recently completed a software development diploma with a focus on predictive analytics,all from home, fueled by coffee and determination.
\nI love tackling problems with data, patterns, and puzzles. Whether it’s building a Python recommender, a shopping list app with JavaScript, or a hackathon Advent calendar, I’m all in: backend logic, frontend polish, and UX matters.
\nI thrive on learning, collaborating, and creating things that actually work and delight.
\nWhen I’m not coding, you’ll find me hanging out with my two rabbits, exploring nature, or hunting new games to try.
\nLet's create something awesome!`,
        exp: [
            {
                company: "Ecometrix",
                position: "Software Developer and Data Engineer Intern",
                date: "10/2025 - Present",
                city: "Stockholm, Sweden",
                icons: ["csharp", "python", "react", "scikitlearn", "typescript", "growth", "problem-solving", "collab"],
                description: `Developing AI agents and predictive models for cement data, improving an ML predictor to ~90% accuracy. Migrated models from joblib to ONNX and integrated them in production using FastAPI, handling the full data pipeline from raw data to model training. Contributed to CRUD features in C# and ASP.NET, built new product pages, and collaborated on a new AI agent. Also started writing articles about our data work to support visibility and business impact. Strengthened problem-solving, collaboration, and domain knowledge in construction.`
            },
            {
                company: "Qling.ai",
                position: "Full-stack Developer Intern",
                date: "04/2025 - 07/2025",
                city: "Stockholm, Sweden",
                icons: ["python", "javascript", "collab", "problem-solving", "leadership"],

                description: `Full-stack developer supporting ML integration. Built new pages and a dashboard, integrated Google APIs for login and email features, refactored code, and debugged complex issues. Acted as Scrum Master, leading standups and promoting clean code in an agile environment. Strengthened leadership, teamwork, and adaptability while deepening full-stack and ML integration skills.`
            },
            {
                company: "Futuraskolan Hertig Karl",
                position: "Math Teacher",
                date: "02/2023 - 07/2024",
                city: "Stockholm, Sweden",
                icons: ["python", "problem-solving", "teaching"],
                description: `Taught math and Python to grades 6–9, adapted lessons to diverse skill levels, and supported a student teacher. Developed leadership, mentoring, communication, and problem-solving skills while fostering engagement and learning.`
            },
        ],
        projects: [
            {
                name:"Coming Soon",
                description: "A React Native + Expo + TypeScript mobile app for managing your video game library—launching soon! Users can manually add games, but the real fun is the auto-suggest feature: type a game name, and the app fetches metadata and cover art. Linking Steam account is already integrated, with more platforms coming. The goal? Clean, intuitive UX for gamers, built collaboratively with my very gamer husband. So no more scrolling through your library or going to many places to find if you have a game or not.",
                link: "",
                github: "https://github.com/mariaciceri/game-app-2",
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
                tech: "React, TypeScript, Tailwind CSS, Framer Motion, Vite, UX Design, Responsive Design, Performance Optimization",
            },
        ],
        contact: {
            message:"Let's connect and create something awesome!",
            email:"Send me an e-mail and let's go!"
        },
        achievement: [
            {
                icon: "fa-solid fa-lock",
                text: " Integrated Google APIs for seamless user login and email functionality.",
            },
            {
                icon: "fa-solid fa-arrow-trend-up",
                text: " Boosted ML predictor accuracy by 20% for key cement features.",
            },
            {
                icon: "fa-solid fa-gears",
                text: " Migrated ML model from joblib to ONNX for cross-platform use.",
            },
            {
                icon: "fa-solid fa-arrows-split-up-and-left",
                text: " Built a Python MLOps starter script with data cleaning, feature selection, model training, MLflow logging, and model saving, laying the groundwork for automated workflows.",
            },
        ]
    },
    sv: {
        header: {
            title: 'Full-stack Utvecklare & Dataanalytiker',
            navigator: ['Hem', 'Erfarenhet', 'Om Mig','Projekt', 'Kontakt'],
        },
        greeting: "Hej, jag heter Maria",
        description: "Nyfiken själ, före detta mattelärare som blivit data- och kodnörd. Jag älskar väl problemlösning och siffror!",
        image: "/assets/midsommar.webp",
        theme: "svensk",
        about: `Jag föll ner i kodens kaninhål, och som kaninägare kändes det märkligt passande.
\nJag har nyligen avslutat en utbildning inom systemutveckling med inriktning på prediktiv analys – helt hemifrån, med mycket kaffe och en stor dos beslutsamhet.
\nJag älskar att ta mig an problem som handlar om data, mönster och kluriga utmaningar. Oavsett om det är att bygga en rekommendationsmotor i Python, en inköpsapp med JavaScript eller en adventskalender under ett hackathon, går jag all in: backend-logik, frontend-finish och UX spelar roll.
\nJag trivs med att lära mig nytt, samarbeta och skapa lösningar som faktiskt fungerar och känns bra att använda.
\nNär jag inte kodar hittar du mig med mina två kaniner, ute i naturen eller på jakt efter nya spel att testa.
\nLåt oss skapa något riktigt bra tillsammans!`,
        exp: [
            {
                company: "Ecometrix",
                position: "Praktikant, Mjukvaruutvecklare och Dataingenjör",
                date: "10/2025 - Pågående",
                city: "Stockholm, Sverige",
                icons: ["csharp", "python", "react", "scikitlearn", "typescript", "growth", "problem-solving", "collab"],
                description: `Utvecklar AI-agenter och prediktiva modeller för cementdata, förbättrade en ML-prediktor till ~90% noggrannhet. Migrerade modeller från joblib till ONNX och integrerade dem i produktion med FastAPI, hanterade hela datapipelinen från rådata till modellträning. Bidrog till CRUD-funktioner i C# och ASP.NET, skapade nya produktsidor och samarbetade kring en ny AI-agent. Startade även artiklar om vårt dataarbete för att öka synlighet och affärspåverkan. Arbeten har stärkt problemlösning, samarbete och domänkunskap inom bygg.`
            },
            {
                company: "Qling.ai",
                position: "Praktikant, Full-stack Utvecklare",
                date: "04/2025 - 07/2025",
                city: "Stockholm, Sverige",
                icons: ["python", "javascript", "collab", "problem-solving", "leadership"],
                description: `Fullstackutvecklare med ML-stöd. Byggde nya sidor och en dashboard, integrerade Google API:er för inloggning och e-postfunktioner, refaktorerade kod och felsökte komplexa problem. Tog rollen som Scrum Master, ledde standups och främjade ren kod i ett agilt arbetsflöde. Erfarenheten stärkte ledarskap, teamwork och anpassningsförmåga samtidigt som fullstack- och ML-färdigheter fördjupades.`
            },
            {
                company: "Futuraskolan Hertig Karl",
                position: "Mattelärare",
                date: "02/2023 - 07/2024",
                city: "Stockholm, Sverige",
                icons: ["python", "problem-solving", "teaching"],
                description: `Undervisade matematik och Python för årskurs 6–9, anpassade lektioner efter olika kunskapsnivåer och stödde en elevlärare. Utvecklade ledarskap, mentorskap, kommunikations- och problemlösningsförmåga samtidigt som elevernas engagemang och lärande främjades.`
            },
        ],
        projects: [
            {
                name: "Kommer snart",
                description: "En mobilapp byggd med React Native + Expo + TypeScript för att hantera ditt tv-spelsbibliotek - lanseras snart! Användare kan lägga till spel manuellt, men det roligaste är autosuggest-funktionen: skriv in ett spelnamn så hämtar appen metadata och omslagsbild. Koppling till Steam-konto är redan integrerad, och fler plattformar är på väg. Målet? En ren, intuitiv UX för gamers, skapad tillsammans med min mycket spelintresserade man. Inga fler scrollande genom biblioteket eller letande efter om du äger ett visst spel eller inte.",
                link: "",
                github: "https://github.com/mariaciceri/game-app-2",
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
                tech: "React, TypeScript, Tailwind CSS, Framer Motion, Vite, UX-design, Responsiv design, Prestandaoptimering",
            },
        ],
        contact: {
            message: "Låt oss koppla ihop oss och skapa något grymt!",
            email: "Skicka ett mejl till mig så pratar vi mer!"
        },
        achievement: [
            {
                icon: "fa-solid fa-lock",
                text: " Integrerade Google API:er för smidig inloggning och e-postfunktionalitet.",
            },
            {
                icon: "fa-solid fa-arrow-trend-up",
                text: " Ökade prediktorns noggrannhet med 20 % för viktiga cementegenskaper.",
            },
            {
                icon: "fa-solid fa-gears",
                text: " Migrerade ML-modell från joblib till ONNX för plattformsoberoende användning.",
            },
            {
                icon: "fa-solid fa-arrows-split-up-and-left",
                text: " Byggde ett Python MLOps-startskript med datarensning, feature selection, modellträning, MLflow-loggning och modelllagring, som lade grunden för automatiserade arbetsflöden.",
            },
        ]
    },
};