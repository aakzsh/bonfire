const goBtn = document.querySelector('.go-btn');
const urlInput = document.querySelector('.url-input')



goBtn.addEventListener('click', (e) => {
    e.preventDefault();
    const value = urlInput.value
    const url = value.split("=")[1]

    const current_url = window.location.href

    const redirect_url = current_url+'bonfire.html?url='+url
    window.location.href = redirect_url
})
