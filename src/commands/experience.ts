import command from '../../config.json' assert {type: 'json'};
// config.json has additional custom fields we reference dynamically
const cfg: any = command;

export const createExperience = (): string[] => {
  const out: string[] = [];
  out.push("<br>");

  if (Array.isArray(cfg.experience) && cfg.experience.length > 0) {
    cfg.experience.forEach((item: string) => {
      out.push(item);
    });
  } else {
    out.push("No experience data available yet.");
  }

  out.push("<br>");
  return out;
};
