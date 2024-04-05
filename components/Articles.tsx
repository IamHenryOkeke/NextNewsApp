'use client'
import React from 'react'
import ReactPaginate from 'react-paginate';
import { useState, useEffect } from "react"
import ArticleCard from '@/components/ArticleCard';
import { NewsProp } from '@/components/ArticleCard';

interface ArticlesProp {
  data: NewsProp[],
}

export default function Articles({ data }: ArticlesProp) {
  const [currentItems, setCurrentItems] = useState<NewsProp[]>([]);
  const [itemOffset, setItemOffset] = useState<number>(0);
  const [pageCount, setPageCount] = useState<number>(0);

  const itemsPerPage = 10

  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;
    setCurrentItems(data.slice(itemOffset, endOffset))
    setPageCount(Math.ceil(data.length / itemsPerPage))
  }, [itemOffset, data])

  const handlePageClick = (event: any) => {
    const newOffset = (event.selected * itemsPerPage) % data.length;
    console.log(event.selected, itemsPerPage, newOffset)
    setItemOffset(newOffset);
  };

  return (
    <>
      <div className='flex flex-col gap-4 lg:mx-52'>
        {currentItems.map((item, index) => {
          return (
            <ArticleCard
              key={index}
              author={item.author}
              description={item.description}
              publishedAt={item.publishedAt}
              title={item.title} url={item.url}
              urlToImage={item.urlToImage}
              source={item.source}
            />
          )
        })}
      </div>
      <ReactPaginate
        breakLabel="..."
        nextLabel="Next"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel="Previous"
        renderOnZeroPageCount={null}
        containerClassName="list-none flex flex-wrap justify-center items-center gap-3 m-5 text-[12px] md:text-[15px] lg:text-[15px]"
        pageLinkClassName='page-num p-[10px] md:px-[15px] md:py-[8px] lg:px-[15px] lg:py-[8px] cursor-pointer rounded-[3px] font-normal hover:bg-gray-500'
        previousLinkClassName='px-2 py-1 bg-blue-500 rounded-[5px]'
        nextLinkClassName='bg-blue-500 px-2 py-1 bg-blue-500 rounded-[5px]'
        activeLinkClassName='active px-2 py-1 bg-blue-500 rounded-[5px]'
      />
    </>
  );
}
