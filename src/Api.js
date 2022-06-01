import axios from "axios";

export const API_URL = 'https://hacker-news.firebaseio.com/v0';
export const NEW_URL = `${API_URL}/newstories.json`;
export const NEWS_URL = `${API_URL}/item/`;

export const getNewsId = async () => {
   try {
      const result = await axios.get(NEW_URL).then(({ data }) => data);
      result.length = 100;
      return result;
   }
   catch (error) {
      console.log('Ошибка, новости не найдены');
   }
}

export const getNews = async (newsId) => {
   try {
      const result = await axios.get(`${NEWS_URL + newsId}.json`).then(({ data }) => data);
      return result;
   }
   catch (error) {
      console.log('Ошибка, новость не найдена');
   }
}