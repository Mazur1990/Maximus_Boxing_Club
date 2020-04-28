import movie from '../images/movies/1.mp4'

export const Head = () =>{

    const x =(`
        <div class="video_container">
            <video id="video" autoplay loop  muted>
                <source src="${movie}" type="video/mp4" />
            </video>
        </div>
        <div id="titleText">
            <h1>Przygodę z boksem może rozpocząć każdy niezależnie od wieku!</h1>
        </div>
    `);
    
    document.getElementById('head').insertAdjacentHTML("beforeend",x)
    // Please read more about insertAdjacentHTML in MDM
    // https://developer.mozilla.org/pl/docs/Web/API/Element/insertAdjacentHTML
}

