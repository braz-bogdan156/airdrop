document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM fully loaded and parsed');
    
    const form = document.querySelector('.registration__form');
    const successMessage = document.getElementById('success-message');
    
    if (form && successMessage) {
        console.log('Form and success message elements found');
        
        form.addEventListener('submit', (event) => {
            event.preventDefault();
            console.log('Form submit event prevented');
            
            successMessage.style.display = 'inline-block';
            form.reset();
            
            setTimeout(() => {
                successMessage.style.display = 'none';
            }, 5000);
        });
    } else {
        console.log('Form or success message elements not found');
    }
    
});