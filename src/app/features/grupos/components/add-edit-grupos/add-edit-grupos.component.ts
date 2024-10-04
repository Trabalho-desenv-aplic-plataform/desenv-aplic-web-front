import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Cmyk, ColorPickerService } from 'ngx-color-picker';

@Component({
  selector: 'app-add-edit-grupos',
  templateUrl: './add-edit-grupos.component.html',
  styleUrls: ['./add-edit-grupos.component.css'],
  providers: [ColorPickerService]
})
export class AddEditGruposComponent implements OnInit {

  public toggle = false;

  public rgbaText = 'rgba(165, 26, 214, 0.2)';

  public arrayColors: any = {
    color1: '#2883e9',
    color2: '#e920e9',
    color3: 'rgb(255,245,0)',
    color4: 'rgb(236,64,64)',
    color5: 'rgba(45,208,45,1)'
  };

  public selectedColor = 'color1';

  public color1 = '#2889e9';
  public color2 = '#e920e9';
  public color3 = '#fff500';
  public color4 = 'rgb(236,64,64)';
  public color5 = 'rgba(45,208,45,1)';
  public color6 = '#1973c0';
  public color7 = '#f200bd';
  public color8 = '#a8ff00';
  public color9 = '#278ce2';
  public color10 = '#0a6211';
  public color11 = '#f2ff00';
  public color12 = '#f200bd';
  public color13 = 'rgba(0,255,0,0.5)';
  public color14 = 'rgb(0,255,255)';
  public color15 = 'rgb(255,0,0)';
  public color16 = '#a51ad633';
  public color17 = '#666666';
  public color18 = '#ff0000';

  public cmykValue = '';

  public cmykColor = new Cmyk(0, 0, 0, 0);

  constructor(
    public vcRef: ViewContainerRef,
    private cpService: ColorPickerService,
    private dialogRef: MatDialogRef<AddEditGruposComponent>
  ) {}
  
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  public onEventLog(event: string, data: any): void {
    console.log(event, data);
  }

  public onChangeColorCmyk(color: string): Cmyk {
    const hsva = this.cpService.stringToHsva(color);

    if (hsva) {
      const rgba = this.cpService.hsvaToRgba(hsva);

      return this.cpService.rgbaToCmyk(rgba);
    }

    return new Cmyk(0, 0, 0, 0);
  }

  public onChangeColorHex8(color: string): string {
    const hsva = this.cpService.stringToHsva(color, true);

    if (hsva) {
      return this.cpService.outputFormat(hsva, 'rgba', null);
    }

    return '';
  }

  name: string = '';  // Nome que será preenchido

  // Função para gerar o payload
  generatePayload() {
    const payload = {
      color: this.selectedColor,
      name: this.name
    };

    console.log(payload);  // Exibe o payload no console para verificação
    return payload;
  }

  exit(response = false) {
    this.dialogRef.close(response);
  }
}
