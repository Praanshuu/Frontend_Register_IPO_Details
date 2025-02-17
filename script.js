// script.js

document.addEventListener('DOMContentLoaded', function() {
    // Form Handling
    const form = document.getElementById('ipoForm');
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Form submitted successfully!');
        });
    }

    // Register & Cancel Buttons
    const registerButton = document.querySelector('.btn-primary');
    const cancelButton = document.querySelector('.btn-outline');

    if (registerButton) {
        registerButton.addEventListener('click', function() {
            alert('IPO Registered Successfully!');
        });
    }

    if (cancelButton) {
        cancelButton.addEventListener('click', function() {
            form.reset();
            alert('Form Reset!');
        });
    }

    // File Upload Handling
    const uploadButton = document.querySelector('.logo-actions .btn-primary');
    const uploadedLogo = document.querySelector('.company-logo');
    
    if (uploadButton && uploadedLogo) {
        uploadButton.addEventListener('click', function() {
            const fileInput = document.createElement('input');
            fileInput.type = 'file';
            fileInput.accept = 'image/*';
            
            fileInput.addEventListener('change', function(e) {
                const file = e.target.files[0];
                if (file) {
                    const reader = new FileReader();
                    reader.onload = function(e) {
                        uploadedLogo.src = e.target.result;
                    };
                    reader.readAsDataURL(file);
                }
            });
            fileInput.click();
        });
    }

    // Delete Logo Handling
    const deleteButton = document.querySelector('.logo-actions .btn-outline');
    if (deleteButton && uploadedLogo) {
        deleteButton.addEventListener('click', function() {
            uploadedLogo.src = 'assets/placeholder-logo.svg';
        });
    }

    // Tab Switching Logic Based on Input Focus
    const tabs = document.querySelectorAll('.tab');
    const formHeader = document.querySelector('.form-header h2');
    const formInputs = document.querySelectorAll('.form-grid input, .form-grid select');
    const listedInputs = document.querySelectorAll('.listed-details input, .listed-details select');
    const ipoInfoTab = tabs[0]; // IPO Information
    const ipoDetailsTab = tabs[1]; // IPO Info

    formInputs.forEach(input => {
        input.addEventListener('focus', function() {
            tabs.forEach(t => t.classList.remove('active'));
            ipoInfoTab.classList.add('active');
            formHeader.textContent = "IPO Information";
        });
    });

    listedInputs.forEach(input => {
        input.addEventListener('focus', function() {
            tabs.forEach(t => t.classList.remove('active'));
            ipoDetailsTab.classList.add('active');
            // formHeader.textContent = "IPO Info";
        });
    });

    // Ensure Clicking Tabs Only Switches Active State Without Trimming Name
    tabs.forEach(tab => {
        tab.addEventListener('click', function() {
            tabs.forEach(t => t.classList.remove('active'));
            this.classList.add('active');
            // if (this === ipoInfoTab) {
            //     formHeader.textContent = "IPO Information";
            // } else if (this === ipoDetailsTab) {
            //     formHeader.textContent = "IPO Information - IPO Info";
            // }
        });
    });
});
