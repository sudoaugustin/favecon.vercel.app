import { useState } from 'react';
import copy from 'copy-to-clipboard';

const useClipboard = () => {
  const [clipboard, setClipboard] = useState(false);
  const handleCopy = text => {
    try {
      copy(text);
      setClipboard({ value: text });
      setTimeout(() => setClipboard({ value: false }), 1000);
    } catch (error) {
      setClipboard({ error });
    }
  };
  return [clipboard, handleCopy];
};

export default useClipboard;
