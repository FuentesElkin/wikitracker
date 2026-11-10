(() => {
  
  chrome.storage.onChanged.addListener((almacenamiento, area) => {

    if (area === 'local' && almacenamiento['secciones']) {

      chrome.storage.local.get(["secciones"], function (result) {
        const seccionesTexto = result.secciones || "Aún no hay secciones registradas.";
        const secciones = seccionesTexto.split(", ").map(sec => `<li>${sec}</li>`).join("");

        document.getElementById("secciones").innerHTML = secciones;
      });

    }

  });

})();