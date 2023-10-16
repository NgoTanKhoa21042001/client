import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";

export async function handleSubmit(
  e: any,
  router: AppRouterInstance,
  avatarId: string
) {
  e.preventDefault();
  try {
    await fetch("/auth", {
      method: "POST",
      // Yêu cầu này chứa thông tin của người dùng, bao gồm tên, email và ID của avatar.
      body: JSON.stringify({
        name: e.target[0].value,
        email: e.target[1].value,
        imageId: `https://robohash.org/${avatarId}.png`,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    // nếu success thì sẽ chuyển hướng qua trang chat
    router.push("/chat");
  } catch (error) {
    console.log(error);
  }
}
