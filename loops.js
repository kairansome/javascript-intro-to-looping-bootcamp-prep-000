 function forLoop(array) { 
   for (let i = 0; i < 26; i++) { 
     if (i === 0) {}
     else if (i === 1) { array.push("I am 1 strange loop.")}
     else { array.push(`I am ${i} strange loops.`)}
   }
   return array
}

function whileLoop(n) {
  let countdown = n
  while (countdown > 0) {
    console.log (countdown)
    countdown--
    
  }
return ('done')
  
}

function doWhileLoop(array) {
  while (function maybeTrue() {return Math.random() >= 0.5})
