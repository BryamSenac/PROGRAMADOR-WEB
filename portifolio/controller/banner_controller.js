import { bd_banners } from "../model/banner_bd.js";

let bannerAtual = 0;
const totalBanners = 5;

export function criaraBanner() {
    const bannerSection = document.getElementById('banners_com_btns')
    const bannersContainer = document.createElement('nav');
    bannersContainer.id = 'banners';
    const btnsContainer = document.createElement('nav');
    btnsContainer.id = 'btns_banner';

    bd_banners.forEach((banner_infos, index) => {
        // Cria banner
        const banner = document.createElement('div');
        banner.id = `banner_${index + 1}`;
        banner.className = 'banner';

        const titulo = document.createElement('h1');
        titulo.textContent = banner_infos.titulo;

        const descricao = document.createElement('p');
        descricao.textContent = banner_infos.descricao;

        banner.appendChild(titulo);
        banner.appendChild(descricao);
        bannersContainer.appendChild(banner);

        // Cria botão
        const botao = document.createElement('div');
        botao.id = `btn_banner_${index}`;
        botao.className = 'btn_banner';
        botao.onclick = ()=>{
            girarBanner(index);
        }
        btnsContainer.appendChild(botao);
    });

    bannerSection.appendChild(bannersContainer);
    bannerSection.appendChild(btnsContainer);
}

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
