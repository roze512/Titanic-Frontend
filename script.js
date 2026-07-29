async function predict(){

    let data = {

        pclass: document.getElementById("pclass").value,

        sex: document.getElementById("sex").value,

        age: document.getElementById("age").value,

        sibsp: document.getElementById("sibsp").value,

        parch: document.getElementById("parch").value,

        fare: document.getElementById("fare").value,

        embarked: document.getElementById("embarked").value

    };


    let response = await fetch(
        "https://titanic-decision-tree-ai.onrender.com",
        {
            method:"POST",

            headers:{
                "Content-Type":"application/json"
            },

            body: JSON.stringify(data)

        }
    );


    let result = await response.json();


    document.getElementById("result").innerHTML =

    `
    <h2>${result.prediction}</h2>
    <p>Confidence: ${result.confidence}%</p>
    `;

}