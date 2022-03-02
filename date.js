// module.exports = "Henlo Frens!";


exports.getDate = function(){
    let today = new Date();
    let options = { day:"numeric", month:"long", weekday:"long" };
    let day = today.toLocaleDateString("en-US",options);
    return day;
}


module.exports.getDay = function(){
    let today = new Date();
    let options = { weekday:"long" };
    let day = today.toLocaleDateString("en-US",options);
    return day;
}


console.log(module.exports);