import { scrapeMatches } from './matchscraper.mjs'; // Importa la función para raspar partidos
import { scrapePlayers } from './playerscraper.mjs'; // Importa la función para raspar jugadores

const main = async () => {
    try {
        // Raspa los partidos
        const matches = await scrapeMatches();
        
        // Formatea la salida de los partidos
        const matchesText = matches.map(match => 
            `Partido:\n` +
            `  Fecha: ${match.fecha}\n` +
            `  Hora: ${match.hora}\n` +
            `  Competición Logo: ${match.competicion.logo}\n` + 
            `  Jornada: ${match.jornada}\n` +
            `  Local: ${match.local.equipo} (Logo: ${match.local.logo})\n` + 
            `  Visitante: ${match.visitante.equipo} (Logo: ${match.visitante.logo})\n` 
        ).join('\n\n'); 
        
        // Imprime los partidos en consola
        console.log('Partidos:', matchesText);

        // Raspa los jugadores
        const players = await scrapePlayers(); // Llama a la función de scraping de jugadores
        // Imprime los jugadores en consola
        console.log('Jugadores:', players);
    } catch (error) {
        console.error('Error al ejecutar los scrapers:', error);
    }
};

// Ejecuta la función principal
main();
