const returnFirstTwoDrivers = function(drivers){
    return [drivers[0], drivers[1]]
}
const returnLastTwoDrivers = function(drivers){
    return [drivers[drivers.length-2], drivers[drivers.length-1]]
}
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(multiples){
   if (Number.isInteger(multiples)){
    return function(fare){
        return fare*multiples;
    }
   }
//    return function(){};
    
}

function fareDoubler(fare){
    const fareDoubled = createFareMultiplier(2)(fare);
    return fareDoubled;
}
function fareTripler(fare){
    const fareTripled = createFareMultiplier(3)(fare);
    return fareTripled;
}
function selectDifferentDrivers(drivers, fun){
    const twoDrivers = fun(drivers);
    return (twoDrivers[0] === drivers[0])? twoDrivers:twoDrivers;
}