/** 静态站点在首屏绘制前恢复外观，避免刷新和中英文跳转时闪烁。 */
export const themeScript = `try{var t=localStorage.getItem('reqix-site-theme');if(t==='light'||t==='dark')document.documentElement.dataset.theme=t}catch{}`;
