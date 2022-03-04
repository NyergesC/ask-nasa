const loadEvent = async _ => {
    
    const apod = await fetch("https://api.nasa.gov/planetary/apod?api_key=4WFi6RaKmXqC6eJlSWwFDzKAgdcn8TlLCxloTi14");

    const apodJson = await apod.json()

    console.log(apodJson)

    const rootElement = document.getElementById("root");

    const title = apodJson.title
    const image = apodJson.url
    const explanation = apodJson.explanation

    const todayPost = (title, image, explanation) => {
        return `
        <section>
            <div>
                <input type="date" id="date"></input>
                <h1>${title}</h1>
                <img src="${image}"></img>
                <p>${explanation}</p>           
            </div>
        </section>
        `
    };     
    
    rootElement.insertAdjacentHTML("beforeend", todayPost(title, image, explanation))
    
    const date = document.getElementById("date");
  
    date.addEventListener('input', function(e) {
      console.log(e.target.value)
    });
}
window.addEventListener("load", loadEvent);