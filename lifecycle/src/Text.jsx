import { useEffect, useState } from 'react';

export default function Text() {
  const [text, setText] = useState('');

  useEffect(() => {
    console.log('Component mounted!');

    // Ação para quando o componente desmontar
    return () => {
      console.log('Component unmounted!');
    };

    // Se o array estiver vazio o hook so vai executar quando o componente montar
    // Para adicionar ações para estados coloque no array ex: [text]
  }, []);

  return (
    <div>
      <input type="text" onChange={(e) => setText(e.target.value)} />
      <h1>{text}</h1>
    </div>
  );
}
