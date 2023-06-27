var animation = lottie.loadAnimation({
    container: document.getElementById('name'),
    renderer: 'svg',
    loop: false,
    autoplay: true,
    name: "name writing",
    path: 'https://raw.githubusercontent.com/rbatra2000/rbatra2000.github.io/develop/js/animations/nameWriting.json',
    rendererSettings: {
        progressiveLoad: true,
        viewBoxOnly: true,
      }
});
