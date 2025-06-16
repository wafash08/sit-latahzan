type PIC = {
  phone: string;
  message: string;
};

export function createWhatsappMessage({
  phone,
  message,
}: {
  phone: string;
  message: string;
}): string {
  const baseUrl = "https://wa.me";
  const text = encodeURIComponent(message);
  return `${baseUrl}/${phone}?text=${text}`;
}

export const picTk: PIC = {
  phone: "6285775349543",
  message: `Assalamu'alaikum Ustazah, boleh tahu informasi lebih lanjut tentang pendafataran TK As-salam Banyuasih Mauk? \nTerima kasih`,
};

export const picSd: PIC = {
  phone: "6285692248934",
  message: `Assalamu'alaikum Ustazah, boleh tahu informasi lebih lanjut tentang pendafataran SDIT LaTahzan Mauk? \nTerima kasih`,
};

export const picSmp: PIC = {
  phone: "6289508864213",
  message: `Assalamu'alaikum Ustazah, boleh tahu informasi lebih lanjut tentang pendafataran SMPIT LaTahzan Mauk? \nTerima kasih`,
};
