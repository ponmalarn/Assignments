function launchBrowser(browserName)
{
    if(browserName.toLowerCase() == "chrome")
        console.log("Browser Name is ", browserName)
    else
        console.log("Browser Name is ",browserName ," and not chrome")
}
function runTest(testType)
{ 
    let type=testType.toLowerCase()
    switch(type)
    {
        case "smoke":
            console.log("Running smoke case")
            break
        case "sanity":
            console.log("Running sanity case")
            break
        case "regression":
            console.log("Running Regression case") 
            break
         default:
            console.log("Running default case")
            break
    }

}

let testType="Regression"
let browserName="CHROME"
runTest(testType)
launchBrowser(browserName)