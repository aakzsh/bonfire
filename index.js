const goBtn = document.querySelector('.go-btn');
const urlInput = document.querySelector('.url-input')



goBtn.addEventListener('click', (e) => {
    e.preventDefault();
    const value = urlInput.value
    const url = value.split("=")[1]

    const current_url = window.location.href;
    console.log(current_url)
const len = current_url.length;
    const redirect_url = current_url.substring(0,len-9)+'bonfire.html?url='+url
    window.location.href = redirect_url
})