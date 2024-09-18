import { ref } from 'vue';
import lottie from 'lottie-web';

export default function useLoading() {
  const isLoading = ref(false);
  const animation = ref(null);

  const startLoading = () => {
    isLoading.value = true;
    if (animation.value) {
      animation.value.play();
    } else {
      animation.value = lottie.loadAnimation({
        container: document.querySelector('#lottie-loading'), // 动画容器
        path:'/lottie/loading.json', // 动画文件路径
        renderer: 'svg', // 渲染方式 (可根据需要调整)
        loop: true,
        autoplay: true
      });
      animation.value.play()
    }
  };

  const stopLoading = () => {
    isLoading.value = false;
    if (animation.value) {
      animation.value.destroy();
      animation.value = null;
    }
  };
  const setLoading = (loading) => {
    if (loading) {
      startLoading();
    } else {
      stopLoading();
    }
  }

  return [
    isLoading,
    setLoading
  ]
}