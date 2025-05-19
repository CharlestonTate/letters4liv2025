// --- Manual Unlock Variables (set to true to force unlock) ---
const MANUAL_UNLOCK = {
    1: true, // May 19, 2025
    2: false, // May 26, 2025
    3: false, // June 2, 2025
    4: false, // June 9, 2025
    5: false, // June 16, 2025
    6: false, // June 23, 2025
    7: false, // June 30, 2025
    8: false, // July 7, 2025
    9: false, // July 14, 2025
    10: false // July 21, 2025
};
// -----------------------------------------------------------

// Letter content framework
const LETTERS = {
    1: 'My dearest Olivia,\n\nThis is your first letter! I hope you enjoy this journey of love and surprises.\n\nLove,\nYour Boy',
    2: 'Letter for May 26th, 2025... (write your letter here)',
    3: 'Letter for June 2nd, 2025... (write your letter here)',
    4: 'Letter for June 9th, 2025... (write your letter here)',
    5: 'Letter for June 16th, 2025... (write your letter here)',
    6: 'Letter for June 23rd, 2025... (write your letter here)',
    7: 'Letter for June 30th, 2025... (write your letter here)',
    8: 'Letter for July 7th, 2025... (write your letter here)',
    9: 'Letter for July 14th, 2025... (write your letter here)',
    10: 'Letter for July 21st, 2025... (write your letter here)',
};

document.addEventListener('DOMContentLoaded', () => {
    if (window.AOS) AOS.init();

    // Function to get current PST time
    function getPSTTime() {
        const now = new Date();
        const pstTime = new Date(now.toLocaleString('en-US', { timeZone: 'America/Los_Angeles' }));
        return pstTime;
    }

    // Function to check if a letter should be unlocked
    function checkLetterUnlock() {
        const currentPST = getPSTTime();
        const letterSlots = document.querySelectorAll('.letter-slot');

        letterSlots.forEach(slot => {
            const letterId = slot.dataset.letterId;
            const letterDate = new Date(slot.dataset.date);
            letterDate.setHours(0, 0, 0, 0); // Set to start of day
            // Manual unlock check
            if (MANUAL_UNLOCK[letterId] || currentPST >= letterDate) {
                slot.classList.add('unlocked');
                const lockIcon = slot.querySelector('.lock-icon');
                if (lockIcon) {
                    lockIcon.remove();
                    const preview = document.createElement('div');
                    preview.className = 'letter-preview';
                    preview.textContent = 'Click to read your letter';
                    slot.querySelector('.letter-content').appendChild(preview);
                }
            }
        });
    }

    // Check letter unlock status on page load
    checkLetterUnlock();
    setInterval(checkLetterUnlock, 60000);

    // Modal logic
    const modal = document.getElementById('letter-modal');
    const modalContent = document.querySelector('.modal-content');
    const letterBody = document.getElementById('letter-body');
    const closeBtn = document.querySelector('.close-btn');

    // Click handler for unlocked letters
    document.querySelectorAll('.letter-slot').forEach(slot => {
        slot.addEventListener('click', function (e) {
            if (!slot.classList.contains('unlocked')) {
                console.log('Letter is locked!');
                return;
            }
            const letterId = slot.dataset.letterId;
            console.log('Navigating to letter page for letter', letterId);
            window.location.href = `letter.html?letter=${letterId}`;
        });
    });

    // Close modal logic
    closeBtn.addEventListener('click', () => {
        modal.style.display = 'none';
        letterBody.innerText = '';
        console.log('Modal closed');
    });

    // Optional: close modal on outside click
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.style.display = 'none';
            letterBody.innerText = '';
            console.log('Modal closed (outside click)');
        }
    });
}); 