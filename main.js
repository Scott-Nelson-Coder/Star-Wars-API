let button = document.querySelector('#API-Button')

const baseURL = 'https://swapi.dev/api'

function apiButton() {
    axios
    .get(baseURL + '/planets/2')
    .then((res) => {
        console.log(res)
        res.data.residents.forEach((elem) => {
            axios
            .get(elem)
            .then((res) => {
                console.log(res.data)
                const names = document.createElement('h2')
                names.textContent = res.data.name
                document.body.appendChild(names)
            })
        })

    })
    
}

button.addEventListener('click', apiButton)