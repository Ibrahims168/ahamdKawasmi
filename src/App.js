import './App.css';

const people = [
  
 {
  name: "Ahmad",
  birthday: "13.10.2003",
  number: "0543367608",
  age: 18,
  image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRe7lNIsQkg1zeNN8XC2qyPjPP6alaqBYJeNU5AOKtmLA&s"
},

 {
  name: "Ahmad",
  birthday: "13.10.2003",
  number: "0543367608",
  age: 20,
  image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRe7lNIsQkg1zeNN8XC2qyPjPP6alaqBYJeNU5AOKtmLA&s"
},

  {
  name: "Ahmad",
  birthday: "13.10.2003",
  number: "0543367608",
  age: 23,
  image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRe7lNIsQkg1zeNN8XC2qyPjPP6alaqBYJeNU5AOKtmLA&s"
}
]

const words = "phoop"

function palindorm(n){
  let nStr = n.toString()
  let reveredStr = nStr.split('').reverse().join('')
  if (nStr === reveredStr) {
    return true
  }else{
    return false
  }
}

console.log(palindorm(words));


function findAge(arr){
  let totalAge = 0;
  for (let i = 0; i < arr.length; i++) {
    totalAge += arr[i].age
  }
  console.log(totalAge);
}

function filterMethod(arr){
  let filterdObject = arr.filter(arr => arr.age >= 20)
  console.log(filterdObject);
}

filterMethod(people)

function ageFilter(arr){
  let filterdObjects = []
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].age >= 20) {
      filterdObjects.push(arr[i])
    }
    console.log(filterdObjects);
  }
}

ageFilter(people)

findAge(people)

// Given an array of integers nums and an integer target, return indices 
// of the two numbers such that they add up to target.
// You may assume that each input would have exactly one solution, 
// and you may not use the same element twice.
// You can return the answer in any order.

// Example 1:

// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].

const nums = [2,7,11,15]
const target = 9

function twoSum(nums, target) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i+1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        return [i , j]
      }
    }
  }
  return []
};

console.log(twoSum(nums,target));

// Given a sorted array of distinct integers and a target value,
//  return the index if the target is found. If not, return the index where it would 
//  be if it were inserted in order.

// Example 1:

// Input: nums = [1,3,5,6], target = 5
// Output: 2

function searchInsert(nums, target) {
    for (let i = 0; i < nums.length; i++) {
      if (nums[i] === target) {
        return i
      }
    }
    return nums.length
}

const nums1 = [2,7,11,15]
const target1 = 2

console.log("the index number is: " + searchInsert(nums1,target1));

function App() {
  return (
    <div className="App">
      <header className="App-header">
          {/* <img className='image' src={person1.image} alt='Ahmad Kawasmi'></img>
          <h1>Name : {person.name}</h1>
          <h1>Birthday : {person1.birthday}</h1>
          <h1>Number : {person1.number}</h1>
          <h1>Age : {person1.age}</h1>
           */}
      </header>
    </div>
  );
}

export default App;
