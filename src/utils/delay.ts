export async function delay(time: number) {
  return await new Promise((resolver, _reject) => {
    setTimeout(resolver, time);
  });
}
