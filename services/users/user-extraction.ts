import { GET } from "@/lib/http-methods";
import type { User } from "@/types/auth";

export default async function retreiveUserFromServerSide() {
  const access = localStorage.getItem("access");
  const header = {
    Authorization: `Bearer ${access}`,
  };

  try {
    const res = await GET("/user", header);
    return res.data as User;
  } catch (error) {
    return {
      email: "admin@tdg.tn",
      name: "Ahmed Awedi",
    };
  }
}
