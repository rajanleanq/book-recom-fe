"use client";
import ButtonComponent from "@/components/common/button/button";
import Rating from "@/components/common/rating/rating";
import { getUser } from "@/lib/getUser";
import { useGetBookByIdQuery } from "@/store/features/book/book.api";
import {
  useDeleteRatingsMutation,
  useGetUserRatingOnBookQuery,
} from "@/store/features/ratings/rating.api";
import { message } from "antd";
import Image from "next/image";
import { usePathname, useSearchParams } from "next/navigation";
import { useState } from "react";
import ReviewModal from "./review-modal";
import ReviewSection, { CommentLayout } from "./review-section";

export default function BookDescription({data}:{data:any}) {
  const searchParams = useSearchParams();
  const [modal, setModal] = useState<boolean>(false);
  const [deleteMutation] = useDeleteRatingsMutation();
  const [messageApi, contextHolder] = message.useMessage();

  let defaultImage =
    "https://images.unsplash.com/photo-1594026200204-a25bea256816?q=80&w=2946&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

  const {
    data: userReviewData,
    refetch,
    isLoading,
  } = useGetUserRatingOnBookQuery({
    userId: getUser()?.userId,
    bookId: searchParams?.get("bookId") as string,
    page_number: 1,
  });

  const handleDelete = async () => {
    await deleteMutation({
      bookId: searchParams?.get("bookId") as string,
      userId: getUser()?.userId,
    }).then(() => {
      messageApi.success("Review removed successfully");
    });
    refetch();
  };

  return (
    <div className="flex flex-row gap-10 items-center flex-wrap">
      <Image
        src={data?.data?.image_url ?? defaultImage}
        alt="book-image"
        className="rounded-lg w-[290px] h-[470px]"
        width={290}
        height={470}
      />
      <div className="flex flex-col gap-3">
        <p className="text-h1 text-primary-black font-h1">
          {data?.data?.title}
        </p>
        <p className="text-h4 text-primary-black font-link">
          {data?.data?.authors}
        </p>
        <p className="text-h4 font-h4 text-black">Brief Summary</p>
        <p className="text-p text-black text-justify">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
          vestibulum ante eget libero facilisis, vel mattis nunc convallis.
          Maecenas eget sagittis ligula. Proin malesuada sapien vitae justo
          tincidunt, at pulvinar arcu cursus. Nullam sodales tortor ac justo
          vestibulum, at ultricies nunc sagittis. Sed consectetur diam id purus
          consectetur, nec sodales tortor suscipit.
        </p>
        <div className="flex flex-row justify-between">
          <div className="flex flex-row gap-1">
            <Rating value={userReviewData?.average_rating} disabled />
            <p className="text-primary-black text-p capitalize">
              {userReviewData?.average_rating?.toFixed(2)}(
              {userReviewData?.totalCount} Ratings)
            </p>
          </div>
          <div className="flex flex-row gap-8">
            <p className="text-p text-primary-black font-link">
              Published On: {data?.data?.original_publication_year}
            </p>
            <p className="text-p text-red-600 font-link capitalize">
              Language: {data?.data?.language_code}
            </p>
          </div>
        </div>
        <div>
          {userReviewData?.currentUserRating && (
            <p className="text-p text-primary-black font-link mb-3 mt-4">
              Your review on this book:
            </p>
          )}
          {userReviewData?.currentUserRating && (
            <CommentLayout
              rating={userReviewData?.currentUserRating}
              review={userReviewData?.currentUserReview}
              active
              selfReview
              handleDelete={handleDelete}
            />
          )}
        </div>
        <div className="flex flex-row gap-8 mt-8">
          <ReviewSection />
          <div className="flex flex-row flex-wrap w-max  gap-4 h-max mt-8">
            <div className="flex flex-col gap-2">
              {userReviewData?.ratingCount?.map((p: any, index: number) => (
                <div className="flex gap-2" key={index}>
                  <Rating value={index + 1} disabled />
                  <p>({p})</p>
                </div>
              ))}
            </div>
            <ButtonComponent
              text={
                userReviewData?.currentUserRating
                  ? "Edit your Review"
                  : "Write a Review"
              }
              type="button"
              size="text-[12px]"
              bgColor="bg-primary-black"
              btnClick={() => setModal(true)}
            />
          </div>
        </div>
      </div>

      {!isLoading && (
        <ReviewModal
          handleCancel={() => setModal(false)}
          isModalOpen={modal}
          currentUserRating={userReviewData?.currentUserRating || 0}
          currentUserReview={userReviewData?.currentUserReview || ""}
          refetch={refetch}
        />
      )}
      {contextHolder}
    </div>
  );
}