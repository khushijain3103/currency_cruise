async function gimmeData() {
    const response= await fetch("https://cors-anywhere.herokuapp.com/http://api.exchangeratesapi.io/v1/latest?access_key=3d02f46508b9b4c0a08f1aa0b66cc9d1&format=1", {
        headers : {
            "Accept": "application/json",
            "Origin": "github.com",
            "x-requested-with":"XMLHttpRequest"
        },
        mode: "cors"
    })
    const data= await response.json();

    return data;
}
async function symbols(){
    const sym = await fetch("https://cors-anywhere.herokuapp.com/http://api.exchangeratesapi.io/v1/latest?access_key=3d02f46508b9b4c0a08f1aa0b66cc9d1&format=1", {
        headers : {
            "Accept": "application/json",
            "Origin": "github.com",
            "x-requested-with":"XMLHttpRequest"
        },
        mode: "cors"
    })
    const symData = await sym.json();

    return symData;
}

const printData = gimmeData();
console.log(printData);
const mysyms = symbols();
console.log(mysyms);
