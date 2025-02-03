// يمكنك إضافة أي تفاعلية تريدها هنا
document.querySelectorAll('.social-link').forEach(link => {
    link.addEventListener('click', () => {
        alert(`سيتم توجيهك إلى ${link.textContent}`);
    });
});
