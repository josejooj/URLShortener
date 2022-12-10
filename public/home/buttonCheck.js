const check = async function () {

    let can = false;
    const url_valid = url.value.match(/https?:\/\/(www\.)?\w+(\.\w+)\/.+/i)

    if (url_valid) {

        if (custom.value) {

            const data = await fetch(`customUrlCheck?url=${custom.value}`)
            console.log(data)
            if (data.status == 200) can = true
        
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