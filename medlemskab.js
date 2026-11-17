// Medlemsformular med tydelig besked om, at oprettelse endnu ikke er aktiveret.
// Formularen gemmer eller sender ikke de indtastede oplysninger.
const medlemskabDialog = document.querySelector(".medlemskab-dialog");

if (medlemskabDialog instanceof HTMLDialogElement) {
    const medlemskabForm = medlemskabDialog.querySelector(".medlemskab-form");
    const status = medlemskabDialog.querySelector(".medlemskab-form-status");
    // Knyt begge "Bliv medlem"-knapper til samme dialog.
    document.querySelectorAll("[data-medlemskab-aabn]").forEach((knap) => {
        knap.addEventListener("click", () => {
            medlemskabDialog.showModal();
        });
    });

    medlemskabDialog.querySelector("[data-medlemskab-luk]").addEventListener("click", () => {
        medlemskabDialog.close();
    });

    medlemskabForm.addEventListener("submit", (event) => {
        event.preventDefault();
        status.textContent = "Profiloprettelse er endnu ikke aktiveret. Oplysningerne er ikke sendt eller gemt.";
        medlemskabForm.reset();
    });
}
