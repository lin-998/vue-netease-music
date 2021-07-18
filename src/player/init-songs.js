export class Song{
    constructor(index,song,url={},id){
        this.index=index
        this.name=song.name
        this.artist=song.artist
        this.pic=song.pic||song.picUrl;
        this.src=url
        this.id=id

    }
}