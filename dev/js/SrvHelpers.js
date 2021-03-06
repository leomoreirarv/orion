orion.
    service("SrvHelpers", ["$http", function($http){
        this.strip_tags = function (input, allowed) {
            allowed = (((allowed || '') + '')
                .toLowerCase()
                .match(/<[a-z][a-z0-9]*>/g) || [])
                .join('');
            var tags = /<\/?([a-z][a-z0-9]*)\b[^>]*>/gi,
                commentsAndPhpTags = /<!--[\s\S]*?-->|<\?(?:php)?[\s\S]*?\?>/gi;
            return input.replace(commentsAndPhpTags, '')
                .replace(tags, function($0, $1) {
                    return allowed.indexOf('<' + $1.toLowerCase() + '>') > -1 ? $0 : '';
                });
        }

        this.dataAmericanToBrazilian = function(data){
            var vetorData = data.split("-");
            return vetorData[2] + "/" + vetorData[1] + "/" + vetorData[0];
        }

        this.fileExists = function(url){
            $http.get(url)
                .success(function(){
                    return this;
                })
                .error(function(){
                    console.error("Arquivo não encontrado");
                })
        }
    }]);