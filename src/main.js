import App from './App.html';

const app = new App({
	target: document.body,
	data: {
		// count: 0,
		startedAt: null,
		lastClickedAt: null,
	}
});

// setInterval(() => app.set({ name: Date.now() }), 2000)

window.app = app;

export default app;