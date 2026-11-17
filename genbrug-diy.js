// DIY-projekter, materialeguider, søgning og projekt-dialog.
// Kortdata styrer titel, billede, kategori og søgeord for hvert projekt.
const diyProjekter = [
    {
        id: "forklaede",
        billede: "media/DIY Forklæde.jpg",
        alt: "Forklæde syet som et genbrugsprojekt",
        kategori: "Genbrug af tekstiler",
        titel: "Sy et forklæde",
        beskrivelse: "Giv et gammelt stykke stof nyt liv som et praktisk forklæde til køkken eller værksted.",
        soegeord: "forklæde stof tekstil sy køkken"
    },
    {
        id: "asymmetrisk-tie-top",
        billede: "media/DIY asymmetirsk Tie top.jpg",
        alt: "Asymmetrisk tie top syet af genbrugsstof",
        kategori: "Genbrug af tekstiler",
        titel: "Sy en asymmetrisk tie top",
        beskrivelse: "Forvandl et stykke stof til en top med bindedetaljer og et asymmetrisk snit.",
        soegeord: "top tie asymmetrisk stof tekstil sy tøj"
    },
    {
        id: "troeje-knapper",
        billede: "media/DIY forny din gamle trøje med knapper.jpg",
        alt: "Gammel trøje fornyet med dekorative knapper",
        kategori: "Reparér og forny",
        titel: "Forny en trøje med knapper",
        beskrivelse: "Giv en trøje, du allerede har, et nyt udtryk med knapper fra gemmerne.",
        soegeord: "trøje knapper tøj tekstil sy forny"
    },
    {
        id: "hoodie-blonder",
        billede: "media/DIY forny din hoodie med blonder.jpg",
        alt: "Hoodie pyntet med blonder",
        kategori: "Reparér og forny",
        titel: "Forny en hoodie med blonder",
        beskrivelse: "Brug blonde- eller stofrester til at give en hoodie et personligt præg.",
        soegeord: "hoodie blonder stof tøj tekstil forny"
    },
    {
        id: "haeklet-shorts",
        billede: "media/DIY hæklet shorts.jpg",
        alt: "Shorts lavet med hækling",
        kategori: "Genbrug af tekstiler",
        titel: "Hækl shorts af garnrester",
        beskrivelse: "Brug garnrester til et par håndlavede shorts, eller forny et eksisterende par med hæklede detaljer.",
        soegeord: "hæklet hækle shorts garn tekstil tøj"
    },
    {
        id: "lysestager-flasker",
        billede: "media/DIY lysestager af genbrugs flasker.jpg",
        alt: "Lysestager lavet af genbrugte flasker",
        kategori: "Genbrug i hjemmet",
        titel: "Lav lysestager af genbrugsflasker",
        beskrivelse: "Forvandl tomme glasflasker til dekorative lysestager.",
        soegeord: "lysestage flasker glas genbrug lys"
    },
    {
        id: "skjorte-nyt-look",
        billede: "media/DIY skab nyt look med din gamle skjorte.jpg",
        alt: "Gammel skjorte fornyet med et nyt design",
        kategori: "Reparér og forny",
        titel: "Giv en gammel skjorte et nyt look",
        beskrivelse: "Forny en skjorte fra garderoben med enkle ændringer og rester af stof.",
        soegeord: "skjorte tøj stof tekstil knapper forny"
    },
    {
        id: "taske-jeans",
        billede: "media/DIY taske af gamle jeans.jpg",
        alt: "Taske syet af gamle jeans",
        kategori: "Genbrug af tekstiler",
        titel: "Sy en taske af gamle jeans",
        beskrivelse: "Brug slidte jeans på ny, og sy dem om til en praktisk taske.",
        soegeord: "taske jeans denim bukser stof tekstil sy"
    },
    {
        id: "vest-snore",
        billede: "media/DIY vest med snore foran.jpg",
        alt: "Vest med snore foran",
        kategori: "Genbrug af tekstiler",
        titel: "Forny en vest med snore",
        beskrivelse: "Tilføj snore foran på en vest, og giv et eksisterende stykke tøj et nyt udtryk.",
        soegeord: "vest snore tøj stof tekstil sy"
    },
    {
        id: "vaegkurv",
        billede: "media/DIY væg kurv opbevaring.jpg",
        alt: "Kurv monteret på væg til praktisk opbevaring",
        kategori: "Opbevaring",
        titel: "Lav en vægkurv til opbevaring",
        beskrivelse: "Giv en kurv nyt liv som vægopbevaring til småting i hjemmet.",
        soegeord: "kurv væg opbevaring flet hjem"
    },
    {
        id: "traefad-lys",
        billede: "media/DIY træ fad m. starinlys.jpg",
        alt: "Dekorativt træfad med stearinlys",
        kategori: "Boligpynt",
        titel: "Lav et træfad med stearinlys",
        beskrivelse: "Saml træ og stearinlys i en enkel dekoration til bordet.",
        soegeord: "træ fad stearinlys dekoration bord"
    },
    {
        id: "sofabord-sten",
        billede: "media/DIY sofabord med sten.jpg",
        alt: "Sofabord dekoreret med sten",
        kategori: "Genbrugsmøbler",
        titel: "Lav et sofabord med sten",
        beskrivelse: "Brug sten som dekorative detaljer, når du giver et sofabord et nyt udtryk.",
        soegeord: "sofabord bord sten møbel stue"
    },
    {
        id: "sofabord-m-sten",
        billede: "media/DIY sofabord m. sten.jpg",
        alt: "Sofabord med overflade af sten",
        kategori: "Genbrugsmøbler",
        titel: "Giv sofabordet en overflade af sten",
        beskrivelse: "Forny et eksisterende bord med sten og skab et unikt møbel til stuen.",
        soegeord: "sofabord bord sten møbel stue"
    },
    {
        id: "smykkeholder-trae",
        billede: "media/DIY smykke holder af træ.jpg",
        alt: "Smykkeholder lavet af træ",
        kategori: "Opbevaring",
        titel: "Byg en smykkeholder af træ",
        beskrivelse: "Brug et stykke træ til at holde styr på smykker og gøre dem nemme at finde.",
        soegeord: "smykke smykker holder træ opbevaring"
    },
    {
        id: "servietringe",
        billede: "media/DIY serviet ringe.jpg",
        alt: "Hjemmelavede servietringe til borddækning",
        kategori: "Boligpynt",
        titel: "Lav dine egne servietringe",
        beskrivelse: "Lav servietringe af materialer, du har liggende, og brug dem til borddækning.",
        soegeord: "serviet ringe borddækning bord pynt"
    },
    {
        id: "sengegavl",
        billede: "media/DIY senge galv.jpg",
        alt: "Seng med hjemmelavet sengegavl",
        kategori: "Genbrug i hjemmet",
        titel: "Lav en sengegavl",
        beskrivelse: "Skab en personlig sengegavl, og giv materialer nyt liv i soveværelset.",
        soegeord: "seng sengegavl soveværelse træ møbel"
    },
    {
        id: "piedestal-klinker",
        billede: "media/DIY piedistal m. klinker.jpg",
        alt: "Piedestal dekoreret med klinker",
        kategori: "Genbrug i hjemmet",
        titel: "Byg en piedestal med klinker",
        beskrivelse: "Brug rester af klinker til at forvandle en piedestal til et dekorativt møbel.",
        soegeord: "piedestal klinker fliser møbel planter"
    },
    {
        id: "malerier-textur",
        billede: "media/DIY Malerier m. textur.jpg",
        alt: "Malerier med tekstur og struktur",
        kategori: "Kreativ genbrug",
        titel: "Skab malerier med tekstur",
        beskrivelse: "Lav personlige billeder ved at eksperimentere med teksturer og materialer.",
        soegeord: "maleri malerier tekstur billeder kunst væg"
    },
    {
        id: "makeupholder",
        billede: "media/DIY makeupholder.png",
        alt: "Hjemmelavet holder til makeup",
        kategori: "Opbevaring",
        titel: "Lav en makeupholder",
        beskrivelse: "Saml makeup og småting i en holder, du selv har lavet af genbrugsmaterialer.",
        soegeord: "makeup holder opbevaring badeværelse"
    },
    {
        id: "lysestage-perleblade",
        billede: "media/DIY lysestage m. perleblade.jpg",
        alt: "Lysestage pyntet med perleblade",
        kategori: "Boligpynt",
        titel: "Pynt en lysestage med perleblade",
        beskrivelse: "Giv en lysestage et nyt udtryk med dekorative perleblade.",
        soegeord: "lysestage lys perleblade pynt dekoration"
    },
    {
        id: "lampe",
        billede: "media/DIY lampe.jpg",
        alt: "Bordlampe med en genbrugt murstensfod",
        kategori: "Genbrug i hjemmet",
        titel: "Lav en lampe med genbrugsfund",
        beskrivelse: "Giv materialer, der ellers var blevet smidt ud, en ny funktion som dekorativ lampefod.",
        soegeord: "lampe belysning mursten hjem genbrug"
    },
    {
        id: "krukker",
        billede: "media/DIY Krukke.jpg",
        alt: "Hjemmelavede krukker med mosaik og grønne planter",
        kategori: "Genbrug & DIY",
        titel: "Giv krukker nyt liv",
        beskrivelse: "Forvandl en gammel krukke med rester af fliser eller mosaik til et personligt hjem for dine planter.",
        soegeord: "krukke potte fliser mosaik planter have"
    },
    {
        id: "appelsinkrans",
        billede: "media/DIY Krans med appelsiner.jpg",
        alt: "Dekorativ krans pyntet med appelsiner",
        kategori: "Boligpynt",
        titel: "Lav en krans med appelsiner",
        beskrivelse: "Brug appelsiner til en dekorativ krans, der bringer farve ind i hjemmet.",
        soegeord: "krans appelsiner frugt dekoration pynt"
    },
    {
        id: "knivholder",
        billede: "media/DIY knivholder.jpg",
        alt: "Praktisk knivholder til køkkenet",
        kategori: "I køkkenet",
        titel: "Lav en knivholder",
        beskrivelse: "Lav en praktisk holder, så køkkenknivene opbevares samlet og er nemme at finde.",
        soegeord: "knivholder knive køkken træ opbevaring"
    },
    {
        id: "havegrej",
        billede: "media/DIY havegrej.jpg",
        alt: "Haveværktøj organiseret i en holder af genbrugstræ",
        kategori: "Genbrug i haven",
        titel: "Byg en holder til havegrej",
        beskrivelse: "Brug genbrugstræ til at samle og organisere haveredskaber, så de er nemme at finde.",
        soegeord: "havegrej have redskaber holder genbrugstræ træ"
    },
    {
        id: "krukke-ler",
        billede: "media/DIY forny krukke med nyt af ler.jpg",
        alt: "Krukke fornyet med nye detaljer af ler",
        kategori: "Genbrug & DIY",
        titel: "Forny en krukke med ler",
        beskrivelse: "Brug ler til at give en gammel krukke et nyt og personligt udtryk.",
        soegeord: "krukke ler potte planter keramik"
    },
    {
        id: "muslinge-dekoration",
        billede: "media/DIY dekoration m. muslinger.jpg",
        alt: "Dekoration lavet med muslinger",
        kategori: "Boligpynt",
        titel: "Lav dekoration med muslinger",
        beskrivelse: "Brug muslinger fra gemmerne til en enkel dekoration inspireret af stranden.",
        soegeord: "muslinger strand dekoration pynt"
    },
    {
        id: "baenk",
        billede: "media/DIY bænk.jpg",
        alt: "Bænk bygget som et kreativt gør-det-selv-projekt",
        kategori: "Genbrugsmøbler",
        titel: "Byg en bænk",
        beskrivelse: "Skab en bænk af genbrugsmaterialer til hjemmet eller haven.",
        soegeord: "bænk siddeplads møbel træ have"
    },
    {
        id: "bord",
        billede: "media/DIY brændetræ bord.jpg",
        alt: "Sofabord bygget af brændestykker og glas",
        kategori: "Genbrugsmøbler",
        titel: "Byg et sofabord af brændetræ",
        beskrivelse: "Skab et unikt sofabord ved at bruge brændestykker på ny og kombinere dem med en glasplade.",
        soegeord: "sofabord bord brændetræ brænde træ glas møbel"
    },
    {
        id: "bordskaaner-vinpropper",
        billede: "media/DIY bord skåner af vin propper.jpg",
        alt: "Bordskåner lavet af genbrugte vinpropper",
        kategori: "I køkkenet",
        titel: "Lav en bordskåner af vinpropper",
        beskrivelse: "Saml brugte vinpropper, og lav en praktisk bordskåner til varme gryder.",
        soegeord: "bordskåner vinpropper kork køkken bord"
    },
    {
        id: "bordskaaner-snor",
        billede: "media/DIY bord skåner af snor.jpg",
        alt: "Bordskåner flettet af snor",
        kategori: "I køkkenet",
        titel: "Flet en bordskåner af snor",
        beskrivelse: "Brug snor til at flette en enkel bordskåner til køkkenet.",
        soegeord: "bordskåner snor flet køkken bord"
    }
];

// Materialer, trin og eventuelle sikkerhedsnoter til projektguiderne.
const diyGuides = {
    "vaegkurv": {
        materialer: ["En genbrugs- eller flettet kurv med fast kant", "To skruer og rawlplugs, der passer til væggen", "Boremaskine, skruetrækker og målebånd"],
        trin: ["Vælg en kurv, der er let nok til vægophæng, og kontrollér, at den er hel.", "Markér to ophængspunkter gennem kurvens bagkant, og overfør målene til væggen.", "Bor passende huller, montér rawlplugs, og skru kurven fast.", "Kontrollér, at kurven sidder stabilt, før du lægger lette ting i den."]
    },
    "traefad-lys": {
        materialer: ["Et rent, plant træfad eller et stykke genbrugstræ", "Sandpapir og træolie eller vandbaseret lak", "Lys i sikre, stabile lysestager"],
        trin: ["Slib træet glat, og fjern slibestøvet.", "Påfør træolie eller lak efter produktets anvisning, og lad fadet tørre helt.", "Placér lysene i stabile lysestager på fadet.", "Stil dekorationen på et varmebestandigt underlag, og lad aldrig levende lys være uden opsyn."]
    },
    "sofabord-sten": {
        materialer: ["Et stabilt, eksisterende sofabord", "Rene, flade dekorationssten", "Egnet flise-/stenlim og fugemasse til bordets overflade", "Vaterpas, svamp og handsker"],
        trin: ["Rengør bordpladen, og kontrollér, at den kan bære stenene.", "Læg stenene løst ud, og tilpas mønsteret før limning.", "Fastgør stenene med lim, der passer til både sten og bordplade.", "Fug efter limens hærdetid, tør overskydende fugemasse af, og lad bordet hærde helt."]
    },
    "sofabord-m-sten": {
        materialer: ["Et stabilt sofabord eller en bordplade", "Flade sten eller stenfliser", "Egnet lim og eventuelt fugemasse", "Målebånd, spartel, svamp og handsker"],
        trin: ["Mål bordpladen og kontrollér, at den er plan og solid.", "Fordel stenene på pladen, og tilskær kun sten med egnet værktøj og beskyttelsesbriller.", "Lim stenene fast med et produkt, der passer til materialerne.", "Fug om nødvendigt, fjern rester med en fugtig svamp, og lad bordet hærde før brug."]
    },
    "smykkeholder-trae": {
        materialer: ["Et stykke glat genbrugstræ", "Små kroge eller greb", "Boremaskine, skruetrækker og sandpapir", "Træolie eller maling (valgfrit)"],
        trin: ["Slib træstykket, og fjern støv og eventuelle løse splinter.", "Markér jævnt fordelte punkter til krogene.", "Forbor små huller, og skru krogene i.", "Behandl træet efter ønske, lad det tørre, og hæng holderen på et sikkert beslag."]
    },
    "servietringe": {
        materialer: ["Pap- eller træbaserede ringe fra genbrug", "Stofrester, snor eller garn", "Saks og hobbylim", "Pynt efter eget valg"],
        trin: ["Klip stof eller snor i passende længder.", "Påfør lidt lim på ringen, og vikl materialet tæt omkring den.", "Fastgør enderne med lim, og tilføj eventuelt enkel pynt.", "Lad ringene tørre helt, før de bruges omkring servietter."]
    },
    "sengegavl": {
        materialer: ["Rene, solide genbrædder eller en eksisterende plade", "Sandpapir og træolie eller maling", "Skruer og beslag, der passer til væg og materiale", "Boremaskine, målebånd og vaterpas"],
        trin: ["Mål sengen og væggen, og planlæg gavlens bredde og højde.", "Slib træet, og kontrollér, at der ikke er løse søm eller splinter.", "Saml brædderne på en solid bagside, og behandl overfladen.", "Fastgør gavlen til væggen med beslag, der passer til vægtypen, og kontrollér stabiliteten."]
    },
    "piedestal-klinker": {
        materialer: ["En stabil piedestal eller et lille genbrugsmøbel", "Rester af klinker eller fliser", "Egnet fliselim og fugemasse", "Flisespartel, svamp og handsker"],
        trin: ["Rengør piedestalen, og kontrollér, at overfladen er fast og plan.", "Læg klinkerne ud, så du kan se, hvordan de skal placeres.", "Lim klinkerne fast med fliselim efter produktets anvisning.", "Fug samlingerne, tør overfladen af, og lad piedestalen hærde helt før brug."]
    },
    "malerier-textur": {
        materialer: ["Genbrugslærred eller kraftigt papir", "Vandbaseret maling", "Strukturpasta eller genbrugspapir/stof", "Pensel, spartel og afdækning"],
        trin: ["Beskyt arbejdsfladen, og læg lærredet eller papiret klar.", "Påfør struktur med spartel eller fastgør små stykker papir/stof.", "Lad strukturen tørre, og mal derefter overfladen i tynde lag.", "Lad værket tørre helt, før det hænges op."]
    },
    "makeupholder": {
        materialer: ["En ren genbrugsbeholder, æske eller små glas", "Stofrester, papir eller vandbaseret maling til pynt", "Saks og hobbylim", "Sandpapir ved behov"],
        trin: ["Vask og tør beholderen helt, og fjern skarpe kanter.", "Slib eller beklæd ydersiden, hvis du vil ændre udseendet.", "Fastgør pynt med hobbylim, og lad det tørre.", "Saml beholderne, så makeup står stabilt og let kan rengøres."]
    },
    "lysestage-perleblade": {
        materialer: ["En stabil lysestage", "Perleblade eller pynt fra genbrug", "Lim egnet til materialerne", "Et lys, der passer sikkert i stagen"],
        trin: ["Rengør lysestagen, og kontrollér, at den står stabilt.", "Placér perlebladene uden lim for at finde et mønster.", "Lim pynten fast på ydersiden, væk fra stedet hvor flammen kan komme tæt på.", "Lad limen tørre helt, og brug kun stagen under opsyn med passende lys."]
    },
    "lampe": {
        materialer: ["En stabil, tung genstand til lampefod, fx en rengjort mursten", "Et færdigt lampesæt med fatning og ledning", "Skridsikre filtpuder", "Boremaskine kun hvis lampefoden skal have hul til ledningen"],
        trin: ["Vælg en stabil lampefod, og rengør og tør den grundigt.", "Før kun et færdigt lampesæts ledning gennem et eksisterende eller forsigtigt forberedt hul.", "Montér lampesættet præcis efter producentens anvisninger, uden at beskadige ledningen.", "Sæt filtpuder under foden, og få fast elinstallation udført af en autoriseret elektriker."],
        sikkerhed: "Arbejd aldrig med strømførende ledninger. Brug et færdigt lampesæt, og få fast elinstallation udført af en autoriseret elektriker."
    },
    "krukker": {
        materialer: ["En rengjort krukke", "Flise- eller mosaikrester med glatte kanter", "Egnet mosaiklim og fugemasse", "Spartel, svamp og handsker"],
        trin: ["Vask krukken, lad den tørre, og planlæg et mønster med mosaikstykkerne.", "Lim stykkerne fast ét ad gangen, og hold dem væk fra krukkens inderside.", "Lad limen tørre efter anvisningen, og fug mellemrummene.", "Tør mosaikken ren med en fugtig svamp, og lad krukken hærde helt."]
    },
    "appelsinkrans": {
        materialer: ["En krans af grene eller genbrugspap", "Tørrede appelsinskiver", "Snor eller blomstertråd", "Grønne kviste eller anden let pynt"],
        trin: ["Hvis du bruger friske appelsinskiver, tør dem helt ved lav varme i ovnen, til de er tørre.", "Fastgør de tørrede skiver til kransen med snor eller blomstertråd.", "Tilføj kviste og pynt, og fordel vægten jævnt.", "Hæng kransen tørt, og hold den væk fra åben ild og varmekilder."]
    },
    "knivholder": {
        materialer: ["En stabil træblok eller et solidt stykke genbrugstræ", "Sandpapir og træolie egnet til køkkenbrug", "Skridsikre fødder", "Boremaskine med passende bor, hvis der laves knivspor"],
        trin: ["Vælg en tung, stabil træblok, og slib alle flader glatte.", "Bor knivspor med tilstrækkelig afstand og dybde, så knivene står adskilt.", "Fjern savsmuld, behandl træet med køkkenegnet olie, og lad det tørre.", "Montér skridsikre fødder, og kontrollér at holderen står fast, før knivene sættes i."]
    },
    "havegrej": {
        materialer: ["Rene genbrædder eller en solid trækasse", "Skruer og kroge til udendørs brug", "Boremaskine, skruetrækker og målebånd", "Træbeskyttelse til udendørs brug (valgfrit)"],
        trin: ["Mål redskaberne, og planlæg kroge eller rum med plads til håndtagene.", "Slib træet, og saml brædderne eller tilpas kassen.", "Montér kroge, og fastgør holderen til et stabilt underlag.", "Behandl træet til udendørs brug, og kontrollér at redskaberne hænger sikkert."]
    },
    "krukke-ler": {
        materialer: ["En ren, tør krukke", "Lufttørrende ler", "Lerlim eller hobbylim, der passer til krukken", "Kagerulle og modelleringsredskaber"],
        trin: ["Ælt leret blødt, og rul det ud på en ren overflade.", "Form små detaljer eller mønstre, der passer til krukkens overflade.", "Fastgør leret med egnet lim, og glat kanterne forsigtigt.", "Lad ler og lim tørre helt efter anvisningen; brug krukken som yderpotte, da lerpynten ikke nødvendigvis er vandtæt."]
    },
    "muslinge-dekoration": {
        materialer: ["Rene, tørre muslingeskaller", "En lille genbrugsskål, ramme eller træplade", "Hobbylim, der passer til underlaget", "Pensel og vandbaseret lak (valgfrit)"],
        trin: ["Vask muslingerne, og lad dem tørre helt.", "Placér skallerne på underlaget for at prøve et mønster.", "Lim skallerne fast én ad gangen, og lad limen tørre.", "Påfør eventuelt et tyndt lag vandbaseret lak, og lad dekorationen tørre helt."]
    },
    "baenk": {
        materialer: ["Solide genbrædder eller en genbrugsbænk, der skal fornyes", "Skruer egnet til træ og den tiltænkte placering", "Sav, boremaskine, slibepapir og målebånd", "Træbeskyttelse eller maling"],
        trin: ["Planlæg bænkens mål, og vælg kun træ uden råd eller store revner.", "Sav delene til, slib kanterne, og saml sæde og ben med passende skruer.", "Kontrollér, at bænken står plant, og forstærk samlingerne efter behov.", "Behandl træet til inde- eller udendørs brug, og test stabiliteten før brug."]
    },
    "bord": {
        materialer: ["Tørre, rene brændestykker eller andre solide træstykker", "En bordplade i træ eller glas skåret på mål", "Egnet trælim eller beslag", "Slibepapir og filtpuder"],
        trin: ["Vælg tørre stykker, og byg en stabil base med jævn højde.", "Saml træstykkerne med egnet lim eller beslag, og lad samlingerne hærde.", "Placér en bordplade, der passer præcist; få glas skåret og kanterne slebet hos en fagperson.", "Sæt filtpuder under basen, og kontrollér at bordet står stabilt før brug."]
    },
    "bordskaaner-vinpropper": {
        materialer: ["Rene, tørre vinpropper", "En skridsikker kork- eller træbund", "Hobbylim eller kontaktlim egnet til materialerne", "Skarp hobbykniv kun til voksen brug"],
        trin: ["Sortér propperne, og skær dem eventuelt til i ens længde på en stabil skæreflade.", "Arrangér propperne tæt på bunden, så hele fladen dækkes.", "Lim propperne fast, og pres dem forsigtigt på plads.", "Lad bordskåneren tørre helt, og kontrollér at ingen propper sidder løst."]
    },
    "bordskaaner-snor": {
        materialer: ["Kraftig bomuldssnor eller genbrugssnor", "En rund eller firkantet skridsikker bund (valgfrit)", "Hobbylim eller limpistol til voksen brug", "Saks"],
        trin: ["Start i midten, og rul snoren tæt rundt om sig selv.", "Fortsæt med at vikle snoren udad i en flad spiral, og lim lidt ad gangen.", "Klip enden til, og fastgør den på undersiden.", "Lad limen tørre helt, før bordskåneren bruges."]
    },
    "forklaede": {
        materialer: ["Et større stykke kraftigt genbrugsstof, fx fra en dug eller skjorte", "Skråbånd eller stofstrimler til bindebånd", "Mønsterpapir, målebånd, stofsaks og knappenåle", "Symaskine eller nål og tråd"],
        trin: ["Tegn et forklæde i ønsket størrelse på mønsterpapir, og klip stoffet med sømrum.", "Fold og pres kanterne ind, og sy dem, så stoffet ikke trevler.", "Klip to lange bindebånd og et nakkebånd af stof eller skråbånd.", "Sy båndene fast på forklædet, og prøv det på for at kontrollere pasformen."]
    },
    "asymmetrisk-tie-top": {
        materialer: ["Et stykke blødt, genbrugt stof eller en stor T-shirt", "Et mønster eller en top til at tegne efter", "Stofkridt, målebånd, stofsaks og knappenåle", "Symaskine eller nål og tråd"],
        trin: ["Tegn for- og bagstykke med et asymmetrisk snit, og tilføj sømrum.", "Klip stykkerne ud, og prøv dem forsigtigt omkring kroppen, før du syr.", "Sy skulder- og sidesømme, og afslut kanterne med oplægning eller skråbånd.", "Lav bindebånd af stofrester, sy dem fast, og prøv toppen for at tilpasse pasformen."]
    },
    "troeje-knapper": {
        materialer: ["En trøje, der skal fornyes", "Knapper, der kan vaskes sammen med trøjen", "Nål, tråd og stofkridt", "Opsprætter (valgfrit)"],
        trin: ["Vask og tør trøjen, og læg den fladt på et bord.", "Placér knapperne på trøjen, og markér placeringen med stofkridt.", "Sy knapperne fast med tråd i passende farve, og hæft godt på bagsiden.", "Kontrollér, at alle knapper sidder fast, og følg trøjens vaskeanvisning."]
    },
    "hoodie-blonder": {
        materialer: ["En ren hoodie", "Blonder eller blondekanter fra genbrugstekstiler", "Stofkridt, knappenåle og stofsaks", "Nål og tråd eller symaskine"],
        trin: ["Læg blonderne på hoodien, og prøv forskellige placeringer uden at dække lommer eller bevægelige dele.", "Klip blonderne til, og fold rå kanter ind, hvis det er nødvendigt.", "Hæft blonderne med knappenåle, og kontrollér at stoffet ligger glat.", "Sy blonderne fast hele vejen rundt, og fjern nålene, mens du arbejder."]
    },
    "haeklet-shorts": {
        materialer: ["Garnrester med ensartet tykkelse, eller et par eksisterende shorts til fornyelse", "Hæklenål, der passer til garnet", "Målebånd, maskemarkører og stoppenål", "Elastik til taljen (valgfrit)"],
        trin: ["Tag mål af talje, hofte og ønsket længde, og lav en lille hækleprøve.", "Hækl to ben eller paneler i den ønskede størrelse, og kontrollér løbende pasformen.", "Saml delene med hækle- eller madrassting, og hæft alle garnender.", "Lav en taljekant, og træk eventuelt elastik igennem for at sikre en god pasform."]
    },
    "lysestager-flasker": {
        materialer: ["Rene glasflasker med intakte, glatte kanter", "Lys, der passer stabilt i flaskehalsene", "Vandbaseret glasmaling eller snor til dekoration (valgfrit)", "Beskyttende underlag"],
        trin: ["Fjern etiketter, vask flaskerne, og tør dem helt.", "Dekorér ydersiden med glasmaling eller snor, og hold flaskehalsen fri.", "Lad dekorationen tørre eller hærde efter produktets anvisning.", "Stil flaskerne stabilt på et varmebestandigt underlag, og brug kun lys, der passer sikkert. Hold altid levende lys under opsyn."]
    },
    "skjorte-nyt-look": {
        materialer: ["En ren skjorte, der skal fornyes", "Stofrester, ekstra knapper eller bånd", "Stofsaks, knappenåle og målebånd", "Nål og tråd eller symaskine"],
        trin: ["Prøv skjorten på, og beslut hvilke detaljer du vil ændre, fx manchetter, krave eller lommer.", "Markér ændringerne med stofkridt, og klip kun hvis kanterne kan afsluttes pænt.", "Tilføj stofrester, knapper eller bånd, og hæft dem med knappenåle.", "Sy detaljerne fast, afslut rå kanter, og kontrollér at skjorten stadig er behagelig at have på."]
    },
    "taske-jeans": {
        materialer: ["Et par rene, slidte jeans", "Stof til foer eller en ekstra denimrest", "Stofkridt, stofsaks, nåle og kraftig tråd", "Symaskine eller nål, samt stropper fra genbrug"],
        trin: ["Klip ben eller buksekrop til den ønskede taskestørrelse, og gem lommerne til udvendig opbevaring.", "Sy bunden sammen med stoffet på vrangen, og forstærk sømmene.", "Sy et foer af stofrester, og fastgør det inde i tasken.", "Sy solide stropper fast, vend tasken ret, og kontrollér sømme og hankes styrke før brug."]
    },
    "vest-snore": {
        materialer: ["En vest, der skal fornyes", "Stofsnor, bånd eller snore fra genbrug", "Stofkridt, målebånd og knappenåle", "Nål og tråd eller symaskine"],
        trin: ["Markér, hvor snorene skal sidde foran på vesten, og sørg for at placeringen er symmetrisk.", "Klip snorene i passende længder, og afslut enderne, så de ikke trevler.", "Hæft snorene på vesten med knappenåle, og prøv vesten for at kontrollere placeringen.", "Sy snorene fast i enderne og ved eventuelle løkker, og kontrollér at de sidder sikkert."]
    }
};

// Find sidens elementer, som kort, søgning og status skal opdatere.
const diyGrid = document.querySelector("#diy-projekt-grid");
const diySoegning = document.querySelector("#diy-soegning-input");
const diyNulstil = document.querySelector("#diy-soegning-nulstil");
const diyStatus = document.querySelector("#diy-soegning-status");
const diyIngenResultater = document.querySelector("#diy-ingen-resultater");
const diyKategoriLinks = [...document.querySelectorAll("[data-diy-filter]")];
// Oversæt projektkortets viste kategori til filterværdierne fra links i genbrug-diy.html.
const diyHeroKategori = {
    "Genbrug af tekstiler": "tekstiler",
    "Reparér og forny": "tekstiler",
    "Genbrug i hjemmet": "bolig",
    Opbevaring: "bolig",
    Boligpynt: "bolig",
    Genbrugsmøbler: "moebler",
    "I køkkenet": "koekken",
    "Genbrug i haven": "have",
    "Genbrug & DIY": "bolig",
    "Kreativ genbrug": "kreativt"
};
let valgtDiyKategori = "alle";

// Gør søgning uafhængig af store/små bogstaver og danske specialtegn.
function normaliserDiySoegning(tekst) {
    return tekst
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .replace(/æ/g, "ae")
        .replace(/[øö]/g, "o")
        .replace(/å/g, "a")
        .toLowerCase();
}

// Byg projektkortene ud fra dataene, så kortlisten kan udvides ét sted.
diyProjekter.forEach((projekt) => {
    const kort = document.createElement("article");
    kort.className = "diy-projektkort";
    kort.id = `projekt-${projekt.id}`;
    kort.dataset.favoritId = `diy-${projekt.id}`;
    kort.dataset.favoritType = "diy";
    kort.dataset.diyKategori = diyHeroKategori[projekt.kategori];
    if (!kort.dataset.diyKategori) {
        console.error(`DIY-projektet "${projekt.id}" har en ukendt projektkategori: "${projekt.kategori}".`);
        return;
    }

    const billede = document.createElement("img");
    billede.src = projekt.billede;
    billede.alt = projekt.alt;

    const favoritKnap = document.createElement("button");
    favoritKnap.className = "favorit-knap";
    favoritKnap.type = "button";
    favoritKnap.dataset.favoritToggle = "";
    favoritKnap.setAttribute("aria-label", `Gem ${projekt.titel}`);
    favoritKnap.setAttribute("aria-pressed", "false");
    const favoritIkon = document.createElement("i");
    favoritIkon.className = "fa-solid fa-heart";
    favoritIkon.setAttribute("aria-hidden", "true");
    favoritKnap.append(favoritIkon);

    const info = document.createElement("div");
    info.className = "diy-projektinfo";

    const kategori = document.createElement("span");
    kategori.className = "diy-projektkategori";
    kategori.textContent = projekt.kategori;

    const titel = document.createElement("h3");
    titel.textContent = projekt.titel;

    const beskrivelse = document.createElement("p");
    beskrivelse.textContent = projekt.beskrivelse;

    const aabneKnap = document.createElement("button");
    aabneKnap.className = "opskrift-kort-aabn";
    aabneKnap.type = "button";
    aabneKnap.setAttribute("aria-haspopup", "dialog");
    aabneKnap.setAttribute("aria-label", `Åbn guide: ${projekt.titel}`);
    info.append(kategori, titel, beskrivelse);
    aabneKnap.append(billede, info);
    kort.append(aabneKnap, favoritKnap);
    diyGrid.insertBefore(kort, diyIngenResultater);
});

const diyDialog = document.querySelector("#diy-dialog");
const diyDialogTitel = document.querySelector("#diy-dialog-titel");
const diyDialogBillede = diyDialog.querySelector(".opskrift-dialog-billede");
const diyDialogMaterialer = document.querySelector("#diy-dialog-materialer");
const diyDialogTrin = document.querySelector("#diy-dialog-trin");
const diyDialogSikkerhed = document.querySelector("#diy-dialog-sikkerhed");
const diyDialogLuk = diyDialog.querySelector(".opskrift-dialog-luk");

// Fyld dialogen med materialer, instruktioner og en valgfri sikkerhedsnote.
function visDiyGuide(projekt) {
    const guide = diyGuides[projekt.id];
    if (!guide) {
        console.error(`Der mangler materialer og vejledning til DIY-projektet "${projekt.id}".`);
        return;
    }

    diyDialogTitel.textContent = projekt.titel;
    diyDialogBillede.src = projekt.billede;
    diyDialogBillede.alt = projekt.alt;
    diyDialogMaterialer.replaceChildren(...guide.materialer.map((materiale) => {
        const element = document.createElement("li");
        element.textContent = materiale;
        return element;
    }));
    diyDialogTrin.replaceChildren(...guide.trin.map((trin) => {
        const element = document.createElement("li");
        element.textContent = trin;
        return element;
    }));
    diyDialogSikkerhed.hidden = !guide.sikkerhed;
    diyDialogSikkerhed.textContent = guide.sikkerhed || "";
    diyDialog.showModal();
}

diyProjekter.forEach((projekt) => {
    document.querySelector(`#projekt-${projekt.id} .opskrift-kort-aabn`)
        .addEventListener("click", () => visDiyGuide(projekt));
});

// Luk guiden med lukknappen, Escape eller klik på dialogens baggrund.
diyDialogLuk.addEventListener("click", () => diyDialog.close());
diyDialog.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
        event.preventDefault();
        diyDialog.close();
    }
});
diyDialog.addEventListener("click", (event) => {
    if (event.target === diyDialog) {
        diyDialog.close();
    }
});

// Filtrér projekter på titel, kategori, beskrivelse og søgeord.
function filtrerDiyProjekter() {
    const soegeord = diySoegning.value
        .split(",")
        .map((ord) => normaliserDiySoegning(ord.trim()))
        .filter(Boolean);
    const kort = [...diyGrid.querySelectorAll(".diy-projektkort")];
    let antalSynlige = 0;

    kort.forEach((element, index) => {
        const projekt = diyProjekter[index];
        const soegeTekst = normaliserDiySoegning([
            projekt.titel,
            projekt.kategori,
            projekt.beskrivelse,
            projekt.soegeord
        ].join(" "));
        const matcherKategori = valgtDiyKategori === "alle" || element.dataset.diyKategori === valgtDiyKategori;
        const matcherSoegning = soegeord.every((ord) => soegeTekst.includes(ord));
        const matcher = matcherKategori && matcherSoegning;

        element.hidden = !matcher;
        if (matcher) {
            antalSynlige += 1;
        }
    });

    diyIngenResultater.hidden = antalSynlige !== 0;
    if (soegeord.length === 0) {
        const kategoriLink = diyKategoriLinks.find((link) => link.dataset.diyFilter === valgtDiyKategori);
        const kategoriNavn = kategoriLink?.textContent.trim();
        diyStatus.textContent = valgtDiyKategori === "alle"
            ? `Viser alle ${antalSynlige} DIY-projekter.`
            : `Viser ${antalSynlige} projekter i kategorien ${kategoriNavn}.`;
    } else if (antalSynlige === 0) {
        diyStatus.textContent = "Ingen projekter matcher den valgte kategori og din søgning.";
    } else {
        diyStatus.textContent = `${antalSynlige} ${antalSynlige === 1 ? "projekt matcher" : "projekter matcher"} den valgte kategori og din søgning.`;
    }
}

diyKategoriLinks.forEach((link) => {
    link.addEventListener("click", () => {
        valgtDiyKategori = link.dataset.diyFilter;
        diyKategoriLinks.forEach((kategoriLink) => {
            if (kategoriLink === link) {
                kategoriLink.setAttribute("aria-current", "true");
            } else {
                kategoriLink.removeAttribute("aria-current");
            }
        });
        filtrerDiyProjekter();
    });
});

diySoegning.addEventListener("input", filtrerDiyProjekter);
diyNulstil.addEventListener("click", () => {
    diySoegning.value = "";
    filtrerDiyProjekter();
    diySoegning.focus();
});

filtrerDiyProjekter();

// Åbn automatisk guiden, hvis et projektlink indeholder projektets id.
const diyProjektFraHash = diyProjekter.find((projekt) => `projekt-${projekt.id}` === window.location.hash.slice(1));
if (diyProjektFraHash) {
    visDiyGuide(diyProjektFraHash);
}
