document.addEventListener('DOMContentLoaded', function() {
    const video = document.getElementById('bg-video');
    const loadingOverlay = document.getElementById('loading-overlay');

    video.addEventListener('click', function() {
        loadingOverlay.style.display = 'flex';
        
        // 添加延迟让用户看到加载状态
        setTimeout(function() {
            window.location.href = "https://autopatchcn.yuanshen.com/client_app/download/launcher/20241225164539_9oyGHAOXvzP4uaBW/mihoyo/yuanshen_setup_202412201736.exe";
        }, 1500);
    });
});