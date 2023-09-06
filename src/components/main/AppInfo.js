import React from "react";

export default function AppInfo() {
  return (
    <div id="about" className="text-black flex flex-col items-center pt-32 m-8">
      <h2 className="mb-4 p-2 text-3xl font-extrabold text-gray-900 text-transparent bg-clip-text bg-gradient-to-r to-sky-400 from-emerald-600">
        Recursos y Tecnologías Utilizadas en Este Sitio Web
      </h2>
      <div className="container grid md:grid-cols-3 grid-cols-1 gap-4">
        <div className="rounded-2xl border-2 p-4">
          <h3 className="font-bold text-2xl my-2">Estilo y maquetacion:</h3>
          <p>
            Este sitio Web esta extructurado y diseñado con HTML y CSS3,
            manipulado con clases predefinidas de Tailwind, un popular framework
            de diseño de código abierto.
          </p>
          <h4 className="text-md font-bold mt-8">Tailwind:</h4>
          <p>
            Es un framework de diseño de código abierto que se utiliza para
            crear interfaces de usuario (UI) en aplicaciones web de manera
            eficiente y rápida.
          </p>
        </div>
        <div className="rounded-2xl border-2 p-4">
          <h3 className="font-bold text-2xl my-2">Lenguaje y framework:</h3>
          <h4 className="text-md font-bold">Javascript:</h4>
          <p>
            Es un poderoso lenguaje de programación ampliamente utilizado en el
            desarrollo web para crear aplicaciones interactivas y dinámicas en
            el navegador.
          </p>
          <h4 className="text-md font-bold">Next.js:</h4>
          <p>
            Es un popular framework de desarrollo web de código abierto para
            React, una de las bibliotecas JavaScript más utilizadas para crear
            interfaces de usuario interactivas.
          </p>
        </div>
        <div className="rounded-2xl border-2 p-4">
          <h3 className="font-bold text-2xl my-2">Bibliotecas:</h3>
          <h4 className="text-md font-bold">Axios:</h4>
          <p>
            Es una biblioteca JavaScript de código abierto que se utiliza para
            realizar solicitudes HTTP desde el lado del cliente, generalmente en
            aplicaciones web o móviles.
          </p>
          <h4 className="text-md font-bold">Redux:</h4>{" "}
          <p>
            Es una biblioteca de administración de estado de código abierto para
            aplicaciones JavaScript, especialmente aquellas construidas con
            bibliotecas o frameworks como React o Angular.
          </p>
        </div>
        <div className="md:col-start-2 md:col-span-2 col-span-1 rounded-2xl border-2 p-4">
          <h3 className="font-bold text-2xl my-2 text-center">Herramientas:</h3>
          <h4 className="text-md font-bold">ESLint:</h4>
          <p>
            Es una herramienta ampliamente utilizada en el desarrollo de
            JavaScript y ayuda a los desarrolladores a detectar y corregir
            errores de estilo, convenciones y problemas en su código JavaScript.
          </p>
          <h4 className="text-md font-bold"> VSCode:</h4>
          <p>
            Visual Studio Code, es un editor de código fuente gratuito y de
            código abierto desarrollado por Microsoft.
          </p>
          <h4 className="text-md font-bold"> Vercel: </h4>
          <p>
            Es una plataforma en la nube para implementar aplicaciones web y
            sitios web de manera rápida y sencilla.
          </p>
        </div>
      </div>
    </div>
  );
}