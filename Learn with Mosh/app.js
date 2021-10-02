const collapsible = document.querySelectorAll('.collapsible');
collapsible.forEach(collapsible => {
    collapsible.addEventListener('click', function () {
        this.classList.toggle('collapsible--expanded');
    });
});