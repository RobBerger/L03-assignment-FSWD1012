function increment() {
    var counter = document.getElementById('counter').innerHTML;
    var currentCount = parseInt(counter);

    document.getElementById('counter').innerHTML = currentCount + 1;

    const counterLogsP = document.createElement('p');
    counterLogsP.innerHTML = 'The counter has been increased by 1';
    var counterParent = document.getElementById('counterLogs');
    counterParent.appendChild(counterLogsP);
}

function decrement() {
    var counter = document.getElementById('counter').innerHTML;
    var currentCount = parseInt(counter);

    document.getElementById('counter').innerHTML = currentCount - 1;

    const counterLogsP = document.createElement('p');
    counterLogsP.innerHTML = 'The counter has been decreased by 1';
    var counterParent = document.getElementById('counterLogs');
    counterParent.appendChild(counterLogsP);
}