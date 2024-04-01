import './index.css';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import {
  Outlet,
  Links,
  Meta,
  Scripts,
  ScrollRestoration,
} from '@remix-run/react';

const queryClient = new QueryClient();

export default function Root() {
  return (
    <html lang="en" className="h-screen w-screen">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Vite + React</title>
        <Meta />
        <Links />
      </head>
      <body className="h-full w-full">
        <div id="root" className="h-full w-full p-4">
          <QueryClientProvider client={queryClient}>
            <Outlet />
          </QueryClientProvider>
        </div>
        <Scripts />
        <ScrollRestoration />
      </body>
    </html>
  );
}
