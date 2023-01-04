const tipButtons = document.querySelectorAll('.tip-button')
const peopleInput = document.querySelector('#peopleInput'),
      customInput = document.querySelector('#customInput'),
      resetButton = document.querySelector('.reset-button'),
      numbers = document.querySelectorAll('.number'),
      billInput = document.querySelector('#billInput'),
      inputs = document.getElementsByTagName('input'),
      error = document.querySelectorAll('.error')

let content = 0
tipButtons.forEach((item) => {
    item.addEventListener('click', function() {
        tipButtons.forEach(tipButtons=>tipButtons.classList.remove("active"))
        if (billInput.value == '' || billInput.value.match(correct)) { 
            error[0].style.display = 'block'
        }else {
            this.classList.add("active")
            numbers[2].innerHTML = `
                ${(parseFloat(billInput.value) * parseFloat(item.value) / 100).toFixed(2)}
            `
            content = parseFloat(numbers[2].innerHTML) 
            error[0].style.display = 'none'
        }
    })
})


const correct = /[abcdefghijklmnopqrstuvwxyz]/

peopleInput.addEventListener('input', () => {
    if (peopleInput.value.match(correct)) {
        error[1].style.display = 'block'
    } else {
        numbers[3].innerHTML = `
        ${parseFloat(content / peopleInput.value)}
        `
        error[1].style.display = 'none'
    }
    
})
resetButton.addEventListener('click', () => {
    numbers.forEach(number => {
        number.value = ''
    })

    tipButtons.forEach(item => {
        item.classList.remove('active')
    })

    numbers[2].innerHTML = '$0'
    numbers[3].innerHTML = '$0'
})

customInput.addEventListener('input', () => {
    numbers[2].innerHTML = `
        ${billInput.value / customInput.value}
    `
})

