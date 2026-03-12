import command from '../../config.json' assert {type: 'json'};
const cfg: any = command;

export const createTimeline = (): string[] => {
  const out: string[] = [];
  out.push("<br>");

  if (Array.isArray(cfg.timeline) && cfg.timeline.length > 0) {
    cfg.timeline.forEach((item: string) => {
      out.push(item);
    });
  } else {
    out.push("No timeline data available yet.");
  }

  out.push("<br>");
  return out;
};
