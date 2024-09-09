import { useEffect, useState } from 'react';

import Cookies from 'js-cookie';

import { PREDICTIONS } from 'shared/constants';

import { TypingText } from '..';

const getCookieKey = (path: string) => {
  // Определяем ключ для куки на основе URL страницы
  if (path === '/') return 'main';
  return path.replace('/', '');
};

const getRandomPrediction = () => {
  // Генерация случайного значения из массива PREDICTIONS
  const randomIndex = Math.floor(Math.random() * PREDICTIONS.length);
  return PREDICTIONS[randomIndex];
};

export const PredictionsComponent = () => {
  const [prediction, setPrediction] = useState('');
  const [cookieUpdated, setCookieUpdated] = useState(false);

  useEffect(() => {
    const currentPath = window.location.pathname; // Получаем текущий путь страницы
    const cookieKey = getCookieKey(currentPath); // Определяем префикс для куки
    const storedPrediction = Cookies.get(`${cookieKey}_prediction`);
    const lastVisit = Cookies.get(`${cookieKey}_timestamp`);

    const now = new Date().getTime();

    // Проверяем, если есть кука и прошло меньше 6 часов (6 * 60 * 60 * 1000 = 21600000 миллисекунд)
    if (storedPrediction && lastVisit && now - parseInt(lastVisit) < 21600000) {
      setPrediction(storedPrediction); // Отображаем сохраненное значение
    } else {
      // Генерируем новое значение, если прошло больше 6 часов или куки нет
      const newPrediction = getRandomPrediction();
      setPrediction(newPrediction);

      // Обновляем куки
      Cookies.set(`${cookieKey}_prediction`, newPrediction, { expires: 0.25 }); // 0.25 = 6 часов
      Cookies.set(`${cookieKey}_timestamp`, now.toString(), { expires: 0.25 });

      setCookieUpdated(true); // Обновляем состояние для ререндера
    }
  }, []);

  return (
    <div>
      <TypingText text={prediction} speed={100} />
    </div>
  );
};
