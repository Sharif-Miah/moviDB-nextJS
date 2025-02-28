import Image from 'next/image';
import Link from 'next/link';

const TopRated = () => {
  return (
    <section className='mb-8'>
      <h2 className='text-2xl font-bold mb-4'>Top Rated</h2>
      <div
        id='topRatedMovies'
        className='flex space-x-4 overflow-x-auto pb-4'>
        <div className='flex-shrink-0 w-48 cursor-pointer hover:scale-105 transition-transform'>
          <Link href='/details'>
            <Image
              src='https://image.tmdb.org/t/p/original/9cqNxx0GxF0bflZmeSMuL5tnGzr.jpg'
              alt='The Shawshank Redemption'
              width={100}
              height={100}
              className='w-full rounded-lg'
            />
          </Link>
        </div>
        <div className='flex-shrink-0 w-48 cursor-pointer hover:scale-105 transition-transform'>
          <Link href='/details'>
            <Image
              src='https://image.tmdb.org/t/p/original/3bhkrj58Vtu7enYsRolD1fZdja1.jpg'
              alt='The Godfather'
              width={100}
              height={100}
              className='w-full rounded-lg'
            />
          </Link>
        </div>
        <div className='flex-shrink-0 w-48 cursor-pointer hover:scale-105 transition-transform'>
          <Link href='/details'>
            <Image
              src='https://image.tmdb.org/t/p/original/hek3koDUyRQk7FIhPXsa6mT2Zc3.jpg'
              alt='The Godfather Part II'
              width={100}
              height={100}
              className='w-full rounded-lg'
            />
          </Link>
        </div>
        <div className='flex-shrink-0 w-48 cursor-pointer hover:scale-105 transition-transform'>
          <Link href='/details'>
            <Image
              src='https://image.tmdb.org/t/p/original/sF1U4EUQS8YHUYjNl3pMGNIQyr0.jpg'
              alt="Schindler's List"
              width={100}
              height={100}
              className='w-full rounded-lg'
            />
          </Link>
        </div>
        <div className='flex-shrink-0 w-48 cursor-pointer hover:scale-105 transition-transform'>
          <Link href='/details'>
            <Image
              src='https://image.tmdb.org/t/p/original/ow3wq89wM8qd5X7hWKxiRfsFf9C.jpg'
              alt='12 Angry Men'
              width={100}
              height={100}
              className='w-full rounded-lg'
            />
          </Link>
        </div>
        <div className='flex-shrink-0 w-48 cursor-pointer hover:scale-105 transition-transform'>
          <Link href='/details'>
            <Image
              src='https://image.tmdb.org/t/p/original/39wmItIWsg5sZMyRUHLkWBcuVCM.jpg'
              alt='Spirited Away'
              width={100}
              height={100}
              className='w-full rounded-lg'
            />
          </Link>
        </div>
        <div className='flex-shrink-0 w-48 cursor-pointer hover:scale-105 transition-transform'>
          <Link href='/details'>
            <Image
              src='https://image.tmdb.org/t/p/original/lfRkUr7DYdHldAqi3PwdQGBRBPM.jpg'
              alt='Dilwale Dulhania Le Jayenge'
              width={100}
              height={100}
              className='w-full rounded-lg'
            />
          </Link>
        </div>
        <div className='flex-shrink-0 w-48 cursor-pointer hover:scale-105 transition-transform'>
          <Link href='/details'>
            <Image
              src='https://image.tmdb.org/t/p/original/qJ2tW6WMUDux911r6m7haRef0WH.jpg'
              alt='The Dark Knight'
              width={100}
              height={100}
              className='w-full rounded-lg'
            />
          </Link>
        </div>
        <div className='flex-shrink-0 w-48 cursor-pointer hover:scale-105 transition-transform'>
          <Link href='/details'>
            <Image
              src='https://image.tmdb.org/t/p/original/8VG8fDNiy50H4FedGwdSVUPoaJe.jpg'
              alt='The Green Mile'
              width={100}
              height={100}
              className='w-full rounded-lg'
            />
          </Link>
        </div>
        <div className='flex-shrink-0 w-48 cursor-pointer hover:scale-105 transition-transform'>
          <Link href='/details'>
            <Image
              src='https://image.tmdb.org/t/p/original/7IiTTgloJzvGI1TAYymCfbfl3vT.jpg'
              alt='Parasite'
              width={100}
              height={100}
              className='w-full rounded-lg'
            />
          </Link>
        </div>
        <div className='flex-shrink-0 w-48 cursor-pointer hover:scale-105 transition-transform'>
          <Link href='/details'>
            <Image
              src='https://image.tmdb.org/t/p/original/d5iIlFn5s0ImszYzBPb8JPIfbXD.jpg'
              alt='Pulp Fiction'
              width={100}
              height={100}
              className='w-full rounded-lg'
            />
          </Link>
        </div>
        <div className='flex-shrink-0 w-48 cursor-pointer hover:scale-105 transition-transform'>
          <Link href='/details'>
            <Image
              src='https://image.tmdb.org/t/p/original/vfJFJPepRKapMd5G2ro7klIRysq.jpg'
              alt='Your Name.'
              width={100}
              height={100}
              className='w-full rounded-lg'
            />
          </Link>
        </div>
        <div className='flex-shrink-0 w-48 cursor-pointer hover:scale-105 transition-transform'>
          <Link href='/details'>
            <Image
              src='https://image.tmdb.org/t/p/original/rCzpDGLbOoPwLjy3OAm5NUPOTrC.jpg'
              alt='The Lord of the 
              Rings: The Return of the King'
              width={100}
              height={100}
              className='w-full rounded-lg'
            />
          </Link>
        </div>
        <div className='flex-shrink-0 w-48 cursor-pointer hover:scale-105 transition-transform'>
          <Link href='/details'>
            <Image
              src='https://image.tmdb.org/t/p/original/wTnV3PCVW5O92JMrFvvrRcV39RU.jpg'
              alt='The Wild Robot'
              width={100}
              height={100}
              className='w-full rounded-lg'
            />
          </Link>
        </div>
        <div className='flex-shrink-0 w-48 cursor-pointer hover:scale-105 transition-transform'>
          <Link href='/details'>
            <Image
              src='https://image.tmdb.org/t/p/original/arw2vcBveWOVZr6pxd9XTd1TdQa.jpg'
              alt='Forrest Gump'
              width={100}
              height={100}
              className='w-full rounded-lg'
            />
          </Link>
        </div>
        <div className='flex-shrink-0 w-48 cursor-pointer hover:scale-105 transition-transform'>
          <Link href='/details'>
            <Image
              src='https://image.tmdb.org/t/p/original/bX2xnavhMYjWDoZp1VM6VnU1xwe.jpg'
              alt='The Good, the Bad and the Ugly'
              width={100}
              height={100}
              className='w-full rounded-lg'
            />
          </Link>
        </div>
        <div className='flex-shrink-0 w-48 cursor-pointer hover:scale-105 transition-transform'>
          <Link href='/details'>
            <Image
              src='https://image.tmdb.org/t/p/original/iAq0sq42vKTLneVGqHn1D4GzgrM.jpg'
              alt='Seven Samurai'
              width={100}
              height={100}
              className='w-full rounded-lg'
            />
          </Link>
        </div>
        <div className='flex-shrink-0 w-48 cursor-pointer hover:scale-105 transition-transform'>
          <Link href='/details'>
            <Image
              src='https://image.tmdb.org/t/p/original/aKuFiU82s5ISJpGZp7YkIr3kCUd.jpg'
              alt='GoodFellas'
              width={100}
              height={100}
              className='w-full rounded-lg'
            />
          </Link>
        </div>
        <div className='flex-shrink-0 w-48 cursor-pointer hover:scale-105 transition-transform'>
          <Link href='/details'>
            <Image
              src='https://image.tmdb.org/t/p/original/k9tv1rXZbOhH7eiCk378x61kNQ1.jpg'
              alt='Grave of the Fireflies'
              width={100}
              height={100}
              className='w-full rounded-lg'
            />
          </Link>
        </div>
        <div className='flex-shrink-0 w-48 cursor-pointer hover:scale-105 transition-transform'>
          <Link href='/details'>
            <Image
              src='https://image.tmdb.org/t/p/original/gCI2AeMV4IHSewhJkzsur5MEp6R.jpg'
              alt='Cinema Paradiso'
              width={100}
              height={100}
              className='w-full rounded-lg'
            />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default TopRated;
