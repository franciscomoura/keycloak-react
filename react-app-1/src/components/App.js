import React from 'react';
import Keycloak from './Keycloak.js';
import { keycloak } from '../modules/keycloak.js';

function Welcome() {
	return (
		<div>
			Welcome <bold>{keycloak.idTokenParsed.preferred_username}! </bold> to React App 1<br/>
			<br/>
			<button onClick={() => keycloak.accountManagement()}>Account</button>
			&nbsp;
			<button onClick={() => keycloak.logout()}>Logout</button>

			<div class='flex-parent-element'>

				<div class="flex-child-element magenta">
					Token: <pre>{JSON.stringify(keycloak.tokenParsed, null, 2)}</pre>
				</div>
					
				<div class="flex-child-element green">
					ID Token: <pre>{JSON.stringify(keycloak.idTokenParsed, null, 2)}</pre>
				</div>
				
			</div>
		</div>
	);
}

function App() {
	return (
		<Keycloak>
			<Welcome />
		</Keycloak>
	);
}

export default App;