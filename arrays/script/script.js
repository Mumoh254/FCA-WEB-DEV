

let  arr  =  []

let  magari  = [ "merceedes"  ,  "bmw",  "Subaru"  , "Range  rover" ]


magari[0]   =  "Porche   Cayyene";
console.log(magari[0])

console.log(magari.length)

let mchanganyiko = [
    "subaru",
    { jina: "Wanambuko" },
    true,
    function() { alert("hello"); }
  ];
  
  alert(mchanganyiko[1].jina); 

  mchanganyiko[3]();          
  

  let marks  =  prompt("Enter   Your  Marks ")

  if  ( marks >=  90)   {
    console.log({
        message:  " Cogratulations you  scoredv   an  A "
    })
  }  else   {
    console.log({
        message: "You   failed "
    })
  }


let  wanafunzi  =  ["darren"  , "millicent"  , "kelvin" , "erick"  ,"duke" ,  "chunyu" , "Peter" , "emmah" , "sophie" , "mollent"  ,  "nganga" , "daktari"]
//length
console.log(wanafunzi.length)
//7th   value  
console.log( wanafunzi[7])


let  mwaka   = prompt("When   did  kenya   receive   indipendece" , "" ) 
console.log( mwaka)

if  (  mwaka ==  1963 ) 

{

  alert(
     "You   are   right "
  )

  alert(
    "Your   smart "
  )

}   else  {
  alert(" This  year  is  Wrong ")
}


let  year  =  prompt("When   did  kenya   receive   indipendece" , "" ) 

if  (  year  ==  1963) {

  alert("You  are  Right")

}
else  if  (year  >   1963)  {
  
  alert(" Too  late  ,  Kenya  is  alredy  free ")

}  else  {

    alert(  "The  year  is   wrong ")

}

  
let mwaka = prompt("Mwaka?", 18);

let message = (mwaka < 3) ? "Hi, baby" :
    (mwaka >= 80) ? 
    "Nakula pesa ya uzee" :
    (mwaka >= 60) ? 
    "You are a retiree" :
    (mwaka > 18) ? 
    "You are an adult" :
    "You're just a minor";

alert(message);

let   sir   =  8

if   (  sir  > 10  ||  sir >  18)  {
  
  alert("No  clases")

} 

alert(  1 ||   0)
alert(null  ||  1)
alert( null   ||   0  ||  1)
alert(  1 ||  null  ||   0)

let  jinaKwanza  =  "";
let  jinaMwisho  =  "";
let  jinaUtaani  =  "";

alert(jinaKwanza  ||   jinaMwisho  ||   jinaUtaani   ||   "AsiyeJulikana");

let    dakikia  = 12
let  saa   =  2;

if(  saa  ==   2   &&  dakika   ==  12)  {
  alert("  thge   time  is  2:12")
}

alert(1 &&  0)
alert(1  &&   5)
alert(null  &&  5)
alert( 0 &&  "hello")

name  =  ""
last  =  "mumo"
if  ( name  ==  null  &&   last  ==  "mum") {
  console.log("true")
}  else  {
  console.log("false ")
}



let   x  =  1;

console.log(  (x >  0)   &&   alert("kubwa  kuliko  sufuria "))

console.log(!true)
console.log(!0)

let  num  =  4
if (  num  ==  !typeof(num)){
  console.log("true")
} 
 else   {
  console.log("false")
}

write   an  if   condition to  check  if  age  is btwn  14  and   90  

let   age  =   prompt("Enter  age ")

if (  age >= 14  &&  age <=  90)  {
  console.log({
    message:  "You  are   allowed "
  })
} 
// write   an  if   condition    that  checks   age  is not btwn 14  &&  90  inclusive
else  {
  console.log({
    message:  "Acess  denied "
  })
}

if (  age <= 14  &&  age >=  90)
  {
    console.log({
      message:  "You  are   allowed "
    })
  } 
  // write   an  if   condition    that  checks   age  is not btwn 14  &&  90  inclusive
  else  {
    console.log({
      message:  "Acess  denied "
    })
  }


let  role  =  prompt("Enter  your role" , '')

if(  role == "admin")  {

  let  pass =  prompt("Enter   password" , '')

  if (pass=="master") {
   console.log({
    message:  "your   welcome "
   })

  }   
  else  if ( pass  ===  ""  ||  pass  === null)  {
    console.log({
      message:  "cancelled "
    })
  }  else  {
    console.log({
      message: "Wrong  password "
    })
  
  }
 
}  else if ( role  ==  "" )  {
  console.log({message: "Cancelled" })

}  else if (  role !=  "admin" )  {
 console.log({ message: "i  dont  know  you "})
}


two  op   nulish  col  oparater  turns value if  on left  is  null  0r  undefined 

a??b

let   x  =  1

alert(x??"haijulikani")

let  jinaKwanza =  null ;
let  jinaPili  =  "Mumo";
let  jinaTatu   =  null;

alert(jinaKwanza??jinaPili??jinaTatu??"Haijulikani")