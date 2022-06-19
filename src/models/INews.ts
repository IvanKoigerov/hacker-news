export interface INews {
   news: {
      id: string,
      by: string,
      time: number,
      score: string,
      title: string,
      dead: boolean,
      deleted: boolean,
      url: string,
      kids: number[],
   }
}
