document.addEventListener('click', function(event) {
    // Check if the click is on the body or main content area
    if (event.target === event.currentTarget || event.target.closest('main')) {
        const images = ['leaf1.svg', 'leaf2.svg', 'leaf3.svg', 'leaf4.svg', 'leaf5.svg']; 
        const randomIndex = Math.floor(Math.random() * images.length);
        const randomImage = images[randomIndex]; 
        const leaf = document.createElement('img');
        leaf.src = 'leafs/' + randomImage; 
        leaf.className = 'leaf';
        // Adjust the position to account for the scroll position
        leaf.style.top = `${event.clientY - 25}px`;
        leaf.style.left = `${event.clientX - 25}px`;
        document.body.appendChild(leaf);

        // Add fade-out effect after a delay
        setTimeout(() => {
            leaf.style.opacity = '0';
            setTimeout(() => {
                // Remove the leaf from the DOM after the animation completes
                leaf.remove(); 
            }, 1000);
        }, 2000); 
    }
});
