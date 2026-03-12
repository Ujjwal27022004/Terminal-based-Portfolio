import command from '../../config.json' assert {type: 'json'};

const cfg: any = command;

export const createContact = (): string[] => {
  const out: string[] = [];
  const SPACE = "&nbsp;";

  const EMAIL = "Email";
  const GITHUB = "Github";
  const LINKEDIN = "Linkedin";
  const INSTAGRAM = "Instagram";
  const PHONE = "Phone";

  out.push("<br>");

  const email = cfg.social?.email || "";
  const github = cfg.social?.github || "";
  const linkedin = cfg.social?.linkedin || "";
  const instagram = cfg.social?.Instagram || "";
  const phone = cfg.social?.phone || "";

  if (email) {
    let s = SPACE.repeat(2) + EMAIL + SPACE.repeat(17 - EMAIL.length) + `<a href='mailto:${email}'>${email}</a>`;
    out.push(s);
  }

  if (github) {
    let display = github.replace('https://', '');
    let s = SPACE.repeat(2) + GITHUB + SPACE.repeat(17 - GITHUB.length) + `<a href='${github}' target='_blank'>${display}</a>`;
    out.push(s);
  }

  if (linkedin) {
    let display = linkedin.replace('https://', '');
    let s = SPACE.repeat(2) + LINKEDIN + SPACE.repeat(17 - LINKEDIN.length) + `<a href='${linkedin}' target='_blank'>${display}</a>`;
    out.push(s);
  }

  if (instagram) {
    let display = instagram.replace('https://', '');
    let s = SPACE.repeat(2) + INSTAGRAM + SPACE.repeat(17 - INSTAGRAM.length) + `<a href='${instagram}' target='_blank'>${display}</a>`;
    out.push(s);
  }

  if (phone) {
    let s = SPACE.repeat(2) + PHONE + SPACE.repeat(17 - PHONE.length) + phone;
    out.push(s);
  }

  if (!email && !github && !linkedin && !instagram && !phone) {
    out.push("No contact information available yet.");
  }

  out.push("<br>");

  out.push("> Feel free to connect, collaborate, or just say hi!");
  out.push("<br>");
  return out;
};
