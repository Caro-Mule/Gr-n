// Opskriftsdata, kortvisning, søgning og opskriftsdialog på opskriftssiden.
// Grunddata til de tre opskrifter, der allerede er beskrevet i HTML.
const opskrifter = {
    vafler: {
        titel: "Grøntsagsvafler",
        billede: "media/Grøntsagevafler.jpg",
        alt: "Grøntsagsvafler serveret med friske råvarer",
        ingredienser: [
            "200 g grøntsager, fx spinat, gulerødder eller blomkål",
            "3 æg",
            "1 dl mælk",
            "1 dl havregryn",
            "1 dl hvedemel",
            "0,5 tsk. salt",
            "100 g revet cheddarost"
        ],
        trin: [
            "Riv eller hak grøntsagerne fint. Pres overskydende væde fra, hvis de er meget saftige.",
            "Pisk æggene sammen med mælk, og rør havregryn, hvedemel og salt i.",
            "Vend grøntsager og cheddar i dejen, og lad den hvile i 10 minutter.",
            "Bag dejen i et varmt, let smurt vaffeljern, til vaflerne er gyldne og sprøde."
        ]
    },
    aebletaerte: {
        titel: "Æbletærte",
        billede: "media/opskrift æbeltærte.jpg",
        alt: "Hjemmelavet æbletærte",
        ingredienser: [
            "3-4 æbler",
            "150 g hvedemel",
            "100 g koldt smør",
            "75 g sukker",
            "1 æg",
            "1 tsk. kanel",
            "1 spsk. sukker til æblerne"
        ],
        trin: [
            "Tænd ovnen på 180 °C. Smuldr smørret i melet, og rør sukker og æg i til en samlet dej.",
            "Tryk dejen ud i en tærteform, og prik bunden med en gaffel.",
            "Skær æblerne i tynde både, og fordel dem over bunden. Drys med kanel og sukker.",
            "Bag tærten i 30-35 minutter, til kanten er gylden og æblerne møre. Lad den køle lidt af før servering."
        ]
    },
    rester: {
        titel: "Bag med rester",
        billede: "media/opskrift bolle muffins med fyld.jpg",
        alt: "Boller med grøntsager og ost",
        ingredienser: [
            "250 g hvedemel",
            "2 tsk. bagepulver",
            "2 æg",
            "1 dl neutral olie",
            "2 dl mælk eller yoghurt",
            "150-200 g rester, fx revne grøntsager, frugt, ost eller krydderurter",
            "0,5 tsk. salt"
        ],
        trin: [
            "Tænd ovnen på 190 °C. Rør mel, bagepulver og salt sammen i en skål.",
            "Pisk æg, olie og mælk eller yoghurt sammen, og rør det i de tørre ingredienser.",
            "Vend dine rester i dejen. Riv eller skær større stykker i mindre bidder.",
            "Fordel dejen i smurte muffinforme, og bag i 18-22 minutter, til bagværket er gennembagt og gyldent."
        ]
    }
};

// Kategorinøglerne skal svare til data-opskrift-filter i opskrifter.html.
const opskriftKategoriNavne = {
    maaltider: "Måltider",
    bagvaerk: "Bagværk",
    tilbehoer: "Snacks & tilbehør",
    soedt: "Søde sager",
    drikkevarer: "Drikkevarer"
};

const opskriftKategorier = {
    vafler: "maaltider",
    aebletaerte: "soedt",
    rester: "bagvaerk",
    "bolle-muffins": "bagvaerk",
    "boller-skinke-squash": "bagvaerk",
    "brombaer-syltetoej": "tilbehoer",
    "cremet-spinatpasta": "maaltider",
    franskbroed: "bagvaerk",
    frosnapper: "bagvaerk",
    "gin-tonic-is": "soedt",
    "grillet-salat": "maaltider",
    groentsagsmuffins: "bagvaerk",
    groentsagssuppe: "maaltider",
    "italiensk-krydderi": "tilbehoer",
    hytteostdip: "tilbehoer",
    hytteostsandwich: "maaltider",
    ingefaershot: "drikkevarer",
    "karamel-aeble-likoer": "drikkevarer",
    majsfritter: "maaltider",
    "mini-taerter": "bagvaerk",
    "pisket-kryddermoer": "tilbehoer",
    skinkestang: "bagvaerk",
    spidskaalwrap: "maaltider",
    "broccoli-cheddar": "maaltider",
    aeblesyltetoej: "tilbehoer",
    urtesalt: "tilbehoer",
    boennefrikadeller: "maaltider",
    aertepandekager: "maaltider",
    "bagte-gulerodder": "maaltider",
    "hjemmelavet-mysli": "tilbehoer",
    "kylling-pikantost": "maaltider",
    "kylling-med-fyld": "maaltider"
};

Object.keys(opskrifter).forEach((id) => {
    opskrifter[id].kategori = opskriftKategorier[id];
});

// Yderligere opskrifter oprettes som kort ud fra denne liste.
// Hver id skal også have en kategori i opskriftKategorier ovenfor.
const flereOpskrifter = [
    {
        id: "bolle-muffins",
        titel: "Bolle-muffins med fyld",
        billede: "media/opskrift bolle muffins med fyld.jpg",
        beskrivelse: "Små, bløde madbrød fyldt med grønt og ost.",
        ingredienser: ["300 g hvedemel", "2 dl lunkent vand", "25 g gær", "1 spsk. olie", "1 tsk. salt", "100 g revet ost", "150 g finthakket grønt"],
        trin: ["Rør gæren ud i vandet, og tilsæt olie, salt og mel lidt ad gangen.", "Ælt dejen smidig, og lad den hæve tildækket i 45 minutter.", "Del dejen i muffinsforme, og tryk ost og grøntsager ned i midten.", "Lad efterhæve i 15 minutter, og bag ved 200 °C i 15-18 minutter."]
    },
    {
        id: "boller-skinke-squash",
        titel: "Boller med skinke, squash og ost",
        billede: "media/opskrift boller m. skinke, squash og ost.jpg",
        beskrivelse: "Saftige madboller med squash, skinke og ost.",
        ingredienser: ["25 g gær", "3 dl lunkent vand", "1 spsk. olie", "1 tsk. salt", "1 lille squash, revet og vredet fri for væde", "100 g skinke i tern", "100 g revet ost", "Ca. 500 g hvedemel"],
        trin: ["Rør gæren ud i vandet, og tilsæt olie, salt, squash, skinke og ost.", "Ælt melet i lidt ad gangen til en blød dej, og lad den hæve i 45 minutter.", "Form 10 boller, og lad dem efterhæve i 20 minutter.", "Bag ved 200 °C i 18-20 minutter, til bollerne er gyldne."]
    },
    {
        id: "brombaer-syltetoej",
        titel: "Brombærsyltetøj",
        billede: "media/opskrift brombær syltetøj.jpg",
        beskrivelse: "Hjemmelavet syltetøj med søde, modne brombær.",
        ingredienser: ["500 g brombær", "250 g sukker", "1 spsk. citronsaft", "1 tsk. vaniljesukker"],
        trin: ["Skyl bærrene forsigtigt, og kom dem i en gryde med citronsaft.", "Lad bærrene simre i 5 minutter, til de begynder at briste.", "Rør sukker og vaniljesukker i, og kog i yderligere 5-10 minutter.", "Hæld syltetøjet på et rent, skoldet glas, og opbevar det på køl."]
    },
    {
        id: "cremet-spinatpasta",
        titel: "Cremet spinatpasta",
        billede: "media/opskrift creamet spinat pasta.jpg",
        beskrivelse: "Hurtig pasta med spinat og en blød, cremet sauce.",
        ingredienser: ["300 g pasta", "200 g frisk spinat", "1 løg, finthakket", "1 fed hvidløg", "2 dl madlavningsfløde", "50 g revet parmesan", "1 spsk. olie", "Salt og peber"],
        trin: ["Kog pastaen efter anvisningen på pakken, og gem lidt kogevand.", "Svits løg og hvidløg i olie, til løget er blødt.", "Vend spinaten i, og lad den falde sammen. Tilsæt fløde og parmesan.", "Vend pastaen i saucen, spæd med kogevand efter behov, og smag til."]
    },
    {
        id: "franskbroed",
        titel: "Hjemmebagt franskbrød",
        billede: "media/opskrift fransbrød.jpg",
        beskrivelse: "Et klassisk, luftigt brød med sprød skorpe.",
        ingredienser: ["25 g gær", "3 dl lunkent vand", "1 spsk. olie", "1 tsk. sukker", "1 tsk. salt", "Ca. 500 g hvedemel"],
        trin: ["Rør gæren ud i vandet sammen med sukker og olie.", "Tilsæt salt og mel lidt ad gangen, og ælt dejen glat.", "Lad dejen hæve tildækket i 45 minutter, form et brød, og lad det efterhæve i 30 minutter.", "Snit brødet, og bag ved 220 °C i 25-30 minutter."]
    },
    {
        id: "frosnapper",
        titel: "Frøsnapper",
        billede: "media/opskrift frøsnapper.jpg",
        beskrivelse: "Sprøde, snoede butterdejsstænger med frø.",
        ingredienser: ["1 rulle butterdej", "1 æg", "2 spsk. sesamfrø", "1 spsk. solsikkekerner", "1 spsk. hørfrø", "Et nip salt"],
        trin: ["Rul butterdejen ud, og pensl den med sammenpisket æg.", "Drys frø og salt jævnt over halvdelen af dejen, og fold den anden halvdel over.", "Skær strimler, sno dem, og læg dem på en bageplade.", "Bag ved 200 °C i 12-15 minutter, til de er gyldne og sprøde."]
    },
    {
        id: "gin-tonic-is",
        titel: "Gin og tonic-ispinde",
        billede: "media/opskrift gin og tonic ispinde.jpg",
        beskrivelse: "Friske ispinde med lime, tonic og et strejf af gin.",
        ingredienser: ["2 dl tonicvand", "1 dl vand", "Saft fra 1 lime", "2 spsk. sukker eller sirup", "2 spsk. gin (kan udelades)", "Lime i tynde skiver"],
        trin: ["Rør vand, limesaft og sukker sammen, til sukkeret er opløst.", "Bland tonic og eventuelt gin i.", "Læg en skive lime i hver isform, og hæld blandingen over.", "Frys i mindst 6 timer. Lad formene stå kort under lunkent vand før servering."]
    },
    {
        id: "grillet-salat",
        titel: "Grillet salat",
        billede: "media/opskrift grillet salet.jpg",
        beskrivelse: "Grillede grøntsager med en enkel syrlig dressing.",
        ingredienser: ["2 hjertesalater", "1 rød peberfrugt", "1 lille squash", "2 spsk. olivenolie", "1 spsk. citronsaft", "1 tsk. honning", "Salt og peber"],
        trin: ["Halvér hjertesalaterne på langs, og skær squash og peberfrugt i skiver.", "Pensl grøntsagerne let med olie, og grill dem 2-3 minutter på hver side.", "Pisk resten af olien med citronsaft, honning, salt og peber.", "Dryp dressingen over de lune grøntsager, og servér straks."]
    },
    {
        id: "groentsagsmuffins",
        titel: "Grøntsagsmuffins",
        billede: "media/opskrift grøntsage muffin.jpg",
        beskrivelse: "Nemme, salte muffins med grøntsager og ost.",
        ingredienser: ["2 æg", "2 dl mælk", "2 dl hvedemel", "1 tsk. bagepulver", "1 lille gulerod, revet", "1 lille squash, revet og vredet", "75 g revet ost", "Salt og peber"],
        trin: ["Pisk æg og mælk sammen, og rør mel, bagepulver, salt og peber i.", "Vend de revne grøntsager og osten i dejen.", "Fordel dejen i 8-10 smurte muffinsforme.", "Bag ved 190 °C i 20-25 minutter, til de er gennembagte."]
    },
    {
        id: "groentsagssuppe",
        titel: "Grøntsagssuppe",
        billede: "media/opskrift grøntsage's suppe.jpg",
        beskrivelse: "Varmende suppe, der kan laves med grøntsagsrester.",
        ingredienser: ["1 løg", "1 fed hvidløg", "600 g blandede grøntsager i tern", "8 dl grøntsagsbouillon", "1 spsk. olie", "1 dl fløde eller kokosmælk (valgfrit)", "Salt og peber"],
        trin: ["Hak løg og hvidløg, og svits dem i olie i en gryde.", "Tilsæt grøntsager og bouillon, og lad det simre i 20-25 minutter.", "Blend suppen glat, eller lad den være rustik.", "Rør eventuelt fløde i, og smag til med salt og peber."]
    },
    {
        id: "italiensk-krydderi",
        titel: "Hjemmelavet italiensk krydderi",
        billede: "media/opskrift hjemmelavet italiensk krydderi.jpg",
        beskrivelse: "En aromatisk krydderiblanding til pasta, grøntsager og brød.",
        ingredienser: ["2 spsk. tørret oregano", "2 spsk. tørret basilikum", "1 spsk. tørret timian", "1 spsk. tørret rosmarin", "1 tsk. hvidløgspulver", "1 tsk. chiliflager (valgfrit)"],
        trin: ["Mål alle krydderierne af i en skål.", "Gnid rosmarin mellem fingrene, hvis du ønsker mindre stykker.", "Bland krydderierne grundigt.", "Hæld blandingen i et rent, lufttæt glas, og opbevar det tørt."]
    },
    {
        id: "hytteostdip",
        titel: "Hytteostdip",
        billede: "media/opskrift hytteost dip.jpg",
        beskrivelse: "Frisk, proteinrig dip med krydderurter og citron.",
        ingredienser: ["200 g hytteost", "2 spsk. cremefraiche", "1 spsk. citronsaft", "2 spsk. hakket purløg eller persille", "Salt og peber"],
        trin: ["Blend hytteosten med cremefraiche, til dippen er glat.", "Rør citronsaft og hakkede krydderurter i.", "Smag til med salt og peber.", "Sæt dippen på køl i 15 minutter, og servér med grøntsagsstænger."]
    },
    {
        id: "hytteostsandwich",
        titel: "Hytteostsandwich",
        billede: "media/opskrift hytteost sandwich.jpg",
        beskrivelse: "Mættende sandwich med hytteost og sprøde grøntsager.",
        ingredienser: ["2 skiver fuldkornsbrød", "100 g hytteost", "½ avocado", "½ agurk", "En håndfuld salat", "1 tsk. citronsaft", "Salt og peber"],
        trin: ["Rist brødet let, hvis du ønsker en sprød sandwich.", "Mos avocado med citronsaft, salt og peber.", "Smør avocadomos på brødet, og fordel hytteost, agurk og salat ovenpå.", "Læg brødskiverne sammen, og servér straks."]
    },
    {
        id: "ingefaershot",
        titel: "Ingefærshot",
        billede: "media/opskrift ingefærsshot.jpg",
        beskrivelse: "Syrligt og krydret shot med frisk ingefær og citron.",
        ingredienser: ["100 g frisk ingefær", "1 liter vand", "2 citroner", "2 spsk. honning"],
        trin: ["Skær ingefæren i tynde skiver, og kom den i en gryde med vand.", "Lad det simre ved lav varme i 20 minutter, og lad det køle af.", "Si ingefæren fra, og rør citronsaft og honning i.", "Hæld på en ren flaske, og opbevar på køl."]
    },
    {
        id: "karamel-aeble-likoer",
        titel: "Karamel-æblelikør",
        billede: "media/opskrift karamel-æble likør.jpg",
        beskrivelse: "Sød æbledrik med karamelnoter til en særlig anledning.",
        ingredienser: ["5 dl æblemost", "100 g sukker", "1 dl vand", "1 kanelstang", "2 dl neutral vodka (valgfrit)"],
        trin: ["Varm sukker og vand i en gryde, til sukkeret smelter og bliver gyldent.", "Tilsæt forsigtigt æblemost og kanelstang, og lad blandingen simre i 10 minutter.", "Lad siruppen køle helt af, og fjern kanelstangen.", "Rør eventuelt vodka i, hæld på en ren flaske, og opbevar på køl. Serveres kun for voksne."]
    },
    {
        id: "majsfritter",
        titel: "Majsfritter",
        billede: "media/opskrift majs fritter.jpg",
        beskrivelse: "Sprøde fritter af majs, gode som snack eller tilbehør.",
        ingredienser: ["250 g majs", "2 æg", "75 g hvedemel", "½ tsk. bagepulver", "2 spsk. hakket forårsløg", "Salt og peber", "Olie til stegning"],
        trin: ["Rør majs sammen med æg, mel, bagepulver og forårsløg.", "Smag dejen til med salt og peber.", "Varm lidt olie på en pande, og sæt små skefulde dej på panden.", "Steg fritterne 2-3 minutter på hver side, til de er gyldne."]
    },
    {
        id: "mini-taerter",
        titel: "Mini tærter med svampe og skinke",
        billede: "media/opskrift mini tærter med svampe og skinke.jpg",
        beskrivelse: "Små sprøde tærter med cremet fyld af svampe og skinke.",
        ingredienser: ["1 rulle tærtedej", "150 g champignon", "100 g skinke i tern", "2 æg", "1 dl madlavningsfløde", "50 g revet ost", "Salt og peber"],
        trin: ["Udstik dejen, og læg stykkerne i en smurt muffinsform.", "Skær svampene i skiver, og steg dem kort på en pande.", "Fordel svampe og skinke i formene. Pisk æg, fløde, ost, salt og peber sammen, og hæld over.", "Bag ved 190 °C i 18-22 minutter, til tærterne er faste og gyldne."]
    },
    {
        id: "pisket-kryddermoer",
        titel: "Pisket kryddersmør",
        billede: "media/opskrift pisket krydersmør.jpg",
        beskrivelse: "Luftigt smør med friske krydderurter og et strejf af citron.",
        ingredienser: ["150 g blødt smør", "2 spsk. hakket persille", "1 spsk. hakket purløg", "1 tsk. citronskal", "Et nip salt"],
        trin: ["Pisk smørret luftigt med en håndmixer i 2-3 minutter.", "Tilsæt krydderurter, citronskal og salt.", "Pisk kort, til det hele er fordelt.", "Servér straks eller form smørret i bagepapir og sæt det på køl."]
    },
    {
        id: "skinkestang",
        titel: "Skinkestang",
        billede: "media/opskrift skinke stang.jpg",
        beskrivelse: "Nem butterdejsstang med skinke og smeltet ost.",
        ingredienser: ["1 rulle butterdej", "150 g skinke i strimler", "100 g flødeost", "100 g revet ost", "1 æg til pensling"],
        trin: ["Rul butterdejen ud, og smør flødeost på midten.", "Fordel skinke og revet ost ovenpå fyldet.", "Skær skrå strimler i dejens sider, fold dem ind over fyldet, og pensl med æg.", "Bag ved 200 °C i 20-25 minutter, til stangen er gylden."]
    },
    {
        id: "spidskaalwrap",
        titel: "Spidskålwrap",
        billede: "media/opskrift spidskålwrap.jpg",
        beskrivelse: "Friske wraps med sprødt spidskål og cremet dressing.",
        ingredienser: ["4 store blade spidskål", "200 g kogte kikærter", "1 gulerod", "½ agurk", "100 g yoghurt", "1 tsk. citronsaft", "Salt og peber"],
        trin: ["Skyl kålbladene, og skær den hårde midte lidt tyndere.", "Rør yoghurt med citronsaft, salt og peber.", "Fordel kikærter, revet gulerod og agurk på kålbladene.", "Kom dressing på, rul bladene sammen, og servér."]
    },
    {
        id: "broccoli-cheddar",
        titel: "Sprød broccoli med cheddar",
        billede: "media/opskrift sprøde knust broccoli med cheddar.jpg",
        beskrivelse: "Ovnbagt broccoli med sprøde kanter og smeltet cheddar.",
        ingredienser: ["1 stort broccolihoved", "2 spsk. olivenolie", "75 g revet cheddar", "½ tsk. hvidløgspulver", "Salt og peber"],
        trin: ["Del broccoli i buketter, og kog dem i 4 minutter. Lad dem dryppe godt af.", "Læg buketterne på en bageplade, og tryk dem let flade med bunden af et glas.", "Dryp med olie, og krydr med hvidløgspulver, salt og peber.", "Drys cheddar over, og bag ved 220 °C i 15-20 minutter, til kanterne er sprøde."]
    },
    {
        id: "aeblesyltetoej",
        titel: "Æblesyltetøj",
        billede: "media/opskrift syltetøj med æble.jpg",
        beskrivelse: "Krydret æblesyltetøj, der bruger havens æbler godt.",
        ingredienser: ["600 g æbler, skrællet og skåret i tern", "150 g sukker", "1 dl vand", "1 tsk. kanel", "1 spsk. citronsaft"],
        trin: ["Kom æbler, vand og citronsaft i en gryde, og lad det simre under låg i 15 minutter.", "Mos æblerne let, når de er møre.", "Tilsæt sukker og kanel, og kog i 5-10 minutter under omrøring.", "Hæld på et rent, skoldet glas, og opbevar på køl."]
    },
    {
        id: "urtesalt",
        titel: "Urtesalt",
        billede: "media/opskrift urtesalt.jpg",
        beskrivelse: "Hjemmelavet salt med friske eller tørrede krydderurter.",
        ingredienser: ["100 g groft salt", "1 håndfuld persille", "1 håndfuld purløg", "Et par kviste timian"],
        trin: ["Skyl krydderurterne, og tør dem grundigt.", "Blend urterne med saltet, til blandingen er jævnt grøn.", "Spred saltet ud på bagepapir, og tør det ved 60 °C i ovnen i 1-2 timer med ovnlågen på klem.", "Lad saltet køle helt af, og opbevar det i et lufttæt glas."]
    },
    {
        id: "boennefrikadeller",
        titel: "Vegetarfrikadeller af bønner",
        billede: "media/opskrift vegatar frikadeller på bønner.jpg",
        beskrivelse: "Mættende, gyldne frikadeller med bønner og krydderier.",
        ingredienser: ["1 dåse kidneybønner, skyllet og drænet", "1 æg", "½ løg, finthakket", "½ dl havregryn", "1 tsk. paprika", "Salt og peber", "Olie til stegning"],
        trin: ["Mos bønnerne groft med en gaffel.", "Rør æg, løg, havregryn og paprika i, og krydr med salt og peber.", "Lad farsen hvile i 10 minutter, og form små frikadeller.", "Steg dem i lidt olie ved middel varme i 4-5 minutter på hver side."]
    },
    {
        id: "aertepandekager",
        titel: "Ærtepandekager",
        billede: "media/opskrift ærte pandekager.jpg",
        beskrivelse: "Grønne pandekager med ærter, der passer til frokost eller aftensmad.",
        ingredienser: ["150 g ærter", "2 æg", "1 dl mælk", "100 g hvedemel", "½ tsk. salt", "1 spsk. olie til stegning"],
        trin: ["Blend ærterne med æg og mælk.", "Pisk mel og salt i, til dejen er jævn.", "Varm lidt olie på en pande, og hæld små portioner dej på.", "Steg pandekagerne 2-3 minutter på hver side, til de er faste og let gyldne."]
    },
    {
        id: "bagte-gulerodder",
        titel: "Bagte gulerødder med pestocreme",
        billede: "media/opskriftbagte guleroder m. pestocream.jpg",
        beskrivelse: "Søde, ovnbagte gulerødder med cremet pesto på toppen.",
        ingredienser: ["500 g gulerødder", "1 spsk. olivenolie", "½ tsk. salt", "100 g cremefraiche", "1 spsk. grøn pesto", "1 tsk. citronsaft"],
        trin: ["Skrub gulerødderne, og vend dem med olie og salt.", "Bag ved 200 °C i 25-35 minutter, til de er møre og let karamelliserede.", "Rør cremefraiche sammen med pesto og citronsaft.", "Servér de varme gulerødder med pestocremen."]
    },
    {
        id: "hjemmelavet-mysli",
        titel: "Hjemmelavet mysli",
        billede: "media/opskrift hjemmelavet mysli.jpg",
        beskrivelse: "Sprød, hjemmelavet mysli med havre, nødder og tørret frugt.",
        ingredienser: ["300 g havregryn", "75 g grofthakkede mandler eller nødder", "2 spsk. solsikkekerner", "2 spsk. honning eller sirup", "2 spsk. neutral olie", "50 g rosiner eller anden tørret frugt"],
        trin: ["Tænd ovnen på 170 °C, og bland havregryn, nødder og solsikkekerner.", "Rør honning og olie sammen, vend det i blandingen, og fordel på en bageplade.", "Bag i 20-25 minutter, og rør rundt et par gange, så myslien bliver jævnt gylden.", "Lad myslien køle helt af, og vend rosiner eller tørret frugt i. Opbevar i et lufttæt glas."]
    },
    {
        id: "kylling-pikantost",
        titel: "Kylling med pikantost",
        billede: "media/opskrift kylling i pikantost.jpg",
        beskrivelse: "Mør kylling i en cremet sauce med pikantost.",
        ingredienser: ["500 g kyllingebryst i tern", "1 løg, finthakket", "150 g pikant flødeost", "2 dl madlavningsfløde", "1 spsk. olie", "Salt og peber", "Frisk persille (valgfrit)"],
        trin: ["Varm olien på en pande, og brun kyllingestykkerne godt på alle sider.", "Tilsæt løg, og steg videre, til løget er blødt og kyllingen gennemstegt.", "Rør pikantost og madlavningsfløde i, og lad saucen simre i 5-7 minutter.", "Smag til med salt og peber, og servér eventuelt med persille, ris eller pasta."]
    },
    {
        id: "kylling-med-fyld",
        titel: "Fyldt kylling",
        billede: "media/opskrift kylling med fyld.jpg",
        beskrivelse: "Saftigt kyllingebryst med et cremet fyld af spinat og ost.",
        ingredienser: ["2 store kyllingebryster", "75 g frisk spinat", "100 g flødeost", "30 g revet ost", "1 tsk. paprika", "1 spsk. olie", "Salt og peber"],
        trin: ["Tænd ovnen på 190 °C. Rør flødeost, revet ost og hakket spinat sammen.", "Skær en lomme i hvert kyllingebryst uden at skære helt igennem, og fordel fyldet i lommerne.", "Luk åbningen med tandstikker, krydr med paprika, salt og peber, og brun kyllingen kort på en pande.", "Læg kyllingen i et ovnfast fad, og bag i 20-25 minutter, til den er gennemstegt."]
    }
];

const opskriftListe = document.querySelector("#opskrifter");

// Tilføj ekstra opskrifter til opslaget og byg deres kort i gitteret.
flereOpskrifter.forEach((opskrift) => {
    const kategori = opskriftKategorier[opskrift.id];
    if (!kategori) {
        console.error(`Der mangler en kategori til opskriften "${opskrift.id}".`);
        return;
    }

    opskrifter[opskrift.id] = {
        ...opskrift,
        alt: opskrift.titel,
        kategori
    };

    const kort = document.createElement("article");
    kort.className = "diy-projektkort opskrift-kort";
    kort.dataset.opskrift = opskrift.id;
    kort.dataset.opskriftKategori = kategori;
    kort.dataset.favoritId = `opskrift-${opskrift.id}`;
    kort.dataset.favoritType = "opskrift";
    kort.id = `opskrift-${opskrift.id}`;
    kort.innerHTML = `
        <button class="opskrift-kort-aabn" type="button" aria-haspopup="dialog" aria-label="${opskrift.titel}">
            <img src="${opskrift.billede}" alt="${opskrift.titel}">
            <div class="diy-projektinfo">
                <span class="diy-projektkategori">${opskriftKategoriNavne[kategori]}</span>
                <h3>${opskrift.titel}</h3>
                <p>${opskrift.beskrivelse}</p>
            </div>
        </button>
        <button class="favorit-knap" type="button" data-favorit-toggle aria-label="Gem ${opskrift.titel}" aria-pressed="false"><i class="fa-solid fa-heart" aria-hidden="true"></i></button>
    `;
    opskriftListe.append(kort);
});

document.querySelectorAll(".opskrift-kort").forEach((kort) => {
    const kategori = opskriftKategorier[kort.dataset.opskrift];
    if (!kategori) {
        console.error(`Der mangler en kategori til opskriften "${kort.dataset.opskrift}".`);
        return;
    }

    kort.dataset.opskriftKategori = kategori;
    kort.querySelector(".diy-projektkategori").textContent = opskriftKategoriNavne[kategori];
});

const opskriftDialog = document.querySelector(".opskrift-dialog");
const opskriftTitel = opskriftDialog.querySelector("#opskrift-dialog-titel");
const opskriftBillede = opskriftDialog.querySelector(".opskrift-dialog-billede");
const ingrediensListe = opskriftDialog.querySelector(".opskrift-dialog-ingredienser");
const trinListe = opskriftDialog.querySelector(".opskrift-dialog-trin");
const lukKnap = opskriftDialog.querySelector(".opskrift-dialog-luk");

// Fyld dialogen med den valgte opskrift og åbn den.
function visOpskrift(kort) {
    const opskrift = opskrifter[kort.dataset.opskrift];

    if (!opskrift) {
        return;
    }

    opskriftTitel.textContent = opskrift.titel;
    opskriftBillede.src = opskrift.billede;
    opskriftBillede.alt = opskrift.alt;
    ingrediensListe.replaceChildren(...opskrift.ingredienser.map((ingrediens) => {
        const element = document.createElement("li");
        element.textContent = ingrediens;
        return element;
    }));
    trinListe.replaceChildren(...opskrift.trin.map((trin) => {
        const element = document.createElement("li");
        element.textContent = trin;
        return element;
    }));
    opskriftDialog.showModal();
}

document.querySelectorAll(".opskrift-kort").forEach((kort) => {
    kort.querySelector(".opskrift-kort-aabn").addEventListener("click", () => visOpskrift(kort));
});

// Luk dialogen med knappen, Escape eller klik på baggrunden.
lukKnap.addEventListener("click", () => opskriftDialog.close());
opskriftDialog.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
        event.preventDefault();
        opskriftDialog.close();
    }
});
opskriftDialog.addEventListener("click", (event) => {
    if (event.target === opskriftDialog) {
        opskriftDialog.close();
    }
});

// Søgning matcher alle indtastede ingredienser, adskilt med komma.
const opskriftSoegning = document.querySelector("#opskrift-soegning-input");
const nulstilSoegning = document.querySelector("#opskrift-soegning-nulstil");
const soegestatus = document.querySelector(".opskrift-soegning-status");
const ingenResultater = document.querySelector(".opskrift-ingen-resultater");
const kategoriLinks = [...document.querySelectorAll("[data-opskrift-filter]")];
let valgtKategori = "alle";

// Samme normalisering bruges på både søgeord og ingredienslisten.
function normaliserSoegning(tekst) {
    return tekst
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .replace(/æ/g, "ae")
        .replace(/[øö]/g, "o")
        .replace(/å/g, "a")
        .toLowerCase();
}

function filtrerOpskrifter() {
    const soegeord = opskriftSoegning.value
        .split(",")
        .map((ord) => normaliserSoegning(ord.trim()))
        .filter(Boolean);
    const kort = [...document.querySelectorAll(".opskrift-kort")];
    let antalSynlige = 0;

    kort.forEach((element) => {
        const opskrift = opskrifter[element.dataset.opskrift];
        const ingredienser = normaliserSoegning(opskrift.ingredienser.join(" "));
        const matcherKategori = valgtKategori === "alle" || element.dataset.opskriftKategori === valgtKategori;
        const matcherSoegning = soegeord.every((ord) => ingredienser.includes(ord));
        const matcher = matcherKategori && matcherSoegning;

        element.hidden = !matcher;
        if (matcher) {
            antalSynlige += 1;
        }
    });

    ingenResultater.hidden = antalSynlige !== 0;
    if (soegeord.length === 0) {
        const kategoriNavn = opskriftKategoriNavne[valgtKategori];
        soegestatus.textContent = valgtKategori === "alle"
            ? `Viser alle ${antalSynlige} opskrifter.`
            : `Viser ${antalSynlige} opskrifter i kategorien ${kategoriNavn}.`;
    } else if (antalSynlige === 0) {
        soegestatus.textContent = "Ingen opskrifter matcher den valgte kategori og dine ingredienser.";
    } else {
        soegestatus.textContent = `${antalSynlige} ${antalSynlige === 1 ? "opskrift matcher" : "opskrifter matcher"} den valgte kategori og dine ingredienser.`;
    }
}

kategoriLinks.forEach((link) => {
    link.addEventListener("click", () => {
        valgtKategori = link.dataset.opskriftFilter;
        kategoriLinks.forEach((kategoriLink) => {
            if (kategoriLink === link) {
                kategoriLink.setAttribute("aria-current", "true");
            } else {
                kategoriLink.removeAttribute("aria-current");
            }
        });
        filtrerOpskrifter();
    });
});

opskriftSoegning.addEventListener("input", filtrerOpskrifter);
nulstilSoegning.addEventListener("click", () => {
    opskriftSoegning.value = "";
    filtrerOpskrifter();
    opskriftSoegning.focus();
});

filtrerOpskrifter();

// Åbn automatisk en opskrift, hvis siden blev åbnet med et kortlink.
const opskriftFraHash = document.getElementById(window.location.hash.slice(1));
if (opskriftFraHash && opskriftFraHash.classList.contains("opskrift-kort")) {
    valgtKategori = "alle";
    kategoriLinks.forEach((link) => {
        if (link.dataset.opskriftFilter === "alle") {
            link.setAttribute("aria-current", "true");
        } else {
            link.removeAttribute("aria-current");
        }
    });
    filtrerOpskrifter();
    visOpskrift(opskriftFraHash);
}
