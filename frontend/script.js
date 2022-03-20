const loadEvent = async _ => {    
    
    const rootElement = document.getElementById("root");
    
    const currentD = new Date().toISOString().split("T")[0]

    console.log(currentD)

    rootElement.insertAdjacentHTML("beforeend", `
    <input class="test "type="date" id="date" value="${currentD}"> `)
    
    const date = document.getElementById("date");

    createPost()

    
    date.addEventListener('input', async e => {
        console.log(e.target.value)
 
        createPost()
        
    })

    async function createPost () {
        const apiKey = "4WFi6RaKmXqC6eJlSWwFDzKAgdcn8TlLCxloTi14";
        const reqDate = document.getElementById('date').value
        
        const apod = await fetch(`https://api.nasa.gov/planetary/apod?api_key=${apiKey}&date=${reqDate}`)
        const apodJson = await apod.json()    
        console.log(apodJson)

        const title = apodJson.title
        const image = apodJson.url
        const explanation = apodJson.explanation
        
        const todayPost = (title, image, explanation) => {
            return `
            <section id='macska'>
            <div>
            <h1>${title}</h1>
            <img src="${image}"></img>
            <p>${explanation}</p>           
            </div>
            </section>
            `
        }

            const macskaElement = document.getElementById('macska')

            if(macskaElement != null){
                macskaElement.remove()
            }            
            rootElement.insertAdjacentHTML("beforeend", todayPost(title, image, explanation))           

    }    
}
window.addEventListener("load", loadEvent);