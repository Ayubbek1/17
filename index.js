

function arabic(number) { // easy
    const map = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000
    }   
    let map_values = Object.values(map)
    let map_keys = Object.keys(map)
    for (let i = 0; i < map_values.length; i++) {
        const element = map_values[i];
        let near = number - element
        console.log(near);
        if(number == map_values[i]){
            return map_keys[map_values.indexOf(map_values[i])]
        }
        
    }
}
console.log(
    arabic(1), // 4
    arabic(5) ,// 2
    arabic(50) ,// 9
    arabic(500) // 1996    
);
