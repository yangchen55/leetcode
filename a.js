const cakeTypes = [
    { weight: 7, value: 160 },
    { weight: 3, value: 90 },
    { weight: 2, value: 15 },
];

const cakesUnit = []
const Haul = 0;
const rem = 2;

const capacity = 20;


// maxDuffelBagValue(cakeTypes, capacity){
//     console.log(cakeTypes)
// }
const maxDuffelBagValue = (cakeTypes, capacity) => {
    cakeTypes.map((item, index) => {
        let myObject = { weight: item.weight, unit: item.value / item.weight }

        cakesUnit.push(myObject)
        // console.log(item.value / item.weight, item.weight)   
    })

    // console.log(cakesUnit[0].unit)
    if (cakesUnit[0].unit < cakesUnit[1].unit) {
        const result = capacity % cakesUnit[0].weight
        const haul = result * cakeTypes[1].value
        const remaing = capacity - cakeTypes[1].weight * result
        // return remaing
        console.log(haul, remaing, result, "iam haul")

        for (let i = 0; i < cakeTypes.length; i++) {
            if (remaing == cakeTypes[i].weight) {
                console.log(cakeTypes[i].value)
            }
        }

    }


}
maxDuffelBagValue(cakeTypes, capacity)
