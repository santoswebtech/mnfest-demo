function toggleNav() {
    let x = document.querySelector('#navToggle>i');
    let y = document.querySelector('#mobileNav');
    if (x.className === 'fa fa-bars') {
        x.className = 'fa-regular fa-x';
        y.style.display = 'block';
    } else {
        x.className = 'fa fa-bars';
        y.style.display = 'none';
    }
}

function openConsult() {
    let modal = document.getElementById('consultModal');
    modal.style.display = 'flex';
    window.addEventListener('keydown', function (event) {
        if (event.key === 'Escape') {
          modal.style.display = 'none'
        }
    })
}

function closeConsult() {
    document.getElementById('consultModal').style.display = 'none';
}

const feedbtn = document.querySelector('#igFeed>div>a')

// console.log(document.querySelector('#igFeed>div>a'))

var prevScrollpos = window.pageYOffset;

window.onscroll = () => {
    if (document.querySelector('#igFeed').getBoundingClientRect().top < 500) {
        document.querySelector('#igFeed>div>a').style.display = 'none';
    }
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
        document.querySelector("header").style.top = "0"; // Show navbar
    } else {
        document.querySelector("header").style.top = "-80px"; // Hide navbar
    }
    prevScrollpos = currentScrollPos;
}