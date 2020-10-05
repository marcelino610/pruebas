function fibonacci(n){
    var suc = [1, 1];
    for (let i = 2; i < n; i++){
        var a = i-1;
        var b = i-2;        
        suc.push(suc[i-1]+suc[i-2])
        
    }
    
    return suc
    
}

function findFibonacci(l){
    let findF = fibonacci(l);
    return findF[l-1]
}

function esPar(n){
    var a = Math.floor(n/2);
    if (n/2-a === 0){
        return true
    } else {return false}
}

function esPrimo(n){
    var a = Math.sqrt(n);
    var divN = [] //divisores de n
    for (let i = 1; i <= a; i++){
        if (n/i == Math.floor(n/i)){
            divN.push(n/i)
        }        
    }
    if (divN.length === 1){
        return true
    } else{
        return false
    }
}

function primoFibonacci(n){ //sólo se puede hasta n=78; a partir de 79 fuerza los últimos dígitos a 0
    const sucesion = fibonacci(n);
    var primosDeFibonacci = [];
    var psicionFibonacci = [];
    for (let i in sucesion){
        if (esPrimo(sucesion[i])){
            primosDeFibonacci.push(sucesion[i]);
            psicionFibonacci.push(parseInt(i, 10)+1);
        }
    }
    return [`Primos de Fibonacci`, primosDeFibonacci, `Posición primos de Fibonacci`, psicionFibonacci]
}

function encontrarPrimos(n, m){
    var a = [];
    var b = [];
    for (let i = n; i <= m; i++ ){
        a.push(i)
    }
    for (let i in a){ 
        if (esPrimo(a[i])){
            b.push(a[i])
        }
        
    }   
    
    return b
}

function encontrarPrimos2(k){
    let s = [];
    switch (true) {
        case k.length == 2:
            s = encontrarPrimos(k[0], k[1])
            break;
        
        case k.length > 2:
            for (let i = 1; i < k.length; i++){
                if (esPrimo(k[i])){
                    s.push(k[i])
                }
            }
            break;
        default:
            break;
    }
    return s
}

function encontrarPrimosGemelos(n, m){
    const primosEncontrados = encontrarPrimos(n, m);
    let primosGemelos = [];

    for (var i = 1; i < primosEncontrados.length; i++){
        if (primosEncontrados[i]-primosEncontrados[i-1] === 2){
            primosGemelos.push(`${primosEncontrados[i-1]} y ${primosEncontrados[i]}`)
        }
    }
    return primosGemelos
}

function numeroTriangular(n){
    var numerosTrienagulares = [];
    for (let i = 1; i <= n; i++){
        let a = 0;
        for (let j = 1; j < i; j++){
            a += j
        }
        numerosTrienagulares.push(a)
    }
    return numerosTrienagulares
}