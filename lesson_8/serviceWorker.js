// должно быть true в production
var doCashe = true

// имя кэша
var CASHE_NAME = 'react-chat-name'

// очищает старый кеш
self.addEventListener ('activate', event => {
    const cacheWhiteList = [CASHE_NAME]
    event.waitUntil (
        caches.keys ()
            .then (keyList => 
                Promise.all (keyList.map (key => {
                    if (!cacheWhiteList.includes(key)) {
                        console.log('Deleting cache: ' + key)
                        return caches.delete(key)
                    }
                })))
    )
})

// 'install' вызывается, как только пользователь впервые открывает PWA
self.addEventListener('install', function(event) {
    if (doCashe) {
        event.waitUntil (
            caches.open (CASHE_NAME) 
                .then (function (cache) {
                    // получаем данные из манифеста (они кэшируются)
                    fetch ('manifest/manifest.json')
                        .then (response => {
                            return response.json()
                        })
                        .then (assets => {
                            // открываем и кэшируем нужные страницы и файлы
                            const urlsToCache = [
                                '',
                                '/chat/*'
                            ]
                            cache.addAll (urlsToCache)
                            console.log ('cached')
                        })
                })
        )
    }
})

self.addEventListener('push', function(event) {

    console.info('Event: Push')
   
    var title = 'Тут новый пуш прилетел!'
   
    var body = {
      'body': 'Нажми сюда, чтобы открыть',
      'tag': 'pwa',
      'icon': './manifest/logo-pwa-48.png'
    }
   
    event.waitUntil(
      self.registration.showNotification(title, body)
    )
   })
   

// Когда приложение запущено, service worker перехватывает запросы и отвечает на них данными из кеша, если они есть
self.addEventListener ('fetch', function (event) {
    if (doCashe) {
        event.respondWith (
            caches.match (event.request).then(function(response) {
                return response || fetch (event.request)
            })
        )
    }
})