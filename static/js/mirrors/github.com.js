document.getElementById('accelerate-form').addEventListener('submit', function(e) {
    e.preventDefault();
    var githubUrl = document.getElementById('github-url').value;
    window.open(location.href.substr(0, location.href.lastIndexOf('/') + 1) + githubUrl);
});