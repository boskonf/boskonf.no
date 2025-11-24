import type { Program } from "./program";

const program2025: Program = {
  date: "2025-10-30",
  location: "Kvarteret, Bergen",
  address: "Olav Kyrres gate 49, 5015 Bergen",
  locationUrl: "https://www.openstreetmap.org/node/6137059358",
  schedule: [
    {
      title: "Dørene åpner",
      title_en: "Doors open",
      description: "Prøv å være tidlig ute!",
      description_en: "Try to arrive early!",
      image: "TODO: path to some image in static dir",
      from: "2025-10-30T16:30:00",
      to: "2025-10-30T17:00:00",
      type: "info",
    },
    {
      title: "Kort introduksjon",
      title_en: "Short introduction",
      description:
        "En kort introduksjon til Bergen Open Source-konferansen, med litt praktisk informasjon om kvelden.",
      description_en:
        "A brief introduction to the Bergen Open Source Conference, including some practical information about the evening.",
      image: "TODO: path to some image in static dir",
      from: "2025-10-30T17:00:00",
      to: "2025-10-30T17:10:00",
      type: "info",
    },
    {
      title: "Bring your own cloud",
      title_en: "Bring your own cloud",
      description:
        'I lys av dagens svekkede tilitt til "tech gigantene" og fokuset på personvern og sikkerhet vil vi utforske et alternativ til "spin det opp i {Insert cloud provider here}" løsningen. I denne talken skal vi se litt på forskjellige open source verktøy og programvare en kan bruke til å bygge en kompetitiv hosting plattform. Må vi miste fordelene Aws/Azure/Google cloud gir? Er det spesifikke fordeler ved å bruke open source? Er dette kun noe for store bedrifter med egne devops team? Dette er spørsmål vi skal forsøke å besvare',
      description_en:
        'In light of todays weakened trust in the "tech giants" and the focus on privacy and security, we will explore an alternative to the "spin it up in {Insert cloud provider here}" solution. In this talk, we will take a look at various open source tools and software that can be used to build a competitive hosting platform. Do we have to give up the advantages that AWS/Azure/Google Cloud provide? Are there specific benefits to using open source? Is this only relevant for large companies with their own DevOps teams? These are questions we will attempt to answer.',
      speaker: {
        name: "Rolf Martin Glomsrud",
        description: "Utvikler, Frende",
        description_en: "Software Engineer, Frende",
        imageUrl: "/speakers/Rolf-Glomsrud.jpg",
      },
      image: "TODO: path to some image in static dir",
      from: "2025-10-30T17:10:00",
      to: "2025-10-30T17:30:00",
      type: "talk",
      attachments: [
        {
          name: "Presentasjon",
          name_en: "Presentation",
          url: "/speakers/slides/BOSkonf25-Bring-your-own-cloud-Rolf.pdf",
        },
      ],
      videoUrl:
        "https://files.fribyte.no/boskonf/2025/individuelle_speaks/1_Rolf_Glomsrud.mp4",
    },
    {
      title: "Model Context Protocol (MCP)",
      title_en: "Model Context Protocol (MCP)",
      description:
        "Model Context Protocol (MCP) er en åpen standard som gjør det mulig for AI-assistenter å koble seg til eksterne ressurser, og dermed utvide sin kontekst og funksjonalitet. MCP gir utviklere stor frihet i hvordan de kan sette opp sine assistenter. Presentasjonen tar for seg et konkret chatbot-problem som illustrerer begrensningene ved tradisjonelle, avlukkede språkmodeller, og gir en praktisk løsning med MCP.",
      description_en:
        "Model Context Protocol (MCP) is an open standard that enables AI assistants to connect to external resources, thereby expanding their context and functionality. MCP gives developers great flexibility in how they can set up their assistants. The presentation addresses a specific chatbot problem that illustrates the limitations of traditional, isolated language models, and provides a practical solution using MCP.",
      speaker: {
        name: "Johannes Jøsang",
        description: "Data Scientist++, Kantega",
        description_en: "Data Scientist++, Kantega",
        imageUrl: "/speakers/Johannes-Jøsang.jpg",
      },
      image: "TODO: path to some image in static dir",
      from: "2025-10-30T17:30:00",
      to: "2025-10-30T17:50:00",
      type: "talk",

      attachments: [
        {
          name: "Presentasjon",
          name_en: "Presentation",
          url: "/speakers/slides/BOSkonf25-Model-Context-Protocol-(MCP)-Johannes.pdf",
        },
      ],
      videoUrl:
        "https://files.fribyte.no/boskonf/2025/individuelle_speaks/2_Johannes_J%C3%B8sang.mp4",
    },
    {
      title: "Mat",
      title_en: "Food",
      description: "Matpause",
      description_en: "Food break",
      image: "TODO: path to some image in static dir",
      from: "2025-10-30T18:00:00",
      to: "2025-10-30T19:00:00",
      type: "break",
    },
    {
      title: "Has 20 years of experience lead to this?!",
      title_en: "Has 20 years of experience lead to this?!",
      description:
        "I over 24 år har jeg jobbet med, kost meg med og fått grå hår av frontend. Jeg deler mine erfaringer rundt dette, både det gode og det dårlige. Dette foredraget oppsummerer også hvor vi kommer fra innen frontend-utvikling, og hvor vi er på vei. Så hvis du er glad i litt frontend-nostalgi, er dette foredraget for deg.",
      description_en:
        "tl;dr; A talk/rant/beer in hand talk about my experience with frontend, from the 90s to today\nFor over 24 years I have played, enjoyed and gotten grey hairs doing frontend. I share my experiences around this, all the good and bad stuff.\nThis talk is also to summarize where we come from within frontend development, and where we are heading. So if you are into some frontend nostalgia, this talk is for you",
      speaker: {
        name: "Alexander Vassbotn Røyne-Helgesen",
        description: "Teknologileder og Frontend-ekspert",
        description_en: "Technology leader and Frontend expert",
        imageUrl: "/speakers/Alexander-Vassbotn.jpg",
      },
      image: "TODO: path to some image in static dir",
      from: "2025-10-30T19:00:00",
      to: "2025-10-30T19:20:00",
      type: "talk",

      attachments: [
        {
          name: "Presentasjon",
          name_en: "Presentation",
          url: "https://slides.com/phun-ky/boskonf-har-over-20-ars-erfaring-ledet-til-dette",
        },
      ],
      videoUrl:
        "https://files.fribyte.no/boskonf/2025/individuelle_speaks/3_Alexander_Vassbotn_R%C3%B8yne-Helgesen.mp4",
    },
    {
      title: "Bruk av åpen programvare til trening av kunstig intelligens",
      title_en:
        "Use of Open Source Software for Training Artificial Intelligence",
      description:
        "Store språkmodeller trenes på enorme mengder data, hvor store deler hentes fra internett. Når det gjelder kildekode, er hovedkilden til slike treningsdata store kodearkiver som GitHub og GitLab, hvor mesteparten av koden er lisensiert under åpne programvarelisenser. Slike lisenser gir i utgangspunktet adgang til å bruke koden til trening av kunstig intelligens og til å gjøre koden tilgjengelig som output fra KI-modeller. Dette forutsetter imidlertid at brukeren aksepterer lisensen og oppfyller vilkårene i den, for eksempel ved å kreditere bidragsyterne eller ved å lisensiere videre modifikasjoner på tilsvarende vilkår (copyleft).",
      description_en:
        "Large language models are trained on vast amounts of data, much of which is sourced from the internet. When it comes to source code, the main sources for such training data are large code repositories such as GitHub and GitLab, where most of the code is licensed under open source software licenses. Such licenses generally permit the use of the code for training artificial intelligence and for making the code available as output from AI models. However, this is conditional on the user accepting the license and complying with its terms, for example by crediting contributors or by licensing further modifications under equivalent terms (copyleft).",
      speaker: {
        name: "Torger Kielland",
        description: "Professor, UiB",
        description_en: "Professor, UiB",
        imageUrl: "/speakers/Torger-Kielland.jpg",
      },
      image: "TODO: path to some image in static dir",
      from: "2025-10-30T19:20:00",
      to: "2025-10-30T19:40:00",
      type: "talk",

      attachments: [
        {
          name: "Presentasjon",
          name_en: "Presentation",
          url: "/speakers/slides/BOSkonf25-Bruk-av-aapen-programvare-til-trening-av-kunstig-intelligens-Torger.pdf",
        },
      ],
      videoUrl:
        "https://files.fribyte.no/boskonf/2025/individuelle_speaks/4_Torger_Kielland.mp4",
    },
    {
      title: "Personvernforordningen i praksis for Open Source",
      title_en:
        "The General Data Protection Regulation in Practice for Open Source",
      description:
        "Virksomheter som tar i bruk åpen kildekode i produksjon møter de samme kravene til personopplysningssikkerhet som alle andre. Foredraget viser hva vi kan lære av faktiske brudd på personopplysningssikkerheten, og hvordan personvernforordningen setter rammer for trygg bruk.",
      description_en:
        "Organizations that use open source software in production face the same requirements for personal data security as any other. This presentation highlights what we can learn from actual breaches of personal data security, and how the General Data Protection Regulation sets the framework for safe use.",
      speaker: {
        name: "Fredrik Christensen",
        description: "Seniorrådgiver, Datatilsynet",
        description_en:
          "Senior Adviser, The Norwegian Data Protection Authority",
        imageUrl: "/speakers/Fredrik-Christensen.jpg",
      },
      image: "TODO: path to some image in static dir",
      from: "2025-10-30T19:40:00",
      to: "2025-10-30T20:00:00",
      type: "talk",

      attachments: [
        {
          name: "Presentasjon",
          name_en: "Presentation",
          url: "/speakers/slides/BOSkonf25-Personvernforordningen-i-praksis-for-Open-Source-Fredrik.pdf",
        },
      ],
      videoUrl:
        "https://files.fribyte.no/boskonf/2025/individuelle_speaks/5_Fredrik_Christensen.mp4",
    },
    {
      title:
        "Skal du levere programvare, må du vite hva den består av. SBOM (Software Bill of Materials) i praksis: Hvorfor og hvordan",
      title_en:
        "If You're Delivering Software, You Need to Know What It's Made Of. SBOM (Software Bill of Materials) in Practice: Why and How",
      description:
        "12. desember 2027 er det for sent. Det er dagen etter at EUs Cyber Resilience Act (CRA) har fullt ut trådt i kraft. Hvis du er leverandør av “produkt med digitale komponenter”, må du ha full oversikt over og innsikt i alle komponenter og avhengigheter som inngår. Ellers er du ikke kvalifisert til å levere produktet i EU. Men hvis du som utvikler programvare kan svare “ja” når du får spørsmål av type “Vet du hva koden din gjør? Altså, vet du *alt* koden du skriver gjør?“, er du langt på vei i mål. Dette foredraget viser hvordan du går fra koder til kodeingeniør, og gir innsikt i praktisk bruk av “Software Bill of Materials” (SBOM) som er det sentrale verktøyet for å levere med innsikt og kvalitet.",
      description_en:
        "December 12, 2027 is too late. That's the day after the EU's Cyber Resilience Act (CRA) has come fully into effect. If you are a supplier of a “product with digital elements,” you must have complete oversight of and insight into all components and dependencies it contains. Otherwise, you are not qualified to deliver your product in the EU. But if, as a software developer, you can answer “yes” when asked: “Do you know what your code does? I mean, do you know everything the code you write does?” you are already well on your way. This presentation shows how to move from being a coder to becoming a code engineer, and provides insight into the practical use of the Software Bill of Materials (SBOM), the key tool for delivering with insight and quality.",
      speaker: {
        name: "Peter N. M. Hansteen",
        description: "Senior Technical Specialist, Tietoevry",
        description_en: "Senior Technical Specialist, Tietoevry",
        imageUrl: "/speakers/Peter-Hansteen.jpeg",
      },
      image: "TODO: path to some image in static dir",
      from: "2025-10-30T20:00:00",
      to: "2025-10-30T20:20:00",
      type: "talk",

      attachments: [
        {
          name: "Presentasjon",
          name_en: "Presentation",
          url: "/speakers/slides/BOSkonf25-eu-cra-its-later-than-you-think-Peter.pdf",
        },
      ],
      videoUrl:
        "https://files.fribyte.no/boskonf/2025/individuelle_speaks/6_Peter_N_M_Hansteen.mp4",
    },
    {
      title: "Takke for kvelden",
      description: "Takk for at du ble med på Bergen Open Source-konferansen!",
      description_en:
        "Thank you for attending the Bergen Open Source Conference!",
      image: "TODO: path to some image in static dir",
      from: "2025-10-30T20:20:00",
      to: "2025-10-30T20:35:00",
      type: "info",
    },
    {
      title: "Kvelden ferdig",
      title_en: "The evening is finished",
      description: "Håper du hadde en fin kveld og likte årets konferanse :)",
      description_en:
        "We hope you had a nice evening and liked this years iteration of the conference :)",
      image: "TODO: path to some image in static dir",
      from: "2025-10-30T20:35:00",
      to: "",
      type: "info",
    },
  ],
  sponsors: [
    {
      name: "Kantega",
      logo: "/sponsors/kantega.svg",
      url: "https://www.kantega.no/",
    },
    {
      name: "TietoEvry",
      logo: "/sponsors/tietoevry.svg",
      url: "https://www.tietoevry.com/",
    },
  ],
};

export default program2025;
