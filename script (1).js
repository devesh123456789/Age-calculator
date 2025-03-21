
document.getElementById('ageForm').addEventListener('submit', function(event) {
    event.preventDefault();  

    
    const dobInput = document.getElementById('dob').value;

    if (!dobInput) {
        alert('Please select a valid date of birth');
        return;
    }

    
    const dob = new Date(dobInput);

    
    const today = new Date();

    
    let age = today.getFullYear() - dob.getFullYear();
    const monthDifference = today.getMonth() - dob.getMonth();

    if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < dob.getDate())) {
        age--;
    }

    document.getElementById('age').textContent = age;
});
