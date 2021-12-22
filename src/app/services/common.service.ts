import { Injectable } from '@angular/core';
import { Title, Meta, MetaDefinition } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor(private titulo: Title, private meta: Meta) { }

  paginaMobileFormsMetaData() {
    this.paginaMetaData(
      'Accede a la informacion recopilada desde cualquier lugar',
      'Brindamos la herramienta perfecta para optimizar tu empresa.',
      'Te ayudamos en la gestion de tu negocio manejandolo desde la nube.',
      ''
    )
  }

  paginaMetaData(titulo: string, descripcion: string, keywords: string = '', url: string = ''): void {
    this.titulo.setTitle(titulo);

    this.meta.updateTag({
      property: 'og:title',
      content: titulo
    } as MetaDefinition);

    this.meta.updateTag({
      property: 'og:url',
      content: url
    } as MetaDefinition);

    this.meta.updateTag({
      name: 'twitter:title',
      content: titulo
    } as MetaDefinition);

    this.meta.updateTag({
      name: 'DC.title',
      content: titulo
    } as MetaDefinition);

    this.meta.updateTag({
      name: 'description',
      content: descripcion
    } as MetaDefinition);

    this.meta.updateTag({
      property: 'og:description',
      content: descripcion
    } as MetaDefinition);

    this.meta.updateTag({
      name: 'twitter:description',
      content: descripcion
    } as MetaDefinition);

    this.meta.updateTag({
      name: 'DC.description',
      content: descripcion
    } as MetaDefinition);

    this.meta.updateTag({
      name: 'keywords',
      content: keywords
    } as MetaDefinition);

    this.meta.updateTag({
      name: 'DC.subject',
      content: keywords
    } as MetaDefinition);
  }
}
