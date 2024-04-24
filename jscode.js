/*   VUT FIT ITW 2024 - Resume - 
     author: Anna Shevchenko
     login: xshevc02
*/

//function to show and hide sidebar for mobile version
function toggleSidebar() {
    var sidebar = document.getElementById("sidebar");
    var button = document.getElementById("sidebar-toggle-button");
    if (sidebar.style.left === "-280px") {
      sidebar.style.left = "0";
      button.innerText = "Close Sidebar"; // Update the button text
    } else {
      sidebar.style.left = "-280px";
      button.innerText = "Open Sidebar"; // Update the button text
    }
    button.innerText = buttonInnerText; // Update the button text
  }
  
//function to drop down menu in sidebar (Portfolio)
function DropDown() {
    document.getElementById("dropdowmenu").classList.toggle("show");
}

window.onclick = function(e) {
    if (!e.target.matches('.dropbtn')) {
        var myDropdown = document.getElementById("dropdowmenu");
        if (myDropdown.classList.contains('show')) {
            myDropdown.classList.remove('show');
        }
    }
}