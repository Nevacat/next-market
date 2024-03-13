import { CurrentUser } from "@/app/actions/getCurrentUser";
import { User } from "@prisma/client";
import axios from "axios";
import { useRouter } from "next/navigation";
import React, { useMemo } from "react";

interface useFavoriteProps {
  productId: string;
  currentUser?: CurrentUser | null;
}

const useFavorite = ({ productId, currentUser }: useFavoriteProps) => {
  const router = useRouter();
  const hasFavorite = useMemo(() => {
    const list: string[] = currentUser?.favorites || [];
    return list.includes(productId);
  }, [currentUser, productId]);

  const toggleFavorite = async (e:React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation()
    try {
      let request;
      if (hasFavorite) {
        request = () => axios.delete(`/api/favorite/${productId}`);
      } else {
        request = () => axios.post(`/api/favorite/${productId}`);
      }
      await request();
      router.refresh()
    } catch (err: any) {
      err.response.status === 401 && router.push("/auth/login");
    }
  };
  return {
    hasFavorite,
    toggleFavorite,
  };
};

export default useFavorite;
