//const url = "https://api.pexels.com/v1/search?query=nature&per_page=1";
//const apiKey = "MvoKh5uODA3vSvClMIpJl69Vq6aZfEGFqKwvYPGYUwVNrKOiczkxC9Ic";
//const cardImage = document.querySelectorAll(".card > img");


document.getElementById("load-images").addEventListener("click", loadImages);

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
        
        const divArray = Array.from(document.querySelectorAll(".card.mb-4.shadow-sm"));
        console.log(divArray);

      })

}



