import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Prism from "prismjs";
import "prismjs/themes/prism-tomorrow.css";

function Session3() {
  const sessionTitle = "Componentes y Propiedades Básicas en React Native";
  const pdfName = "sesion3.pdf";

  useEffect(() => {
    Prism.highlightAll(); // Resaltar código con Prism
  }, []);

  return (
    <div className="container mx-auto py-8 px-4 lg:px-0">
      <header className="flex flex-col md:flex-row justify-between items-center py-4 space-y-4 md:space-y-0">
        <h1 className="text-3xl font-bold text-center md:text-left">{sessionTitle}</h1>
        <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
          <Link
            to="/"
            className="py-2 px-4 bg-blue-500 text-white rounded-lg shadow-lg text-center"
          >
            Volver al Índice
          </Link>
          <a
            href={`/sessions/${pdfName}`}
            download
            className="py-2 px-4 bg-purple-600 text-white rounded-lg shadow-lg text-center"
          >
            Descargar PDF
          </a>
        </div>
      </header>

      <section className="mt-6">
        <h2 className="text-2xl font-semibold">Objetivo de la Sesión</h2>
        <ul className="list-disc list-inside mt-2">
          <li>Aplicar el concepto de componentes mediante el desarrollo del carnet estudiantil digital.</li>
          <li>Comprender la diferencia entre componentes funcionales y de clase.</li>
          <li>Personalizar componentes mediante props.</li>
          <li>Desarrollar el carnet con ambas estructuras de componentes.</li>
        </ul>

        <h3 className="text-xl font-semibold mt-6">1. Introducción a los Componentes</h3>
        <p className="mt-2">
          Un componente en React Native es una parte reutilizable de la interfaz de usuario. En este proyecto,
          el carnet de estudiante será un componente que contendrá datos como el nombre, identificación y foto del estudiante.
        </p>

        <h3 className="text-xl font-semibold mt-6">2. Componentes Funcionales</h3>
        <p className="mt-2">
          Los componentes funcionales son más concisos y modernos. Se definen como funciones de JavaScript y pueden manejar estado usando <code>useState</code>.
        </p>
        <pre className="bg-gray-900 text-green-300 p-4 rounded-lg mt-4 overflow-auto">
          <code className="language-javascript">
            {`const CarnetEstudianteFuncional = ({ nombre, identificacion, carrera, foto }) => {
  return (
    <div className="card">
      <img src={foto} alt="Foto del estudiante" className="imagen" />
      <h2 className="nombre">{nombre}</h2>
      <p>ID: {identificacion}</p>
      <p>Carrera: {carrera}</p>
    </div>
  );
};`}
          </code>
        </pre>

        <h3 className="text-xl font-semibold mt-6">3. Componentes de Clase</h3>
        <p className="mt-2">
          Los componentes de clase son más antiguos y usan el método <code>render()</code> para devolver la interfaz de usuario.
          Las props se acceden con <code>this.props</code>.
        </p>
        <pre className="bg-gray-900 text-green-300 p-4 rounded-lg mt-4 overflow-auto">
          <code className="language-javascript">
            {`class CarnetEstudianteClase extends React.Component {
  render() {
    return (
      <div className="card">
        <img src={this.props.foto} alt="Foto del estudiante" className="imagen" />
        <h2 className="nombre">{this.props.nombre}</h2>
        <p>ID: {this.props.identificacion}</p>
        <p>Carrera: {this.props.carrera}</p>
      </div>
    );
  }
}`}
          </code>
        </pre>

        <h3 className="text-xl font-semibold mt-6">4. Comparación</h3>
        <table className="table-auto border-collapse border border-gray-300 mt-4 w-full">
          <thead>
            <tr className="bg-gray-700 text-white text-lg">
              <th className="border border-gray-300 px-4 py-2">Característica</th>
              <th className="border border-gray-300 px-4 py-2">Funcionales</th>
              <th className="border border-gray-300 px-4 py-2">De Clase</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-gray-300 px-4 py-2">Sintaxis</td>
              <td className="border border-gray-300 px-4 py-2">Simple y moderna</td>
              <td className="border border-gray-300 px-4 py-2">Verbosa y estructurada</td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-4 py-2">Estado</td>
              <td className="border border-gray-300 px-4 py-2">Con <code>useState</code></td>
              <td className="border border-gray-300 px-4 py-2">Con <code>this.state</code></td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-4 py-2">Rendimiento</td>
              <td className="border border-gray-300 px-4 py-2">Más eficiente</td>
              <td className="border border-gray-300 px-4 py-2">Menos eficiente</td>
            </tr>
          </tbody>
        </table>
      </section>

      <div className="mt-8 text-center">
        <p className="mb-4 text-lg font-medium">
          ¿Quieres guardar esta lección para más tarde? Descarga el PDF aquí:
        </p>
        <a
          href={`/sessions/${pdfName}`}
          download
          className="py-2 px-4 bg-purple-600 text-white rounded-lg shadow-lg"
        >
          Descargar PDF
        </a>
      </div>
    </div>
  );
}

export default Session3;
