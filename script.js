//PROMISES 

const doSomethingPromise = () => 
new Promise((resolve, reject => {
   // throw new Error("Something wrong");
    setTimeout(function() {
        resolve('First data');
    }, 1000);
});

const doOtherthingPromise = () =>
 new Promise((resolve, reject => {
     throw new Error('Ops, Erro');
    setTimeout(function() {
        resolve('Second data');
    }, 1000);
});

Promise.reca([doSomethingPromise(), doOtherThingPromise()]).then(data => {
console.log(data);
});

//-----------------//-----------------//
//Promise.all([doSomethingPromise(), doOtherthingPromise()]).then((data) => {
   // console.log(data[0].split(''));
    //console.log(data[0].split(''));
//}) .catch(err => {
  //  console.log(err)
//});
//----------------//-----------------//
// doSomethingPromise()
//.then(data => {
  //  consolo.log(data.split(''));
   // return doOtherThingPromise;
//})
//.then(data2 => console.log(data2.split('')))
//.catch(error => console.log('Ops, erro', error));


// Pending
// Fulfilled
// Rejected 

//----------------------------------//
//CALLBACKS
function toSomething(callback) {
    setTimeout(function() {
        //did something
        callback('First data');
    }, 1000);
}

function doOtherThing(callback) {
    setTimeout(function() {
        //did other thing
        callback('Second data');
    }, 1000);
}

function doAll() {
    try {
          doSomething(function(data) {
            var processedData = data.spplit('');

                try{
                doOtherThing(function(data2) {
                    var processedData2 = data2.split('');
        
                    try {
                 setTimeout(function() {
                    console.log(processedData, processedData2);
             },  1000);
            } catch(err) {           
            }  
        });   
 } catch(err) {
     //handle error
 }
});
} catch (err) {
    //handle error
  }
}
doAll();