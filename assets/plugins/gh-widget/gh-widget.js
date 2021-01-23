const r = new XMLHttpRequest();
const widget = document.getElementById('github-widget');
let username, pathname = location.pathname.split('/');
if (widget.dataset.user)
    username = widget.dataset.user;
r.overrideMimeType("application/json");
r.open("GET", "https://gist.github.com.ru/jcouyang/aec5210828043d5505bd?username=" + username);
r.onreadystatechange = function () {
    if (r.readyState != 4 || r.status != 200) return;
    const response = JSON.parse(r.response.replace(/href=\\"\//g, 'href=\\"https://github.com/'));
    if (response.error) {
        widget.innerHTML = 'Oooooops, please make sure your name in "data-user" is a real person on github';
        return;
    }
    const result = response.result;
    const display = widget.dataset.display.split(',').forEach(function (d) {
        widget.innerHTML += result[d];

        console.log(result);
    })

};
r.send();

function appendCSS(name) {
    var stylesheet = document.createElement("link")
    stylesheet.setAttribute("rel", "stylesheet")
    stylesheet.setAttribute("href", name)
    document.getElementsByTagName("head")[0].appendChild(stylesheet)
}

// appendCSS('//gh-widget.oyanglul.us/main.css');
// appendCSS('//cdnjs.cloudflare.com/ajax/libs/octicons/3.1.0/octicons.css')

