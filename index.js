function simulaRichiestaPostBarbie(barbieArray) {
  // Simulazione della richiesta POST
  console.log("Simulazione: Invio dati al server...");

  // Supponiamo che qui tu voglia eseguire la richiesta effettiva usando fetch o axios
  // Ad esempio con fetch:
  // fetch('url_del_tuo_server', {
  //   method: 'POST',
  //   headers: {
  //     'Content-Type': 'application/json',
  //   },
  //   body: JSON.stringify(barbieArray),
  // })
  // .then(response => response.json())
  // .then(data => console.log('Risposta dal server:', data))
  // .catch(error => console.error('Errore durante la richiesta:', error));

  // Questo è solo un esempio, nella realtà dovresti effettuare una richiesta HTTP effettiva.

  console.log("Simulazione: Dati inviati con successo!");
}

// Esempio di utilizzo
const arrayBarbie = [
  { nome: "Barbie 1", coloreCapelli: "biondo", abito: "vestito rosa" },
  { nome: "Barbie 2", coloreCapelli: "castano", abito: "vestito blu" },
  // Aggiungi altri oggetti Barbie secondo le tue esigenze
];

simulaRichiestaPostBarbie(arrayBarbie);

function simulaRichiestaGetBarbie() {
  // Simulazione della richiesta GET
  console.log("Simulazione: Recupero dati dal server...");

  // Supponiamo che tu voglia ottenere i dati dal server effettivo usando fetch o axios
  // Ad esempio con fetch:
  // fetch('url_del_tuo_server')
  // .then(response => response.json())
  // .then(data => console.log('Dati ottenuti dal server:', data))
  // .catch(error => console.error('Errore durante la richiesta:', error));

  // Questo è solo un esempio, nella realtà dovresti effettuare una richiesta HTTP effettiva.

  // Simulazione di dati di risposta dal server
  const datiDiRisposta = [
    { nome: "Barbie 1", coloreCapelli: "biondo", abito: "vestito rosa" },
    { nome: "Barbie 2", coloreCapelli: "castano", abito: "vestito blu" },
    // Aggiungi altri oggetti Barbie secondo le tue esigenze
  ];

  console.log("Simulazione: Dati ottenuti dal server:", datiDiRisposta);
  return datiDiRisposta;
}

// Esempio di utilizzo
const datiBarbieRecuperati = simulaRichiestaGetBarbie();
// Ora puoi utilizzare i datiBarbieRecuperati come necessario nella tua applicazione
