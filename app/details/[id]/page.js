import MovieDetails from '@/components/MovieDetails';
import SimilarMoves from '@/components/SimilarMove';

const DetailsPage = () => {
  return (
    <div>
      <MovieDetails />
      <div>
        <SimilarMoves />
      </div>
    </div>
  );
};

export default DetailsPage;
