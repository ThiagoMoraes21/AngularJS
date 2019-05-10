/*
    Angular service that wraps the FileReader and transforms an evented API into a promise API.
    The service only exposes a single method (readAsDataUrl). The rest of the FileReader methods
    are omitted for brevity, but they follow the same pattern.
*/

(function (module) {
     
    var fileReader = function ($q, $log) {
        // resolves a promise
        var onLoad = function(reader, deferred, scope) {
            return function () {
                // propagate the promise results
                scope.$apply(function () {
                    deferred.resolve(reader.result);
                });
            };
        };
 
        // rejects a promise
        var onError = function (reader, deferred, scope) {
            return function () {
                scope.$apply(function () {
                    deferred.reject(reader.result);
                });
            };
        };
 
        var onProgress = function(reader, scope) {
            return function (event) {
                scope.$broadcast("fileProgress",
                    {
                        total: event.total,
                        loaded: event.loaded
                    });
            };
        };
 
        var getReader = function(deferred, scope) {
            var reader = new FileReader();
            reader.onload = onLoad(reader, deferred, scope);
            reader.onerror = onError(reader, deferred, scope);
            reader.onprogress = onProgress(reader, scope);
            return reader;
        };
 
        var readAsDataURL = function (file, scope) {
            var deferred = $q.defer();
             
            var reader = getReader(deferred, scope);         
            reader.readAsDataURL(file);
             
            return deferred.promise;
        };
 
        return {
            readAsDataUrl: readAsDataURL  
        };
    };
 
    module.factory("fileReader", ["$q", "$log", fileReader]);
     
}(angular.module("FileReader", [])));
