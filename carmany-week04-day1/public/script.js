document.getElementById("calculateAge").addEventListener("click", function() {
    const birthdate = document.getElementById("birthdate").value;
    const result = document.getElementById("result");

    if (!birthdate) {
        result.textContent = "Please enter a valid date.";
        return;
    }

    const birthDateObj = new Date(birthdate);
    const today = new Date();

    let age = today.getFullYear() - birthDateObj.getFullYear();
    const monthDifference = today.getMonth() - birthDateObj.getMonth();
    const dayDifference = today.getDate() - birthDateObj.getDate();

    if (monthDifference < 0 || (monthDifference === 0 && dayDifference < 0)) {
        age--;
    }

    result.textContent = `You are ${age} years old.`;
});
