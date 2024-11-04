// matchscraper.mjs
import { chromium } from "playwright";

export const scrapeMatches = async () => {
    const browser = await chromium.launch({ headless: true });
    const page = await browser.newPage();

    await page.goto("https://www.fcbarcelona.es/es/futbol/primer-equipo/calendario");

    const matches = await page.$$eval(
        '.fixture-result-list__link',
        (results) => (
            results.slice(0, 25).map((el) => ({
                fecha: el.querySelector('.fixture-result-list__fixture-date')?.innerText || 'Fecha no disponible',
                hora: el.querySelector('.fixture-info__time')?.innerText || 'Hora no disponible',
                competicion: {
                    logo: el.querySelector('.fixture-result-list__fixture-competition svg')?.outerHTML || 'Logo no disponible',
                },
                jornada: el.querySelector('.fixture-result-list__stage')?.innerText || 'Jornada no disponible',
                local: {
                    equipo: el.querySelector('.fixture-info__name--home')?.innerText || 'Local no disponible',
                    logo: el.querySelector('.fixture-info__badge--home img')?.src.replace(';', '') || 'Logo no disponible', 
                },
                visitante: {
                    equipo: el.querySelector('.fixture-info__name--away')?.innerText || 'Visitante no disponible',
                    logo: el.querySelector('.fixture-info__badge--away img')?.src.replace(';', '') || 'Logo no disponible', 
                },
            }))
        )
    );

    await browser.close();

    return matches; 
};
