const userInfo = {
  userAgent: navigator.userAgent,
  platform: navigator.platform,
  language: navigator.language,
  screenResolution: `${screen.width}x${screen.height}`,
};

console.log(userInfo);