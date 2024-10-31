import { chromium } from "playwright";

export const scrapePlayers = async () => {
    // Inicia el navegador en modo headless (sin interfaz gráfica)
    const browser = await chromium.launch({ headless: true });
    const page = await browser.newPage();

    // Navega a la página deseada
    await page.goto('https://www.fcbarcelona.es/es/futbol/primer-equipo/jugadores');

    try {
        // Espera a que se cargue el contenido inicial
        await page.waitForSelector('.team-list__section', { timeout: 60000 });

        // Realiza scroll hasta el final para cargar todas las imágenes
        await autoScroll(page);

        // Extrae los detalles de los jugadores y sus imágenes
        const playersData = await page.evaluate(() => {
            const players = [];
            const playerContainers = document.querySelectorAll('.team-list__person-container');

            playerContainers.forEach(container => {
                const playerLink = container.querySelector('a.team-person');
                const firstName = playerLink.querySelector('.team-person__first-name')?.innerText || '';
                const lastName = playerLink.querySelector('.team-person__last-name')?.innerText || '';
                const name = firstName.trim() !== '' ? `${firstName} ${lastName}` : lastName;

                const number = container.querySelector('.team-person__number')?.innerText || '';
                const position = container.querySelector('.team-person__position-meta')?.innerText || '';
                const imgSrc = container.querySelector('.team-person__image')?.src || '';

                if (imgSrc && imgSrc.startsWith("https")) {
                    players.push({ name, number, position, imgSrc });
                }
            });

            return players;
        });

        return playersData; // Devuelve los datos de los jugadores
    } catch (error) {
        console.error("Error al esperar el selector o extraer datos:", error);
        return []; // Devuelve un array vacío en caso de error
    } finally {
        // Cierra el navegador
        await browser.close();
    }
};

// Función para hacer scroll automáticamente
async function autoScroll(page) {
    await page.evaluate(async () => {
        await new Promise((resolve) => {
            const distance = 100; // Distancia a desplazar
            const delay = 50; // Tiempo entre desplazamientos (en ms)
            let totalHeight = 0;
            const scrollHeight = document.body.scrollHeight;

            const timer = setInterval(() => {
                window.scrollBy(0, distance); // Desplazamiento vertical
                totalHeight += distance;

                if (totalHeight >= scrollHeight) {
                    clearInterval(timer);
                    resolve();
                }
            }, delay);
        });
    });

    // Espera un momento para que se cargue el contenido adicional
    await page.waitForTimeout(1000);
}
