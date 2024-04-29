fetch('test.json')
    .then(response => response.json())
    .then(data => {
        scriptHtml(data);
        console.log('Données récupérées avec succès :', data);
    })
    .catch(error =>
        console.error('Erreur lors de la récupération des données :', error));

function scriptHtml(data) {
    const nomCommercial = data.entreprise.nomCommercial;
    const titre = document.createElement('h1');
    titre.textContent = nomCommercial;
    document.body.appendChild(titre);

    const phraseAccroche = data.entreprise.phraseAccroche;
    const accroche = document.createElement('h2');
    accroche.textContent = phraseAccroche;
    document.body.appendChild(accroche);

    const texteAppelAction = data.entreprise.texteAppelAction;
    const appelaction = document.createElement('button');
    appelaction.textContent = texteAppelAction;
    document.body.appendChild(appelaction);

    const tableau = data.entreprise.avantagesClients;
    const listeavantage = document.createElement('ul');
    document.body.appendChild(listeavantage);
    console.log(tableau);
    tableau.forEach(list => {
        const listItem = document.createElement('li');
        listItem.textContent = 
        list;
        console.log(listItem);
        listeavantage.appendChild(listItem);
    });
}