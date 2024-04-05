import './index.css';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import {
  Outlet,
  Links,
  Meta,
  Scripts,
  ScrollRestoration,
} from '@remix-run/react';
import PropTypes from 'prop-types';

const queryClient = new QueryClient();

export function Layout({ children }) {
  return (
    <html lang="en" className="h-screen w-screen">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Vite + Remix</title>
        <Meta />
        <Links />
      </head>
      <body className="h-full w-full">
        <div id="root" className="h-full w-full p-4">
          <QueryClientProvider client={queryClient}>
            {children}
          </QueryClientProvider>
        </div>
        <Scripts />
        <ScrollRestoration />
      </body>
    </html>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default function Root() {
  return <Outlet />;
}
