# Сайт-визитка психолога

Одностраничный сайт-визитка для частнопрактикующего психолога Светланы Алексеевой.

**Стек:** Astro 4 + Tailwind CSS v3, полностью статическая сборка.  
**Дизайн:** Function / warm apothecary journal — пергаментные тона, терракотовый акцент, Cormorant Garamond + Inter.

## Быстрый старт

```bash
npm install
npm run dev        # http://localhost:4321
```

## Команды

| Команда | Что делает |
|---------|------------|
| `npm run dev` | Dev-сервер с hot reload |
| `npm run build` | Статическая сборка в `dist/` |
| `npm run preview` | Предпросмотр собранного сайта |

## Деплой через Docker (личный сервер)

```bash
cp .env.example .env   # заполни SITE_URL и FORMSPREE_ENDPOINT
docker compose up -d --build
```

Сайт поднимается на порту **80** (nginx внутри контейнера). Переопределить порт — `PORT=8080` в `.env`.

После изменений:

```bash
docker compose up -d --build
```

### Деплой на Netlify / Vercel / GitHub Pages

Конфиги уже в репозитории (`netlify.toml`, `vercel.json`, `.github/workflows/deploy.yml`).  
Достаточно подключить репозиторий — сборка запустится автоматически.

Перед деплоем укажи домен в `astro.config.mjs`:

```js
site: process.env.SITE_URL || 'http://localhost:4322',
```

Или через переменную окружения в настройках хостинга: `SITE_URL=https://ваш-домен.ru`.

---

## Где менять контент

Всё в одном файле: **`src/content/site.ts`**

Все заглушки помечены `// TODO: заменить`.

### Контакты

```ts
contacts: {
  phone: '+7 (900) 000-00-00',  // отображаемый формат
  phoneRaw: '79000000000',       // только цифры, для tel: и wa.me/
  telegram: 'username',          // без @
  email: 'you@example.com',
},
```

### Тарифы

Массив `pricing` — добавляй и удаляй элементы, сетка перестроится сама:

```ts
{
  id: 'individual',
  title: 'Индивидуальная',
  subtitle: 'сессия',
  duration: '60 минут',
  price: 5000,
  currency: '₽',
  description: 'Онлайн или очно.',
  featured: true,                       // выделяет карточку рамкой
  badge: 'Чаще всего выбирают',
}
```

### Форма обратной связи (Formspree)

1. Зарегистрируйся на [formspree.io](https://formspree.io) → создай форму
2. Скопируй endpoint (вида `https://formspree.io/f/xxxxxxxx`)
3. Вставь в `site.ts`: `formspreeEndpoint: 'https://formspree.io/f/xxxxxxxx'`

### Отзывы

Включить / выключить целый блок: `showTestimonials: true | false` в `site.ts`.

---

## Акцентный цвет

**Терракота (по умолчанию):** `#b05a36`

**Лесной зелёный:** добавь `data-accent="green"` на тег `<html>` в `src/layouts/Layout.astro`:

```html
<html lang="ru" data-accent="green">
```

---

## Шрифты

- **Cormorant Garamond** — заголовки (roman + italic, кириллица)
- **Inter** — текст и интерфейс (300/400/600, кириллица)

Чтобы сменить шрифт: обнови ссылку на Google Fonts в `src/layouts/Layout.astro` и `fontFamily` в `tailwind.config.mjs`.

---

## Фото

Положи в `public/images/`:

| Файл | Описание |
|------|----------|
| `portrait-hero.jpg` | Основной портрет, тёплый свет, естественный фон, 4:5 или 3:4 |
| `portrait-about.jpg` | Менее формальный портрет, живая атмосфера |
| `og-image.jpg` | Open Graph для соцсетей, 1200×630 px |

Без стоковых метафор: никаких рукопожатий, мозгов, пазлов, бабочек, белого студийного фона.

---

## Страницы

| Путь | Описание |
|------|----------|
| `/` | Главная |
| `/styleguide` | Витрина дизайн-системы (для разработки) |
| `/privacy` | Политика конфиденциальности (шаблон, требует юрпроверки) |
