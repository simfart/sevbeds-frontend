# Медивера — аренда медицинского оборудования

Фронтенд сайта аренды медицинских кроватей и инвалидных кресел в Севастополе. На сайте можно ознакомиться с оборудованием, условиями доставки и установки, прочитать статьи и отправить заявку. Для управления статьями предусмотрена админка.

## Скриншоты

Главная страница работающего приложения по адресу `http://localhost:3000/`.

### Настольная версия

![Главная страница Медиверы — настольная версия](docs/screenshots/home-desktop.png)

### Мобильная версия

<img src="docs/screenshots/home-mobile.png" alt="Главная страница Медиверы — мобильная версия" width="390" />

## Технологии

- Next.js 15 с App Router, React 18 и TypeScript.
- Tailwind CSS 4 и Sass / CSS Modules.
- EmailJS для отправки заявок.
- Отдельный [бэкенд на Express и Prisma](https://github.com/simfart/sevbeds-backend) с SQLite, JWT-авторизацией и загрузкой изображений.

## Локальный запуск

Понадобятся Node.js и npm. Используйте актуальную LTS-версию Node.js, совместимую с зависимостями проекта.

### 1. Бэкенд

Клонируйте бэкенд рядом с фронтендом, если его ещё нет:

```bash
git clone https://github.com/simfart/sevbeds-backend.git
cd sevbeds-backend
npm ci
cp .env.example .env
```

В `.env` задайте собственный `JWT_SECRET`. Для локального запуска остальные значения из примера можно оставить:

```dotenv
DATABASE_URL="file:./dev.db"
JWT_SECRET=replace-with-your-own-random-secret
PORT=3001
UPLOAD_DIR=./uploads
```

Подготовьте базу и запустите API:

```bash
npm run db:generate
npm run db:push
npm run db:seed
npm run dev
```

API доступен на `http://localhost:3001`. Проверка работоспособности: `http://localhost:3001/api/health`.

Команда `db:seed` создаёт локального администратора: логин `admin`, пароль `admin123`. Эти тестовые данные не предназначены для публичного сервера. Новая база не содержит статей; их можно добавить через админку.

### 2. Фронтенд

В другом терминале откройте папку этого репозитория:

```bash
cd sevbeds-frontend
npm ci
npm run dev
```

Откройте [http://localhost:3000](http://localhost:3000). Админка доступна по адресу [http://localhost:3000/admin](http://localhost:3000/admin).

### Переменные окружения фронтенда

При необходимости создайте `.env` в корне фронтенда (этот файл исключён из Git):

```dotenv
NEXT_PUBLIC_API_URL=http://localhost:3001
NEXT_PUBLIC_SITE_URL=http://localhost:3000
NEXT_PUBLIC_EMAILJS_SERVICE=
NEXT_PUBLIC_EMAILJS_TEMPLATE=
NEXT_PUBLIC_EMAILJS_KEY=
```

| Переменная | Назначение |
| --- | --- |
| `NEXT_PUBLIC_API_URL` | Адрес бэкенда для статей и авторизации. Клиент по умолчанию использует `http://localhost:3001`; для получения статей в sitemap укажите значение явно. |
| `NEXT_PUBLIC_SITE_URL` | Базовый адрес для `sitemap.xml` и `robots.txt`; по умолчанию `http://localhost:3000`. |
| `NEXT_PUBLIC_EMAILJS_SERVICE` | Идентификатор сервиса EmailJS. |
| `NEXT_PUBLIC_EMAILJS_TEMPLATE` | Идентификатор шаблона EmailJS. |
| `NEXT_PUBLIC_EMAILJS_KEY` | Публичный ключ EmailJS. |

Для отправки заявок нужно заполнить все три настройки EmailJS. После изменения окружения перезапустите dev-сервер. Переменные с префиксом `NEXT_PUBLIC_` доступны в браузере: не храните в них секреты.

## Команды фронтенда

| Команда | Назначение |
| --- | --- |
| `npm run dev` | Запуск сервера разработки. |
| `npm run build` | Создание production-сборки. |
| `npm start` | Запуск предварительно собранного приложения. |
| `npm run lint` | Проверка кода ESLint. |
| `npm run lint:fix` | Проверка с автоматическим исправлением поддерживаемых правил. |

## Структура проекта

```text
src/
  app/         Маршруты Next.js, layout, метаданные и глобальные стили
  views/       Композиции страниц
  widgets/     Секции сайта: оборудование, форма заявки, статьи
  features/    Авторизация и управление статьями
  shared/      API-клиент, общие компоненты и ресурсы
public/        Статические файлы
docs/
  screenshots/ Скриншоты для README
```

Основные маршруты: `/`, `/servises/electric-hospital-beds`, `/servises/manual-hospital-beds`, `/servises/wheelchairs`, `/delivery-and-installation`, `/articles`, `/articles/[slug]`, `/admin` и `/admin/articles`.
