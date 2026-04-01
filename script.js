const myUrl = "https://makerslab.em-lyon.com/dww/data/shows.json";

const getData = async(doStuffs) => {
    try {
        const response = await fetch(myUrl);
        if(!response.ok){
            throw new Error("Network response not ok :" + response.statusText);
        }
        const data = await response.json();
        doStuffs(data);
    } catch(error) {
        console.error("Problem occurend while getting your data" + error);
    }
}

getData((data)=>{
    // your program starts here
    
    // On affiche les données en arrière-plan pour vérifier que ça marche
    console.log("Mes spectacles :", data);
    //Cibler la zone où afficher les spectacles et la vider de son contenu avant de la remplir avec les nouvelles données
    const grille = document.querySelector('.grille');
    grille.innerHTML = ''; 

    // Parcourt chaque élément du fichier JSON pour l'afficher
    data.musicals.forEach(spectacle => {
        
        
        const carteHTML = `
            <div class="carte">
                <img src="${spectacle.image}" class="image">
                <h3>${spectacle.title}</h3>
            </div>
        `;
        
        // Ajout de nouvelles cartes dans la grille
        grille.innerHTML += carteHTML;
    });

   // your program ends here
});