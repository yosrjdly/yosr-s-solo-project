// opening the side bar using vanilla js

document.getElementById('Sidebar-icon').addEventListener('click', function() {
    var sidebar = document.getElementById('sidebar');
    if (sidebar.style.left === "-250px") {
        sidebar.style.left = "0";
    } else {
        sidebar.style.left = "-250px";
    }

})


////////// game section /////////////////



