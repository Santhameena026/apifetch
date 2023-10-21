fetch("https://jsonplaceholder.typicode.com/comments")
.then((response) => response.json())
.then((data) => {
    const jsonData = document.getElementById("apiData");

    data.map((dataitem) => {
        const listitem = document.createElement("li");
        listitem.style.listStyleType="none";
        listitem.textContent = `Name: ${dataitem.name} , Email: ${dataitem.email}, Body: ${dataitem.body}`;
        jsonData.appendChild(listitem);
        const br = document.createElement("br");
        jsonData.appendChild(br);
       
    });
})
.catch((error) => {
    console.error("Error fetching data:", error);
});
