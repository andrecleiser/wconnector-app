import { Component, OnInit } from '@angular/core';
import { VERSION } from '../../app.constants';
import { ApplicationConfigServerService } from '../../shared/service/application-config-server.service';

@Component({
  selector: 'jhi-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {
  version = '---';
  ambiente = '';

  constructor(private applicationConfigService: ApplicationConfigServerService) {
    if (VERSION) {
      this.version = VERSION;
    }
  }

  ngOnInit(): void {
    this.applicationConfigService.obterConfiguracaoAplicacao().subscribe(ambiente => (this.ambiente = ambiente));
  }

  get isProducao(): boolean {
    return this.ambiente === 'prod';
  }
}
