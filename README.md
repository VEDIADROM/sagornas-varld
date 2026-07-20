# Sagornas värld 🦄🌈

Ett sagospel för barn (5–9 år), designat av en 6-åring. Hjälp den lilla enhörningen att:

1. **Himlen** ☁️ — tryck på hjärtat så vingarna fälls ut, flyg och hitta 6 fåglar
2. **Rymden** 🌟 — flyg upp till rymden och samla 10 stjärnor
3. **Marken** 🧟 — hoppa och studsa förbi kusliga men fortfarande snälla zombisar hela vägen till slottet!

Den lilla enhörningen bär sin kungliga krona under hela äventyret.

**Spela här:** https://vediadrom.github.io/sagornas-varld/

Funkar på mobil, surfplatta och dator. Animerade händer visar hur varje del fungerar utan
att barnet behöver kunna läsa. Dra eller använd piltangenterna för att flyga; tryck på
skärmen eller använd mellanslag för att hoppa.

Spelet har också en lugn flygtur direkt från start, ett läge med mindre rörelse, barnvänlig
hjälp som aktiveras automatiskt när något känns svårt samt tillgängliga tangentbords- och
skärmläsarkontroller.

## Installera som app 📱

Spelet är en PWA — öppna länken i mobilen och välj **"Lägg till på hemskärmen"**
(Delningsmenyn i Safari på iPhone/iPad, menyn ⋮ i Chrome på Android).
Då får du en egen enhörningsikon, spelet startar i helskärm och funkar även offline.

## Teknik

Spelet bor i en enda `index.html` — all grafik ritas med canvas, alla ljud görs med Web Audio API.
Inga externa beroenden, inga byggsteg. Nivåframsteg sparas i webbläsarens localStorage
med en säker reservlösning för webbläsare som blockerar lagring.
Därtill: `manifest.webmanifest` + `sw.js` (offline/installation), hemskärmsikoner,
vibrationsfeedback, ljud av/på-knapp och safe area-hantering för mobiler med notch.
