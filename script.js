//ES7 - Async / Await

/*
const asyncTimer = () => 
new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(12345);
    }, 1000)
});

const simpleFunc = async() => {

    const data = await  Promise.all([asyncTimer(), fetch('/data.json').then(resStream =>
    resStream.json()
    )])

    return data;
};

simpleFunc()
    .then(data => {
    console.log(data);
})
.catch(err => {
    console.log(err);
});


//------------------------------------//


//FETCH

/*fetch('http://localhost:8080/dataXPTO.json', {
})
.then(responseStream => {
    console.log(responseStream);
    if(responseStream.status === 200) {
       return responseStream.json();
    } else {
        throw new Error('Request error');
    }
})
.then(data => {
    console.log(data);
})
.catch(err => {
    console.log('Erro: ', err);
});




//------------------------------------//
/*fetch('/data.json')
.then(responseStream => responseStream.json()) 
.then(data => {
    console.log(data);
}) .catch(err => {
    console.log('Erro: ', err);
});
*/

