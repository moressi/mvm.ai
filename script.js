document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('contact-form');
    const successMsg = document.querySelector('.success-message');

    // 表单提交处理
    form.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        // 显示加载状态
        const formData = new FormData(form);
        const response = await fetch(form.action, {
            method: 'POST',
            body: formData
        });

        if (response.ok) {
            // 清空表单
            form.reset();
            // 显示成功提示
            successMsg.style.opacity = 1;
            setTimeout(() => {
                successMsg.style.opacity = 0;
            }, 2000);
        } else {
            alert('提交失败，请稍后重试');
        }
    });
});