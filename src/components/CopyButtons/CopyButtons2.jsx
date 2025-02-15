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
          <b>Задачи и ТО</b>
        </p>
        <div style={{ fontSize: 0 }} id="t25">
          Рекомендую: 1. Проверить корректность логина и пароля; 2. Убедиться,
          что настройки в клиенте заданы верно. Порт: 54443, адрес подключения:
          river.megamarket.tech
        </div>
        <div style={{ fontSize: 0 }} id="t26">
          Рекомендую: 1. Убедиться, что настройки в клиенте заданы верно. Порт:
          54443, адрес подключения: river.megamarket.tech; 2. Переустановить VPN
          по инструкции: https://clck.ru/3DT98z 3. Уточнить о блокировке у
          провайдера
        </div>
        <div style={{ fontSize: 0 }} id="t27">
          Инструкция: https://clck.ru/3DT98z
        </div>
        <button onClick={() => copyText("#t25")} className="copy-button">
          VPN 455
        </button>
        <button onClick={() => copyText("#t26")} className="copy-button">
          VPN ТО другое
        </button>
        <button onClick={() => copyText("#t27")} className="copy-button">
          VPN Инструкция
        </button>
      </div>
      <div className="copy-button-group">
        <div style={{ fontSize: 0 }} id="t28">
          Чтобы устранить проблему, пожалуйста, сделай следующее: • перезагрузи
          страницу через ctrl+F5(очистка кэша); • очисти cookies; • попробуй
          перелогиниться на сервисе или войти через другой браузер (Google
          Chrome). При сохранении проблемы напиши нам повторно
        </div>
        <div style={{ fontSize: 0 }} id="t29">
          Передам данные техническим специалистам в течение 5-10 минут. А пока
          напиши свой тег в Telegram, вернёмся с обратной связью туда
        </div>
        <div style={{ fontSize: 0 }} id="t30">
          Задачу создал. Срок решения — до 6 дней. Как только получим ответ,
          напишем в личные сообщения Telegram. Если по истечении этого времени с
          тобой не свяжутся, сообщи нам повторно, пожалуйста
        </div>
        <button onClick={() => copyText("#t28")} className="copy-button">
          Тех Реки
        </button>
        <button onClick={() => copyText("#t29")} className="copy-button">
          Передам АЙТИ
        </button>
        <button onClick={() => copyText("#t30")} className="copy-button">
          Задачу создал
        </button>
      </div>
      <div className="copy-button-group">
        <div style={{ fontSize: 0 }} id="t31">
          Передал данные в работу. Доступы заберём в течение 3 дней
        </div>
        <div style={{ fontSize: 0 }} id="t32">
          Передал данные в работу. Доступы сделаем в течение 3 дней. Учётная
          запись будет действительна в течение 90 дней. По истечении этого срока
          на почту руководителя, придёт письмо с просьбой подать заявку на
          продление учётной записи. Если данные для входа не получит, напиши нам
          повторно
        </div>
        <div style={{ fontSize: 0 }} id="t33">
          Просьба забрать доступы у контрагента в только контуре ММ
        </div>
        <button onClick={() => copyText("#t31")} className="copy-button">
          Заберем доступы
        </button>
        <button onClick={() => copyText("#t32")} className="copy-button">
          Сделаем доступы
        </button>
        <button onClick={() => copyText("#t33")} className="copy-button">
          Забрать для задачи
        </button>
      </div>
      <div className="copy-button-group">
        <div style={{ fontSize: 0 }} id="t34">
          https://space.samokat.ru/pages/viewpage.action?pageId=3889109158
        </div>
        <div style={{ fontSize: 0 }} id="t35">
          Перейди в бота: https://t.me/MWordBot Активируй учётную запись и в
          Таймтреке нажми на кнопку «Сбросить пароль». После бот направит новый
          пароль
        </div>
        <div style={{ fontSize: 0 }} id="t36">
          Мы можем помочь только с учётными записями для операторов. В твоем
          случае нужно обратиться к Галине Соловьевой на почту:
          gsoloveva@samokat.ru
        </div>
        <button onClick={() => copyText("#t34")} className="copy-button">
          Матрица доступов
        </button>
        <button onClick={() => copyText("#t35")} className="copy-button">
          Таймтрек Сброс
        </button>
        <button onClick={() => copyText("#t36")} className="copy-button">
          РА не для оперов
        </button>
      </div>

      <div className="copy-button-group">
        <p className="zagolovok">
          <b>Разное</b>
        </p>
        <div style={{ fontSize: 0 }} id="t37">
          Логин и пароль такие же, как от корпоративной почты. Введи их,
          пожалуйста
        </div>
        <div style={{ fontSize: 0 }} id="t38">
          Ты можешь поделиться своей болью, если это уместно. Однако скажу
          сразу, что я обычный оператор и не смогу дать совет по данной
          проблеме, но я хочу помочь тебе. Позвони, пожалуйста, по телефону
          доверия: +74959895050
        </div>
        <div style={{ fontSize: 0 }} id="t39">
          У нас нет доступа к расписанию. Рекомендую обратиться к тимлидеру или
          в чат супервайзеров: https://t.me/supervisor_support_bot
        </div>
        <button onClick={() => copyText("#t37")} className="copy-button">
          VPN пароль
        </button>
        <button onClick={() => copyText("#t38")} className="copy-button">
          Суисайд
        </button>
        <button onClick={() => copyText("#t39")} className="copy-button">
          Вопрос по слотам
        </button>
      </div>
      <div className="copy-button-group">
        <div style={{ fontSize: 0 }} id="text40">
          Превышен лимит администраторов, права дать не сможем. Если нужно
          добавить кого-то, они могут перейти по ссылке:
          https://t.me/+4lmgw0Vdd4pjYmRi
        </div>
        <div style={{ fontSize: 0 }} id="text41">
          Подробности можно уточнить в компании по телефону: 8 (800) 511-12-11
          или 8 (812) 607-64-64
        </div>
        <div style={{ fontSize: 0 }} id="text42">
          Доступы в сервисы Мегамаркета выдаются только после согласования с
          Информационной Безопасностью. Для вашего направления выдать не
          получится, так как процесс не согласован. Обратись, пожалуйста, к
          своему руководителю
        </div>
        <button onClick={() => copyText("#text40")} className="copy-button">
          ТГ Важные изменения
        </button>
        <button onClick={() => copyText("#text41")} className="copy-button">
          Телефон ВР
        </button>
        <button onClick={() => copyText("#text42")} className="copy-button">
          Доступы Левым
        </button>
      </div>
      <div className="copy-button-group">
        <div style={{ fontSize: 0 }} id="text43">
          —
        </div>
        <div style={{ fontSize: 0 }} id="text44">
          «»
        </div>
        <div style={{ fontSize: 0 }} id="text45">
          Превышен лимит администраторов, права дать не сможем. Если нужно
          добавить кого-то, они могут перейти по ссылке:
          https://t.me/+BGUrK1kcBGI5ZWI6
        </div>
        <button onClick={() => copyText("#text43")} className="copy-button">
          —
        </button>
        <button onClick={() => copyText("#text44")} className="copy-button">
          «»
        </button>
        <button onClick={() => copyText("#text45")} className="copy-button">
          ТГ ММ Акции
        </button>
      </div>
      <div className="copy-button-group">
        <div style={{ fontSize: 0 }} id="text46">
          Доступы в сервисы Мегамаркета выдаются только по согласованной матрице
          доступов. Для твоего направления выдать не получится, так как процесс
          не согласован. Обратись, пожалуйста, к своему руководителю
        </div>
        <div style={{ fontSize: 0 }} id="text47">
          Для создания заявки уточни следующее, пожалуйста: - Твой логин ERM; -
          Порядок действий, который привёл к проблеме; - Скриншоты, на которых
          видно проблему; - Часовой пояс; - Номер телефона/gd покупателя и/или
          номер заказа/доставки, в которой обнаружен сбой; - Как часто возникает
          ошибка; - Проблема массовая или локальная; - Возможно ли
          взаимодействовать с системой; - Подробное описание проблемы
        </div>
        <div style={{ fontSize: 0 }} id="text48"></div>
        <button onClick={() => copyText("#text46")} className="copy-button">
          Доступ по Матрице
        </button>
        <button onClick={() => copyText("#text47")} className="copy-button">
          ERM ТО Уточни
        </button>
        <button onClick={() => copyText("#text48")} className="copy-button">
          --
        </button>
      </div>
      <div className="copy-button-group">
        <div style={{ fontSize: 0 }} id="text52">
          Техническая поддержка штатных сотрудников компании с 1 сентября
          работает только через портал ithelp.samokat.ru. Рекомендуем создать
          задачу на технических специалистов самостоятельно:
          http://ithelp.samokat.ru/ Авторизоваться можно с помощью учётной
          записи Мегамаркета, если нет учётной записи Самокат. Подробнее о входе
          в систему рассказали в инструкции:
          https://docs.google.com/document/d/1GcX-lUNz1oeZwAhdzG7eNQDEmEnRXadfUbd5lm8VmUI/edit
          Если не получится самостоятельно, сообщи своему руководителю
        </div>
        <div style={{ fontSize: 0 }} id="text53">
          В дальнейшем можешь узнать самостоятельно, умножив часы в Таймтреке на
          свою ставку — 150 рублей в час. И добавить премию, если она есть.
          Уточнить сумму можно у тимлидера или в чате супервайзеров:
          https://t.me/supervisor_support_bot
        </div>
        <div style={{ fontSize: 0 }} id="text54">
          Данные для входа отправил на корпоративную почту. Если не получишь
          письмо в течение суток, напиши нам повторно, пожалуйста
        </div>
        <button onClick={() => copyText("#text52")} className="copy-button">
          ШТАТ ЗАДАЧИ
        </button>
        <button onClick={() => copyText("#text53")} className="copy-button">
          ОПЛАТА САМ
        </button>
        <button onClick={() => copyText("#text54")} className="copy-button">
          ERM Пароль
        </button>
      </div>
    </div>
  );
};

export default CopyButtons;
