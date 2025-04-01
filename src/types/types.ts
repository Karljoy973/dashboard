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
  

  export interface AnalyticsItem {
    name: string;
    uniqueviews: number;
    pageviews: number;
    amount: number;
  }
  

export type PostTableProps = Partial<{
	limit: number;
	title: string;
}>;

export type PostsData = {
	id: number;
	title: string;
	body: string;
	authorid: number;
	datetime: string;
	isliked: boolean;
	comment_list_id: number[];
};

export type AuthorData = {
	id: number;
	username: string;
};