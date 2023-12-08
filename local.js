  // Function to handle form submission
  document.getElementById('applicationForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    // Get form data
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const gender = document.getElementById('gender').value;
    const dateofbirth = document.getElementById('dateofbirth').value;
    // const image=document.getElementById("image").value;
    const phone = document.getElementById('phone').value;
    const  country= document.getElementById('country').value;
    const resume = document.getElementById('resume').value;
    const middlename = document.getElementById('name_1').value;
    const lastname = document.getElementById('name_2').value;

    // Create an object to store the data
    const personalData = {
        name: name,
        email: email,
        gender:gender,
        dateofbirth:dateofbirth,
        phone:phone,
        // image:image,
        country:country,
        resume:resume,
        name_1:middlename,
        name_2:lastname

    };

    // Store the data in local storage as a JSON string
    localStorage.setItem('personalData', JSON.stringify(personalData));

  
    alert("Form data saved in local storage.")

    setTimeout (function() {
        document.getElementById('name').value = '';
        document.getElementById('email').value = '';
        document.getElementById('gender').value = '';
        document.getElementById('dateofbirth').value = '';
        document.getElementById('phone').value = '';
        // document.getElementById("image").value ='';
        document.getElementById('country').value = '';
        document.getElementById('resume').value = '';
        document.getElementById('name_1').value = '';
        document.getElementById('name_2').value = '';

        // Reset the form
        document.getElementById('applicationForm').reset();
    },60000);

    // Clear any error or message elements
    document.getElementById("error").textContent = "";
    document.getElementById("message").textContent = "Application details submitted ";

   
});
document.addEventListener("DOMContentLoaded", function() {
    
    // Get references to the form and the next button
    const form = document.getElementById("applicationForm");
    const nextButton = document.getElementById("nextButton");
   
    // const submitButton = document.getElementById("submitButton");
  
          // Event listener for the "Next" button
          nextButton.addEventListener('click', function(event) {
              event.preventDefault();
              alert("Kindly complete all the required fields"); 
          });

          form.addEventListener('submit', function(event) {
            event.preventDefault();
            window.location.href = './education.html'; 
        });
  
          // Event listener for the form submission
         
        });


var phoneInput = document.getElementById("phone");
phoneInput.addEventListener("input", function() {
this.value = this.value.replace(/\D/g, ''); // Remove alphabets characters
 });

 var nameInput = document.getElementById("name");
nameInput.addEventListener("input", function() {
this.value = this.value.replace(/\d/g, ''); // Remove numeric characters
 });
 var middleInput = document.getElementById("name_1");
middleInput.addEventListener("input", function() {
this.value = this.value.replace(/\d/g, ''); // Remove numeric characters
 });

 var lastInput = document.getElementById("name_2");
lastInput.addEventListener("input", function() {
this.value = this.value.replace(/\d/g, ''); // Remove numeric characters
 });



// = ==============================      EDUCATIONAL DETAILS  ==================================================


document.addEventListener("DOMContentLoaded", function() {
    
    // Get references to the form and the next button
    const qualification_form  = document.getElementById("qualification-form ");
    // const button_submit = document.getElementById("button_submit");
    const button_next = document.getElementById("button_next");
    const button_back_3 = document.getElementById("button_back_3");

             button_back_3.addEventListener('click', function(event) {
                event.preventDefault();
                window.history.back(); 
            });
  
          // Event listener for the "Next" button
          button_next.addEventListener('click', function(event) {
              event.preventDefault();
              alert("Kindly complete all the required fields");
          });
  
          //  form submission
          qualification_form.addEventListener('submit', function(event) {
              event.preventDefault();
              window.location.href = "./experience.html"; 
          });
 });
    document.getElementById('qualification-form').addEventListener('submit', function(event) {
    event.preventDefault(); 

    // Get form data
    const degree = document.getElementById("degree").value;
    const course = document.getElementById("course").value;
    const institution = document.getElementById("institution").value;
    const percentage = document.getElementById("percentage").value;
    const year = document.getElementById("year").value;

    // Create an object to store the data
    const educationalData = {
        degree: degree,
        course: course,
        institution: institution,
        percentage: percentage,
        year: year
    };

 
    localStorage.setItem('educationalData', JSON.stringify(educationalData));

    // Display a success message
   
    setTimeout(function() {
        document.getElementById("degree").value = "";
        document.getElementById("course").value = "";
        document.getElementById("institution").value = "";
        document.getElementById("percentage").value = "";
        document.getElementById("year").value = "";
        document.getElementById("qualification-form").reset();
    },60000);
    
    alert("Form data saved in local storage.");
    document.getElementById("error").textContent = "";
    document.getElementById("message").textContent = "Application details submitted ";
    // Reset the form
});

        
var degreeInput = document.getElementById("degree");
degreeInput.addEventListener("input", function() {
this.value = this.value.replace(/\d/g, ''); // Remove numeric 
 });

 var courseInput = document.getElementById("course");
courseInput.addEventListener("input", function() {
this.value = this.value.replace(/\d/g, ''); // Remove numeric 
 });

 var institutionInput = document.getElementById("institution");
institutionInput.addEventListener("input", function() {
this.value = this.value.replace(/\d/g, ''); // Remove numeric 
 });

 var percentageInput = document.getElementById("percentage");
 percentageInput.addEventListener("input", function() {
this.value = this.value.replace(/\D/g, ''); // Remove numeric 
 });

 var yearInput = document.getElementById("year");
yearInput.addEventListener("input", function() {
this.value = this.value.replace(/\D/g, ''); // Remove numeric 
 });


//  ====================================   EXPERIENCE/FRESHER     =========================


document.addEventListener("DOMContentLoaded", function () {
    const experienceRadio = document.getElementById("experienced");
    const fresherRadio = document.getElementById("fresher");
    const experienceFields = document.getElementById("experience-fields");
    const fresherFields = document.getElementById("fresher-fields");
    const jobApplicationForm = document.getElementById("job-application-form");

    // Event listener for the radio buttons
    experienceRadio.addEventListener("change", function () {
        if (experienceRadio.checked) {
            experienceFields.style.display = "block";
            fresherFields.style.display = "none";
        }
    });

    fresherRadio.addEventListener("change", function () {
        if (fresherRadio.checked) {
            experienceFields.style.display = "none";
            fresherFields.style.display = "block";
        }
    });

    // Event listener for the "Next" button
    const button_next_2 = document.getElementById("button_next_2");
    button_next_2.addEventListener('click', function (event) {
        event.preventDefault();
        alert("Kindly complete all the required fields");
    });

    // Event listener for the "Back" button
    const button_back_2 = document.getElementById("button_back_2");
    button_back_2.addEventListener('click', function(event) {
        event.preventDefault();
        window.history.back(); // Go back to the previous page
    });

    // Event listener for the form submission
    jobApplicationForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const experience = document.querySelector('input[name="experience"]:checked').value;

        if (experience === "experienced") {
            const yearsOfExperience = document.getElementById("yearsOfExperience").value;
            const companyname = document.getElementById("companyname").value;
            const skills = document.getElementById("skills").value;
            
            if (!yearsOfExperience || !companyname || !skills) {
                alert("Please complete all the required fields.");
                  return; 
                }


            const experienceData = {
                yearsOfExperience: yearsOfExperience,
                companyname: companyname,
                skills: skills
            };

            localStorage.setItem('experienceData', JSON.stringify(experienceData));
        } else if( experience === "fresher") {
            const qualification = document.getElementById("qualification").value;
            const skills = document.getElementById("skills").value;

            if (!qualification || !skills) {
                alert("Please complete all the required fields.");
               return;
              }
            
            const freshersData = {
                qualification: qualification,
                skills: skills
            };

            localStorage.setItem('freshersData', JSON.stringify(freshersData));
        }

        // Display a success message
        alert("Form data saved in local storage.");


setTimeout(function () {
if (experience === "experienced") {
    document.getElementById("yearsOfExperience").value = "";
    document.getElementById("companyname").value = "";
    document.getElementById("skills").value = "";
} else if (experience === "fresher") {
    document.getElementById("qualification").value = "";
    document.getElementById("skills").value = "";
}
// Reset the form
jobApplicationForm.reset();
}, 30000);

        // Now, you can navigate to the next page
        window.location.href = "./terms.html";
    });
});



      var companyInput = document.getElementById("companyname");
         companyInput.addEventListener("input", function() {
        this.value = this.value.replace(/\d/g, ''); // Remove numeric characters
          });
          var yearexperienceInput = document.getElementById("yearsOfExperience");
          yearexperienceInput.addEventListener("input", function() {
        this.value = this.value.replace(/\D/g, ''); // Remove numeric characters
          });
          var qualificationInput = document.getElementById("qualification");
         qualificationInput.addEventListener("input", function() {
        this.value = this.value.replace(/\d/g, ''); // Remove numeric characters
          });


          // ==================================================  TERMS AND CONDITONS ============


          document.addEventListener('DOMContentLoaded', function () {
            const agreeCheckbox = document.getElementById('agree-checkbox');
            const submitButton = document.getElementById('submit-button');
            const successMessage = document.getElementById('success-message');
            const agreeForm = document.getElementById('agree-form');
            const button_back_1 = document.getElementById("button_back_1");
            button_back_1.addEventListener('click', function(event) {
                event.preventDefault();
                window.history.back(); // Go back to the previous page
            });
        
            agreeCheckbox.addEventListener('change', function () {
                submitButton.disabled = !agreeCheckbox.checked;
            });
            agreeForm.addEventListener('submit', function (e) {
                e.preventDefault(); 
                setTimeout(function () {
                    successMessage.classList.remove('hidden');
                 
                }, 100);
            });
        });
        








