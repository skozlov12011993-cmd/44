let selectedKit: string | null = null;

export function setSelectedKit(name: string | null) {
  selectedKit = name;
}

export function getSelectedKit(): string | null {
  return selectedKit;
}
