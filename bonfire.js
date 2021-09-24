const ytSection = document.querySelector('.yt-video')


window.addEventListener('load', (e) => {
    const id = window.location.href.split("=")[1];
    console.log(ytSection)

    ytSection.innerHTML += `
        <div class="1">
            <embed width="315" height="315"
            src="https://www.youtube.com/embed/${id}">
            </embed> 
        </div>
    `
})