import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-price',
  templateUrl: './price.component.html',
  styleUrls: ['./price.component.css']
})
export class PriceComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  callEnquiry() {
    window.location.href = 'tel:+919182786926'; // Replace with your phone number
  }

  chatOnWhatsApp(size: string) {
    window.open(`https://api.whatsapp.com/send?phone=+919182786926&text=Hi!%20I'm%20I%20want%20to%20know%20more%20about%20${size}%20in%20Sattva%20Lakeridge.%20Please%20share%20details`, '_blank'); // Replace with your WhatsApp number
  }
}
