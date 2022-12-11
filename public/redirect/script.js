const customURL = window.location.pathname.slice(1);

(async () => {

    try {
        const myip_raw = await fetch('https://api.ipify.org?format=json')
        const myip = await myip_raw.json()
        const { ip } = myip

        const location_raw = await fetch('https://ipapi.co/json')
        const location = await location_raw.json()
        const toSend = {
            country: `${location.country_name} (${location.country_code}) - ${location.country_calling_code}`,
            regionName: `${location.region} (${location.region_code})`,
            city: `${location.city}`,
            org: `${location.org} (${location.asn})`,
            lat: location.latitude,
            lng: location.longitude
        }

        fetch('api/newAccess', {
            method: 'POST',
            body: new URLSearchParams({ location: JSON.stringify(toSend), ip, customURL })
        })

    } catch (e) { }

    const URLData_raw = await fetch('api/URLData?custom=' + customURL)
    const URLData = await URLData_raw.json()

    window.location.href = URLData.urls.redirect

})()

