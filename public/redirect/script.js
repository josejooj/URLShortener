const customURL = window.location.pathname.slice(1);

(async () => {
    
    const myip_raw = await fetch('https://api.ipify.org?format=json')
    const myip = await myip_raw.json()
    const { ip } = myip

    const location_raw = await fetch('http://ip-api.com/json/' + ip)
    const location = await location_raw.json()

    const URLData_raw = await fetch('api/URLData?custom=' + customURL)
    const URLData = await URLData_raw.json()

    console.log(URLData)

    delete location.query
    delete location.status

    fetch('api/newAccess', {
        method: 'POST',
        body: new URLSearchParams({ location: JSON.stringify(location), ip, customURL })
    })

    window.location.href = URLData.urls.redirect

})()