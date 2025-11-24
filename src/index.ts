import { InteractiveMapApp } from './app/InteractiveMapApp';

Hooks.once('init', () => {
  console.log('t20artonmap | init');
});

// SceneControls regions | tiles | templates | drawnings | walls | lighting |
//               sounds | tokens | notes

//eslint-disable-next-line @typescript-eslint/no-explicit-any
Hooks.on('getSceneControlButtons' as any, (controls: any) => {
  // if (!controls.tokens?.tools) return;
  if (!controls.templates?.tools) return;

  // controls.tokens.tools['open-t20-arton-map'] = {
  controls.templates.tools['open-t20-arton-map'] = {
    // controls.tools['open-t20-arton-map'] = {
    name: 'open-t20-arton-map',
    title: 'Abrir mapa de Arton',
    icon: 'fa-regular fa-map',
    button: 'true',
    onChange: () => {
      const interactiveMapApp = new InteractiveMapApp();
      interactiveMapApp.render(true);
    },
  };
});
