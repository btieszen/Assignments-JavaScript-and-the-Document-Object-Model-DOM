document.getElementById("myButton").addEventListener("click",function(){
    alert("Information Saved");
    
    let name=document.getElementById("name").value;
   
    let email=document.getElementById("email").value;
    
    let message=document.getElementById("message").value;
    document.getElementById("orderInfo").innerHTML = `<strong>Information:</strong><br>,${name},${email},${message}`;
});