# Росводоканал Барнаул

## Особенности проекта

1. Структура проекта следующая:

   1. `build`
      - В корне директории содержатся готовые HTML-файлы
      - В `img` лежат готовые оптимизированные изображения, которые должны быть прездагружены на сайт, в `fonts` шрифты
      - В `assets/css` и `assets/js` prod-ready css и js файлы
      - В `favlike` различного рода иконки, для разных устройств
   2. `client`
   3. `_bp` включать в проект не нужно

2. Ни при каких обстоятельствах НЕ редактировать конечные CSS файлы. Если что-то неверно стилизовано из-за того, что сегмент вёрстки в переданном виде несовместим с CMS, то написать мне, и я исправлю в течение дня или оставить как получается, записать в баги, и я исправлю по завершению программинга

3. Очень желательно создать структуру шаблонов, при которой в страницах разных разделов рамещены ссылки на разные CSS и JS. Сайт большой, поэтому это крайне необходимо для оптимизации его работы и упрощения визуальных доработок. Структуру, которая удобна с этой точки зрения можно посмотреть в `build/client/templates`

   1. Базовые файлы `style.css`, `plugins.js` и `common.js` подключаются к default шаблону.
   2. Кроме них к каждому шаблону раздела из `build/client/templates/layouts` подключаются свои css и js файлы с типовым названием `template-name-tpl.*`

4. В проекте используется кастомная сборка, если нужно что-то поправить пользуясь ей, то файлы `gulpfile.js`, `package.json`, `package-lock.json` находятся в корне проекта

5. В проекте настроен lazy-loading изображений, который очень желательно оставить. Он представлен в двух видах:

   1. Для изображений в slick-carousel используется data-lazy вместо src
   2. Для изображений в текстовых блоках .text (которые являются wysiwyg-ами) используется data-src вместо src
   3. Для изображений вне текстовых блоках нужен data-src, а также класс lazy к тегу `img`

6. Также, по возможности, необходимо настроить lazy-loading для загружаемых изображений. Для этого необходимо:

   1. Использовать data-src вместо src
   2. Добавлять класс lazy тег `<img>`
      - Для загружаемых через визуальный редактор (которые попадают внутрь блока \*.text) НЕ нужно добавлять класс lazy, для них создан отдельный instance

7. Структуру всего сайта с перелинковкой можно посмотреть в `client/data/sitemap.twig.json` и в виде готовой страницы `sitemap.html`

---

1. Название шаблонной страницы `users_info` заменено на `text_page`, чтобы она не имела принадлежности к какому-то конкретному разделу
