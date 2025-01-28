import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Prism from "prismjs";
import "prismjs/themes/prism-tomorrow.css";

function Session4() {
  const sessionTitle = "Manejo de Estados y Estilos en React Native con Tailwind CSS";
  const pdfName = "sesion4.pdf";

  useEffect(() => {
    Prism.highlightAll(); // Resalta el código con Prism
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
          <li>Entender y aplicar estados (<code>state</code>) en React Native.</li>
          <li>Estilizar componentes de manera eficiente utilizando Tailwind CSS.</li>
        </ul>

        <h3 className="text-xl font-semibold mt-6">1. ¿Qué es el Estado (state)?</h3>
        <p className="mt-2">
          El estado es una forma de almacenar y actualizar datos en un componente. Cambios en el estado provocan un
          re-renderizado del componente, reflejando los nuevos valores en la interfaz de usuario.
        </p>
        <pre className="bg-gray-900 text-green-300 p-4 rounded-lg mt-4 overflow-auto">
          <code className="language-javascript">
            {`const [nombre, setNombre] = useState('Juan Pérez');`}
          </code>
        </pre>
        <p className="mt-2">
          Aquí, <code>nombre</code> es la variable de estado, <code>setNombre</code> es la función que la actualiza,
          y <code>'Juan Pérez'</code> es el valor inicial.
        </p>

        <h3 className="text-xl font-semibold mt-6">2. ¿Qué es Tailwind CSS?</h3>
        <p className="mt-2">
          Tailwind CSS es un framework de utilidades que permite aplicar estilos mediante clases predefinidas.
          En React Native, utilizamos <strong>nativewind</strong> para estilos similares.
        </p>
        <pre className="bg-gray-900 text-green-300 p-4 rounded-lg mt-4 overflow-auto">
          <code className="language-javascript">
            {`// Sin Tailwind
const styles = StyleSheet.create({
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'blue',
  },
});
<Text style={styles.titulo}>Hola Mundo</Text>

// Con Tailwind
<Text className="text-2xl font-bold text-blue-500">Hola Mundo</Text>`}
          </code>
        </pre>
        <p className="mt-2">
          La clase <code>text-2xl</code> define el tamaño del texto, <code>font-bold</code> lo pone en negritas,
          y <code>text-blue-500</code> establece el color.
        </p>

        <h3 className="text-xl font-semibold mt-6">3. Ejemplo: Carnet Estudiantil Digital</h3>
        <p className="mt-2">
          Usaremos <code>useState</code> para manejar datos del estudiante y <code>nativewind</code> para los estilos.
        </p>
        <pre className="bg-gray-900 text-green-300 p-4 rounded-lg mt-4 overflow-auto">
          <code className="language-javascript">
            {`import React, { useState } from 'react';
import { View, Text, TextInput, Image, Button } from 'react-native';

const CarnetEstudiante = () => {
  const [nombre, setNombre] = useState('Juan Pérez');
  const [carrera, setCarrera] = useState('Ingeniería de Software');

  return (
    <View className="p-5 bg-white rounded-lg shadow-lg w-80">
      <Image
        source={{ uri: 'https://randomuser.me/api/portraits/men/50.jpg' }}
        className="w-32 h-32 rounded-full mx-auto"
      />
      <Text className="text-xl font-bold text-center mt-3">{nombre}</Text>
      <Text className="text-gray-600 text-center mb-4">Carrera: {carrera}</Text>

      {/* Campos editables */}
      <TextInput
        className="border border-gray-300 rounded p-2 my-2"
        placeholder="Actualizar Nombre"
        value={nombre}
        onChangeText={(text) => setNombre(text)}
      />
      <TextInput
        className="border border-gray-300 rounded p-2 my-2"
        placeholder="Actualizar Carrera"
        value={carrera}
        onChangeText={(text) => setCarrera(text)}
      />
    </View>
  );
};

export default CarnetEstudiante;`}
          </code>
        </pre>

        <h3 className="text-xl font-semibold mt-6">4. Actividad Práctica</h3>
        <p className="mt-2">
          Cada estudiante debe:
        </p>
        <ul className="list-disc list-inside mt-2">
          <li>Agregar nuevos campos al carnet: Universidad, correo electrónico, etc.</li>
          <li>Modificar los colores del fondo utilizando Tailwind CSS.</li>
        </ul>
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

export default Session4;
