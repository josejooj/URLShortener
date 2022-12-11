const main = document.getElementsByTagName('main').item(0);
const acessos = document.getElementById('acessos');

(async () => {

    const URLData_raw = await fetch('/api/URLData?view=' + window.location.pathname.slice(6))   // Raw fetch of URL Data
    const URLData = await URLData_raw.json()                                                    // Final fetch of URL Data

    informations.generated.value.innerHTML = new Date(URLData._id).toLocaleString('pt-BR').split(' ').join(' - ') + " UTC"
    informations.customURL.value.innerHTML = `<a href="${window.location.origin}/${URLData.urls.custom}">${window.innerWidth < 600 ? "Abrir" : `${window.location.origin}/${URLData.urls.custom}</a>`}`
    informations.redirectURL.value.innerHTML = `<a href="${URLData.urls.redirect}">${window.innerWidth < 600 ? "Abrir" : URLData.urls.redirect}</a>`
    informations.viewURL.value.innerHTML = `<a href="${window.location.origin}/view/${URLData.urls.view}">${window.innerWidth < 600 ? "Abrir" : `${window.location.origin}/view/${URLData.urls.view}</a>`}`

    informations.acessos.title.innerHTML = `Acessos: ${URLData.inputs.length}`

    for (const input of URLData.inputs.sort((x, y) => x.in - y.in)) {

        const table = document.createElement('table')
        const location = {
            "IP": input.ip,
            "Em": new Date(input.in).toLocaleString('pt-BR').split(' ').join(' - ') + ' UTC',
            "País": input.location.country,
            "Estado": input.location.regionName,
            "Cidade": input.location.city,
            "Serviço": input.location.org,
            "User-Agent": input.userAgent
        }
        
        for (const x in location) {

            const tr = document.createElement('tr')
            const th = document.createElement('th')
            const td = document.createElement('td')
            
            th.innerHTML = x
            th.setAttribute('style', 'max-width: 10vw')
            td.innerHTML = location[x]

            tr.appendChild(th)
            tr.appendChild(td)

            table.appendChild(tr)

        }

        table.setAttribute('style', 'margin-block: 5vh; width: 100%')

        acessos.appendChild(table)

    }

})()

/**
 * @param {HTMLElement} element 
 */
function copy(element) {

    const target = element.getAttribute('data-to')
    const targetElement = document.getElementById(target)
    const finalElement = targetElement.firstElementChild

    navigator.clipboard.writeText(finalElement.href);

    alert("URL copiada com sucesso.\n" + finalElement.href)

}

for (const element of document.getElementsByClassName('copy')) {

    element.addEventListener('click', copy.bind(null, element))
    element.setAttribute('style', 'border: 0; background-color: transparent')
    
    const img = document.createElement('img')

    img.setAttribute('width', '30')
    img.setAttribute('style', "filter: invert(); cursor: pointer;")
    img.setAttribute('src', "/public/assets/clipboard.png")

    element.appendChild(img)

}