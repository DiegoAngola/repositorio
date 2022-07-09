const cards = document.querySelector("#cards-dinamicas");
const templateCard = document.querySelector("#template-card").content;

document.addEventListener("DOMContentLoaded",() => {
    fetchData();
})

const fetchData = async () => {
    try {
        
        const res = await fetch("https://rickandmortyapi.com/api/character");
        const data = await res.json();

        pintarDatos(data);

    } catch (error) {
        console.log(error)
    } finally {
        console.log("se ejecuta si o si")
    }
}

const pintarDatos = (data) => {
    const fragment = document.createDocumentFragment();
    cards.textContent ="";


    data.results.forEach(item => {

        const clone = templateCard.cloneNode(true);
        clone.querySelector("h5").textContent = item.name;
        clone.querySelector("p").textContent = item.species;
        clone.querySelector("img").setAttribute("src", item.image);

        fragment.appendChild(clone);
    });
    cards.appendChild(fragment);
}