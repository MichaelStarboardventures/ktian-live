import { useState } from 'react';

export type EventProps = {
  eventName: 'edit' | 'publish' | 'save';
};

const useEvent = () => {
  const [eventName, setEventName] = useState<EventProps['eventName']>('save');

  return { eventName, setEventName };
};

export default useEvent;
