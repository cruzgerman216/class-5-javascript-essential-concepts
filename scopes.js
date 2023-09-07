// global scope
// const firstName = "John";

// Different types of local scopes 

// Outer Scope
// {
//   // Inner scope
//   const firstName = "Amy";
//   console.log("My name is " + firstName);
// }

// console.log("My name is really..." + firstName)
// for(let i = 0; i < 10; i++){

// }

// function scope
// function myNameIs(name){

// }

// if(1===1){

// }




// Global Scope
{
  // Local scope 1
  {
    // Local scope 2
    {
      // Local scope 3
      {
        const lastName = "Mander";
        // Local scope 4
        {
          // Local scope 5
          // Inner most scope
          // const lastName = "jerry";

          console.log("My last name is..." + lastName)
        }
      }
    }
  }
}

console.log("My last name in the global scope is.." + lastName);


{
  const carName = "Veloster";
}

{
  console.log("My car's type is..." + carName);
}