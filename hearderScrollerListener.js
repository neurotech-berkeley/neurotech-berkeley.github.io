$(function() {
    $("#header-placeholder").load("header.html", function() {
        attachScrollListener();
    });
});

function attachScrollListener() {
    var headerHeight = document.querySelector('#imageSection').offsetHeight;
    var logoText = document.getElementById('logoText');

    window.addEventListener('scroll', function() {
        if (window.scrollY > headerHeight) {
            document.querySelectorAll('.navbar-nav .nav-link').forEach(function(navItem) {
                navItem.style.color = 'black';
            });
            logoText.style.color = 'black';
        } else {
            document.querySelectorAll('.navbar-nav .nav-link').forEach(function(navItem) {
                navItem.style.color = 'white';
            });
            logoText.style.color = 'white';
        }
    });
}
