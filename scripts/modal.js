fetch("modal.html")
    .then(response => response.text())
    .then(data => {
        // Insert modal into the DOM
        document.body.insertAdjacentHTML("beforeend", data);

        // Add event listeners after injecting modal content
        document.getElementById("startButton").addEventListener("click", function() {
            document.getElementById("popup").style.display = "flex";
        });

       

        document.getElementById("okButton").addEventListener("click", function() {
            window.location.href = "questions.html";
        });
        
    })
    .catch(error => console.error("Error loading the modal:", error));
