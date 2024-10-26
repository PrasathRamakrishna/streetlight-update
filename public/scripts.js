function OnOff(event) {
  const arrsuffix = ["st", "nd", "rd", "th"];
  const arr = event.target.id.split("-");
  const found = Array.from(event.target.classList).findIndex(
    (item) => item === "on"
  );
  if (found != -1) {
    event.target.classList.remove("on");
    sendMail(
      "The " +
        arr[2] +
        (arr[2] > 3 ? arrsuffix[3] : arrsuffix[arr[2] - 1]) +
        " light in street " +
        arr[1] +
        " is turned off"
    );
  } else {
    event.target.classList.add("on");
    sendMail(
      "The " +
        arr[2] +
        (arr[2] > 3 ? arrsuffix[3] : arrsuffix[arr[2] - 1]) +
        " light in street " +
        arr[1] +
        " is turned on"
    );
  }
}


function sendMail(message) {
  var params = {
    name: "Prasath",
    email: "prasath@gmail.com",
    message: message,
  };

  const serviceID = "service_m9fmigc";
  const templateID = "template_4norgoj";

    emailjs.send(serviceID, templateID, params)
    .then(res=>{
        alert("Your message sent successfully!!")

    })
    .catch(err=>console.log(err));

}
