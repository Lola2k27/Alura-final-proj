// JavaScript for AluraFlix functionality

document.addEventListener('DOMContentLoaded', () => {
    const deleteButtons = document.querySelectorAll('.video-options button:nth-child(1)');
    const editButtons = document.querySelectorAll('.video-options button:nth-child(2)');

    deleteButtons.forEach(button => {
        button.addEventListener('click', () => {
            const card = button.closest('.video-card');
            card.remove(); // Remove the video card
        });
    });

    editButtons.forEach(button => {
        button.addEventListener('click', () => {
            alert('Edit functionality coming soon!'); // Placeholder for edit functionality
        });
    });
});
