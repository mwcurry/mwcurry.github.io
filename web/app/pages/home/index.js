import ATV from 'atvjs';

import template from './template.hbs';

let Page = ATV.Page.create({
	name: 'home',
	template: template,
    ready(options, resolve, reject) {
        let heheGames = options.baseAPI + 'games';
        let data = {
            ApiKey: 'igLnX4x2'
        };
         ATV
        .Ajax
        .get(heheGames, {headers:data})
        .then((xhr) => {
            let response = xhr.response;
            resolve({
                name: response.name,
                message: response.message
            });
            console.log(response);
        }, (xhr) => {
            let response = xhr.response;
            reject({
                status: xhr.status,
                message: response.message
            });
        });
	},
	events: {
		select: 'onSelect'
	},
	onSelect(e) {
		let element = e.target;
		let menuNavigation = element.getAttribute('data-href-menu');

		if (menuNavigation) {
			ATV.Navigation.navigateToMenuPage();
		}
	}
});

export default Page;