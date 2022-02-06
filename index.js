function findMatching(drivers, search){
    const result = drivers.filter (driver =>driver.toUpperCase() === search.toUpperCase());
    return result;
}

function fuzzyMatch(drivers, search){
    const result = drivers.filter (driver => driver.slice(0, 2) === search.slice(0, 2));
    return result;
}

function matchName(drivers, search){
    const result = drivers.filter (driver => driver.name === search);
    console.log (drivers);
    return result;
}
