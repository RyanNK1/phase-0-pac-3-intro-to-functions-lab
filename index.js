// function shout(string) {
//     return string.toUpperCase();
// }
// function whisper(string) {
//     return string.toLowerCase();
// }
// function logShout(string){
//     console.log(string.toUpperCase())
// }
// function logWhisper(string){
//     console.log(string.toLowerCase())
// }
// function sayHiToHeadphonedRoommate(string){
//     if (string.toLowerCase()===string){
//         return "I can't hear you!"
//     }
//     if (string.toUpperCase()===string){
//         return "YES INDEED!"
//     }
//     if (string==="Let's have dinner together!"){
//         return "I would love to!"
//     }
// }
function shout(string){
    return string.toUpperCase();
};
function whisper(string){
    return string.toLowerCase();
};
function logShout(string){
    console.log(string.toUpperCase());
};
function logWhisper(string){
    console.log(string.toLowerCase())
};
function sayHiToHeadphonedRoommate(string){
    if (string === string.toUpperCase()) {
        return "YES INDEED!"
    }else if (string === string.toLowerCase()){
        return "I can't hear you!"
    }else {
        return "I would love to!"
    }
}
// completed review
