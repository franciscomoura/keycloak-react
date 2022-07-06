var keycloak;

function init() {
	// If the Keycloak constructor doesn't exist we'll throw
	// an error.
	if (window.Keycloak === undefined) {
		throw new Error('Can\'t find Keycloak on the global scope');
	}
	// Later on the article we'll see what a  and
	// a  means in Keycloak.
	keycloak = new window.Keycloak({
		url: 'https://auth.local',
		realm: 'demo',
		clientId: 'react-app-1'
	});
}

export { keycloak, init };