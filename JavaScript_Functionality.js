<script>
    // Tab switching functionality
    document.querySelectorAll('.tabs button').forEach(tab => {
        tab.addEventListener('click', () => {
            document.querySelectorAll('.tabs button').forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
        });
    });

    // Simulate download progress
    function simulateDownload() {
        const bars = document.querySelectorAll('.progress-bar');
        bars.forEach(bar => {
            const currentWidth = parseInt(bar.style.width);
            if (currentWidth < 100) {
                bar.style.width = (currentWidth + Math.random() * 5) + '%';
            }
        });
    }
    
    setInterval(simulateDownload, 2000);
</script>