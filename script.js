document.getElementById('btn1').addEventListener('contextmenu', function(event) {
    event.preventDefault();
    alert('Right click event triggered');
});

document.getElementById('btn2').addEventListener('dblclick', function(event) {
    alert('Double click event triggered');
});

document.getElementById('btn3').addEventListener('mousedown', function(event) {
    alert('Left click event triggered');
});