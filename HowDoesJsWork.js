// javascript Engine                                       > BRENDAN EICH javascript and first ECMAScript Engine(SpiderMonkey) creator <
// the computer doesn't know what a JavaScript is !
// here we need the javascript engine so the computer can understand javaScript (ECMAScript (it tells engines creators this how javaScipt should works) engines  there is a lot of them ) 
// So what is happening inside this engine ?
const js_engine_exemple = code=>{
    return code.split(/\s+/)
}
console.log(js_engine_exemple('var a = `ashraf`')); // ['var', 'a', '=' '`ashraf`']
// PARSER => AST (abstract syntaxe tree)=> Interpreter(read code line by line versus compiler which translate the code to another language understood by the computer)
 // Interpreter + compiler = jit compiler (just in time compiler this is exactly what browser start to do mixing ) so is JS an interpreted language ! not technically , it depends on the implementation 
// code optimizing 
 //  inline caching 

 // hidden classes
 function person (x,y){
    this.x=x;
    this.y=y;
}
const obj1 = new person(1,2);
const obj2 = new person(30,4);
// So that code going to makethe compiler run slow  
// While the two objects have the some hidden classes that is have the some properties 
// So as soon you start introduce things in different order the compiler start to get confusing 
// So in a situation like this  , we assigned the properties over an object (this.) so that we avoid the later issue 
// Or making sure that we are adding things on the same orders
obj1.x=10;
obj1.y=30;
obj2.y=10;
obj2.x=30;

//Call stack + memory heap 
/* if i do  */
const num = 79; // allocate memory for a number 
// call stack 
function subs(num){
    return num - 2;
}
function add(){
    const sum =1+3;
    return subs(sum);
}
debugger;
add(); 
//everytime the code  add we use the call stack
// the call stack store the functions and the variables as the code execute , and it runs a first in last out mode which means the first one in the last one getting popped out
// one more things small vriables can usually be stored in the stack , and complex data structures  like objects arrays and functions are stored in memory heaps 
// the call things about the call stack is that it allows JS to know  where it need to  in the code whatever is on top of the call stack is where th JS is running (how genius is that)

// recursion 
function inception (){
    inception();
}
inception();// we get a maximum call stack exceeded  , hey we've just created a stackoverflow (so we can save the browser from crashing )

// Garbage collections ; it use mark and sweep algorithm we mark what we need and we sweep what we don't 
// memory leak 
//how to avoid memory leak :
// Global variable 
var a = 1 ;
var b = 2 ;
//keep adding Event Listeners 
var element = document.getElementById('button');
element.addEventListener('click',onclick());
// and this happens a lot especially when you go back and forth between single page applications where you are  not removing 
//the event listener of the page and as the user goes back and forth back and forth the memory  keeps increasing  more as the event listeners are added 

//                                  javascript is a single threaded programming language 
// which means its just a one instruction is getting executed at a time , it is not doing multiple things , js has one call stack which alows us to run code one at a time 
// so it exactly like someone who is eating with one hands ,
// !! And because of this JS is sychronous , only one thing can happen at a time 
// JavaScript runtime 
console.log('1');
setTimeout(()=>{console.log('2')}, 1000);
console.log('3');
//okey lets  describe a bit what is happening here 
// output :1.3.2
//Well it's because we added a console log to our stack and we logged onto our console and then we removed
//that call from our call stack.And then we went to the next line set timeout.
//We added this onto our stack and then immediately the JavaScript engine is going to say oh sit Time out 
// the call stack going to say hmm That's a web API.i don't really care about  and I don't know what to do with it.
//I'm going to just send it off to the web API so this gets moved away from the call stack and gets sent to the web API.
//Now we don't know what's happening on that side of things but we just go to the next line and say console log three it's going to log 3 now behind the scenes.
//The web API is going to take the set timeout it's going to start a timer that is going to run for one
//second and once that one second is over. It's going to push the callback.
//That is what to do. Once it's done running for one second and the callback in this case is console log 2.
//And boom It's like it's calling us back saying hey we're ready for you. one second has passed 
//Can you console log to and what happens now. 
// which still the same if we do 
console.log('1');
setTimeout(()=>{console.log('2')}, 0);
console.log('3');
// so no matter how fast that setTimeout is get sent to the wen api, still get sent to the callback queue , and the event loop still needs to check is the stack empty 

//How cool is that and using this method we're able to have this power of asynchronous code that is instead
// of being limited to one call stack and one memory heap whenever we get tasks that can be asynchronous
//that take a long time possibly like modifying dom or making Http requests(fetch()).
//Well in that case we can just send that off to the browser the browser can just run that in the background
//and whenever we're ready it can just use its callback to an event loop to notify us.

const list = new Array(60000).join('1.1').split('.');

function removeItemsFromList() {
    var item = list.pop();

    if (item.count) {
        removeItemsFromList();
    }
}
removeItemsFromList();