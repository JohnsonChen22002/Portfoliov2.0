const firebaseConfig = {
    apiKey: "AIzaSyCAFWzHGUJ9_OC0POBhJ5-8zEP-SlIPFTc",
    authDomain: "johnson-portfolio-contact-form.firebaseapp.com",
    databaseURL: "https://johnson-portfolio-contact-form-default-rtdb.firebaseio.com",
    projectId: "johnson-portfolio-contact-form",
    storageBucket: "johnson-portfolio-contact-form.appspot.com",
    messagingSenderId: "430988340693",
    appId: "1:430988340693:web:0b8f50b2e217165312215c"
  };
  
  // initialize firebase
  firebase.initializeApp(firebaseConfig);
  
  // reference your database
  var contactFormDB = firebase.database().ref("contactForm");
  
  document.getElementById("contactForm").addEventListener("submit", submitForm);
  
  function submitForm(e) {
    e.preventDefault();
  
    var name = getElementVal("name");
    var emailid = getElementVal("emailid");
    var msgContent = getElementVal("msgContent");
  
    saveMessages(name, emailid, msgContent);
  
    //   enable alert
    document.querySelector(".alert").style.display = "block";
  
    //   remove the alert
    setTimeout(() => {
      document.querySelector(".alert").style.display = "none";
    }, 3000);
  
    //   reset the form
    document.getElementById("contactForm").reset();
  }
  
  const saveMessages = (name, emailid, msgContent) => {
    var newContactForm = contactFormDB.push();
  
    newContactForm.set({
      name: name,
      emailid: emailid,
      msgContent: msgContent,
    });
  };
  
  const getElementVal = (id) => {
    return document.getElementById(id).value;
  };