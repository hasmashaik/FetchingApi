async function getData() {
    try {
        let response = await fetch('https://fakestoreapi.com/products'); // Await added here
        let data = await response.json();   // Now this works correctly
        data.forEach(element => {
            let d = document.createElement("div");
            d.classList.add("item")
            d.innerHTML = ` <p>${element.title}</p>
                <img src="${element.image}" alt="${element.title}" />
                <h3>Price: $${element.price}</h3>
            `
            document.getElementById("items").appendChild(d);
        });
        console.log(data);
    } catch (error) {
        console.log(error);
    }
}
getData()


