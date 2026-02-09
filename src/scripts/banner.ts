import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import Swiper from 'swiper/bundle';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import Alpine from 'alpinejs';

document.addEventListener('alpine:init', () => {
  Alpine.data('heroCarousel', () => ({
    swiper: null as any,

    init() {
      this.swiper = new Swiper('.hero-swiper', {
        modules: [Navigation, Pagination, Autoplay], // importe antes no seu bundle JS
        loop: true,
        autoplay: {
          delay: 6000,
          disableOnInteraction: false,
        },
        navigation: {
            prevEl: '.custom-prev',
            nextEl: '.custom-next',
        },
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
      })
    }
  }))
})

