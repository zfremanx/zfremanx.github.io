// Функция вызовется при появление ошибки
function onPlayerError(errorCode) {
        alert("Упс. Что-то пошло не так... Код ошибки:" + errorCode);
}

// Allow the user to set the volume from 0-100
function setVideoVolume(volume) {
        if (isNaN(volume) || volume < 0 || volume > 100) {
                alert("Упс. Что-то пошло не так...");
        }
        else if (ytplayer) {
                ytplayer.setVolume(volume);
        }
}

// Начать проигрывать ролик
function playVideo() {
        if (ytplayer) {
                ytplayer.playVideo();
        }
}

// По окончанию ролика будет вызвана эта функция. Она запустит ролик повторно.
function StateChange() {
        if (ytplayer) {
                if (ytplayer.getPlayerState() === 0) {
                        ytplayer.playVideo()
                }
        }
}

// Эта функция автоматическив вызывается при загрузки плеера
function onYouTubePlayerReady(playerId) {
        ytplayer = document.getElementById("ytPlayer");
        // В случаи ошибки вызывается функция
        ytplayer.addEventListener("onError", "onPlayerError");
        ytplayer.addEventListener("onStateChange", "StateChange");
        // Загрузка видео в плеер. Может использоваться отдельно.
        ytplayer.cueVideoById("5Lbo_XJbLs0");
        // Запуск видео сразу после загрузки
        ytplayer.playVideo()
        // Сразу ставим громкость на 20 из 100
        setVideoVolume('20')
}

// The "main method" of this sample. Called when someone clicks "Run".
function loadPlayer() {
        // Lets Flash from another domain call JavaScript
        var params = {
                allowScriptAccess: "always",
                wmode: "opaque"
        };
        // Ставим ИД для embed
        var atts = {
                id: "ytPlayer"
        };
        // Вся магия происходит с помощью SWFObject (http://code.google.com/p/swfobject/)
        // Сюда можете вписать ваши параметры для видео
        swfobject.embedSWF("https://www.youtube.com/apiplayer?" +
                                                "&enablejsapi=1&playerapiid=player1&hd=1",
                                                "videoDiv", "100%", "100%", "8", null, null, params, atts);
}

// Загружаем видео.
function _run() {
        loadPlayer();
}
google.setOnLoadCallback(_run);