function lyric() {
    for(i=99; i>=0; i--) {
        // let j = i-1;
        if(i>=1) {
            console.log(i + " bottles of beer on the wall, " + i + " bottles of beer.\nTake one down and pass it around, "  + (i-1) + " bootles of beer on the wall.")
        }
        else {
            console.log("No more bottles of beer on the wall, no more bottles of beer.\nGo to the store and buy some more, 99 bottles of beer on the wall.")
        }
    }
}
lyric();