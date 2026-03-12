import command from '../../config.json' assert {type: 'json'};
const cfg: any = command;

export const createResume = (): string[] => {
  const out: string[] = [];
  out.push("<br>");

  if (cfg.resumeLink) {
    out.push(
      `You can download my resume <a href="${cfg.resumeLink}" target="_blank">here</a>.`
    );
  } else {
    out.push("Resume link not available yet.");
  }

  out.push("<br>");
  return out;
};
