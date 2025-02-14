import { Injectable } from '@angular/core';
import { Card } from './card';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  
  protected CardLists : Card[] = [
    {
      title: "Logitech g102",
      desc: "Компьютерная мышь",
      rating: 4.6,
      img: "./assets/cards/1.jpg",
      id: 1,
      link: "https://kaspi.kz/shop/p/logitech-g102-lightsync-chernyi-100956618/?c=750000000",
      price: "9 038 ₸"
    },
    {
      title: "NB F80 черный",
      desc: "Кранштейн для монитора",
      rating: 4.9,
      img: "./assets/cards/2.jpg",
      id: 2,
      link: "https://kaspi.kz/shop/p/nb-f80-chernyi-110855908/?c=750000000",
      price: "7 999 ₸"
    },
    {
      title: "Термопаста Arctic MX-4 4 г",
      desc: "Термопаста MX-4 станет отличным выбором для пользователей, желающих собрать систему высокого уровня. ",
      rating: 4.9,
      img: "./assets/cards/3.jpg",
      id: 3,
      link: "https://kaspi.kz/shop/p/nb-f80-chernyi-110855908/?c=750000000",
      price: "890 ₸"
    },
    {
      title: "Планшет AIRSTAR G2000 10 дюйм 16 Гб/512 Гб черный",
      desc: "Планшет 16 ГБ ОЗУ, 512 ГБ памяти",
      rating: 4.0,
      img: "./assets/cards/4.jpg",
      id: 4,
      link: "https://kaspi.kz/shop/p/airstar-g2000-10-djuim-16-gb-512-gb-chernyi-124333904/?c=750000000",
      price: "31 792 ₸"
    },
    {
      title: "Wi-Fi роутер TP-LINK TD-W8961N",
      desc: "Беспроводной маршрутизатор серии N со встроенным модемом ADSL2+ и скоростью передачи данных до 300 Мбит/с модели TD-W8961N",
      rating: 4.3,
      img: "./assets/cards/5.jpg",
      id: 5,
      link: "https://kaspi.kz/shop/p/wi-fi-router-tp-link-td-w8961n-7600132/?c=750000000",
      price: "12 189 ₸"
    },
    {
      title: "Inova Death Life",
      desc: "Коврик для мыши.",
      rating: 4.5,
      img: "./assets/cards/6.jpg",
      id: 6,
      link: "https://kaspi.kz/shop/p/inova-death-life-115283473/?c=750000000",
      price: "1 989 ₸"
    },
    {
      title: "USB Flash карта Kingston DataTraveler Exodia DTX/64GB 64 Гб",
      desc: "Накопитель DataTraveler Exodia компании Kingston.",
      rating: 5,
      img: "./assets/cards/7.jpg",
      id: 7,
      link: "https://kaspi.kz/shop/p/kingston-datatraveler-exodia-dtx-64gb-64-gb-100759959/?c=750000000",
      price: "1 989 ₸"
    },
    {
      title: "Notestand",
      desc: "Подставка для ноутбука",
      rating: 5,
      img: "./assets/cards/8.jpg",
      id: 8,
      link: "https://kaspi.kz/shop/p/notestand-102983515/?c=750000000",
      price: "997 ₸"
    },
    {
      title: "Сумка Portcase 9011 черный",
      desc: "Предназначен для удобной переноски и защиты устройства.",
      rating: 5,
      img: "./assets/cards/9.jpg",
      id: 9,
      link: "https://kaspi.kz/shop/p/sumka-portcase-9011-chernyi-108895248/?c=750000000",
      price: "3 944 ₸"
    },
    {
      title: "МФУ Epson EcoTank L3250",
      desc: "Принтер.",
      rating: 5,
      img: "./assets/cards/10.jpg",
      id: 10,
      link: "https://kaspi.kz/shop/p/mfu-epson-ecotank-l3250-107929066/?c=750000000",
      price: "3 944 ₸"
    },
  ]


  constructor() { }

  getProducts(){
    return this.CardLists;
  }
}
