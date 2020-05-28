import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder, FormControl } from '@angular/forms';
import {BancoService} from '../../banco/banco.service';
import {ErrorHandlerService} from '../../core/error-handler.service';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.scss'],
})
export class RegisterFormComponent implements OnInit {

  formulario: FormGroup;
  bancos = [];

  constructor(
    private formBuilder: FormBuilder,
    private bancoService: BancoService,
    private errorHandler: ErrorHandlerService,

  ) { }

  ngOnInit() {
    this.configurarFormulario();
    this.carregarCategorias();
  }

  configurarFormulario() {
    this.formulario = this.formBuilder.group({
      id: [],
      nome: [null, [ this.validarObrigatoriedade, this.validarTamanhoMinimo(5) ]],
      email: [  null, [ this.validarObrigatoriedade, this.validarEmail() ]  ],
      nConta: [ null, Validators.required ],
      morada: [null, Validators.required],
      telemovel: [null, Validators.required],
      nif: [ null, [ this.validarObrigatoriedade, this.validarTamanhoMinimo(9) ] ],
      dataNascimento: [ null, Validators.required ],
      banco: this.formBuilder.group({
        id: [ null, Validators.required ],
        nome: []
      }),
    });
  }

  validarObrigatoriedade(input: FormControl) {
    return (input.value ? null : { obrigatoriedade: true });
  }

  validarTamanhoMinimo(valor: number) {
    return (input: FormControl) => {
      return (!input.value || input.value.length >= valor) ? null : { tamanhoMinimo: { tamanho: valor } };
    };
  }
  validarEmail() {
    return (input: FormControl) => {
      return (!input.value || input.value.toString().includes("@")) ? null : { email: true };
    };
  }

  carregarCategorias() {
    return this.bancoService.listarTodas()
        .then(bancos => {
          this.bancos = bancos
              .map(c => ({ label: c.nome, value: c.codigo }));
        })
        .catch(erro => this.errorHandler.handle(erro));
  }
    registrar() {

    }
}
