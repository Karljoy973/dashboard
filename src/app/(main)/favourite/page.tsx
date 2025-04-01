import FavouritePostsTable from "@/components/posts/FavouritePosts";

const FavouritePage = () => {
  return (
		<div className="mx-48">
			<FavouritePostsTable title="You liked these posts !" />
		</div>
  );
   
};

export default FavouritePage;
