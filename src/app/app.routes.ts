import { Routes } from "@angular/router";

export const routes: Routes = [
  {
    path: "",
    pathMatch: "full",
    redirectTo: "dashboard",
  },
  {
    path: "dashboard",
    loadComponent: () =>
      import("./features/dashboard/dashboard.component").then(
        (m) => m.DashboardComponent,
      ),
  },
  {
    path: "conto-corrente",
    loadComponent: () =>
      import("./features/conto-corrente/conto-corrente/conto-corrente.component").then(
        (m) => m.ContoCorrenteComponent,
      ),
  },
  {
    path: "investimenti",
    loadComponent: () =>
      import("./features/investimenti/investimenti/investimenti.component").then(
        (m) => m.InvestimentiComponent,
      ),
  },
  {
    path: "polizze",
    loadComponent: () =>
      import("./features/polizze/polizze/polizze.component").then(
        (m) => m.PolizzeComponent,
      ),
  },
  {
    path: "amministrazione",
    loadComponent: () =>
      import("./features/amministrazione/amministrazione/amministrazione.component").then(
        (m) => m.AmministrazioneComponent,
      ),
  },
  {
    path: "**",
    redirectTo: "dashboard",
  },
];
