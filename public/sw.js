const CACHE_NAME = 'theophilus-portfolio-v1';
const urlsToCache = [
	'/',
	'/index.html',
	'/public/theo.png',
	'/src/main.tsx',
	// Add other static assets you want to cache
];

// Install event - cache static assets
self.addEventListener('install', (event) => {
	event.waitUntil(
		caches.open(CACHE_NAME).then((cache) => {
			return cache.addAll(urlsToCache);
		})
	);
});

// Activate event - clean up old caches
self.addEventListener('activate', (event) => {
	event.waitUntil(
		caches.keys().then((cacheNames) => {
			return Promise.all(
				cacheNames
					.filter((cacheName) => cacheName !== CACHE_NAME)
					.map((cacheName) => caches.delete(cacheName))
			);
		})
	);
});

// Fetch event - network first, then cache
self.addEventListener('fetch', (event) => {
	event.respondWith(
		fetch(event.request)
			.then((response) => {
				// Clone the response
				const responseToCache = response.clone();

				// Cache the new response
				caches.open(CACHE_NAME).then((cache) => {
					cache.put(event.request, responseToCache);
				});

				return response;
			})
			.catch(() => {
				// If network fails, try to get from cache
				return caches.match(event.request).then((response) => {
					if (response) {
						return response;
					}
					// If not in cache, return offline page or fallback
					return new Response(
						'You are offline. Please check your connection.'
					);
				});
			})
	);
});
