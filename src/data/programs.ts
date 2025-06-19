type Program = {
  id: string;
  name: string;
  description: string;
  color?: string;
  featured?: boolean;
};

export const programs: Program[] = [
  {
    id: "1",
    name: "Tahfiz 1-3 Juz",
    description:
      "Program intensif untuk menghafal Al-Qur'an mulai dari 1 hingga 3 juz, dibimbing oleh guru yang berkompeten dan berpengalaman",
    featured: true,
    color: "#0B7BFF",
  },
  {
    id: "2",
    name: "Excellent Class",
    description:
      "Kelas khusus dengan pendekatan pembelajaran yang lebih mendalam untuk mengembangkan potensi akademik siswa secara optimal",
    color: "#1DC35F",
  },
  {
    id: "3",
    name: "Tahsin Metode Tilawati",
    description:
      "Pembelajaran membaca Al-Qur'an dengan metode Tilawati yang terbukti efektif dalam memperbaiki bacaan secara bertahap dan menyenangkan.",
    color: "#C931FF",
  },
  {
    id: "4",
    name: "Program Bilingual",
    description:
      "Pembelajaran dengan pendekatan dua bahasa (Bahasa Indonesia dan Bahasa Inggris).",
    color: "#FFAB2E",
  },
  {
    id: "5",
    name: "1 Kelas 2 Guru",
    description:
      "Setiap kelas didampingi oleh dua guru yang bekerja sama dalam proses belajar mengajar, memastikan perhatian maksimal terhadap perkembangan setiap siswa.",
    color: "#FF2E2E",
  },
  {
    id: "6",
    name: "Ekstrakurikuler Pilihan",
    description:
      "Beragam kegiatan ekstrakurikuler yang dapat dipilih sesuai minat dan bakat siswa untuk mendukung pengembangan diri secara menyeluruh.",
    color: "#4CBFF8",
  },
  {
    id: "7",
    name: "Pembiasaan Shalat Berjama’ah",
    description:
      "Pembentukan karakter melalui pembiasaan ibadah harian seperti Shalat Dhuha dan Shalat Berjama’ah guna menanamkan kedisiplinan.",
    color: "#A76545",
  },
];
