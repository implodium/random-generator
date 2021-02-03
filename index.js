window.addEventListener('load', () => {

    function deleteSelf() {
        this.remove()
    }

    function displayRandom(text) {
        const generationOverlay = document.querySelector('#random-number-overlay')
        const generationNumberField = document.querySelector("#random-number-container")

        generationNumberField.textContent = text;
        generationOverlay.style.display = "flex";
        setTimeout(() => {
            generationNumberField.style.transform = "rotate(+360deg)";
            generationNumberField.style.fontSize = "20vh";
            generationOverlay.style.opacity = "1";
        }, 20)
    }

    function addRandomWord() {
        const wordField = document.querySelector('#word-field')
        if (wordField.value.trim() !== "") {
            const currentWordContainer = document.querySelector('#current-words')

            const newWordElement = document.createElement('div')
            newWordElement.classList.add('current-word')
            newWordElement.textContent = wordField.value;
            newWordElement.addEventListener('click', deleteSelf)
            wordField.value = ""
            currentWordContainer.appendChild(newWordElement)
        }
    }

    document
        .querySelector("#generate-button-number")
        .addEventListener('click', () => {
            const numberField = document.querySelector('#number-field');
            let randomNumber =  Math.trunc( 1 + Math.random() * numberField.value);
            displayRandom(randomNumber)
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

    const randomTypes = ["number", "word"]

    randomTypes.forEach(randomType => {
        document
            .querySelector(`#t-nav-random-${randomType}`)
            .addEventListener('click', () => {
                const tContainer = document.querySelector(`#t-random-${randomType}`)
                let tNav = document.querySelector(`#t-nav-random-${randomType}`)
                let otherTypes = randomTypes.slice();
                otherTypes.splice(otherTypes.indexOf(randomType), 1)

                tContainer.style.display = "flex"
                tNav.style.color = "grey"
                otherTypes.forEach(otherType => {
                    let tOtherContainer = document.querySelector(`#t-random-${otherType}`)
                    let tOtherNav = document.querySelector(`#t-nav-random-${otherType}`)

                    tOtherNav.style.color = "black"
                    tOtherContainer.style.display = "none"
                })
            });
    })

    document
        .querySelector('#submit-word')
        .addEventListener('click', () => {
            addRandomWord()
        })

    document
        .querySelector("#generate-button-word")
        .addEventListener('click', () => {
            const currentWords = document.querySelector('#current-words')
            let randomNumber =  Math.trunc( 1 + Math.random() * currentWords.children.length);
            displayRandom(currentWords.children[randomNumber - 1].textContent)
        })

    document
        .querySelector('#word-field')
        .addEventListener('keydown', evt => {
            if (evt.keyCode === 13) {
                addRandomWord()
            }
        })
})
