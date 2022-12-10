const url = document.getElementById('url')
const custom = document.getElementById('custom-route')
const generatebtn = document.getElementById('generate')
const finalUrl = document.getElementById('finalurl')
const result = document.getElementById('show_result')

async function generate() {
    
    const raw_data = await fetch('generateUrl', {
        method: 'POST',
        body: new URLSearchParams({
            URL: url.value,
            customURL: custom.value || btoa(`${Date.now() * Math.random()}`.slice(10))
        }) 
    })

    const data = await raw_data.json()
    
    if (raw_data.status != 200) alert("Houve um erro ao criar a URL...\n" + data.result)
    else {
        finalUrl.setAttribute('href', data.result)
        finalUrl.innerHTML = data.result
        generatebtn.style.display = 'none'
        result.style.display = 'unset'
    }

}

generatebtn.addEventListener('click', generate)