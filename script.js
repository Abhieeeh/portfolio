// Typewriter Animation for Role
document.addEventListener('DOMContentLoaded', () => {
  const typedRole = document.getElementById('typed-role');
  
  if (!typedRole) return;

  const roles = [
    'Data Scientist',
    'Data Analyst',
    'Full-Stack Developer',
    'Backend Developer'
  ];

  let roleIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  let typingSpeed = 100;

  function type() {
    const currentRole = roles[roleIndex];

    if (isDeleting) {
      typedRole.textContent = currentRole.substring(0, charIndex - 1);
      charIndex--;
      typingSpeed = 50;
    } else {
      typedRole.textContent = currentRole.substring(0, charIndex + 1);
      charIndex++;
      typingSpeed = 100;
    }

    if (!isDeleting && charIndex === currentRole.length) {
      // Pause when word is completely typed
      typingSpeed = 2000;
      isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      roleIndex = (roleIndex + 1) % roles.length;
      typingSpeed = 500;
    }

    setTimeout(type, typingSpeed);
  }

  type();
});

function openForm(){
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message=document.getElementById("message").value;
  if (!name || !email || !message){
    alert("Please fill all the fields")
    return;
  }
  else{
    const url = `https://docs.google.com/forms/d/e/1FAIpQLScryjdG8WMC8ZGzqWfwslbwnZr-1sCP_XqI8hN2x_t37hwXWA/viewform?usp=pp_url&entry.2005620554=${name}&entry.1045781291=${email}&entry.839337160=${message}+` 
    window.open(url)
  }

}
