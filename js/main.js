    var feed = new Instafeed({
        get: 'user',
        userId: '8331094',
        clientId: '3744bbfa26b9425980bc510a4fabac24',
        accessToken: '8331094.1677ed0.ed108eaedb3e4697ab59238389076078',
        template: '<a href="{{link}}"><img src="{{image}}" class="img-thumbnail" width="190" height="auto" target="_blank" max-width="100%"></a>',
		limit: '20',
        filter: function(image) {
            return image.tags.indexOf('amslerknives') >= 0;
        }
    });
    feed.run();