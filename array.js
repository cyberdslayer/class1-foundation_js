// program to print even numbers

let numbers = [2,3,45,53,75, 4, 6, 8];
let sizeOfNumber = numbers.length;

for ( let i=0; i<=sizeOfNumber; i++){
    if(numbers[i]%2==0){
        console.log("Even num at index "+ i+" is :" +numbers[i]);
    }
}

// program to print biggest number in the array

let largestNumber =0;
for(let i =0; i<= sizeOfNumber;i++)
{
    if(largestNumber<=numbers[i]){
        largestNumber=numbers[i];
    }
}

console.log("The largest Number Is: "+ largestNumber);

// Reverse the elements of the array
const tempArray = [];
for(let i=sizeOfNumber; i>=0;i--)
{
    tempArray[i]= numbers[i];
    console.log(tempArray[i]);
}

// Complex object

const arrayOfPeople= [
    {
        "name":{"first": "Pulkit", "last": "Dubey"}, 
        "age" : 26,
       " gender": "M"
    },

    {
        "name": {"first": "Shubham", "last": "Mishra"} ,
        "age": 20,
       " gender":"M"
    },
    {
        "name":"Iu",
        "age":21,
       " gender":"F"
    },
    {
        "name": {"first": "John", "last": "Doe"}, 
        "gender": "male"
    },
    {
        "name": {"first": "Jane", "last": "Doe"}, 
        "gender": "female"
    },
    {
        "name": {"first": "Bob", "last": "Smith"}, 
        "gender": "male"
    }   
];


// ? i have to print the first name of the person who
// ? is male

