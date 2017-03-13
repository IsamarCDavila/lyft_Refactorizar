

function onCountryClick(evt) {
    localStorage.setItem("country_select",evt.currentTarget.id);
    
    location.href="signup.html";
}



