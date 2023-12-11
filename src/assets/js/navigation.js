(function () {
    function markLinkAsSelected(hash) {
        const links = document.querySelectorAll(`[wm-link]`)
        links.forEach(link => link.classList.remove('selected-item'))

        const link = document.querySelector(`[wm-link='${hash}']`)
        link.classList.add('selected-item')
    }

    function navigateWithAjax(hash) {
        if (!hash) return

        const link = document.querySelector(`[wm-link='${hash}']`)
        const destiny = document.querySelector('[wm-link-destiny]')

        const url = hash.substring(1)
        fetch(url)
            .then(resp => resp.text())
            .then(html => {
                destiny.innerHTML = html
                markLinkAsSelected(hash)
            })
    }

    function configureLinks() {
        document.querySelectorAll('[wm-link]')
            .forEach(link => {
                link.href = link.attributes['wm-link'].value
            })
    }

    function StartedNavigate() {
        if (location.hash) {
            navigateWithAjax(location.hash)
        } else {
            const firstLink = document.querySelector('[wm-link]')
            navigateWithAjax(firstLink.hash)
        }
    }

    window.onhashchange = event => navigateWithAjax(location.hash)
    
    configureLinks()
    StartedNavigate()
})()