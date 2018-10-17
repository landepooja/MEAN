// function maxMinAvg(arr){
//     var Max = arr[0];
//     var Min = arr[0];
//     var Sum = 0;
//     for(i=1; i<arr.length; i++){
//       if(arr[i] > Max){
//         Max = arr[i];
//         console.log("Max is : " + Max);
//       }
//       if(arr[i] < Min){
//         Min = arr[i];
//         console.log("Min is : " + Min);
//       }
//        Sum += arr[i];
      
//     }
//      var  Avg = Sum / arr.length;
//      console.log("Avg is : " + Avg);
     
    
//   }
//    maxMinAvg([1,-2,9,4]);
//***********************************************************************

// function fizzBuzz(num){
//     if (num < 0 ){
//          null;
//     }
//     if((num % 3) =0){
//         console.log (Fizz);
//     }
//     if((num % 5) =0){
//         console.log (Buzz);
//     }
//     if((num %3) =0  && ((num % 5) = 0)){
//         console.log (fizzBuzz);
//     }

// }

// fizzBuzz(16);
 //***********************************************************************
 function Users(arr){
 for (i=0; i<arr.length; i++){
     var lang = ""
     var interests= ""
     for(j=0; j<arr[i]['languages'].length; j++){
         lang += arr[i]['languages'][j] + "  " // J is important
         
     }

    for (var key in arr[i]['interests']){
        interests += arr[i]['interests'][key]+" ";
    }
  console.log(arr[i]['fname']+" "+ arr[i]['lname']+"knows "+lang);
  console.log(arr[i]['fname']+" is also interested in "+interests);
 }



}
 
 
 
 
 var users = [
    {
      fname: "Kermit",
      lname: "the Frog",
      languages: ["Python", "JavaScript", "C#", "HTML", "CSS", "SQL"],
      interests: {
        music: ["guitar", "flute"],
        dance: ["tap", "salsa"],
        television: ["Black Mirror", "Stranger Things"]
      }
    },
    {
      fname: "Winnie",
      lname: "the Pooh",
      languages: ["Python", "Swift", "Java"],
      interests: {
        food: ["honey", "honeycomb"],
        flowers: ["honeysuckle"],
        mysteries: ["Heffalumps"]
      }
    },
    {
      fname: "Arthur",
      lname: "Dent",
      languages: ["JavaScript", "HTML", "Go"],
      interests: {
        space: ["stars", "planets", "improbability"],
        home: ["tea", "yellow bulldozers"]
      }
    }
  ]

  
Users(users);


//***********************************************************************
// static boolean isMatchingPair(char character1, char character2) 
// { 
//    if (character1 == '(' && character2 == ')') 
//      return true; 
//    else if (character1 == '{' && character2 == '}') 
//      return true; 
//    else if (character1 == '[' && character2 == ']') 
//      return true; 
//    else
//      return false; 
// } 
  
// /* Return true if expression has balanced  
//    Parenthesis */
// static boolean areParenthesisBalanced(char exp[]) 
// { 
//    /* Declare an empty character stack */
//    stack st=new stack(); 
   
//    /* Traverse the given expression to  
//       check matching parenthesis */
//    for(int i=0;i<exp.length;i++) 
//    { 
        
//       /*If the exp[i] is a starting  
//         parenthesis then push it*/
//       if (exp[i] == '{' || exp[i] == '(' || exp[i] == '[') 
//         st.push(exp[i]); 
   
//       /* If exp[i] is an ending parenthesis  
//          then pop from stack and check if the  
//          popped parenthesis is a matching pair*/
//       if (exp[i] == '}' || exp[i] == ')' || exp[i] == ']') 
//       { 
               
//           /* If we see an ending parenthesis without  
//              a pair then return false*/
//          if (st.isEmpty()) 
//            { 
//                return false; 
//            }  
   
//          /* Pop the top element from stack, if  
//             it is not a pair parenthesis of character  
//             then there is a mismatch. This happens for  
//             expressions like {(}) */
//          else if ( !isMatchingPair(st.pop(), exp[i]) ) 
//            { 
//                return false; 
//            } 
//       } 
        
//    } 
      
//    /* If there is something left in expression  
//       then there is a starting parenthesis without  
//       a closing parenthesis */
    
//    if (st.isEmpty()) 
//      return true; /*balanced*/
//    else
//      {   /*not balanced*/
//          return false; 
//      }  
// }  
//*********************************************************************************************************

//Bubble sort
// function printArray(arr){
//     for(var i=0; i<arr.length; i++){
//         console.log(arr[i]);
//     }
// }
//Time complexity :- Bog O(n) Since its itrsting through each elememtn in th e array

// function findNth(arr, n){
//     console.log(arr[n]);
// }
//Time complexity :- Bog O(1) Since it getting the array at the given position

// function halving(n){
//     var count = 0;
//     while(n > 1){
//         n = n/2;
//         count++;
//     }
//     return count;
// }
//Time complexity :- Bog O(log(n)) Since it's halfing the array

// function identityMatrix(n){
//     var matrix = [];
//     for(var i=0; i < n; i++){
//         var row = [];
//         for(var j=0; j < n; j++){
//             if(j == i){
//                 row.push(1);
//             }
//             else{
//                 row.push(0);
//             }
//         }
//         matrix.push(row);
//     }
//     return matrix;
// }