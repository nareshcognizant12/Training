// Strict mode makes several changes to normal JavaScript semantics:

// Eliminates some JavaScript silent errors by changing them to throw errors.
// Fixes mistakes that make it difficult for JavaScript engines to perform optimizations: strict mode code can sometimes be made to run faster than identical code that's not strict mode.
// Prohibits some syntax likely to be defined in future versions of ECMAScript.

"use strict";
const age=19;
const eligible=false;
if(age>18){
    //eligble=true;//before using strict this will not be thrown error
                   //only after adding strict this will throw error
}
console.log(eligible)