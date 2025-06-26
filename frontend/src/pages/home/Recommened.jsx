import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// import required modules
import { Navigation, Pagination } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { useFetchAllBooksQuery } from '../../redux/features/books/booksApi';
import BookCard from '../books/BookCard';


const Recommened = () => {
   

    const {data: books = []} = useFetchAllBooksQuery();
  return (
    <div className='py-16'>
         <h2 className='text-3xl font-semibold mb-6'>Recommended for you </h2>


         <Swiper
                         slidesPerView={1}
                         spaceBetween={30}
                         navigation={true}
                         breakpoints={{
                             640: {
                                 slidesPerView: 1,
                                 spaceBetween: 20,
                             },
                             768: {
                                 slidesPerView: 2,
                                 spaceBetween: 40,
                             },
                             1024: {
                                 slidesPerView: 2,
                                 spaceBetween: 50,
                             },
                             1180: {
                                 slidesPerView: 3,
                                 spaceBetween: 50,
                             }
                         }}
                         modules={[Pagination, Navigation]}
                         className="mySwiper"
                     >

                {
                   books.length > 0 && books.slice(8, 18).map((book, index) => (
                        <SwiperSlide key={index}>
                            <BookCard  book={book} />
                        </SwiperSlide>
                    ))
                }



            </Swiper>
    </div>
  )
}

export default Recommened