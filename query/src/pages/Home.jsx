import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

function Home() {
  const { data, isLoading, isError, refetch } = useQuery({
    queryKey: ['cat'],
    queryFn: async () => (await axios.get('https://catfact.ninja/fact')).data,
  });

  if (isError) return <h1>Sorry there was an error :(</h1>;

  if (isLoading) return <h1>Is Loading...</h1>;

  return (
    <>
      <h1>This is the home page</h1>
      <p>{data?.fact}</p>
      <button onClick={refetch}>Get another fact</button>
    </>
  );
}

export default Home;
