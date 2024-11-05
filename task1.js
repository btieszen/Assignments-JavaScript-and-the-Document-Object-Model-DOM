document.getElementById("taskForm").addEventListener("submit",function(event){
    event.preventDefault();

    /*let products = [
        { name: "Laptop", price: 999.99, description: "Powerful computing on the go" },
        { name: "Smartphone", price: 699.99, description: "Stay connected wherever you are" },
        { name: "Headphones", price: 149.99, description: "Immersive audio experience" }
    ];*/

    let item1=("NAME: Laptop,  PRICE: 999.99,  DESCRIPTION: Powerful computing on the go");
    let item2=("NAME: Smartphone, PRICE: 699.99, DESCRIPTON: Stay connected wherever you are");
    let item3=("NAME: Headphones, PRICE: 149.99, DESCRIPTION: Immersive audio experience");                                            


document.getElementById("orderInfo").innerHTML = `${item1}<br>
${item2}<br>
${item3}`;
                                                            
})
