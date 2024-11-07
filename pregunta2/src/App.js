import React from 'react';
// Importa React para usar la sintaxis JSX y las funciones de React en el archivo.

import VoteResults from './VoteResults';
// Importa el componente `VoteResults` desde el archivo `VoteResults.js` para usarlo en este componente.

const votes = [
    { name: "Juan", area: "Ventas" },
    { name: "Ana", area: "Marketing" },
    { name: "Luis", area: "Desarrollo" },
    { name: "Sofía", area: "Desarrollo" },
    { name: "Carlos", area: "RRHH" },
    { name: "María", area: "Ventas" },
    { name: "Pedro", area: "Marketing" },
    { name: "Lucía", area: "Desarrollo" },
    { name: "Miguel", area: "RRHH" },
    { name: "Carla", area: "Ventas" }
];
// Declara un array de objetos llamado `votes`, donde cada objeto representa un voto. 
// Cada voto tiene un nombre (`name`) y un área (`area`).

const App = () => {
    return (
        <div>
            <h1>Portal de Votaciones</h1>
            <VoteResults votes={votes} />
        </div>
    );
};
// Define el componente `App`, que es el componente principal de la aplicación. 
// Dentro de este componente:
// - Renderiza un encabezado `<h1>` con el título "Portal de Votaciones".
// - Renderiza el componente `VoteResults` y le pasa el array `votes` como una prop llamada `votes`.

export default App;
