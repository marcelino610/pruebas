const repeated = str => {
    const lowered = str.toLowerCase()
    const splitted = lowered.split(' ')
    const reduced = splitted.reduce((acc, el) => {
        if (acc[el]){
            acc[el]++
        } else {
            acc[el] = 1
        }
        return acc
    }, {})
    return Object.entries(reduced).reduce((acc, el) => acc[1] > el[1] ? acc : el)
}

const sinEspacios = str => {
    str = str.replace(/\s/g, '')
    const lowered = str.toLowerCase()
    const splitted = lowered.split('')
    const reversed = splitted.reverse()
    const joined = reversed.join('')
    return lowered == joined
}

//estos ejercicios fueron copiados de https://www.youtube.com/watch?v=MXmQM_Uehtk
//lo que sigue es mi intento de reformularlos para obtener un filtro de palabras en un texto
//la idea es que muestre 'sí aparece la palabra {palabra}' o '{palabra} no se encuentra'

const filtrar = (palabra, texto) => {
    const palabraSplitted = palabra.split(`*`)
    const textoSplitted = texto.split(' ')
    let a = 0
    textoSplitted.forEach(element => {if (element == palabraSplitted){
        a++
        return a
    } 
    })
    a == 1 ? console.log(`"${palabra}" aparece una vez en este texto`) : a > 0 ? console.log(`"${palabra}" aparece ${a} veces en este texto`) : console.log(`"${palabra}" no aparece en este texto`)
}






/*$("form>button").click((ev) => {
    const term = $("#buscador").val();
    const rectTerm = term.toLowerCase();
    const reduced = rectTerm.split(' ');
    function verif(term) { reduced.reduce((acc, ) {
            if (acc[term]) {
                $('#verificador').text(`La palabra ${}`)
            }
        }
    }, {})
})*/

