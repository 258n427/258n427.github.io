// Aurora 主题脚本
document.addEventListener('DOMContentLoaded', function() {
  // 视频背景随机切换
  const defaultVideoSources = [
    'https://www.w3schools.com/html/mov_bbb.mp4',
    'https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4',
    'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4'
  ];
  const bgVideo = document.getElementById('bgVideo');
  if (bgVideo) {
    const customVideo = window.THEME_CONFIG && window.THEME_CONFIG.videoBg;
    let videoSrc;
    if (customVideo) {
      // 优先用固定视频
      videoSrc = customVideo;
    } else {
      // 从随机列表选
      const listStr = window.THEME_CONFIG && window.THEME_CONFIG.videoList;
      const customList = listStr ? listStr.split(',').map(s => s.trim()).filter(s => s) : [];
      const sources = customList.length > 0 ? customList : defaultVideoSources;
      videoSrc = sources[Math.floor(Math.random() * sources.length)];
    }
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
