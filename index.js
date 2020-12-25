window.addEventListener('load', () => {

    document
        .querySelector("#generate-button")
        .addEventListener('click', () => {
            const numberField = document.querySelector('#number-field');
            const generationOverlay = document.querySelector('#random-number-overlay')
            const generationNumberField = document.querySelector("#random-number-container")
            let randomNumber =  Math.trunc( 1 + Math.random() * numberField.value);


            generationNumberField.textContent = randomNumber.toString();
            generationOverlay.style.display = "flex";
            setTimeout(() => {
                generationNumberField.style.transform = "rotate(+360deg)";
                generationNumberField.style.fontSize = "20vh";
                generationOverlay.style.opacity = "1";
            }, 20)
        })

    document
        .querySelector('#random-number-overlay')
        .addEventListener('click', function() {
            const generationNumberField = document.querySelector("#random-number-container")
            this.style.opacity = "0"
            generationNumberField.style.fontSize = "0";
            generationNumberField.style.transform = "rotate(-360deg)";

            setTimeout(() => {
                this.style.display = "none"
            }, 1000)
        })
})
