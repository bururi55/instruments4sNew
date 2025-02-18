import React from "react";
import "./CopyButtons.css";
import "../../App.css";

const CopyButtons = () => {
  const copyText = (id) => {
    const text = document.querySelector(id).innerText;
    navigator.clipboard.writeText(text).then(() => {});
  };

  return (
    <div className="copy-buttons-section">
      <div className="copy-button-group">
        <p className="zagolovok">
          <b>Холды/Пушы/Закрытие/Приветствие</b>
        </p>
        <div style={{ fontSize: 0 }} id="t1">
          5-10 минут, пожалуйста, уточню информацию и вернусь с ответом
        </div>
        <div style={{ fontSize: 0 }} id="t2">
          10-15 минут, пожалуйста, уточню информацию и вернусь с ответом
        </div>
        <div style={{ fontSize: 0 }} id="t3">
          Мне нужно ещё немного времени, чтобы всё проверить. Прости, что
          задерживаюсь с ответом
        </div>
        <button onClick={() => copyText("#t1")} className="copy-button">
          Холд 5-10
        </button>
        <button onClick={() => copyText("#t2")} className="copy-button">
          Холд 10-15
        </button>
        <button onClick={() => copyText("#t3")} className="copy-button">
          Холд ещё
        </button>
      </div>
      <div className="copy-button-group">
        <div style={{ fontSize: 0 }} id="t4">
          Коллега?
        </div>
        <div style={{ fontSize: 0 }} id="t5">
          Рад помочь. Если появятся дополнительные вопросы, то обязательно
          обращайся
        </div>
        <div style={{ fontSize: 0 }} id="t6">
          Не дождался твоего ответа, чат закрою. Возвращайся, когда будет удобно
        </div>
        <button onClick={() => copyText("#t4")} className="copy-button">
          Коллега?
        </button>
        <button onClick={() => copyText("#t5")} className="copy-button">
          Рад помочь
        </button>
        <button onClick={() => copyText("#t6")} className="copy-button">
          Не дождался ответа
        </button>
      </div>
      <div className="copy-button-group">
        <div style={{ fontSize: 0 }} id="t7">
          Привет, ! Чем могу помочь?
        </div>
        <div style={{ fontSize: 0 }} id="t8">
          Привет, ! Какой у тебя вопрос?
        </div>
        <div style={{ fontSize: 0 }} id="t9">
          Получаем много обращений. Прости, пожалуйста, за долгий ответ.
        </div>
        <button onClick={() => copyText("#t7")} className="copy-button">
          Чем могу?
        </button>
        <button onClick={() => copyText("#t8")} className="copy-button">
          Какой вопрос?
        </button>
        <button onClick={() => copyText("#t9")} className="copy-button">
          Прости за ожидание
        </button>
      </div>

      <div className="copy-button-group">
        <p className="zagolovok">
          <b>Оплата</b>
        </p>
        <div style={{ fontSize: 0 }} id="t10">
          Компания переводит оплату вместе с налогом и комиссией Наймикса. Если
          автооплата активна, Наймикс резервирует 6% на налог и списывает сумму
          автоматически в 10-15 числах месяца. А если функцию ранее не
          подключал, нужно оплачивать самостоятельно в приложении «Мой налог».
          Включить её можно в настройках: раздел «Профиль» → нажать на
          шестерёнку в правом верхнем углу → «Интеграция с Мой налог» →
          «Автоматическая уплата налогов» → нажать на бегунок, чтобы он стал
          зелёным. При подключении налог начинает оплачиваться с 1-го числа
          следующего месяца (если ранее автооплата была не подключена, то за
          предыдущий месяц необходимо оплатить самостоятельно)
        </div>
        <div style={{ fontSize: 0 }} id="t11">
          Оплату в компании переводят в среду-четверг. Если не получишь по
          истечении времени, сообщи нам повторно, пожалуйста
        </div>
        <div style={{ fontSize: 0 }} id="t12">
          Тебе направят 2 платежа в среду-четверг из-за стыка месяцев. 4200 и
          10200 рублей
        </div>
        <button onClick={() => copyText("#t10")} className="copy-button">
          Налог
        </button>
        <button onClick={() => copyText("#t11")} className="copy-button">
          Сроки оплаты
        </button>
        <button onClick={() => copyText("#t12")} className="copy-button">
          Стык Месяцев
        </button>
      </div>
      <div className="copy-button-group">
        <div style={{ fontSize: 0 }} id="t13">
          Тебе направят в среду-четверг ХХХ рублей
        </div>
        <div style={{ fontSize: 0 }} id="t14">
          У нас нет информации по премии. Рекомендую обратиться к тимлидеру или
          в чат супервайзеров: https://t.me/supervisor_support_bot
        </div>
        <div style={{ fontSize: 0 }} id="t15">
          За период 03.02-09.02 у тебя ХХ часов. Ошибок в расчёте нет. Оплату
          направили верно
        </div>
        <button onClick={() => copyText("#t13")} className="copy-button">
          Сколько?
        </button>
        <button onClick={() => copyText("#t14")} className="copy-button">
          Премия
        </button>
        <button onClick={() => copyText("#t15")} className="copy-button">
          Расчёт верный
        </button>
      </div>
      <div className="copy-button-group">
        <div style={{ fontSize: 0 }} id="text49">
          Тебя нет в ведомости. Передал информацию специалистам. Точных сроков
          нет. Как только получим ответ, вернёмся в личные сообщения Telegram
        </div>
        <div style={{ fontSize: 0 }} id="text50">
          Тебе не загрузили Х часов в ведомость. Напиши нам, пожалуйста, в
          понедельник после 12:00, проставим долг
        </div>
        <div style={{ fontSize: 0 }} id="text51">
          Тебе не загрузили Х часов в ведомость. Проставил в долг, направят
          вместе с основной оплатой за период хх-хх
        </div>
        <button onClick={() => copyText("#text49")} className="copy-button">
          Нет в ведомости
        </button>
        <button onClick={() => copyText("#text50")} className="copy-button">
          Долг после среды
        </button>
        <button onClick={() => copyText("#text51")} className="copy-button">
          Долг до среды
        </button>
      </div>

      <div className="copy-button-group">
        <p className="zagolovok">
          <b>Приведи друзей к нам</b>
        </p>
        <div style={{ fontSize: 0 }} id="text16">
          Резюме передал. Срок рассмотрения заявки составляет 10 рабочих дней.
          Если в течение этого времени кандидат не получит обратную связь, это
          означает, что он переведён в резервный список. Когда откроют новый
          набор, то с ним свяжутся
        </div>
        <div style={{ fontSize: 0 }} id="text17">
          Резюме передал. С кандидатом свяжутся, как только откроют набор и
          подберут для него подходящую позицию
        </div>
        <div style={{ fontSize: 0 }} id="text18">
          Заполни, пожалуйста, резюме по шаблону: https://clck.ru/38mAuQ и
          отправь в чат
        </div>
        <button onClick={() => copyText("#text16")} className="copy-button">
          Передал, набор есть
        </button>
        <button onClick={() => copyText("#text17")} className="copy-button">
          Передал, набора нет
        </button>
        <button onClick={() => copyText("#text18")} className="copy-button">
          Шаблон резюме
        </button>
      </div>
      <div className="copy-button-group">
        <div style={{ fontSize: 0 }} id="text19">
          Вижу, что ИМЯ находится в резерве. Как только появятся свободные
          места, с ним свяжутся
        </div>
        <div style={{ fontSize: 0 }} id="text20">
          Резюме “Приведи друга” от
        </div>
        <div style={{ fontSize: 0 }} id="text21">
          Добрый день. Передали ФИО кандидата по акции “Приведи друга”. Передал
          (ФИО человека, который передал резюме). Резюме во вложении.
        </div>
        <button onClick={() => copyText("#text19")} className="copy-button">
          В резерве друг
        </button>
        <button onClick={() => copyText("#text20")} className="copy-button">
          ПОЧТА тема
        </button>
        <button onClick={() => copyText("#text21")} className="copy-button">
          ПОЧТА письмо
        </button>
      </div>
    </div>
  );
};

export default CopyButtons;
