// Gemmer favoritter lokalt og synkroniserer hjerteknapper og favoritsiden.
// Favoritdata deles mellem sider via browserens lokale lager.
const FAVORITTER_KEY = "gron-favoritter";
const favoritStatus = document.querySelector(".favorit-status");
const favoritListe = document.querySelector("#favorit-liste");

// Hvert gemt element har id, type, titel, billede og beskrivelse.
// Vis fejl tydeligt, hvis browserlageret ikke kan læses eller skrives.
function visFavoritFejl(error) {
    console.error("Favoritterne kunne ikke gemmes eller indlæses.", error);
    if (favoritStatus) {
        favoritStatus.textContent = "Favoritterne kunne ikke indlæses. Prøv at genindlæse siden.";
    }
}

// Indlæs og kontrollér gemte data, før de bruges i sidens markup.
function hentFavoritter() {
    try {
        const gemteFavoritter = JSON.parse(localStorage.getItem(FAVORITTER_KEY) || "[]");
        return Array.isArray(gemteFavoritter)
            ? gemteFavoritter.filter((favorit) =>
                favorit &&
                typeof favorit.id === "string" &&
                ((favorit.type === "opskrift" && favorit.id.startsWith("opskrift-")) ||
                    (favorit.type === "diy" && favorit.id.startsWith("diy-"))) &&
                /^[a-z0-9-]+$/.test(favorit.id) &&
                typeof favorit.titel === "string" &&
                typeof favorit.billede === "string" &&
                typeof favorit.beskrivelse === "string")
            : [];
    } catch (error) {
        visFavoritFejl(error);
        return [];
    }
}

// Gem hele favoritlisten lokalt og rapportér, om skrivningen lykkedes.
function gemFavoritter(favoritter) {
    try {
        localStorage.setItem(FAVORITTER_KEY, JSON.stringify(favoritter));
        return true;
    } catch (error) {
        visFavoritFejl(error);
        return false;
    }
}

// Synkronisér hjerteknappernes tilstand og tilgængelige labels.
function opdaterFavoritKnapper() {
    const favoritIds = new Set(hentFavoritter().map((favorit) => favorit.id));
    document.querySelectorAll("[data-favorit-toggle]").forEach((knap) => {
        const kort = knap.closest("[data-favorit-id]");
        if (!kort) {
            return;
        }

        const erGemt = favoritIds.has(kort.dataset.favoritId);
        knap.setAttribute("aria-pressed", String(erGemt));
        const label = `${erGemt ? "Fjern" : "Gem"} ${kort.querySelector("h3").textContent} ${erGemt ? "fra" : "i"} favoritter`;
        knap.setAttribute("aria-label", label);
        knap.replaceChildren();
        const ikon = document.createElement("i");
        ikon.className = "fa-solid fa-heart";
        ikon.setAttribute("aria-hidden", "true");
        knap.append(ikon);
    });
}

// Udtræk de nødvendige oplysninger fra et opskrift- eller DIY-kort.
function favoritFraKort(kort) {
    const titelElement = kort.querySelector("h3");
    const beskrivelseElement = kort.querySelector(".diy-projektinfo p");
    const titel = titelElement.textContent.trim();
    const billede = kort.querySelector("img").getAttribute("src");
    const beskrivelse = beskrivelseElement.textContent.trim();

    return {
        id: kort.dataset.favoritId,
        type: kort.dataset.favoritType,
        titel,
        billede,
        beskrivelse
    };
}

// Tegn favoritsidens kort igen ud fra browserens gemte liste.
function opdaterFavoritListe() {
    if (!favoritListe) {
        return;
    }

    const favoritter = hentFavoritter();
    favoritListe.replaceChildren();

    if (favoritter.length === 0) {
        const tomBesked = document.createElement("p");
        tomBesked.className = "favorit-ingen";
        tomBesked.textContent = "Du har ikke gemt nogen favoritter endnu. Brug hjerterne på opskrifter og DIY-projekter for at gemme dem her.";
        favoritListe.append(tomBesked);
        return;
    }

    favoritter.forEach((favorit) => {
        const kort = document.createElement("article");
        kort.className = "diy-projektkort favorit-kort";

        const billede = document.createElement("img");
        billede.src = favorit.billede;
        billede.alt = "";

        const info = document.createElement("div");
        info.className = "diy-projektinfo";

        const kategori = document.createElement("span");
        kategori.className = "diy-projektkategori";
        kategori.textContent = favorit.type === "opskrift" ? "Opskrift" : "Genbrug & DIY";

        const titel = document.createElement("h3");
        titel.textContent = favorit.titel;

        const beskrivelse = document.createElement("p");
        beskrivelse.textContent = favorit.beskrivelse;

        const handlinger = document.createElement("div");
        handlinger.className = "favorit-handlinger";

        const seLink = document.createElement("a");
        seLink.className = "favorit-se";
        const kortId = favorit.type === "opskrift"
            ? favorit.id
            : `projekt-${favorit.id.slice("diy-".length)}`;
        seLink.href = `${favorit.type === "opskrift" ? "opskrifter.html" : "genbrug-diy.html"}#${kortId}`;
        seLink.textContent = favorit.type === "opskrift" ? "Se opskrift" : "Se projekt";

        const fjernKnap = document.createElement("button");
        fjernKnap.className = "favorit-fjern";
        fjernKnap.type = "button";
        fjernKnap.dataset.favoritFjern = favorit.id;
        fjernKnap.textContent = "Fjern";
        fjernKnap.setAttribute("aria-label", `Fjern ${favorit.titel} fra favoritter`);

        handlinger.append(seLink, fjernKnap);
        info.append(kategori, titel, beskrivelse, handlinger);
        kort.append(billede, info);
        favoritListe.append(kort);
    });
}

// Håndtér gem/fjern handlinger centralt for både faste og dynamiske kort.
document.addEventListener("click", (event) => {
    const knap = event.target.closest("[data-favorit-toggle]");
    if (knap) {
        event.preventDefault();
        event.stopPropagation();

        const kort = knap.closest("[data-favorit-id]");
        if (!kort) {
            return;
        }

        const favoritter = hentFavoritter();
        const eksisterendeIndex = favoritter.findIndex((favorit) => favorit.id === kort.dataset.favoritId);
        const opdateredeFavoritter = eksisterendeIndex === -1
            ? [...favoritter, favoritFraKort(kort)]
            : favoritter.filter((favorit) => favorit.id !== kort.dataset.favoritId);

        if (gemFavoritter(opdateredeFavoritter)) {
            opdaterFavoritKnapper();
            opdaterFavoritListe();
            if (favoritStatus) {
                favoritStatus.textContent = eksisterendeIndex === -1
                    ? `${kort.querySelector("h3").textContent} er gemt i dine favoritter.`
                    : `${kort.querySelector("h3").textContent} er fjernet fra dine favoritter.`;
            }
        }
        return;
    }

    const fjernKnap = event.target.closest("[data-favorit-fjern]");
    if (!fjernKnap) {
        return;
    }

    const opdateredeFavoritter = hentFavoritter().filter((favorit) => favorit.id !== fjernKnap.dataset.favoritFjern);
    if (gemFavoritter(opdateredeFavoritter)) {
        opdaterFavoritKnapper();
        opdaterFavoritListe();
        if (favoritStatus) {
            favoritStatus.textContent = "Favoritten er fjernet.";
        }
    }
});

document.addEventListener("keydown", (event) => {
    if (event.target.matches("[data-favorit-toggle]") && (event.key === "Enter" || event.key === " ")) {
        event.stopPropagation();
    }
});

// Opdatér åbne faner, når favoritter ændres i en anden fane.
window.addEventListener("storage", (event) => {
    if (event.key === FAVORITTER_KEY) {
        opdaterFavoritKnapper();
        opdaterFavoritListe();
    }
});

opdaterFavoritKnapper();
opdaterFavoritListe();
