const url = document.getElementById('url')
const custom = document.getElementById('custom-route')
const generatebtn = document.getElementById('generate')
const finalURL = document.getElementById('finalURL')
const result = document.getElementById('show_result')

async function generate() {
    
    const raw_data = await fetch('api/generateURL', {
        method: 'POST',
        body: new URLSearchParams({
            redirect: url.value,
            custom: custom.value || btoa(`${Date.now() * Math.random()}`.slice(10))
        }) 
    })

    const data = await raw_data.json()
    
    if (raw_data.status != 200) alert("Houve um erro ao criar a URL...\n" + data.result)
    else return window.location.href = data.result

}

generatebtn.addEventListener('click', generate)