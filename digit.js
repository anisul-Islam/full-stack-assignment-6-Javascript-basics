function digitSpell() {
    let digit = Number(prompt('Enter a digit : '));

   
    if(digit === 0) 
        {
        document.getElementById("digit-spell").innerHTML = (`${digit} is  "ZERO"`);
        }
        
        else if ( digit === 2 )
           
       {
        document.getElementById("digit-spell").innerHTML = (`${digit} is " TWO " `);
        } 
        else if ( digit === 3 )
           
        {
        document.getElementById("digit-spell").innerHTML = (`${digit} is " THREE " `);
        } 
        else if ( digit === 4 )
           
        {
        document.getElementById("digit-spell").innerHTML = (`${digit} is " FOUR " `);
        }

        else if ( digit === 5 )          
        {
        document.getElementById("digit-spell").innerHTML = (`${digit} is " FIVE " `);
        } 
        else if ( digit === 6 )          
       {
        document.getElementById("digit-spell").innerHTML = (`${digit} is " SIX " `);
       }  
            
       else if ( digit === 7 )          
      {
       document.getElementById("digit-spell").innerHTML = (`${digit} is " SEVEN " `);
      }  
      else if ( digit === 8 )          
      {
      document.getElementById("digit-spell").innerHTML = (`${digit} is " EIGHT " `);
      }  
      else if ( digit === 9 )          
      {
      document.getElementById("digit-spell").innerHTML = (`${digit} is " NINE " `);
      } 
      else if ( digit === 10 )      
      {
        document.getElementById("digit-spell").innerHTML = (`${digit} is " TEN " `);
        } 
        
    else if ( digit === 11 )      
    {
    document.getElementById("digit-spell").innerHTML = (`${digit} is " ELAVEN " `);
    }  
      else {
    document.getElementById("digit-spell").innerHTML = (`${digit} CAN NOT CALCULATE DUE TO AN INITIAL CALCULATOR. `);
        };
 



}