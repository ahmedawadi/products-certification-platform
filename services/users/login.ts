import { POST } from "@/lib/http-methods";
import type { LoginCredentials } from "@/types/auth";

export default async function loginOnServerSide(data: LoginCredentials) {
  try {
    const res = await POST("/auth/login", {}, data);

    localStorage.setItem("access", res.data.access);
    localStorage.setItem("refresh", res.data.refresh);

    return {
      ok: true,
      status: 204,
    };
  } catch (error) {
    throw Error("Probleme technique!");
  }
}
