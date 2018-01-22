const delay = (by = 2000) => new Promise(resolve => setTimeout(resolve, by));

const getCountFromAPI = () => delay()
  .then(() => 42);

export { getCountFromAPI };
