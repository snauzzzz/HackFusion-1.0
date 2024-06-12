document.addEventListener('click', function(event) {
    // Check if the click is on the body or main content area
    if (event.target === document.body || event.target.closest('main')) {
        const leaf = document.createElement('img');
        leaf.src = 'photos/leaf.svg';
        leaf.className = 'leaf';
        // Adjust the position to account for the scroll position
        leaf.style.top = `${event.clientY + window.scrollY - 25}px`;
        leaf.style.left = `${event.clientX + window.scrollX - 25}px`;
        document.body.appendChild(leaf);
        
        // Add fade-out effect after a delay
        setTimeout(() => {
            leaf.classList.add('fade-out');
        }, 2000); 

        // Remove the leaf from the DOM after the animation completes
        leaf.addEventListener('animationend', () => {
            leaf.remove();
        });
    }
});
