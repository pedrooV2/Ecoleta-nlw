import React from 'react';

// Com o TS precisamos definir a tipagem das propriedades do componente.
// é mais fácil de se fazer quando colocamos a função em uma constante

interface HeaderProps {
  title: string;
}

const Header: React.FC<HeaderProps> = (props) => {
  return (
    <header>
      <h1>{props.title}</h1>
    </header>
  );
}

export default Header;