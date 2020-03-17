# Росводоканал Барнаул

## Особенности проекта

1. Проект сделан модульно, насколько это возможно, поэтому:
   1. Ни при каких обстоятельствах НЕ редактировать конечные CSS файлы. Если что-то неверно стилизовано из-за того, что сегмент вёрстки в переданном виде несовместим с CMS, то написать мне, и я исправлю в течение дня или оставить как получается, записать в баги, и я исправлю по завершению программинга
   2. Очень желательно создать структуру шаблонов, при которой в страницах разных разделов рамещены ссылки на разные CSS и JS. Сайт большой, поэтому это крайне необходимо для оптимизации его работы и упрощения визуальных доработок. Структуру, которая удобна с этой точки зрения можно посмотреть в `./build/client/templates`
      1. Базовые файлы `style.css`, `plugins.js` и `common.js` подключаются к default шаблону.
      2. Кроме них к каждому шаблону раздела из `client/templates/layouts` подключаются свои css и js файлы с типовым названием `template-name-tpl.*`
2. В проекте используется кастомная сборка, если нужно что-то поправить пользуясь ей, то файлы `gulpfile,js`, `package,json`, `package-lock.json` находятся в корне проекта
3. В проекте настроен lazy-loading изображений, который очень желательно оставить. Также, по возможности, необходимо настроить lazy-loading для загружаемых изображений для этого необходимо лишь использовать data-src вместо src и добавлять класс lazy на изображение
