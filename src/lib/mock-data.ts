import { Work, ConsultationType } from "@/types/portfolio";
export const WORKS_DATA: Work[] = [
    {
        id: "union",
        title: "UNION",
        oneLiner: "学生団体連合の立ち上げと運営基盤の構築",
        role: "Founder / Operator",
        impact: "団体間連携を促進し、情報発信とイベント運営を継続的に実行",
        deliverables: "組織設計 / コンテンツ企画 / コミュニティ運営 / 事業譲渡・統合",
        tags: ["Community", "M&A", "Ops"],
        year: "2024",
        type: "Community",
        featured: true,
        status: "Published",
        slug: "union",
        url: "#"
    },
    {
        id: "regalis",
        title: "Regalis Japan Group",
        oneLiner: "学生向け×ラグジュアリーの成長戦略設計",
        role: "CMO",
        impact: "集客導線と発信設計を整備し、売上に繋がる運用を構築",
        deliverables: "ブランド設計 / SNS設計 / キャンペーン設計 / 営業設計",
        tags: ["Marketing", "Brand", "Sales"],
        year: "2022",
        type: "Community",
        featured: true,
        status: "Published",
        slug: "regalis",
        url: "#"
    },
    {
        id: "life-os",
        title: "Taiki Life OS",
        oneLiner: "個人の経営OSをNotion×Webで構築",
        role: "Designer / Builder",
        impact: "意思決定のノイズを削減し、行動速度を向上",
        deliverables: "DB設計 / 自動化フロー / Next.js実装 / 運用設計",
        tags: ["Notion", "Next.js", "Automation"],
        year: "2024",
        type: "Dev",
        featured: true,
        status: "Published",
        slug: "life-os",
        url: "#"
    }
];
export const CONSULTATION_TYPES: ConsultationType[] = [
    {
        title: "事業/プロダクトの言語化",
        desc: "あなたの頭の中にあるVisionを、投資家やユーザーに伝わる「言葉」と「要件」に翻訳します。",
        price: "Free (初回30min)",
        link: "#contact",
        recommendedFor: ["ピッチ資料を作りたい", "LPのCVRを上げたい", "要件定義がまとまらない"]
    },
    {
        title: "コミュニティ/メディア設計",
        desc: "「人が集まる仕組み」を設計し、熱量を維持しながら拡大するコミュニティ運用フローを構築します。",
        price: "Ask",
        link: "#contact",
        recommendedFor: ["DAO/コミュニティを作りたい", "アンバサダー制度を導入したい"]
    },
    {
        title: "Next.js 実装/開発",
        desc: "設計した要件を、拡張性の高いNext.jsアプリケーションとして最速で形にします。",
        price: "Ask",
        link: "#contact",
        recommendedFor: ["MVPを作りたい", "Notion連携サイトを作りたい"]
    }
];
