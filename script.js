const body = document.querySelector('body')
const button = document.querySelector('button')
const text = document.querySelector('h1')

const hex= '0123456789abcdef';

button.addEventListener('click' , () => {
    color = '#'
    for (let i = 0; i < 6; i++) {
        let randomNumber = Math.floor(Math.random() * hex.length);
        color += hex.substring(randomNumber, randomNumber +1);
    }
    
    const hexToRgb = hex =>
    hex.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i
               ,(m, r, g, b) => '#' + r + r + g + g + b + b)
      .substring(1).match(/.{2}/g)
      .map(x => parseInt(x, 16))


    const red = hexToRgb(color)[0]
    const green = hexToRgb(color)[1]
    const blue = hexToRgb(color)[2]

    console.log(red*0.299 + green*0.587 + blue*0.114)
    if((red*0.299 + green*0.587 + blue*0.114) > 158){
        button.style.color = '#000000'
        text.style.color = '#000000'
    } else{
        button.style.color = '#ffffff'
        text.style.color = '#ffffff'
    }
    
    body.style.backgroundColor = color
    button.style.backgroundColor = color
    text.textContent = `${color}, rgb(${red}, ${green}, ${blue})`
})


