import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Prism from "prismjs";
import "prismjs/themes/prism-tomorrow.css";

function Session2ReactNative() {
  const sessionTitle = "Configuración del Entorno de Desarrollo para React Native";
  const pdfName = "sesion2.pdf";

  useEffect(() => {
    Prism.highlightAll(); // Resaltar el código con Prism
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
          <li>Configurar correctamente el entorno de desarrollo para React Native.</li>
          <li>Probar aplicaciones en dispositivos Android e iOS.</li>
          <li>Crear y ejecutar aplicaciones básicas con Expo.</li>
        </ul>

        <h3 className="text-xl font-semibold mt-6">1. Instalación de Node.js</h3>
        <ol className="list-decimal list-inside mt-2">
          <li>Descarga Node.js desde <a href="https://nodejs.org" className="text-blue-500 underline">nodejs.org</a>. Selecciona la versión LTS.</li>
          <li>Verifica la instalación ejecutando los comandos:</li>
        </ol>
        <pre className="bg-gray-900 text-green-300 p-4 rounded-lg mt-4 overflow-auto">
          <code className="language-bash">
            {`node -v
npm -v`}
          </code>
        </pre>

        <h3 className="text-xl font-semibold mt-6">2. Instalación de Expo</h3>
        <ol className="list-decimal list-inside mt-2">
          <li>Instala Expo ejecutando:</li>
        </ol>
        <pre className="bg-gray-900 text-green-300 p-4 rounded-lg mt-4 overflow-auto">
          <code className="language-bash">
            {`npm install --global expo`}
          </code>
        </pre>
        <ol className="list-decimal list-inside mt-2" start="2">
          <li>Verifica la instalación ejecutando:</li>
        </ol>
        <pre className="bg-gray-900 text-green-300 p-4 rounded-lg mt-4 overflow-auto">
          <code className="language-bash">
            {`expo --version`}
          </code>
        </pre>

        <h3 className="text-xl font-semibold mt-6">3. Crear un Proyecto con Expo</h3>
        <ol className="list-decimal list-inside mt-2">
          <li>Crea un proyecto nuevo ejecutando:</li>
        </ol>
        <pre className="bg-gray-900 text-green-300 p-4 rounded-lg mt-4 overflow-auto">
          <code className="language-bash">
            {`npx create-expo-app MiPrimeraApp`}
          </code>
        </pre>
        <ol className="list-decimal list-inside mt-2" start="2">
          <li>Navega al directorio del proyecto:</li>
        </ol>
        <pre className="bg-gray-900 text-green-300 p-4 rounded-lg mt-4 overflow-auto">
          <code className="language-bash">
            {`cd MiPrimeraApp`}
          </code>
        </pre>
        <ol className="list-decimal list-inside mt-2" start="3">
          <li>Inicia el servidor de desarrollo:</li>
        </ol>
        <pre className="bg-gray-900 text-green-300 p-4 rounded-lg mt-4 overflow-auto">
          <code className="language-bash">
            {`npm start`}
          </code>
        </pre>

        <h3 className="text-xl font-semibold mt-6">4. Configuración de Visual Studio Code</h3>
        <ol className="list-decimal list-inside mt-2">
          <li>Descarga Visual Studio Code desde <a href="https://code.visualstudio.com" className="text-blue-500 underline">code.visualstudio.com</a>.</li>
          <li>Instala las extensiones recomendadas:
            <ul className="list-disc list-inside ml-4">
              <li>ES7+ React/Redux/React-Native snippets</li>
              <li>Prettier</li>
              <li>React Native Tools</li>
            </ul>
          </li>
        </ol>

        <h3 className="text-xl font-semibold mt-6">Ejemplo Práctico</h3>
        <pre className="bg-gray-900 text-green-300 p-4 rounded-lg mt-4 overflow-auto">
          <code className="language-javascript">
            {`import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const App = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>¡Hola, React Native!</Text>
      <Text style={styles.subtitle}>Esta es tu primera app personalizada.</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#e0f7fa',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#00796b',
  },
  subtitle: {
    fontSize: 18,
    color: '#004d40',
    marginTop: 10,
  },
});

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

export default Session2ReactNative;
