function manageSongs (arr ){
    class Song {
        constructor(typeList , name , time ){
            this.typeList = typeList;
            this.name = name;
            this.time = time;
        }     
    }

    let songsArr =[];
    let songCount = arr.shift();
    let searchedListType = arr.pop();

    for (let currentSong = 1; currentSong <=songCount; currentSong++){

        let songStr = arr.shift();
        let [listType , name , time] = songStr.split('_');
        let songObj = new Song (listType , name , time);
        songsArr.push(songObj);
    }
    if (searchedListType === 'all'){
        for (songObj of songsArr){
            console.log(songObj.name);
        } 
        
    }else {
        let filterSongs = songsArr.filter(songObj => songObj.typeList === searchedListType);

        for (let songObj of filterSongs ){
            console.log(songObj.name);
        }
    }
}

manageSongs([3,'favourite_DownTown_3:14', 'favourite_Kiss_4:16', 'favourite_Smooth Criminal_4:01', 'favourite'])