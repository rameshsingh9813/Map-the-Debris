 function orbitalPeriod(arr) {
     const GM = 398600.4418;
     const earthRadius = 6367.4447;
     let g=arr.map(({name:name,avgAlt:orbitalPeriod})=>({name,orbitalPeriod}))
     let h=g.map((e)=>e.orbitalPeriod=(Math.round(2*Math.PI*Math.sqrt(Math.pow((earthRadius+e.orbitalPeriod),3)/GM))))
return g
    }
  
console.log(orbitalPeriod([{name: "iss", avgAlt: 413.6}, {name: "hubble", avgAlt: 556.7}, {name: "moon", avgAlt: 378632.553}]))
// let k =[{name : "sputnik", avgAlt : 35873.5553}];
// let k=[{name: "iss", avgAlt: 413.6}, {name: "hubble", avgAlt: 556.7}, {name: "moon", avgAlt: 378632.553}]

// console.log(g)