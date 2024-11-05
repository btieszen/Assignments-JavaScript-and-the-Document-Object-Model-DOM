
document.getElementById("productRegistration").addEventListener("submit",function(event){
    event.preventDefault();
    
    let name=document.getElementById("name").value;

    let catagory=document.getElementById("catagory").value;
  
    let quanity=document.getElementById("quanity").value;

    let price=document.getElementById("price").value;
   
    document.getElementById("proRegistration").innerHTML = `<strong>OrderSummary:</strong><br>
            
                                                            <strong>Name: </strong>${name}<br>
                                                            <strong>Catagory: </strong>${catagory}<br>
                                                            <strong>Quanity: </strong>${quanity}<br>
                                                            <strong>Price:</strong>$${price}`;
});

btn.addEventListener("mouseenter", function( event ) {   
    event.target.style.color = "purple";
  }, false);
  btn.addEventListener("mouseleave", function( event ) {   
    event.target.style.color = "green";
  }, false);

  function changeImage(){
    const newImageSrc="pic2.webp";
    document.getElementById("image").src=newImageSrc;
}
function changeImage1(){
  const newImageSrc="pic1.webp";
  document.getElementById("image").src=newImageSrc;
}

function highlight(){
  document.getElementById("box").classList.add("highlighted");
}

