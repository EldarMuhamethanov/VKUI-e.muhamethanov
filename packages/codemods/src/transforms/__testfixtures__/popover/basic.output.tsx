import { Popover } from '@vkontakte/vkui';
import React from 'react';

const App = () => {
  return (
    <React.Fragment>
      <Popover trigger="click">content</Popover>

      <Popover offsetByMainAxis={0}>content</Popover>

      <Popover offsetByCrossAxis={0}>content</Popover>

      <Popover usePortal>content</Popover>

      <Popover usePortal={document.getElementById('root')}>content</Popover>

      <Popover usePortal={document.getElementById('root')}>content</Popover>

      <Popover hoverDelay={[5, 10]}>content</Popover>

      <Popover hoverDelay={5}>content</Popover>

      <Popover hoverDelay={[0, 5]}>content</Popover>
    </React.Fragment>
  );
};
