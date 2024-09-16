import { useEffect, useState } from 'react';

import Cookies from 'js-cookie';

interface UsePredictionOptions {
  keyPrefix?: string; // Префикс для куки
  predictions: string[]; // Массив предсказаний
  cacheDurationHours?: number; // Продолжительность жизни куки в часах (по умолчанию 6 часов)
}

const getCookieKey = (path: string, keyPrefix?: string) => {
  // Определяем ключ для куки на основе URL страницы и опционального префикса
  const baseKey = path === '/' ? 'main' : path.replace('/', '');
  return keyPrefix ? `${keyPrefix}_${baseKey}` : baseKey;
};

const getRandomPrediction = (predictions: string[]) => {
  // Генерация случайного значения из массива предсказаний
  const randomIndex = Math.floor(Math.random() * predictions.length);
  return predictions[randomIndex];
};

export const usePrediction = ({
  keyPrefix,
  predictions,
  cacheDurationHours = 6, // По умолчанию срок действия куки 6 часов
}: UsePredictionOptions): string => {
  const [prediction, setPrediction] = useState('');

  useEffect(() => {
    const currentPath = window.location.pathname; // Получаем текущий путь страницы
    const cookieKey = getCookieKey(currentPath, keyPrefix); // Определяем ключ для куки
    const storedPrediction = Cookies.get(`${cookieKey}_prediction`);
    const lastVisit = Cookies.get(`${cookieKey}_timestamp`);

    const now = new Date().getTime();
    const cacheDurationMilliseconds = cacheDurationHours * 60 * 60 * 1000;

    // Проверяем, если есть кука и прошло меньше времени, чем указано в `cacheDurationHours`
    if (
      storedPrediction &&
      lastVisit &&
      now - parseInt(lastVisit) < cacheDurationMilliseconds
    ) {
      setPrediction(storedPrediction); // Используем сохраненное значение
    } else {
      // Генерируем новое значение, если прошло больше времени или куки нет
      const newPrediction = getRandomPrediction(predictions);
      setPrediction(newPrediction);

      // Обновляем куки
      Cookies.set(`${cookieKey}_prediction`, newPrediction, {
        expires: cacheDurationHours / 24,
      }); // Часы в дни
      Cookies.set(`${cookieKey}_timestamp`, now.toString(), {
        expires: cacheDurationHours / 24,
      });
    }
  }, [keyPrefix, predictions, cacheDurationHours]);

  return prediction; // Возвращаем значение предсказания
};
