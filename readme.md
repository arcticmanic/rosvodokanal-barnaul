# Росводоканал Барнаул
---
## Дисклеймер
Если что-то непонятно, вам кажется что какой-то момент реализован странно, какой-то кусок сделан неудобно/нестандартно или просто что-то сделано откровенно паршиво, пишите мне с любым вопросом в телеграм @fromaline 

1. Структура проекта (постарался соблюдать конвенцию разделения по разделам среди всех файлов)
```bash
├──build
│  ├──assets
│  │  ├──assets/fonts шрифты
│  │  ├──favlike иконки для различных устройств
│  │  ├──assets/css prod-ready css файлы
│  │  ├──assets/js prod-ready js файлы
│  │  └──assets/img готовые оптимизированные изображения, которые должны быть прездагружены на сайт
│  │
│  ├──users шаблоны для страниц "Абонентам"
│  ├──services шаблоны для страниц "Услуги"
│  ├──about шаблоны для страниц "О водоканале"
│  ├──purchases шаблоны для страниц "Закупки"
│  ├──career шаблоны для страниц "Карьера"
│  └──pressroom шаблоны для страниц "Пресс-центр"
│  
├──client
│  ├──data json-файлы для бокового меню
│  │  └──other-pages
│  │     └──sitemap.twig.json структура всего сайта с линками на соотвествующие шаблоны
│  │  
│  └──templates
│     ├──includes элементы в том или ином ключе используемые различными страницами
│     ├──layouts дефолтный шаблон, шаблоны для каждого раздела, шаблон для главной страницы
│     └──pages конкретные страницы, разбитые по разделам
│
├──js
│  ├──common
│  │  ├──core основной js
│  │  ├──onTop js папка для фукнций и переменных
│  │  ├──users-tpl js для страниц "Абонентам"
│  │  ├──services-tpl js для страниц "Услуги"
│  │  ├──about-tpl js для страниц "О водоканале"
│  │  ├──purchases-tpl js для страниц "Закупки"
│  │  ├──career-tpl js для страниц "Карьера"
│  │  └──pressroom js для страниц "Пресс-центр"
│  │  
│  └──plugins js плагины (список внизу)
│     └──polyfills js полифиллы для раличных древних бразуеров
│
├──less srс-вые less-файлы
│
├──scss src-вые scss-файлы
│
└──_bp в проект включать не нужно
```

2. Ни при каких обстоятельствах, ни в коем случае, НЕ редактировать конечные CSS файлы. Если что-то неверно стилизовано из-за того, что сегмент вёрстки в переданном виде несовместим с CMS, то написать мне, и я исправлю или оставить как получается, записать в баги, и я исправлю по завершению программинга

3. В проекте используется кастомная сборка, если нужно что-то поправить пользуясь ей, то файлы `gulpfile.js`, `package.json`, `package-lock.json` находятся в корне проекта

4. В проекте настроен lazy-loading изображений, который очень желательно оставить. Он представлен в двух видах:

   1. Для изображений в slick-carousel используется data-lazy вместо src
   2. Для изображений в текстовых блоках .text (которые являются wysiwyg-ами) используется data-src вместо src и инлайновые аттрибуты height и width
   3. Для изображений вне текстовых блоках нужен data-src, а также класс lazy к тегу `img` и инлайновые аттрибуты height и width

5. Также, по возможности, необходимо настроить lazy-loading для загружаемых изображений. Для этого необходимо:

   1. Использовать data-src вместо src
   2. Добавлять класс lazy тег `<img>`
      - Для загружаемых через визуальный редактор (которые попадают внутрь блока \*.text) НЕ нужно добавлять класс lazy, для них создан отдельный instance
   3. Добавить инлайновый height и width на основе размера изображения

6. Структуру всего сайта с перелинковкой можно посмотреть в `client/data/other-pages/sitemap.twig.json` и в виде готовой страницы `sitemap.html`

7. Сохранение состояния версии для слабовидящих в данный момент реализовано через localstorage, нужно использовать для этого cookie, наверное(?)

---
Используемые плагины:
1. https://jquerymodal.com/
2. http://t1m0n.name/air-datepicker/docs/
3. https://igorescobar.github.io/jQuery-Mask-Plugin/docs
4. https://github.com/verlok/lazyload
5. https://mmenujs.com/mmenu-light/
6. https://select2.org/
7. https://kenwheeler.github.io/slick/
9. https://github.com/josephschmitt/Clamp.js/
10. https://createjs.com/