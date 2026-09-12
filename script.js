const przycisk = document.getElementById("przycisk");
const tekst = document.getElementById("tekst");

przycisk.addEventListener("click", () => {
    tekst.textContent = "Kliknąłeś!";
});
if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register("./service-worker.js");
}