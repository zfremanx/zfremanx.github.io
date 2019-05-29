// ������� ��������� ��� ��������� ������
function onPlayerError(errorCode) {
        alert("���. ���-�� ����� �� ���... ��� ������:" + errorCode);
}

// Allow the user to set the volume from 0-100
function setVideoVolume(volume) {
        if (isNaN(volume) || volume < 0 || volume > 100) {
                alert("���. ���-�� ����� �� ���...");
        }
        else if (ytplayer) {
                ytplayer.setVolume(volume);
        }
}

// ������ ����������� �����
function playVideo() {
        if (ytplayer) {
                ytplayer.playVideo();
        }
}

// �� ��������� ������ ����� ������� ��� �������. ��� �������� ����� ��������.
function StateChange() {
        if (ytplayer) {
                if (ytplayer.getPlayerState() === 0) {
                        ytplayer.playVideo()
                }
        }
}

// ��� ������� �������������� ���������� ��� �������� ������
function onYouTubePlayerReady(playerId) {
        ytplayer = document.getElementById("ytPlayer");
        // � ������ ������ ���������� �������
        ytplayer.addEventListener("onError", "onPlayerError");
        ytplayer.addEventListener("onStateChange", "StateChange");
        // �������� ����� � �����. ����� �������������� ��������.
        ytplayer.cueVideoById("5Lbo_XJbLs0");
        // ������ ����� ����� ����� ��������
        ytplayer.playVideo()
        // ����� ������ ��������� �� 20 �� 100
        setVideoVolume('20')
}

// The "main method" of this sample. Called when someone clicks "Run".
function loadPlayer() {
        // Lets Flash from another domain call JavaScript
        var params = {
                allowScriptAccess: "always",
                wmode: "opaque"
        };
        // ������ �� ��� embed
        var atts = {
                id: "ytPlayer"
        };
        // ��� ����� ���������� � ������� SWFObject (http://code.google.com/p/swfobject/)
        // ���� ������ ������� ���� ��������� ��� �����
        swfobject.embedSWF("https://www.youtube.com/apiplayer?" +
                                                "&enablejsapi=1&playerapiid=player1&hd=1",
                                                "videoDiv", "100%", "100%", "8", null, null, params, atts);
}

// ��������� �����.
function _run() {
        loadPlayer();
}
google.setOnLoadCallback(_run);