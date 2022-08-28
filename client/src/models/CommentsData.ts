export interface CommentsData {
  id: string;
  user: string;
  title: string;
  points: string;
  url: string;
  content: string;
  time: number;
  type: string;
  dead: boolean;
  deleted: boolean;
  comments: CommentsData[];
  comments_count: number;
}
