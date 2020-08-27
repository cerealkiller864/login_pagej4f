alert("check out the dark theme at the bottom of page:v")
var imgs = [
    "https://botayit.com/wp-content/uploads/2019/11/SoloLearn-Learn-to-Code-Premium-1140x694.jpg",

    "https://i.ytimg.com/vi/o8kT5c_4PAc/maxresdefault.jpg",

    "https://pbs.twimg.com/media/Dvg_e5fWwAAK7vL.jpg:large",

    "https://pbs.twimg.com/media/Dvg_e5fWwAAK7vL.jpg:large",

    "https://pbs.twimg.com/media/Dvg_e5fWwAAK7vL.jpg:large",

    "https://pbs.twimg.com/media/Dvg_e5fWwAAK7vL.jpg:large",

    "https://www.how2shout.com/wp-content/uploads/2019/11/SoloLearn-Learn-to-Code-for-Free.jpg",

    "https://missthoitrang.com/uploads/ab.jpg",

    "https://miro.medium.com/max/12032/0*__5nhm_2qHSrTVoZ",

    "https://www.techsignin.com/wp-content/uploads/2018/01/linux-linus-torvalds-su-co-chip-cpu-intel-meltdown-spectre3.jpg",

    "https://cms.qz.com/wp-content/uploads/2019/05/TimBLOfficial-5-e1562855311586.jpg?quality=75&strip=all&w=1600&h=900&crop=1",

    "https://st.quantrimang.com/photos/image/2019/06/06/steve-jobs-va-bi-quyet-dat-duoc-muc-tieu-da-de-ra640-size-640x335-znd.jpg",

    "https://s.marketwatch.com/public/resources/images/MW-IE117_gates__ZH_20200409090409.jpg",

    "https://luxury-inside.vn/data/uploads/2019/09/elon-musk-2-e1568721330744.jpg",

    "https://icdn.dantri.com.vn/zoom/1200_630/2018/9/16/jeffbezos-15370806645891685215341.jpg",
]
var img = document.getElementById('img_container')
var article = document.getElementById(' - About Sololearn - ')
var h1_1 = document.getElementById('h1_1')
var index = 0
var mode = 0

function bottom() {
    window.scroll({
        top: 2500,
        left: 0,
        behavior: 'smooth',
    })
}

setInterval(function blink() {
    if (mode === 0) {
        h1_1.innerHTML = "Tap me !";
        mode++;
    } else {
        h1_1.innerHTML = "Sololearn Login !"
        mode = 0;
    }
}, 3000)


setInterval(function slide_show() {
    index++;
    if (index > imgs.length) {
        index = 0;
    }
    img_container.style.backgroundImage = `url('${imgs[index]}'), url('http://www.sololearn.com/uploads/css_logo.png');`;
}, 3000)

function thumbsup() {
    alert('One single thumb_up means the world to me :3');
    confirm("Directing to 'https://www.perkinselearning.org/technology/blog/sololearn-programming-app-review' via new tab, sure you wanna leave this page?");
}

function thumbsup2() {
    alert('One single thumb_up means the world to me :3');
    confirm("Directing to 'https://www.sololearn.com' via new tab, sure you wanna leave this page?");
}

function dark() {
    document.body.style.background = '#222222';
    article.style.background = '#3D3D3D';
    article.style.color = '#EBEBE8';
    window.scroll({
        top: 0,
        left: 0,
        behavior: 'smooth',
    })
    h1_1.innerHTML = "Sololearn Login";
}

function light() {
    document.body.style.background = '#EBEBE8';
    article.style.background = 'white';
    article.style.color = 'black';
    window.scroll({
        top: 0,
        left: 0,
        behavior: 'smooth',
    })
    h1_1.innerHTML = "Sololearn Login";
}

function default_mode() {
    document.body.style.backgroundImage = "url('http://www.sololearn.com/images/bg2.jpg')";
    article.style.background = 'white';
    article.style.color = 'black';
}