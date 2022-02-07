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


const oldAccounts = [
    { userID: 15, title: "Developer Apprentice", accessLevel: "user" },
    { userID: 63, title: "Developer Apprentice", accessLevel: "user" },
    { userID: 97, title: "Developer Apprentice", accessLevel: "user" },
    { userID: 12, title: "Developer Apprentice", accessLevel: "user" },
    { userID: 44, title: "Developer Apprentice", accessLevel: "user" },
  ];
  
  const newEngineers = map(oldAccounts, function (account) {
    return Object.assign({}, account, { accessLevel: "admin" });
  });
  
 console.log (oldAccounts);
  // => [
  //      { userID: 15, title: "Developer Apprentice", accessLevel: "user" },
  //      { userID: 63, title: "Developer Apprentice", accessLevel: "user" },
  //      { userID: 97, title: "Developer Apprentice", accessLevel: "user" },
  //      { userID: 12, title: "Developer Apprentice", accessLevel: "user" },
  //      { userID: 44, title: "Developer Apprentice", accessLevel: "user" }
  //    ]
  
  console.log(newEngineers);
  // => [
  //      { userID: 15, title: "Developer Apprentice", accessLevel: "admin" },
  //      { userID: 63, title: "Developer Apprentice", accessLevel: "admin" },
  //      { userID: 97, title: "Developer Apprentice", accessLevel: "admin" },
  //      { userID: 12, title: "Developer Apprentice", accessLevel: "admin" },
  //      { userID: 44, title: "Developer Apprentice", accessLevel: "admin" }
  //    ]