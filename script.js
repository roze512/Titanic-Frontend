document.addEventListener("DOMContentLoaded", () => {

    const form = document.querySelector("form");

    form.addEventListener("submit", async (e) => {

        e.preventDefault();

        const button = document.querySelector("button");
        button.innerHTML = "⏳ Predicting...";
        button.disabled = true;


        const data = {

            pclass: document.querySelector('[name="pclass"]').value,

            sex: document.querySelector('[name="sex"]').value,

            age: document.querySelector('[name="age"]').value,

            sibsp: document.querySelector('[name="sibsp"]').value,

            parch: document.querySelector('[name="parch"]').value,

            fare: document.querySelector('[name="fare"]').value,

            embarked: document.querySelector('[name="embarked"]').value

        };


        try {

            const response = await fetch(
                "https://titanic-decision-tree-ai.onrender.com/predict",
                {

                    method:"POST",

                    headers:{
                        "Content-Type":"application/json"
                    },

                    body:JSON.stringify(data)

                }
            );


            const result = await response.json();


           document.getElementById("resultBox").style.display = "block";

document.getElementById("predictionText").innerHTML = result.prediction;

document.getElementById("confidenceText").innerHTML = result.confidence;

document.getElementById("confidenceBar").style.width =
result.confidence + "%";

document.getElementById("confidenceBar").innerHTML =
result.confidence + "%";

// Change icon and color
if (result.prediction === "Survived ✅") {

    document.getElementById("resultIcon").innerHTML = "🟢";
    document.getElementById("resultBox").className = "result success";

} else {

    document.getElementById("resultIcon").innerHTML = "🔴";
    document.getElementById("resultBox").className = "result danger";

}


        }

        catch(error){

            alert("Backend connection error");

            console.log(error);

        }


        button.innerHTML="Predict Survival";
        button.disabled=false;

    });
...

button.innerHTML="Predict Survival";
button.disabled=false;

});

// Reset Button

document.getElementById("resetBtn").addEventListener("click", () => {

    form.reset();

    document.getElementById("resultBox").style.display = "none";

    document.getElementById("confidenceBar").style.width = "0%";

    document.getElementById("confidenceBar").innerHTML = "0%";

});


});