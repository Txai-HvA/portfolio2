
import React from 'react';

import lastFMDataThumbnail from './assets/lastfmdataThumbnail.png';
import lastFMDataImg from './assets/lastfmdata.png';
import discordThumbnail from './assets/discord_screenshot.png';
import millionaireThumbnail from './assets/who_wants_to_be_a_millionaire.png';
import searchFoodThumbnail from './assets/searchfood.png';
import overwatchThumbnail from './assets/overwatch.png';

export const projectData = [
    {
        "name": "LastFM Data",
        "thumbnail": lastFMDataThumbnail,
        "url": "/lastfm_data",
        "short_descr": "React website die Last.FM data laat zien met behulp van d3.js & de LastFM API",
        "opdracht": "Dit project maakt gebruik van LastFM-gegevens. LastFM registreert naar welke nummers en artiesten hun gebruikers luisteren, als ze hun Spotify verbinden met hun LastFM-account. Dit project toont LastFM-statistieken op basis van de opgegeven gebruikersnaam, het genre, het aantal records en de periode. Topnummers worden weergegeven in een staafdiagram en topartiesten in een cirkeldiagram. Er is ook een optie om meer informatie over een artiest te krijgen door op de artiestnaam te klikken in de legenda van het cirkeldiagram. De tekst onder de legenda vergelijkt de topartiesten van de gebruiker en de topartiesten van het gegeven genre.",
        "leerpunten": "Ik heb tijdens dit project de d3 libary geleerd om grafieken mee te genereren en ik heb leren werken met de LastFM API. Verder heb ik tijdens dit project mijn React kennis opgefrist.",
        "gitHubPage": "https://frontend-applications-inky.vercel.app/",
        "gitHubRepository": "https://github.com/Txai-HvA/frontend-applications",
        "image": lastFMDataImg,
        "usedHTML": true,
        "usedCSS": true,
        "usedJS": true,
        "usedReact": true,
    },
    {
        "name": "Discord namaken",
        "thumbnail": discordThumbnail,
        "url": "/discord_namaken",
        "short_descr": "Website nagemaakt voor het leren van flexbox, grid en responsiveness.",
        "opdracht": "Voor deze opdracht moest ik een website kiezen en die zo goed mogelijk proberen na te maken met behulp van HTML en CSS. Uiteindelijk had ik gekozen om Discord na te maken, omdat ik deze website veel gebruik. Ook is de indeling complex, wat ik een leuke uitdaging vond. Verder moest ik kiezen of ik de website responsive wilde maken voor alle schermen of de surface laag ging verbeteren. Ik koos om de website responsive te maken.",
        "leerpunten": "Ik heb tijdens dit vak mijn CSS vaardigheden verbeterd. Hieronder vallen ook het gebruik maken van flexbox, grid en het responsive maken van een website.",
        "gitHubPage": "https://txai-hva.github.io/blokweb/",
        "gitHubRepository": "https://github.com/Txai-HvA/blokweb",
        "image": discordThumbnail,
        "usedHTML": true,
        "usedCSS": true,
        "usedJS": true,
        "usedReact": false,
    },
    {
        "name": "Who wants to be a Millionaire?",
        "thumbnail": millionaireThumbnail,
        "url": "/millionaire",
        "short_descr": "Met behulp van JavaScript een interactieve webpagina gemaakt.",
        "opdracht": `Voor deze opdracht moest ik laten zien dat ik de gegeven JavaScript stof beheers en kan toepassen op een interactieve webpagina. Ik heb uiteindelijk "Who wants to be a Millionaire?" gemaakt.`,
        "leerpunten": "Ik heb tijdens dit vak JavaScript geleerd. Mijn eerdere ervaring met andere talen heeft mij hierbij geholpen. ",
        "gitHubPage": "https://txai-hva.github.io/WhoWantsToBeAMillionaire/",
        "gitHubRepository": "https://github.com/Txai-HvA/WhoWantsToBeAMillionaire",
        "image": millionaireThumbnail,
        "usedHTML": true,
        "usedCSS": true,
        "usedJS": true,
        "usedReact": false,
    },
    {
        "name": "Search Food",
        "thumbnail": searchFoodThumbnail,
        "url": "/search_food",
        "short_descr": "Mobiele webapplicatie die een deel van de info uit een gids ontsluit, zonder gebruik Javascript.",
        "opdracht": `Voor deze opdracht moest ik een webapplicatie ontwerpen voor mobiel die een deel van de informatie in de gids ontsluit. Hierbij mochten we niet gebruik maken van Javascript. De gids heet de "International Student Guide Amsterdam" en is bedoelt voor internationale studenten die naar Amsterdam komen. Hiervoor heb ik uiteindelijk een protype website gemaakt die helpt om die studenten goedkoop eten te vinden bij supermarkten in de buurt. `,
        "leerpunten": "Ik heb tijdens dit vak mijn HTML en CSS vaardigheden verbeterd. Hieronder valt het responsive maken van een website. ",
        "gitHubPage": "https://txai-hva.github.io/SearchFood/login.html",
        "gitHubRepository": "https://github.com/Txai-HvA/SearchFood",
        "image": searchFoodThumbnail,
        "usedHTML": true,
        "usedCSS": true,
        "usedJS": false,
        "usedReact": false,
    },
    {
        "name": "Overwatch website",
        "thumbnail": overwatchThumbnail,
        "url": "/overwatch_website",
        "short_descr": "Website die laat zien dat ik de gegeven HTML en CSS stof beheers.",
        "opdracht": "Voor deze opdracht moest ik laten zien dat ik de gegeven HTML en CSS stof beheers en kan toepassen op een interactieve mobiele webpagina. Ik heb uiteindelijk een pagina over het spel Overwatch gemaakt en deze ook responsive gemaakt. ",
        "leerpunten": "Ik heb tijdens dit vak mijn HTML en CSS vaardigheden verbeterd. Hieronder valt het responsive maken van een website. ",
        "gitHubPage": "https://txai-hva.github.io/overwatch/",
        "gitHubRepository": "https://github.com/Txai-HvA/overwatch",
        "image": overwatchThumbnail,
        "usedHTML": true,
        "usedCSS": true,
        "usedJS": false,
        "usedReact": false,
    }
];
