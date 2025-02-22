import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {

  categories = ['tv', 'laptops', 'furniture','phones'];
  selected = 'tv';

  products = [

    {
      id : 1,
      category : 'tv',
      name: 'Телевизор Samsung UE43T5300AUXCE 109 см черный',
      description: 'Телевизор поддерживает 4К',
      rating: 4.8,
      likes : 0,
      image: './assets/samsung.jpeg',
      link: 'https://kaspi.kz/shop/p/samsung-ue43t5300auxce-109-sm-chernyi-100182013/?c=750000000'
    },
    {
      id : 2,
      category : 'tv',
      name: 'Телевизор SMART 45G7000 109 см черный',
      description: 'Телевизор поддерживает 4К',
      rating: 5.0,
      likes : 0,
      image: './assets/smart.jpg',
      link: 'https://kaspi.kz/shop/p/smart-45g7000-109-sm-chernyi-109729478/?c=750000000'
    },
    {
      id : 3,
      category : 'laptops',
      name: 'Ноутбук Apple MacBook Pro 14 ',
      description: '2024 / 24 Гб / SSD 512 Гб / macOS / MX2H3',
      rating: 4.6,
      likes : 0,
      image: './assets/macbook.jpg',
      link: 'https://kaspi.kz/shop/p/apple-macbook-pro-14-2024-24-gb-ssd-512-gb-macos-mx2h3-132140624/?c=750000000'
    },
    {
      id : 4,
      category : 'laptops',
      name: 'Ноутбук Lenovo LOQ',
      description: '15.6" / 16 Гб / SSD 512 Гб / Без ОС / 15IAX9 / 83GS005NRK',
      rating: 4.8,
      likes : 0,
      image: './assets/lenovo.jpg',
      link: 'https://kaspi.kz/shop/p/lenovo-loq-15-6-16-gb-ssd-512-gb-bez-os-15iax9-83gs005nrk-120581412/?c=750000000'
    },
    {
      id : 5,
      category : 'tv',
      name: 'Телевизор LG',
      description: '109 см черный',
      rating: 4.9,
      likes : 0,
      image: './assets/lg.jpg',
      link: 'https://kaspi.kz/shop/p/lg-43lm5772pla-109-sm-chernyi-101293496/?c=750000000'
    },
    {
      id : 6,
      category : 'furniture',
      name: 'Диван прямой',
      description: 'обивка ткань, 85х230х70 см, светло-коричневый',
      rating: 4.9,
      likes : 0,
      image: './assets/sofa.jpeg',
      link: 'https://kaspi.kz/shop/p/divan-prjamoi-nasip-raiana-obivka-tkan-85h230h70-sm-svetlo-korichnevyi-115023255/?c=750000000'
    },
    {
      id : 7,
      category : 'furniture',
      name: 'ТВ-тумба напольная',
      description: '180x40x35 см, белый, коричневый',
      rating: 4.1,
      likes : 0,
      image: './assets/tv_tumba.jpg',
      link: 'https://kaspi.kz/shop/p/tv-tumba-napol-naja-modern-new-design-tt-180x40x35-sm-belyi-korichnevyi-108268540/?c=750000000'
    },
    {
      id : 8,
      category : 'phones',
      name: 'Смартфон Apple iPhone 16 Pro Max',
      description: '512Gb серебристый',
      rating: 4.7,
      likes : 0,
      image: './assets/iphone16promax.jpg',
      link: 'https://kaspi.kz/shop/p/apple-iphone-16-pro-max-512gb-serebristyi-123890803/'
    },
    {
      id : 9,
      category : 'phones',
      name: 'Смартфон Samsung Galaxy S24',
      description: '12 ГБ/256 ГБ черный',
      rating: 4.5,
      likes : 0,
      image: './assets/samsungs24.jpg',
      link: 'https://kaspi.kz/shop/p/samsung-galaxy-s24-ultra-5g-12-gb-256-gb-chernyi-116044354/?c=750000000'
    },
    {
      id : 10,
      category : 'phones',
      name: 'Смартфон Xiaomi Redmi Note 13 Pro',
      description: '12 ГБ/512 ГБ черный',
      rating: 4.3,
      likes : 0,
      image: './assets/xiaomi.jpg',
      link: 'https://kaspi.kz/shop/p/xiaomi-redmi-note-13-pro-5g-12-gb-512-gb-chernyi-115939564/?c=750000000'
    },
  ];

  getfilteredProducts(){

    var filtered = []
    for(var i = 0; i < this.products.length;i++){
      if(this.products[i].category === this.selected){
        filtered.push(this.products[i]);
      }
    } 
    return filtered;
  }

  selectCategory(event : any){
    this.selected = event?.target.value;
  }

  removeProduct(id : number){
    var newProducts = []
    for(var i = 0; i < this.products.length;i++){
      if(this.products[i].id !== id){
        newProducts.push(this.products[i]);
      }
    }
    this.products = newProducts;
  }

  likeProduct(id : number){
    for(var i = 0; i < this.products.length;i++){
      if(this.products[i].id === id){
        this.products[i].likes += 1;
      }
    }
  }

  shareProduct(link: string, platform: string) {
    let shareUrl = '';
    if (platform === 'whatsapp') {
      shareUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(link)}`;
    } else if (platform === 'telegram') {
      shareUrl = `https://t.me/share/url?url=${encodeURIComponent(link)}`;
    }
    window.open(shareUrl, '_self');
  }
}