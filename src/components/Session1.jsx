import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Prism from "prismjs";
import "prismjs/themes/prism-tomorrow.css";
import "prismjs/components/prism-javascript";

function Session1ReactNative() {
  const sessionTitle = "Introducción a las Aplicaciones Móviles y React Native";
  const pdfName = "sesion1.pdf"; // Nombre del archivo PDF

  useEffect(() => {
    Prism.highlightAll(); // Aplica Prism a todos los bloques de código
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
        <h2 className="text-2xl font-semibold">Objetivo general</h2>
        <p className="mt-2">
          Introducir a los estudiantes al desarrollo de aplicaciones móviles multiplataforma
          utilizando React Native. Al finalizar, los estudiantes comprenderán los conceptos básicos de aplicaciones móviles,
          las características principales de React Native y tendrán su entorno configurado para el desarrollo inicial.
        </p>

        <h3 className="text-xl font-semibold mt-6">¿Qué es React Native?</h3>
        <p className="mt-2">
          React Native es un framework de desarrollo creado por Meta (antes Facebook) que permite desarrollar aplicaciones móviles
          utilizando JavaScript y React. Las aplicaciones tienen una apariencia y rendimiento similar a las nativas, con la ventaja
          de usar una sola base de código para Android e iOS.
        </p>

        <h3 className="text-xl font-semibold mt-6">Características principales</h3>
        <ul className="list-disc list-inside mt-2">
          <li><strong>Multiplataforma:</strong> Una sola base de código para Android e iOS.</li>
          <li><strong>Uso de componentes nativos:</strong> Las aplicaciones tienen apariencia y rendimiento similar a las nativas.</li>
          <li><strong>Hot Reloading:</strong> Permite visualizar cambios en tiempo real sin reiniciar la aplicación.</li>
          <li><strong>Compatibilidad con bibliotecas nativas:</strong> Puedes integrar código nativo de Android (Java/Kotlin) e iOS (Swift).</li>
        </ul>

        <h3 className="text-xl font-semibold mt-6">Comparación con desarrollo nativo</h3>
        <table className="table-auto border-collapse border border-gray-300 mt-4 w-full">
          <thead>
            <tr className="bg-gray-700 text-white text-lg">
              <th className="border border-gray-300 px-4 py-2">Aspecto</th>
              <th className="border border-gray-300 px-4 py-2">React Native</th>
              <th className="border border-gray-300 px-4 py-2">Desarrollo Nativo (Kotlin/Swift)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-gray-300 px-4 py-2">Lenguaje</td>
              <td className="border border-gray-300 px-4 py-2">JavaScript</td>
              <td className="border border-gray-300 px-4 py-2">Kotlin (Android), Swift (iOS)</td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-4 py-2">Código multiplataforma</td>
              <td className="border border-gray-300 px-4 py-2">Sí</td>
              <td className="border border-gray-300 px-4 py-2">No</td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-4 py-2">Rendimiento</td>
              <td className="border border-gray-300 px-4 py-2">Bueno</td>
              <td className="border border-gray-300 px-4 py-2">Óptimo</td>
            </tr>
          </tbody>
        </table>

        <h3 className="text-xl font-semibold mt-6">Ejemplo práctico: Crear un componente básico</h3>
        <pre className="bg-gray-900 text-green-300 p-4 rounded-lg mt-4 overflow-auto">
          <code className="language-javascript">
            {`// Importar módulos básicos de React Native
import React from 'react';
import { Text, View } from 'react-native';

// Componente principal
const App = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 20, color: 'blue' }}>
        ¡Hola, React Native!
      </Text>
    </View>
  );
};

export default App;`}
          </code>
        </pre>
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

export default Session1ReactNative;
