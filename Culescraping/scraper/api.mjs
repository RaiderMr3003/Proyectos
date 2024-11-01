import express from 'express';
import { scrapeMatches } from './matchscraper.mjs';
import { scrapePlayers } from './playerscraper.mjs';

const app = express();
const PORT = 3000;

app.get('/api/matches', async (req, res) => {
    try {
        const matches = await scrapeMatches();
        res.json(matches);
    } catch (error) {
        console.error('Error al obtener partidos:', error);
        res.status(500).json({ error: 'Error al obtener los partidos' });
    }
});

app.get('/api/players', async (req, res) => {
    try {
        const players = await scrapePlayers();
        res.json(players);
    } catch (error) {
        console.error('Error al obtener jugadores:', error);
        res.status(500).json({ error: 'Error al obtener los jugadores' });
    }
});

app.listen(PORT, () => {
    console.log(`Servidor API escuchando en http://localhost:${PORT}`);
});
