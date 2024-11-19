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
function closeService() {
    document.getElementById('serviceModal').style.display = 'none';
}

function openService(e) {
    const modal = document.querySelector('#serviceModal');
    const serviceTitle = e.querySelector('h2').innerHTML;
    document.querySelector('#serviceTitle').innerHTML = serviceTitle;
    
    const serviceContent = document.querySelector('#serviceContent');

    if (serviceTitle === 'Weddings') {
        serviceContent.innerHTML = "Weddings are the best times to get families and friends dancing together. Music is key to making those moments magical and unforgettable! I make sure to keep the musical vibes going through the evening into the night. The Dj is the soundtrack of the most important night of your life with all your loved ones. I'm here to help make your wedding a great one";
    }
    if (serviceTitle === 'Corporate Events') {
        serviceContent.innerHTML = "Business events are great opportunities for companies to showcase their products and services. Having a DJ helps create a great mood to help those businesses engage with new clients. I help with important speeches, supply great sound for atmosphere and create great moments that can help companies expand to new heights!";
    }
    if (serviceTitle === 'Birthdays' || serviceTitle === 'Private Events') {
        serviceContent.innerHTML = "We all have birthdays! Social private events and birthday parties are great fun especially when you have a DJ to boost the energy with great music. From good music and games I make it fun for all ages. Let’s celebrate together because I too will be a part of your party, so I’ll see you on the dance floor!";
    }
    modal.style.display = 'flex';
    window.addEventListener('keydown', function (event) {
        if (event.key === 'Escape') {
          modal.style.display = 'none'
        }
    })
}

const feedbtn = document.querySelector('#igFeed>div>a')

// console.log(document.querySelector('#igFeed>div>a'))

window.onscroll = () => {
    if (document.querySelector('#igFeed').getBoundingClientRect().top < 500) {
        document.querySelector('#igFeed>div>a').style.display = 'none';
    }
     
}