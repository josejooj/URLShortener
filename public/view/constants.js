const informations = {
    generated: {
        field: document.getElementById('info_generated_field'),
        title: document.getElementById('info_generated_title'),
        value: document.getElementById('info_generated_value')
    },
    customURL: {
        field: document.getElementById('info_customURL_field'),
        title: document.getElementById('info_customURL_title'),
        value: document.getElementById('info_customURL_value')
    },
    redirectURL: {
        field: document.getElementById('info_redirectURL_field'),
        title: document.getElementById('info_redirectURL_title'),
        value: document.getElementById('info_redirectURL_value')
    },
    viewURL: {
        field: document.getElementById('info_viewURL_field'),
        title: document.getElementById('info_viewURL_title'),
        value: document.getElementById('info_viewURL_value')
    },
    acessos: {
        title: document.getElementById('Acessos_number')
    }
}

const vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0)
const vh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0)
