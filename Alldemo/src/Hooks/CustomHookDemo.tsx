import { useOnlineStatus } from './useOnlineStatus';

 export function StatusIndicator() {
  const isOnline = useOnlineStatus();

  return <p>{isOnline ? '🟢 Online' : '🔴 Offline'}</p>;
}
