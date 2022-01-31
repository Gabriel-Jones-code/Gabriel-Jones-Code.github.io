function opens() {
    document.getElementById('cont').style.display = 'block';
    document.getElementById('open').style.display = 'none';
}

function closing() {
    document.getElementById('cont').style.display = 'none';
    document.getElementById('open').style.display = 'block';
}

function submits() {
    let first = document.forms['cArray']['firstName'].value;
    let last = document.forms['cArray']['lastName'].value;
    let email = document.forms['cArray']['email'].value;
    if (first == ''){
        alert('Please provide a first name');
    }

    else if (last == ''){
        alert('Please provide a last name');
    }

    else if (!email.includes('@')){
        alert('Please provide a valid email');
    }

    else {
        alert('Submited');
    }
}