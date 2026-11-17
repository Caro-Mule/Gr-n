// Profilmenu med tydelig status for funktioner, der endnu ikke er aktiveret.
// Dialogen bygges her, så top- og bundmenu kan genbruge samme profilvindue.
const profilDialog = document.createElement("dialog");
profilDialog.className = "opskrift-dialog medlemskab-dialog";
profilDialog.setAttribute("aria-labelledby", "profil-dialog-titel");
profilDialog.innerHTML = `
    <button class="opskrift-dialog-luk" type="button" aria-label="Luk profil">×</button>
    <div class="profil-dialog-indhold">
        <p class="diy-label">GRØN-profil</p>
        <h2 id="profil-dialog-titel">Velkommen</h2>
        <p class="profil-dialog-intro">Vælg, om du vil oprette en bruger eller logge ind. Begge funktioner er endnu ikke aktive.</p>
        <div class="profil-muligheder">
            <section class="profil-mulighed" aria-labelledby="profil-opret-titel">
                <h3 id="profil-opret-titel">Opret bruger</h3>
                <p>Opret en gratis profil hos GRØN.</p>
                <span class="profil-ikke-aktiv">Ikke aktiv endnu</span>
            </section>
            <section class="profil-mulighed" aria-labelledby="profil-login-titel">
                <h3 id="profil-login-titel">Log ind</h3>
                <p>Log ind på din GRØN-profil.</p>
                <span class="profil-ikke-aktiv">Ikke aktiv endnu</span>
            </section>
        </div>
    </div>
`;
document.body.append(profilDialog);

// Åbn vinduet fra profilknappen i både topmenu og bundmenu.
document.querySelectorAll("[data-profil-aabn]").forEach((button) => {
    button.addEventListener("click", () => profilDialog.showModal());
});

profilDialog.querySelector(".opskrift-dialog-luk").addEventListener("click", () => {
    profilDialog.close();
});
