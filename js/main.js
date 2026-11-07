// Aurora 主题脚本
document.addEventListener('DOMContentLoaded', function() {
  // 视频背景随机切换
  const defaultVideoSources = [
    'https://cdn.pixabay.com/video/2023/10/17/185120-876715784_large.mp4',
    'https://cdn.pixabay.com/video/2024/01/08/196815-900382198_large.mp4',
    'https://cdn.pixabay.com/video/2023/08/16/176173-855105202_large.mp4',
    'https://cdn.pixabay.com/video/2024/03/15/204602-922506482_large.mp4'
  ];
  const bgVideo = document.getElementById('bgVideo');
  if (bgVideo) {
    const customVideo = window.THEME_CONFIG && window.THEME_CONFIG.videoBg;
    const videoSrc = customVideo || defaultVideoSources[Math.floor(Math.random() * defaultVideoSources.length)];
    bgVideo.querySelector('source').src = videoSrc;
    bgVideo.load();
  }

  // 导航栏滚动效果
  const navbar = document.querySelector('.navbar');
  let lastScroll = 0;
  
  window.addEventListener('scroll', function() {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 50) {
      navbar.style.background = 'rgba(15, 15, 26, 0.9)';
    } else {
      navbar.style.background = 'rgba(15, 15, 26, 0.7)';
    }
    
    lastScroll = currentScroll;
  });

  // 图片点击放大
  const images = document.querySelectorAll('.post-content img');
  images.forEach(img => {
    img.style.cursor = 'zoom-in';
    img.addEventListener('click', function() {
      window.open(this.src, '_blank');
    });
  });
});
