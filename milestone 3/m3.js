var form = document.getElementById("resume-form");
var resumeOutput = document.getElementById("resume-output");
var resumeContent = document.getElementById("resume-content");
var generateResumeButton = document.getElementById("generate-resume");
var editResumeButton = document.getElementById("edit-resume");
generateResumeButton.addEventListener("click", function () {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var education = document.getElementById("education").value;
    var experience = document.getElementById("experience").value;
    var skills = document.getElementById("skills").value;
    if (name && email) {
        resumeContent.innerHTML = "\n      <p><strong>Name:</strong> ".concat(name, "</p>\n      <p><strong>Email:</strong> ").concat(email, "</p>\n      <p><strong>Education:</strong> ").concat(education, "</p>\n      <p><strong>Work Experience:</strong> ").concat(experience, "</p>\n      <p><strong>Skills:</strong> ").concat(skills, "</p>\n    ");
        form.classList.add("hidden");
        resumeOutput.classList.remove("hidden");
    }
    else {
        alert("Please fill out all required fields.");
    }
});
editResumeButton.addEventListener("click", function () {
    form.classList.remove("hidden");
    resumeOutput.classList.add("hidden");
});
