import { Outlet } from 'react-router-dom';

export const Component = () => {
  return (
    <div className="h-full w-full p-4">
      <Outlet />
    </div>
  );
};
