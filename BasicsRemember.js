      // var database = [
      //     {
      //         username :"ashraf",
      //         password : "1999",
      //     },
      //     {
      //         username:"aziz",
      //         password : "mdpaziz",
      //     } ,
      //     {
      //         username : "anass",
      //         password : "20012001",
      //     }
      // ]

      // var NewsFeed = [
      //     {
      //         username:"ashraf",
      //         Owner :"BoB",
      //         Date :"13/12/2022",
      //         NewsFeed : "Bonjour ! je passe la matinée a rabat !",
          
      // },
      // {
      //     username:"AZIZ",
      //     Owner :"BoB",
      //     Date :"13/12/2022",
      //     NewsFeed : "Bonjour ! je passe la matinée a rabat !",

      // },
      // ]
      // var userNamePrompt = prompt("what is your username !");

      // var passwordPrompt = prompt("what is your password !");
      // function userIsValid(user,pass){
      //     for (let i = 0; i < database.length; i++) {
      //         if (user === database[i].username && pass===database[i].password){
      //            return true; 
      //         }
      //         console.log("wrong information");
      //         return false;
      //     }
      // }

      // function signIn (user,pass){
      //     if (userIsValid(user,pass)){
      //         console.log("yep! valid user ");
      //     }
      // }
      // signIn(userNamePrompt,passwordPrompt);
      // currying 
      const multiply  = (a , b) => a * b;
      const carriedMultiply = a => b => a * b;
      const multiplyBy5 = carriedMultiply(5);
      // compose      
      const Number = 7;
          const Compose = (a,b) => c =>a(b(c));
              const sum = num => num+1;
      Compose(sum,sum)(Number);

      //Avoiding The Side Effects , functional purity 
      var a = 1 ;
      function b(){
        a = 2; //this a side effect   
      }; 
      // In order to write good software 
      // By avoiding side effects , returning always a value , we are using something we call it 
      // Deterministic , it means no matter what is the input , it always will return the same value 

      //advanced array 

      const arr = [1,3,6];
      const double =[];
      const newArr = arr.forEach((num)=>{
          double.push(num * 2) ;
      });
      console.log('forEach array',double);

      // map , filter , reduce 

      //map 

      const mapArr = arr.map(num => num * 2 );
      console.log('maparray',newArr);

      // filter 

      const filterArr=arr.filter(num=>{
        return num<2;
      });
      
      // reduce 
      
      const reduceArray =arr.reduce((accumulator,num)=>{
        return accumulator * num;
      },1);
      console.log(reduceArray);

        // reference type 
      var obj1  = {value:2};
      var obj2  = obj1;
      var obj3  = {value: 1};

      // context vs scope 
      // if i do 
      console.log(this===window)// true
      this.alert('hello')===window.alert('hello');//true !

      const obj4 = {
        a:function () {
            console.log(this);
        }
      }
      // instantiation is when you make a copy of an object and re-use the code !okay lets do it 

      class Player {
        constructor (name,type){
          console.log('Inside the Player',this);
          this.name = name;
          this.type = type;
        }
        introduce (){
          console.log(`Hi I am ${this.name} , i am ${this.type}`)
        }
      }

      // Now lets extend form Player and lets say !
      class Wizard extends Player{
        constructor(name,type){
          super(name,type);
          console.log('Inside the wizard',this)
        }
        play(){
          console.log(`yeeeew i am a ${this.type}`)
        }
      }
      const Wizard1 = new Wizard('ashraf','dark magic');
      // const Wizard2 = new Wizard('yousra','light magic');

      //there is many ways so we can loop over something
      const basket =['apple','banana','cruise'];
      const detailedBasket = {
          apples:5,
          oranges: 10 ,
          cruise :400
      }
      // we can say 
      basket.forEach(item=>{
        console.log(item);
      })
      // for of 
      // her we are doing something called Iterating over ARRAYS AND STRINGS  which means go one by one and look at this items  
      // Iterating - arrays, strings
      for (let item of basket){
        console.log(item);
      }

      // for in   
      // it works with objects , loop over object and see the properties 
      // detailedBasket is not iterable
      // And here we are doing something calls enumerating  
      // enumerating - objects 
      for(item in detailedBasket){
        console.log(item);
      }
      //if we do 
      for(item in basket){
        console.log(item);
      }
      // it will work , so we think of array as object 
      basket  = {
          0:'apples',
          1:'oranges',
          2:'cruise' 
        }

      // ES 7 
      const fruits  = ['banana','apple','cruise'];
      fruits.includes('banana'); // return true
      fruits.includes('bird');// return false 
      // we can say something like 
      const square = x => x*x;
      square(3);
      const cube = x => x**x ;
      cube(3);
      // ES 8
      //.padStart(); .padEnd();

    const phrase ="Clients"
    phrase.padEnd(2); // "Clients  "
    phrase.padStart(3); // "   Clients"

    const fun =(a,
                b,
                c,
                d,)=>{
                  console.log(a);
                }
    fun(1,2,3,4,);

    Object.values;
    Object.entries;
    Object.keys;

    let obj = {
      username0 :'anass',
      username1 : 'ashraf',
      username : 'jadziyad'
    }

    Object.keys(obj).forEach((index,value)=>{
      console.log(index,obj[index]);
      console.log(value);
    })
    // Grab the directly 
    Object.values(obj).forEach(value=>{
      console.log(value);
    })
    /**
     anass
    ashraf
    jadziyad
    */

    Object.entries(obj).forEach(value=>{
      console.log(value);
    })
    /*
    (2) ['username0', 'anass']
    (2) ['username1', 'ashraf']
    (2) ['username2', 'jadziyad']
    */
    Object.entries(obj).map(value=>{
      return value[1] ;
    }) //['anass 0', 'ashraf 1', 'jadziyad 2']

    //Es 10

    const array = [1,2,3,4,5]
    // flat() is a method that we can use with array 
    array.flat() 
    // nothing happened ... output [1, 2, 3, 4, 5] 
    // but if we say 
    const array2=[[1,2],[3,4],5]
    array2.flat();
    // here were flat get excited !! output [1, 2, 3, 4, 5] 
    //lets have another array 
    const array3 = [1,2,[3,4,[5]]]
    array3.flat();
    // we get as an output [1, 2, 3, 4, Array(1)] 
    // so to fix that flat has 1 as a default parameter 
    array3.flat(1);
    // to grab that last array we need to level up the parameter ..
    array3.flat(2)// [1, 2, 3, 4, 5]

    //with flat we can also clean up the data 
    const array4 = ['anas ','ashraf',,,,,'jad','ziyad']
    array4.flat(); //['anas ', 'ashraf', 'jad', 'ziyad']
    const family = [['yousra ','ashraf'],[[['khadija']]],[['lahcen']],['jad','ziyad']];
    family.flatMap((creature)=> {
      return creature +'ait mbarek'}); 
    // ['yousra ,ashraf ait mbarek', 'khadija ait mbarek', 'lahcen ait mbarek', 'jad,ziyad ait mbarek']

    const userEmail = '       aitmbarekachraf@gmail.com';
    const userEmail2= 'achrafashraf@gmail.com      ';
    console.log(userEmail.trimStart());
    console.log(userEmail2.trimEnd());
    // the next one is fromEntries it transform a list of keys value to an object emm!!! lets see how does it work 
      const familyAge =[['ashraf',23],['yousra',17],['JadZiyad',5]];
      const obj2 =  Object.fromEntries(familyAge); // The opposite is the method Object.entries()
      Object.entries(obj2); // we get back what we exactly have in familyAge 

      // try catch ..
      try {
        4+true;//5 true=1
        4+false;//4 false=0
        true + 'hy' // truehey
      } catch (error) {
        console.log('you missed something!!!' , error);
      }


    //optional chaining operators ?.
    let jad_pokemon = {
      raichu:{
        species : 'mouse pokemon',
        height : '0.9',
        weight : '31',
        power : 0   
      }
    } 

    let ziyad_pokemon = {
      pikatchu:{
        species : 'mouse pokemon',
        height : '0.8',
        weight : '30'
      }
    } 
    let weight1= ziyad_pokemon?.pikatchu?.weight
    console.log(weight1); //31
    let weight2= jad_pokemon?.pikatchu?.weight
    console.log(weight2); //undefined 

    //Nullish Coalescing Operator ??
    // with the Or operator 
    //  let power  = jad_pokemon?.raichu?.power ||'no power';
    //  console.log(power); // no power 
    //with Nullish Coalescing Operator ??
    let power  = jad_pokemon?.raichu?.power??'no power';
    console.log(power); // 0
    
    // globalThis === window ? true ! then why we need it its the same as window 
    // imagine we have node if we call window node doesn't recogonize it , in this case node knows globalThis , so window is for the browser 
    // and globalThis outside the browser 
      
    // Debugging 
    const falttened = [[0,1],[2,3],[4,5]].reduce((accumalator,array) =>{
                        debugger; 
                        return accumalator.concat(array);
                      },[]) // flattened (6) [0, 1, 2, 3, 4, 5]

    // ES 6 + WebPack2
      export const addT=(a,b)=>a+b;
    //or
      export default add;  
      const add=(a,b)=>a+b;
      // to use this method 
      import add from './add';
      //
      const compose = (a,b) => (c)=>a(b(c));
      const Num=2; 
      const Sum = num=> num +1;
      const sm =compose(sum,sum)(Num);
      console.log(sm);
                      