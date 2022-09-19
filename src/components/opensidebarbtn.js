import {wolframIconSVG} from "../icons";

const createOpenSidebarBtn = () => {
    const openCanvasBtn = document.createElement("button")
    openCanvasBtn.classList.add("btn", "btn-sm", "position-fixed", "end-0", "m-3", "sketch-lined-thin", "is-drawn")
    openCanvasBtn.style.top = "100px"
    openCanvasBtn.style.zIndex = "1000"
    openCanvasBtn.innerHTML = `${wolframIconSVG}`
    openCanvasBtn.id = "openOffCanvas"
    openCanvasBtn.setAttribute("data-bs-toggle", "offcanvas")
    openCanvasBtn.setAttribute("data-bs-target", "#offcanvasRight")
    openCanvasBtn.setAttribute("aria-controls", "offcanvasRight")
// openOffCanvas.style.background = "transparent"
// openOffCanvas.style.border = "none"
    openCanvasBtn.style.outline = "none"
    openCanvasBtn.style.boxShadow = "none"
    openCanvasBtn.style.transition = "0.5s"
    openCanvasBtn.classList.add("sketch-lined-thin")
// make openOffCanvas  animation when hover it

    return openCanvasBtn
}

const createTooltip = ()=>{
    const tooltip = document.createElement("div")
    tooltip.classList.add("tooltip", "position-fixed", "end-0", "m-3", "sketch-lined-thin")
    tooltip.style.top = "70px"
    tooltip.style.zIndex = "1000"
    tooltip.style.background = "black"
    tooltip.style.color = "white"
    tooltip.style.padding = "5px"
    tooltip.style.borderRadius = "5px"
    tooltip.style.transition = "0.5s"
    tooltip.style.visibility = "hidden"
    tooltip.style.opacity = "0"
    tooltip.style.transform = "translateX(100%)"
    tooltip.style.transition = "0.5s"
    tooltip.innerHTML = "Open Wolfram Panda side bar by click here"
    return tooltip
}
export {createOpenSidebarBtn, createTooltip}
