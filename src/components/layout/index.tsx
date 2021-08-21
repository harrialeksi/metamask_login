import React, { ReactNode } from 'react';
import { Flex } from '@chakra-ui/react';

type Props = {
  children?: ReactNode;
};

export const Layout: React.FC<Props> = ({children}) => {
  return (
    <Flex
      flexDirection='column'
      alignItems='center'
      justifyContent='center'
      h='100vh'
      bg='gray.800'
    >
      {children}
    </Flex>
  );
};
