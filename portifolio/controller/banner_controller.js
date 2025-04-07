let bannerAtual = 0;
const totalBanners = 5;

function girarBanner(n_banner) {
    let banners = document.getElementById("banners");
    banners.style.left = "-" + n_banner + "00vw";

    for (let i = 0; i < totalBanners; i++) {
        let btn = document.getElementById(`btn_banner_${i}`);
        btn.style.transform = 'scale(1)';
    }

    let btn_banner = document.getElementById(`btn_banner_${n_banner}`);
    btn_banner.style.transform = 'scale(1.4)';

    bannerAtual = n_banner;
}


setInterval(() => {
    let proximo = (bannerAtual + 1) % totalBanners;
    girarBanner(proximo);
}, 3000);