const URLSchema = {
    _id: Number,
    urls: Object,
    inputs: Array
}

interface location {
    //  status: string,	    // "success"
    country: string,	    // "Brazil"
    countryCode: string,	// "BR"
    region: string,	        // "RR"
    regionName: string,	    // "Roraima"
    city: string,	        // "Sao Luiz"
    zip: string,	        // "69370"
    lat: number,            // 0.8296,
    lon: number,            // -60.1285,
    timezone: string,	    // "America/Boa_Vista"
    isp: string,	        // "V tal"
    org: string,	        // "Telemar Norte Leste S.A."
    as: string,	            // "AS7738 V tal"
    //  query: string,      // "189.49.215.126"
}

/**
 * api to get the location:
 * http://ip-api.com/json/189.49.215.126
 */

interface URLType {
    _id: number // The timestamp who the url was created
    urls: {
        view: string      // The page to view the access
        custom: string    // Custom URL
        redirect: string  // Link to redirect
    }
    inputs: Array<{
        in: number         // Timestamp
        ip: string         // The ip of the user
        location: location // 
    }> | undefined
}

export {
    URLSchema,
    URLType
}