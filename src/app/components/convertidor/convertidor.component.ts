import { Component } from '@angular/core';

@Component({
  selector: 'app-convertidor',
  templateUrl: './convertidor.component.html',
  styleUrls: ['./convertidor.component.css']
})
export class ConvertidorComponent {
  cantidad:number = 0;
  tengo:string = 'USD';
  quiero:string = 'EUR';
  total:number = 0;
  monedas:string[]=[
    'USD','EUR','LIBRA'
  ];
  static tasasDeConversion = {
    USD: { USD: 1, EUR: 0.84, LIBRA: 0.75 },
    EUR: { USD: 1.20, EUR: 1, LIBRA: 0.9 },
    LIBRA: { USD: 1.20, EUR: 1.11, LIBRA: 1 },
  };

  convertir() {
    const tasasDeConversion: { [key: string]: { [key: string]: number } } = {
      USD: { USD: 1, EUR: 0.84, LIBRA: 0.75 },
      EUR: { USD: 1.20, EUR: 1, LIBRA: 0.9 },
      LIBRA: { USD: 1.20, EUR: 1.11, LIBRA: 1 },
    };

    if (this.tengo in tasasDeConversion && this.quiero in tasasDeConversion) {
      this.total = this.cantidad * tasasDeConversion[this.tengo][this.quiero];
    }
  }

// convertir(){

//   switch (this.tengo) {
//     case 'USD':
//       if (this.quiero === 'USD') {
//         this.total = this.cantidad

//       }
//       if (this.quiero === 'EUR') {
//         this.total = this.cantidad * 0.84

//       }
//       if (this.quiero === 'LIBRA') {
//         this.total = this.cantidad * 0.75

//       }
//       break;
//     case 'EUR':
//       if (this.quiero === 'USD') {
//         this.total = this.cantidad * 1.20

//       }
//       if (this.quiero === 'EUR') {
//         this.total = this.cantidad

//       }
//       if (this.quiero === 'LIBRA') {
//         this.total = this.cantidad * 0.9

//       }
//       break
//     case 'LIBRA':
//       if (this.quiero === 'USD') {
//         this.total = this.cantidad * 1.20

//       }
//       if (this.quiero === 'EUR') {
//         this.total = this.cantidad * 1.11

//       }
//       if (this.quiero === 'LIBRA') {
//         this.total = this.cantidad

//       }
//       break
//     default:
//       break;
//   }
// }
}
