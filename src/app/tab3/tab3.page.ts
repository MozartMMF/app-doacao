import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
})
export class Tab3Page {
  form: FormGroup;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.form = this.formBuilder.group({
      nome: ['', [Validators.required]],
      endereco: ['', [Validators.required]],
    });
  }

  whats() {}

  abrirUrl(url: string) {
    window.open(url, '_blank').focus();
  }

  enviar() {
    let nome = this.form.get('nome').value;
    let endereco = this.form.get('endereco').value;
    console.log(nome);
    console.log(endereco);

    this.abrirUrl(
      `https://api.whatsapp.com/send?phone=555194904309&text=OlA%20meu%20nome%20é%20${nome}%20moro%20em%20${endereco}%20Vim%20pelo%20app%20e%20gostaria%20de%20receber%20doacoes`
    );
  }
}
