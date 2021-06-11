//Guardar en el cache dinamico
function actualizaCacheDinamico( cacheName, req, resp ) {

    if (resp.ok) {
        return caches.open(cacheName).then(cache => {
            cache.put(req, resp.clone());
            return resp.clone();
        });
    }else{
        return resp;
    }

}