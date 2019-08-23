const nameInpt = document.querySelector(".nameInput");
const yearInpt = document.querySelector(".yearInput");
const calculateBtn = document.querySelector(".calculateButton");
const display = document.querySelector(".message");
var instance = CalculateAge();



function getTheirAge() {
instance.takeName(nameInpt.value)
instance.getAge(yearInpt.value)

    if (calculateBtn) {
       
        var displayAge = instance.presentUserAge()
        //  var displayError = instance.takeName()

    }
    display.innerHTML = displayAge;
    // display.innerHTML = displayError;


}
calculateBtn.addEventListener("click", getTheirAge)