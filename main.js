
async function poke() {
    const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=20');
    let data = await response.json()

    data.results.forEach(async element => {
        const resp = await fetch(element.url);
        const poke = await resp.json();

        const img = document.createElement('img');
        const div = document.createElement('div');
        const caminho = img.src = poke.sprites.front_default;
        let nome = poke.name

       
        let types = poke.types.map((ele)=> ele.type.name);        

        div.innerHTML += `
        <h1>${nome}</h1>
        <img src="${caminho}" alt="${nome}">
        <p>Types: ${types}</p>
        
        `
    

        teste.appendChild(div);

    });





}

poke();

