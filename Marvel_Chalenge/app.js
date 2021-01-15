document.addEventListener("DOMContentLoaded", function(){
    let urlAPI = `https://gateway.marvel.com:443/v1/public/characters?ts=1&limit=55&apikey=7e99323b2679072c3e1119052f1aca13&hash=779d449f29c113e00feddbada3e680af`;
    let contentHTML = "";

// Unico jeito que achei de consumir a API 

    fetch(urlAPI).then(function(response){
    return response.json()
    }).then(function(res){
    console.log(res)
    let items = res.data.results;

    items.forEach(function(hero){
    let url = hero.urls[0].url;

    contentHTML += `
    <div class="item">
    <a href="${url}" target="_blank">
    <img src="${hero.thumbnail.path}.${hero.thumbnail.extension}">
    </a>
    <h3 class="title">${hero.name}</h3>
    </div>
    `;
    });
    document.getElementById("marvel-row").innerHTML = contentHTML;
    })
})