"use client";
import BookSkeletal from "@/components/common/BookSkeletal/BookSkeletal";
import Option from "@/components/common/input/option-input";
import SearchInput from "@/components/common/input/search-input";
import PaginationComponent from "@/components/common/pagination/pagination";
import ErrorMessage from "@/components/common/text/error-message";
import SectionTitle from "@/components/common/text/section-title";
import BookCard from "@/components/pages/book/book-card";
import { useGetSearchedBooksQuery } from "@/store/features/book/book.api";
import { useFormik } from "formik";
import { useState } from "react";
import * as Yup from "yup";

const validationSchema = Yup.object({
  search: Yup.string().required("Please enter search text"),
});

const Collection = () => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [pageLimitCount, setPageLimitCount] = useState<number>(10);

  const formik = useFormik({
    initialValues: {
      search: "",
      optionValue: "sort-average-rating",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      // Handle form submission here
    },
  });
  const { data, refetch, isLoading } = useGetSearchedBooksQuery({
    search: formik?.values?.search,
    optionValue: formik?.values?.optionValue,
    page: currentPage?.toString(),
    limit: pageLimitCount?.toString(),
  });

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
    refetch();
  };

  const handlePageSizeChange = (_: number, count: number) => {
    setPageLimitCount(count);
    refetch();
  };
  return (
    <div className="">
      <div className="flex justify-between items-end pt-4 pb-10">
        <form
          onSubmit={formik.handleSubmit}
          className="flex flex-col gap-1 w-max"
        >
          <SearchInput
            name="search"
            id="search"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.search}
          />
          {formik.touched.search && formik.errors.search && (
            <ErrorMessage text={formik.errors.search}></ErrorMessage>
          )}
        </form>
        <Option
          value={formik.values.optionValue}
          onChangeHandler={(target: any) =>
            formik.setFieldValue("optionValue", target?.target?.value)
          }
        />
      </div>
      <SectionTitle text="Our Books Collection" className="text-h4" />
      <div className="grid grid-cols-1 place-items-center sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
        {!isLoading
          ? data?.data?.map((p: any, index: number) => (
              <BookCard
                key={index + "recommend"}
                title={p?.title}
                rating={p?.average_rating}
                image={p?.image_url}
                author={p?.authors}
                language={p?.language_code}
                date={p?.original_publication_year}
                id={p?._id}
                bookId={p?.id}
              />
            ))
          : Array.from({ length: 4 }).map((_, index) => (
              <BookSkeletal key={index} />
            ))}
      </div>
      <PaginationComponent
        total={data?.totalCount}
        defaultCurrent={1}
        onChange={handlePageChange}
        onPageSizeChange={handlePageSizeChange}
      />
    </div>
  );
};

export default Collection;
