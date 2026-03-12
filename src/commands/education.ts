import command from '../../config.json' assert {type: 'json'};
const cfg: any = command;

export const createEducation = (): string[] => {
  const out: string[] = [];
  out.push("<br>");

  if (Array.isArray(cfg.education) && cfg.education.length > 0) {
    cfg.education.forEach((item: string) => {
      out.push(item);
    });
  } else {
    out.push("No education data available yet.");
  }

  out.push("<br>");
  return out;
};
