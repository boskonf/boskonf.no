export type BosKonfYear = "2023" | "2024" | "2025" | "2026";

export type Program = {
  date: string;
  date_en?: string;
  location: string;
  location_en?: string;
  address: string;
  locationUrl: string;
  /**
   * URL to buy tickets
   */
  ticketUrl?: string;
  schedule: ProgramEvent[];
  sponsors: Sponsor[];
};

export type ProgramEvent = {
  title: string;
  title_en?: string;
  description: string;
  description_en?: string;
  speaker?: Speaker;
  image: string;
  from: string;
  to: string;
  type: "info" | "talk" | string;
  attachments?: EventAttachment[];
  videoUrl?: string;
};

export type EventAttachment = {
  name: "Presentasjon" | "Presentation" | string;
  name_en?: string;
  url: string;
};

export type Sponsor = {
  name: string;
  name_en?: string;
  logo: string;
  url: string;
  description?: string;
  description_en?: string;
};

export type Speaker = {
  name: string;
  name_en?: string;
  description: string;
  description_en?: string;
  imageUrl?: string | undefined;
};
