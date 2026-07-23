/**
 * サイト全体で使う設定値。社名・連絡先などはここだけ変更すれば全ページに反映されます。
 */
export const SITE = {
  brandEn: "MICHIKAKU",
  brandJa: "ミチカク",
  tagline: "仕事に、道筋を。",
  representative: "毛利 元樹",
  title: "ミチカク | 事業が動く仕組みを設計するDX・業務改善支援",
  description:
    "顧客対応から社内業務、経営判断までの流れを整え、CRM、AI、業務システムを現場で使われる仕組みに落とし込むDX・業務改善支援です。",
  /**
   * 連絡導線はSNS(フォーム・メールは設置しない)。
   * facebookUrl を空にすると、Facebookボタンは表示されません。
   */
  linkedinUrl: "https://www.linkedin.com/in/morigenki-8573b0244/",
  facebookUrl: "https://www.facebook.com/profile.php?id=100010341284356",
} as const;
