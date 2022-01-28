const args = process.argv;
let r = Number(args[2]);

function circleArea(r){
    return (Math.PI*r*r)
}

console.log(`Yarıçapı ${r} olan dairenin alanı ${circleArea(r)}'dır.`)
