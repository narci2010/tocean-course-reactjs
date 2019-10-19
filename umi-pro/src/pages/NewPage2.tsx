import React from 'react';

import styles from './NewPage2.css';
import { formatMessage } from 'umi-plugin-react/locale';
import ImageWrapper from '@/components/ImageWrapper/index.tsx'; // @ 表示相对于源文件根目录

export default function() {
  return (
    <div className={styles.normal}>
      <h1>
        {formatMessage({
          id: 'page.new2',
          defaultMessage: 'Page NewPage2',
        })}
      </h1>
      <ImageWrapper
        style={{ h: 'a' }}
        src="https://os.alipayobjects.com/rmsportal/mgesTPFxodmIwpi.png"
        desc="示意图"
      />
    </div>
  );
}
