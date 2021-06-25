import { useState } from 'react';

import ModeButton from '@components/mode-button/ModeButton';
import Home from '@components/home/Home';
import Test from '@components/Test/Test';
import Layout from '@components/Layout';

const IndexPage = () => {
  const [mode, setMode] = useState('normal' as 'normal' | 'test');
  const [selectedGroup, setSelectedGroup] = useState(
    null as null | string
  );

  return (
    <Layout title="Home">
      <ModeButton
        mode={mode}
        setSelectedGroup={setSelectedGroup}
        hookFn={setMode}
      />
      {mode === 'normal' ? (
        <Home />
      ) : (
        <Test setMode={setMode} selectedGroup={selectedGroup} />
      )}
    </Layout>
  );
};

export default IndexPage;
