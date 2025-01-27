export interface PostInterface {
  id: string;
  title: string;
  body: string;
  author: string;
  date: string;
  comments: PostComment[];
  like: boolean;
}

export interface PostComment {
  id: string;
  text: string;
  username: string;
}
