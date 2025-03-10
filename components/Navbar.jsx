import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className='fixed w-full z-50 bg-gradient-to-b from-black to-transparent'>
      <div className='container mx-auto px-4 py-6 flex justify-between items-center'>
        <div className='flex items-center'>
          <Link
            href='/'
            className='text-red-600 text-4xl font-bold'>
            MOVIE DB
          </Link>
          <div className='ml-8 space-x-4'>
            <Link
              href='/'
              className='text-white hover:text-gray-300'>
              Home
            </Link>
            <Link
              href='/compare'
              className='text-white hover:text-gray-300'>
              Compare Movies
            </Link>

            <Link
              href='/WatchList'
              className='text-white hover:text-gray-300'>
              Watch Later
            </Link>
            <Link
              href='/login'
              className='text-white hover:text-gray-300'>
              Login
            </Link>
          </div>
        </div>
        <div className='relative'>
          <input
            type='text'
            id='searchInput'
            placeholder='Search movies...'
            className='bg-black bg-opacity-50 text-white px-4 py-2 rounded border border-gray-600 focus:outline-none focus:border-white'
          />
          <div
            id='searchResults'
            className='absolute w-full mt-2 bg-black bg-opacity-90 rounded-lg hidden'></div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
