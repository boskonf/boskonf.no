import type { Program } from "./program";

const program2023: Program = {
  date: "2024-11-02",
  location: "Kvarteret, Bergen",
  address: "Olav Kyrres gate 49, 5015 Bergen",
  locationUrl: "https://www.openstreetmap.org/node/6137059358",
  schedule: [
    {
      title: "Dørene åpner",
      description: "Prøv å være tidlig ute!",
      title_en: "Doors open",
      image: "TODO: path to some image in static dir",
      description_en: "Try to be early!",
      from: "2023-11-02T16:30:00",
      to: "2023-11-02T17:00:00",
      type: "info",
    },
    {
      title: "Kort introduksjon",
      title_en: "Short introduction",
      description: "Av friBytes egne Christian K. Engelsen.",
      description_en: "By friBytes' own Christian K. Engelsen.",
      speaker: {
        name: "Christian K. Engelsen",
        description: "",
      },
      image: "TODO: path to some image in static dir",
      from: "2023-11-02T17:00:00",
      to: "2023-11-02T17:10:00",
      type: "info",
    },
    {
      title: "Intro til makt for fri programvare-idealistar",
      title_en: "Introduction to power for free software idealists",
      description:
        "Nils Norman Haukås er en solo-gründer av BuilderHeart. Nils vil ta dere med på en reise i verden rundt fri programvare med fokus på sosial og kapitalistisk makt.",
      description_en:
        "Nils Norman Haukås is a solo founder of BuilderHeart. Nils will take you on a journey into the world of free software focusing on social and capitalist power.",
      speaker: {
        name: "Nils Norman Haukås",
        description: "",
      },
      image: "TODO: path to some image in static dir",
      from: "2023-11-02T17:10:00",
      to: "2023-11-02T17:30:00",
      type: "talk",
      attachments: [
        {
          name: "Presentasjon",
          name_en: "Presentation",
          url: "/speakers/slides/BOSkonf23-makt-programvare-idealistar.pdf"
        },
      ],
      videoUrl:
        "https://files.fribyte.no/boskonf/2023/Nils_Norman_Haukaas_boskonf_2023.mp4",
    },
    {
      title: "OpenStreetMap hvem hva hvor",
      title_en: "OpenStreetMap who what where",
      description:
        "Mathias Haugsbø er en dreven OSM bidragsyter, og friBytes nåværende leder. Her gir Mathias et lynkurs i hva OSM er, hvorfor det er viktig med en åpen kartdatabase og hvor du kan bidra.",
      description_en:
        "Mathias Haugsbø is an experienced OSM contributor and current leader of friBytes. Here Mathias gives a crash course on what OSM is, why an open map database is important, and where you can contribute.",
      speaker: {
        name: "Mathias Haugsbø",
        description: "",
      },
      image: "TODO: path to some image in static dir",
      from: "2023-11-02T17:35:00",
      to: "2023-11-02T17:55:00",
      type: "talk",
      attachments: [
        {
          name: "Presentasjon",
          name_en: "Presentation",
          url: "/speakers/slides/BOSkonf23-osm.pdf",
        },
      ],
      videoUrl:
        "https://files.fribyte.no/boskonf/2023/Mathias_Haugsbo_boskonf_2023.mp4",
    },
    {
      title: "Profesjonell bruk av fri programvare",
      title_en: "Professional use of free software",
      description:
        "Peter N. M. Hansteen er Senior Technical Specialist i Tietoevry Create Cloud, og er en mangeårig fri programvare-entusiast. Her vil Peter vise hvordan fri programvare brukes i bedrifter i stor skala, og trekke opp noen linjer fra historien frem til nåtid.",
      description_en:
        "Peter N. M. Hansteen is a Senior Technical Specialist at Tietoevry Create Cloud and a longtime free software enthusiast. Peter will show how free software is used in large-scale enterprises and draw some lines from history to the present.",
      speaker: {
        name: "Peter N. M. Hansteen",
        description: "",
      },
      image: "TODO: path to some image in static dir",
      from: "2023-11-02T18:00:00",
      to: "2023-11-02T18:20:00",
      type: "talk",
      attachments: [
        {
          name: "Presentasjon",
          name_en: "Presentation",
          url: "/speakers/slides/BOSkonf23-opensource_in_enterprise_environments.pdf",
        },
      ],
      videoUrl:
        "https://files.fribyte.no/boskonf/2023/Petter_N_M_Hansteen_boskonf_2023.mp4",
    },
    {
      title: "Matpause",
      title_en: "Food break",
      description: "Tid for mat og drikke!",
      description_en: "Time for food and drinks!",
      image: "TODO: path to some image in static dir",
      from: "2023-11-02T18:25:00",
      to: "2023-11-02T19:15:00",
      type: "info",
    },
    {
      title: "Kom igang med åpen kildekode",
      title_en: "Getting started with open source",
      description:
        "Hans Kristian Flaatten er plattform utvikler hos NAV, har brukt åpen kildekode hele sitt liv og vært en del av Node.js stiftelsen. I dette foredraget vil Hans Kristian snakke om sine erfaringer fra store og små åpen kildekode prosjekter om hvordan man kan komme i gang med bidrag eller til og med lage sine egne prosjekter.",
      description_en:
        "Hans Kristian Flaatten is a platform developer at NAV, has used open source all his life, and been part of the Node.js Foundation. In this talk, Hans Kristian will talk about his experiences from large and small open source projects on how to get started with contributions or even create your own projects.",
      speaker: {
        name: "Hans Kristian Flaatten",
        description: "",
      },
      image: "TODO: path to some image in static dir",
      from: "2023-11-02T19:20:00",
      to: "2023-11-02T19:40:00",
      type: "talk",
      attachments: [
        {
          name: "Presentasjon",
          name_en: "Presentation",
          url: "/speakers/slides/BOSkonf23-kom-i-gang.pdf",
        },
      ],
      videoUrl:
        "https://files.fribyte.no/boskonf/2023/Hans_Kristian_Flaatten_boskonf_2023.mp4",
    },
    {
      title: "Eksperimentering for Grønnere Kode",
      title_en: "Experimenting for Greener Code",
      description:
        "Kent Inge F. Simonsen er konsulent i Tietoevry og en av friBytes guruer. Kent Inge vil se på hvordan enkle eksperimenter kan hjelpe oss å bedre valg gitt målet om grønnere og mer effektiv kode.",
      description_en:
        "Kent Inge F. Simonsen is a consultant at Tietoevry and one of friBytes' gurus. Kent Inge will look at how simple experiments can help us make better choices given the goal of greener and more efficient code.",
      speaker: {
        name: "Kent Inge F. Simonsen",
        description: "",
      },
      image: "TODO: path to some image in static dir",
      from: "2023-11-02T19:45:00",
      to: "2023-11-02T20:05:00",
      type: "talk",
      videoUrl:
        "https://files.fribyte.no/boskonf/2023/Kent_Inge_F_Simonsen_boskonf_2023.mp4",
    },
    {
      title: "Fest!🥳",
      title_en: "Party!🥳",
      description:
        "Takk og farvel! For de som vil være med utover kvelden blir vi igjen på Kvarteret!",
      description_en:
        "Thank you and goodbye! For those who want to stay later in the evening, we'll be at Kvarteret!",
      image: "TODO: path to some image in static dir",
      from: "2023-11-02T20:05:00",
      to: "2023-11-02T23:30:00",
      type: "info",
    },
  ],
  sponsors: [
    {
      name: "friByte",
      logo: "/sponsors/friByte.svg",
      url: "https://fribyte.no/",
    },
  ],
};

export default program2023;
