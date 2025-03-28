function toggleOption(element) {
    // Close all options first
    const allOptions = document.querySelectorAll('.bundle-option');
    allOptions.forEach(opt => {
        if (opt !== element) {
            opt.classList.remove('active');
            const details = opt.querySelector('.option-details');
            details.style.display = 'none';
        }
    });
    
    // Toggle the clicked option
    element.classList.toggle('active');
    const details = element.querySelector('.option-details');
    if (element.classList.contains('active')) {
        details.style.display = 'block';
    } else {
        details.style.display = 'none';
    }
}

function selectSize(element, event) {
    event.stopPropagation(); // Prevent triggering the parent click
    const parent = element.parentElement;
    const allSizes = parent.querySelectorAll('.size-btn');
    allSizes.forEach(btn => btn.classList.remove('selected'));
    element.classList.add('selected');
}

function selectColor(element, event) {
    event.stopPropagation(); // Prevent triggering the parent click
    const parent = element.parentElement;
    const allColors = parent.querySelectorAll('.color-btn');
    allColors.forEach(btn => btn.classList.remove('selected'));
    element.classList.add('selected');
}