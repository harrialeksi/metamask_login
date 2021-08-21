import React from 'react';
import { useDisclosure } from '@chakra-ui/react';
import { Layout, ConnectButton } from 'components';
import { AccountModal } from 'components/Modal/AccountModal';

const Home: React.FC = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Layout>
      <ConnectButton handleOpenModal={onOpen} />
      <AccountModal isOpen={isOpen} onClose={onClose} />
    </Layout>
  );
};

export default Home;
