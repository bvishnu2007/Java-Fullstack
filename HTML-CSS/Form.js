document.getElementById("details").addEventListener("submit", function(event) {
    event.preventDefault();
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let contact = document.getElementById("contact").value;
    let age = document.getElementById("age").value;
    let gender = document.getElementById("gender").value;
    let address = document.getElementById("address").value;
    document.getElementById("p1").textContent = "Name: " + name;
    document.getElementById("p2").textContent = "Email: " + email;
    document.getElementById("p3").textContent = "Contact: " + contact;
    document.getElementById("p4").textContent = "Age: " + age;
    document.getElementById("p5").textContent = "Gender: " + gender;
    document.getElementById("p6").textContent = "Address: " + address;
    let photo = document.getElementById("image").files[0];
    if (photo) {
        let reader = new FileReader();
        reader.onload = function(e) {
            let img = document.getElementById("img");
            img.src = e.target.result;
            img.style.display = "block";
        };
        reader.readAsDataURL(photo);
    }
});