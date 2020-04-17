export const renderSampel = () =>{

    const x = `
    <spam>Test text 1</spam>
    <h2>Test text 2</h2>
    `;

    document.body.insertAdjacentHTML("beforeend",x)
    // Please read more about insertAdjacentHTML in MDM
    // https://developer.mozilla.org/pl/docs/Web/API/Element/insertAdjacentHTML
}

