const cakeTypes = [
    { weight: 7, value: 160 },
    { weight: 3, value: 90 },
    { weight: 2, value: 15 },
];

const cakesUnit = []
let haul = 0;


const capacity = 20;


// maxDuffelBagValue(cakeTypes, capacity){
//     console.log(cakeTypes)
// }
const maxDuffelBagValue = (cakeTypes, capacity) => {
    cakeTypes.map((item, index) => {
        item.unit = item.value / item.weight

    })
    let highestScore = cakeTypes.reduce((max, student) => {
        return student.unit > max ? student.unit : max;
    }, 0);

    for (let i = 0; i < cakeTypes.length; i++) {
        if (highestScore == cakeTypes[i].unit) {
            const hey = Math.floor(capacity / cakeTypes[i].weight)
            haul += hey * cakeTypes[i].value

            const remaing = capacity - hey * cakeTypes[i].weight

            for (let i = 0; i < cakeTypes.length; i++) {
                if (remaing == cakeTypes[i].weight) {
                    haul += cakeTypes[i].value
                }
            }

        }
        console.log(haul)





    }
}










maxDuffelBagValue(cakeTypes, capacity)
