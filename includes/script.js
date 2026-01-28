fetch('../includes/header.html')
  .then(r => r.text())
  .then(data => {
    document.getElementById('header-placeholder').innerHTML = data;
    document.body.classList.remove('loading');
  });


function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
}
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}
function toggleSearch() {
  const title = document.getElementById("headerTitle");
  const search = document.getElementById("headerSearch");

  title.classList.toggle("hidden");
  search.classList.toggle("active");
}