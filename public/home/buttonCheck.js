const check = async function () {

    let can = false;
    const url_valid = url.value.match(/(https?|ftp):\/\/(www\.)?\w+(\.\w+)(\/.*)*/i)

    custom.value = custom.value.replace(/[^\w]+/g, '')
    
    if (url_valid) {

        if (custom.value) {

            const raw_data = await fetch(`api/customURLCheck?URL=${custom.value.replace(/[^\w]+/g, '')}`)
            const data = await raw_data.json()
            
            if (!data.exists) can = true
        
        } else can = true
        
    }

    if (!can) {
        generatebtn.setAttribute('disabled', 'true')
        generatebtn.style.opacity = '0.5'
        generatebtn.style.cursor = "default"
    } else {
        generatebtn.removeAttribute('disabled')
        generatebtn.style.opacity = '1'
        generatebtn.style.cursor = 'pointer'
    }

}

check()

custom.addEventListener('input', check)
url.addEventListener('input', check)