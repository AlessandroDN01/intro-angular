import { Component, computed, signal } from '@angular/core';

@Component({
  selector: 'app-reactor-mission',
  templateUrl: './reactor-mission.html',
  styleUrl: './reactor-mission.css',
})
export class ReactorMission {
  // Writable signals are source state: controls can change them directly.
  protected readonly fuelLevel = signal(70);
  protected readonly coolantLevel = signal(80);
  protected readonly containmentStrength = signal(90);
  protected readonly reactorEngaged = signal(false);

  // WORKING EXAMPLE: this value is always derived from coolantLevel.
  protected readonly coolantStatus = computed(() => {
    if (this.coolantLevel() >= 70) {
      return 'Coolant reserve stable';
    }

    if (this.coolantLevel() >= 30) {
      return 'Coolant reserve low';
    }

    return 'Coolant failure imminent';
  });

  protected readonly reactorOutput = computed(() => {
    // TODO 1: Return the rounded average of the three source levels.
    return Math.round((this.fuelLevel() + this.coolantLevel() + this.containmentStrength()) / 3);
  });

  protected readonly reactorStatus = computed(() => {
    // TODO 2: Derive stable, unstable, or critical from reactorOutput().
    if (this.reactorOutput() >= 70) {
      return 'Reactor stable';
    }
    if (this.reactorOutput() >= 50) {
      return 'Reactor unstable';
    }
    return 'Reactor critical';
  });

  protected readonly reactorReady = computed(() => {
    // TODO 3: Require output >= 70, coolant >= 50, and containment >= 60.
    return this.reactorOutput() >= 70 && this.coolantLevel() >= 50 && this.containmentStrength() >= 60;
  });

  protected setCoolantLevel(level: number): void {
    this.coolantLevel.set(level);
    this.reactorEngaged.set(false);
  }

  protected loadStablePreset(): void {
    this.setReactorLevels(85, 80, 90);
  }

  protected loadUnstablePreset(): void {
    this.setReactorLevels(55, 55, 65);
  }

  protected loadCriticalPreset(): void {
    this.setReactorLevels(20, 15, 35);
  }

  protected engageReactor(): void {
    this.reactorEngaged.set(true);
  }

  private setReactorLevels(fuel: number, coolant: number, containment: number): void {
    this.fuelLevel.set(fuel);
    this.coolantLevel.set(coolant);
    this.containmentStrength.set(containment);
    this.reactorEngaged.set(false);
  }
}
