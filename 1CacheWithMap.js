//? Impliment a simple in memory Cache for an expensive function (api calls or DB querys)
//? The goal is to avoid calling the expensive function multiple times and store the result in the cache
//? The result is returned from the cache if it exists. Else the expensive function is called and the result is stored in the cache


const cache = new Map();

const expensiveFunction = (id) => {
    console.log("Calling expensive function for id ", id);
    return {
        id: id,
        data: "This is the data for id " + id,
        timeStamp: new Date().getTime(),
    };
};

const getData = (id) =>{
    if(cache.has(id)){
        console.log('cache hit for id ',id);
        return cache.get(id);
    }
    console.log('cache miss for id ',id);
    const data = expensiveFunction(id);
    cache.set(id,data);
    return data;
}

console.log(getData(11));
console.log(getData(12));
console.log(getData(11));
console.log(getData(13));
console.log(getData(12));