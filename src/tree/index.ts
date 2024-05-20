const projects = ["Legenda Live", "Editor"] as const;
export type Projects = (typeof projects)[number];

export function getProject() {
  return projects;
}

export function getUi(project: Projects) {
  if (project === "Legenda Live") {
    return "Skylar UI";
  }
  if (project === "Editor") {
    return "Boostrap";
  }
}
