import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

import { AcoesService } from './services/acoes.service';
import { Acoes } from './model/acoes';

@Component({
  selector: 'app-acoes',
  templateUrl: './acoes.component.html',
  styleUrls: ['./acoes.component.css'],
})
export class AcoesComponent implements OnInit {
  acoesInput = new FormControl();
  acoes: Acoes;

  constructor(private acoesService: AcoesService) {}

  ngOnInit(): void {
    this.acoesService.getAcoes().subscribe((retornoAcoes: Acoes) => {
      this.acoes = retornoAcoes;
    });
  }
}
