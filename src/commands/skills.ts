import command from '../../config.json' assert {type: 'json'};
const cfg: any = command;

export const createSkills = (): string[] => {
  const out: string[] = [];
  out.push("<br>");

  if (Array.isArray(cfg.skills) && cfg.skills.length > 0) {
    cfg.skills.forEach((item: string) => {
      out.push(item);
    });
  } else {
    out.push("No skills data available yet.");
  }

  out.push("<br>");
  return out;
};
