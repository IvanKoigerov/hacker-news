export interface IComments {
   id: string,
   user: string,
   title: string,
   points: string,
   url: string,
   content: string,
   time: number,
   type: string,
   dead: boolean,
   deleted: boolean,
   comments: IComments[],
   comments_count: number

}


