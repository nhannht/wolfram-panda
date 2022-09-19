import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import {generateUIForGoogle} from "./src/google-helper";
import {createOpenSidebarBtn, createTooltip} from "./src/components/opensidebarbtn";
import {createInputSideBar, createSideBar, createSideBarBody, createSideBarHeader} from "./src/components/sidebar";
// Listener for full result query send from background, output will be rendered of offCanvas
chrome.runtime.onMessage.addListener(async (msg) => {
    if (msg.result) {
        const pods = JSON.parse(msg.result).queryresult.pods;
        const output = pods.map((pod) => {
            const subpodContent = pod.subpods.map(subpod =>
                `  <img  src="${subpod.img.src}" alt="${subpod.img.alt}">`
            ).join('\n');
            return `<div class="card mt-3  overflow-auto sketch-lined-thin">
<div class="card-body ">
<h5 class="card-title ">
${pod.title}</h5>
<br/>
${subpodContent}
</div>
</div>`;
        }).join('\n');
        sidebarBody.innerHTML =
            `${output}`
    }
    // Show offCanvas if it is hidden
});


// Listener for Google search
chrome.runtime.onMessage.addListener((msg) => {
    if (msg.google) {
        const appbar = document.querySelector("#appbar")
        console.log("We received google query")
        const resultJSON = JSON.parse(msg.google)
        //TODO deleteit
        console.log(resultJSON)
        const renderHTML = generateUIForGoogle(resultJSON)
        // console.log(renderHTML)
        appbar.innerHTML += renderHTML

    }
})
const openSidebarBtn =  createOpenSidebarBtn()
const tooltip = createTooltip()
document.body.appendChild(openSidebarBtn)
document.body.appendChild(tooltip)

openSidebarBtn.addEventListener("mouseover", () => {
        openSidebarBtn.style.transform = "scale(1.2)"
    })
openSidebarBtn.addEventListener("mouseout", () => {
        openSidebarBtn.style.transform = "scale(1)"
    })
openSidebarBtn.addEventListener("mouseover", () => {
        tooltip.style.visibility = "visible"
        tooltip.style.opacity = "1"
        tooltip.style.transform = "translateX(0)"
    })
openSidebarBtn.addEventListener("mouseout", () => {
        tooltip.style.visibility = "hidden"
        tooltip.style.opacity = "0"
        tooltip.style.transform = "translateX(100%)"
    })
const sidebar = createSideBar()
document.body.appendChild(sidebar)

const sidebarHeader  = createSideBarHeader()
const sidebarBody = createSideBarBody()
sidebar.appendChild(sidebarHeader)
sidebar.appendChild(sidebarBody)
