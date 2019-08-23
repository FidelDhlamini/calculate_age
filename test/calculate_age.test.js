 describe('The Greeting function', function () {

     it('it should take the name entered in the textbox', function () {
         var userTypesName = CalculateAge();
         userTypesName.takeName("Fidel")
         assert.equal("Fidel", userTypesName.takeName("Fidel"));


     });
     it('it should return error message if nothing is entered in the textbox', function () {
         var userTypesName = CalculateAge();
         userTypesName.takeName()
         userTypesName.getAge()

         assert.equal("", userTypesName.takeName(""));
         assert.equal("Invalid name / year", userTypesName.presentUserAge());


     });
     it('it should take the year entered in the textbox and return how many years ago that was', function () {
         var userTypesYear = CalculateAge();
         userTypesYear.getAge(1996)
         assert.equal(23, userTypesYear.getAge(1996));


     });
     it('it should return a message with age and name of person', function () {
         var output = CalculateAge();
         output.getAge(1996)
         output.takeName("Fidel")

         assert.equal('Fidel is 23 years old', output.presentUserAge());


     });







 });