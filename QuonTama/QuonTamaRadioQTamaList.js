var myPlaylist = (typeof myPlaylist === 'undefined') ? [] : myPlaylist;
(function() {
    /**
     * 標籤
     * @type {string[]}
     */
    var tags = ["quon", "tama", "public", "RadioQTama", "NotSongs"];
    /**
     * 播放清單名稱
     * @type {string}
     */
    var listName = "QuonTamaRadioQTamaList";
    /**
     * ['VideoID', StartTime, EndTime, 'Title']
     * VideoID: 必須用引號包住，為字串型態。
     * StartTime: 只能是非負數。如果要從頭播放，輸入0
     * EndTime: 只能是非負數。如果要播放至尾，輸入0
     * Title: 必須用引號包住，為字串型態
     * SubSrc: 必須用引號包住，為字串型態
     * @type {*[]}
     */
    var newPlaylist = [
        ['tj-lHz1dJs4', 0, 0, "#0 アニメ『ソードアート・オンライン』を語る！", "https://github.com/jim60105/SongLists/raw/master/QuonTama/Sub/RadioQTama/0.vtt"],
        ['zbp1ZpZHxNM', 0, 0, "#1 アニメ『はたらく細胞』を語る！", "https://github.com/jim60105/SongLists/raw/master/QuonTama/Sub/RadioQTama/1.vtt"],
        ['Qvfvsgz8MEU', 0, 0, "#2 アニメ『ホリミヤ』を語る！"],
        ['9LuK87QodS4', 0, 0, "#3 アニメ『進撃の巨人』を語る！"],
    ];

    /** 載入判斷 **/
    CheckAndLoadPlaylist(listName, tags, newPlaylist);
})();