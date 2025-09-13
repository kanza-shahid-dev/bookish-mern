import BookSingleCard from "./BookSingleCard";

const BooksCard = ({ books }: any) => {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {books.map((item: any, index: any) => (
        <BookSingleCard key={item._id} book={item} index={index} />
      ))}
    </div>
  );
};

export default BooksCard;
