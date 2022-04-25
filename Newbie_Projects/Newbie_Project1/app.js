let RateValue = document.querySelectorAll('.SpanDiv button.rate')
let quantity = document.querySelector('#quantity')


//  By Focus Method
for (let i = 0; i < RateValue.length; i++) {
    RateValue[i].addEventListener('focus' , () => {
        quantity.innerHTML = `You Selected ${RateValue[i].innerHTML} out of 5` 
    });
}

//  By Click Method
// for (let i = 0; i < RateValue.length; i++) {
//     RateValue[i].addEventListener('click' , () => {
//         quantity.innerHTML = `You Selected ${RateValue[i].innerHTML} out of 5`
//     });
// }



let btn = document.querySelector('.btn')
btn.addEventListener('click' , () => {
    document.querySelector('.card').style.display = 'none';
    document.querySelector('.card1').style.display = 'block'
})
