const scriptURL = 'https://script.google.com/macros/s/AKfycbw5HiPM6Lh9lLGuJzX6U2-NK85YR0QpHW0iRNMX66EUz6ah0L8fQW0gJLU-I2VHvnl4VA/exec'
const form = document.forms['portfolio']
const btnKirim = document.querySelector(".btn-send")
const btnLoading = document.querySelector(".btn-loading")
const btn = document.querySelector(".btn-loading")
const myAlert = document.querySelector(".my-alert")

form.addEventListener('submit', e => {
    e.preventDefault()


    // Munculkan tombol loading //hilangkan tombol kirim
    btnLoading.classList.toggle("d-none")
    btnKirim.classList.toggle("d-none")






    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
        .then(response => {
            console.log('Success!', response)
            // Munculkan tombol kirim //hilangkan tombol loading
            btnLoading.classList.toggle("d-none")
            btnKirim.classList.toggle("d-none")
            // tampilkan alert saat sudah selesai di submit
            myAlert.classList.toggle("d-none")
            // reset formnya
            form.reset();
        })
        .catch(error => console.error('Error!', error.message))
})

