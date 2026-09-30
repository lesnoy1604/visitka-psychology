# Сайт-визитка психолога Светланы Алексеевой

Одностраничный сайт-визитка. Astro + Tailwind CSS v3, статическая сборка.

## Запуск

```bash
npm install
npm run dev
```

Сайт откроется на http://localhost:4321

## Сборка для деплоя

```bash
npm run build
```

Статические файлы будут в папке `dist/`.

Для предварительного просмотра собранного сайта:

```bash
npm run preview
```

---

## Где менять тексты и данные

Все тексты, контакты, тарифы и флаги сосредоточены в одном файле:

**`src/content/site.ts`**

Что там есть:
- `name`, `title`, `description` — имя и мета-данные
- `contacts` — телефон, Telegram, e-mail. Все помечены `// TODO: заменить`
- `heroStats` — три факта под кнопками в hero-секции
- `about.paragraphs` — три абзаца «Обо мне»
- `about.credo` — курсивная цитата
- `services` — 6 карточек услуг (иконка, заголовок, описание, теги)
- `additionalTags` — инлайн-список дополнительных тем
- `approach.text` — текст о методе работы
- `education` — массив с образованием (год, учреждение, программа)
- `howItWorks` — 4 шага работы
- `pricing` — массив тарифов. Добавляйте и удаляйте тарифы — сетка адаптируется
- `showTestimonials` — `true`/`false`, включает/выключает блок отзывов
- `testimonials` — массив отзывов (цитата, имя, возраст)
- `faq` — массив вопросов и ответов
- `formspreeEndpoint` — endpoint для Formspree (оставьте `''`, если не используете форму)
- `emergencyPhone` — телефон доверия в подвале

Все заглушки помечены комментарием `// TODO: заменить`.

---

## Как поменять контакты

В `src/content/site.ts`, в объекте `contacts`:

```ts
contacts: {
  phone: '+7 (900) 000-00-00',    // отображаемый формат
  phoneRaw: '79000000000',         // только цифры, для tel: и wa.me/
  telegram: 'username',            // без @
  email: 'you@example.com',
},
```

---

## Как поменять тарифы

Отредактируйте массив `pricing` в `site.ts`. Пример элемента:

```ts
{
  id: 'individual',          // уникальный идентификатор
  title: 'Индивидуальная',   // крупный заголовок
  subtitle: 'сессия',        // eyebrow над заголовком
  duration: '60 минут',      // строка длительности
  price: 5000,               // число
  currency: '₽',
  description: 'Описание.',
  featured: true,            // выделяет карточку рамкой и бейджем
  badge: 'Чаще всего выбирают', // текст бейджа (только для featured)
}
```

Можно добавить любое число тарифов — сетка перестроится автоматически.

---

## Шрифты

Используются шрифты Google Fonts (кириллица):
- **Cormorant Garamond** — заголовки (roman + italic)
- **Inter** — текст и интерфейс (300/400/600)

Для смены шрифтов отредактируйте:
1. Ссылку на Google Fonts в `src/layouts/Layout.astro` (тег `<link>`)
2. Список `fontFamily` в `tailwind.config.mjs`

---

## Как поменять акцентный цвет

**Вариант А: Терракота (по умолчанию)**
Тег `<html>` без атрибута или с `data-accent=""`.
Цвет: `#b05a36`

**Вариант Б: Лесной зелёный («Ease Health»)**
Добавьте в `src/layouts/Layout.astro` атрибут `data-accent="green"` на тег `<html>`:

```html
<html lang="ru" data-accent="green">
```

Цвет: `#0f3e17`

Для добавления новых акцентов добавьте CSS в `src/styles/global.css`:

```css
html[data-accent="blue"] {
  --color-accent: #1a4a7a;
}
```

И переопределите класс `bg-accent`, `text-accent`, `border-accent` в Tailwind, либо используйте инлайн `style` с CSS-переменной.

---

## Подключение формы (Formspree)

1. Зарегистрируйтесь на [formspree.io](https://formspree.io)
2. Создайте форму и скопируйте endpoint (например `https://formspree.io/f/abcdef12`)
3. Вставьте его в `src/content/site.ts`:
```ts
formspreeEndpoint: 'https://formspree.io/f/abcdef12',
```

---

## Деплой

### Netlify

1. Загрузите папку `dist/` или подключите Git-репозиторий
2. Build command: `npm run build`
3. Publish directory: `dist`

### Vercel

```bash
npx vercel --prod
```

Vercel автоматически определяет Astro-проект.

### GitHub Pages

Добавьте в `astro.config.mjs`:

```js
export default defineConfig({
  site: 'https://yourusername.github.io',
  base: '/repo-name', // если не на корне домена
  integrations: [tailwind()],
  output: 'static',
});
```

Используйте GitHub Action для автодеплоя при пуше в main.

---

## Какие фото нужны

Положите в папку `public/images/`:

| Файл | Что нужно |
|------|-----------|
| `portrait-hero.jpg` | Основной портрет для hero. Тёплый свет, нейтральный или естественный фон (не белая студия), взгляд в камеру или чуть в сторону. Формат 4:5 или 3:4. |
| `portrait-about.jpg` | Портрет для раздела «Обо мне». Можно менее формальный, можно с ноутбуком или книгой. Тёплая, живая атмосфера. |
| `office.jpg` | Интерьер кабинета или рабочего места (необязательно). Тёплые тона, без ярко-белых стен. |
| `og-image.jpg` | Open Graph для соцсетей, 1200×630px. Можно portrait-hero с именем поверх. |

Что не подходит: стоковые фото с рукопожатиями, мозгами, пазлами, бабочками, «деревьями из людей», студийный белый фон, холодный свет.

---

## Страницы

- `/` — главная
- `/styleguide` — витрина дизайн-системы (для разработки)
- `/privacy` — политика конфиденциальности (шаблон, требует юрпроверки)
