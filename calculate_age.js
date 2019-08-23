function CalculateAge() {
    var nameTaken = '';
    var calculatedAge = 0;
    var errorMessage = '';

    function takeName(name) {

        nameTaken = name

        // console.log(nameTaken);
        return nameTaken;
    }
    // console.log(takeName("Fidel"));

    function getAge(year) {

        var currentDate = new Date();
        var currentYear = currentDate.getFullYear();
        var age = currentYear - year;
        calculatedAge = age;
        return calculatedAge;
    }


    function presentUserAge() {
        if (nameTaken && calculatedAge) {


            return nameTaken + " is " + calculatedAge + " years old"
        } else {
            return "Invalid name / year";
        }
    }
    // console.log(presentUserAge());

    return {
        takeName,
        getAge,
        presentUserAge
    }

}