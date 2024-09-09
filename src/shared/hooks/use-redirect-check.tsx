import { useEffect, useState } from 'react';

import Cookies from 'js-cookie';
import { useLocation } from 'react-router-dom';

const getCookieKey = (path: string) => {
  // Определяем префикс для куки в зависимости от текущего URL
  if (path === '/') return 'main';
  return path.replace('/', '');
};

export const useRedirectCheck = () => {
  const location = useLocation(); // Используем useLocation для получения текущего пути
  const [shouldRedirect, setShouldRedirect] = useState(false);

  useEffect(() => {
    const currentPath = location.pathname; // Получаем текущий путь из react-router
    const cookieKey = getCookieKey(currentPath); // Определяем префикс для куки
    const storedPrediction = Cookies.get(`${cookieKey}_prediction`); // Ищем предсказание в куках

    // Если предсказание существует, значит, перенаправляем на страницу с результатом
    if (storedPrediction) {
      setShouldRedirect(true);
    } else {
      setShouldRedirect(false); // Если нет куки, перенаправляем на стартовую страницу
    }
  }, [location.pathname]); // Зависимость от изменения пути

  return shouldRedirect;
};
