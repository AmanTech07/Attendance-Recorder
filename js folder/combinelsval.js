function val(){
function validateemail()  
{  
var x=document.getElementById(e).value;  
var atposition=x.indexOf("@");  
var dotposition=x.lastIndexOf(".");  
if (atposition<1 || dotposition<atposition+2 || dotposition+2>=x.length)
{  
  alert("Please enter a valid e-mail address \n atpostion:"+atposition+"\n dotposition:"+dotposition); 
  x.style.border="solid 3px red";
  return false;
  }  
  else{
    true;
    x.style.border="solid 3px green";
  }
}

function validatepass()
{
    var p=document.getElementById(pass).value;
    if(pass.value.match(/[0-9]/))
    {
        return true;
    }
    else
    {
        alert("Password must contain number");
    }
    if(pass.value.match(/[A-Z]/))
    {
        return true;
    }
    else
    {
        alert("Password must contain upper case value");
    }
    if(pass.value.match(/[a-z]/))
    {
        return true;
    }
    else
    {
        alert("Password must contain lower case value");
    }
    if(pass.value.match(/[!\@\#\$\%\^\&\*\(\)\_\-\+\=\.]/))
    {
        return true;
    }
    else
    {
        alert("Password must contain special character");
    }
    if(pass.length<7)
    {
        alert("Password length is too short");
    }
}

}