// app.config.ts
// Punto centrale di configurazione dell'applicazione (sostituisce AppModule).
// Tutti i "provide*" qui sono tree-shakeable: solo ciò che usi finisce nel bundle.

import { ApplicationConfig, provideZoneChangeDetection } from "@angular/core";
import {
  provideRouter,
  withPreloading,
  PreloadAllModules,
} from "@angular/router";
import {
  provideHttpClient,
  withInterceptorsFromDi,
} from "@angular/common/http";
import { provideAnimations } from "@angular/platform-browser/animations";

import { routes } from "./app.routes";

export const appConfig: ApplicationConfig = {
  providers: [
    // Zone.js con coalescing: raggruppa più eventi in un solo ciclo di CD,
    // riducendo il numero di change detection runs.
    provideZoneChangeDetection({ eventCoalescing: true }),

    // Router con PreloadAllModules: le route lazy vengono precaricate in background
    // dopo il primo caricamento, così la navigazione successiva è istantanea.
    provideRouter(routes, withPreloading(PreloadAllModules)),

    // HttpClient: withInterceptorsFromDi permette di registrare interceptor
    // tramite DI (utile per auth token, error handling, ecc.)
    provideHttpClient(withInterceptorsFromDi()),

    // Animazioni Angular (richiesto da molte librerie UI e da @angular/animations)
    provideAnimations(),
  ],
};
