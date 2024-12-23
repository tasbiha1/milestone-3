const form = document.getElementById("resume-form") as HTMLFormElement;
const resumeOutput = document.getElementById("resume-output") as HTMLDivElement;
const resumeContent = document.getElementById("resume-content") as HTMLDivElement;
const generateResumeButton = document.getElementById("generate-resume") as HTMLButtonElement;
const editResumeButton = document.getElementById("edit-resume") as HTMLButtonElement;

generateResumeButton.addEventListener("click", () => {
  const name = (document.getElementById("name") as HTMLInputElement).value;
  const email = (document.getElementById("email") as HTMLInputElement).value;
  const education = (document.getElementById("education") as HTMLTextAreaElement).value;
  const experience = (document.getElementById("experience") as HTMLTextAreaElement).value;
  const skills = (document.getElementById("skills") as HTMLTextAreaElement).value;

  if (name && email) {
    resumeContent.innerHTML = `
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Education:</strong> ${education}</p>
      <p><strong>Work Experience:</strong> ${experience}</p>
      <p><strong>Skills:</strong> ${skills}</p>
    `;
    form.classList.add("hidden");
    resumeOutput.classList.remove("hidden");
  } else {
    alert("Please fill out all required fields.");
  }
});

editResumeButton.addEventListener("click", () => {
  form.classList.remove("hidden");
  resumeOutput.classList.add("hidden");
});
