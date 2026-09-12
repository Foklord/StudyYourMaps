const przycisk = document.getElementById("przycisk");
const tekst = document.getElementById("tekst");

przycisk.addEventListener("click", () => {
    tekst.textContent = "Kliknąłeś!";
});