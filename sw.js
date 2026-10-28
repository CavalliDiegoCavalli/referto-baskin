// Referto Training è chiuso (2026-10-28): il service worker si toglie, svuota le cache e ricarica le pagine aperte, che mostrano l'avviso.
self.addEventListener('install',()=>self.skipWaiting());
self.addEventListener('activate',e=>e.waitUntil((async()=>{
  for(const k of await caches.keys()) await caches.delete(k);
  await self.registration.unregister();
  for(const c of await self.clients.matchAll({type:'window'})) c.navigate(c.url);
})()));
