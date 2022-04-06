const getPrimesNumbers = (req, res) => {

    //get number from param
    const { number } = req.params;

    //validate param required
    if (!number) return res
        .status(404)
        .json({
            message: "El numero es requerido"
        });

    //validate param is number
    if (isNaN(number)) return res
        .status(400)
        .json({
            message: "El parametro no es un numero"
        });

    try {

        //call function bucle prime numbers
        let primeNumbers = bucleNumbers(number);

        //return array with prime numbers
        return res
            .status(200)
            .json(primeNumbers);
    } catch (error) {

        return res
            .status(400)
            .json({message: `Ha ocurrido el siguente error en el procesamiento: ${error.message}`});
    }
}

const bucleNumbers = (number) => {
    //set empty array prime numbers
    let primeNumbers = [];

    //bucle 2 to number param
    for (let i = 2; i <= number; i++) {
        //is prime push to array prime numbers
        if (isPrime(i)) {
            primeNumbers.push(i);
        }

    }

    //array order descending
    primeNumbers.sort((a, b) => (a > b ? -1 : 1))

    //for each in array and print prime number
    primeNumbers.forEach(primeNumber => {
        console.log(`El numero ${primeNumber} es primo.`)
    })

    //return prime numbers array
    return primeNumbers
}

const isPrime = (number) => {
    //validate number is prime
    for (var i = 2; i < number; i++) {

        if (number % i === 0) {
            return false;
        }

    }

    return number !== 1;
}

module.exports = {
    getPrimesNumbers,
    bucleNumbers,
    isPrime
}