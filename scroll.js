addEventListener("DOMContentLoaded", (event) => {
    const fullTitle = document.title
    let titleWagon = []

    for (letter of fullTitle) {
        titleWagon.push(letter)
    }

    setInterval(() => {
        let overrideLetter
        let resultString = String()
        for (let i = 0; i < titleWagon.length; i += 1) {
            if (overrideLetter == undefined) {
                overrideLetter = titleWagon[(i + 1) % titleWagon.length]
                titleWagon[(i + 1) % titleWagon.length] = titleWagon[i] 
            }
            else {
                const newOverrideLetter = titleWagon[(i + 1) % titleWagon.length]
                titleWagon[(i + 1) % titleWagon.length] = overrideLetter    
                overrideLetter = newOverrideLetter
            }  
            resultString += titleWagon[(i + 1) % titleWagon.length]
        }

        document.title = resultString
    }, 500)
})