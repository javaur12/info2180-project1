/* JavaScript to this file */

function checkforblank()
{
    if(document.getElementById('email').value==""){

      /* if email field is empty the following message will display */

  alert("Please enter a valid email address");
  return false;

    }
    else{
        var evalue=document.getElementById('email').value;

              /* email entered will store in evalue and following message will display */

        alert("Thank you! Your email address "+ " " +  evalue + " "+ "  has been added to our mailing list !");
    }
} 

