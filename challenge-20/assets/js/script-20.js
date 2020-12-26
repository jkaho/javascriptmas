// -------Challenge------- // 
// GoDaddy makes a lot of different top-level domains available to its customers
// A top-level domain is one that goes directly after the last dot ('.') in the domain name
// Example: .com in example.com
/* 
    To help users choose from available domains, GoDaddy is introducing a new feature 
    that shows the type of the chosen top-level domain
*/
// You have to implement this feature
/* 
    To begin with, you want to write a function that labels the domains as "commercial",
    "organization", "network" or "information" for .com, .org, .net or .info, respectively
*/
// For the given list of domains, return the list of their labels 

// -------My Solution------- // 
function domainType(domains) {
    var labelArr = [];
    for (var i = 0; i < domains.length; i++) {
        var splitDomain = domains[i].split(".");
        if (splitDomain[splitDomain.length - 1] === "com") {
            labelArr.push("commercial");
        } else if (splitDomain[splitDomain.length - 1] === "org") {
            labelArr.push("organization");
        } else if (splitDomain[splitDomain.length - 1] === "net") {
            labelArr.push("network");
        } else if (splitDomain[splitDomain.length - 1] === "info") {
            labelArr.push("information");
        } else {
            labelArr.push("not recognized");
        }
    }
    return labelArr;
}
