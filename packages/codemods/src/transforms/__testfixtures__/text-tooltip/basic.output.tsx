import { Tooltip as TextTooltip } from '@vkontakte/vkui';
import React from 'react';

const App = () => {
  return (
    <React.Fragment>
      <TextTooltip
        offsetByCrossAxis={0}
        offsetByMainAxis={0}
        usePortal={someHTMLElement}
        getRootRef={getRef}
        hoverDelay={[5, 10]}>
        123
      </TextTooltip>

      <TextTooltip hoverDelay={5}>123</TextTooltip>

      <TextTooltip hoverDelay={[0, 5]}>123</TextTooltip>
    </React.Fragment>
  );
};
