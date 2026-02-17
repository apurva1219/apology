document.getElementById('forgive-btn').addEventListener('click', function() {
    const surprise = document.getElementById('surprise');
    surprise.classList.remove('hidden');
    this.style.display = 'none'; // Hide button after click
});