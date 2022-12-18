function increment() {
    var counter = document.getElementById('counter').innerHTML;
    var currentCount = parseInt(counter);
    document.getElementById('counter').innerHTML = currentCount + 1;
}