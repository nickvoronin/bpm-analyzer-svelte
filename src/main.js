import App from './App.html';
import './normalize.css'

const app = new App({
	target: document.body,
	data: {
		// count: 0,
		startedAt: null,
		lastClickedAt: null,
	}
});

export default app;