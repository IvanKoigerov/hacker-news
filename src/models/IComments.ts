export interface IComments {
   comment: {
      id: number,
      by: string,
      text: string,
      time: number,
      dead: boolean,
      kids: any[],
      deleted: boolean
   }
}