const machineLinks = document.querySelectorAll('.machine-link');

machineLinks.forEach((link) => {
    link.addEventListener('click', (event) => {
        event.preventDefault(); // 阻止默认的链接跳转行为

        // 获取当前点击的机器编号，例如通过 link.id 或其他属性进行标识
        const machineId = link.id;
        // 重置所有链接的样式
        machineLinks.forEach((link) => {
            link.style.backgroundColor = ''; // 清除背景颜色样式
            link.style.color = ''; // 清除文字颜色样式
        });
        // 向 Flask 发送请求，获取对应机器的数据
        // 可以使用 fetch() 或其他方式发送请求

        // 修改当前点击的链接的样式
        // link.style.color = 'red'; // 修改链接的文字颜色为红色
        // link.style.backgroundColor = 'yellow'; // 修改链接的背景颜色为黄色
        link.style.backgroundColor = 'YELLOW';
        link.style.color = 'BLACK'
        // 执行其他操作或调用相关函数
    });
});