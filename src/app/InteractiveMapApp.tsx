export class InteractiveMapApp extends Application {
  static get defaultOptions() {
    return foundry.utils.mergeObject(super.defaultOptions, {
      id: 't20artonmap',
      title: 'Mapa Interativo de Arton',
      width: 1200,
      height: 800,
      resizable: true,
      popOut: true,
    });
  }

  async _renderInner(): Promise<JQuery<HTMLElement>> {
    const iframe = document.createElement('iframe');
    iframe.src = 'https://mapadearton.fichasdenimb.com.br/';
    iframe.style.width = '100%';
    iframe.style.height = '100%';
    iframe.style.border = 'none';
    iframe.allow = 'fullscreen; clipboard-read; clipboard-write';

    const wrapper = document.createElement('div');
    wrapper.style.width = '100%';
    wrapper.style.height = '100%';
    wrapper.appendChild(iframe);

    return $(wrapper);
  }
}
