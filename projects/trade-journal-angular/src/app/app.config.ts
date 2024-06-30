import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

// import { provideHttpClient, withFetch } from '../shared/http';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { QueryClient, provideAngularQuery } from '@tanstack/angular-query-experimental';
import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideHttpClient(withFetch()),
    // provideHttpClient(),
    provideAngularQuery(
      new QueryClient({
        defaultOptions: {
          queries: {
            gcTime: 1000 * 60 * 60 * 24, // 24 hours
          },
        },
      }),
    ),
  ]
};
