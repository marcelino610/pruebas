const getBiggest = (arr) => arr.reduce((acc, el) => acc > el ? acc : el)

const clean = (arr) => arr.reduce((acc, el) => {
    if (el){
        acc.push(el)
    }
    return acc
}, [])

