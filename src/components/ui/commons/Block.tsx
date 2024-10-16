import React from 'react';
import BlockTitle from './BlockTitle';
import classNames from 'classnames';

interface BlockInterface {
  title: string;
  lineBottom?: boolean;
  children: React.ReactNode;
}

export default function Block({ title, lineBottom, children }: BlockInterface) {
  return (
    <div
      className={classNames('mt-[80px] py-[50px]', {
        'border-b border-gray_bold': lineBottom,
      })}
    >
      <BlockTitle title={title} />
      {children}
    </div>
  );
}
