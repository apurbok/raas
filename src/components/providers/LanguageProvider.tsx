"use client";

import { createContext, useContext, useEffect, useMemo, useState } from "react";

export type LangCode = "en" | "ar" | "zh";

type LanguageContextValue = {
  lang: LangCode;
  setLang: (lang: LangCode) => void;
  t: (key: string) => string;
};

const translations: Record<LangCode, Record<string, string>> = {
  en: {
    Home: "Home",
    About: "About",
    Services: "Services",
    Projects: "Projects",
    "Resources and Equipments": "Resources and Equipments",
    "HES & CSR": "HES & CSR",
    FAQ: "FAQ",
    Contact: "Contact",
    Search: "Search",
    Language: "Language",
    English: "English",
    "Saudi Arabia": "Saudi Arabia",
    Chinese: "Chinese",
    "Search the site…": "Search the site…",
    "No results": "No results found",
    "More Details": "More Details",
  },
  ar: {
    Home: "الرئيسية",
    About: "من نحن",
    Services: "الخدمات",
    Projects: "المشاريع",
    "Resources and Equipments": "الموارد والمعدات",
    "HES & CSR": "الصحة والسلامة والمسؤولية",
    FAQ: "الأسئلة الشائعة",
    Contact: "اتصل بنا",
    Search: "بحث",
    Language: "اللغة",
    English: "الإنجليزية",
    "Saudi Arabia": "المملكة العربية السعودية",
    Chinese: "الصينية",
    "Search the site…": "ابحث في الموقع…",
    "No results": "لا توجد نتائج",
    "More Details": "المزيد من التفاصيل",
  },
  zh: {
    Home: "首页",
    About: "关于我们",
    Services: "服务",
    Projects: "项目",
    "Resources and Equipments": "资源与设备",
    "HES & CSR": "健康环境安全与责任",
    FAQ: "常见问题",
    Contact: "联系我们",
    Search: "搜索",
    Language: "语言",
    English: "英语",
    "Saudi Arabia": "沙特阿拉伯",
    Chinese: "中文",
    "Search the site…": "搜索网站…",
    "No results": "未找到结果",
    "More Details": "了解更多",
  },
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<LangCode>("en");

  useEffect(() => {
    try {
      const saved = localStorage.getItem("rass-lang") as LangCode | null;
      if (saved === "en" || saved === "ar" || saved === "zh") {
        setLangState(saved);
      }
    } catch {
      /* ignore */
    }
  }, []);

  useEffect(() => {
    document.documentElement.lang = lang === "ar" ? "ar" : lang === "zh" ? "zh-CN" : "en";
    document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
    try {
      localStorage.setItem("rass-lang", lang);
    } catch {
      /* ignore */
    }
  }, [lang]);

  const value = useMemo<LanguageContextValue>(
    () => ({
      lang,
      setLang: setLangState,
      t: (key: string) => translations[lang][key] ?? translations.en[key] ?? key,
    }),
    [lang],
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) {
    return {
      lang: "en" as LangCode,
      setLang: () => undefined,
      t: (key: string) => key,
    };
  }
  return ctx;
}
