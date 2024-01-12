const form = document.querySelector('form')

// this usecase will give you empty value
// const height = parseInt(document.querySelector('#height').value)

form.addEventListener('submit', function(e){
    e.preventDefault()

    const height = parseInt(document.querySelector('#height').value)
    const weight = parseInt(document.querySelector('#weight').value)
    const results = document.querySelector('#results')

    if (height === '' || height < 0 || isNaN(height)) {
        results.innerHTML = `please give a valid height ${height}`;
    }else if (weight === '' || weight < 0 || isNaN(weight)) {
        results.innerHTML = `please give a valid weight ${height}`;
    }else {
        const bmi = (weight / ((height*height)/10000)).toFixed(2)
        results.innerHTML = `<span>${bmi}</span>`
    }



})