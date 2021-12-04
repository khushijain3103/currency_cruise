async function gimmeData() {
    const response= await fetch('http://api.exchangeratesapi.io/v1/latest?access_key=3d02f46508b9b4c0a08f1aa0b66cc9d1&format=1');
    // {
    //     "headers":{

    //     },
    //     "mode":'cors'
    // });
    const data= await response.json();

    return data;
}
async function symbols(){
    const sym = await fetch('http://api.exchangeratesapi.io/v1/latest?access_key=3d02f46508b9b4c0a08f1aa0b66cc9d1&format=1');
    const symData = await sym.json();

    return symData;
}

const printData = gimmeData();
console.log(printData);
const mysyms = symbols();
console.log(mysyms);
