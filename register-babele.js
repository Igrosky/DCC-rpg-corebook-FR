Hooks.on('init', () => {
    if(typeof Babele !== 'undefined') {
        Babele.get().register({
            module: 'dcc-traduction-babele-fr',
            lang: 'fr',
            dir: 'compendiums'
        });
    }