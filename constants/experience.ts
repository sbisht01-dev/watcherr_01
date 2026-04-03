export interface Milestone {
    year: string;
    title: string;
    company: string;
    duration?: string;
    current?: boolean;
    position: number; // Percentage 0 to 100
}

export const careerData: Milestone[] = [
    {
        year: "2019",
        title: "Started College",
        company: "B.Tech / Computer Science & Engineering",
        position: 0
    },
    {
        year: "March 2024",
        title: "UI Designer & Developer",
        company: "Dimension Financial",
        duration: "11 Months",
        position: 40 
    },
    {
        year: "March 2025",
        title: "UI UX Designer",
        company: "Tfrenzy Pvt Ltd",
        duration: "Current",
        current: true,
        position: 75
    },
    // {
    //     year: "2026",
    //     title: "Future",
    //     company: "Studio Saurabh",
    //     position: 100 
    // }
];