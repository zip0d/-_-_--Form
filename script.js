document.getElementById('feedback-form').addEventListener('submit', async function (event) {
    event.preventDefault();
    
    const formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        rating: document.getElementById('rating').value,
        category: document.getElementById('category').value,
        comments: document.getElementById('comments').value,
    };


    try {
        const response = await fetch('https://будующий_сервер.com/feedback', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(formData),
        });

        if (response.ok) {
            alert('Ваш отзыв успешно отправлен!');
        } else {
            alert('Ошибка при отправке отзыва.');
        }
    } catch (error) {
        console.error('Ошибка:', error);
    }
});
