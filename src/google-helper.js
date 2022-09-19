// generate custom result for google search
const generateUIForGoogle = (json) => {
    const nav = document.createElement("nav");
    nav.classList.add("nav");
    // REturn result
    const pods = json.queryresult.pods;
    const tabbars = pods.map((pod) => {
        const title = pod.title;
        const id = pod.id.replace(/:/g, '_');
        return `<a class="nav-link" data-bs-toggle="collapse"  id="${id}-tab" href="#${id}Content">${title}</a>`
    }).join('\n');
    const tabContent = pods.map((pod) => {
        const subpodContent = pod.subpods.map(subpod =>
            `<img src="${subpod.img.src}" alt="${subpod.img.alt}">`
        ).join('\n');
        const title = pod.title;
        const id = pod.id.replace(/:/g, '_');
        return ` <div class="tab-pane fade collapse sketch-lined-thin " id="${id}Content" role="tabpanel" aria-labelledby="${id}-tab">
<h3>${title}</h3><br/>
            ${subpodContent}
        </div>`
    }).join('\n');
    return "<nav class='nav'>" + tabbars + "</nav>"   + tabContent
}
export { generateUIForGoogle }
