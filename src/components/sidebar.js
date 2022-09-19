import {wolframIconSVG} from "../icons";

const createSideBar = () => {
    const sidebar = document.createElement("div")
    sidebar.classList.add("offcanvas", "offcanvas-end", "sketch-lined-thin")
    sidebar.setAttribute("tabindex", "-1")
    sidebar.setAttribute("id", "offcanvasRight")
    sidebar.setAttribute("aria-labelledby", "offcanvasRightLabel")
    sidebar.setAttribute("data-bs-scroll", "true")
    sidebar.style.overflowY = "scroll"
    sidebar.style.width = "45%"
    return sidebar
}
const createSideBarHeader = () => {
    const sidebarHeader = document.createElement("div")
    sidebarHeader.classList.add("offcanvas-header", "border-bottom")
    sidebarHeader.innerHTML = `${wolframIconSVG} `
    sidebarHeader.appendChild(createInputSideBar())
    sidebarHeader.appendChild(createCloseBtn())

    return sidebarHeader
}

const createSideBarBody = () => {
    const sidebarBody = document.createElement("div")
    sidebarBody.classList.add("offcanvas-body")
    sidebarBody.style.zIndex = "2147483647"
    return sidebarBody
}
const createInputSideBar = () => {

    const inputFreeStyle = document.createElement("input")
    inputFreeStyle.id = "inputFreeStyle"
    inputFreeStyle.classList.add("form-control", "form-control-sm", "sketch-lined-thin","ms-5","me-3")
    inputFreeStyle.setAttribute("type", "text")
    inputFreeStyle.setAttribute("placeholder", "Enter to search")
    inputFreeStyle.addEventListener("keyup", (e) => {
        if (e.key === "Enter") {
            e.preventDefault()
            chrome.runtime.sendMessage({"freeStyleQuery": inputFreeStyle.value})
        }
    })
    return inputFreeStyle
}
const createCloseBtn = () => {

    const closeBtn = document.createElement("button")
    closeBtn.classList.add("btn", "btn-close","btn-sm", "end-0", "m-3")
    closeBtn.setAttribute("data-bs-dismiss", "offcanvas")
    closeBtn.setAttribute("aria-label", "Close")
    return closeBtn
}
export {createSideBar, createSideBarHeader, createInputSideBar, createSideBarBody}
