import { useSelector } from 'react-redux';

export default function Home() {
  const name = useSelector((state: any) => state.user.value.username);
  return <h1>Hello {name}</h1>;
}
