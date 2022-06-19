import axios from "axios";

export const API_URL = 'https://hacker-news.firebaseio.com/v0';
export const NEW_URL = `${API_URL}/newstories.json`;
export const NEWS_URL = `${API_URL}/item/`;

export const getNews = async (newsId: string | undefined) => {
   try {
      const theNews = await axios.get(`${NEWS_URL + newsId}.json`).then(({ data }) => data);
      return theNews;
   }
   catch (error) {
      console.log('Ошибка, новость не найдена');
   }
}

export const getNewsArr = async () => {
   try {
      const { data: newsIds } = await axios.get(NEW_URL);
      const news = await Promise.all(newsIds.slice(0, 10).map(getNews));
      return news;
   }
   catch (error) {
      console.log('Ошибка, новости не найдены');
   }
}

export const getComments = async (kids: any[]) => {
   try {
      const comment = await Promise.all(kids.map(getNews));
      return comment;
   }
   catch (error) {
      console.log('Ошибка');
   }
}

