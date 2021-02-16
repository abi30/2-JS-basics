/**************
variable and data type



var firstName ="Abdulla";
console.log(firstName);

var lastName ='Rakib';

console.log(lastName);
var age = 28;
var fullage = true;
console.log(fullage);

var job;
console.log(job);
job = "teacter";
console.log(job);

console.log("abdulla al rakib ");
//variables naming rules
var $salary = 500;
var abdullaRakin = 'Abdulla and Rakin';
console.log(abdullaRakin);
var if =09;


****************

//type coercion...
var firstName = 'abdulla';
var age = 32;
console.log(firstName+' age is  '+age);
var job,$salary,isMarried;
job= 'software_engineer';
$salary=80000;
isMarried=true;

console.log(firstName+' is a '+job +' his salary is also '+ $salary+' us dollar per year and is he married ? '+isMarried);

//variable mutation....
******************
//toLearn_1

age = 'thirty two';
job='salesman';
$salary=24000;

alert(firstName+' is a '+job +' his salary is also '+ $salary+' us dollar per year and is he married ? '+isMarried);

**************
//toLearn_2
//like  scanner function (java)

var lastName = prompt('please enter your lastName ');

    console.log(firstName+' '+lastName);
************+
Basic operators javascript


//math operators
var now,rakibYear,rakinYear,ageRakib,ageRakin;
now =2020;
ageRakib=32;
ageRakin=8;
rakibYear=(now-ageRakib);
rakinYear=(now-ageRakin);
console.log(rakibYear+' is rakib birthyear and rakin birthyear is '+rakinYear);

 console.log(now -4);
 console.log(now /8);
 console.log(now %2);

//logical operators.
var rakibOlder=ageRakib>ageRakin;
console.log('rakib is older then rakin '+rakibOlder);
var rakinolder=ageRakin>ageRakib;
console.log('rakin is older then rakib '+rakinolder);

// typeof operator

console.log(typeof now);
console.log(typeof 'rakin is my brother ');
console.log(typeof rakibOlder);

console.log(typeof rakinYear);


************


//operator precedence


var now =2020;
var birthYear=1988;
var fullage =18;
var rakibIsFullAge=(now-birthYear)>=fullage;

console.log(rakibIsFullAge);

var ageRakib=now-birthYear;
var ageRakin=10;
var avarage=(ageRakib+ageRakin)/2;
console.log(avarage);

//multiple operator

var s,a;
s=a = (3+5)*5-8;//8*5-8//32;
console.log(s,a);

//more operators

s=s*2;  //s*=2;

console.log(s);
s++; //s+=1;
console.log(s);
s--; //s
console.log (s);

***************************

   
//challenge_1;

var markMass=75;//kg
var markHeight=1.8;// meters
var markBMI=markMass/(markHeight * markHeight);
console.log(markBMI);

var johnMass=80;//kg
var johnHeight=1.70;//meters
var johnBMI=johnMass/(johnHeight * johnHeight);
console.log(johnBMI);


var markHigherBMI=markBMI>johnBMI;
console.log('is mark higherBMI then john : '+markHigherBMI);

var johnHigherBMI=johnBMI>markBMI;
console.log('is john higherBMI then mark : '+johnHigherBMI);

******************************
 

//if /else statements.

var firstName = 'rakib';
var civilstatus= 'single';

if(civilstatus === 'married'){
    console.log(firstName+' is married');
}else{
    console.log(firstName+' is hopefully marry soon !!' );
}

var rakibMarried= true;

if(rakibMarried){
    console.log(firstName+' is married');
}else{
    console.log(firstName+' is hopefully marry soon !!' );
}
************************


var markMass=95;//kg
var markHeight=1.8;// meters
var markBMI=markMass/(markHeight * markHeight);
console.log(markBMI);

var johnMass=80;//kg
var johnHeight=1.70;//meters
var johnBMI=johnMass/(johnHeight * johnHeight);
console.log(johnBMI);



if (markBMI>johnBMI){
    console.log('mark\'s BMI is higher then John\'s');
    }
else{
    console.log('john\'s BMI is higher then mark\'s ');
}

***********************

//Boolean logic

var firstName = 'Rakin';
var age = 30;

if (age<13){
    console.log('Rakin is a boy');
    }else if(age>=13 && age<20){
        console.log('Rakin is a teenager ');
    }else if(age>=20 && age< 30){
        console.log('Rakin is a young man ');
    }else{
    console.log('Rakin is an adualt man');
}
    
********************
    // the ternary operator and switch statements
    

var firstName = 'Adnan';

var age =45;

age>=18 ? console.log(firstName+' drinks beer'):console.log(firstName+' drinks juice');
var drink = age>= 18 ? 'beer':'juice';
console.log (drink);

// switch statement 

var job= 'instructor';

switch(job){
    case 'teacher':
    case'instructor':
        console.log(firstName+'teaches kids coding ');
        break;
    case'driver':
        console.log(firstName+'drives an Uber in bangladesh');
        break;
    case 'disgner':
        console.log(firstName+'disgns the beautiful website');
        break;
        
    default:
        console.log(firstName+'does somethings other');
}


 age =21;
switch(true){
    case age<13 :
        console.log('rakin is a boy ');
        break;
    case age>=13 && age<20:
        console.log('Rakin is a teenager ');
        break;
    case age>=20 && age<30:
        console.log ('Rakin is a young man');
        break;
    default:
        console.log('Rakin is an adualt man');
}



// falsy value : null,' ',undefined,0;


var   height ;


height= 0;


if (height||height == 0) {
    console.log('variable is defined');
     }
else{
    console.log ('variable isn\'t defined(undefined)');
}



if (height=='22'){
    console.log ('the == operator does type coercion ');
}
    
*****************
  
var scoreJohn=(89+120+103)/3;
var scoreMike=(116+94+123)/3;
var scoreMary=(97+134+105)/3;

console.log(scoreJohn,scoreMike,scoreMary);



if (scoreJohn>scoreMike && scoreJohn>scoreMary){
    console.log('John\'s team wins with '+scoreJohn+' points');
    }else if (scoreMike>scoreJohn && scoreMike>scoreMary){
    console.log('mike\'s team wins with '+scoreMike+' points');
}else if (scoreMary>scoreJohn && scoreMary>scoreMike){
     console.log('mary\'s team wins with '+scoreMary+' points');
}else{
    console.log('there is a draw');
}

**********************


// function 


function calculateAge(birthYear){
    return 2020- birthYear;   
}
var rakibAge= calculateAge(1988);
var evaAge= calculateAge(2002);
var humayraAge= calculateAge(1997);

console.log(rakibAge,evaAge,humayraAge);


function yearsUntilRetirement(birthYear,firstName){
    
    var recentYear=2020;
   
    var age = calculateAge(birthYear);
    var retirement=65-age;
     var retirementYear=2020+retirement;
    var pastYear=recentYear-retirementYear;
    if(retirement>0){
         console.log(firstName+' retires almost '+retirement+' years leter in '+retirementYear);
       }else{
           console.log(firstName+' is already retired in '+retirementYear+'  olmost '+pastYear
                       +' years ago ');
       }   
}

yearsUntilRetirement(1988,'rakib');
yearsUntilRetirement(1997,'humayra');
yearsUntilRetirement(2002,'eva');
yearsUntilRetirement(1960,'iqbal_kabir');
yearsUntilRetirement(1954,'harun_or_rasid');

*****************


// function declaration 
// function whatAreYouDo(jobs,firstName){}

//function  expressions
var whatAreYouDo= function(job,firstName){
    
    switch(job){
            
        case 'teacher':
            return firstName+ ' teaches kids coding in the school';
        case 'driver':
            return firstName+' drives a cab in Lisbon ';
        case 'designer':
            return firstName+ ' designs the beautiful websites ';
        default:
            return firstName+ ' does sometings other else ';
           
           }
    
}


console.log(whatAreYouDo('teacher','abdulla'));
console.log(whatAreYouDo('driver','rakib'));
console.log(whatAreYouDo('designer','shuvo'));

**********************
   

//  arrays in javascript

var studentsName = ['rakib','eva','rakin','humayra']; 
var year= new Array(1997,1988,2002,1998);
console.log(year[3]);


// mutate array data.
year [year.length]=2018;
console.log(year);
studentsName[2]='Abdulla';
console.log(studentsName);

// defferent data type 
 
var kafi = ['khadija','ismail',2018,false,'business_man','kids'];


kafi.push('blue');
kafi.unshift('miss and mr ');
 console.log (kafi);

kafi.pop();
kafi.shift();
console.log (kafi);

/*var p =(kafi.indexOf('ismail'));
var sum = p + 2;
kafi[sum]= 'yahyah';
console.log(kafi);


console.log(kafi.indexOf(2018));

console.log (kafi.indexOf('eva'));

var about_Kafi=kafi.indexOf('business_man')===-1 ? 'kafi is now not a business man ':'kafi is a business man ';

console.log(about_Kafi);


*************************


// tipcalculator 

function tipcalculator(bill){
    var parsentage;
    if (bill<50){
        parsentage=0.2;
        }else if (bill>=50 && bill<=200){
            parsentage=0.15;
        }else{
            parsentage=0.1;
        }
    return parsentage*bill;
}


var bills=[124,48,268];
console.log(bills)
var tips=[tipcalculator(bills[0]),
          tipcalculator(bills[1]),
          tipcalculator(bills[2])];
console.log(tips);

var tipsAndBills=[tips[0]+bills[0],
                 tips[1]+bills[1],
                 tips[2]+bills[2]]



console.log(tipsAndBills);

*****************
   
// objects and properties


// objects literal 

var rakib={
    
    fistName:'abdulla',
    lastName:'rakib',
    married:true,
    family:['eva','humayra','rakin','iqbal_kabir','ma'],
    job:'software engineer',
    birthYear:1988
   
};
console.log(rakib);
//mutate data
rakib.fistName='abi_abdulla';
console.log(rakib.family[3]);
console.log(rakib.fistName);
//mutate data
 rakib.job='webappsDeveloper';


// new objects syntax

var humayra = new Object();
humayra.firstName='humayra';
humayra.birthYear=1997;
humayra.lastName='Akter';
humayra.family=['kafi','ibrahim','mosharaf','rizia','rakib','marjana'];
console.log(humayra);

*************************
      

// objects and methods


var rakib={
    
    fistName:'abdulla',
    lastName:'rakib',
    married:true,
    family:['eva','humayra','rakin','iqbal_kabir','ma'],
    job:'software engineer',
    birthYear:1988,
    calcAge:function(){
        
       this.ageNow =2020-this.birthYear;
    }
};

rakib.calcAge();
console.log(rakib);




var john ={
    fullName:'john smith',
    mass:110,
    height:1.95,
    calcate: function(){
        this.jBMI = this.mass/(this.height*this.height);
        return this.jBMI;
    }
}

var mark ={
    fullName:'mark miller',
    mass:78,
    height:1.69,
    calcate: function(){
        this.mBMI = this.mass/(this.height*this.height);
        return this.mBMI;
    }
}


console.log(john,mark);

if (john.calcate()>mark.calcate()){
    console.log(john.fullName+' has higher BMI of '+john.BMI);
}else if (mark.mBMI>john.jBMI){
    console.log(mark.fullName+' has higher BMI of '+mark.mBMI)
}else{
    console.log('both are equal ');
}

*****************

// loops and iteration



var kafi = ['khadija','ismail',2018,false,'business_man','kids'];
for (var i= 0;i<3;i++){
    console.log(kafi[i]);
}

var i =0;
while(i<kafi.length){
    console.log(kafi[i]);
    i++;
}
*******************

    //continue and break statements




var kafi = ['khadija','ismail',2018,false,'business_man','kids'];


for (var i= 0;i<kafi.length;i++){
    if (typeof kafi[i] !== 'string')continue;
         console.log(kafi[i]);
     // !== it's not different from string;
    //  === it's different from string;
   
    
}


for (var i= 0;i<kafi.length;i++){
    if (typeof kafi[i] === 'string')break;
         console.log(kafi[i]);
     // !== it's not different from string;
    //  === it's different from string;
   
}
***********************
*/

var rakib = {
    fullName : 'abdulla al Rakib',
    bills:[124,48,42,268,180],
    calctips : function(){
      this.tip=[];
      this.totalValue=[]; 
        
        for (var i=0;i<this.bills.length;i++){
            
            var persentage;
            var bill= this.bills[i];
            if (bill<50){
                persentage=0.2;
                }else if (bill>=50 && bill <200){
                persentage=0.15;
                }else{
                persentage=0.10;
            }
           
            this.tip[i]=bill*persentage;
            this.totalValue[i]=bill+this.tip[i];
            
        }
    }
    
};



var rakin = {
    fullName : 'abdulla al rakin',
    bills:[77,375,110,45],
    calctips : function(){
      this.tip=[];
      this.totalValue=[]; 
        
        for (var i=0;i<this.bills.length;i++){
            
            var persentage;
            var bill= this.bills[i];
            if (bill<100){
                persentage=0.2;
                }else if (bill>=100 && bill <=300){
                persentage=0.1;
                }else{
                persentage=0.25;
            }
           
            this.tip[i]=bill*persentage;
            this.totalValue[i]=bill+this.tip[i];
            
        }
    }
    
};

function  calcAvarage(tips){
    var sum=0;
    for (var i =0;i<tips.length;i++){
         sum = sum+tips[i];
    }
       return sum/tips.length;
    }


rakib.calctips();
rakin.calctips();
rakib.avarage=calcAvarage(rakib.tip);
rakin.avarage=calcAvarage(rakin.tip);
console.log(rakib,rakin);


if (rakib.avarage>rakin.avarage){
    console.log(rakib.fullName+'\'s famaliy pays higher tips with an avarage of '+ rakib.avarage);
}else if (rakin.avarage>rakib.avarage) {
    console.log(rakin.fullName+'\'s famaliy pays higher tips with an avarage of '+ rakin.avarage);
}else{
    console.log(rakib.fullName+'\'s famaliy and '+rakin.fullName+'\'s famaliy pay same tips an avarage');
}





































