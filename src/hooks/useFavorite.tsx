import { CurrentUser } from "@/app/actions/getCurrentUser";
import { like } from "@/atom/user";
import { User } from "@prisma/client";
import axios from "axios";
import { useRouter } from "next/navigation";
import React, { useMemo } from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";

interface useFavoriteProps {
  productId: string;
}

const useFavorite = ({ productId}: useFavoriteProps) => {
  const router = useRouter();
  const likes = useRecoilValue(like);
  const setLikes = useSetRecoilState(like);
  const hasFavorite = useMemo(() => {
    const list: string[] = likes || [];
    return list.includes(productId);
  }, [likes, productId]);

  const toggleFavorite = async (e:React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation()
    try {
      let request;
      if (hasFavorite) {
        request = () => axios.delete(`/api/favorite/${productId}`);
      } else {
        request = () => axios.post(`/api/favorite/${productId}`);
      }
      const res = await request();
      setLikes(res.data.favorites);
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
