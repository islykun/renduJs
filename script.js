fetch('test.json')
    .then(response => response.json())
    .then(data => {
        scriptHtml(data);
        console.log('Données récupérées avec succès :', data);
    })
    .catch(error =>
        console.error('Erreur lors de la récupération des données :', error));

function scriptHtml(data) {
    const header = document.querySelector('header');
    const nomCommercial = data.entreprise.nomCommercial;
    const titre = document.createElement('h1');
    titre.textContent = nomCommercial;
    document.body.appendChild(titre);
    header.appendChild(titre);

    const main = document.querySelector('main');
    const phraseAccroche = data.entreprise.phraseAccroche;
    const accroche = document.createElement('h2');
    accroche.textContent = phraseAccroche;
    main.appendChild(accroche);;

    const texteAppelAction = data.entreprise.texteAppelAction;
    const appelaction = document.createElement('button');
    appelaction.textContent = texteAppelAction;
    main.appendChild(appelaction);

    const tableau = data.entreprise.avantagesClients;
    const listeavantage = document.createElement('ul');
    main.appendChild(listeavantage);

    tableau.forEach(list => {
        const listItem = document.createElement('li');
        listItem.textContent =
            list;
        listeavantage.appendChild(listItem);
    });

    const activities = data.entreprise.activites;
    const activitiesSection = document.createElement('div');
    main.appendChild(activitiesSection);

    activities.forEach(activity => {
        const activitiesDiv = document.createElement('div');
        activitiesDiv.classList.add('activity');
        const nom = document.createElement('h3');
        nom.textContent = activity.nom;
        const description = document.createElement('p');
        description.textContent = activity.description;
        activitiesSection.appendChild(nom);
        activitiesSection.appendChild(description);
        const imageDivAct = document.createElement('div');
        imageDivAct.classList.add('img');
        const image = document.createElement('img');
        image.setAttribute('src', activity.image);
        activitiesSection.appendChild(image);
    });

    const temoignages = data.entreprise.temoignages;
    const temoignagesSection = document.createElement('div');
    main.appendChild(temoignagesSection);

    temoignages.forEach(temoignage => {
        const temoignagesDiv = document.createElement('div');
        temoignagesDiv.classList.add('temoignage');
        const prenom = document.createElement('h2');
        prenom.textContent = temoignage.prenom;
        const typeExperience = document.createElement('h3');
        typeExperience.textContent = temoignage.typeExperience;
        const commentaire = document.createElement('p');
        commentaire.textContent = temoignage.commentaire;
        temoignagesSection.appendChild(prenom);
        temoignagesSection.appendChild(typeExperience);
        temoignagesSection.appendChild(commentaire);
        const imageDivTem = document.createElement('div');
        imageDivTem.classList.add('img');
        const image = document.createElement('img');
        image.setAttribute('src', temoignage.image);
        temoignagesSection.appendChild(image);


    });

}

const footer = document.querySelector('footer');
let map = L.map('map').setView([45.750000, 4.850000], 13);
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);
footer.appendChild(map);