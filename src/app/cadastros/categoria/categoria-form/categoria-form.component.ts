import { CategoriaService } from '../../services/categoria.service';
import { Categoria } from '../../../models/categoria.model';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from  '@angular/router';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-categoria-form',
  templateUrl: './categoria-form.component.html',
  styleUrls: ['./categoria-form.component.css'],
  providers: [CategoriaService]
})
export class CategoriaFormComponent implements OnInit {

  public formCrud: FormGroup;
  public id: string = '0';
  public categoria: Categoria;

  constructor(private route: ActivatedRoute, 
              private router: Router,
              private fb: FormBuilder,
              private categoriaService: CategoriaService) { }

  ngOnInit(): void {

    this.id = this.route.snapshot.paramMap.get('id');
     
    this.createForm();

    if(this.id) {
      this.categoriaService.obterCategoria(parseInt(this.id))
        .subscribe(result => {
          console.log(result);
          this.formCrud.patchValue(result);

        }, error => {
          console.log(error);
        } );

    }

    

  }

  createForm() {

        // this.formCrud = new FormGroup({
    //   id: new FormControl('0'),
    //   descricao: new FormControl('')
    // });
    let ttt = 0;


    this.formCrud = this.fb.group({
      id: [0],
      descricao: ['', Validators.required ] 
   });

  }


  salvar() {

    this.categoria = Object.assign({}, this.categoria, this.formCrud.value);
    
  }

  validarCampo(campo: string): boolean {

    return this.formCrud.get(campo).invalid && this.formCrud.get(campo).touched;

  }

  voltar() {
    this.router.navigateByUrl('/categorias');
  }

  

}
