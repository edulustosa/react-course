// import { useState } from 'react';

interface Props {
  name: string;
  email: string;
  age: number;
  isMarried: boolean;
  friends: string[];
  country: Country;
}

export enum Country {
  Brazil = 'Brazil',
  Canada = 'Canada',
  France = 'France',
}

export default function Person(props: Props) {
  // const [name, setName] = useState<string>('');

  return (
    <>
      <h1>Hello {props.name}</h1>
      <h2>Email: {props.email}</h2>
      <h2>Age: {props.age}</h2>
      <h2>Maried: {props.isMarried ? 'Yes' : 'No'}</h2>
      {props.friends.map((friend: string) => (
        <p>{friend}</p>
      ))}

      <h2>Country: {props.country}</h2>
    </>
  );
}
