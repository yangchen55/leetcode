Toggle navigation
Interview Cake
You are a renowned thief who has recently switched from stealing precious metals to stealing cakes because of the insane profit margins. You end up hitting the jackpot, breaking into the world's largest privately owned stock of cakes—the vault of the Queen of England.

While Queen Elizabeth has a limited number of types of cake, she has an unlimited supply of each type.

Each type of cake has a weight and a value, stored in an object with two properties:

weight: the weight of the cake in kilograms
value: the monetary value of the cake in British shillings
For example:

  // Weighs 7 kilograms and has a value of 160 shillings
{ weight: 7, value: 160 }

// Weighs 3 kilograms and has a value of 90 shillings
{ weight: 3, value: 90 }

JavaScript
You brought a duffel bag that can hold limited weight, and you want to make off with the most valuable haul possible.

Write a function maxDuffelBagValue() that takes an array of cake type objects and a weight capacity, and returns the maximum monetary value the duffel bag can hold.

For example:

  const cakeTypes = [
  { weight: 7, value: 160 },
  { weight: 3, value: 90 },
  { weight: 2, value: 15 },
];

const capacity = 20;

maxDuffelBagValue(cakeTypes, capacity);
// Returns 555 (6 of the middle type of cake and 1 of the last type of cake)

JavaScript
Weights and values may be any non-negative integer. Yes, it's weird to think about cakes that weigh nothing or duffel bags that can't hold anything. But we're not just super mastermind criminals—we're also meticulous about keeping our algorithms flexible and comprehensive.

Gotchas
Does your function work if the duffel bag's weight capacity is 0 kg?

Does your function work if any of the cakes weigh 0 kg? Think about a cake whose weight and value are both 0.

Breakdown
The brute force approach is to try every combination of cakes, but that would take a really long time—you'd surely be captured.

What if we just look at the cake with the highest value?

We could keep putting the cake with the highest value into our duffel bag until adding one more would go over our weight capacity. Then we could look at the cake with the second highest value, and so on until we find a cake that’s not too heavy to add.

Will this work?

Nope. Let's say our capacity is 100 kg and these are our two cakes:

  { weight: 1,  value: 30 }
{ weight: 50, value: 200 }

JavaScript
With our approach, we’ll put in two of the second type of cake for a total value of 400 shillings. But we could have put in a hundred of the first type of cake, for a total value of 3000 shillings!

Just looking at the cake's values won’t work. Can we improve our approach?

Well, why didn’t it work?

We didn’t think about the weight! How can we factor that in?

What if instead of looking at the value of the cakes, we looked at their value/weight ratio? Here are our example cakes again:

  { weight: 1,  value: 30 }
{ weight: 50, value: 200 }

JavaScript
The second cake has a higher value, but look at the value per kilogram.

The second type of cake is worth 4 shillings/kg (
200
/
50
200/50), but the first type of cake is worth 30 shillings/kg (
30
/
1
30/1)!

