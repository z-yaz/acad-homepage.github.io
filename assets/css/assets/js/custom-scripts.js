// 第一段代码：页面锚点导航自动高亮功能（滚动/点击切换导航激活状态）
// 自执行匿名函数：避免变量污染全局作用域
(function () {
  // 监听DOM加载完成事件，确保页面元素加载完毕后再执行JS
  document.addEventListener('DOMContentLoaded', function () {
    // 获取所有 导航栏中 包含锚点(#) 的导航链接，并转换为数组
    var links = Array.prototype.slice.call(document.querySelectorAll('.site-nav__link[href*="#"]'));
    // 如果没有找到对应的链接，直接终止函数执行
    if (!links.length) return;

    // 遍历导航链接，建立【导航链接】和【页面对应锚点元素】的映射关系
    var items = links.map(function (link) {
      // 获取链接的href属性值
      var href = link.getAttribute('href') || '';
      // 拆分href，提取#后面的锚点名称
      var hash = href.split('#')[1];
      // 如果没有锚点名称，返回null
      if (!hash) return null;
      // 根据锚点名称查找页面对应的目标元素
      var target = document.getElementById(hash);
      // 如果找不到目标元素，返回null
      if (!target) return null;
      // 返回包含【导航链接】和【目标元素】的对象
      return { link: link, target: target };
    }).filter(Boolean); // 过滤掉数组中的null值

    // 如果没有有效的【链接-目标】配对，终止函数
    if (!items.length) return;

    /**
     * 设置导航链接的激活高亮状态
     * @param {HTMLElement} activeLink - 需要激活的导航链接元素
     */
    function setActive(activeLink) {
      // 遍历所有导航链接
      links.forEach(function (link) {
        // 切换nav-active类：当前链接=激活链接时添加，否则移除
        link.classList.toggle('nav-active', link === activeLink);
      });
    }

    /**
     * 根据页面滚动位置，自动更新激活的导航链接
     */
    function updateActiveLink() {
      // 获取当前滚动距离 + 120px偏移量（修正固定导航栏遮挡问题）
      var scrollY = window.scrollY + 120;
      // 默认激活第一个导航链接
      var active = items[0].link;

      // 遍历所有【链接-目标】元素
      items.forEach(function (item) {
        // 如果目标元素的顶部位置 ≤ 当前滚动位置，更新激活的链接
        if (item.target.offsetTop <= scrollY) {
          active = item.link;
        }
      });

      // 为匹配的导航链接设置激活状态
      setActive(active);
    }

    // 为每个导航链接绑定点击事件：点击时直接设置该链接为激活状态
    links.forEach(function (link) {
      link.addEventListener('click', function () {
        setActive(link);
      });
    });

    // 监听页面滚动事件，被动模式（提升滚动性能），滚动时更新激活导航
    window.addEventListener('scroll', updateActiveLink, { passive: true });
    // 页面加载完成后，立即执行一次，初始化导航激活状态
    updateActiveLink();
  });
})();

// 第二段代码：侧边栏社交图标点击选中高亮功能
// 自执行匿名函数：避免变量污染全局作用域
(function () {
  // 监听DOM加载完成事件
  document.addEventListener('DOMContentLoaded', function () {
    // 获取所有侧边栏的社交图标链接元素，并转换为数组
    var socialLinks = Array.prototype.slice.call(document.querySelectorAll('.author__social-link'));
    // 如果没有社交图标，终止函数执行
    if (!socialLinks.length) return;

    // 为每个社交图标绑定点击事件
    socialLinks.forEach(function (link) {
      link.addEventListener('click', function () {
        // 先移除所有社交图标的选中样式
        socialLinks.forEach(function (item) {
          item.classList.remove('is-selected');
        });
        // 为当前点击的社交图标添加选中样式
        link.classList.add('is-selected');
      });
    });
  });
})();
