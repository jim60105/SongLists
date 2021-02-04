var myPlaylist = (typeof myPlaylist === 'undefined') ? [] : myPlaylist;
(function() {
    /**
     * 標籤
     * @type {string[]}
     */
    var tags = ['quon', 'tama', 'public', 'RadioQTama', 'NotSongs'];
    /**
     * 播放清單名稱
     * @type {string}
     */
    var listName = 'QuonTamaRadioQTamaList';
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
        ['tj-lHz1dJs4', 0, 0, '#0 アニメ『ソードアート・オンライン』を語る！', 'https://gitlab.com/api/v4/projects/23810267/repository/blobs/bf3af5411306930d280ea3046608b741aa05efa4/raw'],
        ['zbp1ZpZHxNM', 0, 0, '#1 アニメ『はたらく細胞』を語る！', 'https://gitlab.com/api/v4/projects/23810267/repository/blobs/202b0a979c8414f5c01e640f957d292e32ea1eeb/raw'],
        ['Qvfvsgz8MEU', 0, 0, '#2 アニメ『ホリミヤ』を語る！', 'https://gitlab.com/api/v4/projects/23810267/repository/blobs/683bde2e7e19f3a672623e364e73c94c434a403b/raw'],
        ['9LuK87QodS4', 0, 0, '#3 アニメ『進撃の巨人』を語る！', 'https://gitlab.com/api/v4/projects/23810267/repository/blobs/2b49206db57ac2c51d810538b8e3671fd8a6a154/raw'],
    ];

    /** 載入判斷 **/
    CheckAndLoadPlaylist(listName, tags, newPlaylist);
})();