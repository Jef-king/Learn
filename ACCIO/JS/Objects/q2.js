let OdiStats = {
     runs: 10000,
     wickets: 200,
     matches: 300,
}

let t20Stats = {
    runs: 2000,
    wickets: 50,
    matches: 100,
}

let TestStats = {
    runs: 15000,
    wickets: 300,
    matches: 400,
}

// let player = {
//     name: "Sachin",
//     age: 45,
//     odi:  {...OdiStats},
//     t20:  {...t20Stats},
//     test: {...TestStats}
    
// }

let player = {
    name: 'Sachin',
    age: 45,
    odi: { runs: 10000, wickets: 200, matches: 300 },
    t20: { runs: 2000, wickets: 50, matches: 100 },
    test: { runs: 15000, wickets: 300, matches: 400 }
  }
// console.log(player.odi.wickets)
// console.log(player.t20.matches)

// player.test.runs = 20000

// let z = player.odi
// console.log(z, typeof z)

// console.log(player["t20"]["wickets"])

let t = player["odi"]

console.log(typeof(t["matches"]))