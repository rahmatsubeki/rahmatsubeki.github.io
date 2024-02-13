document.getElementById('tahun').innerText = new Date().getFullYear();
document.querySelectorAll('#openProjectBtn').forEach(function (btn) {
    btn.addEventListener('click', function () {
        const websiteUrl = this.getAttribute('data-website');

        if (websiteUrl) {
            Swal.fire({
                html: `<iframe src="${websiteUrl}" width="100%" height="500px"></iframe>`,
                showCloseButton: true,
                showConfirmButton: false,
            });
        } else {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'URL website tidak ditemukan!',
            });
        }
    });
});




