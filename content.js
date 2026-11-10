(() => {
  let seccionesVisibles = [];

  function estaVisible(elemento) {
      const rect = elemento.getBoundingClientRect();

      return (
          rect.top >= 0 &&
          rect.bottom <= window.innerHeight
      );
  }
  
  let obtenerSecciones = () => {
      const secciones = document.querySelectorAll("h2");
      secciones.forEach((seccion, index) => {
          if (estaVisible(seccion) && !seccionesVisibles.includes(seccion)) {
              console.log(`Sección ${index + 1} visible:`, seccion.textContent);
              
              seccionesVisibles.push(seccion);
              
              let seccionesText = seccionesVisibles.map(sec => sec.textContent).join(", ");
              chrome.storage.local.set({ "secciones": seccionesText });
          }
      });
  };

  console.log("WikiTracker está activo");
  console.log("Título:", document.title);
  console.log("Dirección:", location.href);

  const titulo = document.querySelector("h1");
  console.log("Artículo:", titulo?.textContent ?? "Sin título");

  let clics = 0;
  document.addEventListener("click", function () {
      clics = clics + 1;
      console.log("Clics registrados:", clics);
  });

   window.addEventListener("scrollend", function() {
     obtenerSecciones();
  });

})();