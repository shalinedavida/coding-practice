// 1.Shopping Cart: You have a cart array like ["milk", "bread"]. A user adds "eggs".
// Question: Which method would you use to add it, and how?


// unshift or push 

const arr1 = ["milk", "bread"]
 arr1.unshift('Sugar','Salt')

 console.log(arr1);
 

// 2.To-Do List Removal: You created a to-do list: ["wash dishes", "do homework", "read"].
// The user finished the last task.
// Question: Which method will remove the last item?

const arr2 =  ["wash dishes", "do homework", "read"]
arr2.pop(arr2)

console.log(arr2);

// 3.Combining Orders: You received two orders from different users: ["burger", "fries"] and ["soda", "salad"].
// Question: How will you merge both orders into one array?
const arr3 = ["burger", "fries"]
const arr4 = ["soda", "salad"]

const arr5 = []
arr5.push(arr3 + " ," + arr4)

console.log(arr5);

const arr8 = ["burger", "fries", ...arr4]
console.log(arr8);

const arr9 = [...arr3 , ...arr4]
console.log(arr9);

//4. Filtering Numbers: You have an array of scores: [56, 75, 89, 90, 43, 30].
// Question: Write a method to filter out scores below 50.

const arr6 = [56, 75, 89, 90, 43, 30]
  const arr7 = arr6.filter( element => element < 50)

 console.log(arr7);
 

// 5.Product Search: A user searches for "apple" in your array of products: ["banana", "orange", "apple"].
// Question: How do you check if "apple" exists in the list?

const fruits =  ["banana", "orange", "apple"]
fruits.includes('apple')
 console.log('true');
 
// 6.Price Calculation: An array of item prices is [200, 500, 300].
// Question: How do you calculate the total price?
const items = [200, 500, 300]
 const total = items.reduce ((acc,prev)=>
   acc+prev,0)

 console.log(total);
 
//7. Rearranging Queue: Customers [“Alice”, “Bob”, “Charlie”] enter a queue.
// The first customer is served.
// Question: Which method will remove Alice?
const customers =  ["Alice", "Bob", "Charlie"]

customers.shift(customers)

console.log(customers);

// 8.Transform Data: You have [10, 20, 30] and want to add tax (10%) to each.
// Question: What method will help you return a new array with updated values?

const data = [10, 20, 30]
const tax = data.map(element => element*1.1)
console.log(tax);


