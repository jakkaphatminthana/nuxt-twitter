export default async function (url, options = {}) {
  const { token } = useAuthStore();

  const headers = {
    ...(options.headers || {}),
    Authorization: `Bearer ${token}`,
  };

  return await $fetch(url, {
    ...options,
    headers,
  });
}
