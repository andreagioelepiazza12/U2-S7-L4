


document.getElementById("loadImages").addEventListener("click", loadImages);

function loadImages() {
    const apiKey = "MvoKh5uODA3vSvClMIpJl69Vq6aZfEGFqKwvYPGYUwVNrKOiczkxC9Ic";

    const query = "football";

    const url = `https://api.pexels.com/v1/search?query=${query}`

    fetch(url, {
        method: "GET",
        headers: { Authorization: apiKey }
      })
      .then(resp => {
        if(resp.ok){
            return resp.json();
        }else {
            throw new Error(`Ci dispiace, non siamo riusciti a reperire i dati. Errore: ${response.statusText}`);
        }

      })
      .then(data => {
        console.log(data);
        
        const divArray = Array.from(document.querySelectorAll("img"));
        console.log(divArray);

        for(let i = 0; i<divArray.length; i++){
            divArray[i].src = data.photos[i].url;
        }
        

      })

}

document.getElementById("loadSecondImages").addEventListener("click", loadSecondImages);

function loadSecondImages() {
    const apiKey = "MvoKh5uODA3vSvClMIpJl69Vq6aZfEGFqKwvYPGYUwVNrKOiczkxC9Ic";

    const query = "tennis";

    const url = `https://api.pexels.com/v1/search?query=${query}`

    fetch(url, {
        method: "GET",
        headers: { Authorization: apiKey }
      })
      .then(resp => {
        if(resp.ok){
            return resp.json();
        }else {
            throw new Error(`Ci dispiace, non siamo riusciti a reperire i dati. Errore: ${response.statusText}`);
        }

      })
      .then(data => {
        console.log(data);
        
        const divArray = Array.from(document.querySelectorAll("img"));
        console.log(divArray);

        for(let i = 0; i<divArray.length; i++){
            divArray[i].src = data.photos[i].url;
        }
        

      })

}



