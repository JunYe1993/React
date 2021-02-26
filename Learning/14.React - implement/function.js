export function inject_CSS_File(href) {
    return new Promise((resolve, reject) => {
        const link = document.createElement('link')
        link.setAttribute("rel", "stylesheet")
        link.setAttribute("type", "text/css")
        link.onload = () => resolve()
        link.onerror = () => reject()
        link.setAttribute("href", href)
        document.head.appendChild(link)
    })
}