export const telegramm = () => {
  const botToken = '6288729945:AAHR9cPxwzudXFJg5nIhzAg9_WzEITAHhkY';
  const chatId = '-1001916993819';
  const forms = document.querySelectorAll('form');
  forms.forEach((form) => {
    form.addEventListener('submit', async (e) => {
      e.preventDefault();

      const formData = new FormData(e.target);

      const name = formData.get('name');
      const surname = formData.get('surname') || '---';
      const phone = formData.get('phone');
      const comment = formData.get('comment') || '---';

      const message = `Имя: ${name},\nФамилия: ${surname},\nТелефон: ${phone},\nКомментарий: ${comment}`;

      try {
        const response = await fetch(
          `https://api.telegram.org/bot${botToken}/sendMessage`,
          {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              chat_id: chatId,
              text: message,
            }),
          }
        );

        const data = await response.json();

        if (data.ok) {
          e.target.reset();
        } else {
          alert('Ошибка при отправке сообщения');
        }
      } catch (error) {
        console.error('Ошибка:', error);
        alert('Произошла ошибка при отправке запроса');
      }
    });
  });
};
