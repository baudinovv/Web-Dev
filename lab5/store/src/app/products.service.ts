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
      price: "9 038 ₸",
      category: "pc"
    },
    {
      title: "NB F80 черный",
      desc: "Кранштейн для монитора",
      rating: 4.9,
      img: "./assets/cards/2.jpg",
      id: 2,
      link: "https://kaspi.kz/shop/p/nb-f80-chernyi-110855908/?c=750000000",
      price: "7 999 ₸",
      category: "pc"
    },
    {
      title: "Термопаста Arctic MX-4 4 г",
      desc: "Термопаста MX-4 станет отличным выбором для пользователей, желающих собрать систему высокого уровня. ",
      rating: 4.9,
      img: "./assets/cards/3.jpg",
      id: 3,
      link: "https://kaspi.kz/shop/p/nb-f80-chernyi-110855908/?c=750000000",
      price: "890 ₸",
      category: "pc"
    },
    {
      title: "Планшет AIRSTAR G2000 10 дюйм 16 Гб/512 Гб черный",
      desc: "Планшет 16 ГБ ОЗУ, 512 ГБ памяти",
      rating: 4.0,
      img: "./assets/cards/4.jpg",
      id: 4,
      link: "https://kaspi.kz/shop/p/airstar-g2000-10-djuim-16-gb-512-gb-chernyi-124333904/?c=750000000",
      price: "31 792 ₸",
      category: "pc"
    },
    {
      title: "Wi-Fi роутер TP-LINK TD-W8961N",
      desc: "Беспроводной маршрутизатор серии N со встроенным модемом ADSL2+ и скоростью передачи данных до 300 Мбит/с модели TD-W8961N",
      rating: 4.3,
      img: "./assets/cards/5.jpg",
      id: 5,
      link: "https://kaspi.kz/shop/p/wi-fi-router-tp-link-td-w8961n-7600132/?c=750000000",
      price: "12 189 ₸",
      category: "pc"
    },
    {
      title: "Inova Death Life",
      desc: "Коврик для мыши.",
      rating: 4.5,
      img: "./assets/cards/6.jpg",
      id: 6,
      link: "https://kaspi.kz/shop/p/inova-death-life-115283473/?c=750000000",
      price: "1 989 ₸",
      category: "pc"
    },
    {
      title: "USB Flash карта Kingston DataTraveler Exodia DTX/64GB 64 Гб",
      desc: "Накопитель DataTraveler Exodia компании Kingston.",
      rating: 5,
      img: "./assets/cards/7.jpg",
      id: 7,
      link: "https://kaspi.kz/shop/p/kingston-datatraveler-exodia-dtx-64gb-64-gb-100759959/?c=750000000",
      price: "1 989 ₸",
      category: "pc"
    },
    {
      title: "Notestand",
      desc: "Подставка для ноутбука",
      rating: 5,
      img: "./assets/cards/8.jpg",
      id: 8,
      link: "https://kaspi.kz/shop/p/notestand-102983515/?c=750000000",
      price: "997 ₸",
      category: "pc"
    },
    {
      title: "Сумка Portcase 9011 черный",
      desc: "Предназначен для удобной переноски и защиты устройства.",
      rating: 5,
      img: "./assets/cards/9.jpg",
      id: 9,
      link: "https://kaspi.kz/shop/p/sumka-portcase-9011-chernyi-108895248/?c=750000000",
      price: "3 944 ₸",
      category: "pc"
    },
    {
      title: "МФУ Epson EcoTank L3250",
      desc: "Принтер.",
      rating: 5,
      img: "./assets/cards/10.jpg",
      id: 10,
      link: "https://kaspi.kz/shop/p/mfu-epson-ecotank-l3250-107929066/?c=750000000",
      price: "3 944 ₸",
      category: "pc"
    },
    {
      title: "Бумажные салфетки Карина DOSTYQ 200 шт",
      desc: "Бумажные салфетки",
      rating: 3.7,
      img: "./assets/cards/11.jpg",
      id: 11,
      link: "https://kaspi.kz/shop/p/bumazhnye-salfetki-karina-dostyq-200-sht-110230386/?c=750000000",
      price: "269 ₸",
      category: "forHome"
    },
    {
      title: "FLO кондиционер Pure Breeze 1000 мл",
      desc: "Кондиционер для скидки.",
      rating: 4.0,
      img: "./assets/cards/12.jpg",
      id: 12,
      link: "https://kaspi.kz/shop/p/flo-konditsioner-pure-breeze-1000-ml-100234363/?c=750000000",
      price: "979 ₸",
      category: "forHome"
    },
    {
      title: "Влажные салфетки Flovell Care 120 шт, розовые",
      desc: "Влажные салфетки.",
      rating: 4.4,
      img: "./assets/cards/13.jpg",
      id: 13,
      link: "https://kaspi.kz/shop/p/vlazhnye-salfetki-flovell-care-120-sht-rozovye-102175971/?c=750000000",
      price: "510 ₸",
      category: "forHome"
    },
    {
      title: "Жидкое средство Domestos Ультра Белый 750 мл",
      desc: "Жидкое средство для уборки",
      rating: 4.8,
      img: "./assets/cards/14.jpg",
      id: 14,
      link: "https://kaspi.kz/shop/p/zhidkoe-sredstvo-domestos-ul-tra-belyi-750-ml-101105068/?c=750000000",
      price: "1 050 ₸",
      category: "forHome"
    },
    {
      title: "Fairy жидкое Зеленое Яблоко 900 мл + Сочный Лимон 900 мл",
      desc: "Средство для мытья посуды.",
      rating: 4.3,
      img: "./assets/cards/15.jpg",
      id: 15,
      link: "https://kaspi.kz/shop/p/fairy-zhidkoe-zelenoe-jabloko-900-ml-sochnyi-limon-900-ml-102924144/?c=750000000",
      price: "1 914 ₸",
      category: "forHome"
    },
    {
      title: "Apple 18W USB-C Power Adapter USB Type-C белый",
      desc: "Зарядка для смартфона",
      rating: 4.9,
      img: "./assets/cards/16.jpg",
      id: 16,
      link: "https://kaspi.kz/shop/p/apple-18w-usb-c-power-adapter-usb-type-c-belyi-102743952/?c=750000000",
      price: "11 013 ₸",
      category: "phones"
    },
    {
      title: "Смартфон Apple iPhone 13 128Gb черный",
      desc: "Смартфон",
      rating: 4.9,
      img: "./assets/cards/17.jpg",
      id: 17,
      link: "https://kaspi.kz/shop/p/apple-iphone-13-128gb-chernyi-102298404/?c=750000000",
      price: "271 120 ₸",
      category: "phones"
    },
    {
      title: "Чехол Для Apple iPhone 13 прозрачный",
      desc: "Чехол",
      rating: 4.1,
      img: "./assets/cards/18.jpg",
      id: 18,
      link: "https://kaspi.kz/shop/p/dlja-apple-iphone-13-prozrachnyi-106185651/?c=750000000",
      price: "96 ₸",
      category: "phones"
    },
    {
      title: "Apple iPhone 16 Pro Max 256Gb черный",
      desc: "Смартфон",
      rating: 5,
      img: "./assets/cards/19.jpg",
      id: 19,
      link: "https://kaspi.kz/shop/p/apple-iphone-16-pro-max-256gb-chernyi-123787551/?c=750000000",
      price: "690 875 ₸",
      category: "phones"
    },
    {
      title: "Смартфон Apple iPhone 16 Pro Max 256Gb золотистый",
      desc: "Смартфон",
      rating: 5,
      img: "./assets/cards/20.jpg",
      id: 20,
      link: "https://kaspi.kz/shop/p/apple-iphone-16-pro-max-256gb-zolotistyi-123890547/?c=750000000",
      price: "690 875 ₸",
      category: "phones"
    },
    {
      title: "Боксеры Nanjiren мультиколор",
      desc: "Боксеры",
      rating: 5,
      img: "./assets/cards/21.jpg",
      id: 21,
      link: "https://kaspi.kz/shop/p/boksery-nanjiren-komplekt-mul-tikolor-3xl-110433925/?c=750000000",
      price: "2 398 ₸",
      category: "clothes"
    },
    {
      title: "Носки LIMAX LX00111 5 пар черный 41-44",
      desc: "Носки",
      rating: 4.4,
      img: "./assets/cards/22.jpg",
      id: 22,
      link: "https://kaspi.kz/shop/p/noski-limax-lx00111-5-par-chernyi-41-44-118707057/?c=750000000",
      price: "725 ₸",
      category: "clothes"
    },
    {
      title: "Носки TAPEDESIGN TDW_00 1 пара белый 37-43",
      desc: "Носки",
      rating: 4.4,
      img: "./assets/cards/23.jpg",
      id: 23,
      link: "https://kaspi.kz/shop/p/noski-tapedesign-tdw-00-1-para-belyi-37-43-116227948/?c=750000000",
      price: "457 ₸",
      category: "clothes"
    },
    {
      title: "Спортивные носки 233692291 1 пара белый 41-45",
      desc: "Спортивные носки",
      rating: 4.6,
      img: "./assets/cards/24.jpg",
      id: 24,
      link: "https://kaspi.kz/shop/p/sportivnye-noski-233692291-1-para-belyi-41-45-122930939/?c=750000000",
      price: "209 ₸",
      category: "clothes"
    },
    {
      title: "Толстовка Urban Outfit черный",
      desc: "Толстовка",
      rating: 4.6,
      img: "./assets/cards/25.jpg",
      id: 25,
      link: "https://kaspi.kz/shop/p/tolstovka-urban-outfit-as534zh-chernyi-s-117343686/?c=750000000",
      price: "4 316 ₸",
      category: "clothes"
    },
  ]


  constructor() { }

  getProducts(){
    return this.CardLists;
  }
  getFiltredProducts(category: string){
    return this.CardLists.filter((item) => item.category == category );
  }
}
