const loadMenuPage = () => {
    document.getElementById('content').innerHTML = 
        `<img id="front-image" src="https://res.cloudinary.com/sanitarium/image/fetch/q_auto/https://www.sanitarium.com.au/getmedia%2Fae51f174-984f-4a70-ad3d-3f6b517b6da1%2Ffruits-vegetables-healthy-fats.jpg%3Fwidth%3D1180%26height%3D524%26ext%3D.jpg">¨
         <h1>Here you will find our menu!</h1>
         <p>It's not easy being this good in the kitchen.</p>`
}

export {
    loadMenuPage
}