document.getElementById("applicationForm").addEventListener("submit", function(event) {
    event.preventDefault();

    // Get form data
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const company = document.getElementById("company").value;
    const address = document.getElementById("address").value;
      // Create an object to store the data
      const formData = {
        name: name,
        email: email,
       company:company,
        phone:phone,
        address:address

    };

    // Store the data in local storage as a JSON string
    localStorage.setItem('formData', JSON.stringify(formData));
    // Clear the form fields
    document.getElementById('name').value = '';
    document.getElementById('email').value = '';
      document.getElementById('company').value ='';
   document.getElementById('phone').value ='';
   document.getElementById('address').value ='';
   

    // Display a success message
    alert("Form data saved in local storage.");
  
    // Clear the form 
    document.getElementById("applicationForm").reset();
    document.getElementById("error").textContent = "";
    document.getElementById("message").textContent = "Application details submitted ";


    

});
var phoneInput = document.getElementById("phone");
phoneInput.addEventListener("input", function() {
this.value = this.value.replace(/\D/g, ''); // Remove alphabets characters
 });

 var nameInput = document.getElementById("name");
nameInput.addEventListener("input", function() {
this.value = this.value.replace(/\d/g, ''); // Remove numeric characters
 });
 var companyInput = document.getElementById("company");
 companyInput.addEventListener("input", function() {
this.value = this.value.replace(/\d/g, ''); // Remove numeric characters
  });




  // ===============
  $(document).ready(function () {
    $(".owl-carousel").owlCarousel({
        items: 3, 
        loop: true, 
        autoplay: true, 
        autoplayTimeout: 2000, 
        autoplayHoverPause: true, 
        responsive: {
            0: {
                items: 1 
            },
            768: {
                items: 2 
            },
            1024: {
                items: 3 
            }
        }
    });
});