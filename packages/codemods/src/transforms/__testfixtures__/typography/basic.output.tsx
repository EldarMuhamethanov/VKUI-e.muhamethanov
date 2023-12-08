import { Headline, Subhead, Title as VKUITitle } from '@vkontakte/vkui';
import React from 'react';
import '@vkontakte/vkui/dist/vkui.css';

const App = () => {
  return (
    <React.Fragment>
      <VKUITitle>6456</VKUITitle>
      <VKUITitle Component="h1">6456</VKUITitle>
      <VKUITitle level="1" Component="h1">6456</VKUITitle>
	    <VKUITitle level="2" Component="h2">6456</VKUITitle>
   	  <VKUITitle level="3" Component="h3">6456</VKUITitle>
      <VKUITitle Component="h4">6456</VKUITitle>
      <Headline />
      <Headline Component="h3" />
      <Headline Component="h4" />
      <Subhead boolValue />
	    <Subhead boolValue Component="h5" />
    </React.Fragment>
  );
};
