import React from 'react';
// Importa React para usar la sintaxis JSX y las funciones de React en el archivo.

const VoteResults = ({ votes }) => {
    const voteCount = votes.reduce((acc, vote) => {  
        if (!acc[vote.area]) {
            acc[vote.area] = { count: 0, employees: [] };
        }
        acc[vote.area].count += 1;
        acc[vote.area].employees.push(vote.name);
        return acc;
    }, {});
    // Define el componente `VoteResults`, que recibe `votes` como prop.
    // Usa `reduce` para contar los votos por área:
    // - `acc` es el acumulador que almacena el conteo de votos y los nombres por área.
    // - `vote` es el voto actual que se está procesando.
    // Si el área del voto no existe en `acc`, crea un objeto con `count` (conteo de votos) y `employees` (nombres).
    // Incrementa el conteo y agrega el nombre del empleado que votó en la lista `employees`.

    const sortedAreas = Object.keys(voteCount).sort();
    // Obtiene las áreas ordenadas alfabéticamente para mostrarlas en orden en el resultado.
    // `Object.keys(voteCount)` obtiene un array con las áreas, y `sort()` las ordena alfabéticamente.

    return (
        <div>
            <h2>Resultados de la Votación</h2>
            <ul>
                {sortedAreas.map((area) => (
                    <li key={area}>
                        <strong>{area}:</strong> {voteCount[area].count} votos
                        <ul>
                            {voteCount[area].employees.map((name, index) => (
                                <li key={index}>{name}</li>
                            ))}
                        </ul>
                    </li>
                ))}
            </ul>
        </div>
    );
    // Renderiza los resultados de la votación en el navegador:
    // - Muestra un encabezado `<h2>` con el texto "Resultados de la Votación".
    // - Para cada área (usando `sortedAreas.map`), renderiza:
    //   - Un elemento `<li>` con el nombre del área en negrita (`<strong>`) y el conteo de votos.
    //   - Una lista `<ul>` anidada que contiene los nombres de los empleados que votaron en esa área.
    // Cada área y cada empleado tiene un `key` único para que React pueda gestionar correctamente la lista.
};

export default VoteResults;
// Exporta el componente `VoteResults` como la exportación predeterminada de este archivo,
// permitiendo que otros archivos lo importen y utilicen.
