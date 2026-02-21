# Jammming

## Syfte

Jammming är en webbapplikation där du kan söka efter låtar via Spotify, bygga ihop en egen spellista och sedan rensa den när du är klar. Projektet byggdes som ett läroprojekt i React med fokus på komponentstruktur, state-hantering och testdriven utveckling.

## Varför RapidAPI och inte Spotify Web API?

Det ursprungliga projektmålet var att använda Spotifys officiella Web API för att både söka och spara spellistor direkt till ett Spotify-konto. Det visade sig dock att Spotify Developer-plattformen kräver premium tillgång för att kunna använda write-operationer som att skapa och spara spellistor.

Som alternativ valdes **RapidAPI:s Spotify23-wrapper**, som ger kostnadsfri och omedelbar åtkomst till Spotifys sökfunktion utan krav på OAuth-flöde. Kompromissen är att write-operationer (spara spellista till Spotify) inte är möjliga via detta API, varför Save-knappen i nuläget enbart rensar spellistan lokalt.

## Teknologier

- **React** — komponentbaserat UI med hooks (`useState`)
- **Vite** — byggverktyg och lokal utvecklingsserver
- **Vitest** — testramverk
- **@testing-library/react** — komponenttester nära hur en användare faktiskt interagerar
- **RapidAPI – Spotify23** — API för låtsökning (`spotify23.p.rapidapi.com`)

## Funktioner

- **Sök låtar** — skriv in en sökterm och hämta resultat från Spotify via RapidAPI
- **Lägg till i spellista** — klicka `+` för att lägga till en låt, dubbletter ignoreras
- **Ta bort från spellista** — klicka `-` för att ta bort en låt
- **Byt spellistans namn** — redigera namnet direkt i namnfältet
- **Spara och rensa** — klicka Save för att nollställa spellistan

## Framtida arbete

- **Spotify OAuth** — logga in med riktigt Spotify-konto via Implicit Grant Flow för att kunna spara spellistor direkt till kontot
- **Responsiv design** — anpassa layouten för mobil och surfplatta
- **Felhantering** — visa felmeddelanden om sökningen misslyckas eller API-nyckeln saknas
- **Töm sökresultat efter Save** — rensa även sökresultaten när spellistan sparas
