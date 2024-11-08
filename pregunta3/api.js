// Resolución api simulacro
import path from 'path';
import { promises as fs } from 'fs';

export async function POST(request) {
    const { area, empleado } = await request.JSON(); // Extrae el area y el empleado del Json del request
    const filePath = path.join(process.cwd(), 'src/data/votaciones.json'); // Busca la ruta de los votos
    const fileData = await fs.readFile(filePath, 'utf-8'); // Lee el json con los votos
    const votos = JSON.parse(fileData); // Parsea los votos individuales desde el json de votos

    const voto_existente = votos.find(empleado => voto_existente.empleado === empleado); // Verifica si el empleado ya votó

    if (voto_existente) {
        return new Response(JSON.stringify({ message: 'Este empleado ya ha votado' }), { status: 400 }); // En caso de que exista no hace nada.
    }

    const newVoto = { // Si existe se crea un nuevo voto con los datos proporcionados en el request
        empleado,
        area
    };

    votos.push(newVoto); // Agrega el voto nuevo a la lista de votos

    await fs.readFile(filePath, JSON.stringify(votos)); // Sobreescribe el json con los votos

    return new Response(JSON.stringify({ message: 'Voto registrado exitosamente' }), { status: 200 }); // Mensaje de exito
}
