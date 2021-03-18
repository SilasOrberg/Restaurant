const loadFront = () => {
    document.getElementById('content').innerHTML = 
        `<img id="front-image" src="https://spiseliv.dk/images/content/banner/5-gode-restauranter-i-helsingoer_2.jpg" alt="restaurant">¨
         <h1>This is a beautiful restaurant!</h1>
         <p>Few restaurants will leave you in awe for days. But this is one of the few.</p>`
}

export {
    loadFront
}