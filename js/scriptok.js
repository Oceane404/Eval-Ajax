document.querySelector("button").addEventListener("click", () => {

    let character = document.querySelector("input").value;

    fetch(`https://swapi.co/api/people/${character}`)

    .then((response) => {
        response.json()
        .then((data) => {

       
        document.querySelector("main").innerHTML = '';
        
        
        let tableElement = document.createElement("table");
        document.querySelector("main").appendChild(tableElement);

        
        let theadElement = document.createElement("thead");
        tableElement.appendChild(theadElement);
        
        
        let trElement1 = document.createElement("tr");
        theadElement.appendChild(trElement1);

      
        let thElement1 = document.createElement("th");
        let thElement2 = document.createElement("th");
        let thElement3 = document.createElement("th");
        let thElement4 = document.createElement("th");
        let thElement5 = document.createElement("th");
        
        

        
        thElement1.innerHTML = "Name";
        thElement2.innerHTML = "Gender";
        thElement3.innerHTML = "Height";
        thElement4.innerHTML = "Eye_color";
        thElement5.innerHTML = "Species";
    

        trElement1.appendChild(thElement1);
        trElement1.appendChild(thElement2);
        trElement1.appendChild(thElement3);
        trElement1.appendChild(thElement4);
        trElement1.appendChild(thElement5);
       
        

        
        let tbodyElement = document.createElement("tbody");
        tableElement.appendChild(tbodyElement);

        
        let trElement2 = document.createElement("tr");
        tbodyElement.appendChild(trElement2);

        let tdElement1 = document.createElement("td");
        let tdElement2 = document.createElement("td");
        let tdElement3 = document.createElement("td");
        let tdElement4 = document.createElement("td");
        let tdElement5 = document.createElement("td");
        

        tdElement1.innerHTML = data.name;
        tdElement2.innerHTML = data.gender[0].gender.name;
        tdElement3.innerHTML = data.height[0].height.name;
        tdElement4.innerHTML = data.eye_color[0].eye_color.name;
        tdElement5.innerHTML = data.species[0].species.name;
           
    
        
        trElement2.appendChild(thElement1);
        trElement2.appendChild(thElement2);
        trElement2.appendChild(thElement3);
        trElement2.appendChild(tdElement4);
        trElement2.appendChild(tdElement5);
    
        })
    })
});