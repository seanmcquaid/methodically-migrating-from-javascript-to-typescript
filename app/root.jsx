import { Outlet } from '@remix-run/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import './index.css';

const queryClient = new QueryClient();

export default function Root() {
  return (
    <html lang="en" className="h-screen w-screen">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Vite + React</title>
      </head>
      <body className="h-full w-full ">
        <div id="root" className="h-full w-full p-4">
          <QueryClientProvider client={queryClient}>
            <Outlet />
          </QueryClientProvider>
        </div>
      </body>
    </html>
  );
}
