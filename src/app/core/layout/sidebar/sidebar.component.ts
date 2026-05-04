// Usiamo ChangeDetectionStrategy.OnPush per performance:
// il componente si aggiorna solo quando cambiano gli input o i signals.
import {
  ChangeDetectionStrategy,
  Component,
  input,
  output,
  signal,
  computed,
} from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterLink, RouterLinkActive } from "@angular/router";

export interface MenuItem {
  id: string;
  label: string;
  route: string;
}

@Component({
  selector: "app-sidebar",
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: "./sidebar.component.html",
  styleUrls: ["./sidebar.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SidebarComponent {
  // input() signal-based (Angular 17+): più type-safe di @Input()
  userName = input<string>("");

  // output() signal-based: sostituisce @Output() + EventEmitter
  sectionSelected = output<string>();

  // Stato locale per menu hamburger mobile
  isMenuOpen = signal(false);

  // Iniziali utente derivate dall'input (computed si aggiorna automaticamente)
  userInitials = computed(() =>
    this.userName()
      .split(" ")
      .map((n) => n[0] ?? "")
      .join("")
      .toUpperCase()
      .slice(0, 2),
  );

  readonly menuItems: MenuItem[] = [
    { id: "conto-corrente", label: "Conto Corrente", route: "/conto-corrente" },
    { id: "investimenti", label: "Investimenti", route: "/investimenti" },
    { id: "polizze", label: "Polizze", route: "/polizze" },
    {
      id: "amministrazione",
      label: "Amministrazione",
      route: "/amministrazione",
    },
  ];

  selectSection(id: string): void {
    this.sectionSelected.emit(id);
    // Su mobile chiude il menu dopo la selezione
    this.isMenuOpen.set(false);
  }

  toggleMenu(): void {
    this.isMenuOpen.update((open) => !open);
  }
}
