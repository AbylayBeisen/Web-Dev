import {Component, inject} from '@angular/core';
import {CommonModule} from '@angular/common';
interface Product {
  image: string;
  name: string;
  description: string;
  rating: number;
  link: string;
}

@Component({
  selector: 'app-home',
  imports: [CommonModule, ],
  template: `
   <section class="results">
  <h2>Featured Products</h2>
  <div class="products">
    <div *ngFor="let product of products" class="product">
      <img [src]="product.image" [alt]="product.name" />
      <h3>{{product.name}}</h3>
      <p>{{product.description}}</p>
      <p class="rating">Rating: {{product.rating}}</p>
      <div id="l"><a [href]="product.link" target="_blank">View Product</a>
      <div class="share">
      <a (click)="wShare(product.link)"><img src="https://img.icons8.com/?size=100&id=16733&format=png"></a>
      <a (click)="tShare(product.link)"><img src="https://img.icons8.com/?size=100&id=lUktdBVdL4Kb&format=png"></a>
</div></div>
    </div>
  </div>
</section>
  `,
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent {
  wShare(productLink: string) {
   const message = `Check out this product: ${productLink}`;
   const whatsappLink = `https://wa.me/?text=${encodeURIComponent(message)}`;
   window.open(whatsappLink, '_blank');
    }
  tShare(productLink: string) {
    const message = `Check out this product: ${productLink}`;
    const telegramLink = `https://t.me/share/url?url=${encodeURIComponent(message)}`;
    window.open(telegramLink, '_blank');
  }

  products: Product[] = [
    {
      "image": "https://resources.cdn-kaspi.kz/img/m/p/ha3/hda/86319874048030.jpg?format=gallery-medium",
      "name": "iPhone 15 Pro Max",
      "description": "Latest Apple smartphone with A17 Pro chip.",
      "rating": 4.9,
      "link": "https://kaspi.kz/shop/p/apple-iphone-15-pro-max-256gb-seryi-113138420/?c=750000000"
    },
    {
      "image": "https://resources.cdn-kaspi.kz/img/m/p/h7c/h38/84963297329182.png?format=gallery-medium",
      "name": "Samsung Galaxy S24 Ultra",
      "description": "Flagship Samsung smartphone with S Pen.",
      "rating": 4.8,
      "link": "https://kaspi.kz/shop/p/samsung-galaxy-s24-ultra-5g-12-gb-256-gb-seryi-116043556/?c=750000000"
    },
    {
      "image": "https://resources.cdn-kaspi.kz/img/m/p/hf4/h52/64509322919966.jpg?format=gallery-medium",
      "name": "MacBook Air M2",
      "description": "Lightweight laptop with Apple M2 chip.",
      "rating": 4.7,
      "link": "https://kaspi.kz/shop/p/apple-macbook-air-13-2022-13-6-8-gb-ssd-256-gb-macos-mlxw3-105933794/?c=750000000"
    },
    {
      "image": "https://resources.cdn-kaspi.kz/img/m/p/h9d/h8d/83155236028446.jpg?format=gallery-medium",
      "name": "Sony WH-1000XM5",
      "description": "Noise-cancelling wireless headphones.",
      "rating": 4.8,
      "link": "https://kaspi.kz/shop/p/sony-wf-1000xm5-chernyi-112854077/?c=750000000"
    },
    {
      "image": "https://resources.cdn-kaspi.kz/img/m/p/hfb/h11/81397947301918.jpg?format=gallery-medium",
      "name": "Dyson V15 Detect",
      "description": "Cordless vacuum cleaner with laser dust detection.",
      "rating": 4.6,
      "link": "https://kaspi.kz/shop/p/dyson-v15-detect-absolute-serebristyi-110975356/?c=750000000"
    },
    {
      "image": "https://resources.cdn-kaspi.kz/img/m/p/hd6/h66/83874218508318.png?format=gallery-medium",
      "name": "Apple Watch Series 9",
      "description": "Smartwatch with advanced health features.",
      "rating": 4.7,
      "link": "https://kaspi.kz/shop/p/apple-watch-series-9-gps-s-m-45-mm-sinii-chernyi-113398151/?c=750000000"
    },
    {
      "image": "https://resources.cdn-kaspi.kz/img/m/p/h5b/h23/64461709606942.jpg?format=gallery-medium",
      "name": "Samsung QE50QN90BAUXCE",
      "description": "4K QLED Smart TV with Neo Quantum Processor.",
      "rating": 4.8,
      "link": "https://kaspi.kz/shop/p/samsung-qe50qn90bauxce-127-sm-chernyi-106485960/?c=750000000"
    },
    {
      "image": "https://resources.cdn-kaspi.kz/img/m/p/h8d/h23/64319245352990.jpg?format=gallery-medium",
      "name": "Xiaomi Robot Vacuum Mop 2 Pro",
      "description": "Smart robot vacuum and mop with laser navigation.",
      "rating": 4.5,
      "link": "https://kaspi.kz/shop/p/xiaomi-mi-robot-vacuum-mop-2-pro-mjst1shw-belyi-103536021/?c=750000000"
    },
    {
      "image": "https://resources.cdn-kaspi.kz/img/m/p/h12/hfb/67854056194078.jpg?format=gallery-medium",
      "name": "Canon EOS R6",
      "description": "Mirrorless camera with 20.1MP full-frame sensor.",
      "rating": 4.7,
      "link": "https://kaspi.kz/shop/p/canon-eos-r6-mark-ii-body-108430990/?c=750000000"
    },
    {
      "image": "https://resources.cdn-kaspi.kz/img/m/p/h87/h1f/85207910383646.png?format=gallery-medium",
      "name": "PlayStation 5",
      "description": "Next-gen gaming console with ultra-high-speed SSD.",
      "rating": 4.9,
      "link": "https://kaspi.kz/shop/p/sony-playstation-5-geimpad-zarjadnaja-stantsija-gripsy-fifa23-ps4-ufc4-mortal-kombat-11-ultimate-gta5-call-of-duty-cold-war-need-for-speed-heat-116749438/?c=750000000"
    }
  ];
}