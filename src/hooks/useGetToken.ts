import React, { useEffect, useState } from "react";

type Props = {
  item: string;
};

const useGetToken = ({ item }: Props) => {
  const [returnItem, setReturnItem] = useState<string | null>(null);
  useEffect(() => {
    if (typeof window !== undefined) {
      setReturnItem(localStorage.getItem(item));
    }
  }, [item]);

  return returnItem;
};

export default useGetToken;
