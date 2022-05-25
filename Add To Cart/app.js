let count = 0;

const value = document.getElementById('value');
const btns = document.querySelectorAll('.fa')

btns.forEach(function (fa) {
    fa.addEventListener('click', function (e) {
        const styles = e.currentTarget.classList
        if (styles.contains('fa-minus-circle')) {
            count--
        } else if (styles.contains('fa-plus-circle')) {
            count++
        } else {
            count = 0
        }

        value.textContent = `Quantity of Items = ${count}`

        if (count < 0) {
            value.textContent = `Quantity of Items = 0`;
            count = 0
        }
    })
})